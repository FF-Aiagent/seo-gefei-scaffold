import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyChecklist } from "@/components/CopyChecklist";
import { KeywordDensityForm } from "@/components/KeywordDensityForm";
import {
  getAllGuideSlugs,
  getGuideBySlug,
  getListedGuides,
} from "@/content/guides";
import { getSiteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    return { title: "Not found" };
  }

  const url = `${getSiteUrl()}/guides/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url,
      publishedTime: guide.publishedAt,
    },
    twitter: {
      card: "summary",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    notFound();
  }

  const related = getListedGuides().filter((g) => g.slug !== guide.slug);

  return (
    <article className="space-y-8">
      <header className="space-y-3 border-b border-zinc-200 pb-6">
        <p className="text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">
            Home
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href="/#guides-heading" className="hover:text-zinc-800">
            Guides
          </Link>
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          {guide.h1}
        </h1>
        <p className="text-zinc-600">{guide.description}</p>
        <time
          dateTime={guide.publishedAt}
          className="block text-sm text-zinc-400"
        >
          Updated {guide.publishedAt}
        </time>
      </header>

      {guide.tool === "keyword-density" ? <KeywordDensityForm /> : null}

      <div className="prose-guide space-y-4 text-zinc-700 leading-relaxed">
        {guide.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <CopyChecklist items={guide.checklist} title={guide.checklistTitle ?? "Checklist"} />

      <aside className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Related guides
        </h2>
        {related.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {related.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="text-sm font-medium text-zinc-800 underline-offset-2 hover:underline"
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-zinc-500">
            More guides coming soon.
          </p>
        )}
        <p className="mt-3 text-sm">
          <Link
            href="/"
            className="text-zinc-800 underline-offset-2 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
      </aside>
    </article>
  );
}
