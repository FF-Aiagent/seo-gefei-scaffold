import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/content/guides";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_NAME },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          Scaffold · not live
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          English SEO site scaffold
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
          Expandable Next.js template for a GeFei-style overseas experiment:
          one homepage, article layout reserved, SEO metadata / sitemap / robots
          hooks ready. Domain and target keywords are TBD — no production
          domain is hardcoded.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guides-heading">
        <h2 id="guides-heading" className="text-lg font-semibold text-zinc-900">
          Guides
        </h2>
        <p className="text-sm text-zinc-500">
          Placeholder list. Replace when the first long-tail keyword is locked.
        </p>
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
      </section>

      <section className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-4 py-5 text-sm text-zinc-600">
        <p className="font-medium text-zinc-800">Reserved slots</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Nav: Tools / About (header)</li>
          <li>Footer: Privacy / Contact</li>
          <li>In-article related guides (see sample page)</li>
          <li>Search Console / analytics — wire after domain is live</li>
        </ul>
      </section>
    </div>
  );
}
