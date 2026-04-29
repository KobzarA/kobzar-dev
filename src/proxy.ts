import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { defaultLocale, locales } from '@/lib/i18n';
import { getAdminStatus, normalizeAdminNextPath } from '@/lib/supabase/admin';
import { getSupabasePublicKey, getSupabaseUrl } from '@/lib/supabase/ssr';

function hasFileExtension(pathname: string) {
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

function hasLocalePrefix(pathname: string) {
  return locales.some((loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`));
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin auth guard
  if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) {
    return NextResponse.next();
  }

  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    const url = getSupabaseUrl();
    const publicKey = getSupabasePublicKey();

    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/admin/login';
    loginUrl.searchParams.set('next', normalizeAdminNextPath(pathname));

    if (!url || !publicKey) {
      loginUrl.searchParams.set('error', 'config');
      return NextResponse.redirect(loginUrl);
    }

    const response = NextResponse.next();
    const supabase = createServerClient(url, publicKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value, options } of cookiesToSet) {
            response.cookies.set(name, value, options);
          }
        },
      },
    });

    const { user, isAdmin } = await getAdminStatus(supabase);
    if (!user) {
      return NextResponse.redirect(loginUrl);
    }
    if (!isAdmin) {
      loginUrl.searchParams.set('error', 'forbidden');
      return NextResponse.redirect(loginUrl);
    }
    return response;
  }

  // Locale redirect for public pages
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    hasFileExtension(pathname)
  ) {
    return NextResponse.next();
  }

  if (!hasLocalePrefix(pathname)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
