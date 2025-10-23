'use client'

import Script from 'next/script'

export default function GoogleAdsense() {
  // TODO: Replace with your actual AdSense publisher ID
  const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-XXXXXXXXXXXXXXXX'
  
  if (!ADSENSE_ID || ADSENSE_ID === 'ca-pub-XXXXXXXXXXXXXXXX') {
    // Return null in development or if AdSense ID is not configured
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

