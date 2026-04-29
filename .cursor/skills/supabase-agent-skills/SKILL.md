---
name: supabase-agent-skills
description: Supabase workflow guardrails for this repo (Next.js + supabase-js, SSR auth, RLS, migrations, and common patterns). Use when the user mentions Supabase, Postgres/RLS, supabase-js, @supabase/ssr, storage, edge functions, database migrations, or when implementing auth, contact forms, admin dashboards, or server actions backed by Supabase.
---

# Supabase agent skills

## Goals

- Keep Supabase work secure (RLS-first) and predictable (single auth approach).
- Prefer existing project patterns and utilities over inventing new ones.
- Avoid leaking secrets to the client and avoid putting service role keys in browser code.

## Quick start checklist

- Identify the operation type:
  - **Auth/session (SSR, cookies, login/logout)** → use the project's server/client Supabase helpers.
  - **Database read/write** → confirm the table + RLS policy needed, then implement query.
  - **Admin-only operation** → ensure access control is enforced server-side (never client-only).
  - **Schema change** → create a migration and update types (if used).
- Verify secrets usage:
  - Browser/client code must use **anon** key only.
  - Server-only code may use **service role** key only when absolutely required and never exposed.

## Project conventions (default choices)

### 1) Prefer the repo’s Supabase helpers

Before creating any new Supabase client setup, search for existing helpers in:

- `src/lib/supabase/`
- `src/lib/supabase/server.*`
- `src/lib/supabase/client.*`

Use those utilities as the canonical place for:

- cookie/session handling
- headers forwarding
- SSR-safe client creation
- admin/service-role usage (if present)

### 2) RLS-first workflow (default)

When adding or changing any data access:

- Assume **RLS is enabled** and queries must work under it.
- If a query requires elevated access, do it in a **server-only route/action** with explicit authorization checks.
- Prefer policies that are narrow and auditable (per-user ownership, explicit roles/claims).

### 3) Never trust the client for authorization

- UI gating (hiding buttons) is fine for UX, but **not security**.
- Security must be enforced by:
  - Supabase RLS policies, and/or
  - server-side checks in API routes / server actions / middleware.

## Auth patterns (SSR + cookies)

### If you need “current user”

- In server components / route handlers, use the server Supabase helper and call `auth.getUser()` (or the project’s wrapper).
- In client components, use the client helper and subscribe to auth state only when needed.

### If you need to protect a route

Default order of preference:

1. **RLS** protects data automatically.
2. **Server-side route guard** (middleware or server component redirect) improves UX.
3. For admin areas, add explicit checks (role/claim) in addition to RLS.

## Database patterns

### Reads

- Keep selects minimal (avoid `select('*')` unless necessary).
- Prefer deterministic ordering when paginating.
- Handle empty results and `null` safely.

### Writes

- Use `insert/update/delete` with RLS-compatible conditions.
- Always check and return the Supabase error (don’t swallow it).
- For public forms (e.g., contact), validate inputs server-side.

## Admin patterns

When building admin dashboards, inboxes, or moderation tools:

- Authorization must be server-side:
  - Prefer: admin-only API route/server action that checks a role/claim then performs DB work.
  - Avoid: service-role usage in shared modules that could end up bundled for the client.
- If the project uses an `admin` table/claim:
  - enforce the same rule in RLS and server checks.

## Migrations and schema changes

When changing schema:

- Create a migration (do not hand-edit production schema).
- Update RLS policies and any `rpc` functions affected.
- Update any generated types if the repo uses them.

## Common failure modes to watch for

- Using service role in code that can run on the client.
- Missing RLS policies causing “works locally, fails in prod” behavior.
- Relying on `auth.getSession()` when you actually need verified user identity (`auth.getUser()`).
- Forgetting to handle `error` return values from Supabase queries.

## What to do when unsure

- Search the codebase for existing patterns and copy the closest one.
- If the repo already has a `src/lib/supabase/server.ts`, treat it as the source of truth for SSR auth.

