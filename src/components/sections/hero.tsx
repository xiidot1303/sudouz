import { useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <p className="text-sm text-muted-foreground">{t("greeting")}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">
          {t("name")}
        </h1>
        <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">
          {t("role")}
        </p>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("tagline")}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#projects" className={buttonVariants({ size: "lg" })}>
            {t("ctaPrimary")} <ArrowRight />
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <Mail /> {t("ctaSecondary")}
          </a>
        </div>
      </Container>
    </section>
  );
}
