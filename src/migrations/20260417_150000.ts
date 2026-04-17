import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        CREATE TABLE "product_visuals_page_tables_features" (
            "_order"     integer NOT NULL,
            "_parent_id" integer NOT NULL,
            "id"         varchar PRIMARY KEY NOT NULL,
            "label"      varchar NOT NULL
        );

        ALTER TABLE "product_visuals_page_tables_features"
            ADD CONSTRAINT "product_visuals_page_tables_features_parent_id_fk"
            FOREIGN KEY ("_parent_id") REFERENCES "public"."product_visuals_page"("id")
            ON DELETE cascade ON UPDATE no action;

        CREATE INDEX "product_visuals_page_tables_features_order_idx"
            ON "product_visuals_page_tables_features" USING btree ("_order");

        CREATE INDEX "product_visuals_page_tables_features_parent_id_idx"
            ON "product_visuals_page_tables_features" USING btree ("_parent_id");
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        DROP TABLE IF EXISTS "product_visuals_page_tables_features";
    `)
}
