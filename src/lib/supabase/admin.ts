import type { SupabaseClient } from '@supabase/supabase-js';

export const adminLoginPath = '/admin/login';

export function hasPublicSupabaseEnv() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) && Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export function hasServiceSupabaseEnv() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) && Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function normalizeAdminNextPath(input: string | null | undefined, fallback = '/admin') {
  if (!input || !input.startsWith('/') || input.startsWith('//')) return fallback;
  if (input !== '/admin' && !input.startsWith('/admin/')) return fallback;
  return input;
}

export async function getAdminStatus(supabase: SupabaseClient) {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  const user = userData?.user ?? null;

  if (userError || !user?.email) {
    return { user, isAdmin: false };
  }

  const { data: adminRow, error: adminError } = await supabase
    .from('admin_users')
    .select('id')
    .eq('email', user.email.toLowerCase())
    .is('disabled_at', null)
    .maybeSingle();

  return { user, isAdmin: !adminError && Boolean(adminRow) };
}

function adminLoginUrl(nextPath: string, error?: 'config' | 'forbidden') {
  const params = new URLSearchParams({ next: normalizeAdminNextPath(nextPath) });
  if (error) params.set('error', error);
  return `${adminLoginPath}?${params.toString()}`;
}

export function getAdminLoginPath(nextPath: string, error?: 'config' | 'forbidden') {
  return adminLoginUrl(nextPath, error);
}
