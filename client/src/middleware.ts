import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/auth/signup",
        error: "/error",
    },
})
export const config = { matcher: ["/dashboard"] }