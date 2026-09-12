import type { DetailContent } from "../detail";

import { accounting } from "./accounting";
import { ai } from "./ai";
import { clients } from "./clients";
import { crm } from "./crm";
import { ecommerce } from "./ecommerce";
import { erp } from "./erp";
import { hr } from "./hr";
import { mobile } from "./mobile";
import { onlineStore } from "./onlineStore";
import { sales } from "./sales";
import { telegramBots } from "./telegramBots";
import { warehouse } from "./warehouse";
import { web } from "./web";

/**
 * Long-form content keyed by slug. Keys must match the `slug` values in
 * `solutions.ts` and `services.ts` — note the hyphenated ones, which differ
 * from the camelCase export names.
 *
 * A slug with no entry still renders a valid page from its short summary,
 * so pages can gain depth one at a time.
 */
export const solutionDetails: Record<string, DetailContent> = {
  warehouse,
  sales,
  clients,
  hr,
  accounting,
  "online-store": onlineStore,
};

export const serviceDetails: Record<string, DetailContent> = {
  erp,
  crm,
  web,
  "telegram-bots": telegramBots,
  mobile,
  ecommerce,
  ai,
};

export function getSolutionDetail(slug: string): DetailContent | undefined {
  return solutionDetails[slug];
}

export function getServiceDetail(slug: string): DetailContent | undefined {
  return serviceDetails[slug];
}
