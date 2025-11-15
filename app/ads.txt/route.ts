import { NextResponse } from 'next/server'

export async function GET() {
  // Fetch and serve content from Ezoic's automated ads.txt manager service
  // This ensures Ezoic's verification can read the content directly
  // Update the account ID (19390) with your actual Ezoic account ID if different
  const ezoicAdsTxtUrl = 'https://srv.adstxtmanager.com/19390/pickleballatx.org'
  
  try {
    // Fetch the ads.txt content from Ezoic's service
    const response = await fetch(ezoicAdsTxtUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PickleballATX/1.0)',
      },
    })
    
    if (!response.ok) {
      // If fetch fails, fall back to redirect
      return NextResponse.redirect(ezoicAdsTxtUrl, {
        status: 301,
        headers: {
          'Content-Type': 'text/plain',
          'Cache-Control': 'public, max-age=86400',
        },
      })
    }
    
    const content = await response.text()
    
    // Serve the content directly with proper headers
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    // If there's an error, fall back to redirect
    console.error('Error fetching ads.txt from Ezoic:', error)
    return NextResponse.redirect(ezoicAdsTxtUrl, {
      status: 301,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  }
}

