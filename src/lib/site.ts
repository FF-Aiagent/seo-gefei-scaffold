/**
 * Site URL from env. Never hardcode a custom domain.
 * Pre-prod: set NEXT_PUBLIC_SITE_URL to the Vercel URL.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    return raw.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}

export const SITE_NAME = "OG Image Guides";

export const SITE_DESCRIPTION =
  "Free English guides for Open Graph images—resize a PNG to 1200×630 and ship social previews that crop cleanly.";
