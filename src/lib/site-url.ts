const productionSiteUrl = 'https://kobzar.dev';

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) {
    return configuredUrl.replace(/\/+$/, '');
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return `https://${vercelUrl}`.replace(/\/+$/, '');
  }

  return process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : productionSiteUrl;
}
