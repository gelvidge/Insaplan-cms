import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Adds seo_keywords varchar column to every table that uses seoFields.
// The column was defined in the Payload field config but never migrated to the DB.

const TABLES = [
    // Collections
    'pages',
    'blog_posts',
    'solutions',
    // Globals
    'marketing_home',
    'product_overview_page',
    'product_planning_page',
    'product_reporting_page',
    'product_visuals_page',
    'product_features_page',
    'product_knowledgebase_page',
    'pricing_page',
    'blog_page',
    'faqs_page',
    'contact_page',
    'support_page',
]

export async function up({ db }: MigrateUpArgs): Promise<void> {
    for (const table of TABLES) {
        await db.execute(sql.raw(`
            ALTER TABLE "${table}" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
        `))
    }
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    for (const table of TABLES) {
        await db.execute(sql.raw(`
            ALTER TABLE "${table}" DROP COLUMN IF EXISTS "seo_keywords";
        `))
    }
}
