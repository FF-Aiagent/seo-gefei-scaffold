# seo-gefei-scaffold

Empty English SEO overseas site scaffold (GeFei-method experiment).  
**Not related to** `ai-web-workflow`. Independent repo and deploy target.

## Status

- Scaffold only — **not deployed**, **no custom domain**
- **Domain TBD** — set via env when you register one
- **Target keyword TBD** — placeholder copy only (`/guides/hello-world`)
- **Google Search Console** — wire after the domain is live

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4
- SEO hooks: per-page `metadata` / `generateMetadata`, `sitemap.ts`, `robots.ts`, Open Graph basics

## Paths

| Path | Purpose |
|------|---------|
| `/` | Home stub + guide list |
| `/guides/[slug]` | Expandable article layout |
| `/guides/hello-world` | Demo slug (placeholder copy only) |
| `/sitemap.xml` | Generated sitemap |
| `/robots.txt` | Generated robots |

## Setup

```bash
cd /workspace/Projects/seo-gefei-scaffold   # or clone this repo
cp .env.example .env.local
# Optional: NEXT_PUBLIC_SITE_URL=https://your-domain.example
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Env vars

| Variable | Required | Default | Notes |
|----------|----------|---------|-------|
| `NEXT_PUBLIC_SITE_URL` | No | `http://localhost:3000` | Canonical base for metadata, sitemap, robots. **Never hardcode a production domain in code.** |

## Scripts

```bash
npm run dev      # local development
npm run build    # production build (must pass)
npm run start    # serve build
npm run lint     # ESLint
```

## Expanding

1. Add guides in `src/content/guides.ts` (or swap for MDX later).
2. Fill reserved nav / footer / related-link slots in `Header`, `Footer`, and guide pages.
3. After domain is chosen: set `NEXT_PUBLIC_SITE_URL`, deploy (Vercel or other), then GSC.
4. First real page should pass a public KGR-style check before watering links — product/Brief owns keyword choice.

## Out of scope (this scaffold)

- Vercel / production deploy
- Custom domain binding
- Real long-tail keyword content
- Cloning `seo.web.cafe` tool suite
- Changes to `ai-web-workflow`

## Ops paper (not site content)

- [Sitemap peers + guide↔spec checklist (2026-11-03)](docs/seo-paper-prep-sitemap-spec-2026-11-03.md)
