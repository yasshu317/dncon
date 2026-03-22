"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 overflow-hidden" data-testid="hero-section">
      <div className="relative max-w-4xl mx-auto text-center z-10">

        {/* Badge */}
        <div className="badge mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          Trusted by Fortune 1000 · {hero.subheadline}
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.06] tracking-tight mb-6">
          Enterprise IT
          <br />
          <span className="gradient-text">Done Right</span>
        </h1>

        {/* Sub */}
        <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
          {hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <Link href={hero.ctaPrimary.href} className="btn-primary" data-testid="hero-cta-primary">
            {hero.ctaPrimary.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href={hero.ctaSecondary.href} className="btn-ghost" data-testid="hero-cta-secondary">
            {hero.ctaSecondary.label}
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3" data-testid="hero-stats">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="card px-4 py-5 text-center">
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-blue-500 transition-colors" aria-label="Scroll down">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
