import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, MapPin } from "lucide-react";

import {
  company,
  companyIndustries,
  companyMission,
  companyProducts,
  companyStats,
  companyTagline,
} from "@/content/company";
import { Section } from "@/components/ui/section";
import { pick } from "@/lib/utils";

export function Team() {
  const t = useTranslations("team");
  const locale = useLocale();

  return (
    <Section id="team" title={t("title")} subtitle={t("subtitle")}>
      <figure className="overflow-hidden rounded-xl border border-border">
        <Image
          src={company.teamPhoto}
          alt={t("photoAlt")}
          width={1280}
          height={853}
          sizes="(min-width: 1024px) 64rem, 100vw"
          className="h-auto w-full object-cover"
        />
      </figure>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-2xl font-semibold tracking-tight">
              {company.name}
            </h3>
            <a
              href={company.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm text-accent-text underline-offset-4 hover:underline"
            >
              {t("visitSite")}
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <p className="mt-2 text-muted-foreground">
            {pick(companyTagline, locale)}
          </p>

          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            {company.location.city}, {company.location.country} ·{" "}
            {t("founded")} {company.founded}
          </p>

          <blockquote className="mt-6 border-l-2 border-accent pl-4 text-pretty leading-relaxed">
            <span className="mb-1 block font-mono text-xs uppercase tracking-[0.15em] text-accent-text">
              {t("missionLabel")}
            </span>
            {pick(companyMission, locale)}
          </blockquote>

          {/* Stat row: wraps to two columns on the narrowest screens. */}
          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {companyStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-lg border border-border bg-card px-4 py-3"
              >
                <dt className="font-mono text-2xl font-semibold text-accent-text">
                  {stat.value}
                </dt>
                <dd className="mt-0.5 text-xs text-muted-foreground">
                  {pick(stat.label, locale)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {t("productsLabel")}
            </h4>
            <ul className="mt-3 space-y-3">
              {companyProducts.map((product) => (
                <li
                  key={product.name}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <p className="font-mono text-sm font-semibold">
                    {product.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pick(product.description, locale)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {t("industriesLabel")}
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {companyIndustries.map((industry) => (
                <li
                  key={industry.en}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {pick(industry, locale)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
