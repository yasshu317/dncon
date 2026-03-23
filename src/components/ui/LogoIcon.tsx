import { siteConfig } from "@/config/site.config";

export default function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${siteConfig.company.name} logo`}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />

      {/* Center node */}
      <circle cx="20" cy="20" r="3.5" fill="white" />

      {/* Corner nodes */}
      <circle cx="10" cy="11" r="2.5" fill="white" fillOpacity="0.9" />
      <circle cx="30" cy="11" r="2.5" fill="white" fillOpacity="0.9" />
      <circle cx="10" cy="29" r="2.5" fill="white" fillOpacity="0.9" />
      <circle cx="30" cy="29" r="2.5" fill="white" fillOpacity="0.9" />

      {/* Side nodes */}
      <circle cx="33" cy="20" r="2" fill="white" fillOpacity="0.7" />
      <circle cx="7"  cy="20" r="2" fill="white" fillOpacity="0.7" />

      {/* Connecting lines */}
      <line x1="12.2" y1="12.2" x2="17.5" y2="17.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="27.8" y1="12.2" x2="22.5" y2="17.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="12.2" y1="27.8" x2="17.5" y2="22.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="27.8" y1="27.8" x2="22.5" y2="22.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="23.5" y1="20"   x2="31"   y2="20"   stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="9"    y1="20"   x2="16.5" y2="20"   stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
    </svg>
  );
}
