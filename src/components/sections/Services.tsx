import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import IconResolver from "@/components/ui/IconResolver";
import { siteConfig } from "@/config/site.config";

export default function Services({ preview = false }: { preview?: boolean }) {
  const items = preview ? siteConfig.services.slice(0, 6) : siteConfig.services;

  return (
    <section id="services" className="py-24 px-5 surface" data-testid="services-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Support & Services"
          title="Expert IT"
          highlight="Services"
          description="Full-spectrum IT services from certified engineers — simple web presence to complex enterprise platforms."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((svc) => (
            <div key={svc.id} id={svc.id} className="card p-6" data-testid={`service-card-${svc.id}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                  <IconResolver name={svc.icon} className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-white">{svc.title}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{svc.summary}</p>
              {svc.technologies && (
                <div className="flex flex-wrap gap-1.5">
                  {svc.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {preview && (
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-ghost text-sm py-2.5 px-6">
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
