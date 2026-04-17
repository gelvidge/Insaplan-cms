import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        ALTER TABLE "product_knowledgebase_page"
            ADD COLUMN IF NOT EXISTS "seo_meta_title"       varchar,
            ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar,
            ADD COLUMN IF NOT EXISTS "seo_og_image_id"      integer,
            ADD COLUMN IF NOT EXISTS "seo_canonical_url"    varchar,
            ADD COLUMN IF NOT EXISTS "seo_no_index"         boolean DEFAULT false;
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        ALTER TABLE "product_knowledgebase_page"
            DROP COLUMN IF EXISTS "seo_meta_title",
            DROP COLUMN IF EXISTS "seo_meta_description",
            DROP COLUMN IF EXISTS "seo_og_image_id",
            DROP COLUMN IF EXISTS "seo_canonical_url",
            DROP COLUMN IF EXISTS "seo_no_index";
    `)
}
