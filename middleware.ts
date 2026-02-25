import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
    const user = request.cookies.get("user");

    const protectedRoutes = ["/produtos", "/pedidos", "/sucesso"];

    const isProtectedRoute = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );

    if (isProtectedRoute && !user) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (request.nextUrl.pathname === "/sucesso" && request.nextUrl.searchParams.get("success") !== "true") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/produtos", "/pedidos", "/sucesso"],
};