'use client'

import Link from 'next/link'

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

  return (
    <section
      className={
        isBanner
          ? 'bg-primary-600 py-12 px-4'
          : 'bg-primary-50 border border-primary-200 rounded-xl py-10 px-6 my-8'
      }
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-4xl mb-3">🏓</div>

        <h2
          className={`text-2xl md:text-3xl font-bold mb-2 ${
            isBanner ? 'text-white' : 'text-gray-900'
          }`}
        >
          {heading}
        </h2>

        <p
          className={`text-base mb-6 ${
            isBanner ? 'text-primary-100' : 'text-gray-600'
          }`}
        >
          {subheading}
        </p>

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
