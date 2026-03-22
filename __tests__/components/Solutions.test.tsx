import { render, screen } from "@testing-library/react";
import Solutions from "@/components/sections/Solutions";
import { siteConfig } from "@/config/site.config";

describe("Solutions section", () => {
  it("renders all solutions when not in preview mode", () => {
    render(<Solutions />);
    expect(screen.getByTestId("solutions-section")).toBeInTheDocument();
    siteConfig.solutions.forEach((sol) => {
      expect(screen.getByTestId(`solution-card-${sol.id}`)).toBeInTheDocument();
    });
  });

  it("renders only first 3 solutions in preview mode", () => {
    render(<Solutions preview />);
    const allCards = siteConfig.solutions.map((s) => s.id);
    const previewCards = allCards.slice(0, 3);
    const hiddenCards = allCards.slice(3);

    previewCards.forEach((id) => {
      expect(screen.getByTestId(`solution-card-${id}`)).toBeInTheDocument();
    });
    hiddenCards.forEach((id) => {
      expect(screen.queryByTestId(`solution-card-${id}`)).not.toBeInTheDocument();
    });
  });

  it("shows 'View All Solutions' link in preview mode", () => {
    render(<Solutions preview />);
    expect(screen.getByText(/view all solutions/i)).toBeInTheDocument();
  });

  it("does not show 'View All Solutions' link in full mode", () => {
    render(<Solutions />);
    expect(screen.queryByText(/view all solutions/i)).not.toBeInTheDocument();
  });

  it("renders solution titles", () => {
    render(<Solutions />);
    siteConfig.solutions.forEach((sol) => {
      expect(screen.getByText(sol.title)).toBeInTheDocument();
    });
  });
});
