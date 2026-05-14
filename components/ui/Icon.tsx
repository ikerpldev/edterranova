import {
  Smile,
  Activity,
  Sparkles,
  Heart,
  Shield,
  Zap,
  Star,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Smile,
  Activity,
  Sparkles,
  Heart,
  Shield,
  Zap,
  Star,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function Icon({
  name,
  className,
  size = 24,
  strokeWidth = 1.75,
}: IconProps) {
  const Component = iconMap[name] ?? Smile;
  return <Component className={className} size={size} strokeWidth={strokeWidth} />;
}
