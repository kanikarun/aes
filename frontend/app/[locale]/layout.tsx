import './globals.css';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';

import ScrollToTop from '@/components/molecules/scroll-to-top';
import { Toaster } from '@/components/ui/sonner';
import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';
import { fontSans, fontSansHeading, fontSansKh } from '@/lib/fonts';
import { getNavigationFooter, getNavigationHeader } from '@/modules/navigation/api/navigation.api';
import { Footer } from '@/modules/navigation/footer';
import { Header } from '@/modules/navigation/header';
import { getConfig } from '@/strapi/api';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.title
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: `${siteConfig.title} | ${siteConfig.name}`,
    description: siteConfig.description,
    type: 'website',
    images: [siteConfig.ogImage]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.title} | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

interface Props {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function RootLayout({ children, params }: Readonly<Props>) {
  const { locale } = await params;

  const [header, config, footer] = await Promise.all([
    getNavigationHeader(locale as Locale),
    getConfig(),
    getNavigationFooter(locale as Locale)
  ]);

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={` ${fontSans.variable} ${fontSansKh.variable} ${fontSansHeading.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="OdooKH" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <NextIntlClientProvider>
          <Header data={header} />
          <main>{children}</main>
          <Toaster richColors position="top-center" theme="light" />
          <Footer data={footer} config={config} />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
