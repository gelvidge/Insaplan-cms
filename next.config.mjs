import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: false,
        optimizePackageImports: ['@tabler/icons-react', '@mantine/core'],
    },
}

export default withPayload(nextConfig)
