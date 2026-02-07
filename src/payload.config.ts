import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Pages } from './collections/Pages'
import { BlogPosts } from './collections/BlogPosts'
import { KnowledgeBase } from './collections/KnowledgeBase'
import { FAQs } from './collections/FAQs'
import { PricingPlans } from './collections/PricingPlans'
import { Solutions } from './collections/Solutions'
import { ProductFeatures } from './collections/ProductFeatures'
import { CaseStudies } from './collections/CaseStudies'
import { Testimonials } from './collections/Testimonials'
import { Changelog } from './collections/Changelog'
import { NavigationMenus } from './collections/NavigationMenus'
import { FormSubmissions } from './collections/FormSubmissions'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

// Globals
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
    admin: {
        user: Users.slug,
        meta: {
            titleSuffix: '- Insaplan CMS',
            favicon: '/favicon.ico',
            ogImage: '/og-image.jpg'
        }
    },
    collections: [
        Users,
        Pages,
        BlogPosts,
        KnowledgeBase,
        FAQs,
        PricingPlans,
        Solutions,
        ProductFeatures,
        CaseStudies,
        Testimonials,
        Changelog,
        NavigationMenus,
        FormSubmissions,
        Media
    ],
    globals: [SiteSettings],
    editor: lexicalEditor({}),
    typescript: {
        outputFile: path.resolve(dirname, '../payload-types.ts')
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL
        },
        prodMigrations: {
            dir: path.resolve(dirname, './migrations')
        },
        // Disable prepared statements for Supabase compatibility
        push: false,
        migrationDir: path.resolve(dirname, './migrations')
    }),
    cors: [
        process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
        process.env.FRONTEND_URL || 'http://localhost:3000'
    ].filter(Boolean),
    csrf: [
        process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
        process.env.FRONTEND_URL || 'http://localhost:3000'
    ].filter(Boolean),
    graphQL: {
        schemaOutputFile: path.resolve(dirname, '../schema.graphql')
    }
})
