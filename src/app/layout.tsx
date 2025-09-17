import type { Metadata } from 'next';
import { Work_Sans, JetBrains_Mono, Source_Serif_4 } from 'next/font/google';

import './globals.css';
import ThemeProvider from '@/app/providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Work_Sans({
  variable: '--font-inter',
  subsets: ['latin'],
});

const sourceSerif4 = Source_Serif_4({
  variable: '--font-source-serif-4',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://reliabilityengineersacademy.com'),
  title:
    'Reliability Engineers Academy - Your Pathway To Asset Reliability Mastery',
  description:
    'Empowering engineers and organizations with world-class training, certifications, and expertise in asset reliability engineering, predictive diagnostics, and maintenance optimization.',
  keywords:
    'reliability engineering, asset management, maintenance, certification, CMRP, CMRT, CAMA, training',
  authors: [{ name: 'Reliability Engineers Academy' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      notranslate: false,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reliabilityengineersacademy.com',
    siteName: 'Reliability Engineers Academy',
    title: 'Reliability Engineers Academy',
    description:
      'Empowering engineers and organizations with world-class training, certifications, and expertise in asset reliability engineering, predictive diagnostics, and maintenance optimization.',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Reliability Engineers Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reliability Engineers Academy',
    description:
      'Empowering engineers and organizations with world-class training, certifications, and expertise in asset reliability engineering, predictive diagnostics, and maintenance optimization.',
    creator: '@reliabilityengineersacademy',
    images: ['/web-app-manifest-512x512.png'],
    site: '@reliabilityengineersacademy',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', type: 'image/png' },
    ],
    shortcut: ['/icon0.svg'],
    apple: [
      { url: '/apple-icon.png' },
      {
        url: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/web-app-manifest-192x192.png',
      },
    ],
  },
  appleWebApp: {
    title: 'Reliability Engineers Academy',
    statusBarStyle: 'black-translucent',
    startupImage: [
      {
        url: '/web-app-manifest-512x512.png',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      },
      {
        url: '/web-app-manifest-512x512.png',
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
      },
      {
        url: '/web-app-manifest-512x512.png',
        media:
          '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)',
      },
      {
        url: '/web-app-manifest-512x512.png',
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
      },
      {
        url: '/web-app-manifest-512x512.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
      },
      {
        url: '/web-app-manifest-512x512.png',
        media:
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
      },
      {
        url: '/web-app-manifest-512x512.png',
        media:
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className='antialiased'
      data-scroll-behavior='smooth'
    >
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${sourceSerif4.variable} min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative flex min-h-screen flex-col'>
            <Header />

            <main className='flex-1'>{children}</main>

            <Footer />
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
