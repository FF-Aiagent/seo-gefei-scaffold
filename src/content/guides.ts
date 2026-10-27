/**
 * Primary long-tails: N1 resize png to 1200x630; R2-2 make scanned pdf searchable;
 * S1 resize png to 1200x630 for Facebook (guide shell);
 * X3 keyword density analyzer (guide shell + local density form).
 * #3 shell kept live but unlisted (no home/nav/sitemap link).
 * Watering/KGR gate stays closed (KGR 待核 for X3).
 */

export type GuideCluster = "og" | "pdf" | "keyword";

export type Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  publishedAt: string;
  body: string[];
  checklist: string[];
  /** Checklist section heading; defaults to "Checklist" in CopyChecklist. */
  checklistTitle?: string;
  /** When false, page stays reachable but is omitted from home + sitemap. */
  listed: boolean;
  /** Optional above-fold client tool rendered on the guide page. */
  tool?: "keyword-density";
  /** Topic cluster for 经纬 related links (same = Related guides; other = Related tools). */
  cluster?: GuideCluster;
  /** Short intent-bearing anchor for related links; falls back to title. */
  relatedAnchor?: string;
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
    cluster: "og",
    relatedAnchor: "Resize PNG to 1200×630 for Open Graph",
    checklistTitle: "OG image checklist",
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
    slug: "make-scanned-pdf-searchable",
    title: "Make a Scanned PDF Searchable (OCR Guide)",
    h1: "Make a Scanned PDF Searchable",
    description:
      "Turn a scanned PDF into a searchable document—steps, OCR checklist, and common pitfalls.",
    publishedAt: "2026-10-17",
    listed: true,
    cluster: "pdf",
    relatedAnchor: "Make a scanned PDF searchable",
    checklistTitle: "Searchable PDF checklist",
    body: [
      "A “searchable PDF” is still a PDF of pages, but it also has a hidden text layer from OCR (optical character recognition). That layer is what lets you find words with Ctrl/Cmd+F, select and copy phrases, and let screen readers or indexers see the content—not just a picture of it.",
      "A fresh scan is usually image-only: each page is a bitmap with no text underneath. That is why search returns nothing even when the words look clear on screen. You need an OCR pass that keeps the page images and adds a matching text layer aligned to those images.",
      "Practical steps with common desktop tools: (1) open the scan in Preview (macOS), Adobe Acrobat, or a reputable online OCR that supports PDF out, (2) run “Recognize Text” / OCR and pick the right language pack, (3) export or save as a searchable PDF (not a flat image-only re-export), (4) spot-check a few pages by selecting text and running a search for an unusual word from the document. You do not need any specific paid product—use whatever you already have that can OCR to PDF.",
      "Common pitfalls: exporting as image-only again so the text layer vanishes; ballooning file size from uncompressed page images; wrong language pack so OCR gibberish replaces real words; sending sensitive scans to a random online converter. Keep the original scan as a backup before you overwrite anything.",
      "Use the copyable checklist below before you archive or share the file. This URL is a free guide only—no upload or OCR tool on this page.",
    ],
    checklist: [
      "OCR text layer is present (search finds words on the page)",
      "Text is selectable and copyable, not image-only",
      "OCR language pack matches the document",
      "File size is reasonable after export (not multi‑hundred MB by accident)",
      "Original scan kept as a backup before overwrite",
    ],
  },
  {
    slug: "resize-png-to-1200x630-for-facebook",
    title: "Resize PNG to 1200x630 for Facebook (Free Guide)",
    h1: "Resize a PNG to 1200×630 for Facebook",
    description:
      "Resize a PNG to Facebook’s 1200×630 Open Graph size—steps, checklist, and common pitfalls.",
    publishedAt: "2026-10-17",
    listed: true,
    cluster: "og",
    relatedAnchor: "Resize PNG to 1200×630 for Facebook",
    checklistTitle: "Facebook 1200×630 checklist",
    body: [
      "Facebook link previews (and many Open Graph cards shared into Facebook) look sharpest when the image is 1200×630 pixels—about a 1.91:1 frame. If your PNG is a different size, Facebook may crop awkwardly or leave empty bars, so resizing to that OG size before you publish is the quickest fix.",
      "Why 1200×630: it matches Facebook’s common Open Graph recommendation for link shares. Keep the subject and any text inside a center safe area; Facebook and related surfaces can crop tighter than the full frame, so edges are the first to disappear.",
      "Steps: (1) open your PNG in any image editor, (2) crop or letterbox to a 1.91:1 ratio without stretching faces or logos, (3) scale to exactly 1200×630, (4) keep the subject centered, (5) export a web-friendly PNG (or JPEG if you do not need transparency) and host it on HTTPS for og:image.",
      "Transparent PNG caveats: Facebook’s preview pipeline may flatten transparency onto a solid background, so checkerboard “holes” can become white or dark slabs. If the design relies on alpha, flatten onto the intended background before export, or switch to JPEG when transparency is not required.",
      "Common pitfalls: stretching instead of cropping; critical text on the far edges; a multi‑MB file that crawlers skip; forgetting to spot-check the Facebook Sharing Debugger / link preview after you replace the image. This URL is a free guide only—no upload or resize tool on this page.",
    ],
    checklist: [
      "Output is exactly 1200×630 (or Facebook accepts it as OG)",
      "Important content stays inside safe margins (not cropped at edges)",
      "PNG transparency handled (flatten or keep as intended)",
      "File size reasonable for sharing",
      "Spot-check the link preview before publishing",
    ],
  },
  {
    slug: "keyword-density-analyzer",
    title: "Keyword Density Analyzer (Free)",
    h1: "Keyword Density Analyzer (Free)",
    description:
      "Paste your draft, pick a target keyword, and see occurrence count and density in your browser—no upload.",
    publishedAt: "2026-10-22",
    listed: true,
    cluster: "keyword",
    relatedAnchor: "Keyword density analyzer",
    tool: "keyword-density",
    checklistTitle: "Keyword density checklist",
    body: [
      "A keyword density analyzer counts how often a target phrase appears in a block of text, then divides that by the total word count. Writers use it as a quick sanity check before publishing—not as a ranking score. Search engines care far more about clear topical coverage than a magic percentage.",
      "How to read the numbers: paste the body you plan to publish, enter the exact phrase you care about (one word or a short multi-word term), and compare occurrences against total words. Density is shown as a percentage: (occurrences ÷ total words) × 100. Multi-word targets are matched as a contiguous phrase, case-insensitive.",
      "What “good” looks like: there is no universal ideal density. Aim for natural phrasing. If the same exact phrase repeats in every sentence, you are likely stuffing—trim repeats and use related wording instead. If the phrase never appears, the page may not clearly signal the topic you intended.",
      "Common pitfalls: counting HTML or nav chrome as body copy; chasing a competitor’s percentage instead of readability; stuffing exact-match anchors; ignoring synonyms and related terms that readers expect. Density is a local writing aid, not a substitute for useful content.",
      "Use the form above for a private, browser-only count, then copy the checklist before you ship. This URL does not crawl sites, upload files, or store your draft.",
    ],
    checklist: [
      "Target phrase appears at least once in a natural sentence",
      "Exact-match repeats do not dominate every paragraph",
      "Related terms / synonyms appear where they help the reader",
      "Title and H1 use the intended phrase without stuffing",
      "You skimmed the draft aloud—it still reads like English, not a keyword list",
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
    cluster: "og",
    relatedAnchor: "Create Open Graph image from PNG",
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

export function relatedAnchorText(guide: Guide): string {
  return guide.relatedAnchor ?? guide.title;
}
