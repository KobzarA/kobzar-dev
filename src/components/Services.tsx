import { Locale } from '@/lib/i18n';
import { Translations } from '@/lib/translations';
import { Code2, Database, Cloud, GitBranch } from 'lucide-react';

const icons = [Code2, Database, Cloud, GitBranch];

export function Services({ locale: _locale, t }: { locale: Locale; t: Translations }) {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-zinc-400">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-emerald-400/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-emerald-400/10 border border-emerald-400/20 w-fit mb-6 group-hover:bg-emerald-400/20 transition-all">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
