import { Locale } from '@/lib/i18n';
import { Translations } from '@/lib/translations';
import { realProjects } from '@/lib/realProjects';
import { ArrowUpRight } from 'lucide-react';

export function Projects({ locale, t }: { locale: Locale; t: Translations }) {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-xl text-zinc-400">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {realProjects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-emerald-400/50 transition-all group"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title[locale]}
              </h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {project.description[locale]}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-black border border-zinc-800 text-emerald-400 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-zinc-500">
                {project.metrics[locale].map((metric, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {metric}
                  </span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group-hover:gap-3 font-medium"
                >
                  {t.projects.viewCase}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
