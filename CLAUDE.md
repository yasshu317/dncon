# CLAUDE.md — BizPresence Pro

Context for AI assistants working in this repository.

## Purpose

**BizPresence Pro** is a reusable, **config-driven** marketing and corporate site template. All customer-facing copy and structure (except layout rules) should be driven from **`src/config/site.config.ts`**. The default **`company`** block uses placeholder values (`Your Company Inc.`, example.com-style contacts) and should be replaced for a real deployment.

## Stack

- Next.js 16 (App Router), static export where configured
- TypeScript 5, Tailwind CSS v4
- Jest + React Testing Library

## Layout

- `src/app/` — routes and page-level metadata (prefer interpolating `siteConfig.company` in descriptions)
- `src/components/sections/` — presentational sections; import `siteConfig`, avoid hardcoded org names
- `src/components/ui/` — shared UI (e.g. `ChatWidget`, `LogoIcon`, `SectionTitle`)
- `src/lib/` — small utilities (`assetPath`, `chatbotReply`)

## Rules

- Do not hardcode company names or contact data in components; use `siteConfig`.
- After substantive edits: `npm run lint`, `npm test`, `npx tsc --noEmit`, `npm run build`.
- Do not commit secrets or real production credentials into the repo.

## Deployment notes

If using a subpath (e.g. GitHub Pages `/repo-name`), ensure `NEXT_PUBLIC_BASE_PATH` matches and public assets use `assetPath()` where needed.
