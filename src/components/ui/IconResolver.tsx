import {
  Lightbulb, Building2, MapPin, Globe, Navigation,
  LifeBuoy, Database, Network, Terminal, ClipboardList,
  PenTool, Code2, CheckSquare, ShoppingCart,
  Cpu, ShieldCheck, Users, CheckCircle2,
  ArrowRight, Mail, Phone, Send,
  Cloud, Layers,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Building2,
  MapPin,
  Globe,
  Navigation,
  LifeBuoy,
  Database,
  Network,
  Terminal,
  ClipboardList,
  PenTool,
  Code2,
  CheckSquare,
  ShoppingCart,
  Cpu,
  ShieldCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  Send,
  Cloud,
  Layers,
};

interface IconResolverProps {
  name: string;
  className?: string;
}

export default function IconResolver({ name, className = "w-5 h-5" }: IconResolverProps) {
  const Icon = iconMap[name] ?? Cpu;
  return <Icon className={className} />;
}
