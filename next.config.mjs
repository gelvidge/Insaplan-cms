import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    allowedDevOrigins: ['192.168.1.178'],
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: process.env.PAYLOAD_PUBLIC_SERVER_URL
                    ? new URL(process.env.PAYLOAD_PUBLIC_SERVER_URL).hostname
                    : 'insaplan.com',
            },
        ],
    },
    experimental: {
        workerThreads: false,
        cpus: 1,
        reactCompiler: false,
        optimizePackageImports: ['@tabler/icons-react', '@mantine/core'],
    },
}

export default withPayload(nextConfig)
