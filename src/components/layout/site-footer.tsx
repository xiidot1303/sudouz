import { getTranslations } from "next-intl/server";

import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-8 sm:py-10">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo className="text-lg" />
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}. {t("rights")}
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent-text"
        >
          {siteConfig.email}
        </a>
      </Container>
    </footer>
  );
}
