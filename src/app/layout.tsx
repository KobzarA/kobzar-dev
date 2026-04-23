import '../styles/index.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Locale-specific <html lang> and metadata live in `src/app/[locale]/layout.tsx`.
    <html>
      <body className="min-h-screen bg-black text-white antialiased">{children}</body>
    </html>
  );
}
