## P&B Kobzar Dev — landing + admin mini‑CRM

Multilingual landing page (`/en`, `/uk`, `/pl`, `/de`, `/es`) with a Supabase-backed contact form and a minimal admin inbox.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) with your browser.

### Environment variables

Create `.env.local` (or set vars in Vercel) based on `.env.example`:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only)

### Supabase setup

1) **Create table + RLS**

- Apply the SQL in `supabase/migrations/20260428193600_initial_contact_admin.sql`.
- `supabase/schema.sql` is kept as a readable snapshot; prefer migrations for production.

2) **Create an admin user**

- Supabase Dashboard → **Authentication → Users → Add user**
- Set **Email + Password**
- Run `supabase/bootstrap-admin.example.sql` with the same email (replace `admin@example.com`).
- Then visit `http://localhost:3000/admin` and log in.

3) **Harden Auth settings**

- Disable public signups unless you intentionally need them.
- Keep the admin email allowlist in `public.admin_users`.
- Do not expose `SUPABASE_SERVICE_ROLE_KEY` to the browser or any `NEXT_PUBLIC_` variable.

### Admin

- `/admin` (guarded by Supabase auth when env vars are set)
- `/admin/messages` inbox
- Use **Sign out** button in admin header to end the session.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### Checklist

- Add all env vars in Vercel project settings
- Set `NEXT_PUBLIC_SITE_URL=https://kobzar.dev`
- Apply Supabase migrations
- Create the Supabase Auth user and bootstrap the admin allowlist
- Run `pnpm run ci`
- Deploy

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
