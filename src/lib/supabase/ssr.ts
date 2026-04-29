import { createBrowserClient, createServerClient } from '@supabase/ssr';
import type { CookieOptions } from '@supabase/ssr';
import type { cookies as cookiesFn } from 'next/headers';

export function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL;
}

export function getSupabasePublicKey() {
  return process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
}

function requirePublicEnv(name: string, value: string | undefined): string {
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export function createSupabaseBrowserClient() {
  const url = requirePublicEnv('NEXT_PUBLIC_SUPABASE_URL', getSupabaseUrl());
  const publicKey = requirePublicEnv(
    'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY',
    getSupabasePublicKey()
  );
  return createBrowserClient(url, publicKey);
}

type CookieStore = Awaited<ReturnType<typeof cookiesFn>>;

export function createSupabaseServerClient(cookies: CookieStore) {
  const url = requirePublicEnv('NEXT_PUBLIC_SUPABASE_URL', getSupabaseUrl());
  const publicKey = requirePublicEnv(
    'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY',
    getSupabasePublicKey()
  );

  return createServerClient(url, publicKey, {
    cookies: {
      getAll() {
        return cookies.getAll();
      },
      setAll(cookieList: Array<{ name: string; value: string; options: CookieOptions }>) {
        try {
          for (const { name, value, options } of cookieList) {
            cookies.set(name, value, options);
          }
        } catch {
          // Server Components cannot set cookies; proxy refreshes the session.
        }
      },
    },
  });
}

