import { getTranslations, setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { Placeholder } from "@/components/sections/placeholder";
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

      <Section id="about" title={t("about.title")}>
        <Placeholder label={t("about.body")} />
      </Section>

      <Section
        id="projects"
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      >
        <Placeholder label="—" />
      </Section>

      <Section
        id="clients"
        title={t("clients.title")}
        subtitle={t("clients.subtitle")}
      >
        <Placeholder label="—" />
      </Section>

      <Section id="experience" title={t("experience.title")}>
        <Placeholder label="—" />
      </Section>

      <Section
        id="contact"
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
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
