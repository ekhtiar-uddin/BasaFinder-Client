import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  admin: [/^\/admin/],
  landlord: [/^\/landlord/],
  tenant: [/^\/tenant/],
};

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `https://basa-finder-client-two.vercel.app/login?redirectPath=${pathname}`,
          // `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url,
        ),
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));

  // if (userInfo && pathname === "/login") {
  //   return NextResponse.next(); // Allow logged-in users to access /login
  // }
}

export const config = {
  matcher: [
    // "/login",
    "/admin/:path*",
    "/admin/:path*",
    "/tenant",
    "/tenant/:path",
    "/landlord",
    "/landlord/:path*",
  ],
};
