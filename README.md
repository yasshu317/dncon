# BizPresence Pro

**Config-driven corporate website template** for technology and professional services firms. Built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, and static export support for hosts such as GitHub Pages.

## Highlights

- **Single configuration file** — company profile, navigation, pages, SEO, and a lightweight keyword-based chat assistant live in `src/config/site.config.ts`.
- **Strong typing** — `SiteConfig` in `src/types/index.ts` keeps content changes safe at compile time.
- **Full section set** — Home, Company, Solutions, Products, Services, Tech Stack, Partners, Careers, News, Contact.
- **Tests** — Jest and React Testing Library (`npm test`).
- **CI/CD** — GitHub Actions workflows for lint, tests, typecheck, build, and optional deploy to GitHub Pages.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm test
npm run build        # static site → out/
```

## Customization

1. Open **`src/config/site.config.ts`**.
2. Replace the **`company`** block (name, tagline, contact, emails, optional `hqLine`).
3. Adjust **hero**, **about**, **services**, **careers**, **clients**, **news**, **seo**, and **chatbot** to match your organization.
4. Rebuild. No component edits are required for copy or structure-only changes.

See `.cursor/rules/content.mdc` for a field-by-field map.

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, `output: "export"`) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4, shared utilities in `src/app/globals.css` |
| Icons | Lucide React |
| Testing | Jest, RTL, jsdom |

## Deployment

- Set `NEXT_PUBLIC_BASE_PATH` if the site is served from a subpath (e.g. GitHub Pages project site).
- Production build: `npm run build` — deploy the **`out/`** directory.
- This repository includes example workflows under `.github/workflows/` for CI and Pages deploy.

## License

Private / use per your organization’s policy. Template content uses placeholder company data — replace before production use.
