import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#22c55e',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://pickleballatx.org'),
  title: {
    default: 'Pickleball ATX - Complete Guide to Austin Pickleball Courts',
    template: '%s | Pickleball ATX'
  },
  description: 'Discover the best pickleball courts in Austin, Texas. Find free and paid courts, hours, locations, amenities, and book your next game. Your complete Austin pickleball directory.',
  keywords: [
    'pickleball austin',
    'austin pickleball courts',
    'pickleball atx',
    'austin pickleball',
    'free pickleball courts austin',
    'indoor pickleball austin',
    'outdoor pickleball austin',
    'pickleball courts near me',
    'austin recreation pickleball',
    'best pickleball austin'
  ],
  authors: [{ name: 'Pickleball ATX' }],
  creator: 'Pickleball ATX',
  publisher: 'Pickleball ATX',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pickleballatx.org',
    siteName: 'Pickleball ATX',
    title: 'Pickleball ATX - Complete Guide to Austin Pickleball Courts',
    description: 'Discover the best pickleball courts in Austin, Texas. Find free and paid courts, hours, locations, amenities, and book your next game.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pickleball ATX - Austin Pickleball Courts Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pickleball ATX - Complete Guide to Austin Pickleball Courts',
    description: 'Discover the best pickleball courts in Austin, Texas. Find free and paid courts, hours, locations, and more.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-16x16.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://pickleballatx.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        {/*
          Ezoic standalone (JS) integration — added 13 Sep 2026.

          Ezoic only reviews sites it can detect as integrated; without these scripts the
          Platform Quality review stalls rather than completing, which is why
          pickleballatx.org sat in "Processing Re-review" with 0 recorded visits.
          Ezoic support confirmed on 13 Sep that ADDING integration does not reset or
          restart a review — only removing it pauses one.

          Order matters. The two gatekeeperconsent scripts are the CMP (consent
          management) and must load BEFORE the ad script so the consent gate is in place
          first; data-cfasync="false" stops optimisers from deferring or rewriting them.
          All four use beforeInteractive so Next injects them into <head> in this order.

          No showAds() placement calls yet, and no placeholder IDs invented here on
          purpose: placement IDs have to be created in the Ezoic dashboard first, and
          detection is all the review needs. Add placements after approval.
        */}
        <Script
          id="ezoic-cmp-min"
          src="https://cmp.gatekeeperconsent.com/min.js"
          data-cfasync="false"
          strategy="beforeInteractive"
        />
        <Script
          id="ezoic-cmp"
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          data-cfasync="false"
          strategy="beforeInteractive"
        />
        <Script
          id="ezoic-sa"
          src="https://www.ezojs.com/ezoic/sa.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="ezoic-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd = ezstandalone.cmd || [];`,
          }}
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Pickleball ATX',
              url: 'https://pickleballatx.org',
              description: 'Complete directory of pickleball courts in Austin, Texas',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://pickleballatx.org/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Pickleball ATX',
              url: 'https://pickleballatx.org',
              logo: 'https://pickleballatx.org/images/logo.png',
              description: 'Your comprehensive guide to pickleball courts in Austin, Texas',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Austin',
                addressRegion: 'TX',
                addressCountry: 'US'
              }
            })
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <GoogleAnalytics />
<Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

