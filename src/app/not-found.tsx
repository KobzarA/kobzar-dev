import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Page not found.</h1>
        <p className="mt-4 text-zinc-400">
          The page may have moved, or the link may be outdated.
        </p>
        <Link
          href="/en"
          className="mt-8 inline-flex rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-black hover:bg-emerald-300"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
