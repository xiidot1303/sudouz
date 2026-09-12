import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url:
      locale === routing.defaultLocale
        ? siteConfig.url
        : `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.8,
  }));
}
