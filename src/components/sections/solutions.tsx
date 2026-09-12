import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

import { solutions } from "@/content/solutions";
import { services } from "@/content/services";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { pick } from "@/lib/utils";

export function Solutions() {
  const t = useTranslations("solutions");
  const tServices = useTranslations("services");
  const locale = useLocale();

  return (
    <Section
      id="solutions"
      title={t("title")}
      subtitle={t("subtitle")}
      command="man solutions"
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {solutions.map((solution) => {
          const title = pick(solution.title, locale);

          return (
            <li
              key={solution.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon name={solution.icon} className="size-5 text-accent-text" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              </div>

              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {t("problem")}
              </p>
              <p className="mt-1.5 text-pretty leading-relaxed text-muted-foreground">
                “{pick(solution.symptom, locale)}”
              </p>

              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-text">
                {t("result")}
              </p>
              <p className="mt-1.5 text-pretty leading-relaxed">
                {pick(solution.outcome, locale)}
              </p>

              {/* Which services deliver this — connects the two sections. */}
              <p className="mt-5 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                <span className="font-mono">{tServices("deliveredWith")}:</span>
                {solution.delivers.map((slug) => {
                  const service = services.find((s) => s.slug === slug);
                  if (!service) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className="rounded-full border border-border px-2 py-0.5 transition-colors hover:border-accent/60 hover:text-accent-text"
                    >
                      {pick(service.title, locale)}
                    </Link>
                  );
                })}
              </p>

              <Link
                href={`/solutions/${solution.slug}`}
                className="group mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent-text underline-offset-4 hover:underline"
              >
                {t("cta")}
                <ArrowRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
