import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { solutions } from "@/content/solutions";
import { services } from "@/content/services";
import { getSolutionDetail } from "@/content/detail/index";
import { routing } from "@/i18n/routing";
import { DetailPage } from "@/components/detail/detail-page";
import { pick } from "@/lib/utils";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    solutions.map((solution) => ({ locale, slug: solution.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const solution = solutions.find((entry) => entry.slug === slug);
  if (!solution) return {};

  const detail = getSolutionDetail(slug);
  const title = pick(solution.title, locale);

  return {
    title,
    description: detail
      ? pick(detail.lead, locale)
      : pick(solution.outcome, locale),
    alternates: {
      canonical: `/solutions/${slug}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === routing.defaultLocale
            ? `/solutions/${slug}`
            : `/${l}/solutions/${slug}`,
        ]),
      ),
    },
  };
}

export default async function SolutionDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const solution = solutions.find((entry) => entry.slug === slug);
  if (!solution) notFound();

  // The services that typically deliver this solution.
  const related = solution.delivers
    .map((serviceSlug) => services.find((s) => s.slug === serviceSlug))
    .filter((service) => service !== undefined)
    .map((service) => ({
      href: `/services/${service.slug}`,
      label: pick(service.title, locale),
    }));

  return (
    <DetailPage
      section="solutions"
      slug={slug}
      icon={solution.icon}
      title={pick(solution.title, locale)}
      summary={pick(solution.outcome, locale)}
      detail={getSolutionDetail(slug)}
      related={related.length ? related : undefined}
    />
  );
}
