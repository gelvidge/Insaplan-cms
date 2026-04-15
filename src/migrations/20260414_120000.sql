-- MarketingPages global tables
-- Covers: footer, social proof, key benefits, comparison table, solutions section
-- Generated for src/globals/MarketingPages.ts

SET search_path = public;

BEGIN;

-- Enum for key benefits icons
DO $$
BEGIN
  CREATE TYPE "public"."enum_marketing_pages_key_benefits_benefits_icon" AS ENUM (
    'clock', 'palette', 'adjustments', 'books', 'database', 'sparkles'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

-- Enum for comparison table row values
DO $$
BEGIN
  CREATE TYPE "public"."enum_marketing_pages_comparison_table_rows_values_value" AS ENUM (
    'true', 'false', 'limited'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

-- Root global row (one row only, singleton)
CREATE TABLE IF NOT EXISTS "marketing_pages" (
  "id"                                     serial PRIMARY KEY NOT NULL,
  "footer_tagline"                         varchar DEFAULT 'Turn Insights into Plans. Strategic planning and reporting made simple.',
  "footer_copyright_name"                  varchar DEFAULT 'Insaplan',
  "social_proof_heading"                   varchar DEFAULT 'Trusted by Teams Worldwide',
  "social_proof_subheading"                varchar DEFAULT 'Join thousands of teams executing strategy with confidence',
  "social_proof_logos_label"               varchar DEFAULT 'TRUSTED BY LEADING ORGANIZATIONS',
  "key_benefits_heading"                   varchar DEFAULT 'Key Benefits',
  "key_benefits_subheading"                varchar DEFAULT 'Everything you need to transform your planning process',
  "comparison_table_heading"               varchar DEFAULT 'Why Insaplan vs. Traditional Methods',
  "comparison_table_subheading"            varchar DEFAULT 'See how Insaplan compares to traditional planning tools',
  "solutions_section_heading"              varchar DEFAULT 'Solutions by Use Case',
  "solutions_section_subheading"           varchar DEFAULT 'Tailored for your industry and organizational needs',
  "updated_at"                             timestamp(3) with time zone,
  "created_at"                             timestamp(3) with time zone
);

-- Footer link groups
CREATE TABLE IF NOT EXISTS "marketing_pages_footer_link_groups" (
  "_order"      integer      NOT NULL,
  "_parent_id"  integer      NOT NULL,
  "id"          varchar      PRIMARY KEY NOT NULL,
  "heading"     varchar
);

-- Footer links (children of link groups)
CREATE TABLE IF NOT EXISTS "marketing_pages_footer_link_groups_links" (
  "_order"      integer  NOT NULL,
  "_parent_id"  varchar  NOT NULL,
  "id"          varchar  PRIMARY KEY NOT NULL,
  "label"       varchar,
  "url"         varchar
);

-- Social proof: customer logos
CREATE TABLE IF NOT EXISTS "marketing_pages_social_proof_customer_logos" (
  "_order"        integer  NOT NULL,
  "_parent_id"    integer  NOT NULL,
  "id"            varchar  PRIMARY KEY NOT NULL,
  "company_name"  varchar,
  "logo_id"       integer
);

-- Key benefits
CREATE TABLE IF NOT EXISTS "marketing_pages_key_benefits_benefits" (
  "_order"      integer  NOT NULL,
  "_parent_id"  integer  NOT NULL,
  "id"          varchar  PRIMARY KEY NOT NULL,
  "icon"        "enum_marketing_pages_key_benefits_benefits_icon",
  "title"       varchar,
  "description" varchar
);

-- Comparison table columns
CREATE TABLE IF NOT EXISTS "marketing_pages_comparison_table_columns" (
  "_order"      integer  NOT NULL,
  "_parent_id"  integer  NOT NULL,
  "id"          varchar  PRIMARY KEY NOT NULL,
  "label"       varchar
);

-- Comparison table rows
CREATE TABLE IF NOT EXISTS "marketing_pages_comparison_table_rows" (
  "_order"      integer  NOT NULL,
  "_parent_id"  integer  NOT NULL,
  "id"          varchar  PRIMARY KEY NOT NULL,
  "aspect"      varchar
);

-- Comparison table row values (children of rows)
CREATE TABLE IF NOT EXISTS "marketing_pages_comparison_table_rows_values" (
  "_order"      integer  NOT NULL,
  "_parent_id"  varchar  NOT NULL,
  "id"          varchar  PRIMARY KEY NOT NULL,
  "value"       "enum_marketing_pages_comparison_table_rows_values_value"
);

-- Solutions
CREATE TABLE IF NOT EXISTS "marketing_pages_solutions_section_solutions" (
  "_order"      integer  NOT NULL,
  "_parent_id"  integer  NOT NULL,
  "id"          varchar  PRIMARY KEY NOT NULL,
  "tab_key"     varchar,
  "title"       varchar,
  "tagline"     varchar,
  "image_id"    integer
);

-- Solution use cases
CREATE TABLE IF NOT EXISTS "marketing_pages_solutions_section_solutions_use_cases" (
  "_order"      integer  NOT NULL,
  "_parent_id"  varchar  NOT NULL,
  "id"          varchar  PRIMARY KEY NOT NULL,
  "label"       varchar
);

-- Solution value points
CREATE TABLE IF NOT EXISTS "marketing_pages_solutions_section_solutions_values" (
  "_order"      integer  NOT NULL,
  "_parent_id"  varchar  NOT NULL,
  "id"          varchar  PRIMARY KEY NOT NULL,
  "label"       varchar
);

-- Foreign keys
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
  FOREIGN KEY ("logo_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;

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
  FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;

ALTER TABLE "marketing_pages_solutions_section_solutions_use_cases"
  ADD CONSTRAINT "marketing_pages_solutions_section_solutions_use_cases_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages_solutions_section_solutions"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "marketing_pages_solutions_section_solutions_values"
  ADD CONSTRAINT "marketing_pages_solutions_section_solutions_values_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_pages_solutions_section_solutions"("id") ON DELETE cascade ON UPDATE no action;

-- Indexes
CREATE INDEX IF NOT EXISTS "marketing_pages_footer_link_groups_order_idx" ON "marketing_pages_footer_link_groups" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_pages_footer_link_groups_parent_id_idx" ON "marketing_pages_footer_link_groups" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_footer_link_groups_links_order_idx" ON "marketing_pages_footer_link_groups_links" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_pages_footer_link_groups_links_parent_id_idx" ON "marketing_pages_footer_link_groups_links" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_social_proof_customer_logos_order_idx" ON "marketing_pages_social_proof_customer_logos" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_pages_social_proof_customer_logos_parent_id_idx" ON "marketing_pages_social_proof_customer_logos" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_social_proof_customer_logos_logo_idx" ON "marketing_pages_social_proof_customer_logos" USING btree ("logo_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_key_benefits_benefits_order_idx" ON "marketing_pages_key_benefits_benefits" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_pages_key_benefits_benefits_parent_id_idx" ON "marketing_pages_key_benefits_benefits" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_comparison_table_columns_order_idx" ON "marketing_pages_comparison_table_columns" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_pages_comparison_table_columns_parent_id_idx" ON "marketing_pages_comparison_table_columns" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_comparison_table_rows_order_idx" ON "marketing_pages_comparison_table_rows" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_pages_comparison_table_rows_parent_id_idx" ON "marketing_pages_comparison_table_rows" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_comparison_table_rows_values_order_idx" ON "marketing_pages_comparison_table_rows_values" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_pages_comparison_table_rows_values_parent_id_idx" ON "marketing_pages_comparison_table_rows_values" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_solutions_section_solutions_order_idx" ON "marketing_pages_solutions_section_solutions" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_pages_solutions_section_solutions_parent_id_idx" ON "marketing_pages_solutions_section_solutions" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_solutions_section_solutions_image_idx" ON "marketing_pages_solutions_section_solutions" USING btree ("image_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_solutions_section_solutions_use_cases_order_idx" ON "marketing_pages_solutions_section_solutions_use_cases" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_pages_solutions_section_solutions_use_cases_parent_id_idx" ON "marketing_pages_solutions_section_solutions_use_cases" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_pages_solutions_section_solutions_values_order_idx" ON "marketing_pages_solutions_section_solutions_values" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_pages_solutions_section_solutions_values_parent_id_idx" ON "marketing_pages_solutions_section_solutions_values" USING btree ("_parent_id");

COMMIT;
