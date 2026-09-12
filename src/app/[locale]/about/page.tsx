import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { Section } from "@/components/ui/section";
import { Placeholder } from "@/components/sections/placeholder";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  return { title: t("title"), description: t("lead") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <>
      <About />

      <Section
        id="experience"
        title={t("experience.title")}
        command="history | grep work"
      >
        <Placeholder label={t("common.empty")} command="history" />
      </Section>

      <Team />
    </>
  );
}
