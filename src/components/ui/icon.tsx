import {
  Boxes,
  Calculator,
  Globe,
  IdCard,
  Send,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  UserCheck,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

/**
 * Icons referenced by name from content files, so `src/content` stays free of
 * component imports. Add an entry here when a new `icon` name is used.
 */
const icons = {
  Boxes,
  Calculator,
  Globe,
  IdCard,
  Send,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  UserCheck,
  Users,
  Warehouse,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = icons[name as IconName] ?? Boxes;
  return <Component className={className} aria-hidden />;
}
