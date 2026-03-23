import type { SiteConfig } from "@/types";

type FAQ = SiteConfig["chatbot"]["faqs"][number];

/**
 * Picks the best FAQ answer by counting keyword hits in the user message.
 * Tie-break: first FAQ with max score wins (stable order in config).
 */
export function getChatbotReply(
  rawInput: string,
  faqs: FAQ[],
  fallback: string,
): string {
  const normalized = rawInput
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ");

  if (!normalized) return fallback;

  let bestScore = 0;
  let bestAnswer = fallback;

  for (const faq of faqs) {
    let score = 0;
    for (const kw of faq.keywords) {
      const k = kw.toLowerCase().trim();
      if (!k) continue;
      if (normalized.includes(k)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = faq.answer;
    }
  }

  return bestAnswer;
}
