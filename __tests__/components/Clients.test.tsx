import { render, screen } from "@testing-library/react";
import Clients from "@/components/sections/Clients";
import { siteConfig } from "@/config/site.config";

describe("Clients section", () => {
  beforeEach(() => {
    render(<Clients />);
  });

  it("renders the clients section", () => {
    expect(screen.getByTestId("clients-section")).toBeInTheDocument();
  });

  it("renders all client names", () => {
    siteConfig.clients.forEach((client) => {
      expect(screen.getByText(client)).toBeInTheDocument();
    });
  });

  it("renders a CTA to contact", () => {
    expect(screen.getByText(/start a conversation/i)).toBeInTheDocument();
  });
});
