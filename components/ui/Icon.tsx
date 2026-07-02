import {
  GraduationCap,
  FlaskConical,
  Cloud,
  Globe,
  School,
  ShieldCheck,
  Code2,
  Trophy,
  Package,
  FileText,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  FlaskConical,
  Cloud,
  Globe,
  School,
  ShieldCheck,
  Code2,
  Trophy,
  Package,
  FileText,
  GitBranch,
};

type IconProps = {
  name: string;
  className?: string;
  size?: number;
};

export default function Icon({ name, className, size = 20 }: IconProps) {
  const LucideComponent = icons[name];
  if (!LucideComponent) return null;
  return <LucideComponent className={className} size={size} strokeWidth={1.8} />;
}
