import { useLocale, useTranslations } from "next-intl";

import { services } from "@/content/services";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { pick } from "@/lib/utils";

export function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <Section
      id="services"
      title={t("title")}
      subtitle={t("subtitle")}
      command="which erp crm bots"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/60"
            >
              <Icon
                name={service.icon}
                className="size-6 text-accent-text transition-transform group-hover:scale-110"
              />

              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {pick(service.title, locale)}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pick(service.summary, locale)}
              </p>

              <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                {pick(service.points, locale).map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 font-mono text-xs text-muted-foreground"
                  >
                    <span aria-hidden className="text-accent-text">
                      +
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
