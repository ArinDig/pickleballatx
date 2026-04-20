'use client'

import Link from 'next/link'

// ─────────────────────────────────────────────────────────────────────────────
// Beehiiv Email Signup Component
//
// SETUP: Replace BEEHIIV_SUBSCRIBE_URL with your Beehiiv subscribe page URL.
// Find it by clicking "View site" in your Beehiiv dashboard — the URL of that
// page + "/subscribe" is what goes here. Looks like:
// https://your-publication-name.beehiiv.com/subscribe
// ─────────────────────────────────────────────────────────────────────────────

const BEEHIIV_SUBSCRIBE_URL = 'https://pb-atx-newsletter-78701.beehiiv.com/subscribe'

interface EmailSignupProps {
  variant?: 'banner' | 'inline'
  heading?: string
  subheading?: string
}

export default function EmailSignup({
  variant = 'inline',
  heading = 'Stay in the Loop on Austin Pickleball',
  subheading = 'New courts, tournaments, open play events, and tips — delivered free to your inbox.',
}: EmailSignupProps) {
  const isBanner = variant === 'banner'
  const isConfigured = BEEHIIV_SUBSCRIBE_URL !== 'YOUR_SUBSCRIBE_URL_HERE'

  return (
    <section
      className={
        isBanner
          ? 'bg-primary-600 py-12 px-4'
          : 'bg-primary-50 border border-primary-200 rounded-xl py-10 px-6 my-8'
      }
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="text-4xl mb-3">🏓</div>

        {/* Heading */}
        <h2
          className={`text-2xl md:text-3xl font-bold mb-2 ${
            isBanner ? 'text-white' : 'text-gray-900'
          }`}
        >
          {heading}
        </h2>

        {/* Subheading */}
        <p
          className={`text-base mb-6 ${
            isBanner ? 'text-primary-100' : 'text-gray-600'
          }`}
        >
          {subheading}
        </p>

        {/* CTA Button */}
        {isConfigured ? (
          <Link
            href={BEEHIIV_SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-3 rounded-lg font-semibold text-base transition-colors ${
              isBanner
                ? 'bg-white text-primary-600 hover:bg-gray-100'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            Subscribe Free →
          </Link>
        ) : (
          // Placeholder shown until URL is configured
          <div className="bg-white border-2 border-dashed border-primary-300 rounded-lg p-4 text-gray-500 text-sm">
            Set <code className="bg-gray-100 px-1 rounded">BEEHIIV_SUBSCRIBE_URL</code> in{' '}
            <code className="bg-gray-100 px-1 rounded">components/EmailSignup.tsx</code>
          </div>
        )}

        {/* Trust line */}
        <p
          className={`text-xs mt-4 ${
            isBanner ? 'text-primary-200' : 'text-gray-400'
          }`}
        >
          Free. No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
