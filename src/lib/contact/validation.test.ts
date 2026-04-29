import { describe, expect, it } from 'vitest';
import { contactLimits, validateContactPayload } from './validation';

describe('validateContactPayload', () => {
  it('accepts a valid contact payload', () => {
    const result = validateContactPayload({
      name: 'Jane',
      email: 'JANE@EXAMPLE.COM',
      message: 'Hello',
      locale: 'en',
    });

    expect(result).toEqual({
      ok: true,
      value: {
        name: 'Jane',
        email: 'jane@example.com',
        message: 'Hello',
        locale: 'en',
      },
    });
  });

  it('rejects invalid email and oversized content', () => {
    expect(
      validateContactPayload({
        name: 'Jane',
        email: 'not-an-email',
        message: 'Hello',
      })
    ).toMatchObject({ ok: false, error: 'Invalid email' });

    expect(
      validateContactPayload({
        name: 'Jane',
        email: 'jane@example.com',
        message: 'x'.repeat(contactLimits.message + 1),
      })
    ).toMatchObject({ ok: false, error: 'Message is too long' });
  });

  it('rejects honeypot submissions', () => {
    expect(
      validateContactPayload({
        name: 'Jane',
        email: 'jane@example.com',
        message: 'Hello',
        company: 'Spam Inc',
      })
    ).toMatchObject({ ok: false, error: 'Invalid submission' });
  });
});
