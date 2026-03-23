import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.company.name}`,
  description: `Contact ${siteConfig.company.shortName} for technology consulting, delivery, and support inquiries.`,
};

export default function ContactPage() {
  return <Contact />;
}
