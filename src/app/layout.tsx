import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Tigran Keshishyan - Senior Software Engineer',
  description: 'Senior Software Engineer specializing in React, TypeScript, and modern web technologies. Based in Dubai, UAE.',
  keywords: ['Software Engineer', 'React', 'TypeScript', 'Frontend Developer', 'Web Development', 'Dubai'],
  authors: [{ name: 'Tigran Keshishyan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tigrankeshishyan.github.io',
    siteName: 'Tigran Keshishyan Portfolio',
    title: 'Tigran Keshishyan - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in React, TypeScript, and modern web technologies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tigran Keshishyan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tigran Keshishyan - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in React, TypeScript, and modern web technologies.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
