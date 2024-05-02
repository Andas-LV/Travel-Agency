/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_API_HOST: process.env.BACKEND_API_HOST,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        GITHUB_ID: process.env.GITHUB_ID,
    },
};
export default nextConfig;
