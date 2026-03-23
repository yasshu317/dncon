import SectionTitle from "@/components/ui/SectionTitle";
import { assetPath } from "@/lib/assetPath";
import IconResolver from "@/components/ui/IconResolver";
import { siteConfig } from "@/config/site.config";

export default function About() {
  const { about, company, clients } = siteConfig;
  const clientCount = clients.length;
  const clientStatLabel = "Representative clients";

  return (
    <section id="about" className="py-24 px-5" data-testid="about-section">
      <div className="max-w-7xl mx-auto">

        <SectionTitle label="About Us" title="Who We" highlight="Are" />

        {/* Two-column: text + image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4 order-2 lg:order-1">
            <p className="text-slate-700 leading-relaxed text-lg font-medium">{about.summary}</p>
            {about.additionalParagraphs.map((p) => (
              <p key={p} className="text-slate-500 leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-200/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/images/about-team.jpg")}
                style={{ objectPosition: "top center" }}
                alt={`${company.name} — team collaboration`}
                className="w-full h-72 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-transparent to-amber-500/10 pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-lg shadow-orange-100/80 border border-orange-100">
              <p className="text-2xl font-black gradient-text leading-none">30+</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Years of Excellence</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl px-5 py-3 shadow-lg shadow-orange-100/80 border border-orange-100">
              <p className="text-2xl font-black gradient-text leading-none">{clientCount}</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{clientStatLabel}</p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" data-testid="about-stats">
          {[
            { value: "30+", label: "Years of Excellence" },
            { value: `${clientCount}`, label: clientStatLabel },
            { value: "5", label: "Delivery Models" },
            { value: "100%", label: "Client Commitment" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission / Vision */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="card p-8">
            <p className="text-xs font-semibold text-orange-600 uppercase tracking-widest mb-3">Mission</p>
            <p className="text-slate-600 leading-relaxed">{about.mission}</p>
          </div>
          <div className="card p-8">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">Vision</p>
            <p className="text-slate-600 leading-relaxed">{about.vision}</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-800 text-center mb-8">What We Do</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {about.whatWeDo.map((item) => (
              <div key={item.title} className="card p-8 text-center group hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200 flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
                  <IconResolver name={item.icon} className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-testid="about-highlights">
          {about.highlights.map((h) => (
            <div key={h.title} className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center mb-4">
                <IconResolver name={h.icon} className="w-5 h-5 text-orange-600" />
              </div>
              <h4 className="text-sm font-semibold text-slate-800 mb-2">{h.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-10">
          Serving enterprise clients since{" "}
          <span className="font-semibold text-slate-500">{company.founded}</span>
          {company.hqLine ? (
            <>
              {" "}
              · <span className="font-semibold text-slate-500">{company.hqLine}</span>
            </>
          ) : null}
        </p>
      </div>
    </section>
  );
}
