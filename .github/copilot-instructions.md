# GitHub Copilot — BizPresence Pro

## Project

Corporate website **template**: Next.js 16, TypeScript, Tailwind CSS v4. Content lives in **`src/config/site.config.ts`** (including optional **`chatbot`** FAQs).

## Rule

Do not hardcode company names, addresses, or emails in components. Read from **`siteConfig`**.

## Patterns

- Sections: import `siteConfig`, use `.card`, `.badge`, `SectionTitle`, `IconResolver`.
- Images on static hosting with `basePath`: `src={assetPath("/images/file.jpg")}`.
- Metadata in `src/app/*/page.tsx`: use `` `Title — ${siteConfig.company.name}` `` style titles.

## Avoid

- `any`, secrets in repo, duplicate copy outside `site.config.ts`, skipping tests before claiming done.
