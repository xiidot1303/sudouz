import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { getServiceDetail } from "@/content/detail/index";
import { routing } from "@/i18n/routing";
import { DetailPage } from "@/components/detail/detail-page";
import { pick } from "@/lib/utils";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((service) => ({ locale, slug: service.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) return {};

  const detail = getServiceDetail(slug);

  return {
    title: pick(service.title, locale),
    description: detail
      ? pick(detail.lead, locale)
      : pick(service.summary, locale),
    alternates: {
      canonical: `/services/${slug}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === routing.defaultLocale
            ? `/services/${slug}`
            : `/${l}/services/${slug}`,
        ]),
      ),
    },
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = services.find((entry) => entry.slug === slug);
  if (!service) notFound();

  // Solutions this service is used to deliver — the reverse of `delivers`.
  const related = solutions
    .filter((solution) => solution.delivers.includes(slug))
    .map((solution) => ({
      href: `/solutions/${solution.slug}`,
      label: pick(solution.title, locale),
    }));

  return (
    <DetailPage
      section="services"
      slug={slug}
      icon={service.icon}
      title={pick(service.title, locale)}
      summary={pick(service.summary, locale)}
      detail={getServiceDetail(slug)}
      related={related.length ? related : undefined}
    />
  );
}
