"use client";

import { useMemo, useState } from "react";

type Stats = {
  totalWords: number;
  occurrences: number;
  densityPct: number;
  topTerms: { term: string; count: number }[];
};

function tokenize(text: string): string[] {
  return (text.toLowerCase().match(/[a-z0-9']+/g) ?? []).filter(Boolean);
}

function countPhrase(words: string[], phrase: string): number {
  const parts = phrase
    .toLowerCase()
    .trim()
    .match(/[a-z0-9']+/g);
  if (!parts || parts.length === 0) return 0;
  if (parts.length === 1) {
    return words.filter((w) => w === parts[0]).length;
  }
  let count = 0;
  for (let i = 0; i <= words.length - parts.length; i++) {
    let match = true;
    for (let j = 0; j < parts.length; j++) {
      if (words[i + j] !== parts[j]) {
        match = false;
        break;
      }
    }
    if (match) count += 1;
  }
  return count;
}

function topUnigrams(words: string[], limit = 5): { term: string; count: number }[] {
  const freq = new Map<string, number>();
  for (const w of words) {
    freq.set(w, (freq.get(w) ?? 0) + 1);
  }
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([term, count]) => ({ term, count }));
}

function analyze(text: string, keyword: string): Stats | null {
  const words = tokenize(text);
  if (words.length === 0) return null;
  const occurrences = countPhrase(words, keyword);
  const densityPct =
    words.length === 0 ? 0 : (occurrences / words.length) * 100;
  return {
    totalWords: words.length,
    occurrences,
    densityPct,
    topTerms: topUnigrams(words),
  };
}

export function KeywordDensityForm() {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    if (!text.trim() || !keyword.trim()) return null;
    return analyze(text, keyword);
  }, [text, keyword]);

  async function onCopy() {
    if (!stats) return;
    const lines = [
      `Keyword: ${keyword.trim()}`,
      `Occurrences: ${stats.occurrences}`,
      `Total words: ${stats.totalWords}`,
      `Density: ${stats.densityPct.toFixed(2)}%`,
      "",
      "Top words:",
      ...stats.topTerms.map((t, i) => `${i + 1}. ${t.term} (${t.count})`),
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      className="space-y-4 rounded-lg border border-zinc-200 bg-white px-4 py-5"
      aria-labelledby="density-tool-heading"
    >
      <div className="space-y-1">
        <h2
          id="density-tool-heading"
          className="text-lg font-semibold text-zinc-900"
        >
          Analyze keyword density
        </h2>
        <p className="text-sm text-zinc-500">
          Paste your draft and a target keyword. Counting runs in your browser—nothing is
          uploaded.
        </p>
      </div>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-zinc-800">Text to analyze</span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          placeholder="Paste the English body you want to check…"
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
        />
      </label>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-zinc-800">Target keyword</span>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='e.g. keyword density'
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
        />
      </label>

      {stats ? (
        <div className="space-y-3 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-medium text-zinc-800">Results</p>
            <button
              type="button"
              onClick={onCopy}
              className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              {copied ? "Copied" : "Copy results"}
            </button>
          </div>
          <dl className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-zinc-500">Occurrences</dt>
              <dd className="text-lg font-semibold text-zinc-900">
                {stats.occurrences}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Total words</dt>
              <dd className="text-lg font-semibold text-zinc-900">
                {stats.totalWords}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Density</dt>
              <dd className="text-lg font-semibold text-zinc-900">
                {stats.densityPct.toFixed(2)}%
              </dd>
            </div>
          </dl>
          {stats.topTerms.length > 0 ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Top words in this text
              </p>
              <ul className="mt-1 flex flex-wrap gap-2 text-sm text-zinc-700">
                {stats.topTerms.map((t) => (
                  <li
                    key={t.term}
                    className="rounded-full border border-zinc-200 bg-white px-2.5 py-0.5"
                  >
                    {t.term}{" "}
                    <span className="text-zinc-400">×{t.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : (
        <p className="text-sm text-zinc-500">
          Enter text and a keyword to see occurrence count and density.
        </p>
      )}
    </section>
  );
}
