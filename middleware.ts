import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "./config/site";

// Solo usamos Kinde para la autenticación
export default withAuth(
  async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Si es una ruta privada, dejarla pasar (Kinde se encargará de la autenticación)
    if (pathname.startsWith("/private")) {
      return NextResponse.next();
    }

    return NextResponse.next();
  },
  {
    publicPaths: siteConfig.publicPaths,
  },
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
