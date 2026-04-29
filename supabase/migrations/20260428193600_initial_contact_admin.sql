-- Landing contact form + admin allowlist baseline.

create extension if not exists "pgcrypto";

create schema if not exists private;

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique,
  disabled_at timestamptz null,
  constraint admin_users_email_lowercase check (email = lower(email)),
  constraint admin_users_email_shape check (position('@' in email) > 1)
);

alter table public.admin_users enable row level security;

create or replace function private.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.admin_users
    where email = lower(coalesce(auth.jwt() ->> 'email', ''))
      and disabled_at is null
  );
$$;

revoke all on function private.is_admin() from public;
grant usage on schema private to authenticated, service_role;
grant execute on function private.is_admin() to authenticated, service_role;

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
  notes text null,
  constraint contact_messages_status_check check (status in ('new', 'read', 'archived')),
  constraint contact_messages_locale_check check (locale is null or locale in ('en', 'uk', 'pl', 'de', 'es'))
);

create index if not exists contact_messages_created_at_idx
on public.contact_messages (created_at desc);

create index if not exists contact_messages_status_created_at_idx
on public.contact_messages (status, created_at desc);

alter table public.contact_messages enable row level security;

drop policy if exists "admin_users_admin_select" on public.admin_users;
create policy "admin_users_admin_select"
on public.admin_users
for select
to authenticated
using (private.is_admin());

drop policy if exists "contact_messages_admin_select" on public.contact_messages;
create policy "contact_messages_admin_select"
on public.contact_messages
for select
to authenticated
using (private.is_admin());

drop policy if exists "contact_messages_admin_update" on public.contact_messages;
create policy "contact_messages_admin_update"
on public.contact_messages
for update
to authenticated
using (private.is_admin())
with check (private.is_admin());
