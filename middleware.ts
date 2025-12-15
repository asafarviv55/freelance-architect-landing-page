import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Permanent redirect for root path to default locale
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}`;
    // search (query string) is preserved automatically
    return NextResponse.redirect(url, 308);
  }

  // Delegate all other requests to next-intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en|he)/:path*']
};
