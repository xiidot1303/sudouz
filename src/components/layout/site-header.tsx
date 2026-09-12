import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";

export function SiteHeader() {
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

        <DesktopNav />

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
