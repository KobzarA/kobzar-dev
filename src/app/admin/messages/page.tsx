import { createServiceSupabaseClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { hasServiceSupabaseEnv } from '@/lib/supabase/admin';
import { requireAdmin } from '@/lib/supabase/admin-server';
import { LogoutButton } from '../LogoutButton';

export const dynamic = 'force-dynamic';

type ContactMessageRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  message: string;
  locale: string | null;
  status: string;
};

export default async function AdminMessagesPage() {
  await requireAdmin('/admin/messages');

  if (!hasServiceSupabaseEnv()) {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h1 className="text-3xl font-semibold tracking-tight">Messages</h1>
            <Link
              href="/admin"
              className="text-sm text-zinc-300 hover:text-white underline underline-offset-4"
            >
              Back
            </Link>
          </div>

          <p className="mt-6 text-zinc-400">
            Supabase env vars are not configured yet. Add them to your Netlify + local env, then apply
            `supabase/schema.sql`.
          </p>
        </div>
      </main>
    );
  }

  const supabase = createServiceSupabaseClient();
  const { data, error } = await supabase
    .from('contact_messages')
    .select('id,created_at,name,email,message,locale,status')
    .order('created_at', { ascending: false })
    .limit(200);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Messages</h1>
            <p className="mt-2 text-sm text-zinc-400">
              Latest contact form submissions (up to 200).
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-sm text-zinc-300 hover:text-white underline underline-offset-4"
            >
              Admin home
            </Link>
            <Link
              href="/en"
              className="text-sm text-zinc-300 hover:text-white underline underline-offset-4"
            >
              Back to site
            </Link>
            <LogoutButton />
          </div>
        </div>

        {error && (
          <div className="mt-8 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200">
            Failed to load messages. Make sure the table exists and the service role key is correct.
          </div>
        )}

        <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950">
          <table className="min-w-full text-sm">
            <thead className="text-left text-zinc-400">
              <tr className="border-b border-zinc-800">
                <th className="px-4 py-3 font-medium">Created</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Locale</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Message</th>
              </tr>
            </thead>
            <tbody className="text-zinc-200">
              {(data as ContactMessageRow[] | null)?.map((row) => (
                <tr key={row.id} className="border-b border-zinc-900">
                  <td className="px-4 py-3 whitespace-nowrap text-zinc-400">
                    {new Date(row.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <a className="underline underline-offset-4" href={`mailto:${row.email}`}>
                      {row.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-zinc-400">
                    {row.locale ?? '-'}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.status}</td>
                  <td className="px-4 py-3 max-w-xl">
                    <div className="line-clamp-3 text-zinc-300">{row.message}</div>
                  </td>
                </tr>
              ))}
              {!error && (!data || data.length === 0) && (
                <tr>
                  <td className="px-4 py-6 text-zinc-400" colSpan={6}>
                    No messages yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

