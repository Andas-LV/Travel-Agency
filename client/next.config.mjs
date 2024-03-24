/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_API_HOST: process.env.BACKEND_API_HOST,
    },
};
export default nextConfig;
