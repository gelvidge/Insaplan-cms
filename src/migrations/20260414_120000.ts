import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
  CREATE TYPE "public"."enum_marketing_pages_key_benefits_benefits_icon" AS ENUM(
    'clock', 'palette', 'adjustments', 'books', 'database', 'sparkles'
  );
  CREATE TYPE "public"."enum_marketing_pages_comparison_table_rows_values_value" AS ENUM(
    'true', 'false', 'limited'
  );

  CREATE TABLE "marketing_pages" (
    "id"                            serial PRIMARY KEY NOT NULL,
    "footer_tagline"                varchar DEFAULT 'Turn Insights into Plans. Strategic planning and reporting made simple.',
    "footer_copyright_name"         varchar DEFAULT 'Insaplan',
    "social_proof_heading"          varchar DEFAULT 'Trusted by Teams Worldwide',
    "social_proof_subheading"       varchar DEFAULT 'Join thousands of teams executing strategy with confidence',
    "social_proof_logos_label"      varchar DEFAULT 'TRUSTED BY LEADING ORGANIZATIONS',
    "key_benefits_heading"          varchar DEFAULT 'Key Benefits',
    "key_benefits_subheading"       varchar DEFAULT 'Everything you need to transform your planning process',
    "comparison_table_heading"      varchar DEFAULT 'Why Insaplan vs. Traditional Methods',
    "comparison_table_subheading"   varchar DEFAULT 'See how Insaplan compares to traditional planning tools',
    "solutions_section_heading"     varchar DEFAULT 'Solutions by Use Case',
    "solutions_section_subheading"  varchar DEFAULT 'Tailored for your industry and organizational needs',
    "updated_at"                    timestamp(3) with time zone,
    "created_at"                    timestamp(3) with time zone
  );

  CREATE TABLE "marketing_pages_footer_link_groups" (
    "_order"     integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id"         varchar PRIMARY KEY NOT NULL,
    "heading"    varchar
  );

  CREATE TABLE "marketing_pages_footer_link_groups_links" (
    "_order"     integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "id"         varchar PRIMARY KEY NOT NULL,
    "label"      varchar,
    "url"        varchar
  );

  CREATE TABLE "marketing_pages_social_proof_customer_logos" (
    "_order"       integer NOT NULL,
    "_parent_id"   integer NOT NULL,
    "id"           varchar PRIMARY KEY NOT NULL,
    "company_name" varchar,
    "logo_id"      integer
  );

  CREATE TABLE "marketing_pages_key_benefits_benefits" (
    "_order"      integer NOT NULL,
    "_parent_id"  integer NOT NULL,
    "id"          varchar PRIMARY KEY NOT NULL,
    "icon"        "enum_marketing_pages_key_benefits_benefits_icon",
    "title"       varchar,
    "description" varchar
  );

  CREATE TABLE "marketing_pages_comparison_table_columns" (
    "_order"     integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id"         varchar PRIMARY KEY NOT NULL,
    "label"      varchar
  );

  CREATE TABLE "marketing_pages_comparison_table_rows" (
    "_order"     integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id"         varchar PRIMARY KEY NOT NULL,
    "aspect"     varchar
  );

  CREATE TABLE "marketing_pages_comparison_table_rows_values" (
    "_order"     integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "id"         varchar PRIMARY KEY NOT NULL,
    "value"      "enum_marketing_pages_comparison_table_rows_values_value"
  );

  CREATE TABLE "marketing_pages_solutions_section_solutions" (
    "_order"     integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id"         varchar PRIMARY KEY NOT NULL,
    "tab_key"    varchar,
    "title"      varchar,
    "tagline"    varchar,
    "image_id"   integer
  );

  CREATE TABLE "marketing_pages_solutions_section_solutions_use_cases" (
    "_order"     integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "id"         varchar PRIMARY KEY NOT NULL,
    "label"      varchar
  );

  CREATE TABLE "marketing_pages_solutions_section_solutions_values" (
    "_order"     integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "id"         varchar PRIMARY KEY NOT NULL,
    "label"      varchar
  );

  ALTER TABLE "marketing_pages_footer_link_groups"
    ADD CONSTRAINT "marketing_pages_footer_link_groups_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "marketing_pages_footer_link_groups_links"
    ADD CONSTRAINT "marketing_pages_footer_link_groups_links_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages_footer_link_groups"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "marketing_pages_social_proof_customer_logos"
    ADD CONSTRAINT "marketing_pages_social_proof_customer_logos_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "marketing_pages_social_proof_customer_logos"
    ADD CONSTRAINT "marketing_pages_social_proof_customer_logos_logo_id_media_id_fk"
    FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;

  ALTER TABLE "marketing_pages_key_benefits_benefits"
    ADD CONSTRAINT "marketing_pages_key_benefits_benefits_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "marketing_pages_comparison_table_columns"
    ADD CONSTRAINT "marketing_pages_comparison_table_columns_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "marketing_pages_comparison_table_rows"
    ADD CONSTRAINT "marketing_pages_comparison_table_rows_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "marketing_pages_comparison_table_rows_values"
    ADD CONSTRAINT "marketing_pages_comparison_table_rows_values_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages_comparison_table_rows"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "marketing_pages_solutions_section_solutions"
    ADD CONSTRAINT "marketing_pages_solutions_section_solutions_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "marketing_pages_solutions_section_solutions"
    ADD CONSTRAINT "marketing_pages_solutions_section_solutions_image_id_media_id_fk"
    FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;

  ALTER TABLE "marketing_pages_solutions_section_solutions_use_cases"
    ADD CONSTRAINT "marketing_pages_solutions_section_solutions_use_cases_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages_solutions_section_solutions"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "marketing_pages_solutions_section_solutions_values"
    ADD CONSTRAINT "marketing_pages_solutions_section_solutions_values_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages_solutions_section_solutions"("id") ON DELETE cascade ON UPDATE no action;

  CREATE INDEX "marketing_pages_footer_link_groups_order_idx" ON "marketing_pages_footer_link_groups" USING btree ("_order");
  CREATE INDEX "marketing_pages_footer_link_groups_parent_id_idx" ON "marketing_pages_footer_link_groups" USING btree ("_parent_id");
  CREATE INDEX "marketing_pages_footer_link_groups_links_order_idx" ON "marketing_pages_footer_link_groups_links" USING btree ("_order");
  CREATE INDEX "marketing_pages_footer_link_groups_links_parent_id_idx" ON "marketing_pages_footer_link_groups_links" USING btree ("_parent_id");
  CREATE INDEX "marketing_pages_social_proof_customer_logos_order_idx" ON "marketing_pages_social_proof_customer_logos" USING btree ("_order");
  CREATE INDEX "marketing_pages_social_proof_customer_logos_parent_id_idx" ON "marketing_pages_social_proof_customer_logos" USING btree ("_parent_id");
  CREATE INDEX "marketing_pages_social_proof_customer_logos_logo_idx" ON "marketing_pages_social_proof_customer_logos" USING btree ("logo_id");
  CREATE INDEX "marketing_pages_key_benefits_benefits_order_idx" ON "marketing_pages_key_benefits_benefits" USING btree ("_order");
  CREATE INDEX "marketing_pages_key_benefits_benefits_parent_id_idx" ON "marketing_pages_key_benefits_benefits" USING btree ("_parent_id");
  CREATE INDEX "marketing_pages_comparison_table_columns_order_idx" ON "marketing_pages_comparison_table_columns" USING btree ("_order");
  CREATE INDEX "marketing_pages_comparison_table_columns_parent_id_idx" ON "marketing_pages_comparison_table_columns" USING btree ("_parent_id");
  CREATE INDEX "marketing_pages_comparison_table_rows_order_idx" ON "marketing_pages_comparison_table_rows" USING btree ("_order");
  CREATE INDEX "marketing_pages_comparison_table_rows_parent_id_idx" ON "marketing_pages_comparison_table_rows" USING btree ("_parent_id");
  CREATE INDEX "marketing_pages_comparison_table_rows_values_order_idx" ON "marketing_pages_comparison_table_rows_values" USING btree ("_order");
  CREATE INDEX "marketing_pages_comparison_table_rows_values_parent_id_idx" ON "marketing_pages_comparison_table_rows_values" USING btree ("_parent_id");
  CREATE INDEX "marketing_pages_solutions_section_solutions_order_idx" ON "marketing_pages_solutions_section_solutions" USING btree ("_order");
  CREATE INDEX "marketing_pages_solutions_section_solutions_parent_id_idx" ON "marketing_pages_solutions_section_solutions" USING btree ("_parent_id");
  CREATE INDEX "marketing_pages_solutions_section_solutions_image_idx" ON "marketing_pages_solutions_section_solutions" USING btree ("image_id");
  CREATE INDEX "marketing_pages_solutions_section_solutions_use_cases_order_idx" ON "marketing_pages_solutions_section_solutions_use_cases" USING btree ("_order");
  CREATE INDEX "marketing_pages_solutions_section_solutions_use_cases_parent_id_idx" ON "marketing_pages_solutions_section_solutions_use_cases" USING btree ("_parent_id");
  CREATE INDEX "marketing_pages_solutions_section_solutions_values_order_idx" ON "marketing_pages_solutions_section_solutions_values" USING btree ("_order");
  CREATE INDEX "marketing_pages_solutions_section_solutions_values_parent_id_idx" ON "marketing_pages_solutions_section_solutions_values" USING btree ("_parent_id");
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
  DROP TABLE IF EXISTS "marketing_pages_solutions_section_solutions_values" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_solutions_section_solutions_use_cases" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_solutions_section_solutions" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_comparison_table_rows_values" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_comparison_table_rows" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_comparison_table_columns" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_key_benefits_benefits" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_social_proof_customer_logos" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_footer_link_groups_links" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_footer_link_groups" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages" CASCADE;
  DROP TYPE IF EXISTS "public"."enum_marketing_pages_key_benefits_benefits_icon";
  DROP TYPE IF EXISTS "public"."enum_marketing_pages_comparison_table_rows_values_value";
    `)
}
