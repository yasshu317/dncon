import { Cloud, Globe2, Layers3 } from "lucide-react";

type Provider = "aws" | "azure" | "gcp";

const styles: Record<
  Provider,
  { Icon: typeof Cloud; gradient: string; iconClass: string; ring: string }
> = {
  aws: {
    Icon: Cloud,
    gradient: "from-amber-400/25 via-orange-400/20 to-amber-500/10",
    iconClass: "text-amber-700",
    ring: "ring-amber-200/60",
  },
  azure: {
    Icon: Globe2,
    gradient: "from-blue-400/25 via-sky-400/15 to-blue-600/10",
    iconClass: "text-blue-700",
    ring: "ring-blue-200/60",
  },
  gcp: {
    Icon: Layers3,
    gradient: "from-emerald-400/20 via-teal-400/15 to-cyan-500/10",
    iconClass: "text-emerald-700",
    ring: "ring-emerald-200/60",
  },
};

export default function CloudProviderBadge({
  variant,
  name,
  desc,
}: {
  variant: Provider;
  name: string;
  desc: string;
}) {
  const { Icon, gradient, iconClass, ring } = styles[variant];
  return (
    <div
      className={`rounded-xl border border-orange-100/90 bg-white/85 backdrop-blur-sm p-4 text-center shadow-md shadow-orange-100/30 ring-1 ${ring}`}
    >
      <div
        className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} ring-1 ${ring}`}
      >
        <Icon className={`h-6 w-6 ${iconClass}`} strokeWidth={2} aria-hidden />
      </div>
      <p className="text-slate-800 font-bold text-sm">{name}</p>
      <p className="text-slate-500 text-[11px] mt-1.5 leading-snug">{desc}</p>
    </div>
  );
}
