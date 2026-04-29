import { Metadata } from 'next';
import { locales, type Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import { getSiteUrl } from '@/lib/site-url';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function coerceLocale(input: unknown): Locale {
  return locales.includes(input as Locale) ? (input as Locale) : 'en';
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = coerceLocale(params.locale);
  const t = getTranslations(locale);

  const titles: Record<Locale, string> = {
    en: 'P&B Kobzar Dev | Full-Stack Development & DevOps Engineering',
    uk: 'P&B Kobzar Dev | Full-Stack Розробка та DevOps Інжиніринг',
    pl: 'P&B Kobzar Dev | Programowanie Full-Stack i Inżynieria DevOps',
    de: 'P&B Kobzar Dev | Full-Stack-Entwicklung & DevOps-Engineering',
    es: 'P&B Kobzar Dev | Desarrollo Full-Stack e Ingeniería DevOps',
  };

  const metadataBase = new URL(getSiteUrl());

  return {
    metadataBase,
    title: titles[locale],
    description: t.hero.subtitle,
    alternates: {
      canonical: `/${locale}`,
      languages: locales.reduce(
        (acc, loc) => ({
          ...acc,
          [loc]: `/${loc}`,
        }),
        {}
      ),
    },
    openGraph: {
      title: titles[locale],
      description: t.hero.subtitle,
      locale: locale,
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
}
