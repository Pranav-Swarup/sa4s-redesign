# Changelog

All notable changes to the SA4S website are documented here, grouped by development session.

---

## Session 3 — June 2026 (Polish & Newsletter)

### Removed
- "Spotlight" section heading text from the homepage — the full-bleed grid speaks for itself without a label above it.

### Changed
- Reduced mobile padding on the newsletter subscribe block above the spotlight grid (`py-10` → `py-6`) to tighten the visual gap between the subscribe call-to-action and the image cards below it.

---

## Session 2 — June 2026 (UI Overhaul & Newsletter)

The largest single session of changes. Covered every page on the site.

### TickerBar

- Changed background from the near-identical-to-header `#112A1C` to a **light saturated green** (`#A8D8BA`) with `#6CB898` border and dark forest-green text — clearly distinct from the dark header above it.
- Increased font size: `text-[12px] lg:text-[14px]`.
- Increased height: `h-9 lg:h-12`.
- **Ticker content now sourced from `virtual:spotlight`** instead of hardcoded strings. Adding or editing a spotlight `.txt` file automatically updates the ticker with no code changes needed.

### Homepage (`Index.tsx`)

- **Spotlight section**: Added fluid responsive desktop padding via `clamp()` (`lg:px-[clamp(3rem,8vw,7rem)]`), matching the Hero component's scaling behaviour. Added moderate tile gap (`lg:gap-[clamp(0.375rem,0.6vw,0.75rem)]`).
- **Section headings**: Unified to a single green uppercase tracked style (`text-xl lg:text-2xl text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold`) for "What We Work On" and the news section heading. Removed double-heading (label + title) patterns.
- **Mobile newsletter block**: Added a `lg:hidden` subscribe block above the spotlight grid — green label, short description, rounded pill button opening a prefilled mailto.
- **Desktop newsletter strip**: Added a `hidden lg:block` thin banner between the PulseStrip stats and the research areas grid — left-aligned text ("Stay in touch with our group") and a pill subscribe button on the right.

### Footer (`Footer.tsx`)

- Rebuilt as a **three-column dark footer** (`bg-[#0C2118]`):
  - Left column: postal address (centered).
  - Middle column: SA4S logo + group name/subtitle + small subscribe pill button below.
  - Right column: "Contact Us" with email link.
- Removed the `mt-20` gap between the last page section and the footer top edge — footer now sits flush.
- Removed the long prose description ("Software Architecture for Sustainability Research Group at IIIT-Hyderabad, advancing…") that previously appeared in the logo column.
- All footer text moved to near-white: `text-white/90`, `text-white/75`, `text-white/60`, `text-white/40`.

### News page (`News.tsx`)

- Added dark `#0C2118` header banner (consistent with all other pages).
- Added a subscribe strip directly below the header, above the two-column news layout.
- Removed `gray-*` colors throughout; unified to palette (`#F0EBE1` cards, `#D8D2C4` borders, `#2D6A4F` accents, `#6B6455` muted text).

### Tools page (`Tools.tsx`)

- Fixed hardcoded image paths — all tool logo `src` attributes now wrapped with `publicUrl()` so they resolve correctly on GitHub Pages.
- Dark `#0C2118` header banner.
- Tool cards: `bg-[#F0EBE1] border-[#D8D2C4]`, logo thumbnail on `bg-[#FAF7F2]`.
- Dark CTA block at bottom (`bg-[#0C2118]`).

### Publications page (`Publications.tsx`)

- Dark header banner.
- Conference sections on `bg-[#F0EBE1]`.
- Accordion items: `border-[#D8D2C4] rounded-xl`, hover `hover:bg-[#F0EBE1]`.
- DOI links: `text-[#2D6A4F]`; bullet dots: `bg-[#2D6A4F]`.

### Team page (`Team.tsx`)

- Dark header banner.
- Category filter tabs: active state `bg-[#1F4A30] text-[#EDE8DF]`.
- Member cards: `bg-[#F0EBE1]`.
- Social icon buttons: `bg-[#E8E2D8] hover:bg-[#2D6A4F]`.

### Research page (`Research.tsx`)

- Dark centered header banner.
- Research area cards: `bg-[#F0EBE1] border-[#D8D2C4] rounded-xl`.
- Collaborators section on `bg-[#F0EBE1]`.

### Work / Projects page (`Work.tsx`)

- Dark header banner.
- Project cards: `bg-[#F0EBE1] border-[#D8D2C4] rounded-xl`.
- Member list bullet dots: `bg-[#2D6A4F]`.

### Gallery page (`Gallery.tsx`)

- Dark header banner.
- Lightbox: `bg-black/90` overlay with caption below image.
- Hover caption overlay on grid thumbnails.

### Showcases page (`Showcases.tsx`)

- Dark header banner.
- **Removed all emojis** (⚡ 🎯 ⏱️ ⚙️ ⬆️ 🔢) — replaced with Lucide icons (`Zap`, `Target`, `Timer`, `Settings`, `TrendingUp`, `Hash`).
- Alternating section backgrounds: `#FAF7F2` / `#F0EBE1`.
- All buttons unified to `#2D6A4F` filled or bordered variants.

### Blogs page (`Blogs.tsx`)

- Dark header banner.
- Search input: native `<input>` (not shadcn `Input`) with palette colors — avoids gray focus ring.
- Blog cards: `bg-[#F0EBE1] border-[#D8D2C4] rounded-xl`.
- "Read more" as a link-style text element (not a filled button).
- Category dropdown: palette-matched (`bg-[#F0EBE1]` background, `#EAE4D6` hover).

### Blog Post page (`BlogPost.tsx`)

- Dark header with category badge (`bg-[#1F4A30]`).
- Meta info in `text-[#8DB8A2]`.
- Prose: `prose-headings:text-[#1A1710] prose-p:text-[#6B6455] prose-a:text-[#2D6A4F]`.

### Agentic AI page (`AgenticAI.tsx`)

- Dark header banner.
- Removed amber/violet/indigo per-column accent theming — all cards unified to `bg-[#F0EBE1] border-[#D8D2C4]`.
- Tag pills: `bg-[#FAF7F2] ring-[#D8D2C4]`.
- Column dividers: `bg-[#D8D2C4]`.
- Collaborator cards: `bg-[#FAF7F2]`.
- Collaborations section: `bg-[#F0EBE1]`.

### AutoSE page (`AutoSE.tsx`)

- Identical structural changes to AgenticAI — removed rose/violet/indigo per-column theming, all cards unified to palette.

### 404 / Not Found page (`NotFound.tsx`)

- Rebuilt in palette: `bg-[#FAF7F2]` background, green label, `text-[#1A1710]` heading, `text-[#2D6A4F]` link with ArrowRight icon.

### Mailto prefill

All subscribe buttons across the site send:
- **Subject**: `I wish to subscribe to the SA4S Newsletter.`
- **Body**: `Simply hit send on this mail and we will add you to our list :)`

### Color system cleanup (site-wide)

Removed all uses of:
- `gray-*` Tailwind utilities
- `sa4s-teal-*` custom utilities
- `sa4s-blue-*` custom utilities
- Gradient page headers (replaced with flat dark `#0C2118` bands)
- `bg-white` page backgrounds (replaced with `#FAF7F2`)

---

## Session 1 — June 2026 (Initial Build)

### New pages

All site pages built from scratch:

| Route | Page |
|---|---|
| `/` | Homepage with Hero, Spotlight grid, research areas, featured news |
| `/news` | Two-column news reader with paginated list + markdown preview |
| `/publications` | Accordion-grouped publication list with DOI links and PDF downloads |
| `/team` | Team directory with category filter tabs |
| `/research` | Research area overview cards |
| `/work` | Active projects listing |
| `/tools` | Tools, frameworks, and featured systems (SWITCH, ArchBench, LoCoML, HarmonE, SAS_llm_query) |
| `/showcases` | In-depth case studies with stat grids and image+text alternating layout |
| `/blogs` | Paginated blog card grid with search and category filter |
| `/blogs/:slug` | Individual blog post renderer (markdown) |
| `/agenticai` | Agentic AI research hub with three-column resource board |
| `/autose` | Automated Software Engineering hub (same layout as AgenticAI) |
| `/gallery` | Photo gallery with lightbox |
| `/spotlight` | Archive of all spotlight items |

### New components

| Component | Purpose |
|---|---|
| `Hero` | Full-height animated landing section with fluid responsive scaling |
| `Header` | Sticky nav with mobile hamburger, active-link highlighting |
| `Footer` | Site-wide footer |
| `TickerBar` | Rotating announcement banner below the header |
| `PulseStrip` | Animated stats strip (papers, members, years active) |
| `FeaturedNews` | Latest news cards pulled from the news data loader |
| `LogoCloud` | Collaborating institution logo strip |
| `BonsaiTree` | Animated ASCII-style bonsai tree (decorative) |
| `AudioPlayer` | Embedded podcast/audio player |

### Infrastructure

- **`spotlight-plugin.ts`**: Custom Vite plugin that reads `public/spotlight/*.txt` files at build time, parses `[KEY] value` format fields (TITLE, TAG, PREVIEW, CONTENT, LINK, IMAGE, DATE, HOMEPAGE), sorts newest-first, and exposes them as a typed array via the `virtual:spotlight` module. Both the Spotlight page and the TickerBar import from this.
- **`publicUrl()` utility** (`src/lib/utils.ts`): Prepends the GitHub Pages base path (`/sa4s`) to all asset paths so images and PDFs resolve correctly in production.
- **GitHub Actions workflow** (`.github/workflows/`): Automated deployment to GitHub Pages on push to `main`. Includes a LinkedIn news scraper workflow.
- **`blog_processing.py`**: Script to process and import blog content.
- **`download_papers.py`**: Script to fetch and cache paper PDFs.
- **`linkedin_to_news.py`**: Script to convert LinkedIn posts to news items.
- **`bonsai/`**: Standalone CLI utility for drawing ASCII bonsai trees (Python).

### Original design (superseded by Session 2)

The initial visual design used:
- White `bg-white/95` sticky header with `gray-200` border and `sa4s-teal-*` active-link colors
- Colorful gradient announcement banners (yellow/green/blue) on the homepage for ICSE 2026 acceptance
- Glassmorphism cross-promo card (`backdrop-blur`, `bg-white/10`, `border-white/20`) for SustAInd
- `bg-gray-50` footer with `mt-20` spacing gap, long prose group description
- `HighlightCard` components for stat callouts
- Emojis used throughout for visual emphasis
- Mixed `gray-*`, `sa4s-teal-*`, and `sa4s-blue-*` color tokens across pages
- Per-page gradient headers in various colors
- Gradient and glassmorphism accents on AgenticAI and AutoSE column headers
