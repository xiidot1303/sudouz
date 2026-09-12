import { useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* Soft mint wash behind the headline; purely decorative. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-mint/10 blur-3xl sm:-top-40 sm:h-[36rem] sm:w-[36rem]"
      />

      <Container className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-text sm:text-sm">
          {t("greeting")}
        </p>

        {/* Clamped so the name scales smoothly instead of jumping at breakpoints. */}
        <h1 className="mt-3 text-balance text-[clamp(2rem,8vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
          {t("name")}
        </h1>

        <p className="mt-3 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
          {t("role")}
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("tagline")}
        </p>

        {/* Full-width buttons on the narrowest screens, inline from `xs` up. */}
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
          <Link
            href="/#projects"
            className={buttonVariants({ variant: "brand", size: "lg" })}
          >
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
