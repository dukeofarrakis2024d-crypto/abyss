import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'super_secret_dev_key_do_not_use_in_prod')

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Protect admin routes
  if (path.startsWith('/admin')) {
    const token = request.cookies.get('auth_token')?.value
    
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      const { payload } = await jwtVerify(token, JWT_SECRET)
      if (payload.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/', request.url))
      }
    } catch (err) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
