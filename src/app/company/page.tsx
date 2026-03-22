import About from "@/components/sections/About";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Company — ${siteConfig.company.name}`,
  description: siteConfig.about.summary,
};

export default function CompanyPage() {
  return <About />;
}
