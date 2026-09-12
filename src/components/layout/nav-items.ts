import { services } from "@/content/services";
import { solutions } from "@/content/solutions";

/**
 * Top-level navigation. Kept deliberately short — four entries — with the
 * long lists reachable through the two dropdowns rather than the bar itself.
 */
export type NavItem = {
  key: string;
  href: string;
  /** When set, the item opens a menu of these children. */
  children?: { slug: string; href: string }[];
};

export const navItems: NavItem[] = [
  {
    key: "solutions",
    href: "/solutions",
    children: solutions.map((s) => ({
      slug: s.slug,
      href: `/solutions/${s.slug}`,
    })),
  },
  {
    key: "services",
    href: "/services",
    children: services.map((s) => ({
      slug: s.slug,
      href: `/services/${s.slug}`,
    })),
  },
  { key: "about", href: "/about" },
  { key: "contact", href: "/#contact" },
];
