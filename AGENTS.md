# AGENTS.md — BizPresence Pro

Instructions for AI coding agents.

## Overview

Config-driven corporate website **template**. Content and navigation are defined in **`src/config/site.config.ts`**. The shipped **`company`** section is **placeholder data** — replace it for production.

## Tech stack

Next.js 16 (App Router, static export), TypeScript 5, Tailwind CSS v4, Lucide icons, Jest + RTL.

## Content changes

- Edit **`src/config/site.config.ts`** only for copy, nav, FAQs, chatbot, SEO, clients list, etc.
- Do not embed organization-specific strings in `src/components/**` when they belong in config.

## Quality gate

Before finishing: `npm run lint`, `npm test`, `npx tsc --noEmit`, `npm run build`.

## Conventions

- Section components: `data-testid` on roots and key elements; mirror with tests under `__tests__/`.
- Icons: register in `IconResolver` then reference by string from config.
- Public URLs with `basePath`: use `assetPath("/images/...")` for `<img src>` where applicable.

## CSS utilities

See `src/app/globals.css` — `.card`, `.badge`, `.btn-primary`, `.btn-ghost`, `.gradient-text`, `.surface`, `.stat-card`, `.client-tile`, etc.
