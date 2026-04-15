import { withPayload } from '@payloadcms/next/withPayload'

console.log('BUILD ENV CHECK - DATABASE_URL:', process.env.DATABASE_URL ? 'SET (' + process.env.DATABASE_URL.substring(0, 30) + '...)' : 'UNDEFINED')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: false,
        optimizePackageImports: ['@tabler/icons-react', '@mantine/core'],
    },
}

export default withPayload(nextConfig)
