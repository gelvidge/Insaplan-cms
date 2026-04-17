import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "marketing_home_hero_trust_signals" ALTER COLUMN "icon" SET DATA TYPE varchar;
  DROP TYPE "public"."enum_marketing_home_hero_trust_signals_icon";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_marketing_home_hero_trust_signals_icon" AS ENUM('sparkles', 'template', 'cards', 'building');
  ALTER TABLE "marketing_home_hero_trust_signals" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_marketing_home_hero_trust_signals_icon" USING "icon"::"public"."enum_marketing_home_hero_trust_signals_icon";`)
}
