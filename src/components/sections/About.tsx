import { CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import IconResolver from "@/components/ui/IconResolver";
import { siteConfig } from "@/config/site.config";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-24 px-5" data-testid="about-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="About Us" title="Who We" highlight="Are" description={about.summary} />

        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <div className="card p-8">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Mission</p>
            <p className="text-slate-300 leading-relaxed">{about.mission}</p>
          </div>
          <div className="card p-8">
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">Vision</p>
            <p className="text-slate-300 leading-relaxed">{about.vision}</p>
          </div>
        </div>

        {/* What we do list */}
        <div className="card p-8 mb-14">
          <p className="text-sm font-semibold text-white mb-6">What We Do</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Full Software Development Life Cycle (SDLC) outsourcing",
              "On-site development resources & dedicated project teams",
              "ERP consulting — SAP, PeopleSoft, Oracle",
              "Enterprise Application Integration (EAI)",
              "Database design, development, and administration",
              "Cloud & network infrastructure management",
              "Rigorous QA & testing using Six Sigma methodologies",
              "Mobile & e-commerce solution development",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-testid="about-highlights">
          {about.highlights.map((h) => (
            <div key={h.title} className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-4">
                <IconResolver name={h.icon} className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">{h.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
