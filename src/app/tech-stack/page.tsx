import TechStack from "@/components/sections/TechStack";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Technology Stack — ${siteConfig.company.name}`,
  description:
    "Ruby on Rails, AWS, Azure, GCP, Kubernetes, Java, .NET and more — our complete technology expertise.",
};

export default function TechStackPage() {
  return <TechStack />;
}
