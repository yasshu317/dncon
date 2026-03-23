import { getChatbotReply } from "@/lib/chatbotReply";

const faqs = [
  { keywords: ["hello", "hi"], answer: "Hi there!" },
  { keywords: ["phone", "call"], answer: "Call 555-0000." },
  { keywords: ["phone", "urgent"], answer: "Emergency line." },
];

describe("getChatbotReply", () => {
  it("returns fallback for empty input", () => {
    expect(getChatbotReply("", faqs, "fallback")).toBe("fallback");
    expect(getChatbotReply("   ", faqs, "fallback")).toBe("fallback");
  });

  it("matches a single keyword", () => {
    expect(getChatbotReply("What is your phone?", faqs, "fallback")).toBe("Call 555-0000.");
  });

  it("prefers FAQ with more keyword hits", () => {
    expect(getChatbotReply("phone urgent help", faqs, "fallback")).toBe("Emergency line.");
  });

  it("is case insensitive", () => {
    expect(getChatbotReply("HELLO friend", faqs, "fallback")).toBe("Hi there!");
  });

  it("ignores punctuation", () => {
    expect(getChatbotReply("Hi!!!", faqs, "fallback")).toBe("Hi there!");
  });
});
