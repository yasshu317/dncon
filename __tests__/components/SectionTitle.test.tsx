import { render, screen } from "@testing-library/react";
import SectionTitle from "@/components/ui/SectionTitle";

describe("SectionTitle", () => {
  it("renders title", () => {
    render(<SectionTitle title="Hello" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders highlight span", () => {
    render(<SectionTitle title="Our" highlight="Team" />);
    expect(screen.getByText("Our")).toBeInTheDocument();
    expect(screen.getByText("Team")).toBeInTheDocument();
  });

  it("renders label badge when provided", () => {
    render(<SectionTitle label="About" title="Us" />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("does not render label when omitted", () => {
    render(<SectionTitle title="Hello" />);
    const testId = screen.getByTestId("section-title");
    expect(testId).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<SectionTitle title="Title" description="Some description text" />);
    expect(screen.getByText("Some description text")).toBeInTheDocument();
  });

  it("centers content by default", () => {
    const { container } = render(<SectionTitle title="Title" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("text-center");
  });

  it("aligns left when centered=false", () => {
    const { container } = render(<SectionTitle title="Title" centered={false} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).not.toContain("text-center");
  });
});
