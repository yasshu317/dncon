export interface ContactInfo {
  address: string;
  phone: string;
  fax?: string;
  emails: Record<string, string>;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroConfig {
  headline: string;
  subheadline: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats: { value: string; label: string }[];
}

export interface Solution {
  id: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  technologies?: string[];
}

export interface JobPosition {
  id: string;
  title: string;
  positionId: string;
  type: "full-time" | "contract";
  experience: string;
  skills: string;
  location?: string;
  hoursPerWeek?: string;
}

export interface Partner {
  category: string;
  description: string;
  areas?: string[];
  contact?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  type: "news" | "event";
}

export interface TechCategory {
  category: string;
  icon: string;
  color: string;
  technologies: string[];
}

export interface SiteConfig {
  company: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    founded: string;
    logoText: string;
    contact: ContactInfo;
    socialLinks?: Record<string, string>;
  };
  theme: {
    primaryColor: string;
    accentColor: string;
  };
  navigation: NavItem[];
  hero: HeroConfig;
  about: {
    summary: string;
    additionalParagraphs: string[];
    mission: string;
    vision: string;
    whatWeDo: { icon: string; title: string; description: string }[];
    highlights: { icon: string; title: string; description: string }[];
  };
  solutions: Solution[];
  products: Product[];
  services: Service[];
  careers: {
    intro: string;
    benefits: string[];
    positions: JobPosition[];
    applyInfo: string;
  };
  partners: {
    intro: string;
    categories: Partner[];
  };
  clients: string[];
  techStack: TechCategory[];
  news: NewsItem[];
  events: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  /** Simple rule-based assistant (keywords → answers). Edit in site.config.ts */
  chatbot: {
    title: string;
    placeholder: string;
    welcomeMessage: string;
    suggestions: string[];
    faqs: { keywords: string[]; answer: string }[];
    fallbackMessage: string;
  };
}
