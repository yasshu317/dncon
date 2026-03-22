import Link from "next/link";
import { MapPin, Phone, Mail, Zap } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
  const { company, navigation, services } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-[15px] font-bold text-white">{company.logoText}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{company.tagline}</p>
            <p className="text-xs text-slate-600">Est. {company.founded}</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {navigation.filter((n) => n.label !== "Home").slice(0, 6).map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                {company.contact.address}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-500">
                <Phone className="w-4 h-4 text-slate-600 shrink-0" />
                {company.contact.phone}
              </li>
              {Object.entries(company.contact.emails).slice(0, 2).map(([label, email]) => (
                <li key={label} className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-600 shrink-0" />
                  <a href={`mailto:${email}`} className="text-sm text-slate-500 hover:text-slate-300 transition-colors truncate">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/[0.05] my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>© {year} {company.name}. All rights reserved.</span>
          <span>Built with BizPresence Pro</span>
        </div>
      </div>
    </footer>
  );
}
