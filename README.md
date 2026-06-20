# SA4S Research Group Website

The public-facing website for the **Software Architecture for Sustainability (SA4S)** research group at SERC, IIIT Hyderabad. Built as a static React application deployed on GitHub Pages.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| UI primitives | shadcn/ui |
| Animations | Framer Motion |
| Routing | React Router |
| Markdown | react-markdown + rehype-raw |
| Deployment | GitHub Pages (via Actions) |

---

## Project Structure

```
sa4s/
├── public/
│   ├── spotlight/        # Spotlight entries (one .txt file per item)
│   ├── images/           # All static images and logos
│   └── papers/           # PDF papers for download
├── src/
│   ├── components/       # Shared UI components
│   ├── pages/            # One file per route
│   ├── data/             # Content loaders (news, publications, posts)
│   └── lib/              # Utilities (publicUrl, posts loader)
├── spotlight-plugin.ts   # Vite plugin: parses spotlight .txt files
├── bonsai/               # CLI tree-drawing utility (unrelated to web app)
└── blog_processing.py    # Utility script for processing blog content
```

---

## Local Development

```sh
git clone <repo-url>
cd sa4s
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

---

## Adding Content

### Spotlight items

Create a new file in `public/spotlight/` named `YYYY-MM-DD.txt`:

```
[TITLE] Your spotlight title
[TAG] Conference / Award / Paper
[PREVIEW] One-sentence teaser shown on the card
[CONTENT] Full markdown content for the detail page
[LINK] /relevant-page-or-external-url
[IMAGE] /images/spotlight/your-image.jpg
[DATE] YYYY-MM-DD
[HOMEPAGE] true
```

Items flagged `[HOMEPAGE] true` appear on the home page spotlight grid (max 4). All items appear on the `/spotlight` archive page. The TickerBar below the header also pulls its rotating content from these files automatically.

### News items

Add `.md` files to the news data directory (see `src/data/newsLoader.ts`).

### Blog posts

Add markdown files and run `blog_processing.py` if needed, then import via `src/lib/posts.ts`.

---

## Deployment

The site deploys automatically to GitHub Pages on push to `main` via the workflow in `.github/workflows/`. The `publicUrl()` utility in `src/lib/utils.ts` handles the `/sa4s` base path prefix required for GitHub Pages asset resolution.

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#FAF7F2` | Page backgrounds |
| Card | `#F0EBE1` | Cards, panels, strips |
| Card hover | `#EAE4D6` | Hover/selected states |
| Border | `#D8D2C4` | All borders |
| Header bg | `#0C2118` | Page header banners, footer |
| Accent green | `#2D6A4F` | Labels, buttons, links |
| Dark green | `#1D5038` | Button hover states |
| Mid green | `#1F4A30` | Footer buttons, badges |
| Light green | `#52B788` | Spotlight tags, subheadings |
| Body text | `#1A1710` | Headings, primary text |
| Muted text | `#6B6455` | Descriptions, meta |
| Header text | `#EDE8DF` | Text on dark backgrounds |
| Header sub | `#8DB8A2` | Subtitles on dark backgrounds |

Section label style: `text-xs text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold`

Section heading style: `text-xl lg:text-2xl text-[#2D6A4F] tracking-[0.25em] uppercase font-semibold`

---

## Mailing List

The site uses a zero-infrastructure mailto approach for newsletter subscriptions. Subscribe buttons across the site open a pre-filled email to `sa4s@iiit.ac.in` with subject `I wish to subscribe to the SA4S Newsletter.` — recipients are managed manually via BCC. This keeps subscriber email addresses entirely off third-party servers.

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a full history of changes.
