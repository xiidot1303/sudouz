"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { navItems } from "./nav-items";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { cn, pick } from "@/lib/utils";

/** Title lookup for a child entry, by section. */
function childTitle(sectionKey: string, slug: string, locale: string) {
  const source = sectionKey === "solutions" ? solutions : services;
  const match = source.find((entry) => entry.slug === slug);
  return match ? pick(match.title, locale) : slug;
}

export function DesktopNav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  // Which dropdown is open, by key. Hover opens it; focus keeps it usable
  // from the keyboard.
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const isOpen = openKey === item.key;

        return (
          <div
            key={item.key}
            className="relative"
            onMouseEnter={() => hasChildren && setOpenKey(item.key)}
            onMouseLeave={() => hasChildren && setOpenKey(null)}
            onFocus={() => hasChildren && setOpenKey(item.key)}
            onBlur={(event) => {
              // Close only when focus leaves the whole group.
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setOpenKey(null);
              }
            }}
          >
            <Link
              href={item.href}
              aria-expanded={hasChildren ? isOpen : undefined}
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors",
                "text-muted-foreground hover:text-accent-text",
              )}
            >
              {t(item.key)}
              {hasChildren ? (
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-3.5 transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              ) : null}
            </Link>

            {hasChildren && isOpen ? (
              <div className="absolute left-0 top-full w-64 pt-2">
                <ul className="terminal-window bg-popover p-1.5 shadow-lg">
                  {item.children!.map((child) => (
                    <li key={child.slug}>
                      <Link
                        href={child.href}
                        onClick={() => setOpenKey(null)}
                        className="block rounded px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent-text"
                      >
                        {childTitle(item.key, child.slug, locale)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
