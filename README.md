# BizPresence Pro

**A modern, config-driven corporate website template** — built with Next.js 15, TypeScript, and Tailwind CSS. Originally crafted as a gift for [DBCON INC](https://www.dbconinc.com), but designed to be reused for any company by editing a single config file.

## Features

- **One-file customization** — swap all content (company name, nav, services, careers, clients) in `src/config/site.config.ts`. No component code changes needed.
- **IT-themed dark design** — navy background, blue-purple gradient glassmorphism cards, circuit-board grid, animated shimmer text.
- **Full page routing** — Home, Company, Solutions, Products, Services, Tech Stack, Partners, Careers, News & Events, Contact.
- **Technology Stack section** — highlights Ruby on Rails, AWS/Azure/GCP, Kubernetes, Terraform, and more, with spotlight cards.
- **Contact form** — ready to wire up to any email API (Resend, SendGrid, etc.).
- **78 Jest + React Testing Library tests** — all passing.
- **TypeScript throughout** — fully typed `SiteConfig` interface ensures correctness at compile time.
- **SEO metadata** — per-page title/description/keywords via Next.js Metadata API.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adapting for Another Company

**All content lives in one file:**

```
src/config/site.config.ts
```

Edit these sections to rebrand for any company:

| Section | What to change |
|---|---|
| `company` | Name, tagline, contact info, emails |
| `hero` | Headline, description, stats, CTA buttons |
| `about` | Mission, vision, highlights |
| `solutions` | Engagement model cards |
| `products` | Product name, features |
| `services` | Service cards + technology tags |
| `techStack` | Technology categories & items |
| `careers` | Benefits, job positions |
| `partners` | Partner categories + contacts |
| `clients` | Client name list |
| `news` | News items + event list |
| `seo` | Page title, meta description, keywords |

No component code needs to change.

---

## Project Structure

```
bizpresence-pro/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home
│   │   ├── company/page.tsx
│   │   ├── solutions/page.tsx
│   │   ├── products/page.tsx
│   │   ├── services/page.tsx
│   │   ├── tech-stack/page.tsx
│   │   ├── partners/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── news/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Sticky nav with mega-dropdown + mobile menu
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Solutions.tsx
│   │   │   ├── TechStack.tsx   # Ruby on Rails + Cloud spotlight
│   │   │   ├── Services.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Clients.tsx
│   │   │   ├── Partners.tsx
│   │   │   ├── Careers.tsx
│   │   │   ├── News.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── SectionTitle.tsx
│   │       └── IconResolver.tsx
│   ├── config/
│   │   └── site.config.ts      # ← ALL content lives here
│   └── types/
│       └── index.ts            # Full TypeScript interfaces
├── __tests__/
│   ├── config/
│   │   └── site.config.test.ts
│   └── components/
│       ├── Hero.test.tsx
│       ├── Solutions.test.tsx
│       ├── Services.test.tsx
│       ├── TechStack.test.tsx
│       ├── Clients.test.tsx
│       ├── Careers.test.tsx
│       ├── Contact.test.tsx
│       ├── Footer.test.tsx
│       └── SectionTitle.test.tsx
├── jest.config.ts
├── jest.setup.ts
└── README.md
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Animation | Framer Motion |
| Testing | Jest + React Testing Library |
| Deployment | Vercel / Netlify / GitHub Pages (static export) |

---

## Deployment (Direct Upload — No Git CLI Required)

### Option 1: Vercel (recommended)
1. Run `npm run build`
2. Drag and drop the project folder to [vercel.com/new](https://vercel.com/new)

### Option 2: Netlify
1. Run `npm run build`
2. Drag the `.next` + `public` output to [app.netlify.com/drop](https://app.netlify.com/drop)

### Option 3: Static Export (pure HTML — works on any host)
Add to `next.config.ts`:
```ts
const nextConfig = { output: "export" };
```
Then run `npm run build` → upload the `out/` folder anywhere.

---

## Running Tests

```bash
# Run all tests once
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

Current: **78 tests across 10 test suites — all passing.**

---

Built with care as a gift for DBCON INC — Est. 1995.
