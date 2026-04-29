import '../styles/index.css';
import { defaultLocale } from '@/lib/i18n';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale}>
      <body className="min-h-screen bg-black text-white antialiased">{children}</body>
    </html>
  );
}
