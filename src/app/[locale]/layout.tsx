import { Metadata } from 'next';
import { locales, type Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function coerceLocale(input: unknown): Locale {
  return locales.includes(input as Locale) ? (input as Locale) : 'en';
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale?: string | string[] }>;
}): Promise<Metadata> {
  const raw = await params;
  const locale = coerceLocale(Array.isArray(raw.locale) ? raw.locale[0] : raw.locale);
  const t = getTranslations(locale);

  const titles: Record<Locale, string> = {
    en: 'P&B Kobzar Dev | Full-Stack Development & DevOps Engineering',
    uk: 'P&B Kobzar Dev | Full-Stack Розробка та DevOps Інжиніринг',
    pl: 'P&B Kobzar Dev | Programowanie Full-Stack i Inżynieria DevOps',
    de: 'P&B Kobzar Dev | Full-Stack-Entwicklung & DevOps-Engineering',
    es: 'P&B Kobzar Dev | Desarrollo Full-Stack e Ingeniería DevOps',
  };

  const metadataBase =
    process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.length > 0
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : new URL('http://localhost:3000');

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
