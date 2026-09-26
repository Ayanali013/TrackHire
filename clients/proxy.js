import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("token")?.value;

  const pathname = request.nextUrl.pathname;

  // Candidate dashboard protection
  if (pathname.startsWith("/candidate/dashboard")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/candidate/login", request.url)
      );
    }
  }

  // Recruiter dashboard protection
  if (pathname.startsWith("/recruiter/dashboard")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/recruiter/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/candidate/dashboard/:path*",
    "/recruiter/dashboard/:path*",
  ],
};