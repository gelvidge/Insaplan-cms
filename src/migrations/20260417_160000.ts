import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Drops the solutions_page global table — the Solutions index page has been removed.

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "solutions_page" CASCADE;
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "solutions_page" (
            "id"                  serial PRIMARY KEY NOT NULL,
            "hero_title"          varchar,
            "hero_subtitle"       varchar,
            "section_heading"     varchar,
            "section_subheading"  varchar,
            "seo_meta_title"      varchar,
            "seo_meta_description" varchar,
            "seo_canonical_url"   varchar,
            "seo_no_index"        boolean DEFAULT false,
            "seo_keywords"        varchar,
            "updated_at"          timestamp(3) with time zone DEFAULT now() NOT NULL,
            "created_at"          timestamp(3) with time zone DEFAULT now() NOT NULL
        );
    `)
}
