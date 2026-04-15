import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        ALTER TABLE product_overview_page
          ADD COLUMN IF NOT EXISTS "features_heading"    varchar,
          ADD COLUMN IF NOT EXISTS "features_subheading" varchar,
          ADD COLUMN IF NOT EXISTS "problems_heading"    varchar,
          ADD COLUMN IF NOT EXISTS "problems_subheading" varchar;

        CREATE TABLE IF NOT EXISTS "product_overview_page_features" (
          "_order"      integer NOT NULL,
          "_parent_id"  integer NOT NULL,
          "id"          varchar PRIMARY KEY NOT NULL,
          "icon"        varchar,
          "title"       varchar,
          "description" varchar
        );
        ALTER TABLE "product_overview_page_features"
          ADD CONSTRAINT "product_overview_page_features_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page"("id") ON DELETE cascade ON UPDATE no action;

        CREATE TABLE IF NOT EXISTS "product_overview_page_features_benefits" (
          "_order"     integer NOT NULL,
          "_parent_id" varchar NOT NULL,
          "id"         varchar PRIMARY KEY NOT NULL,
          "label"      varchar
        );
        ALTER TABLE "product_overview_page_features_benefits"
          ADD CONSTRAINT "product_overview_page_features_benefits_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page_features"("id") ON DELETE cascade ON UPDATE no action;

        CREATE TABLE IF NOT EXISTS "product_overview_page_problems" (
          "_order"      integer NOT NULL,
          "_parent_id"  integer NOT NULL,
          "id"          varchar PRIMARY KEY NOT NULL,
          "problem"     varchar,
          "solution"    varchar
        );
        ALTER TABLE "product_overview_page_problems"
          ADD CONSTRAINT "product_overview_page_problems_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page"("id") ON DELETE cascade ON UPDATE no action;
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "product_overview_page_problems";
        DROP TABLE IF EXISTS "product_overview_page_features_benefits";
        DROP TABLE IF EXISTS "product_overview_page_features";
        ALTER TABLE product_overview_page
          DROP COLUMN IF EXISTS "features_heading",
          DROP COLUMN IF EXISTS "features_subheading",
          DROP COLUMN IF EXISTS "problems_heading",
          DROP COLUMN IF EXISTS "problems_subheading";
    `)
}
