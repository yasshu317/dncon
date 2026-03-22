import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle2, Mail } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Partners() {
  return (
    <section id="partners" className="py-24 px-5" data-testid="partners-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Partners"
          title="Partnership"
          highlight="Ecosystem"
          description={siteConfig.partners.intro}
        />
        <div className="grid md:grid-cols-2 gap-5">
          {siteConfig.partners.categories.map((partner, i) => (
            <div
              key={partner.category}
              id={i === 0 ? "consulting" : "it-solutions"}
              className="card p-8"
              data-testid={`partner-${partner.category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h3 className="text-base font-semibold text-white mb-2">{partner.category}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{partner.description}</p>
              {partner.areas && (
                <ul className="space-y-2 mb-5">
                  {partner.areas.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      {area}
                    </li>
                  ))}
                </ul>
              )}
              {partner.contact && (
                <div className="flex items-start gap-2 text-xs text-slate-400 pt-4 border-t border-blue-100/50">
                  <Mail className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                  {partner.contact}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
