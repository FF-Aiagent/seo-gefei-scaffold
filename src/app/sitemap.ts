import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: "2026-10-17",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${base}/guides/${guide.slug}`,
    lastModified: guide.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...guideEntries];
}
