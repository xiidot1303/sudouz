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
    <section id={id} className={cn("scroll-mt-20 py-16 sm:py-24", className)}>
      <Container>
        {title ? (
          <header className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 text-muted-foreground">{subtitle}</p>
            ) : null}
          </header>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
