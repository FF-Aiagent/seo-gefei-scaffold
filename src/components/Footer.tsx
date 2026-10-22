import Link from "next/link";
import { getListedGuides } from "@/content/guides";
import { SITE_NAME } from "@/lib/site";

export function Footer() {
  const listed = getListedGuides();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-8 text-sm text-zinc-500 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {SITE_NAME}. Domain TBD.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <Link href="/" className="hover:text-zinc-800">
            Home
          </Link>
          {listed.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="hover:text-zinc-800"
            >
              {guide.title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
