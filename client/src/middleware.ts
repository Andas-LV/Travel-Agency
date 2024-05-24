import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/signup",
        error: "/error",
    },
    callbacks: {
        authorized: ({ token }) => token?.role === "admin",
    },
})
export const config = { matcher: ["/dashboard", "/admin"] }