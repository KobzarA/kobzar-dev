# Supabase agent skills (reference)

This file holds extra detail that is useful occasionally, but not worth keeping in the main `SKILL.md`.

## Recommended decision tree

### “Should this run on the client or server?”

- **Client**:
  - reads public data permitted by RLS
  - user-scoped reads/writes permitted by RLS using anon key + user session
- **Server**:
  - admin-only reads/writes
  - operations requiring elevated privileges
  - anything using service role key

## Minimal error-handling expectations

For every Supabase call:

- check `error`
- return a helpful, user-safe message
- log details server-side when needed

## RLS reminders

- RLS policies should be the default control mechanism.
- Prefer explicit ownership rules:
  - rows include `user_id`
  - policy checks `auth.uid() = user_id`

