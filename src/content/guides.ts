/**
 * Placeholder guide content only.
 * No real target keywords. Replace when keyword research is locked.
 */

export type Guide = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  body: string[];
};

export const guides: Guide[] = [
  {
    slug: "hello-world",
    title: "Hello World — Placeholder Guide",
    description:
      "Demo article layout for the SEO scaffold. Replace with real long-tail content later.",
    publishedAt: "2026-10-17",
    body: [
      "This is a placeholder guide page. It exists so the expandable article layout, metadata hooks, and internal-link slots can be verified before any real keyword is chosen.",
      "Do not treat the title or body as a ranking target. When the first long-tail keyword is locked (KGR check TBD), replace this slug and copy entirely.",
      "Internal links below are reserved slots — wire them to more guides once those pages exist.",
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
