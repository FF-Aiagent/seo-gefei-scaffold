"use client";

import { useState } from "react";

type Props = {
  items: string[];
};

export function CopyChecklist({ items }: Props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    const text = items.map((item, i) => `${i + 1}. ${item}`).join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="space-y-4 rounded-lg border border-zinc-200 bg-white px-4 py-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-zinc-900">OG image checklist</h2>
        <button
          type="button"
          onClick={onCopy}
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800"
        >
          {copied ? "Copied" : "Copy checklist"}
        </button>
      </div>
      <ol className="list-decimal space-y-2 pl-5 text-zinc-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
}
