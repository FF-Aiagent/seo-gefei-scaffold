import type { Metadata } from "next";
import Link from "next/link";
import { getListedGuides, type Guide } from "@/content/guides";
import { getSiteUrl, SITE_DESCRIPTION } from "@/lib/site";

const HOME_TITLE =
  "Free guides: OG images, searchable PDFs, keyword density · Practical Guides";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: getSiteUrl() },
  openGraph: {
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
  },
};

function GuideList({ guides }: { guides: Guide[] }) {
  return (
    <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
      {guides.map((guide) => (
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
  );
}

export default function HomePage() {
  const listed = getListedGuides();
  const ogGuides = listed.filter((g) => g.cluster === "og");
  const otherGuides = listed.filter(
    (g) => g.cluster === "pdf" || g.cluster === "keyword",
  );

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
          form. No account required. Same-site guides—pick the task, follow the
          checklist.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="og-guides-heading">
        <h2
          id="og-guides-heading"
          className="text-lg font-semibold text-zinc-900"
        >
          OG image guides
        </h2>
        <GuideList guides={ogGuides} />
      </section>

      <section className="space-y-3" aria-labelledby="other-guides-heading">
        <h2
          id="other-guides-heading"
          className="text-lg font-semibold text-zinc-900"
        >
          Other free guides
        </h2>
        <GuideList guides={otherGuides} />
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
