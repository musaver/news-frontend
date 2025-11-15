import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = request.nextUrl;

  // Protect author-dashboard routes
  if (pathname.startsWith('/author-dashboard')) {
    // Check if user is logged in
    if (!token) {
      const url = new URL('/login', request.url);
      url.searchParams.set('callbackUrl', encodeURI(pathname));
      return NextResponse.redirect(url);
    }

    // Check if user is an author
    if (token.userType !== 'author') {
      // Redirect non-authors to user dashboard or home page
      return NextResponse.redirect(new URL('/user-dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/author-dashboard/:path*',
  ],
};
