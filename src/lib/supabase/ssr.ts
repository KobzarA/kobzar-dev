import { createBrowserClient, createServerClient } from '@supabase/ssr';
import type { CookieOptions } from '@supabase/ssr';
import type { cookies as cookiesFn } from 'next/headers';

function requirePublicEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export function createSupabaseBrowserClient() {
  const url = requirePublicEnv('NEXT_PUBLIC_SUPABASE_URL');
  const anonKey = requirePublicEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');
  return createBrowserClient(url, anonKey);
}

type CookieStore = Awaited<ReturnType<typeof cookiesFn>>;

export function createSupabaseServerClient(cookies: CookieStore) {
  const url = requirePublicEnv('NEXT_PUBLIC_SUPABASE_URL');
  const anonKey = requirePublicEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookies.getAll();
      },
      setAll(cookieList: Array<{ name: string; value: string; options: CookieOptions }>) {
        for (const { name, value, options } of cookieList) {
          cookies.set(name, value, options);
        }
      },
    },
  });
}

