import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySessionValue, ADMIN_COOKIE_NAME } from '@/lib/auth'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  if (pathname.startsWith('/admin')) {
    const cookie = request.cookies.get(ADMIN_COOKIE_NAME)?.value
    if (!verifySessionValue(cookie)) {
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
