import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import IconResolver from "@/components/ui/IconResolver";
import { siteConfig } from "@/config/site.config";

export default function Services({ preview = false }: { preview?: boolean }) {
  const items = preview ? siteConfig.services.slice(0, 6) : siteConfig.services;

  return (
    <section
      id="services"
      className="relative py-24 px-5 overflow-hidden"
      data-testid="services-section"
    >
      {/* Layered background: subtle service-themed imagery */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: `url(${assetPath("/images/services.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.06]"
          style={{
            backgroundImage: `url(${assetPath("/images/server-room.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff8f0] via-[#fffaf5]/97 to-orange-50/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          label="Support & Services"
          title="Expert IT"
          highlight="Services"
          description="Full-spectrum IT services from certified engineers — simple web presence to complex enterprise platforms."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-center mb-14">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl shadow-orange-200/50 ring-1 ring-orange-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/images/it-professional.jpg")}
              alt="IT professional at work"
              className="w-full h-64 lg:h-80 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/45 via-orange-950/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-bold text-sm drop-shadow-md">Certified Engineers</p>
              <p className="text-orange-100/90 text-xs mt-0.5">Hands-on enterprise delivery</p>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xl font-bold text-slate-800">End-to-end IT support, tailored to your enterprise</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our engineers cover application development, ERP platforms, network infrastructure, databases, and cloud
              operations — with email and phone support for custom and packaged software such as SAP, Siebel, and Oracle.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              We stay engaged across the full lifecycle, using proven methods including UML, design patterns, and
              structured quality practices.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              className="group relative card p-6 overflow-hidden"
              data-testid={`service-card-${svc.id}`}
            >
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-orange-100/80 to-amber-50/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-200/80 shadow-sm shadow-orange-100/50">
                  <IconResolver name={svc.icon} className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 leading-snug pt-1">{svc.title}</h3>
              </div>
              <p className="relative text-sm text-slate-600 leading-relaxed mb-4">{svc.summary}</p>
              {svc.technologies && (
                <div className="relative flex flex-wrap gap-1.5">
                  {svc.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
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
