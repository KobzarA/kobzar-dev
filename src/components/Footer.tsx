import { Locale } from '@/lib/i18n';
import { Translations } from '@/lib/translations';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer({ locale: _locale, t }: { locale: Locale; t: Translations }) {
  return (
    <footer className="py-12 px-6 lg:px-8 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div>
            <div className="text-xl font-semibold tracking-tight text-white mb-2">
              P&B <span className="text-emerald-400">Kobzar Dev</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-8">
            <a href="#services" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t.nav.services}
            </a>
            <a href="#projects" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t.nav.projects}
            </a>
            <a href="#process" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t.nav.process}
            </a>
            <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
              {t.footer.contact}
            </a>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} P&B Kobzar Dev. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AnatoliiKobzar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-900"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anatolii-kobzar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-900"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kobzar.dev.info@gmail.com"
              className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-900"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
