import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { services } from "@/content/services";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Prompt } from "@/components/terminal";
import { pick } from "@/lib/utils";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("services");
  return { title: t("title"), description: t("subtitle") };
}

export default async function ServicesIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("services");
  const activeLocale = await getLocale();

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <Prompt path="~/services" />
          <span className="font-mono text-xs text-foreground/80 sm:text-sm">
            which
          </span>
        </p>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {t("title")}
          <span aria-hidden className="text-accent-text">
            .
          </span>
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-lg text-muted-foreground">
          {t("subtitle")}
        </p>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/60 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon
                      name={service.icon}
                      className="size-5 text-accent-text"
                    />
                  </span>
                  <h2 className="text-lg font-semibold tracking-tight">
                    {pick(service.title, activeLocale)}
                  </h2>
                </div>

                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {pick(service.summary, activeLocale)}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text">
                  {t("learnMore")}
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
