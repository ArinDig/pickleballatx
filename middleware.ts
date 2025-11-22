import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Skip middleware for static files, API routes, and Next.js internals
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/favicon.ico') ||
    url.pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot)$/)
  ) {
    return NextResponse.next()
  }

  // Canonical domain: prefer non-www (pickleballatx.org)
  const isWWW = hostname.startsWith('www.')
  const isHTTPS = url.protocol === 'https:'
  
  // Special handling for ads.txt - ensure it's accessible on canonical domain
  // but allow the route handler to serve it (don't redirect if already on canonical)
  if (url.pathname === '/ads.txt') {
    // If on www, redirect to non-www for consistency
    if (isWWW) {
      url.hostname = 'pickleballatx.org'
      url.protocol = 'https:'
      return NextResponse.redirect(url, 301)
    }
    // If HTTP, redirect to HTTPS
    if (!isHTTPS) {
      url.protocol = 'https:'
      return NextResponse.redirect(url, 301)
    }
    // Otherwise, let the route handler serve it
    return NextResponse.next()
  }
  
  // Redirect www to non-www for all other pages
  if (isWWW) {
    url.hostname = 'pickleballatx.org'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }
  
  // Redirect HTTP to HTTPS
  if (!isHTTPS) {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)).*)',
  ],
}

