import { NextResponse } from 'next/server'

export async function GET() {
  // Primary AdSense entry - always included
  const adsenseEntry = 'google.com, pub-1749871118217579, DIRECT, f08c47fec0942fa0'
  
  // Ezoic's automated ads.txt manager service
  const ezoicAdsTxtUrl = 'https://srv.adstxtmanager.com/19390/pickleballatx.org'
  
  // Start with AdSense entry to ensure it's always present
  let content = `# Site owner Google AdSense entry\n${adsenseEntry}\n`
  
  try {
    // Try to fetch additional entries from Ezoic's service
    const response = await fetch(ezoicAdsTxtUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PickleballATX/1.0)',
      },
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(5000), // 5 second timeout
    })
    
    if (response.ok) {
      const ezoicContent = await response.text()
      
      // Only append Ezoic entries if they don't duplicate AdSense
      // Filter out any duplicate AdSense entries from Ezoic
      const ezoicLines = ezoicContent
        .split('\n')
        .filter(line => {
          const trimmed = line.trim()
          // Skip empty lines and comments
          if (!trimmed || trimmed.startsWith('#')) return true
          // Skip if it's a duplicate AdSense entry
          if (trimmed.includes('pub-1749871118217579')) return false
          return true
        })
      
      if (ezoicLines.length > 0) {
        content += '\n# Ezoic managed entries\n'
        content += ezoicLines.join('\n')
      }
    }
  } catch (error) {
    // If Ezoic fetch fails, we still serve AdSense entry
    // This ensures AdSense verification always works
    console.error('Error fetching ads.txt from Ezoic (serving AdSense only):', error)
  }
  
  // Always serve the content with proper headers
  // Critical: No caching to ensure AdSense can verify immediately
  return new NextResponse(content.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}

