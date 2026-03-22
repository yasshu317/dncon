import Careers from "@/components/sections/Careers";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Careers — ${siteConfig.company.name}`,
  description:
    "Join our team of talented IT professionals. View open full-time and contract positions.",
};

export default function CareersPage() {
  return <Careers />;
}
