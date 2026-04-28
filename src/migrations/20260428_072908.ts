import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_blog_posts_status" ADD VALUE 'archived';
  DROP TABLE IF EXISTS "pages_texts" CASCADE;
  DROP TABLE IF EXISTS "_pages_v_texts" CASCADE;
  DROP TABLE IF EXISTS "_blog_posts_v" CASCADE;
  DROP TABLE IF EXISTS "_blog_posts_v_texts" CASCADE;
  DROP TABLE IF EXISTS "solutions_texts" CASCADE;
  DROP TABLE IF EXISTS "_solutions_v_texts" CASCADE;
  DROP TABLE IF EXISTS "marketing_home_texts" CASCADE;
  DROP TABLE IF EXISTS "product_overview_page_features_benefits" CASCADE;
  DROP TABLE IF EXISTS "product_overview_page_features" CASCADE;
  DROP TABLE IF EXISTS "product_overview_page_texts" CASCADE;
  DROP TABLE IF EXISTS "product_planning_page_texts" CASCADE;
  DROP TABLE IF EXISTS "product_reporting_page_texts" CASCADE;
  DROP TABLE IF EXISTS "product_visuals_page_texts" CASCADE;
  DROP TABLE IF EXISTS "solutions_page_solution_links" CASCADE;
  DROP TABLE IF EXISTS "solutions_page" CASCADE;
  DROP TABLE IF EXISTS "solutions_page_texts" CASCADE;
  DROP TABLE IF EXISTS "pricing_page_texts" CASCADE;
  DROP TABLE IF EXISTS "blog_page_texts" CASCADE;
  DROP TABLE IF EXISTS "faqs_page_texts" CASCADE;
  DROP TABLE IF EXISTS "support_page_texts" CASCADE;
  DROP TABLE IF EXISTS "contact_page_texts" CASCADE;
  DROP INDEX IF EXISTS "blog_posts__status_idx";
  ALTER TABLE "blog_posts" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "slug" SET NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "excerpt" SET NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "featured_image_id" SET NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "content" SET NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "author_id" SET NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "category" SET NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "status" SET NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "published_date" SET NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "site_name" DROP NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "site_description" DROP NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "logo_id" DROP NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "favicon_id" DROP NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "contact_email" DROP NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "contact_support_email" DROP NOT NULL;
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN IF NOT EXISTS "version_seo_keywords" varchar;
  ALTER TABLE "blog_posts" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "pricing_plans" ADD COLUMN IF NOT EXISTS "stripe_price_id_monthly" varchar;
  ALTER TABLE "pricing_plans" ADD COLUMN IF NOT EXISTS "stripe_price_id_annual" varchar;
  ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_seo_keywords" varchar;
  ALTER TABLE "marketing_home" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "product_overview_page" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "product_reporting_page" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "product_knowledgebase_page" ADD COLUMN IF NOT EXISTS "section3_kicker" varchar;
  ALTER TABLE "product_knowledgebase_page" ADD COLUMN IF NOT EXISTS "section3_heading" varchar;
  ALTER TABLE "product_knowledgebase_page" ADD COLUMN IF NOT EXISTS "section3_body" varchar;
  ALTER TABLE "product_knowledgebase_page" ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar;
  ALTER TABLE "product_knowledgebase_page" ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar;
  ALTER TABLE "product_knowledgebase_page" ADD COLUMN IF NOT EXISTS "seo_og_image_id" integer;
  ALTER TABLE "product_knowledgebase_page" ADD COLUMN IF NOT EXISTS "seo_canonical_url" varchar;
  ALTER TABLE "product_knowledgebase_page" ADD COLUMN IF NOT EXISTS "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "product_knowledgebase_page" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "pricing_page" ADD COLUMN IF NOT EXISTS "coming_soon" boolean DEFAULT true;
  ALTER TABLE "pricing_page" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "blog_page" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "faqs_page" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "support_page" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "contact_page" ADD COLUMN IF NOT EXISTS "seo_keywords" varchar;
  ALTER TABLE "product_knowledgebase_page" ADD CONSTRAINT "product_knowledgebase_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "product_knowledgebase_page_seo_seo_og_image_idx" ON "product_knowledgebase_page" USING btree ("seo_og_image_id");
  ALTER TABLE "blog_posts" DROP COLUMN IF EXISTS "_status";
  ALTER TABLE "solutions_key_features" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "solutions_key_features" DROP COLUMN IF EXISTS "icon";
  ALTER TABLE "solutions" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "solutions" DROP COLUMN IF EXISTS "subtitle";
  ALTER TABLE "solutions" DROP COLUMN IF EXISTS "hero_kicker";
  ALTER TABLE "solutions" DROP COLUMN IF EXISTS "overview";
  ALTER TABLE "solutions" DROP COLUMN IF EXISTS "cta_text";
  ALTER TABLE "solutions" DROP COLUMN IF EXISTS "cta_url";
  ALTER TABLE "_solutions_v_version_key_features" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "_solutions_v_version_key_features" DROP COLUMN IF EXISTS "icon";
  ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_title";
  ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_subtitle";
  ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_hero_kicker";
  ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_overview";
  ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_cta_text";
  ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_cta_url";
  ALTER TABLE "product_overview_page" DROP COLUMN IF EXISTS "features_heading";
  ALTER TABLE "product_overview_page" DROP COLUMN IF EXISTS "features_subheading";
  ALTER TABLE "footer" DROP COLUMN IF EXISTS "logo_text";
  ALTER TABLE "footer" DROP COLUMN IF EXISTS "nav_cta_label";
  ALTER TABLE "footer" DROP COLUMN IF EXISTS "nav_cta_url";
  ALTER TABLE "footer" DROP COLUMN IF EXISTS "tagline";
  DROP TYPE IF EXISTS "public"."enum__blog_posts_v_version_category";
  DROP TYPE IF EXISTS "public"."enum__blog_posts_v_version_status";
  DROP TYPE IF EXISTS "public"."enum_product_overview_page_features_icon";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum__blog_posts_v_version_category" AS ENUM('product-updates', 'company-news', 'best-practices', 'case-studies', 'industry-insights');
  CREATE TYPE "public"."enum__blog_posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_product_overview_page_features_icon" AS ENUM('chart-bar', 'palette', 'brain', 'adjustments', 'books', 'database');
  CREATE TABLE "pages_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_pages_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_blog_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_excerpt" varchar,
  	"version_featured_image_id" integer,
  	"version_content" jsonb,
  	"version_author_id" integer,
  	"version_category" "enum__blog_posts_v_version_category",
  	"version_status" "enum__blog_posts_v_version_status" DEFAULT 'draft',
  	"version_published_date" timestamp(3) with time zone,
  	"version_read_time" numeric,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_seo_og_image_id" integer,
  	"version_seo_canonical_url" varchar,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__blog_posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_blog_posts_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "solutions_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_solutions_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "marketing_home_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "product_overview_page_features_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_overview_page_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_product_overview_page_features_icon",
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "product_overview_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "product_planning_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "product_reporting_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "product_visuals_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "solutions_page_solution_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "solutions_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar,
  	"hero_subtitle" varchar,
  	"section_heading" varchar,
  	"section_subheading" varchar,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"seo_og_image_id" integer,
  	"seo_canonical_url" varchar,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "solutions_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pricing_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "blog_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "faqs_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "support_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "contact_page_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  ALTER TABLE "product_knowledgebase_page" DROP CONSTRAINT "product_knowledgebase_page_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "blog_posts" ALTER COLUMN "status" SET DATA TYPE text;
  ALTER TABLE "blog_posts" ALTER COLUMN "status" SET DEFAULT 'draft'::text;
  ALTER TABLE "blog_posts" ALTER COLUMN "_status" SET DATA TYPE text;
  ALTER TABLE "blog_posts" ALTER COLUMN "_status" SET DEFAULT 'draft'::text;
  DROP TYPE "public"."enum_blog_posts_status";
  CREATE TYPE "public"."enum_blog_posts_status" AS ENUM('draft', 'published');
  ALTER TABLE "blog_posts" ALTER COLUMN "status" SET DEFAULT 'draft'::"public"."enum_blog_posts_status";
  ALTER TABLE "blog_posts" ALTER COLUMN "status" SET DATA TYPE "public"."enum_blog_posts_status" USING "status"::"public"."enum_blog_posts_status";
  ALTER TABLE "blog_posts" ALTER COLUMN "_status" SET DEFAULT 'draft'::"public"."enum_blog_posts_status";
  ALTER TABLE "blog_posts" ALTER COLUMN "_status" SET DATA TYPE "public"."enum_blog_posts_status" USING "_status"::"public"."enum_blog_posts_status";
  DROP INDEX IF EXISTS "product_knowledgebase_page_seo_seo_og_image_idx";
  ALTER TABLE "blog_posts" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "slug" DROP NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "excerpt" DROP NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "featured_image_id" DROP NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "content" DROP NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "author_id" DROP NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "category" DROP NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "status" DROP NOT NULL;
  ALTER TABLE "blog_posts" ALTER COLUMN "published_date" DROP NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "site_name" SET NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "site_description" SET NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "logo_id" SET NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "favicon_id" SET NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "contact_email" SET NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "contact_support_email" SET NOT NULL;
  ALTER TABLE "blog_posts" ADD COLUMN IF NOT EXISTS "_status" "enum_blog_posts_status" DEFAULT 'draft';
  ALTER TABLE "solutions_key_features" ADD COLUMN IF NOT EXISTS "description" varchar;
  ALTER TABLE "solutions_key_features" ADD COLUMN IF NOT EXISTS "icon" varchar;
  ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "title" varchar;
  ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "subtitle" varchar;
  ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "hero_kicker" varchar;
  ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "overview" jsonb;
  ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "cta_text" varchar;
  ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "cta_url" varchar;
  ALTER TABLE "_solutions_v_version_key_features" ADD COLUMN IF NOT EXISTS "description" varchar;
  ALTER TABLE "_solutions_v_version_key_features" ADD COLUMN IF NOT EXISTS "icon" varchar;
  ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_title" varchar;
  ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_subtitle" varchar;
  ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_hero_kicker" varchar;
  ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_overview" jsonb;
  ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_cta_text" varchar;
  ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_cta_url" varchar;
  ALTER TABLE "product_overview_page" ADD COLUMN IF NOT EXISTS "features_heading" varchar;
  ALTER TABLE "product_overview_page" ADD COLUMN IF NOT EXISTS "features_subheading" varchar;
  ALTER TABLE "footer" ADD COLUMN IF NOT EXISTS "logo_text" varchar;
  ALTER TABLE "footer" ADD COLUMN IF NOT EXISTS "nav_cta_label" varchar;
  ALTER TABLE "footer" ADD COLUMN IF NOT EXISTS "nav_cta_url" varchar;
  ALTER TABLE "footer" ADD COLUMN IF NOT EXISTS "tagline" varchar;
  ALTER TABLE "pages_texts" ADD CONSTRAINT "pages_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_texts" ADD CONSTRAINT "_pages_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_posts_v" ADD CONSTRAINT "_blog_posts_v_parent_id_blog_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog_posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_posts_v" ADD CONSTRAINT "_blog_posts_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_posts_v" ADD CONSTRAINT "_blog_posts_v_version_author_id_users_id_fk" FOREIGN KEY ("version_author_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_posts_v" ADD CONSTRAINT "_blog_posts_v_version_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_posts_v_texts" ADD CONSTRAINT "_blog_posts_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_blog_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_texts" ADD CONSTRAINT "solutions_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_texts" ADD CONSTRAINT "_solutions_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "marketing_home_texts" ADD CONSTRAINT "marketing_home_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."marketing_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_overview_page_features_benefits" ADD CONSTRAINT "product_overview_page_features_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_overview_page_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_overview_page_features" ADD CONSTRAINT "product_overview_page_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_overview_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_overview_page_texts" ADD CONSTRAINT "product_overview_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."product_overview_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_planning_page_texts" ADD CONSTRAINT "product_planning_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_reporting_page_texts" ADD CONSTRAINT "product_reporting_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_visuals_page_texts" ADD CONSTRAINT "product_visuals_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."product_visuals_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_page_solution_links" ADD CONSTRAINT "solutions_page_solution_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_page" ADD CONSTRAINT "solutions_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "solutions_page_texts" ADD CONSTRAINT "solutions_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pricing_page_texts" ADD CONSTRAINT "pricing_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pricing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_page_texts" ADD CONSTRAINT "blog_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_page_texts" ADD CONSTRAINT "faqs_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."faqs_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_page_texts" ADD CONSTRAINT "support_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."support_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_texts" ADD CONSTRAINT "contact_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_texts_order_parent" ON "pages_texts" USING btree ("order","parent_id");
  CREATE INDEX "_pages_v_texts_order_parent" ON "_pages_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "_blog_posts_v_parent_idx" ON "_blog_posts_v" USING btree ("parent_id");
  CREATE INDEX "_blog_posts_v_version_version_slug_idx" ON "_blog_posts_v" USING btree ("version_slug");
  CREATE INDEX "_blog_posts_v_version_version_featured_image_idx" ON "_blog_posts_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_blog_posts_v_version_version_author_idx" ON "_blog_posts_v" USING btree ("version_author_id");
  CREATE INDEX "_blog_posts_v_version_seo_version_seo_og_image_idx" ON "_blog_posts_v" USING btree ("version_seo_og_image_id");
  CREATE INDEX "_blog_posts_v_version_version_updated_at_idx" ON "_blog_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_blog_posts_v_version_version_created_at_idx" ON "_blog_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_blog_posts_v_version_version__status_idx" ON "_blog_posts_v" USING btree ("version__status");
  CREATE INDEX "_blog_posts_v_created_at_idx" ON "_blog_posts_v" USING btree ("created_at");
  CREATE INDEX "_blog_posts_v_updated_at_idx" ON "_blog_posts_v" USING btree ("updated_at");
  CREATE INDEX "_blog_posts_v_latest_idx" ON "_blog_posts_v" USING btree ("latest");
  CREATE INDEX "_blog_posts_v_texts_order_parent" ON "_blog_posts_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "solutions_texts_order_parent" ON "solutions_texts" USING btree ("order","parent_id");
  CREATE INDEX "_solutions_v_texts_order_parent" ON "_solutions_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "marketing_home_texts_order_parent" ON "marketing_home_texts" USING btree ("order","parent_id");
  CREATE INDEX "product_overview_page_features_benefits_order_idx" ON "product_overview_page_features_benefits" USING btree ("_order");
  CREATE INDEX "product_overview_page_features_benefits_parent_id_idx" ON "product_overview_page_features_benefits" USING btree ("_parent_id");
  CREATE INDEX "product_overview_page_features_order_idx" ON "product_overview_page_features" USING btree ("_order");
  CREATE INDEX "product_overview_page_features_parent_id_idx" ON "product_overview_page_features" USING btree ("_parent_id");
  CREATE INDEX "product_overview_page_texts_order_parent" ON "product_overview_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "product_planning_page_texts_order_parent" ON "product_planning_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "product_reporting_page_texts_order_parent" ON "product_reporting_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "product_visuals_page_texts_order_parent" ON "product_visuals_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "solutions_page_solution_links_order_idx" ON "solutions_page_solution_links" USING btree ("_order");
  CREATE INDEX "solutions_page_solution_links_parent_id_idx" ON "solutions_page_solution_links" USING btree ("_parent_id");
  CREATE INDEX "solutions_page_seo_seo_og_image_idx" ON "solutions_page" USING btree ("seo_og_image_id");
  CREATE INDEX "solutions_page_texts_order_parent" ON "solutions_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "pricing_page_texts_order_parent" ON "pricing_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "blog_page_texts_order_parent" ON "blog_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "faqs_page_texts_order_parent" ON "faqs_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "support_page_texts_order_parent" ON "support_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "contact_page_texts_order_parent" ON "contact_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "blog_posts__status_idx" ON "blog_posts" USING btree ("_status");
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_seo_keywords";
  ALTER TABLE "blog_posts" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "pricing_plans" DROP COLUMN IF EXISTS "stripe_price_id_monthly";
  ALTER TABLE "pricing_plans" DROP COLUMN IF EXISTS "stripe_price_id_annual";
  ALTER TABLE "solutions" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_seo_keywords";
  ALTER TABLE "marketing_home" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "product_overview_page" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "product_planning_page" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "product_reporting_page" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "product_visuals_page" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "product_knowledgebase_page" DROP COLUMN IF EXISTS "section3_kicker";
  ALTER TABLE "product_knowledgebase_page" DROP COLUMN IF EXISTS "section3_heading";
  ALTER TABLE "product_knowledgebase_page" DROP COLUMN IF EXISTS "section3_body";
  ALTER TABLE "product_knowledgebase_page" DROP COLUMN IF EXISTS "seo_meta_title";
  ALTER TABLE "product_knowledgebase_page" DROP COLUMN IF EXISTS "seo_meta_description";
  ALTER TABLE "product_knowledgebase_page" DROP COLUMN IF EXISTS "seo_og_image_id";
  ALTER TABLE "product_knowledgebase_page" DROP COLUMN IF EXISTS "seo_canonical_url";
  ALTER TABLE "product_knowledgebase_page" DROP COLUMN IF EXISTS "seo_no_index";
  ALTER TABLE "product_knowledgebase_page" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "pricing_page" DROP COLUMN IF EXISTS "coming_soon";
  ALTER TABLE "pricing_page" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "blog_page" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "faqs_page" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "support_page" DROP COLUMN IF EXISTS "seo_keywords";
  ALTER TABLE "contact_page" DROP COLUMN IF EXISTS "seo_keywords";`)
}
