import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "product_overview_page_features_benefits" CASCADE;
        DROP TABLE IF EXISTS "product_overview_page_features" CASCADE;
        DROP TYPE IF EXISTS "public"."enum_product_overview_page_features_icon";
        ALTER TABLE "product_overview_page"
            DROP COLUMN IF EXISTS "features_heading",
            DROP COLUMN IF EXISTS "features_subheading";
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        CREATE TYPE "public"."enum_product_overview_page_features_icon" AS ENUM(
            'chart-bar', 'palette', 'brain', 'adjustments', 'books', 'database'
        );
        ALTER TABLE "product_overview_page"
            ADD COLUMN IF NOT EXISTS "features_heading"    varchar,
            ADD COLUMN IF NOT EXISTS "features_subheading" varchar;
        CREATE TABLE IF NOT EXISTS "product_overview_page_features" (
            "_order"      integer      NOT NULL,
            "_parent_id"  integer      NOT NULL,
            "id"          varchar      PRIMARY KEY,
            "icon"        "enum_product_overview_page_features_icon",
            "title"       varchar      NOT NULL,
            "description" varchar      NOT NULL
        );
        CREATE TABLE IF NOT EXISTS "product_overview_page_features_benefits" (
            "_order"      integer      NOT NULL,
            "_parent_id"  varchar      NOT NULL,
            "id"          varchar      PRIMARY KEY,
            "label"       varchar      NOT NULL
        );
        ALTER TABLE "product_overview_page_features"
            ADD CONSTRAINT "product_overview_page_features_parent_fk"
            FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page" ("id") ON DELETE CASCADE;
        ALTER TABLE "product_overview_page_features_benefits"
            ADD CONSTRAINT "product_overview_page_features_benefits_parent_fk"
            FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page_features" ("id") ON DELETE CASCADE;
    `)
}
