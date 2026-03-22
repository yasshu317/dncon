import News from "@/components/sections/News";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `News & Events — ${siteConfig.company.name}`,
  description: "Latest news and upcoming events from DBCON INC",
};

export default function NewsPage() {
  return <News />;
}
