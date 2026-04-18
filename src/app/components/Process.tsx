import { useLanguage } from '../contexts/LanguageContext';

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-zinc-950 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.process.title}
          </h2>
          <p className="text-xl text-zinc-400">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.process.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 font-bold">
                  {index + 1}
                </div>
                {index < t.process.steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-zinc-800" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
