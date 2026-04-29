import { NextResponse } from 'next/server';
import { createServiceSupabaseClient } from '@/lib/supabase/server';
import { hasServiceSupabaseEnv } from '@/lib/supabase/admin';
import { validateContactPayload } from '@/lib/contact/validation';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

type RateBucket = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateBucket>();

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get('x-forwarded-for');
  return forwardedFor?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(key: string, now = Date.now()) {
  const bucket = rateLimitStore.get(key);
  if (!bucket || bucket.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const validation = validateContactPayload(body);
  if (!validation.ok) {
    return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const userAgent = req.headers.get('user-agent') ?? null;

  if (!hasServiceSupabaseEnv()) {
    return NextResponse.json({ ok: false, error: 'Contact storage is not configured' }, { status: 503 });
  }

  try {
    const { name, email, message, locale } = validation.value;
    const supabase = createServiceSupabaseClient();
    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      message,
      locale,
      user_agent: userAgent,
      source: 'landing',
      status: 'new',
    });

    if (error) {
      return NextResponse.json({ ok: false, error: 'Failed to save message' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, persisted: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: 'Server configuration error' }, { status: 500 });
  }
}

