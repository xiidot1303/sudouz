import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-16 py-14 sm:py-20 lg:py-24", className)}
    >
      <Container>
        {title ? (
          <header className="mb-8 sm:mb-12">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {title}
              <span aria-hidden className="text-accent-text">
                .
              </span>
            </h2>
            {subtitle ? (
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            ) : null}
          </header>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
