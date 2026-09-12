"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { navItems } from "./nav-items";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Prompt } from "@/components/terminal";

/** The mount state never changes after hydration, so there is nothing to subscribe to. */
function subscribeToNothing() {
  return () => {};
}

export function MobileNav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
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
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="tap-target flex items-baseline gap-3 rounded-md px-3 py-3 transition-colors hover:bg-accent/10 hover:text-accent-text"
                  >
                    <span className="text-lg font-medium">{t(item.key)}</span>
                    <span
                      aria-hidden
                      className="font-mono text-[11px] text-muted-foreground"
                    >
                      {t(`commands.${item.key}`)}
                    </span>
                  </Link>
                ))}
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
