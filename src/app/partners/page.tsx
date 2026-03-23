import Partners from "@/components/sections/Partners";
import Clients from "@/components/sections/Clients";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Partners & Clients — ${siteConfig.company.name}`,
  description: `Partner programs and representative clients for ${siteConfig.company.shortName}.`,
};

export default function PartnersPage() {
  return (
    <>
      <Partners />
      <div className="section-divider" />
      <Clients />
    </>
  );
}
