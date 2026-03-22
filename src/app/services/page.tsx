import Services from "@/components/sections/Services";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Services — ${siteConfig.company.name}`,
  description:
    "Full-spectrum IT support and services: application support, database, network, OS, project management, development, testing, and web.",
};

export default function ServicesPage() {
  return <Services />;
}
