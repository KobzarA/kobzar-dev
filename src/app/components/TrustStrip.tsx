import { useLanguage } from '../contexts/LanguageContext';
import { Award, Rocket, Layers } from 'lucide-react';

export function TrustStrip() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 lg:px-8 border-y border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-emerald-400/10 border border-emerald-400/20">
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">7+</div>
              <div className="text-sm text-zinc-400">{t.trust.yearsExp}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-emerald-400/10 border border-emerald-400/20">
              <Rocket className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm text-zinc-400">{t.trust.projectsShipped}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-emerald-400/10 border border-emerald-400/20">
              <Layers className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="text-sm text-zinc-400">{t.trust.technologies}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
