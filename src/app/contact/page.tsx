import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.company.name}`,
  description: "Get in touch with the DBCON INC team. We're ready to discuss your IT needs.",
};

export default function ContactPage() {
  return <Contact />;
}
