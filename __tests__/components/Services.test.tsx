import { render, screen } from "@testing-library/react";
import Services from "@/components/sections/Services";
import { siteConfig } from "@/config/site.config";

describe("Services section", () => {
  it("renders all services in full mode", () => {
    render(<Services />);
    expect(screen.getByTestId("services-section")).toBeInTheDocument();
    siteConfig.services.forEach((svc) => {
      expect(screen.getByTestId(`service-card-${svc.id}`)).toBeInTheDocument();
    });
  });

  it("renders only first 6 services in preview mode", () => {
    render(<Services preview />);
    const previewIds = siteConfig.services.slice(0, 6).map((s) => s.id);
    const hiddenIds = siteConfig.services.slice(6).map((s) => s.id);

    previewIds.forEach((id) => {
      expect(screen.getByTestId(`service-card-${id}`)).toBeInTheDocument();
    });
    hiddenIds.forEach((id) => {
      expect(screen.queryByTestId(`service-card-${id}`)).not.toBeInTheDocument();
    });
  });

  it("shows 'All Services' link in preview mode", () => {
    render(<Services preview />);
    expect(screen.getByText(/all services/i)).toBeInTheDocument();
  });

  it("renders service titles", () => {
    render(<Services />);
    siteConfig.services.forEach((svc) => {
      expect(screen.getByText(svc.title)).toBeInTheDocument();
    });
  });

  it("renders technology tags for services with technologies", () => {
    render(<Services />);
    const serviceWithTech = siteConfig.services.find(
      (s) => s.technologies && s.technologies.length > 0
    );
    if (serviceWithTech?.technologies) {
      const tagText = serviceWithTech.technologies[0];
      const tags = screen.getAllByText(tagText);
      expect(tags.length).toBeGreaterThan(0);
    }
  });
});
