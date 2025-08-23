import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Security Headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://fundingchoicesmessages.google.com https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com",
    "media-src 'self'",
    "object-src 'none'",
    "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests",
  ].join('; ')
  
  response.headers.set('Content-Security-Policy', csp)
  
  // Performance Headers
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  response.headers.set('X-Powered-By', 'LUDGI Inc.')
  
  // CORS Headers for API endpoints
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', 'https://qrgen.ludgi.ai')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  }
  
  // Redirect www to non-www
  const host = request.headers.get('host')
  if (host?.startsWith('www.')) {
    return NextResponse.redirect(
      new URL(request.url.replace('www.', ''), request.url),
      301
    )
  }
  
  // Language Detection and Redirect
  const acceptLanguage = request.headers.get('accept-language')
  const pathname = request.nextUrl.pathname
  
  // Skip language detection for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/en' ||
    pathname.startsWith('/en/')
  ) {
    return response
  }
  
  // Redirect to Korean version for Korean users
  if (acceptLanguage?.startsWith('ko') && pathname === '/') {
    // Already at Korean version, no redirect needed
    return response
  }
  
  // Redirect to English version for non-Korean users
  if (!acceptLanguage?.startsWith('ko') && pathname === '/' && !request.nextUrl.search) {
    // Optionally redirect to /en for English users
    // return NextResponse.redirect(new URL('/en', request.url))
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}