import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "./config/site";

const kindeMiddleware = withAuth(() => NextResponse.next(), {
  publicPaths: ["/", ...siteConfig.getAllLocalizedPublicPaths()],
}) as unknown as (req: NextRequest) => Promise<NextResponse>;

export function middleware(req: NextRequest) {
  // redirige la raíz siempre (antes de delegar en Kinde)
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/ca", req.url));
  }

  // delega en el middleware de Kinde (typed como función)
  return kindeMiddleware(req);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next (Next.js internals)
     * - Static files:
     *   - html, htm
     *   - css
     *   - js (but not json)
     *   - jpg, jpeg, webp, png, gif, svg
     *   - ttf, woff, woff2
     *   - ico
     *   - csv, doc, docx, xls, xlsx
     *   - zip
     *   - webmanifest
     */
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
