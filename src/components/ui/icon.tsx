import {
  Boxes,
  Calculator,
  FileSignature,
  Globe,
  IdCard,
  LifeBuoy,
  Mail,
  MessageCircle,
  Phone,
  Receipt,
  Rocket,
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

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from "./brand-icons";

/**
 * Icons referenced by name from content files, so `src/content` stays free of
 * component imports. Add an entry here when a new `icon` name is used.
 */
const icons = {
  Boxes,
  Calculator,
  FileSignature,
  Globe,
  IdCard,
  LifeBuoy,
  Mail,
  MessageCircle,
  Phone,
  Receipt,
  Rocket,
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

/**
 * Brand marks, kept separate because lucide-react no longer ships them and
 * a generic stand-in would not be recognisable.
 */
const brandIcons = {
  Github: GithubIcon,
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  Telegram: TelegramIcon,
  Whatsapp: WhatsappIcon,
} satisfies Record<string, (props: { className?: string }) => React.ReactElement>;

export type IconName = keyof typeof icons | keyof typeof brandIcons;

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Brand = brandIcons[name as keyof typeof brandIcons];
  if (Brand) return <Brand className={className} />;

  const Component = icons[name as keyof typeof icons] ?? Boxes;
  return <Component className={className} aria-hidden />;
}
