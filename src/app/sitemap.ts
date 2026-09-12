import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { routing } from "@/i18n/routing";

/** Absolute URL for a path in a given locale. */
function url(locale: string, path = "") {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteConfig.url}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    { path: "", priority: 1 },
    { path: "/solutions", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    ...solutions.map((s) => ({ path: `/solutions/${s.slug}`, priority: 0.8 })),
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
  ];

  return routing.locales.flatMap((locale) =>
    paths.map(({ path, priority }) => ({
      url: url(locale, path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === routing.defaultLocale ? priority : priority * 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, url(l, path)]),
        ),
      },
    })),
  );
}
