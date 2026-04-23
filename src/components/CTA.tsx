import { Locale } from '@/lib/i18n';
import { Translations } from '@/lib/translations';
import { ArrowRight } from 'lucide-react';

export function CTA({ locale: _locale, t }: { locale: Locale; t: Translations }) {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black" />

      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {t.cta.title}
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          {t.cta.subtitle}
        </p>

        <a
          href="mailto:kobzar.dev.info@gmail.com"
          className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-400 hover:bg-emerald-300 text-black font-semibold rounded-lg transition-all shadow-2xl shadow-emerald-400/20 hover:shadow-emerald-400/30 text-lg whitespace-nowrap"
        >
          {t.cta.button}
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
    </section>
  );
}
