import { getLocale, getTranslations } from "next-intl/server";

import { siteConfig } from "@/content/site";
import { contactChannels } from "@/content/contact";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";
import { Cursor } from "@/components/terminal";
import { Icon } from "@/components/ui/icon";
import { pick } from "@/lib/utils";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const locale = await getLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-8 sm:py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
        <div className="flex items-center gap-2">
          <Logo className="text-lg" showCursor={false} />
          <Cursor className="h-[0.9em] w-[0.5em]" />
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-1">
          {contactChannels.map((channel) => (
            <li key={channel.key}>
              <a
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                title={`${channel.label} — ${pick(channel.note, locale)}`}
                className="tap-target flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent-text"
              >
                <Icon name={channel.icon} className="size-4" />
                <span className="sr-only">{channel.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}. {t("rights")}
        </p>
      </Container>
    </footer>
  );
}
