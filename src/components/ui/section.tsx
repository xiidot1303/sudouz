import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Prompt } from "@/components/terminal";

export function Section({
  id,
  title,
  subtitle,
  /** Shell command shown above the heading, e.g. `ls ~/projects`. */
  command,
  /** Path shown in the prompt before the command. */
  path = "~",
  children,
  className,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  command?: string;
  path?: string;
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
            {command ? (
              <p className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                <Prompt path={path} />
                <span className="font-mono text-xs text-foreground/80 sm:text-sm">
                  {command}
                </span>
              </p>
            ) : null}

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
