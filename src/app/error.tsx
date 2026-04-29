'use client';

import Link from 'next/link';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Something went wrong</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">The page could not be loaded.</h1>
        <p className="mt-4 text-zinc-400">
          Please try again. If the problem persists, contact us directly.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-black hover:bg-emerald-300"
          >
            Try again
          </button>
          <Link
            href="/en"
            className="rounded-lg border border-zinc-800 px-5 py-3 text-zinc-200 hover:border-zinc-700 hover:text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
