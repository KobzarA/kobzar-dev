'use client';

import { useRouter } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase/ssr';

export function LogoutButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          const supabase = createSupabaseBrowserClient();
          await supabase.auth.signOut();
        } finally {
          router.replace('/admin/login');
          router.refresh();
        }
      }}
      className="inline-flex items-center rounded-lg border border-zinc-800 bg-black px-4 py-2 text-sm text-zinc-200 hover:border-zinc-700 hover:text-white transition-colors"
    >
      Sign out
    </button>
  );
}

