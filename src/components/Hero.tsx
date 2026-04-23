import { Locale } from '@/lib/i18n';
import { Translations } from '@/lib/translations';
import { ArrowRight, Code2 } from 'lucide-react';

export function Hero({ locale: _locale, t }: { locale: Locale; t: Translations }) {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black" />

      <div className="max-w-5xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm mb-8">
          <Code2 className="w-4 h-4" />
          <span>Available for New Projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          {t.hero.title}
        </h1>

        <p className="text-xl text-zinc-400 mb-10 max-w-3xl leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-black font-semibold rounded-lg transition-all shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/30 whitespace-nowrap"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg transition-all border border-zinc-800 whitespace-nowrap"
          >
            {t.hero.secondary}
          </a>
        </div>
      </div>

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
    </section>
  );
}
