"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Languages } from "lucide-react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function onSelect(next: Locale) {
    startTransition(() => {
      // `params` keeps dynamic segments (e.g. project slug) intact.
      router.replace(
        // @ts-expect-error -- pathname and params are matched at runtime.
        { pathname, params },
        { locale: next },
      );
    });
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-md border border-border p-0.5",
        isPending && "opacity-60",
      )}
    >
      <Languages className="mx-1.5 size-4 text-muted-foreground" aria-hidden />
      <span className="sr-only">{t("label")}</span>
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onSelect(l)}
          aria-current={l === locale ? "true" : undefined}
          title={localeNames[l]}
          className={cn(
            "rounded px-2 py-1 text-xs font-medium uppercase transition-colors",
            l === locale
              ? "bg-secondary text-secondary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
