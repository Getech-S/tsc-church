import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('staff_session');
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');

  // If trying to access dashboard without a session, redirect to login
  if (isDashboardPage && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Only run middleware on dashboard routes
export const config = {
  matcher: ['/dashboard/:path*'],
};