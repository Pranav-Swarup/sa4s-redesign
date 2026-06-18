"""
LinkedIn Posts → News Markdown Auto-Updater

Scrapes LinkedIn activity feed posts and generates news .md files
for the SA4S website using the Gemini API.

Usage:
    /tmp/li_env/bin/python linkedin_to_news.py

Requires:
    - LI_AT_COOKIE: LinkedIn session cookie (in .env or env var)
    - GEMINI_API_KEY: Google Gemini API key (in .env or env var)
"""

import os
import json
import re
import time
import logging
from pathlib import Path
from datetime import datetime

import requests
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
from google import genai
from google.genai import types
from dotenv import load_dotenv

# --- Configuration ---
load_dotenv()

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Paths
SCRIPT_DIR = Path(__file__).parent
NEWS_DIR = SCRIPT_DIR / "src" / "data" / "news"
PROCESSED_FILE = SCRIPT_DIR / "processed_posts.json"
PROFILE_URL = "https://www.linkedin.com/in/karthikv1392/recent-activity/all/"
MAX_FEED_SCROLLS = 20
SCROLL_STABLE_LIMIT = 2

# Credentials
LI_AT_COOKIE = os.getenv("LI_AT_COOKIE", "")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")


# --- Date Extraction ---

def extract_date_from_activity_id(activity_id: str) -> tuple[str, str]:
    """Extracts the timestamp from a LinkedIn activity URN/ID."""
    try:
        timestamp_ms = int(activity_id) >> 22
        dt = datetime.fromtimestamp(timestamp_ms / 1000.0)
        return dt.strftime("%Y-%m-%d"), dt.strftime("%d %B %Y")
    except Exception:
        now = datetime.now()
        return now.strftime("%Y-%m-%d"), now.strftime("%d %B %Y")


# --- Stage 1: Scrape Activity Feed with Playwright ---

def get_activity_ids_from_feed() -> list[str]:
    """
    Uses Playwright to load the LinkedIn activity feed page,
    waits for JS to render posts, and extracts activity IDs.
    """
    logger.info("Stage 1: Scraping activity feed for post IDs...")

    activity_ids = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                       "AppleWebKit/537.36 (KHTML, like Gecko) "
                       "Chrome/145.0.0.0 Safari/537.36"
        )

        # Inject LinkedIn session cookie
        context.add_cookies([{
            "name": "li_at",
            "value": LI_AT_COOKIE,
            "domain": ".linkedin.com",
            "path": "/",
            "httpOnly": True,
            "secure": True,
            "sameSite": "None",
        }])

        page = context.new_page()

        logger.info(f"  Navigating to {PROFILE_URL}")
        page.goto(PROFILE_URL, wait_until="domcontentloaded", timeout=30000)

        # Wait for feed content to load (LinkedIn loads posts via JS)
        logger.info("  Waiting for feed posts to render...")
        try:
            page.wait_for_selector(
                '[data-urn*="activity"], [data-id*="activity"], .feed-shared-update-v2',
                timeout=15000
            )
        except Exception:
            logger.warning("  Selector timeout — trying scroll-based approach...")

        # Scroll until the feed stops yielding new activity IDs.
        previous_count = 0
        stable_iterations = 0
        for i in range(MAX_FEED_SCROLLS):
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            time.sleep(2)
            html = page.content()
            current_count = len(set(re.findall(r'urn:li:activity:(\d+)', html)))
            if current_count == previous_count:
                stable_iterations += 1
            else:
                stable_iterations = 0
            previous_count = current_count
            if stable_iterations >= SCROLL_STABLE_LIMIT:
                break

        # Extract the full HTML
        html = page.content()
        browser.close()

    # Parse activity IDs from the rendered HTML
    # LinkedIn uses URNs like: urn:li:activity:7431368154003623936
    # They appear in data attributes, hrefs, and embedded JSON
    urn_pattern = re.compile(r'urn:li:activity:(\d+)')
    found_ids = urn_pattern.findall(html)
    activity_ids = sorted(set(found_ids), reverse=True)  # Most recent first

    # Also try to extract from data-urn attributes
    soup = BeautifulSoup(html, "html.parser")
    for elem in soup.find_all(attrs={"data-urn": True}):
        urn = elem.get("data-urn", "")
        match = re.search(r'activity:(\d+)', urn)
        if match:
            aid = match.group(1)
            if aid not in activity_ids:
                activity_ids.append(aid)

    logger.info(f"  Found {len(activity_ids)} unique activity IDs")
    return activity_ids


# --- Stage 2: Fetch Post Content (Public, No Auth) ---

def fetch_post_content(activity_id: str) -> dict | None:
    """
    Fetches a single LinkedIn post's content from its public page.
    LinkedIn exposes the full post text in OG meta tags.
    """
    # Try the direct post URL first
    url = f"https://www.linkedin.com/feed/update/urn:li:activity:{activity_id}"

    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                       "AppleWebKit/537.36 (KHTML, like Gecko) "
                       "Chrome/145.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    }

    try:
        resp = requests.get(url, headers=headers, timeout=15, allow_redirects=True)
        if resp.status_code != 200:
            logger.warning(f"  POST {activity_id}: HTTP {resp.status_code}")
            return None

        soup = BeautifulSoup(resp.text, "html.parser")

        # Extract OG description (full post text)
        og_desc = soup.find("meta", property="og:description")
        content = og_desc["content"] if og_desc else ""

        # Extract OG title
        og_title = soup.find("meta", property="og:title")
        title = og_title["content"] if og_title else ""

        # Extract OG image (if any)
        og_image = soup.find("meta", property="og:image")
        image = og_image["content"] if og_image else ""

        # Try to extract date from the page
        # LinkedIn embeds datetime in various meta tags
        date_meta = soup.find("meta", {"name": "date"})
        pub_date = date_meta["content"] if date_meta else None

        if not content:
            logger.warning(f"  POST {activity_id}: No content found in OG tags")
            return None

        return {
            "activity_id": activity_id,
            "url": url,
            "title": title,
            "content": content,
            "image": image,
            "date": pub_date,
        }

    except Exception as e:
        logger.error(f"  POST {activity_id}: Error fetching - {e}")
        return None


def fetch_all_posts(activity_ids: list[str], processed_ids: set[str]) -> list[dict]:
    """Fetches content for all unprocessed activity IDs within the last 30 days."""
    logger.info("Stage 2: Fetching post content (public pages)...")

    new_posts = []
    for aid in activity_ids:
        if aid in processed_ids:
            logger.info(f"  Skipping {aid} (already processed)")
            continue

        # Skip posts older than 30 days to save API calls
        base_date, _ = extract_date_from_activity_id(aid)
        try:
            post_dt = datetime.strptime(base_date, "%Y-%m-%d")
            if (datetime.now() - post_dt).days > 30:
                logger.info(f"  ⏭️ Skipping {aid} (older than 30 days, date: {base_date})")
                continue
        except Exception:
            pass

        logger.info(f"  Fetching post {aid}...")
        post = fetch_post_content(aid)
        if post:
            new_posts.append(post)
        time.sleep(1)  # Be polite

    logger.info(f"  Fetched {len(new_posts)} new posts")
    return new_posts


# --- Stage 3: Generate News Markdown with Gemini ---

def load_example_news() -> str:
    """Loads 3 existing news files as few-shot examples for the LLM."""
    examples = []
    news_files = sorted(NEWS_DIR.glob("*.md"), reverse=True)

    for f in news_files[:3]:
        examples.append(f"--- Example: {f.name} ---\n{f.read_text()}")

    return "\n\n".join(examples)


def generate_news_md(post: dict, gemini_client, examples: str) -> str | None:
    """Uses Gemini to convert a LinkedIn post into a news .md file."""

    image_instruction = f"\n**Image Rule:** Include this image at the top of the body text (right after the frontmatter): `![Post Image]({post['image']})`\n" if post.get("image") else ""

    prompt = f"""You are a content editor for the SA4S (Software Architecture for Sustainability) research group website at IIIT Hyderabad.

Your task: Convert the following LinkedIn post from the group's lead (Karthik Vaidhyanathan) into a clean, professional news entry for the SA4S website.

**CRITICAL FILTERING RULE:**
If the post is a generic opinion, sharing an unrelated article, or about something/someone completely unrelated to the SA4S research group, you MUST output exactly and ONLY the string: `SKIP_POST`. Do not generate any markdown.

**Output format (if relevant to SA4S):**
```
---
date: "DD Month YYYY"
headline: "Short, professional headline"
sourceUrl: "https://www.linkedin.com/feed/update/urn:li:activity:..."
---

Body text here in markdown...
```

**Content Rules:**
1. The news MUST focus only on the SA4S research group, its members (like Karthik Vaidhyanathan and his students), their papers, and their achievements.
2. EXCLUDE names and detailed descriptions of people who are not part of the SA4S research group (e.g., external panel members, workshop co-organizers, general attendees). Keep the focus on what the SA4S members did.
3. Do NOT include conversational social media filler ("Excited to share", "I am happy to announce").
4. Do NOT use meta-phrases like "The full paper is available at this link". Instead, cleanly hyperlink the paper title directly, e.g., "[**CALM**](url)", or use a simple "[Read the paper](url)".
5. Write in a professional, third-person academic tone ("Karthik Vaidhyanathan presented..." instead of "I presented...").
6. The `date` field must be EXACTLY "{post['date']}".
7. The `sourceUrl` field must be EXACTLY "{post['url']}".{image_instruction}

**Here are examples of existing news entries on the website for style reference:**

{examples}

**LinkedIn Post to convert:**

Title: {post['title']}

Content:
{post['content']}
"""

    max_retries = 3
    for attempt in range(max_retries):
        try:
            response = gemini_client.models.generate_content(
                model="gemini-3-flash-preview",
                contents=[prompt],
            )
            result = response.text.strip()
            
            if "SKIP_POST" in result:
                return "SKIP_POST"

            # Clean up: remove any code fences the LLM might add
            result = re.sub(r'^```(?:markdown|md)?\s*\n', '', result)
            result = re.sub(r'\n```\s*$', '', result)

            # Validate the output has frontmatter
            if not result.startswith("---"):
                logger.warning(f"  Generated content missing frontmatter, attempting fix...")
                result = (
                    f'---\n'
                    f'date: "{post["date"]}"\n'
                    f'headline: "{post["title"][:80]}"\n'
                    f'sourceUrl: "{post["url"]}"\n'
                    f'---\n\n{result}'
                )

            # Ensure sourceUrl is preserved even if the model omits it.
            if "sourceUrl:" not in result:
                result = result.replace(
                    "---\n",
                    f'---\nsourceUrl: "{post["url"]}"\n',
                    1,
                )

            return result

        except Exception as e:
            if "503" in str(e) or "429" in str(e) or "quota" in str(e).lower():
                logger.warning(f"  Rate limit or 503 error (attempt {attempt+1}/{max_retries}). Waiting 120s...")
                time.sleep(120)
            else:
                logger.error(f"  Gemini error for post {post['activity_id']}: {e}")
                return None
    
    logger.error(f"  Failed to generate markdown for {post['activity_id']} after {max_retries} attempts.")
    return None


def determine_filename(md_content: str) -> str:
    """Extracts the date from frontmatter and creates a filename like 2026-02-23.md"""
    # Try to parse the date from frontmatter
    date_match = re.search(r'date:\s*"(\d+ \w+ \d{4})"', md_content)
    if date_match:
        try:
            dt = datetime.strptime(date_match.group(1), "%d %B %Y")
            base = dt.strftime("%Y-%m-%d")
        except ValueError:
            base = datetime.now().strftime("%Y-%m-%d")
    else:
        base = datetime.now().strftime("%Y-%m-%d")

    # Handle date collisions
    filename = f"{base}.md"
    if (NEWS_DIR / filename).exists():
        # Try appending a suffix
        for i in range(2, 10):
            filename = f"{base}-{i}.md"
            if not (NEWS_DIR / filename).exists():
                break

    return filename


# --- Tracking ---

def load_processed_ids() -> set[str]:
    """Load previously processed activity IDs."""
    if PROCESSED_FILE.exists():
        return set(json.loads(PROCESSED_FILE.read_text()))
    return set()


def save_processed_ids(ids: set[str]):
    """Save processed activity IDs."""
    PROCESSED_FILE.write_text(json.dumps(sorted(ids), indent=2))


# --- Main ---

def main():
    logger.info("=" * 60)
    logger.info("LinkedIn Posts → News Markdown Auto-Updater")
    logger.info("=" * 60)

    # Validate config
    if not LI_AT_COOKIE or LI_AT_COOKIE == "your_li_at_cookie_here":
        logger.error("LI_AT_COOKIE is not set. Add it to .env or set as environment variable.")
        return

    if not GEMINI_API_KEY or GEMINI_API_KEY == "your_gemini_api_key_here":
        logger.error("GEMINI_API_KEY is not set. Add it to .env or set as environment variable.")
        return

    # Initialize Gemini
    logger.info("Initializing Gemini client...")
    gemini_client = genai.Client(api_key=GEMINI_API_KEY)

    # Load tracking data
    processed_ids = load_processed_ids()
    logger.info(f"Previously processed posts: {len(processed_ids)}")

    # Stage 1: Get activity IDs from feed
    activity_ids = get_activity_ids_from_feed()
    if not activity_ids:
        logger.warning("No activity IDs found. The page may not have loaded correctly.")
        return

    # Stage 2: Fetch post content
    new_posts = fetch_all_posts(activity_ids, processed_ids)
    if not new_posts:
        logger.info("No new posts to process. All caught up!")
        return

    # Stage 3: Generate news markdown
    logger.info("Stage 3: Generating news markdown with Gemini...")
    examples = load_example_news()

    created_files = []
    for post in new_posts:
        base_date, formatted_date = extract_date_from_activity_id(post["activity_id"])
        post["date"] = formatted_date
        
        primary_filename = f"{base_date}.md"
        if (NEWS_DIR / primary_filename).exists() or any(f.endswith(primary_filename) for f in created_files):
            logger.info(f"  ⏭️  Skipping post {post['activity_id']} because a news entry for {base_date} already exists.")
            processed_ids.add(post["activity_id"])
            continue

        logger.info(f"  Generating markdown for post {post['activity_id']} (Date: {formatted_date})...")
        md_content = generate_news_md(post, gemini_client, examples)

        if md_content == "SKIP_POST":
            logger.info(f"  ⏭️  LLM discarded post {post['activity_id']} as irrelevant to SA4S.")
            processed_ids.add(post["activity_id"])
        elif md_content:
            filename = determine_filename(md_content)
            filepath = NEWS_DIR / filename
            filepath.write_text(md_content + "\n")
            logger.info(f"  ✅ Created: {filepath}")
            created_files.append(str(filepath))
            processed_ids.add(post["activity_id"])
        else:
            logger.warning(f"  ❌ Failed to generate markdown for {post['activity_id']}")

        time.sleep(1)  # Rate limit for Gemini API

    # Save tracking data
    save_processed_ids(processed_ids)

    # Summary
    logger.info("")
    logger.info("=" * 60)
    logger.info(f"Done! Created {len(created_files)} new news entries:")
    for f in created_files:
        logger.info(f"  📄 {f}")
    logger.info("=" * 60)


if __name__ == "__main__":
    main()
