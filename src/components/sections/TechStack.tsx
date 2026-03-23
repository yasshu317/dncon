import { Gem } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import IconResolver from "@/components/ui/IconResolver";
import CloudProviderBadge from "@/components/ui/CloudProviderBadge";
import { assetPath } from "@/lib/assetPath";
import { siteConfig } from "@/config/site.config";

export default function TechStack() {
  const { techStack } = siteConfig;

  return (
    <section
      id="tech-stack"
      className="relative py-24 px-5 overflow-hidden"
      data-testid="techstack-section"
    >
      {/* Background: abstract tech + soft wash */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url(${assetPath("/images/tech-abstract.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url(${assetPath("/images/server-room.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/40 to-amber-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_20%,rgba(251,191,36,0.15),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
              className="group card p-6 relative overflow-hidden"
              data-testid={`tech-category-${cat.category.toLowerCase().replace(/[\s&/]+/g, "-")}`}
            >
              <div
                className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-orange-100/50 opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-200 shadow-sm">
                  <IconResolver name={cat.icon} className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">{cat.category}</h3>
              </div>
              <div className="relative flex flex-wrap gap-1.5">
                {cat.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Rails spotlight */}
          <div className="card p-8 relative overflow-hidden ring-1 ring-orange-100/80">
            <div
              className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-red-500/10"
              aria-hidden
            />
            <Gem className="absolute right-6 top-6 h-14 w-14 text-red-500/15" aria-hidden />
            <div
              className="inline-flex items-center gap-2 badge mb-5"
              style={{
                background: "rgba(239,68,68,0.1)",
                borderColor: "rgba(239,68,68,0.25)",
                color: "#b91c1c",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Ruby on Rails
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Convention-over-Configuration</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Rapid, production-grade web applications leveraging Rails&apos; full-stack power — ActiveRecord ORM, Action
              Cable, Hotwire/Turbo for modern UX without complexity.
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
                <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Multi-cloud spotlight */}
          <div className="card p-8 relative overflow-hidden ring-1 ring-violet-100/80">
            <div
              className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-violet-500/10"
              aria-hidden
            />
            <div
              className="inline-flex items-center gap-2 badge mb-5"
              style={{
                background: "rgba(124,58,237,0.1)",
                borderColor: "rgba(124,58,237,0.25)",
                color: "#6d28d9",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Cloud-Native 2026
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Multi-Cloud & Serverless</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              AWS, Azure, and GCP architectures using Kubernetes, Terraform, and GitOps — scalable, secure, and
              cost-efficient by design.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <CloudProviderBadge variant="aws" name="AWS" desc="Lambda · ECS · RDS" />
              <CloudProviderBadge variant="azure" name="Azure" desc="AKS · Functions · DevOps" />
              <CloudProviderBadge variant="gcp" name="GCP" desc="GKE · Cloud Run · BigQuery" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
