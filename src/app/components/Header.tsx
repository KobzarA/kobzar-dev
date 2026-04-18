import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <a href="#" className="text-lg font-semibold tracking-tight text-white">
              P&B <span className="text-emerald-400">Kobzar Dev</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
                {t.nav.services}
              </a>
              <a href="#projects" className="text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
                {t.nav.projects}
              </a>
              <a href="#process" className="text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
                {t.nav.process}
              </a>
              <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-zinc-800">
            <div className="flex flex-col gap-3">
              <a href="#services" className="text-sm text-zinc-400 hover:text-white transition-colors py-2">
                {t.nav.services}
              </a>
              <a href="#projects" className="text-sm text-zinc-400 hover:text-white transition-colors py-2">
                {t.nav.projects}
              </a>
              <a href="#process" className="text-sm text-zinc-400 hover:text-white transition-colors py-2">
                {t.nav.process}
              </a>
              <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors py-2">
                {t.nav.contact}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
