import { useTranslations } from "next-intl";

import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";

export function About() {
  const t = useTranslations("about");

  return (
    <Section id="about" title={t("title")} command="whoami --verbose">
      <div className="max-w-3xl">
        <p className="text-pretty text-xl font-medium leading-snug sm:text-2xl">
          {t("lead")}
        </p>

        <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
          {t("body")}
        </p>

        <p className="mt-4 border-l-2 border-accent pl-4 text-pretty leading-relaxed">
          {t("closing")}
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
          <div className="rounded-lg border border-border bg-card px-4 py-3">
            <dt className="font-mono text-2xl font-semibold text-accent-text">
              {siteConfig.yearsOfExperience}+
            </dt>
            <dd className="mt-0.5 text-xs text-muted-foreground">
              {t("yearsLabel")}
            </dd>
          </div>
          <div className="rounded-lg border border-border bg-card px-4 py-3">
            <dt className="font-mono text-2xl font-semibold text-accent-text">
              7
            </dt>
            <dd className="mt-0.5 text-xs text-muted-foreground">
              {t("servicesLabel")}
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
