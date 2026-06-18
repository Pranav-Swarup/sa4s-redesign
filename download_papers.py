#!/usr/bin/env python3
"""
Bulk-download papers from dblp.bib.
- ArXiv:   always free, downloaded directly.
- IEEE / ACM / Springer: uses a requests.Session() so cookies from IP-auth
  are carried across redirects — run this on IIITH campus WiFi.

Usage:
    python3 download_papers.py
"""

import os
import re
import time
import sys

try:
    import requests
except ImportError:
    sys.exit("Install requests first:  pip3 install requests")

BIB_FILE   = "public/dblp.bib"
OUTPUT_DIR = "papers"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept": (
        "text/html,application/xhtml+xml,application/xml;q=0.9,"
        "application/pdf,*/*;q=0.8"
    ),
    "Accept-Language": "en-US,en;q=0.9",
    "Connection": "keep-alive",
}

# One shared session — carries cookies across all requests
SESSION = requests.Session()
SESSION.headers.update(HEADERS)


# ── BibTeX parser ─────────────────────────────────────────────────────────────

def parse_bib(path):
    with open(path, encoding="utf-8") as f:
        content = f.read()
    papers = []
    for entry in re.split(r"(?=@\w+\{)", content):
        entry = entry.strip()
        if not entry.startswith("@"):
            continue

        def get(name):
            m = re.search(rf"{name}\s*=\s*\{{(.+?)\}}", entry, re.I | re.S)
            return re.sub(r"\s+", " ", m.group(1)).strip() if m else ""

        title  = re.sub(r"[{}]", "", get("title")).strip()
        key_m  = re.match(r"@\w+\{(.+?),", entry)
        papers.append({
            "citekey": key_m.group(1).strip() if key_m else "unknown",
            "title":   title,
            "year":    get("year"),
            "eprint":  get("eprint"),
            "doi":     get("doi"),
            "url":     get("url"),
        })
    return papers


def safe_name(title, n=80):
    s = re.sub(r"[^\w\s-]", "", title)
    return re.sub(r"\s+", "_", s.strip())[:n]


def is_pdf(data: bytes) -> bool:
    return data[:4] == b"%PDF"


def save(data, path):
    with open(path, "wb") as f:
        f.write(data)


# ── Publisher helpers ─────────────────────────────────────────────────────────

def get_arxiv(eprint):
    r = SESSION.get(f"https://arxiv.org/pdf/{eprint}", timeout=30, allow_redirects=True)
    return r.content if is_pdf(r.content) else None


def get_ieee(doi):
    """
    1. Follow DOI → ieeexplore.ieee.org/document/<arnumber>  (sets IP-auth cookie)
    2. Hit stamp.jsp → parse iframe src (getPDF.jsp) → download PDF
    """
    doi_url = doi if doi.startswith("http") else f"https://doi.org/{doi}"
    r = SESSION.get(doi_url, timeout=30, allow_redirects=True)
    doc_url = r.url

    m = re.search(r"ieeexplore\.ieee\.org/document/(\d+)", doc_url)
    if not m:
        return None
    arnumber = m.group(1)

    stamp = f"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber={arnumber}"
    r2 = SESSION.get(stamp, timeout=30, allow_redirects=True,
                     headers={"Referer": doc_url})

    if is_pdf(r2.content):
        return r2.content

    # stamp.jsp embeds the real PDF via an iframe pointing to getPDF.jsp
    iframe = re.search(r'<iframe[^>]+src="(https://ieeexplore\.ieee\.org/stampPDF/getPDF\.jsp[^"]+)"',
                       r2.text)
    if not iframe:
        # fallback: any iframe src
        iframe = re.search(r'<iframe[^>]+src="([^"]+)"', r2.text)
    if not iframe:
        return None

    pdf_url = iframe.group(1)
    if not pdf_url.startswith("http"):
        pdf_url = "https://ieeexplore.ieee.org" + pdf_url

    r3 = SESSION.get(pdf_url, timeout=60, allow_redirects=True,
                     headers={"Referer": stamp})
    return r3.content if is_pdf(r3.content) else None


def get_acm(doi):
    """
    ACM DL: hit the abstract page first (sets cookie), then fetch the PDF.
    """
    abs_url = f"https://dl.acm.org/doi/{doi}"
    SESSION.get(abs_url, timeout=30, allow_redirects=True)   # sets cookies

    pdf_url = f"https://dl.acm.org/doi/pdf/{doi}"
    r = SESSION.get(pdf_url, timeout=30, allow_redirects=True,
                    headers={"Referer": abs_url})
    return r.content if is_pdf(r.content) else None


def get_springer(doi):
    """
    Springer: hit the chapter page, find the PDF link in the HTML.
    """
    doi_url = doi if doi.startswith("http") else f"https://doi.org/{doi}"
    r = SESSION.get(doi_url, timeout=30, allow_redirects=True)
    final = r.url

    # Look for PDF download link
    for pat in [
        r'"(/content/pdf/[^"]+\.pdf)"',
        r'"(https://link\.springer\.com/content/pdf/[^"]+\.pdf)"',
        r'href="([^"]+\.pdf)"',
    ]:
        m = re.search(pat, r.text)
        if m:
            pdf_url = m.group(1)
            if not pdf_url.startswith("http"):
                pdf_url = "https://link.springer.com" + pdf_url
            r2 = SESSION.get(pdf_url, timeout=30, allow_redirects=True,
                             headers={"Referer": final})
            if is_pdf(r2.content):
                return r2.content
    return None


def get_generic(url):
    r = SESSION.get(url, timeout=30, allow_redirects=True)
    return r.content if is_pdf(r.content) else None


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    papers = parse_bib(BIB_FILE)
    print(f"Found {len(papers)} entries\n")

    downloaded, failed = 0, []

    for p in papers:
        title  = p["title"] or p["citekey"]
        year   = p["year"] or "unknown"
        eprint = p["eprint"]
        doi    = p["doi"]
        url    = p["url"]

        out_dir = os.path.join(OUTPUT_DIR, year)
        os.makedirs(out_dir, exist_ok=True)
        dest = os.path.join(out_dir, safe_name(title) + ".pdf")

        if os.path.exists(dest):
            print(f"  [SKIP]  {title[:70]}")
            continue

        label = title[:65]
        data  = None

        try:
            if eprint:
                print(f"  [arXiv] {label}...", end=" ", flush=True)
                data = get_arxiv(eprint)
                time.sleep(1)

            if data is None and doi and "10.1109" in doi:
                print(f"\n  [IEEE]  {label}...", end=" ", flush=True)
                data = get_ieee(doi)
                time.sleep(1.5)

            if data is None and doi and "10.1145" in doi:
                print(f"\n  [ACM]   {label}...", end=" ", flush=True)
                data = get_acm(doi)
                time.sleep(1.5)

            if data is None and doi and "10.1007" in doi:
                print(f"\n  [SPGR]  {label}...", end=" ", flush=True)
                data = get_springer(doi)
                time.sleep(1.5)

            if data is None and url:
                print(f"\n  [URL]   {label}...", end=" ", flush=True)
                data = get_generic(url)
                time.sleep(1)

        except Exception as e:
            print(f"\n    ⚠ Exception: {e}")

        if data:
            save(data, dest)
            print(f"✓  →  {dest}")
            downloaded += 1
        else:
            print("✗ FAILED")
            failed.append(p)

    print(f"\n{'='*60}")
    print(f"✅  Downloaded : {downloaded}")
    print(f"❌  Failed     : {len(failed)}")

    if failed:
        print("\nStill needs manual download:")
        for p in failed:
            print(f"  [{p['year']}] {p['title'][:70]}")
            if p["url"]:
                print(f"         {p['url']}")


if __name__ == "__main__":
    main()
