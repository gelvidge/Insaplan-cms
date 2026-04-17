import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "marketing_home_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
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
  
  ALTER TABLE "marketing_home" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "marketing_home" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "marketing_home" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "marketing_home" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "marketing_home" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "product_overview_page" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "product_overview_page" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "product_overview_page" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "product_overview_page" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "product_overview_page" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "product_planning_page" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "product_planning_page" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "product_reporting_page" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "product_reporting_page" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "product_reporting_page" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "product_reporting_page" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "product_reporting_page" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "product_visuals_page" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "product_visuals_page" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "solutions_page" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "solutions_page" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "solutions_page" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "solutions_page" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "solutions_page" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "pricing_page" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "pricing_page" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "pricing_page" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "pricing_page" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "pricing_page" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "blog_page" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "blog_page" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "blog_page" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "blog_page" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "blog_page" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "faqs_page" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "faqs_page" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "faqs_page" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "faqs_page" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "faqs_page" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "support_page" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "support_page" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "support_page" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "support_page" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "support_page" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "contact_page" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "contact_page" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "contact_page" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "contact_page" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "contact_page" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "marketing_home_texts" ADD CONSTRAINT "marketing_home_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."marketing_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_overview_page_texts" ADD CONSTRAINT "product_overview_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."product_overview_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_planning_page_texts" ADD CONSTRAINT "product_planning_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_reporting_page_texts" ADD CONSTRAINT "product_reporting_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_visuals_page_texts" ADD CONSTRAINT "product_visuals_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."product_visuals_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_page_texts" ADD CONSTRAINT "solutions_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pricing_page_texts" ADD CONSTRAINT "pricing_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pricing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_page_texts" ADD CONSTRAINT "blog_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_page_texts" ADD CONSTRAINT "faqs_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."faqs_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_page_texts" ADD CONSTRAINT "support_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."support_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_texts" ADD CONSTRAINT "contact_page_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "marketing_home_texts_order_parent" ON "marketing_home_texts" USING btree ("order","parent_id");
  CREATE INDEX "product_overview_page_texts_order_parent" ON "product_overview_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "product_planning_page_texts_order_parent" ON "product_planning_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "product_reporting_page_texts_order_parent" ON "product_reporting_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "product_visuals_page_texts_order_parent" ON "product_visuals_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "solutions_page_texts_order_parent" ON "solutions_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "pricing_page_texts_order_parent" ON "pricing_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "blog_page_texts_order_parent" ON "blog_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "faqs_page_texts_order_parent" ON "faqs_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "support_page_texts_order_parent" ON "support_page_texts" USING btree ("order","parent_id");
  CREATE INDEX "contact_page_texts_order_parent" ON "contact_page_texts" USING btree ("order","parent_id");
  ALTER TABLE "marketing_home" ADD CONSTRAINT "marketing_home_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_overview_page" ADD CONSTRAINT "product_overview_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_planning_page" ADD CONSTRAINT "product_planning_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_reporting_page" ADD CONSTRAINT "product_reporting_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_visuals_page" ADD CONSTRAINT "product_visuals_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "solutions_page" ADD CONSTRAINT "solutions_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pricing_page" ADD CONSTRAINT "pricing_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_page" ADD CONSTRAINT "blog_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "faqs_page" ADD CONSTRAINT "faqs_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "support_page" ADD CONSTRAINT "support_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_page" ADD CONSTRAINT "contact_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "marketing_home_seo_seo_og_image_idx" ON "marketing_home" USING btree ("seo_og_image_id");
  CREATE INDEX "product_overview_page_seo_seo_og_image_idx" ON "product_overview_page" USING btree ("seo_og_image_id");
  CREATE INDEX "product_planning_page_seo_seo_og_image_idx" ON "product_planning_page" USING btree ("seo_og_image_id");
  CREATE INDEX "product_reporting_page_seo_seo_og_image_idx" ON "product_reporting_page" USING btree ("seo_og_image_id");
  CREATE INDEX "product_visuals_page_seo_seo_og_image_idx" ON "product_visuals_page" USING btree ("seo_og_image_id");
  CREATE INDEX "solutions_page_seo_seo_og_image_idx" ON "solutions_page" USING btree ("seo_og_image_id");
  CREATE INDEX "pricing_page_seo_seo_og_image_idx" ON "pricing_page" USING btree ("seo_og_image_id");
  CREATE INDEX "blog_page_seo_seo_og_image_idx" ON "blog_page" USING btree ("seo_og_image_id");
  CREATE INDEX "faqs_page_seo_seo_og_image_idx" ON "faqs_page" USING btree ("seo_og_image_id");
  CREATE INDEX "support_page_seo_seo_og_image_idx" ON "support_page" USING btree ("seo_og_image_id");
  CREATE INDEX "contact_page_seo_seo_og_image_idx" ON "contact_page" USING btree ("seo_og_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "marketing_home_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_overview_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_planning_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_reporting_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_visuals_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pricing_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blog_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faqs_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "support_page_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_page_texts" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "marketing_home_texts" CASCADE;
  DROP TABLE "product_overview_page_texts" CASCADE;
  DROP TABLE "product_planning_page_texts" CASCADE;
  DROP TABLE "product_reporting_page_texts" CASCADE;
  DROP TABLE "product_visuals_page_texts" CASCADE;
  DROP TABLE "solutions_page_texts" CASCADE;
  DROP TABLE "pricing_page_texts" CASCADE;
  DROP TABLE "blog_page_texts" CASCADE;
  DROP TABLE "faqs_page_texts" CASCADE;
  DROP TABLE "support_page_texts" CASCADE;
  DROP TABLE "contact_page_texts" CASCADE;
  ALTER TABLE "marketing_home" DROP CONSTRAINT "marketing_home_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "product_overview_page" DROP CONSTRAINT "product_overview_page_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "product_planning_page" DROP CONSTRAINT "product_planning_page_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "product_reporting_page" DROP CONSTRAINT "product_reporting_page_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "product_visuals_page" DROP CONSTRAINT "product_visuals_page_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "solutions_page" DROP CONSTRAINT "solutions_page_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "pricing_page" DROP CONSTRAINT "pricing_page_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "blog_page" DROP CONSTRAINT "blog_page_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "faqs_page" DROP CONSTRAINT "faqs_page_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "support_page" DROP CONSTRAINT "support_page_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "contact_page" DROP CONSTRAINT "contact_page_seo_og_image_id_media_id_fk";
  
  DROP INDEX "marketing_home_seo_seo_og_image_idx";
  DROP INDEX "product_overview_page_seo_seo_og_image_idx";
  DROP INDEX "product_planning_page_seo_seo_og_image_idx";
  DROP INDEX "product_reporting_page_seo_seo_og_image_idx";
  DROP INDEX "product_visuals_page_seo_seo_og_image_idx";
  DROP INDEX "solutions_page_seo_seo_og_image_idx";
  DROP INDEX "pricing_page_seo_seo_og_image_idx";
  DROP INDEX "blog_page_seo_seo_og_image_idx";
  DROP INDEX "faqs_page_seo_seo_og_image_idx";
  DROP INDEX "support_page_seo_seo_og_image_idx";
  DROP INDEX "contact_page_seo_seo_og_image_idx";
  ALTER TABLE "marketing_home" DROP COLUMN "seo_meta_title";
  ALTER TABLE "marketing_home" DROP COLUMN "seo_meta_description";
  ALTER TABLE "marketing_home" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "marketing_home" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "marketing_home" DROP COLUMN "seo_no_index";
  ALTER TABLE "product_overview_page" DROP COLUMN "seo_meta_title";
  ALTER TABLE "product_overview_page" DROP COLUMN "seo_meta_description";
  ALTER TABLE "product_overview_page" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "product_overview_page" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "product_overview_page" DROP COLUMN "seo_no_index";
  ALTER TABLE "product_planning_page" DROP COLUMN "seo_meta_title";
  ALTER TABLE "product_planning_page" DROP COLUMN "seo_meta_description";
  ALTER TABLE "product_planning_page" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "product_planning_page" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "product_planning_page" DROP COLUMN "seo_no_index";
  ALTER TABLE "product_reporting_page" DROP COLUMN "seo_meta_title";
  ALTER TABLE "product_reporting_page" DROP COLUMN "seo_meta_description";
  ALTER TABLE "product_reporting_page" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "product_reporting_page" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "product_reporting_page" DROP COLUMN "seo_no_index";
  ALTER TABLE "product_visuals_page" DROP COLUMN "seo_meta_title";
  ALTER TABLE "product_visuals_page" DROP COLUMN "seo_meta_description";
  ALTER TABLE "product_visuals_page" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "product_visuals_page" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "product_visuals_page" DROP COLUMN "seo_no_index";
  ALTER TABLE "solutions_page" DROP COLUMN "seo_meta_title";
  ALTER TABLE "solutions_page" DROP COLUMN "seo_meta_description";
  ALTER TABLE "solutions_page" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "solutions_page" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "solutions_page" DROP COLUMN "seo_no_index";
  ALTER TABLE "pricing_page" DROP COLUMN "seo_meta_title";
  ALTER TABLE "pricing_page" DROP COLUMN "seo_meta_description";
  ALTER TABLE "pricing_page" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "pricing_page" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "pricing_page" DROP COLUMN "seo_no_index";
  ALTER TABLE "blog_page" DROP COLUMN "seo_meta_title";
  ALTER TABLE "blog_page" DROP COLUMN "seo_meta_description";
  ALTER TABLE "blog_page" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "blog_page" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "blog_page" DROP COLUMN "seo_no_index";
  ALTER TABLE "faqs_page" DROP COLUMN "seo_meta_title";
  ALTER TABLE "faqs_page" DROP COLUMN "seo_meta_description";
  ALTER TABLE "faqs_page" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "faqs_page" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "faqs_page" DROP COLUMN "seo_no_index";
  ALTER TABLE "support_page" DROP COLUMN "seo_meta_title";
  ALTER TABLE "support_page" DROP COLUMN "seo_meta_description";
  ALTER TABLE "support_page" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "support_page" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "support_page" DROP COLUMN "seo_no_index";
  ALTER TABLE "contact_page" DROP COLUMN "seo_meta_title";
  ALTER TABLE "contact_page" DROP COLUMN "seo_meta_description";
  ALTER TABLE "contact_page" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "contact_page" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "contact_page" DROP COLUMN "seo_no_index";`)
}
