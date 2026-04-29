import 'server-only';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import {
  getAdminLoginPath,
  getAdminStatus,
  hasPublicSupabaseEnv,
} from './admin';
import { createSupabaseServerClient } from './ssr';

export async function requireAdmin(nextPath: string): Promise<User> {
  if (!hasPublicSupabaseEnv()) {
    redirect(getAdminLoginPath(nextPath, 'config'));
  }

  const supabase = createSupabaseServerClient(await cookies());
  const { user, isAdmin } = await getAdminStatus(supabase);

  if (!user) {
    redirect(getAdminLoginPath(nextPath));
  }

  if (!isAdmin) {
    redirect(getAdminLoginPath(nextPath, 'forbidden'));
  }

  return user;
}
