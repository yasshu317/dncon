"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-5 overflow-hidden pt-20"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">

          {/* ── Left: headline + CTAs ── */}
          <div className="flex flex-col justify-center py-12">

            <div className="badge mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Trusted by Fortune 1000 · {hero.subheadline}
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
              Enterprise IT
              <br />
              <span className="gradient-text">Done Right.</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              {hero.description}
            </p>

            {/* Key proof points */}
            <ul className="space-y-2 mb-10">
              {[
                "30+ years serving Fortune 1000 companies",
                "On-site, off-shore and near-shore delivery",
                "SAP · Oracle · Cloud · Full SDLC",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link href={hero.ctaPrimary.href} className="btn-primary" data-testid="hero-cta-primary">
                {hero.ctaPrimary.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={hero.ctaSecondary.href} className="btn-ghost" data-testid="hero-cta-secondary">
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </div>

          {/* ── Right: image + floating stats ── */}
          <div className="hidden lg:flex flex-col justify-center relative">
            {/* Main image frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-200/50 border border-orange-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="images/hero-bg.jpg"
                alt="IT professionals at work"
                className="w-full h-[500px] object-cover object-center"
              />
              {/* Subtle warm tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-amber-500/10 pointer-events-none" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl px-6 py-4 shadow-xl shadow-orange-100/80 border border-orange-100 z-10">
              <p className="text-3xl font-black gradient-text leading-none">30+</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Years of Excellence</p>
            </div>
            <div className="absolute top-8 -right-6 bg-white rounded-2xl px-6 py-4 shadow-xl shadow-orange-100/80 border border-orange-100 z-10">
              <p className="text-3xl font-black gradient-text leading-none">13</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Fortune 1000 Clients</p>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 bg-white rounded-2xl px-6 py-4 shadow-xl shadow-orange-100/80 border border-orange-100 z-10">
              <p className="text-3xl font-black gradient-text leading-none">5</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Delivery Models</p>
            </div>
          </div>
        </div>

        {/* Stats bar — mobile visible, desktop hidden */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden pb-10" data-testid="hero-stats">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="card px-4 py-5 text-center">
              <div className="text-2xl font-black gradient-text mb-0.5">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-orange-500 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
