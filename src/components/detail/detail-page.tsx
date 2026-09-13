import { getLocale, getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { DetailContent } from "@/content/detail";
import { guarantees, integrations } from "@/content/guarantees";
import { processSteps } from "@/content/process";
import { contact } from "@/content/contact";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { buttonVariants } from "@/components/ui/button";
import { Prompt } from "@/components/terminal";
import { pick } from "@/lib/utils";

/**
 * Shared layout for a solution or service detail page.
 *
 * Section order follows what the research found on effective provider sites:
 * problem first, then concrete capabilities, then the trust devices
 * (what's included, how the work runs), then FAQ, then one clear CTA.
 */
export async function DetailPage({
  section,
  slug,
  icon,
  title,
  summary,
  detail,
  related,
}: {
  section: "solutions" | "services";
  slug: string;
  icon: string;
  title: string;
  summary: string;
  detail?: DetailContent;
  related?: { href: string; label: string }[];
}) {
  const locale = await getLocale();
  const t = await getTranslations("detail");
  const tNav = await getTranslations("nav");

  const command =
    section === "solutions" ? `man ${slug}` : `which ${slug}`;

  return (
    <>
      <section className="border-b border-border/60 py-12 sm:py-16">
        <Container>
          <Link
            href={`/${section}`}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent-text"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            {section === "solutions" ? tNav("allSolutions") : tNav("allServices")}
          </Link>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1">
            <Prompt path={`~/${section}`} />
            <span className="font-mono text-xs text-foreground/80 sm:text-sm">
              {command}
            </span>
          </p>

          <div className="mt-4 flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <Icon name={icon} className="size-6 text-accent-text" />
            </span>
            <div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-pretty text-lg text-muted-foreground">
                {detail ? pick(detail.lead, locale) : summary}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.telegram.url}
              target="_blank"
              rel="noreferrer noopener"
              className={buttonVariants({ variant: "brand", size: "lg" })}
            >
              <Icon name="Telegram" className="size-4" />
              {t("ctaPrimary")} <ArrowRight />
            </a>
            <Link
              href="/#contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {t("ctaSecondary")}
            </Link>
          </div>

          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {[t("microFree"), t("microNoCommitment"), t("microWritten")].map(
              (line) => (
                <span key={line} className="inline-flex items-center gap-1.5">
                  <Check className="size-3 text-accent-text" aria-hidden />
                  {line}
                </span>
              ),
            )}
          </p>
        </Container>
      </section>

      {detail ? (
        <>
          <section className="py-12 sm:py-16">
            <Container>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("problemTitle")}
                <span aria-hidden className="text-accent-text">
                  .
                </span>
              </h2>
              <div className="mt-6 max-w-3xl space-y-4">
                {pick(detail.problem, locale).map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-pretty leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-t border-border/60 py-12 sm:py-16">
            <Container>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("includesTitle")}
                <span aria-hidden className="text-accent-text">
                  .
                </span>
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pick(detail.includes, locale).map((item) => (
                  <li
                    key={item.title}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <h3 className="font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>

              {detail.outcomes ? (
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {pick(detail.outcomes, locale).map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent-text"
                        aria-hidden
                      />
                      <span className="text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Container>
          </section>
        </>
      ) : null}

      {/* What every engagement includes — the strongest trust device for a
          solo developer, so it appears on every detail page. */}
      <section className="border-t border-border/60 py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("guaranteesTitle")}
            <span aria-hidden className="text-accent-text">
              .
            </span>
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {guarantees.map((item) => (
              <li
                key={item.key}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <Icon
                  name={item.icon}
                  className="mt-0.5 size-5 shrink-0 text-accent-text"
                />
                <div>
                  <h3 className="font-semibold tracking-tight">
                    {pick(item.title, locale)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {pick(item.body, locale)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border/60 py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("processTitle")}
            <span aria-hidden className="text-accent-text">
              .
            </span>
          </h2>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <li key={step.key} className="bg-card p-5">
                <span className="font-mono text-xs text-accent-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-semibold tracking-tight">
                  {pick(step.title, locale)}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {pick(step.body, locale)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border/60 py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("integrationsTitle")}
            <span aria-hidden className="text-accent-text">
              .
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {t("integrationsBody")}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {integrations.map((integration) => (
              <li
                key={integration.name}
                className="rounded-lg border border-border bg-card px-3 py-2"
              >
                <span className="font-mono text-sm font-medium">
                  {integration.name}
                </span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {pick(integration.note, locale)}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {detail?.faq ? (
        <section className="border-t border-border/60 py-12 sm:py-16">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("faqTitle")}
              <span aria-hidden className="text-accent-text">
                .
              </span>
            </h2>
            <dl className="mt-8 max-w-3xl divide-y divide-border border-y border-border">
              {pick(detail.faq, locale).map((entry) => (
                <div key={entry.q} className="py-5">
                  <dt className="font-medium">{entry.q}</dt>
                  <dd className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {entry.a}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ) : null}

      {related?.length ? (
        <section className="border-t border-border/60 py-12 sm:py-16">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("relatedTitle")}
              <span aria-hidden className="text-accent-text">
                .
              </span>
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm transition-colors hover:border-accent/60 hover:text-accent-text"
                  >
                    {item.label}
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-border/60 py-14 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("finalCtaTitle", { subject: title.toLowerCase() })}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
              {t("finalCtaBody")}
            </p>
            <a
              href={contact.telegram.url}
              target="_blank"
              rel="noreferrer noopener"
              className={`${buttonVariants({ variant: "brand", size: "lg" })} mt-6`}
            >
              <Icon name="Telegram" className="size-4" />
              {t("ctaPrimary")} <ArrowRight />
            </a>
            <p className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              {[
                t("microFree"),
                t("microNoCommitment"),
                t("microWritten"),
                t("microContract"),
              ].map((line) => (
                <span key={line} className="inline-flex items-center gap-1.5">
                  <Check className="size-3 text-accent-text" aria-hidden />
                  {line}
                </span>
              ))}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
