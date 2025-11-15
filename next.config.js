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
      // Ezoic ads.txt redirect - uses their automated manager service
      // Update the URL with your actual Ezoic account ID once you receive it
      // Format: https://srv.adstxtmanager.com/[ACCOUNT_ID]/pickleballatx.org
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/pickleballatx.org',
        permanent: true, // 301 redirect
      },
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

