-- Run this after creating the user in Supabase Auth.
-- Replace the email with your admin account email.

insert into public.admin_users (email)
values (lower('admin@example.com'))
on conflict (email) do update
set disabled_at = null;
