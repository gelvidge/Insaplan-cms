import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Drops redundant columns from solutions: subtitle, title, hero_kicker.

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        ALTER TABLE "solutions" DROP COLUMN IF EXISTS "subtitle";
        ALTER TABLE "solutions" DROP COLUMN IF EXISTS "title";
        ALTER TABLE "solutions" DROP COLUMN IF EXISTS "hero_kicker";
        ALTER TABLE "solutions" DROP COLUMN IF EXISTS "cta_text";
        ALTER TABLE "solutions" DROP COLUMN IF EXISTS "cta_url";
        ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_subtitle";
        ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_title";
        ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_hero_kicker";
        ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_cta_text";
        ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_cta_url";
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "subtitle" varchar;
        ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "title" varchar;
        ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "hero_kicker" varchar;
        ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "cta_text" varchar;
        ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "cta_url" varchar;
        ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_subtitle" varchar;
        ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_title" varchar;
        ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_hero_kicker" varchar;
        ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_cta_text" varchar;
        ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_cta_url" varchar;
    `)
}
