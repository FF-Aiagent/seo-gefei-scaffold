/**
 * Primary long-tail: N1 resize png to 1200x630 (page live, watering gate closed).
 * #3 shell kept live but unlisted (no home/nav link).
 */

export type Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  publishedAt: string;
  body: string[];
  checklist: string[];
  /** When false, page stays reachable but is omitted from home + sitemap. */
  listed: boolean;
};

export const guides: Guide[] = [
  {
    slug: "resize-png-to-1200x630",
    title: "Resize PNG to 1200×630 for Open Graph",
    h1: "Resize a PNG to 1200×630 (Open Graph size)",
    description:
      "How to resize a PNG to 1200×630 for social OG previews—steps, aspect ratio, and export checklist.",
    publishedAt: "2026-10-17",
    listed: true,
    body: [
      "Most social Open Graph (OG) cards look best when the image is about 1200×630 pixels—roughly a 1.91:1 frame. A PNG you already have is often a different size, so resizing (and usually a center crop) is the fastest way to stop platforms from clipping heads, text, or logos.",
      "Why 1200×630: it matches the common OG recommendation and leaves a little headroom for platforms that crop tighter. Keep the subject and any text inside a center safe area; edges are the first to disappear when a network crops differently.",
      "Steps: (1) open your PNG in any image editor, (2) set the canvas to 1200×630 (or crop to that ratio first, then scale), (3) place the subject in the center safe area, (4) export a web-friendly PNG or JPEG under ~1 MB, (5) upload to HTTPS hosting and point og:image (or your CMS social-image field) at the absolute URL.",
      "Common pitfalls: stretching instead of cropping so faces look warped; leaving critical text on the far edges; exporting a multi‑MB file that crawlers skip; using a relative path instead of an absolute HTTPS URL; forgetting to purge CDN or social cache after you replace the file.",
      "Copy the checklist below before you publish. This page is a free guide only—no upload or resize tool on this URL.",
    ],
    checklist: [
      "Final size is 1200×630 (≈1.91:1), not a stretched wrong ratio",
      "Subject and text sit in the center safe area",
      "Exported file is under ~1 MB (PNG or JPEG)",
      "og:image uses an absolute HTTPS URL",
      "After replace, purge CDN / social cache if the old preview sticks",
    ],
  },
  {
    slug: "create-opengraph-image-from-png",
    title: "Create Open Graph Image from PNG (Free Guide)",
    h1: "Create an Open Graph Image from a PNG",
    description:
      "Turn a PNG into a correctly sized Open Graph image for social previews. Steps, size checklist, and common mistakes—no design tool required.",
    publishedAt: "2026-10-17",
    listed: false,
    body: [
      "Open Graph (OG) images are the preview pictures that show up when someone shares your link on social platforms. A PNG you already have often needs a crop or resize before it looks right in those cards—wrong aspect ratio gets clipped, and oversized files slow the preview.",
      "Size checklist: aim for at least 1200×630 pixels (roughly 1.91:1). Many platforms crop differently around that frame, so keep important text and faces inside a safe center area and avoid putting critical detail on the far edges.",
      "Steps: (1) pick a sharp PNG, (2) set the canvas to about 1200×630 and crop or letterbox so the subject stays centered, (3) export a web-friendly PNG or JPEG under ~1 MB, (4) host it on HTTPS and set og:image (or your platform’s social-image field) to the absolute URL.",
      "Common pitfalls: file too large so crawlers skip or timeout; relative paths instead of absolute HTTPS URLs; CDN or social caches serving an old image after you replace the file; non-HTTPS image URLs that some networks refuse to load.",
      "Use the copyable checklist below before you publish. This page is a free guide only—no upload tool yet.",
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

export function getListedGuides(): Guide[] {
  return guides.filter((g) => g.listed);
}
