import { NextResponse } from "next/server";

export default function middleware(request) {
    const currentUser = request.cookies.get('current')?.value

    if(currentUser) {
        return NextResponse.redirect(new URL('/components/profile', request.url))
    }
    return NextResponse.redirect(new URL('/components/login', request.url))
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
