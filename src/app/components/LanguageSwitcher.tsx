import { useLanguage } from '../contexts/LanguageContext';
import { Locale, localeNames } from '../lib/translations';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const locales: Locale[] = ['en', 'uk', 'pl', 'de', 'es'];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-zinc-900"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase font-medium">{locale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center justify-between ${
                locale === loc
                  ? 'bg-emerald-400/10 text-emerald-400'
                  : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <span>{localeNames[loc]}</span>
              <span className="text-xs uppercase text-zinc-500">{loc}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
