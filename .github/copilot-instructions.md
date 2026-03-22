# GitHub Copilot Instructions — BizPresence Pro

## Project
Config-driven corporate site for DBCON INC · Next.js 16 · TypeScript · Tailwind CSS v4

## Core Rule
All company content (name, services, nav, contact, careers) lives in:
`src/config/site.config.ts` — edit there only, never in component files.

## Code Patterns to Follow

### Section component pattern
```tsx
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site.config";

export default function MySection() {
  return (
    <section id="my-section" className="py-24 px-5" data-testid="my-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Badge" title="Main" highlight="Title" />
        {siteConfig.myData.map((item) => (
          <div key={item.id} className="card p-7">
            ...
          </div>
        ))}
      </div>
    </section>
  );
}
```

### CSS utilities to use (defined in globals.css)
- `.card` — dark card
- `.badge` — label pill  
- `.btn-primary` / `.btn-ghost` — buttons
- `.tech-pill` — technology tag
- `.surface` — alternate section background
- `.gradient-text` — animated gradient text
- `.divider` — section separator

### Icon pattern
```tsx
import IconResolver from "@/components/ui/IconResolver";
<IconResolver name="Database" className="w-5 h-5 text-blue-400" />
```

### Test pattern
```tsx
import { render, screen } from "@testing-library/react";
import MySection from "@/components/sections/MySection";
import { siteConfig } from "@/config/site.config";

it("renders all items", () => {
  render(<MySection />);
  siteConfig.myData.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  });
});
```

## Avoid
- `any` TypeScript types
- Hardcoded company strings in components
- Inline `style={{}}` for static values (use CSS classes)
- Heavy glow/shadow effects — keep the design clean
- Class components
