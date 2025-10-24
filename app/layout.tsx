import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAdsense from '@/components/GoogleAdsense'
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
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <GoogleAdsense />
        <Footer />
      </body>
    </html>
  )
}

