import { NextResponse } from 'next/server';
import { createServiceSupabaseClient } from '@/lib/supabase/server';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  locale?: string;
};

function isValidEmail(email: string) {
  // intentionally simple – we just need basic protection against garbage input
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name = (body?.name ?? '').trim();
  const email = (body?.email ?? '').trim();
  const message = (body?.message ?? '').trim();
  const locale = (body?.locale ?? '').trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const userAgent = req.headers.get('user-agent') ?? null;

  // If Supabase env vars aren't configured yet, keep the UI flow working.
  // We still return 200, but clearly mark it as not persisted.
  const hasSupabaseEnv =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) && Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  if (!hasSupabaseEnv) {
    return NextResponse.json({ ok: true, persisted: false }, { status: 200 });
  }

  try {
    const supabase = createServiceSupabaseClient();
    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      message,
      locale: locale || null,
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

