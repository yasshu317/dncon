import Products from "@/components/sections/Products";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Products — ${siteConfig.company.name}`,
  description: "Purpose-built software products for enterprise business operations.",
};

export default function ProductsPage() {
  return <Products />;
}
