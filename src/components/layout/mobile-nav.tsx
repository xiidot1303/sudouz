"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown, Menu, X } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { navItems } from "./nav-items";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Prompt } from "@/components/terminal";
import { cn, pick } from "@/lib/utils";

/** The mount state never changes after hydration, so there is nothing to subscribe to. */
function subscribeToNothing() {
  return () => {};
}

function childTitle(sectionKey: string, slug: string, locale: string) {
  const source = sectionKey === "solutions" ? solutions : services;
  const match = source.find((entry) => entry.slug === slug);
  return match ? pick(match.title, locale) : slug;
}

export function MobileNav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  // `document` only exists after hydration, so gate the portal on mount.
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

  // Lock body scroll while the drawer is open, and close it on Escape.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    setExpanded(null);
  }

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="tap-target hover:text-accent-text"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {/* Portaled to <body>: the header sets `backdrop-filter`, which makes
          it a containing block for fixed descendants — rendering the panel
          inside it would clip the drawer to the header's 64px height. */}
      {open && mounted
        ? createPortal(
            <div
              id="mobile-nav-panel"
              className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto overscroll-contain bg-background"
            >
              <p className="flex items-center gap-2 border-b border-border px-4 py-3">
                <Prompt path="~" />
                <span className="font-mono text-xs text-foreground/80">
                  menu
                </span>
              </p>

              <nav className="flex flex-col gap-1 px-4 py-4">
                {navItems.map((item) => {
                  const hasChildren = Boolean(item.children?.length);
                  const isExpanded = expanded === item.key;

                  return (
                    <div key={item.key}>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={close}
                          className="tap-target flex flex-1 items-center rounded-md px-3 py-3 text-lg font-medium transition-colors hover:bg-accent/10 hover:text-accent-text"
                        >
                          {t(item.key)}
                        </Link>

                        {hasChildren ? (
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-label={`${t(item.key)} — submenu`}
                            onClick={() =>
                              setExpanded(isExpanded ? null : item.key)
                            }
                            className="tap-target flex items-center justify-center rounded-md px-3 text-muted-foreground transition-colors hover:text-accent-text"
                          >
                            <ChevronDown
                              aria-hidden
                              className={cn(
                                "size-5 transition-transform",
                                isExpanded && "rotate-180",
                              )}
                            />
                          </button>
                        ) : null}
                      </div>

                      {hasChildren && isExpanded ? (
                        <ul className="mb-2 ml-3 border-l border-border pl-3">
                          {item.children!.map((child) => (
                            <li key={child.slug}>
                              <Link
                                href={child.href}
                                onClick={close}
                                className="tap-target flex items-center rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-accent-text"
                              >
                                {childTitle(item.key, child.slug, locale)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-auto flex border-t border-border px-4 py-6">
                <LanguageSwitcher />
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
