import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "footer" (
          "id"             serial PRIMARY KEY,
          "tagline"        varchar,
          "copyright_name" varchar,
          "updated_at"     timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"     timestamp(3) with time zone DEFAULT now() NOT NULL
        );
        CREATE TABLE IF NOT EXISTS "footer_link_groups" (
          "_order"     integer NOT NULL,
          "_parent_id" integer NOT NULL,
          "id"         varchar PRIMARY KEY NOT NULL,
          "heading"    varchar
        );
        ALTER TABLE "footer_link_groups" ADD CONSTRAINT "footer_link_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
        CREATE TABLE IF NOT EXISTS "footer_link_groups_links" (
          "_order"     integer NOT NULL,
          "_parent_id" varchar NOT NULL,
          "id"         varchar PRIMARY KEY NOT NULL,
          "label"      varchar,
          "url"        varchar
        );
        ALTER TABLE "footer_link_groups_links" ADD CONSTRAINT "footer_link_groups_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "footer_link_groups"("id") ON DELETE cascade ON UPDATE no action;

        CREATE TABLE IF NOT EXISTS "contact_page" (
          "id"                    serial PRIMARY KEY,
          "hero_title"            varchar,
          "hero_subtitle"         varchar,
          "name_placeholder"      varchar,
          "email_placeholder"     varchar,
          "company_placeholder"   varchar,
          "message_placeholder"   varchar,
          "submit_button_label"   varchar,
          "success_message"       varchar,
          "response_note"         varchar,
          "updated_at"            timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"            timestamp(3) with time zone DEFAULT now() NOT NULL
        );

        CREATE TABLE IF NOT EXISTS "blog_page" (
          "id"                   serial PRIMARY KEY,
          "hero_title"           varchar,
          "hero_subtitle"        varchar,
          "read_more_label"      varchar,
          "empty_state_heading"  varchar,
          "empty_state_message"  varchar,
          "updated_at"           timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"           timestamp(3) with time zone DEFAULT now() NOT NULL
        );

        CREATE TABLE IF NOT EXISTS "pricing_page" (
          "id"                    serial PRIMARY KEY,
          "hero_title"            varchar,
          "hero_subtitle"         varchar,
          "coming_soon_heading"   varchar,
          "coming_soon_message"   varchar,
          "updated_at"            timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"            timestamp(3) with time zone DEFAULT now() NOT NULL
        );

        CREATE TABLE IF NOT EXISTS "legal_page" (
          "id"                  serial PRIMARY KEY,
          "hero_title"          varchar,
          "hero_subtitle"       varchar,
          "terms_content"       jsonb,
          "privacy_content"     jsonb,
          "terms_coming_soon"   varchar,
          "privacy_coming_soon" varchar,
          "updated_at"          timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"          timestamp(3) with time zone DEFAULT now() NOT NULL
        );

        CREATE TABLE IF NOT EXISTS "support_page" (
          "id"                   serial PRIMARY KEY,
          "hero_title"           varchar,
          "hero_subtitle"        varchar,
          "coming_soon_message"  varchar,
          "contact_heading"      varchar,
          "contact_email"        varchar,
          "updated_at"           timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"           timestamp(3) with time zone DEFAULT now() NOT NULL
        );

        CREATE TABLE IF NOT EXISTS "knowledge_base_page" (
          "id"                    serial PRIMARY KEY,
          "hero_title"            varchar,
          "hero_subtitle"         varchar,
          "coming_soon_heading"   varchar,
          "coming_soon_message"   varchar,
          "updated_at"            timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"            timestamp(3) with time zone DEFAULT now() NOT NULL
        );

        CREATE TABLE IF NOT EXISTS "site_metadata" (
          "id"                  serial PRIMARY KEY,
          "default_title"       varchar,
          "default_description" varchar,
          "updated_at"          timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"          timestamp(3) with time zone DEFAULT now() NOT NULL
        );

        CREATE TABLE IF NOT EXISTS "product_overview_page" (
          "id"                        serial PRIMARY KEY,
          "hero_title"                varchar,
          "hero_subtitle"             varchar,
          "how_it_works_heading"      varchar,
          "how_it_works_subheading"   varchar,
          "updated_at"                timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"                timestamp(3) with time zone DEFAULT now() NOT NULL
        );
        CREATE TABLE IF NOT EXISTS "product_overview_page_steps" (
          "_order"      integer NOT NULL,
          "_parent_id"  integer NOT NULL,
          "id"          varchar PRIMARY KEY NOT NULL,
          "title"       varchar,
          "description" varchar
        );
        ALTER TABLE "product_overview_page_steps" ADD CONSTRAINT "product_overview_page_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page"("id") ON DELETE cascade ON UPDATE no action;

        CREATE TABLE IF NOT EXISTS "product_features_page" (
          "id"                    serial PRIMARY KEY,
          "hero_title"            varchar,
          "hero_subtitle"         varchar,
          "problems_heading"      varchar,
          "problems_subheading"   varchar,
          "updated_at"            timestamp(3) with time zone DEFAULT now() NOT NULL,
          "created_at"            timestamp(3) with time zone DEFAULT now() NOT NULL
        );
        CREATE TABLE IF NOT EXISTS "product_features_page_features" (
          "_order"      integer NOT NULL,
          "_parent_id"  integer NOT NULL,
          "id"          varchar PRIMARY KEY NOT NULL,
          "icon"        varchar,
          "title"       varchar,
          "description" varchar
        );
        ALTER TABLE "product_features_page_features" ADD CONSTRAINT "product_features_page_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "product_features_page"("id") ON DELETE cascade ON UPDATE no action;
        CREATE TABLE IF NOT EXISTS "product_features_page_features_benefits" (
          "_order"     integer NOT NULL,
          "_parent_id" varchar NOT NULL,
          "id"         varchar PRIMARY KEY NOT NULL,
          "label"      varchar
        );
        ALTER TABLE "product_features_page_features_benefits" ADD CONSTRAINT "product_features_page_features_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "product_features_page_features"("id") ON DELETE cascade ON UPDATE no action;
        CREATE TABLE IF NOT EXISTS "product_features_page_problems" (
          "_order"      integer NOT NULL,
          "_parent_id"  integer NOT NULL,
          "id"          varchar PRIMARY KEY NOT NULL,
          "problem"     varchar,
          "solution"    varchar
        );
        ALTER TABLE "product_features_page_problems" ADD CONSTRAINT "product_features_page_problems_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "product_features_page"("id") ON DELETE cascade ON UPDATE no action;
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "product_features_page_problems";
        DROP TABLE IF EXISTS "product_features_page_features_benefits";
        DROP TABLE IF EXISTS "product_features_page_features";
        DROP TABLE IF EXISTS "product_features_page";
        DROP TABLE IF EXISTS "product_overview_page_steps";
        DROP TABLE IF EXISTS "product_overview_page";
        DROP TABLE IF EXISTS "site_metadata";
        DROP TABLE IF EXISTS "knowledge_base_page";
        DROP TABLE IF EXISTS "support_page";
        DROP TABLE IF EXISTS "legal_page";
        DROP TABLE IF EXISTS "pricing_page";
        DROP TABLE IF EXISTS "blog_page";
        DROP TABLE IF EXISTS "contact_page";
        DROP TABLE IF EXISTS "footer_link_groups_links";
        DROP TABLE IF EXISTS "footer_link_groups";
        DROP TABLE IF EXISTS "footer";
    `)
}
