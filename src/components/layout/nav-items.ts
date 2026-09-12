/** Shared by the desktop nav and the mobile drawer. */
export const navItems = [
  { key: "about", href: "/#about" },
  { key: "projects", href: "/#projects" },
  { key: "clients", href: "/#clients" },
  { key: "team", href: "/#team" },
  { key: "experience", href: "/#experience" },
  { key: "contact", href: "/#contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];
