import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
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

        {/* Split image + intro */}
        <div className="grid lg:grid-cols-5 gap-8 items-center mb-14">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl shadow-orange-100/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/images/it-professional.jpg")}
              alt="IT professional at work"
              className="w-full h-64 lg:h-80 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-bold text-sm drop-shadow">Certified Engineers</p>
              <p className="text-orange-200/80 text-xs mt-0.5">Decades of hands-on enterprise expertise</p>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xl font-bold text-slate-800">End-to-end IT support, tailored to your enterprise</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Our certified engineers bring deep expertise across application development, ERP platforms, network infrastructure, database management, and cloud operations. We provide both e-mail and phone support for custom internal applications and packaged software such as SAP, Siebel, Oracle, and others.
            </p>
            <p className="text-slate-500 leading-relaxed text-sm">
              Our experienced team works with clients through all phases of the software development lifecycle and beyond — following industry-leading methodologies such as UML, design patterns, ASAP (SAP), CMM, and Six Sigma.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((svc) => (
            <div key={svc.id} id={svc.id} className="card p-6" data-testid={`service-card-${svc.id}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0">
                  <IconResolver name={svc.icon} className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-800">{svc.title}</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{svc.summary}</p>
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
