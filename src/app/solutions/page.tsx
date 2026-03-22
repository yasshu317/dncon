import Solutions from "@/components/sections/Solutions";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Solutions — ${siteConfig.company.name}`,
  description:
    "Flexible engagement models: consulting, on-site, off-site, off-shore, and near-shore outsourcing.",
};

export default function SolutionsPage() {
  return <Solutions />;
}
