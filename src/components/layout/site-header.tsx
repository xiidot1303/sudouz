import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNav } from "./mobile-nav";
import { navItems } from "./nav-items";

export async function SiteHeader() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="tap-target flex items-center rounded-md transition-opacity hover:opacity-80"
          aria-label="SUDO — home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-accent-text"
            >
              {t(item.key)}
              {/* The shell equivalent, revealed on hover — a small wink for
                  anyone who reads it, invisible otherwise. */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] text-accent-text/0 transition-colors group-hover:text-accent-text/70"
              >
                {t(`commands.${item.key}`)}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* The switcher lives in the drawer on mobile to save header width. */}
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
