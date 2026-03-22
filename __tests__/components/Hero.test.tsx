import { render, screen } from "@testing-library/react";
import Hero from "@/components/sections/Hero";
import { siteConfig } from "@/config/site.config";

describe("Hero section", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it("renders the hero section", () => {
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
  });

  it("renders primary CTA button", () => {
    const cta = screen.getByTestId("hero-cta-primary");
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveTextContent(siteConfig.hero.ctaPrimary.label);
  });

  it("renders secondary CTA button", () => {
    const cta = screen.getByTestId("hero-cta-secondary");
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveTextContent(siteConfig.hero.ctaSecondary.label);
  });

  it("renders all stats", () => {
    const statsContainer = screen.getByTestId("hero-stats");
    expect(statsContainer).toBeInTheDocument();
    siteConfig.hero.stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it("primary CTA links to solutions page", () => {
    const cta = screen.getByTestId("hero-cta-primary");
    expect(cta).toHaveAttribute("href", siteConfig.hero.ctaPrimary.href);
  });

  it("secondary CTA links to contact page", () => {
    const cta = screen.getByTestId("hero-cta-secondary");
    expect(cta).toHaveAttribute("href", siteConfig.hero.ctaSecondary.href);
  });
});
