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
    
    let content = await response.text()
    
    // Ensure the site owner's Google AdSense entry is included
    // This is required for AdSense verification
    const adsenseEntry = 'google.com, pub-1749871118217579, DIRECT, f08c47fec0942fa0'
    
    // Check if the entry already exists in the content
    if (!content.includes('pub-1749871118217579')) {
      // Append the AdSense entry to the content
      // Add a comment to identify it as the site owner's entry
      content += '\n# Site owner AdSense entry\n'
      content += adsenseEntry + '\n'
    }
    
    // Serve the content directly with proper headers
    // Updated Cache-Control to ensure AdSense can verify immediately
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'max-age=0, must-revalidate', // No cache for AdSense verification
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

