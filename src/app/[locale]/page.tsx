import { getTranslations, setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Placeholder } from "@/components/sections/placeholder";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Contact } from "@/components/sections/contact";
import { Section } from "@/components/ui/section";

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

      <About />

      <Solutions />

      <Services />

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

      <Contact />
    </>
  );
}
