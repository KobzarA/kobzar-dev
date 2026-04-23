-- Minimal schema for landing contact + admin mini-CRM
-- Apply in Supabase SQL Editor.

create extension if not exists "pgcrypto";

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null,
  locale text null,
  source text null,
  user_agent text null,
  status text not null default 'new',
  notes text null
);

alter table public.contact_messages enable row level security;

-- Public inserts allowed (landing form). Reads are restricted.
create policy "contact_messages_public_insert"
on public.contact_messages
for insert
to anon
with check (true);

-- Only authenticated users can read/update (admin area).
create policy "contact_messages_auth_select"
on public.contact_messages
for select
to authenticated
using (true);

create policy "contact_messages_auth_update"
on public.contact_messages
for update
to authenticated
using (true)
with check (true);

