import { Locale } from './i18n';

export function getPersonStructuredData(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anatolii Kobzar',
    jobTitle: 'Full-Stack Developer & DevOps Engineer',
    url: `https://kobzar.dev/${locale}`,
    email: 'kobzar.dev.info@gmail.com',
    sameAs: [
      'https://github.com/AnatoliiKobzar',
      'https://www.linkedin.com/in/anatolii-kobzar/',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'P&B Kobzar Dev',
    },
    knowsAbout: [
      'Full-Stack Development',
      'DevOps Engineering',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'AWS',
      'GCP',
      'Docker',
      'Kubernetes',
    ],
  };
}

export function getOrganizationStructuredData(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'P&B Kobzar Dev',
    url: `https://kobzar.dev/${locale}`,
    logo: 'https://kobzar.dev/logo.png',
    description:
      'Production-ready web applications from architecture to deployment. 7+ years of experience, 100+ completed projects.',
    email: 'kobzar.dev.info@gmail.com',
    sameAs: [
      'https://github.com/AnatoliiKobzar',
      'https://www.linkedin.com/in/anatolii-kobzar/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'kobzar.dev.info@gmail.com',
      contactType: 'Customer Service',
    },
  };
}

export function getWebsiteStructuredData(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'P&B Kobzar Dev',
    url: `https://kobzar.dev/${locale}`,
    description:
      'Production-ready web applications from architecture to deployment. Trusted by healthcare, fintech, and e-commerce companies worldwide.',
    inLanguage: locale,
  };
}
