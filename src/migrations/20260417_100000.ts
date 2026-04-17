import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "product_overview_page_key_benefits_benefits_pills" (
            "_order"     integer      NOT NULL,
            "_parent_id" varchar      NOT NULL,
            "id"         varchar      PRIMARY KEY,
            "label"      varchar      NOT NULL
        );

        ALTER TABLE "product_overview_page_key_benefits_benefits_pills"
            ADD CONSTRAINT "product_overview_page_key_benefits_benefits_pills_parent_fk"
            FOREIGN KEY ("_parent_id")
            REFERENCES "product_overview_page_key_benefits_benefits" ("id")
            ON DELETE CASCADE;

        CREATE INDEX IF NOT EXISTS "product_overview_page_key_benefits_benefits_pills_order_idx"
            ON "product_overview_page_key_benefits_benefits_pills" USING btree ("_order");

        CREATE INDEX IF NOT EXISTS "product_overview_page_key_benefits_benefits_pills_parent_id_idx"
            ON "product_overview_page_key_benefits_benefits_pills" USING btree ("_parent_id");
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "product_overview_page_key_benefits_benefits_pills" CASCADE;
    `)
}
