/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DESCOPE_PROJECT_ID: process.env.DESCOPE_PROJECT_ID,
        DESCOPE_TENANT_ID: process.env.DESCOPE_TENANT_ID,
    },
}

module.exports = nextConfig