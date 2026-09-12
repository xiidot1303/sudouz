import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* Soft mint wash behind the headline; purely decorative. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-mint/10 blur-3xl sm:-top-40 sm:h-[36rem] sm:w-[36rem]"
      />

      <Container className="relative">
        {/* The portrait is cut out flush at the bottom of its canvas, so it
            sits on the section baseline rather than floating. `items-end`
            keeps that alignment; on mobile it stacks under the copy. */}
        <div className="grid items-end gap-0 pt-16 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pt-24">
          <div className="pb-10 lg:pb-28 xl:pb-32">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-text sm:text-sm">
              {t("greeting")}
            </p>

            {/* Clamped so the name scales smoothly instead of jumping. */}
            <h1 className="mt-3 text-balance text-[clamp(2rem,7vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              {t("name")}
            </h1>

            <p className="mt-3 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
              {t("role")}
            </p>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("tagline")}
            </p>

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
          </div>

          <div className="relative -mb-px flex w-full items-end justify-center self-end lg:justify-end">
            {/* Mint disc sitting behind the figure, anchored to the baseline. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto aspect-square w-[92%] rounded-full bg-gradient-to-b from-brand-mint/25 to-brand-mint/5 blur-2xl"
            />
            <Image
              src="/images/hero.png"
              alt={t("portraitAlt")}
              width={844}
              height={1168}
              priority
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 20rem, 70vw"
              className="relative block h-auto w-[16rem] max-w-full object-contain object-bottom sm:w-[20rem] lg:w-full lg:max-w-[26rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
