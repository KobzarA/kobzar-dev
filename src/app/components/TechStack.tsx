import { useLanguage } from '../contexts/LanguageContext';

const technologies = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Docker', 'Kubernetes'] },
  { category: 'DevOps', items: ['GitHub Actions', 'Terraform', 'Monitoring', 'CI/CD'] },
];

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 lg:px-8 bg-zinc-950 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.tech.title}
          </h2>
          <p className="text-xl text-zinc-400">
            {t.tech.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <div key={tech.category}>
              <h3 className="text-sm font-semibold text-emerald-400 mb-4 uppercase tracking-wider">
                {tech.category}
              </h3>
              <div className="flex flex-col gap-2">
                {tech.items.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-lg bg-black border border-zinc-800 text-zinc-300 text-sm hover:border-zinc-700 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
