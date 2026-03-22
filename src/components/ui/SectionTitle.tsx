interface SectionTitleProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  label,
  title,
  highlight,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`} data-testid="section-title">
      {label && <div className="badge mb-4">{label}</div>}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className={`text-slate-500 text-base leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
