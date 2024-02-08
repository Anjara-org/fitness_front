
import { NextResponse } from "next/server";

export default function middleware(request) {
    const currentUser = request.cookies.get('current')?.value

    if(currentUser) {
        return NextResponse.redirect(new URL('/dashboard', request.URL))
    }
    return NextResponse.redirect(new URL('src/pages/index.js', request.URL))
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
