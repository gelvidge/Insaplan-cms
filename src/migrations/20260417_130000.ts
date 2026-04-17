import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        ALTER TABLE "product_knowledgebase_page"
            ADD COLUMN IF NOT EXISTS "seo_meta_title"       varchar,
            ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar,
            ADD COLUMN IF NOT EXISTS "seo_og_image_id"      integer,
            ADD COLUMN IF NOT EXISTS "seo_canonical_url"    varchar,
            ADD COLUMN IF NOT EXISTS "seo_no_index"         boolean DEFAULT false,
            ADD COLUMN IF NOT EXISTS "section3_kicker"      varchar,
            ADD COLUMN IF NOT EXISTS "section3_heading"     varchar,
            ADD COLUMN IF NOT EXISTS "section3_body"        varchar;

        CREATE TABLE IF NOT EXISTS "product_knowledgebase_page_section3_points" (
            "_order"     integer NOT NULL,
            "_parent_id" integer NOT NULL,
            "id"         varchar PRIMARY KEY,
            "label"      varchar NOT NULL
        );

        ALTER TABLE "product_knowledgebase_page_section3_points"
            ADD CONSTRAINT "product_knowledgebase_page_section3_points_parent_fk"
            FOREIGN KEY ("_parent_id")
            REFERENCES "product_knowledgebase_page" ("id")
            ON DELETE CASCADE;

        CREATE INDEX IF NOT EXISTS "product_knowledgebase_page_section3_points_order_idx"
            ON "product_knowledgebase_page_section3_points" USING btree ("_order");

        CREATE INDEX IF NOT EXISTS "product_knowledgebase_page_section3_points_parent_id_idx"
            ON "product_knowledgebase_page_section3_points" USING btree ("_parent_id");
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "product_knowledgebase_page_section3_points" CASCADE;

        ALTER TABLE "product_knowledgebase_page"
            DROP COLUMN IF EXISTS "seo_meta_title",
            DROP COLUMN IF EXISTS "seo_meta_description",
            DROP COLUMN IF EXISTS "seo_og_image_id",
            DROP COLUMN IF EXISTS "seo_canonical_url",
            DROP COLUMN IF EXISTS "seo_no_index",
            DROP COLUMN IF EXISTS "section3_kicker",
            DROP COLUMN IF EXISTS "section3_heading",
            DROP COLUMN IF EXISTS "section3_body";
    `)
}
