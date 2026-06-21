# Changelog

All notable changes to the SA4S website are documented here, grouped by development session.

---

## Session 4 — June 2026 (Spotlight Overhaul & UI Polish)

### Spotlight system

- **Dynamic homepage grid**: spotlight cards now pull all `[HOMEPAGE]`-tagged `.txt` files (up to 10), sorted newest-first. Previously capped at 4 hardcoded items.
- **Deep linking**: each card links to `/spotlight?item=DATE`; the Spotlight page reads the `?item` query param on load and opens the matching detail view. Back navigation clears the param.
- **Card layout redesign**: title moved to a top banner overlay on desktop cards; tag and "Explore" prompt remain at the bottom. Cards use `aspect-video` (16:9) with `rounded-xl` edges. Desktop: 2-column grid; odd last card centered at 50% column width. Mobile: single full-width column, image fills the card, title rendered below the image.
- **Overlay gradients reduced**: bottom and top gradients lightened so images read clearly without being too dark.
- **Detail view image**: locked to `aspect-video` (16:9) ratio.
- **Removed `[PREVIEW]` field**: preview text stripped from all cards and all `.txt` files. Tag label remains.
- **Removed `[LINK]` field**: all links now live in `[CONTENT]` as markdown links, which the Spotlight detail page renders as green pill buttons (via ReactMarkdown custom `a` component). External links get an `ExternalLink` icon.
- **Font**: Spotlight page switched from Garamond to the site's default sans-serif.
- **`[HOMEPAGE]` removed** from 2024 spotlight entries — those items no longer appear on the homepage or TickerBar.
- **"Spotlight" section heading** added on the homepage above the grid, matching the "What We Work On" style.

### New spotlight cards added

| Date | Title |
|---|---|
| 2026-06-24 | LLMs for Architectural Refactoring: Monoliths to Microservices |
| 2026-06-20 | ICSA 2026 Tutorial |
| 2026-06-19 | We are at ICSA 2026 with 5 Papers, Tutorial, and the SAML 2026 Panel |
| 2026-06-15 | LLMs for Architectural Refactoring: Monoliths to Microservices (ICSA) |
| 2026-06-10 | ArchBench |
| 2026-06-08 | AI Agents for Microservice Generation |
| 2026-06-06 | ArchView |
| 2026-06-05 | LEAF |
| 2026-05-15 | 2026 Lab Cohort Welcome |

### TickerBar

- Now filters to `[HOMEPAGE]`-tagged items only — stays in sync with the homepage grid automatically.
- Mobile height increased (`h-9` → `h-11`) to accommodate longer titles.
- Mobile overflow detection: if the label text is wider than the bar, it switches to a seamless CSS marquee scroll (`@keyframes marquee`, two copies of the label). Static centered layout used otherwise.

### Homepage

- **Research areas** updated to four new directions with matching Lucide icons:
  - AI for Software Architecture (Design-Time) — `Layers`
  - AI for Software Architecture (Run-Time) — `Activity`
  - Architecting AI Systems — `Network`
  - Code Generation — `Code2`
- News section heading renamed from "Featured News" to **"News from the Lab"**.
- All section buttons ("All research areas", "All news") centered on all screen sizes.
- **"Explore our research" button** added to the Hero alongside the podcast button — green pill, links to `/research`. On mobile the buttons stack vertically (research above podcast), both full-width with consistent padding. On desktop they sit side by side.
- Podcast button smaller on mobile (`px-2.5 py-1`, `text-[11px]`, smaller icon container).
- Tagline ("building the next generation…") changed from italic to upright.

### Research page

- Four research area descriptions rewritten to match the updated homepage directions, referencing recent SA4S outputs (ArchBench, ArchView, LEAF, HarmonE, MOYA, microservices generation study).

### Gallery

- Added **April 2026 Team Dinner** photo (`2026sercdinner.jpg`).
- Gallery now sorted newest-first.

### Publications

- **Fixed LaTeX regex bug**: `\ss` was being passed raw to `new RegExp()`, where `\s` is interpreted as the whitespace character class — causing titles like "Generative AI for software architecture" to render as "Generative AI forßoftware architecture". All accent-map keys are now properly escaped before use in RegExp.
- **Added title fixup** for `DBLP:conf/ecsa/BhattBRV25` (HarmonE 2025 ECSA paper): the DBLP entry uses a `\(\mathscr{H}\)` math macro for the H, which the math-stripping pass removes entirely, leaving "armonE". Fixed via `TITLE_FIXUPS`.

### LogoCloud

- Removed SA4S logo from the "Part of" strip — now shows only IIIT Hyderabad and SERC.
- Both logos link to their respective websites (`iiit.ac.in`, `serc.iiit.ac.in`).
- Layout changed from 3-column grid to `flex justify-center gap-16` for clean centering.

### Layout / navigation

- **Scroll to top on route change**: `Layout.tsx` now calls `window.scrollTo({ top: 0, behavior: 'instant' })` on every `pathname` change, so navigating between pages always starts at the top.

### Footer & email

- Footer vignette changed from white to black (`radial-gradient` using `rgba(0,0,0,0.18)`).
- All mailto addresses updated from `sa4s@iiit.ac.in` to **`sa4sserc@gmail.com`** site-wide (subscribe buttons, footer contact, newsletter strips).

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
