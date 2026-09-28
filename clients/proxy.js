// import { NextResponse } from "next/server";

// export function proxy(request) {
//   const token = request.cookies.get("token")?.value;

//   const pathname = request.nextUrl.pathname;

//   // Candidate dashboard protection
//   if (pathname.startsWith("/candidate/dashboard")) {
//     if (!token) {
//       return NextResponse.redirect(
//         new URL("/candidate/login", request.url)
//       );
//     }
//   }

//   // Recruiter dashboard protection
//   if (pathname.startsWith("/recruiter/dashboard")) {
//     if (!token) {
//       return NextResponse.redirect(
//         new URL("/recruiter/login", request.url)
//       );
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/candidate/dashboard/:path*",
//     "/recruiter/dashboard/:path*",
//   ],
// };




// import { NextResponse } from "next/server";

// export function proxy(request) {
//   console.log("🔥 PROXY RUNNING:", request.nextUrl.pathname);

//   const token = request.cookies.get("token")?.value;

//   console.log("🍪 TOKEN:", token);

//   if (request.nextUrl.pathname.startsWith("/candidate/dashboard")) {
//     if (!token) {
//       console.log("❌ No candidate token");
//       return NextResponse.redirect(
//         new URL("/candidate/login", request.url)
//       );
//     }
//   }

//   if (request.nextUrl.pathname.startsWith("/recruiter/dashboard")) {
//     if (!token) {
//       console.log("❌ No recruiter token");
//       return NextResponse.redirect(
//         new URL("/recruiter/login", request.url)
//       );
//     }
//   }

//   console.log("✅ Access allowed");

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/candidate/dashboard/:path*",
//     "/recruiter/dashboard/:path*",
//   ],
// };


import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname;

  console.log("🔥 PROXY:", pathname);
  console.log("🍪 TOKEN:", token);

  if (pathname.startsWith("/recruiter/dashboard")) {
    if (!token) {
      console.log("🚨 REDIRECTING TO RECRUITER LOGIN");

      return NextResponse.redirect(
        new URL("/recruiter/login", request.url)
      );
    }
  }

  if (pathname.startsWith("/candidate/dashboard")) {
    if (!token) {
      console.log("🚨 REDIRECTING TO CANDIDATE LOGIN");

      return NextResponse.redirect(
        new URL("/candidate/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/recruiter/dashboard/:path*",
    "/candidate/dashboard/:path*",
  ],
};