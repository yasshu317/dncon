import { render, screen } from "@testing-library/react";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site.config";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders the footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders company logo text", () => {
    expect(screen.getByText(siteConfig.company.logoText)).toBeInTheDocument();
  });

  it("renders company tagline", () => {
    expect(screen.getByText(siteConfig.company.tagline)).toBeInTheDocument();
  });

  it("renders company address", () => {
    expect(screen.getByText(siteConfig.company.contact.address)).toBeInTheDocument();
  });

  it("renders company phone", () => {
    expect(screen.getByText(siteConfig.company.contact.phone)).toBeInTheDocument();
  });

  it("renders Quick Links section", () => {
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
  });

  it("renders Services section heading", () => {
    const headings = screen.getAllByText("Services");
    expect(headings.length).toBeGreaterThan(0);
  });

  it("renders Contact section heading", () => {
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders copyright year", () => {
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders company name in copyright", () => {
    const matches = screen.getAllByText(new RegExp(siteConfig.company.name));
    expect(matches.length).toBeGreaterThan(0);
  });
});
