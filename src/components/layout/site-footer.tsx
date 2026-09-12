import { getTranslations } from "next-intl/server";

import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-8">
      <Container className="flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year} {siteConfig.name}. {t("rights")}
        </p>
        <p className="font-mono text-xs">{siteConfig.domain}</p>
      </Container>
    </footer>
  );
}
