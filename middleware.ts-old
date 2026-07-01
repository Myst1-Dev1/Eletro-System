import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const userCookie = request.cookies.get("user");
    const { pathname } = request.nextUrl;

    const protectedRoutes = ["/produtos", "/pedidos", "/sucesso"];
    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

    if (isProtectedRoute) {
        // 1. Se não tem cookie, redireciona para a home (onde fica o login)
        if (!userCookie) {
            return NextResponse.redirect(new URL("/unauthorized", request.url));
        }

        // 2. Se tem cookie, vamos validar com a API
        try {
            const response = await fetch("https://admin.eletrosystemti.com.br/api/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${userCookie.value}`,
                },
                cache: 'no-store'
            });

            if (!response.ok) {
                // Token inválido ou expirado
                const responseRedirect = NextResponse.redirect(new URL("/unauthorized", request.url));
                responseRedirect.cookies.delete("user");
                return responseRedirect;
            }
        } catch (error) {
            // Erro na requisição (API fora do ar, etc), por segurança, redireciona
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    // Validação extra para a página de sucesso
    if (pathname === "/sucesso" && request.nextUrl.searchParams.get("success") !== "true") {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/produtos/:path*", "/pedidos/:path*", "/sucesso/:path*"],
};