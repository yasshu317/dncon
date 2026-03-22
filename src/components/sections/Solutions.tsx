import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import IconResolver from "@/components/ui/IconResolver";
import { siteConfig } from "@/config/site.config";

export default function Solutions({ preview = false }: { preview?: boolean }) {
  const items = preview ? siteConfig.solutions.slice(0, 3) : siteConfig.solutions;

  return (
    <section id="solutions" className="py-24 px-5" data-testid="solutions-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Solutions"
          title="Engagement"
          highlight="Models"
          description="Flexible delivery options tailored to your budget, team size, and collaboration needs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((sol) => (
            <div key={sol.id} id={sol.id} className="card p-7" data-testid={`solution-card-${sol.id}`}>
              <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center mb-5">
                <IconResolver name={sol.icon} className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{sol.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">{sol.summary}</p>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{sol.description}</p>
            </div>
          ))}
        </div>

        {preview && (
          <div className="mt-10 text-center">
            <Link href="/solutions" className="btn-ghost text-sm py-2.5 px-6">
              View All Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
