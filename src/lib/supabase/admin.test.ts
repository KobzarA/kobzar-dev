import { describe, expect, it } from 'vitest';
import { normalizeAdminNextPath } from './admin';

describe('normalizeAdminNextPath', () => {
  it('allows only relative admin paths', () => {
    expect(normalizeAdminNextPath('/admin')).toBe('/admin');
    expect(normalizeAdminNextPath('/admin/messages')).toBe('/admin/messages');
  });

  it('falls back for unsafe or non-admin paths', () => {
    expect(normalizeAdminNextPath('https://example.com')).toBe('/admin');
    expect(normalizeAdminNextPath('//example.com/admin')).toBe('/admin');
    expect(normalizeAdminNextPath('/en')).toBe('/admin');
    expect(normalizeAdminNextPath(null)).toBe('/admin');
  });
});
