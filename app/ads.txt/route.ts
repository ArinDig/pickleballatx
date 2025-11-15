import { NextResponse } from 'next/server'

export async function GET() {
  // Redirect to Ezoic's automated ads.txt manager service
  // Update the account ID (19390) with your actual Ezoic account ID
  const ezoicAdsTxtUrl = 'https://srv.adstxtmanager.com/19390/pickleballatx.org'
  
  return NextResponse.redirect(ezoicAdsTxtUrl, {
    status: 301, // Permanent redirect
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}

