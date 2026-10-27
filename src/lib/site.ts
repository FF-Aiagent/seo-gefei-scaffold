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

export const SITE_NAME = "Practical Guides";

export const SITE_DESCRIPTION =
  "Free English guides for Open Graph images, searchable PDFs, and keyword density—resize a PNG to 1200×630, OCR a scanned PDF, analyze keyword density in your browser, and ship with a clear checklist.";
