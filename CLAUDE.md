# CLAUDE.md — BizPresence Pro

This file gives Claude AI full context about this project so it can help effectively.

## What This Project Is
A **config-driven corporate website template** built for DBCON INC.
Reusable for any company by editing `src/config/site.config.ts` only.

- **Live site:** https://yasshu317.github.io/dncon/
- **Repo:** https://github.com/yasshu317/dncon
- **Stack:** Next.js 16, TypeScript 5, Tailwind CSS v4, Jest

## Project Structure
```
bizpresence-pro/
├── src/
│   ├── app/                    # Next.js App Router pages (thin wrappers)
│   ├── components/
│   │   ├── layout/             # Header.tsx, Footer.tsx
│   │   ├── sections/           # Hero, About, Solutions, TechStack, Services,
│   │   │                       # Products, Clients, Partners, Careers, News, Contact
│   │   └── ui/                 # SectionTitle, IconResolver
│   ├── config/
│   │   └── site.config.ts      # ALL CONTENT LIVES HERE
│   └── types/index.ts          # TypeScript interfaces
├── __tests__/                  # Jest tests (mirrors src/)
├── .github/workflows/          # CI + deploy GitHub Actions
├── .vscode/                    # Editor settings
├── .cursor/rules/              # Cursor AI rules
└── AGENTS.md                   # Codex/agent instructions
```

## Key Design Decisions
1. **Single config file** — `site.config.ts` drives all text, nav, cards, forms
2. **Static export** — `next.config.ts` uses `output: "export"` for GitHub Pages
3. **CSS utilities** — custom utility classes in `globals.css` (`.card`, `.btn-primary`, `.badge`, etc.)
4. **No heavy effects** — clean dark design, subtle borders, minimal gradients

## Common Tasks

### Run locally
```bash
npm run dev        # dev server at localhost:3000
npm test           # run Jest tests
npm run build      # static export to out/
npm run deploy     # deploy out/ to gh-pages branch
```

### Update content
Edit `src/config/site.config.ts` — no component changes needed.

### Add a new page
1. Create `src/app/new-page/page.tsx`
2. Add a section component in `src/components/sections/`
3. Add route to `navigation` in `site.config.ts`
4. Add test in `__tests__/components/`

### Add an icon
1. Import from `lucide-react` in `src/components/ui/IconResolver.tsx`
2. Add to the `iconMap` object
3. Reference by name string in `site.config.ts`

## Testing Conventions
- Tests use `data-testid` attributes for targeting
- Config-driven assertions: import `siteConfig` to test against live data
- Run `npm test` before every commit / deploy

## Deployment Flow
```
git push main
  → GitHub Actions CI runs tests + build
  → GitHub Actions deploy pushes out/ to gh-pages
  → GitHub Pages serves https://yasshu317.github.io/dncon/
```

## What NOT to Change
- Do not add global styles outside `globals.css`
- Do not hardcode company name/content in components
- Do not change `output: "export"` in `next.config.ts` — required for GitHub Pages
- Do not push the `out/` folder to `main` (it goes to `gh-pages` via Actions)
