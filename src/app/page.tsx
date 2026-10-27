import type { Metadata } from "next";
import Link from "next/link";
import { getListedGuides } from "@/content/guides";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_NAME },
  description: SITE_DESCRIPTION,
  alternates: { canonical: getSiteUrl() },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  const listed = getListedGuides();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          Free guides
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Free guides for OG images, searchable PDFs, and keyword density
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
          Practical English guides—resize a PNG to 1200×630 for social previews,
          make a scanned PDF searchable with OCR, or check keyword density in
          your draft. Steps, copyable checklists, and a browser-only density
          form. No account required.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guides-heading">
        <h2 id="guides-heading" className="text-lg font-semibold text-zinc-900">
          Guides
        </h2>
        <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
          {listed.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="block px-4 py-3 hover:bg-zinc-50"
              >
                <span className="font-medium text-zinc-900">{guide.title}</span>
                <span className="mt-1 block text-sm text-zinc-500">
                  {guide.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-4 py-5 text-sm text-zinc-600">
        <p className="font-medium text-zinc-800">Coming next</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>More long-tail guide shells (not published yet)</li>
          <li>Optional PNG→OG converter tool (separate from these guides)</li>
        </ul>
      </section>
    </div>
  );
}
