import { getTranslations, setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { Placeholder } from "@/components/sections/placeholder";
import { Team } from "@/components/sections/team";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <>
      <Hero />

      <Section id="about" title={t("about.title")} command="whoami --verbose">
        <Placeholder label={t("about.body")} command="cat about.md" />
      </Section>

      <Section
        id="projects"
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
        command="ls -la"
        path="~/projects"
      >
        <Placeholder label={t("common.empty")} command="ls" />
      </Section>

      <Section
        id="clients"
        title={t("clients.title")}
        subtitle={t("clients.subtitle")}
        command="cat clients.txt"
      >
        <Placeholder label={t("common.empty")} command="cat clients.txt" />
      </Section>

      <Team />

      <Section
        id="experience"
        title={t("experience.title")}
        command="history | grep work"
      >
        <Placeholder label={t("common.empty")} command="history" />
      </Section>

      <Section
        id="contact"
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
        command="mail -s 'hello'"
      >
        <a
          href={`mailto:${siteConfig.email}`}
          className={buttonVariants({ size: "lg" })}
        >
          {t("contact.emailMe")}
        </a>
      </Section>
    </>
  );
}
