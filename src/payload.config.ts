import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { resendAdapter } from '@payloadcms/email-resend'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'
import { migrations } from './migrations'

// Collections
import { Pages } from './collections/Pages'
import { BlogPosts } from './collections/BlogPosts'
import { KnowledgeBase } from './collections/KnowledgeBase'
import { FAQs } from './collections/FAQs'
import { PricingPlans } from './collections/PricingPlans'
import { Solutions } from './collections/Solutions'
import { Changelog } from './collections/Changelog'
import { NavigationMenus } from './collections/NavigationMenus'
import { FormSubmissions } from './collections/FormSubmissions'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { MarketingHome } from './globals/MarketingHome'
import { FooterGlobal } from './globals/FooterGlobal'
import { ContactPageGlobal } from './globals/ContactPageGlobal'
import { BlogPageGlobal } from './globals/BlogPageGlobal'
import { PricingPageGlobal } from './globals/PricingPageGlobal'
import { LegalPageGlobal } from './globals/LegalPageGlobal'
import { SupportPageGlobal } from './globals/SupportPageGlobal'
import { KnowledgeBasePageGlobal } from './globals/KnowledgeBasePageGlobal'
import { SiteMetadataGlobal } from './globals/SiteMetadataGlobal'
import { ProductOverviewPageGlobal } from './globals/ProductOverviewPageGlobal'
import { ProductKnowledgeBasePageGlobal } from './globals/ProductKnowledgeBasePageGlobal'
import { ProductPlanningPageGlobal } from './globals/ProductPlanningPageGlobal'
import { ProductVisualsPageGlobal } from './globals/ProductVisualsPageGlobal'
import { ProductReportingPageGlobal } from './globals/ProductReportingPageGlobal'
import { SolutionsPageGlobal } from './globals/SolutionsPageGlobal'
import { FAQsPageGlobal } from './globals/FAQsPageGlobal'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
    email: resendAdapter({
        defaultFromAddress: 'support@insaplan.com',
        defaultFromName: 'Insaplan',
        apiKey: process.env.RESEND_API_KEY || '',
    }),
    admin: {
        user: Users.slug,
        meta: {
            titleSuffix: '- Insaplan',
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
        Changelog,
        NavigationMenus,
        FormSubmissions,
        Media
    ],
    globals: [
        // Marketing — ordered to mirror the website nav
        MarketingHome,
        ProductOverviewPageGlobal,
        ProductKnowledgeBasePageGlobal,
        ProductPlanningPageGlobal,
        ProductVisualsPageGlobal,
        ProductReportingPageGlobal,
        SolutionsPageGlobal,
        PricingPageGlobal,
        BlogPageGlobal,
        FAQsPageGlobal,
        SupportPageGlobal,
        KnowledgeBasePageGlobal,
        ContactPageGlobal,
        LegalPageGlobal,
        FooterGlobal,
        // Configuration
        SiteMetadataGlobal,
        SiteSettings,
    ],
    editor: lexicalEditor({}),
    typescript: {
        outputFile: path.resolve(dirname, '../payload-types.ts')
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL,
            max: 3,
        },
        prodMigrations: migrations,
        // Supabase-managed Postgres often uses restricted roles (e.g. `prisma.<ref>`). Keep push off
        // and apply schema via migrations/SQL editor with a privileged role.
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
    },
    sharp,
})
