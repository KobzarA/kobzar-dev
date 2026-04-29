'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase/ssr';
import { normalizeAdminNextPath } from '@/lib/supabase/admin';

export function LoginForm({ isConfigured }: { isConfigured: boolean }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = normalizeAdminNextPath(searchParams.get('next'));
  const authError = searchParams.get('error');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isConfigured) {
      setStatus('error');
      return;
    }
    setStatus('loading');

    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setStatus('error');
        return;
      }
      router.replace(nextPath);
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight">Admin login</h1>
          <p className="mt-2 text-sm text-zinc-400">Sign in with your admin Supabase user (email/password).</p>

          {!isConfigured && (
            <div className="mt-6 rounded-lg border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200">
              Supabase public environment variables are missing. Configure them before using admin.
            </div>
          )}

          {authError === 'forbidden' && (
            <div className="mt-6 rounded-lg border border-amber-400/20 bg-amber-400/10 p-3 text-sm text-amber-100">
              This account is not in the admin allowlist.
            </div>
          )}

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm text-zinc-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading' || !isConfigured}
            className="w-full rounded-lg bg-emerald-400 px-4 py-3 font-semibold text-black hover:bg-emerald-300 disabled:opacity-60"
          >
            {status === 'loading' ? 'Signing in…' : 'Sign in'}
          </button>

          {status === 'error' && (
            <div className="rounded-lg border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200">
              Login failed. Check email/password or create the user in Supabase Auth.
            </div>
          )}
        </form>
      </div>
    </main>
  );
}

