
import { withAuth } from "next-auth/middleware"
import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"


export default withAuth(
    async function middleware (req: NextRequest) {
        const token = await getToken({ req })
        const isAuthenticated = !!token;

        if (!isAuthenticated) {
            const response = NextResponse.json(
                { statusText: "UnAuthorized" }, 
                { status: 401 }
            );
            return response
        }

        return NextResponse.next()
    }
)


export const config = { matcher: ["/dashboard/:path*", "/api/:functions*"] }