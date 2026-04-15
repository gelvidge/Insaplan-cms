import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        -- Hero fields on solutions table
        ALTER TABLE "solutions"
            ADD COLUMN IF NOT EXISTS "hero_kicker"          varchar,
            ADD COLUMN IF NOT EXISTS "hero_headline"        varchar,
            ADD COLUMN IF NOT EXISTS "hero_headline_accent" varchar,
            ADD COLUMN IF NOT EXISTS "hero_body"            varchar;

        -- Hero fields on solutions version table
        ALTER TABLE "_solutions_v"
            ADD COLUMN IF NOT EXISTS "version_hero_kicker"          varchar,
            ADD COLUMN IF NOT EXISTS "version_hero_headline"        varchar,
            ADD COLUMN IF NOT EXISTS "version_hero_headline_accent" varchar,
            ADD COLUMN IF NOT EXISTS "version_hero_body"            varchar;

        -- Hero steps array table
        CREATE TABLE IF NOT EXISTS "solutions_hero_steps" (
            "_order"      integer      NOT NULL,
            "_parent_id"  integer      NOT NULL,
            "id"          varchar      PRIMARY KEY NOT NULL,
            "label"       varchar      NOT NULL,
            "active"      boolean      DEFAULT false
        );
        ALTER TABLE "solutions_hero_steps"
            ADD CONSTRAINT "solutions_hero_steps_parent_id_fk"
            FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
        CREATE INDEX IF NOT EXISTS "solutions_hero_steps_order_idx" ON "solutions_hero_steps" USING btree ("_order");
        CREATE INDEX IF NOT EXISTS "solutions_hero_steps_parent_id_idx" ON "solutions_hero_steps" USING btree ("_parent_id");

        -- Hero steps version table
        CREATE TABLE IF NOT EXISTS "_solutions_v_version_hero_steps" (
            "_order"      integer      NOT NULL,
            "_parent_id"  integer      NOT NULL,
            "id"          serial       PRIMARY KEY NOT NULL,
            "label"       varchar,
            "active"      boolean      DEFAULT false,
            "_uuid"       varchar
        );
        ALTER TABLE "_solutions_v_version_hero_steps"
            ADD CONSTRAINT "_solutions_v_version_hero_steps_parent_id_fk"
            FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
        CREATE INDEX IF NOT EXISTS "_solutions_v_version_hero_steps_order_idx" ON "_solutions_v_version_hero_steps" USING btree ("_order");
        CREATE INDEX IF NOT EXISTS "_solutions_v_version_hero_steps_parent_id_idx" ON "_solutions_v_version_hero_steps" USING btree ("_parent_id");
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "_solutions_v_version_hero_steps";
        DROP TABLE IF EXISTS "solutions_hero_steps";

        ALTER TABLE "_solutions_v"
            DROP COLUMN IF EXISTS "version_hero_body",
            DROP COLUMN IF EXISTS "version_hero_headline_accent",
            DROP COLUMN IF EXISTS "version_hero_headline",
            DROP COLUMN IF EXISTS "version_hero_kicker";

        ALTER TABLE "solutions"
            DROP COLUMN IF EXISTS "hero_body",
            DROP COLUMN IF EXISTS "hero_headline_accent",
            DROP COLUMN IF EXISTS "hero_headline",
            DROP COLUMN IF EXISTS "hero_kicker";
    `)
}
