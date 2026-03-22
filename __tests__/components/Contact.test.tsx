import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/config/site.config";

describe("Contact section", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it("renders the contact section", () => {
    expect(screen.getByTestId("contact-section")).toBeInTheDocument();
  });

  it("renders contact form", () => {
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("renders all form inputs", () => {
    expect(screen.getByTestId("input-name")).toBeInTheDocument();
    expect(screen.getByTestId("input-email")).toBeInTheDocument();
    expect(screen.getByTestId("input-subject")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /message/i })).toBeInTheDocument();
  });

  it("renders submit button", () => {
    expect(screen.getByTestId("contact-submit")).toBeInTheDocument();
  });

  it("renders company phone number", () => {
    expect(screen.getByText(siteConfig.company.contact.phone)).toBeInTheDocument();
  });

  it("renders company address", () => {
    expect(screen.getByText(siteConfig.company.contact.address)).toBeInTheDocument();
  });

  it("renders all email addresses", () => {
    Object.values(siteConfig.company.contact.emails).forEach((email) => {
      expect(screen.getByText(email)).toBeInTheDocument();
    });
  });

  it("allows typing in form fields", () => {
    const nameInput = screen.getByTestId("input-name") as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");
  });

  it("shows sending state when form is submitted", async () => {
    fireEvent.change(screen.getByTestId("input-name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByTestId("input-subject"), {
      target: { value: "Test subject" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: /message/i }), {
      target: { value: "Test message body" },
    });

    const submit = screen.getByTestId("contact-submit");
    fireEvent.click(submit);

    await waitFor(() =>
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    );
  });
});
