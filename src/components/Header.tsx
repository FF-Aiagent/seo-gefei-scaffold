import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-900 hover:text-zinc-700"
        >
          {SITE_NAME}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-4 text-sm text-zinc-600">
          <Link href="/" className="hover:text-zinc-900">
            Home
          </Link>
          <Link href="/#guides-heading" className="hover:text-zinc-900">
            Guides
          </Link>
        </nav>
      </div>
    </header>
  );
}
