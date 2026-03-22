"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 overflow-hidden" data-testid="hero-section">

      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Technology background"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        {/* Dark + warm tint overlays for elegant readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/30 via-transparent to-amber-900/10" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.7rem] font-semibold uppercase tracking-widest border border-orange-400/40 bg-orange-500/15 text-orange-200 backdrop-blur-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          Trusted by Fortune 1000 · {hero.subheadline}
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.06] tracking-tight mb-6 drop-shadow-lg">
          Enterprise IT
          <br />
          <span className="gradient-text">Done Right</span>
        </h1>

        {/* Sub */}
        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow">
          {hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <Link href={hero.ctaPrimary.href} className="btn-primary shadow-2xl" data-testid="hero-cta-primary">
            {hero.ctaPrimary.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={hero.ctaSecondary.href}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border-2 border-white/30 text-white font-semibold text-[0.95rem] bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all"
            data-testid="hero-cta-secondary"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3" data-testid="hero-stats">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="px-4 py-5 text-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md">
              <div className="text-3xl font-black gradient-text mb-1 drop-shadow">{stat.value}</div>
              <div className="text-xs text-slate-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 hover:text-orange-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
