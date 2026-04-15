import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Adds columns that were missing from tables that already existed when
 * 20260415_080421 ran (those CREATE TABLE IF NOT EXISTS silently skipped them).
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
    // footer — new columns added to global
    await db.execute(sql`ALTER TABLE "footer" ADD COLUMN IF NOT EXISTS "logo_text" varchar DEFAULT 'Insaplan'`)
    await db.execute(sql`ALTER TABLE "footer" ADD COLUMN IF NOT EXISTS "nav_cta_label" varchar DEFAULT 'Request Access'`)
    await db.execute(sql`ALTER TABLE "footer" ADD COLUMN IF NOT EXISTS "nav_cta_url" varchar DEFAULT '/contact'`)
    await db.execute(sql`ALTER TABLE "footer" ADD COLUMN IF NOT EXISTS "copyright_suffix" varchar DEFAULT 'All Rights Reserved.'`)

    // pricing_page — replace coming_soon_* with billing toggle labels
    await db.execute(sql`ALTER TABLE "pricing_page" ADD COLUMN IF NOT EXISTS "monthly_label" varchar DEFAULT 'Monthly'`)
    await db.execute(sql`ALTER TABLE "pricing_page" ADD COLUMN IF NOT EXISTS "annual_label" varchar DEFAULT 'Annual'`)
    await db.execute(sql`ALTER TABLE "pricing_page" ADD COLUMN IF NOT EXISTS "annual_discount_badge" varchar DEFAULT 'Save 20%'`)
    await db.execute(sql`ALTER TABLE "pricing_page" ADD COLUMN IF NOT EXISTS "custom_price_label" varchar DEFAULT 'Custom'`)
    await db.execute(sql`ALTER TABLE "pricing_page" ADD COLUMN IF NOT EXISTS "per_month_suffix" varchar DEFAULT '/ mo'`)
    await db.execute(sql`ALTER TABLE "pricing_page" ADD COLUMN IF NOT EXISTS "popular_badge_label" varchar DEFAULT 'Most Popular'`)
    await db.execute(sql`ALTER TABLE "pricing_page" ADD COLUMN IF NOT EXISTS "billed_annually_label" varchar DEFAULT 'Billed annually'`)

    // legal_page — add tab labels and data security fields
    await db.execute(sql`ALTER TABLE "legal_page" ADD COLUMN IF NOT EXISTS "terms_tab_label" varchar DEFAULT 'Terms of Service'`)
    await db.execute(sql`ALTER TABLE "legal_page" ADD COLUMN IF NOT EXISTS "privacy_tab_label" varchar DEFAULT 'Privacy Policy'`)
    await db.execute(sql`ALTER TABLE "legal_page" ADD COLUMN IF NOT EXISTS "data_security_tab_label" varchar DEFAULT 'Data Security'`)
    await db.execute(sql`ALTER TABLE "legal_page" ADD COLUMN IF NOT EXISTS "data_security_content" jsonb`)
    await db.execute(sql`ALTER TABLE "legal_page" ADD COLUMN IF NOT EXISTS "data_security_coming_soon" varchar DEFAULT 'Coming soon. Our data security documentation is being finalized and will be available before launch.'`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`ALTER TABLE "footer" DROP COLUMN IF EXISTS "logo_text"`)
    await db.execute(sql`ALTER TABLE "footer" DROP COLUMN IF EXISTS "nav_cta_label"`)
    await db.execute(sql`ALTER TABLE "footer" DROP COLUMN IF EXISTS "nav_cta_url"`)
    await db.execute(sql`ALTER TABLE "footer" DROP COLUMN IF EXISTS "copyright_suffix"`)

    await db.execute(sql`ALTER TABLE "pricing_page" DROP COLUMN IF EXISTS "monthly_label"`)
    await db.execute(sql`ALTER TABLE "pricing_page" DROP COLUMN IF EXISTS "annual_label"`)
    await db.execute(sql`ALTER TABLE "pricing_page" DROP COLUMN IF EXISTS "annual_discount_badge"`)
    await db.execute(sql`ALTER TABLE "pricing_page" DROP COLUMN IF EXISTS "custom_price_label"`)
    await db.execute(sql`ALTER TABLE "pricing_page" DROP COLUMN IF EXISTS "per_month_suffix"`)
    await db.execute(sql`ALTER TABLE "pricing_page" DROP COLUMN IF EXISTS "popular_badge_label"`)
    await db.execute(sql`ALTER TABLE "pricing_page" DROP COLUMN IF EXISTS "billed_annually_label"`)

    await db.execute(sql`ALTER TABLE "legal_page" DROP COLUMN IF EXISTS "terms_tab_label"`)
    await db.execute(sql`ALTER TABLE "legal_page" DROP COLUMN IF EXISTS "privacy_tab_label"`)
    await db.execute(sql`ALTER TABLE "legal_page" DROP COLUMN IF EXISTS "data_security_tab_label"`)
    await db.execute(sql`ALTER TABLE "legal_page" DROP COLUMN IF EXISTS "data_security_content"`)
    await db.execute(sql`ALTER TABLE "legal_page" DROP COLUMN IF EXISTS "data_security_coming_soon"`)
}
