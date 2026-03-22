import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle2, Briefcase, Clock } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Careers() {
  const { careers } = siteConfig;
  const fullTime = careers.positions.filter((p) => p.type === "full-time");
  const contract = careers.positions.filter((p) => p.type === "contract");

  return (
    <section id="careers" className="py-24 px-5 surface" data-testid="careers-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Careers" title="Join Our" highlight="Team" description={careers.intro} />

        {/* Benefits */}
        <div className="card p-8 mb-10">
          <p className="text-sm font-semibold text-white mb-5">Benefits & Culture</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {careers.benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </div>

        <PositionGroup title="Full-Time Positions" positions={fullTime} />
        <PositionGroup title="Contract Positions" positions={contract} className="mt-8" />

        <div className="mt-8 card p-8 text-center">
          <p className="text-sm font-semibold text-white mb-2">How to Apply</p>
          <p className="text-xs text-slate-400">{careers.applyInfo}</p>
        </div>
      </div>
    </section>
  );
}

function PositionGroup({
  title,
  positions,
  className = "",
}: {
  title: string;
  positions: typeof siteConfig.careers.positions;
  className?: string;
}) {
  if (!positions.length) return null;
  return (
    <div className={className}>
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-4 h-4 text-blue-400" />
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {positions.map((pos) => (
          <div key={pos.id} className="card p-6" data-testid={`job-${pos.positionId}`}>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h4 className="text-sm font-semibold text-white">{pos.title}</h4>
                <span className="text-xs text-slate-600">ID: {pos.positionId}</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                  pos.type === "full-time"
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                }`}>
                  {pos.type === "full-time" ? "Full-Time" : "Contract"}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500 border border-white/[0.06] rounded-full px-2.5 py-1">
                  <Clock className="w-3 h-3" />{pos.experience}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{pos.skills}</p>
            {pos.location && (
              <p className="text-xs text-slate-600 mt-3">{pos.location} · {pos.hoursPerWeek} hrs/week</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
