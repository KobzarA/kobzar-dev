import { locales, type Locale } from '@/lib/i18n';

export const contactLimits = {
  name: 120,
  email: 254,
  message: 4000,
} as const;

export type ContactInput = {
  name: string;
  email: string;
  message: string;
  locale: Locale | null;
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  locale?: unknown;
  company?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function readString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateContactPayload(payload: unknown):
  | { ok: true; value: ContactInput }
  | { ok: false; error: string } {
  const body = (payload ?? {}) as ContactPayload;
  const honeypot = readString(body.company);

  if (honeypot) {
    return { ok: false, error: 'Invalid submission' };
  }

  const name = readString(body.name);
  const email = readString(body.email).toLowerCase();
  const message = readString(body.message);
  const localeValue = readString(body.locale);

  if (!name || !email || !message) {
    return { ok: false, error: 'Missing required fields' };
  }

  if (name.length > contactLimits.name) {
    return { ok: false, error: 'Name is too long' };
  }

  if (email.length > contactLimits.email || !isValidEmail(email)) {
    return { ok: false, error: 'Invalid email' };
  }

  if (message.length > contactLimits.message) {
    return { ok: false, error: 'Message is too long' };
  }

  const locale = locales.includes(localeValue as Locale) ? (localeValue as Locale) : null;

  return {
    ok: true,
    value: {
      name,
      email,
      message,
      locale,
    },
  };
}
