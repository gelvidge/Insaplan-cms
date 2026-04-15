import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        ALTER TABLE product_overview_page
          ADD COLUMN IF NOT EXISTS "key_benefits_heading"        varchar,
          ADD COLUMN IF NOT EXISTS "key_benefits_subheading"     varchar,
          ADD COLUMN IF NOT EXISTS "comparison_table_heading"    varchar,
          ADD COLUMN IF NOT EXISTS "comparison_table_subheading" varchar;

        CREATE TABLE IF NOT EXISTS "product_overview_page_key_benefits_benefits" (
          "_order"      integer NOT NULL,
          "_parent_id"  integer NOT NULL,
          "id"          varchar PRIMARY KEY NOT NULL,
          "icon"        varchar,
          "title"       varchar,
          "description" varchar
        );
        ALTER TABLE "product_overview_page_key_benefits_benefits"
          ADD CONSTRAINT "product_overview_page_key_benefits_benefits_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page"("id") ON DELETE cascade ON UPDATE no action;

        CREATE TABLE IF NOT EXISTS "product_overview_page_comparison_table_columns" (
          "_order"     integer NOT NULL,
          "_parent_id" integer NOT NULL,
          "id"         varchar PRIMARY KEY NOT NULL,
          "label"      varchar
        );
        ALTER TABLE "product_overview_page_comparison_table_columns"
          ADD CONSTRAINT "product_overview_page_comparison_table_columns_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page"("id") ON DELETE cascade ON UPDATE no action;

        CREATE TABLE IF NOT EXISTS "product_overview_page_comparison_table_rows" (
          "_order"     integer NOT NULL,
          "_parent_id" integer NOT NULL,
          "id"         varchar PRIMARY KEY NOT NULL,
          "aspect"     varchar
        );
        ALTER TABLE "product_overview_page_comparison_table_rows"
          ADD CONSTRAINT "product_overview_page_comparison_table_rows_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page"("id") ON DELETE cascade ON UPDATE no action;

        CREATE TABLE IF NOT EXISTS "product_overview_page_comparison_table_rows_values" (
          "_order"     integer NOT NULL,
          "_parent_id" varchar NOT NULL,
          "id"         varchar PRIMARY KEY NOT NULL,
          "value"      varchar
        );
        ALTER TABLE "product_overview_page_comparison_table_rows_values"
          ADD CONSTRAINT "product_overview_page_comparison_table_rows_values_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page_comparison_table_rows"("id") ON DELETE cascade ON UPDATE no action;
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "product_overview_page_comparison_table_rows_values";
        DROP TABLE IF EXISTS "product_overview_page_comparison_table_rows";
        DROP TABLE IF EXISTS "product_overview_page_comparison_table_columns";
        DROP TABLE IF EXISTS "product_overview_page_key_benefits_benefits";
        ALTER TABLE product_overview_page
          DROP COLUMN IF EXISTS "key_benefits_heading",
          DROP COLUMN IF EXISTS "key_benefits_subheading",
          DROP COLUMN IF EXISTS "comparison_table_heading",
          DROP COLUMN IF EXISTS "comparison_table_subheading";
    `)
}
