'use client';

import { Locale } from '@/lib/i18n';
import { Translations } from '@/lib/translations';
import { contactLimits } from '@/lib/contact/validation';
import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm({ locale, t }: { locale: Locale; t: Translations }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [serverPersisted, setServerPersisted] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setServerPersisted(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (response.ok) {
        const json = (await response.json().catch(() => null)) as null | { persisted?: boolean };
        setServerPersisted(typeof json?.persisted === 'boolean' ? json.persisted : null);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-zinc-950 border-y border-zinc-800">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contactForm.title}
          </h2>
          <p className="text-xl text-zinc-400">
            {t.contactForm.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            onChange={() => undefined}
          />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
              {t.contactForm.name}
            </label>
            <input
              type="text"
              id="name"
              required
              maxLength={contactLimits.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all"
              placeholder={t.contactForm.name}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
              {t.contactForm.email}
            </label>
            <input
              type="email"
              id="email"
              required
              maxLength={contactLimits.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all"
              placeholder={t.contactForm.email}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
              {t.contactForm.message}
            </label>
            <textarea
              id="message"
              required
              maxLength={contactLimits.message}
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all resize-none"
              placeholder={t.contactForm.message}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-400 hover:bg-emerald-300 disabled:bg-emerald-400/50 text-black font-semibold rounded-lg transition-all shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/30 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? t.contactForm.sending : t.contactForm.submit}
            <Send className="w-5 h-5" />
          </button>

          {status === 'success' && (
            <div className="p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-lg text-emerald-400 text-sm">
              {t.contactForm.success}
              {serverPersisted === false && (
                <div className="mt-2 text-xs text-emerald-400/80">
                  Saved to database: not configured yet.
                </div>
              )}
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-400/10 border border-red-400/20 rounded-lg text-red-400 text-sm">
              {t.contactForm.error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
