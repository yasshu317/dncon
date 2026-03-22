# AGENTS.md — BizPresence Pro

Instructions for AI coding agents (OpenAI Codex, GitHub Copilot Workspace, etc.)

## Project Overview
Config-driven corporate website for DBCON INC.
**Single source of truth:** `src/config/site.config.ts`

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript 5 |
| Styles | Tailwind CSS v4 + custom utilities in `globals.css` |
| Icons | Lucide React |
| Testing | Jest + React Testing Library |
| Deploy | GitHub Pages via `gh-pages` branch |

## Repo Layout
```
src/config/site.config.ts   ← change content here only
src/types/index.ts          ← TypeScript interfaces (SiteConfig, etc.)
src/components/layout/      ← Header, Footer
src/components/sections/    ← one file per page section
src/components/ui/          ← SectionTitle, IconResolver
src/app/                    ← Next.js pages (import sections, add metadata)
__tests__/                  ← Jest tests
.github/workflows/          ← CI (ci.yml) + Deploy (deploy.yml)
```

## Agent Instructions

### When editing content
- ONLY edit `src/config/site.config.ts`
- Never hardcode strings in component files

### When adding a component
- Follow the pattern in existing section files (e.g. `Solutions.tsx`)
- Use CSS utilities: `.card`, `.badge`, `.btn-primary`, `.btn-ghost`, `.tech-pill`, `.surface`, `.gradient-text`
- Add `data-testid` to root and key child elements
- Create matching test in `__tests__/components/`

### When adding icons
- Import from `lucide-react` in `src/components/ui/IconResolver.tsx`
- Add to `iconMap` — then reference by string name in config

### Before completing any task
1. Run `npm run build` — must succeed with zero errors
2. Run `npm test` — all tests must pass
3. No TypeScript errors: `npx tsc --noEmit`

### Commit message format
```
type: short description

Types: feat | fix | refactor | style | test | docs | chore
Examples:
  feat: add case studies section
  fix: correct mobile nav z-index
  style: clean hero spacing
  docs: update CLAUDE.md
```

### Deploy command
```bash
git add . && git commit -m "feat: ..." && git push
# GitHub Actions auto-deploys on push to main
```

## CSS Utilities Reference
| Class | Use |
|-------|-----|
| `.card` | Dark card with subtle border + hover |
| `.surface` | Slightly lighter section background |
| `.badge` | Small uppercase label pill |
| `.btn-primary` | Solid blue button |
| `.btn-ghost` | Outline blue button |
| `.tech-pill` | Tiny technology tag |
| `.gradient-text` | Blue→purple gradient text |
| `.divider` | Horizontal gradient separator |
| `.dot-bg` | Dot-grid background (body) |

## Live URLs
- Production: https://yasshu317.github.io/dncon/
- Repository: https://github.com/yasshu317/dncon
