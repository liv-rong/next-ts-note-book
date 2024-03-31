// export { auth as middleware } from 'auth'

import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return
}

export const config = {
  // matcher: '/about/:path*',
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
