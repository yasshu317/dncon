import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import LogoIcon from "@/components/ui/LogoIcon";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
  const { company, navigation, services } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 border-t border-stone-800" data-testid="footer">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <LogoIcon size={32} />
              <span className="text-[15px] font-bold text-white">{company.logoText}</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">{company.tagline}</p>
            <p className="text-xs text-stone-600">Est. {company.founded}</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {navigation.filter((n) => n.label !== "Home").slice(0, 6).map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-stone-500 hover:text-orange-300 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="text-sm text-stone-500 hover:text-orange-300 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-stone-500">
                <MapPin className="w-4 h-4 text-orange-500/70 mt-0.5 shrink-0" />
                {company.contact.address}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-stone-500">
                <Phone className="w-4 h-4 text-orange-500/70 shrink-0" />
                {company.contact.phone}
              </li>
              {Object.entries(company.contact.emails).slice(0, 2).map(([label, email]) => (
                <li key={label} className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-orange-500/70 shrink-0" />
                  <a href={`mailto:${email}`} className="text-sm text-stone-500 hover:text-orange-300 transition-colors truncate">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-stone-800 my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-stone-600">
          <span>© {year} {company.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
