import { useLanguage } from '../contexts/LanguageContext';
import { Check } from 'lucide-react';

export function Why() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.why.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.why.items.map((item, index) => (
            <div
              key={index}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 p-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 w-fit h-fit">
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
