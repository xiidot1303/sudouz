import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Picks the value for the active locale from a `Localized<T>` map.
 * Falls back to English when a translation is missing.
 */
export function pick<T>(
  value: Record<string, T>,
  locale: string,
  fallback = "en",
): T {
  return value[locale] ?? value[fallback];
}
