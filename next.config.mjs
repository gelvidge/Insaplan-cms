import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    allowedDevOrigins: ['192.168.1.178'],
    experimental: {
        workerThreads: false,
        cpus: 1,
        reactCompiler: false,
        optimizePackageImports: ['@tabler/icons-react', '@mantine/core'],
    },
}

export default withPayload(nextConfig)
