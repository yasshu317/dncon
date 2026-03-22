import { render, screen } from "@testing-library/react";
import TechStack from "@/components/sections/TechStack";
import { siteConfig } from "@/config/site.config";

describe("TechStack section", () => {
  beforeEach(() => {
    render(<TechStack />);
  });

  it("renders the tech stack section", () => {
    expect(screen.getByTestId("techstack-section")).toBeInTheDocument();
  });

  it("renders all tech categories", () => {
    siteConfig.techStack.forEach((cat) => {
      const slug = cat.category.toLowerCase().replace(/[\s&/]+/g, "-");
      expect(screen.getByTestId(`tech-category-${slug}`)).toBeInTheDocument();
    });
  });

  it("renders category headings", () => {
    siteConfig.techStack.forEach((cat) => {
      expect(screen.getByText(cat.category)).toBeInTheDocument();
    });
  });

  it("renders Ruby on Rails technology", () => {
    expect(screen.getAllByText(/ruby on rails/i).length).toBeGreaterThan(0);
  });

  it("renders cloud platforms category", () => {
    expect(screen.getByText("Cloud Platforms")).toBeInTheDocument();
  });

  it("renders AWS technology pill", () => {
    const awsEl = screen.getAllByText(/AWS/);
    expect(awsEl.length).toBeGreaterThan(0);
  });

  it("renders Ruby on Rails spotlight card", () => {
    expect(screen.getByText("Convention-over-Configuration")).toBeInTheDocument();
  });

  it("renders Cloud-Native spotlight card", () => {
    expect(screen.getByText("Multi-Cloud & Serverless")).toBeInTheDocument();
  });

  it("renders all 3 major cloud providers in spotlight", () => {
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Azure")).toBeInTheDocument();
    expect(screen.getByText("GCP")).toBeInTheDocument();
  });
});
