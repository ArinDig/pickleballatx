'use client'

import Script from 'next/script'

export default function GoogleAdsense() {
  // AdSense publisher ID
  const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-1749871118217579'
  
  if (!ADSENSE_ID) {
    // Return null if AdSense ID is not configured
    return null
  }

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  )
}

