import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "product_knowledge_base_page" (
          "id"                  serial PRIMARY KEY,
          "hero_title"          varchar,
          "hero_subtitle"       varchar,
          "section_heading"     varchar,
          "section_subheading"  varchar,
          "updated_at"          timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"          timestamp(3) with time zone DEFAULT now() NOT NULL
        );
        CREATE TABLE IF NOT EXISTS "product_knowledge_base_page_features" (
          "_order"      integer NOT NULL,
          "_parent_id"  integer NOT NULL,
          "id"          varchar PRIMARY KEY NOT NULL,
          "title"       varchar,
          "description" varchar
        );
        ALTER TABLE "product_knowledge_base_page_features"
          ADD CONSTRAINT "product_knowledge_base_page_features_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_knowledge_base_page"("id") ON DELETE cascade ON UPDATE no action;

        CREATE TABLE IF NOT EXISTS "product_planning_page" (
          "id"                  serial PRIMARY KEY,
          "hero_title"          varchar,
          "hero_subtitle"       varchar,
          "section_heading"     varchar,
          "section_subheading"  varchar,
          "updated_at"          timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"          timestamp(3) with time zone DEFAULT now() NOT NULL
        );
        CREATE TABLE IF NOT EXISTS "product_planning_page_features" (
          "_order"      integer NOT NULL,
          "_parent_id"  integer NOT NULL,
          "id"          varchar PRIMARY KEY NOT NULL,
          "title"       varchar,
          "description" varchar
        );
        ALTER TABLE "product_planning_page_features"
          ADD CONSTRAINT "product_planning_page_features_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_planning_page"("id") ON DELETE cascade ON UPDATE no action;

        CREATE TABLE IF NOT EXISTS "product_visuals_page" (
          "id"                  serial PRIMARY KEY,
          "hero_title"          varchar,
          "hero_subtitle"       varchar,
          "section_heading"     varchar,
          "section_subheading"  varchar,
          "updated_at"          timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"          timestamp(3) with time zone DEFAULT now() NOT NULL
        );
        CREATE TABLE IF NOT EXISTS "product_visuals_page_features" (
          "_order"      integer NOT NULL,
          "_parent_id"  integer NOT NULL,
          "id"          varchar PRIMARY KEY NOT NULL,
          "title"       varchar,
          "description" varchar
        );
        ALTER TABLE "product_visuals_page_features"
          ADD CONSTRAINT "product_visuals_page_features_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_visuals_page"("id") ON DELETE cascade ON UPDATE no action;

        CREATE TABLE IF NOT EXISTS "product_reporting_page" (
          "id"                  serial PRIMARY KEY,
          "hero_title"          varchar,
          "hero_subtitle"       varchar,
          "section_heading"     varchar,
          "section_subheading"  varchar,
          "updated_at"          timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"          timestamp(3) with time zone DEFAULT now() NOT NULL
        );
        CREATE TABLE IF NOT EXISTS "product_reporting_page_features" (
          "_order"      integer NOT NULL,
          "_parent_id"  integer NOT NULL,
          "id"          varchar PRIMARY KEY NOT NULL,
          "title"       varchar,
          "description" varchar
        );
        ALTER TABLE "product_reporting_page_features"
          ADD CONSTRAINT "product_reporting_page_features_parent_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "product_reporting_page_features";
        DROP TABLE IF EXISTS "product_reporting_page";
        DROP TABLE IF EXISTS "product_visuals_page_features";
        DROP TABLE IF EXISTS "product_visuals_page";
        DROP TABLE IF EXISTS "product_planning_page_features";
        DROP TABLE IF EXISTS "product_planning_page";
        DROP TABLE IF EXISTS "product_knowledge_base_page_features";
        DROP TABLE IF EXISTS "product_knowledge_base_page";
    `)
}
