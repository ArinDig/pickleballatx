/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Redirect removed fictional courts to main courts page
      {
        source: '/courts/castle-court',
        destination: '/courts',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/courts/other-racquet',
        destination: '/courts',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/courts/pan-am-rec',
        destination: '/courts/pan-american-park',
        permanent: true, // 301 redirect - duplicate/conflicting listing removed Aug 2026, same address as pan-american-park; revisit if confirmed as a distinct facility
      },
      {
        // The venue rebranded: The Pitch -> PopStroke Austin (verified 15 Sep 2026 —
        // thepitchaustin.com now 301s to popstroke.com/venues/austin/, and PopStroke's
        // own page confirms 13000 Harris Ridge Blvd and that pickleball is still offered).
        //
        // The old slug held real rankings (~96 clicks/month) but for a brand name that is
        // being retired, so the page was ranking for a decaying query. This preserves that
        // equity while moving to the name people will search going forward.
        source: '/courts/the-pitch',
        destination: '/courts/popstroke-austin',
        permanent: true, // 301 for SEO — matches the convention used by the redirects above
      },
      // Note: ads.txt is handled by app/ads.txt/route.ts
      // This ensures it takes precedence over the static file in public/
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig

