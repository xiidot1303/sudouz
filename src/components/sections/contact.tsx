import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

import { contactChannels } from "@/content/contact";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { cn, pick } from "@/lib/utils";

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const primary = contactChannels.filter((channel) => channel.primary);
  const secondary = contactChannels.filter((channel) => !channel.primary);

  return (
    <Section
      id="contact"
      title={t("title")}
      subtitle={t("subtitle")}
      command="telegram --open"
    >
      {/* Telegram and WhatsApp first: those are the channels actually used. */}
      <ul className="grid gap-4 sm:grid-cols-2">
        {primary.map((channel) => (
          <li key={channel.key}>
            <a
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className={cn(
                "group flex items-center gap-4 rounded-xl border p-5 transition-colors",
                channel.key === "telegram"
                  ? "border-accent/50 bg-accent/5 hover:border-accent"
                  : "border-border bg-card hover:border-accent/60",
              )}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Icon name={channel.icon} className="size-5 text-accent-text" />
              </span>
              <span className="min-w-0">
                <span className="block font-medium">{channel.label}</span>
                <span className="block text-sm text-muted-foreground">
                  {pick(channel.note, locale)}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden
                className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-text"
              />
            </a>
          </li>
        ))}
      </ul>

      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {secondary.map((channel) => (
          <li key={channel.key}>
            <a
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-accent/60"
            >
              <Icon
                name={channel.icon}
                className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent-text"
              />
              <span className="min-w-0 truncate text-sm">{channel.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
