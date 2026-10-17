/**
 * Site URL from env. Never hardcode a production domain.
 * Domain TBD — set NEXT_PUBLIC_SITE_URL when ready.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    return raw.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}

/** Placeholder site name — replace when brand/domain is chosen. */
export const SITE_NAME = "SEO Scaffold";

export const SITE_DESCRIPTION =
  "Expandable English SEO site scaffold. Domain and target keywords TBD.";
