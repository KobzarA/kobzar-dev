import { locales, type Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { Services } from '@/components/Services';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
import { Why } from '@/components/Why';
import { ContactForm } from '@/components/ContactForm';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale: rawLocale } = params;
  const locale: Locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : 'en';
  const t = getTranslations(locale);

  return (
    <>
      <Header locale={locale} t={t} />
      <main>
        <Hero locale={locale} t={t} />
        <TrustStrip locale={locale} t={t} />
        <Services locale={locale} t={t} />
        <TechStack locale={locale} t={t} />
        <Projects locale={locale} t={t} />
        <Process locale={locale} t={t} />
        <Why locale={locale} t={t} />
        <ContactForm locale={locale} t={t} />
        <CTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
