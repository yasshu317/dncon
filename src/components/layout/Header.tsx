"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import LogoIcon from "@/components/ui/LogoIcon";
import type { NavItem } from "@/types";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      data-testid="header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-orange-100 shadow-sm shadow-orange-100/60"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" data-testid="logo">
            <LogoIcon size={34} />
            <span className="text-[15px] font-bold text-slate-800 tracking-wide group-hover:text-orange-600 transition-colors">
              {siteConfig.company.logoText}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {siteConfig.navigation.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary text-sm py-2 px-5" data-testid="contact-cta">
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-orange-600 hover:bg-orange-50 transition-colors"
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/97 backdrop-blur-xl border-t border-orange-100 py-3" data-testid="mobile-menu">
          <div className="max-w-7xl mx-auto px-5 space-y-0.5">
            {siteConfig.navigation.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                open={openDropdown === item.label}
                onToggle={() => setOpenDropdown((p) => (p === item.label ? null : item.label))}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            <div className="pt-3 pb-1">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block w-full text-center btn-primary text-sm py-2.5">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <Link href={item.href} className="px-3 py-2 text-sm text-slate-600 hover:text-orange-600 transition-colors rounded-lg hover:bg-orange-50/60">
        {item.label}
      </Link>
    );
  }
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 px-3 py-2 text-sm text-slate-600 hover:text-orange-600 transition-colors rounded-lg hover:bg-orange-50/60">
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 bg-white/98 backdrop-blur-xl border border-orange-100 rounded-xl py-1.5 shadow-xl shadow-orange-100/50">
          {item.children.map((child) => (
            <Link key={child.label} href={child.href} className="block px-4 py-2 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ item, open, onToggle, onClose }: { item: NavItem; open: boolean; onToggle: () => void; onClose: () => void }) {
  if (!item.children) {
    return (
      <Link href={item.href} onClick={onClose} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
        {item.label}
      </Link>
    );
  }
  return (
    <div>
      <button onClick={onToggle} className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 pb-1 space-y-0.5">
          {item.children.map((child) => (
            <Link key={child.label} href={child.href} onClick={onClose} className="block px-4 py-2 text-sm text-slate-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
