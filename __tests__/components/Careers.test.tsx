import { render, screen } from "@testing-library/react";
import Careers from "@/components/sections/Careers";
import { siteConfig } from "@/config/site.config";

describe("Careers section", () => {
  beforeEach(() => {
    render(<Careers />);
  });

  it("renders the careers section", () => {
    expect(screen.getByTestId("careers-section")).toBeInTheDocument();
  });

  it("renders all job positions", () => {
    siteConfig.careers.positions.forEach((pos) => {
      expect(screen.getByTestId(`job-${pos.positionId}`)).toBeInTheDocument();
    });
  });

  it("renders all benefits", () => {
    siteConfig.careers.benefits.forEach((benefit) => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
  });

  it("renders apply info", () => {
    expect(screen.getByText(/how to apply/i)).toBeInTheDocument();
  });

  it("shows full-time positions", () => {
    const fullTime = siteConfig.careers.positions.filter((p) => p.type === "full-time");
    expect(screen.getByText("Full-Time Positions")).toBeInTheDocument();
    fullTime.forEach((pos) => {
      expect(screen.getByText(pos.title)).toBeInTheDocument();
    });
  });

  it("shows contract positions", () => {
    const contract = siteConfig.careers.positions.filter((p) => p.type === "contract");
    expect(screen.getByText("Contract Positions")).toBeInTheDocument();
    contract.forEach((pos) => {
      expect(screen.getByText(pos.title)).toBeInTheDocument();
    });
  });
});
