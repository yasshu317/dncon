import SectionTitle from "@/components/ui/SectionTitle";
import IconResolver from "@/components/ui/IconResolver";
import { siteConfig } from "@/config/site.config";

export default function TechStack() {
  const { techStack } = siteConfig;

  return (
    <section id="tech-stack" className="py-24 px-5" data-testid="techstack-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Technology Stack"
          title="Technologies We"
          highlight="Master"
          description="From Ruby on Rails and modern cloud-native platforms to legacy enterprise systems — fluent across the full spectrum."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {techStack.map((cat) => (
            <div
              key={cat.category}
              className="card p-6"
              data-testid={`tech-category-${cat.category.toLowerCase().replace(/[\s&/]+/g, "-")}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                  <IconResolver name={cat.icon} className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-white">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Spotlight row */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Rails */}
          <div className="card p-8">
            <div className="inline-flex items-center gap-2 badge mb-5" style={{ background: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.2)", color: "#fca5a5" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Ruby on Rails
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Convention-over-Configuration</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Rapid, production-grade web applications leveraging Rails' full-stack power — ActiveRecord ORM, Action Cable, Hotwire/Turbo for modern UX without complexity.
            </p>
            <ul className="space-y-2">
              {[
                "RESTful & API-only Rails applications",
                "ActiveRecord · PostgreSQL · MySQL",
                "Sidekiq background job processing",
                "Devise auth & Pundit authorization",
                "RSpec + FactoryBot test coverage",
                "Dockerized deploys to AWS / GCP / Azure",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud */}
          <div className="card p-8">
            <div className="inline-flex items-center gap-2 badge mb-5" style={{ background: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.2)", color: "#c4b5fd" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Cloud-Native 2026
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Multi-Cloud & Serverless</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              AWS, Azure, and GCP architectures using Kubernetes, Terraform, and GitOps — scalable, secure, and cost-efficient by design.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "AWS", desc: "Lambda · ECS · RDS" },
                { name: "Azure", desc: "AKS · Functions · DevOps" },
                { name: "GCP", desc: "GKE · Cloud Run · BigQuery" },
              ].map((cloud) => (
                <div key={cloud.name} className="rounded-lg bg-white/70 border border-blue-100 p-3 text-center">
                  <p className="text-white font-bold text-sm">{cloud.name}</p>
                  <p className="text-slate-400 text-[11px] mt-1 leading-tight">{cloud.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
