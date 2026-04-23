import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'P&B Kobzar Dev | Full-Stack Development & DevOps Engineering',
    short_name: 'Kobzar Dev',
    description: 'Production-ready web applications from architecture to deployment. 7+ years of experience, 100+ completed projects.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#34d399',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
