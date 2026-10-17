/**
 * Locked first long-tail (#3): create opengraph image from png.
 * #4 (utm link builder) reserved — do not add until product Brief lands.
 */

export type Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  publishedAt: string;
  body: string[];
  checklist: string[];
};

export const guides: Guide[] = [
  {
    slug: "create-opengraph-image-from-png",
    title: "Create Open Graph Image from PNG (Free Guide)",
    h1: "Create an Open Graph Image from a PNG",
    description:
      "Turn a PNG into a correctly sized Open Graph image for social previews. Steps, size checklist, and common mistakes—no design tool required.",
    publishedAt: "2026-10-17",
    body: [
      "Open Graph (OG) images are the preview pictures that show up when someone shares your link on social platforms. A PNG you already have often needs a crop or resize before it looks right in those cards—wrong aspect ratio gets clipped, and oversized files slow the preview.",
      "Size checklist: aim for at least 1200×630 pixels (roughly 1.91:1). Many platforms crop differently around that frame, so keep important text and faces inside a safe center area and avoid putting critical detail on the far edges.",
      "Steps: (1) pick a sharp PNG, (2) set the canvas to about 1200×630 and crop or letterbox so the subject stays centered, (3) export a web-friendly PNG or JPEG under ~1 MB, (4) host it on HTTPS and set og:image (or your platform’s social-image field) to the absolute URL.",
      "Common pitfalls: file too large so crawlers skip or timeout; relative paths instead of absolute HTTPS URLs; CDN or social caches serving an old image after you replace the file; non-HTTPS image URLs that some networks refuse to load.",
      "Use the copyable checklist below before you publish. This page is a free guide only—no upload tool yet. When you are ready for a converter, it can sit next to this guide without changing the URL.",
    ],
    checklist: [
      "Image is at least 1200×630 (≈1.91:1)",
      "Subject stays in the center safe area (edges may crop)",
      "Exported file is under ~1 MB (PNG or JPEG)",
      "og:image uses an absolute HTTPS URL (not a relative path)",
      "After replace, purge CDN / social cache if the old preview sticks",
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
