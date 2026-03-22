"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { assetPath } from "@/lib/assetPath";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      className="hero-section"
      data-testid="hero-section"
      style={{
        backgroundImage: `linear-gradient(45deg, #0f0800 0%, rgba(30,12,0,0.92) 55%, rgba(60,20,0,0.80) 100%), url(${assetPath("/images/hero-bg.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-28 lg:py-0 lg:min-h-screen">

          {/* ── Left: text ── */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-[0.7rem] font-semibold uppercase tracking-widest border border-orange-400/35 bg-orange-500/12 text-orange-200 backdrop-blur-sm mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Trusted by Fortune 1000 · {hero.subheadline}
            </div>

            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight mb-5"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Welcome to{" "}
              <span style={{ color: "#f97316" }}>{siteConfig.company.name}</span>
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-3">
              {siteConfig.company.description}
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href={hero.ctaPrimary.href} className="btn-primary" data-testid="hero-cta-primary">
                {hero.ctaPrimary.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={hero.ctaSecondary.href} className="hero-btn-outline" data-testid="hero-cta-secondary">
                {hero.ctaSecondary.label}
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8" data-testid="hero-stats">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black" style={{ color: "#f97316" }}>{stat.value}</p>
                  <p className="text-xs text-white/55 font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: animated floating hero image ── */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/images/hero-img.png")}
              alt="DBCON INC IT solutions"
              className="hero-float-img w-64 sm:w-80 lg:w-full lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
