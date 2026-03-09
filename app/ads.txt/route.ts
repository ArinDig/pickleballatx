import { NextResponse } from 'next/server'

// Paste the exact line from Newor's onboarding "download" below (in quotes), or set NEXT_PUBLIC_NEWOR_ADS_TXT_LINE in .env
const NEWOR_ADS_TXT_LINE = process.env.NEXT_PUBLIC_NEWOR_ADS_TXT_LINE ?? ''

export async function GET() {
  let content = '# Pickleball ATX - ads.txt\n'
  
  if (NEWOR_ADS_TXT_LINE.trim()) {
    content += `# Newor Media\n${NEWOR_ADS_TXT_LINE.trim()}\n`
  } else {
    content += '# Newor Media: paste the line from Newor onboarding "download" into NEWOR_ADS_TXT_LINE in this file or set NEXT_PUBLIC_NEWOR_ADS_TXT_LINE\n'
  }
  
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

