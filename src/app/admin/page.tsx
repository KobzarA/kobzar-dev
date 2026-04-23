import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminHome() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-3xl font-semibold tracking-tight">Admin</h1>
          <Link
            href="/en"
            className="text-sm text-zinc-300 hover:text-white underline underline-offset-4"
          >
            Back to site
          </Link>
        </div>

        <p className="mt-4 text-zinc-400 max-w-2xl">
          This is a minimal mini-CRM scaffold. Next step is Supabase auth + database storage for contact
          messages.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="text-sm text-zinc-400">Inbox</div>
            <div className="mt-2 text-lg font-medium">Contact messages</div>
            <div className="mt-3 text-sm text-zinc-500">
              Not connected yet. Once Supabase is configured, messages will appear here with status and
              export options.
            </div>
            <div className="mt-6">
              <Link
                href="/admin/messages"
                className="inline-flex items-center rounded-lg border border-zinc-800 bg-black px-4 py-2 text-sm text-zinc-200 hover:border-zinc-700 hover:text-white transition-colors"
              >
                Open inbox
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="text-sm text-zinc-400">Auth</div>
            <div className="mt-2 text-lg font-medium">Sign-in required</div>
            <div className="mt-3 text-sm text-zinc-500">
              We’ll protect this area with Supabase auth (email/password or magic link) and restrict reads
              via RLS.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

