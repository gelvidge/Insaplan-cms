import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "solutions_challenges" (
            "_order"      integer NOT NULL,
            "_parent_id"  integer NOT NULL,
            "id"          varchar PRIMARY KEY NOT NULL,
            "title"       varchar,
            "description" varchar,
            "icon"        varchar
        );
        ALTER TABLE "solutions_challenges"
            ADD CONSTRAINT "solutions_challenges_parent_id_fk"
            FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
        CREATE INDEX "solutions_challenges_order_idx" ON "solutions_challenges" USING btree ("_order");
        CREATE INDEX "solutions_challenges_parent_id_idx" ON "solutions_challenges" USING btree ("_parent_id");

        CREATE TABLE IF NOT EXISTS "_solutions_v_version_challenges" (
            "_order"      integer NOT NULL,
            "_parent_id"  integer NOT NULL,
            "id"          serial PRIMARY KEY NOT NULL,
            "title"       varchar,
            "description" varchar,
            "icon"        varchar,
            "_uuid"       varchar
        );
        ALTER TABLE "_solutions_v_version_challenges"
            ADD CONSTRAINT "_solutions_v_version_challenges_parent_id_fk"
            FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
        CREATE INDEX "_solutions_v_version_challenges_order_idx" ON "_solutions_v_version_challenges" USING btree ("_order");
        CREATE INDEX "_solutions_v_version_challenges_parent_id_idx" ON "_solutions_v_version_challenges" USING btree ("_parent_id");
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "_solutions_v_version_challenges";
        DROP TABLE IF EXISTS "solutions_challenges";
    `)
}
