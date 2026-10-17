import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllGuideSlugs, getGuideBySlug } from "@/content/guides";
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

  return (
    <article className="space-y-8">
      <header className="space-y-3 border-b border-zinc-200 pb-6">
        <p className="text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">
            Home
          </Link>
          <span aria-hidden="true"> / </span>
          <span>Guides</span>
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          {guide.title}
        </h1>
        <p className="text-zinc-600">{guide.description}</p>
        <time
          dateTime={guide.publishedAt}
          className="block text-sm text-zinc-400"
        >
          Updated {guide.publishedAt}
        </time>
      </header>

      <div className="prose-guide">
        {guide.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <aside className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Related guides
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Internal-link slot — add sibling guides here after more pages ship.
        </p>
        <ul className="mt-3 space-y-1 text-sm">
          <li>
            <Link
              href="/guides/hello-world"
              className="text-zinc-800 underline-offset-2 hover:underline"
            >
              Hello World — Placeholder Guide
            </Link>
          </li>
          {/* Slot: next long-tail guide */}
        </ul>
      </aside>
    </article>
  );
}
