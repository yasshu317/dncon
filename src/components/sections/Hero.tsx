"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { assetPath } from "@/lib/assetPath";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="hero-section relative overflow-hidden" data-testid="hero-section">
      {/* ── Bright layered background (no heavy dark overlay) ── */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/50 to-amber-50/40"
        aria-hidden
      />
      {/* Very subtle photo texture — adds depth without feeling “dark” */}
      <div
        className="absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage: `url(${assetPath("/images/hero-bg.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* Soft warm glow orbs */}
      <div
        className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-orange-200/35 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-24 h-[22rem] w-[22rem] rounded-full bg-amber-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-white/40 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-28 lg:py-0 lg:min-h-screen">
          {/* ── Left: copy ── */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="badge mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Trusted by leading enterprises · {hero.subheadline}
            </div>

            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight mb-5"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Welcome to{" "}
              <span className="gradient-text">{siteConfig.company.name}</span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-3 max-w-xl">
              {siteConfig.company.description}
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-xl">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href={hero.ctaPrimary.href} className="btn-primary" data-testid="hero-cta-primary">
                {hero.ctaPrimary.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={hero.ctaSecondary.href} className="btn-ghost" data-testid="hero-cta-secondary">
                {hero.ctaSecondary.label}
              </Link>
            </div>

            {/* Stats — light glass chips */}
            <div className="flex flex-wrap gap-3" data-testid="hero-stats">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-orange-100/90 bg-white/75 backdrop-blur-md px-5 py-3 shadow-md shadow-orange-100/40 min-w-[7.5rem]"
                >
                  <p className="text-2xl sm:text-3xl font-black gradient-text leading-none">{stat.value}</p>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1.5 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: illustration ── */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-orange-100/60 to-amber-50/40 blur-2xl"
                aria-hidden
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/images/hero-img.png")}
                alt={`${siteConfig.company.name} — solutions illustration`}
                className="hero-float-img relative w-64 sm:w-80 lg:w-full lg:max-w-lg drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
