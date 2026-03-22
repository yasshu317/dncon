import { siteConfig } from "@/config/site.config";

describe("siteConfig", () => {
  describe("company", () => {
    it("has required company fields", () => {
      expect(siteConfig.company.name).toBeTruthy();
      expect(siteConfig.company.shortName).toBeTruthy();
      expect(siteConfig.company.tagline).toBeTruthy();
      expect(siteConfig.company.founded).toBeTruthy();
      expect(siteConfig.company.logoText).toBeTruthy();
    });

    it("has valid contact info", () => {
      expect(siteConfig.company.contact.address).toBeTruthy();
      expect(siteConfig.company.contact.phone).toBeTruthy();
      expect(Object.keys(siteConfig.company.contact.emails).length).toBeGreaterThan(0);
    });

    it("has valid email addresses", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      Object.values(siteConfig.company.contact.emails).forEach((email) => {
        expect(email).toMatch(emailRegex);
      });
    });
  });

  describe("navigation", () => {
    it("has navigation items", () => {
      expect(siteConfig.navigation.length).toBeGreaterThan(0);
    });

    it("has Home as first nav item", () => {
      expect(siteConfig.navigation[0].label).toBe("Home");
      expect(siteConfig.navigation[0].href).toBe("/");
    });

    it("all nav items have label and href", () => {
      siteConfig.navigation.forEach((item) => {
        expect(item.label).toBeTruthy();
        expect(item.href).toBeTruthy();
      });
    });
  });

  describe("hero", () => {
    it("has all hero fields", () => {
      expect(siteConfig.hero.headline).toBeTruthy();
      expect(siteConfig.hero.description).toBeTruthy();
      expect(siteConfig.hero.ctaPrimary.label).toBeTruthy();
      expect(siteConfig.hero.ctaSecondary.label).toBeTruthy();
    });

    it("has stats", () => {
      expect(siteConfig.hero.stats.length).toBeGreaterThan(0);
      siteConfig.hero.stats.forEach((stat) => {
        expect(stat.value).toBeTruthy();
        expect(stat.label).toBeTruthy();
      });
    });
  });

  describe("solutions", () => {
    it("has at least one solution", () => {
      expect(siteConfig.solutions.length).toBeGreaterThan(0);
    });

    it("all solutions have required fields", () => {
      siteConfig.solutions.forEach((sol) => {
        expect(sol.id).toBeTruthy();
        expect(sol.title).toBeTruthy();
        expect(sol.icon).toBeTruthy();
        expect(sol.summary).toBeTruthy();
        expect(sol.description).toBeTruthy();
      });
    });

    it("solution ids are unique", () => {
      const ids = siteConfig.solutions.map((s) => s.id);
      expect(new Set(ids).size).toBe(ids.length);
    });
  });

  describe("services", () => {
    it("has at least one service", () => {
      expect(siteConfig.services.length).toBeGreaterThan(0);
    });

    it("all services have required fields", () => {
      siteConfig.services.forEach((svc) => {
        expect(svc.id).toBeTruthy();
        expect(svc.title).toBeTruthy();
        expect(svc.icon).toBeTruthy();
        expect(svc.summary).toBeTruthy();
      });
    });
  });

  describe("careers", () => {
    it("has career intro and benefits", () => {
      expect(siteConfig.careers.intro).toBeTruthy();
      expect(siteConfig.careers.benefits.length).toBeGreaterThan(0);
    });

    it("has positions", () => {
      expect(siteConfig.careers.positions.length).toBeGreaterThan(0);
    });

    it("all positions have required fields", () => {
      siteConfig.careers.positions.forEach((pos) => {
        expect(pos.id).toBeTruthy();
        expect(pos.title).toBeTruthy();
        expect(pos.type).toMatch(/^(full-time|contract)$/);
        expect(pos.experience).toBeTruthy();
        expect(pos.skills).toBeTruthy();
      });
    });
  });

  describe("clients", () => {
    it("has clients", () => {
      expect(siteConfig.clients.length).toBeGreaterThan(0);
    });
  });

  describe("seo", () => {
    it("has SEO metadata", () => {
      expect(siteConfig.seo.title).toBeTruthy();
      expect(siteConfig.seo.description).toBeTruthy();
      expect(siteConfig.seo.keywords.length).toBeGreaterThan(0);
    });
  });
});
