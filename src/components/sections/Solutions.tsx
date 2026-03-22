import Image from "next/image";
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

        {/* Decorative image banner */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl shadow-orange-100/50">
          <Image
            src="/images/server-room.jpg"
            alt="Infrastructure and cloud solutions"
            width={1200}
            height={320}
            className="w-full h-52 object-cover object-center"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-950/75 via-stone-900/55 to-transparent flex items-center px-10">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1 font-semibold">Delivery Models</p>
              <h3 className="text-white text-2xl sm:text-3xl font-black leading-tight">
                On-site · Off-site · Off-shore · Near-shore
              </h3>
              <p className="text-orange-200/80 text-sm mt-2">The right model for every project and budget</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((sol) => (
            <div key={sol.id} id={sol.id} className="card p-7" data-testid={`solution-card-${sol.id}`}>
              <div className="w-10 h-10 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center mb-5">
                <IconResolver name={sol.icon} className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-base font-semibold text-slate-800 mb-2">{sol.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">{sol.summary}</p>
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
