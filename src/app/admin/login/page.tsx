import { Suspense } from 'react';
import { LoginForm } from './ui';
import { hasPublicSupabaseEnv } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

export default function AdminLoginPage() {
  const isConfigured = hasPublicSupabaseEnv();

  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-black text-white px-6 py-10">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-semibold tracking-tight">Admin login</h1>
            <p className="mt-2 text-sm text-zinc-400">Loading…</p>
          </div>
        </main>
      }
    >
      <LoginForm isConfigured={isConfigured} />
    </Suspense>
  );
}

