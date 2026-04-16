import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_product_planning_page_pain_points_icon" AS ENUM('spreadsheet', 'timeline', 'users', 'puzzle', 'clock', 'chart');
  CREATE TYPE "public"."enum_product_planning_page_tracking_views_icon" AS ENUM('timeline', 'columns', 'route');
  CREATE TYPE "public"."enum_product_reporting_page_pain_points_icon" AS ENUM('presentation', 'chart', 'target', 'clock', 'spreadsheet', 'timeline');
  CREATE TYPE "public"."enum_product_reporting_page_dashboards_metrics_tone" AS ENUM('purple', 'amber', 'green');
  CREATE TYPE "public"."enum_product_visuals_page_pain_points_icon" AS ENUM('presentation', 'moodsad', 'chart', 'dashboard', 'spreadsheet', 'timeline');
  CREATE TABLE "product_planning_page_pain_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_product_planning_page_pain_points_icon" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"color" varchar NOT NULL
  );
  
  CREATE TABLE "product_planning_page_templates_pills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_planning_page_metrics_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_planning_page_metrics_pills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_planning_page_tracking_views" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon" "enum_product_planning_page_tracking_views_icon"
  );
  
  CREATE TABLE "product_planning_page_linked_planning_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_planning_page_ai_planning_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_planning_page_ai_planning_source_pills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_reporting_page_pain_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_product_reporting_page_pain_points_icon" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"color" varchar NOT NULL
  );
  
  CREATE TABLE "product_reporting_page_dashboards_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_reporting_page_dashboards_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"tone" "enum_product_reporting_page_dashboards_metrics_tone"
  );
  
  CREATE TABLE "product_reporting_page_dashboards_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_reporting_page_reporting_outputs_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_reporting_page_reporting_outputs_formats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_reporting_page_reporting_outputs_template_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"width" varchar NOT NULL
  );
  
  CREATE TABLE "product_visuals_page_pain_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_product_visuals_page_pain_points_icon" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"color" varchar NOT NULL
  );
  
  CREATE TABLE "product_visuals_page_infographics_capabilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_visuals_page_charting_capabilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_visuals_page_tables_capabilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_visuals_page_plan_views_capabilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_knowledgebase_page_capture_insight_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_knowledgebase_page_auto_capture_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "product_knowledgebase_page_ai_query_qa_examples" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "product_knowledgebase_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar,
  	"hero_accent" varchar,
  	"hero_subtitle" varchar,
  	"capture_kicker" varchar,
  	"capture_heading" varchar,
  	"capture_body" varchar,
  	"capture_tag_etc" varchar,
  	"auto_capture_kicker" varchar,
  	"auto_capture_heading" varchar,
  	"auto_capture_body" varchar,
  	"auto_capture_video_label" varchar,
  	"ai_query_kicker" varchar,
  	"ai_query_heading" varchar,
  	"ai_query_body" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "knowledge_base" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "knowledge_base_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "knowledge_base_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_knowledge_base_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_knowledge_base_v_texts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_knowledge_base_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faqs_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "changelog_changes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "changelog" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_knowledge_base_page_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_knowledge_base_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_planning_page_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_visuals_page_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_reporting_page_features" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "knowledge_base" CASCADE;
  DROP TABLE "knowledge_base_texts" CASCADE;
  DROP TABLE "knowledge_base_rels" CASCADE;
  DROP TABLE "_knowledge_base_v" CASCADE;
  DROP TABLE "_knowledge_base_v_texts" CASCADE;
  DROP TABLE "_knowledge_base_v_rels" CASCADE;
  DROP TABLE "faqs_rels" CASCADE;
  DROP TABLE "changelog_changes" CASCADE;
  DROP TABLE "changelog" CASCADE;
  DROP TABLE "product_knowledge_base_page_features" CASCADE;
  DROP TABLE "product_knowledge_base_page" CASCADE;
  DROP TABLE "product_planning_page_features" CASCADE;
  DROP TABLE "product_visuals_page_features" CASCADE;
  DROP TABLE "product_reporting_page_features" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_knowledge_base_fk";

  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_changelog_fk";

  DROP INDEX IF EXISTS "payload_locked_documents_rels_knowledge_base_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_changelog_id_idx";
  ALTER TABLE "pricing_plans" ALTER COLUMN "cta_text" DROP DEFAULT;
  ALTER TABLE "solutions" ALTER COLUMN "cta_text" DROP DEFAULT;
  ALTER TABLE "_solutions_v" ALTER COLUMN "version_cta_text" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "hero_eyebrow" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "hero_badge" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "hero_headline" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "core_features_kicker" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "core_features_heading" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "core_features_description" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "social_proof_heading" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "social_proof_subheading" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "social_proof_logos_label" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "cta_title" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "cta_description" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "cta_email_placeholder" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "cta_button_label" DROP DEFAULT;
  ALTER TABLE "marketing_home" ALTER COLUMN "cta_note" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "how_it_works_heading" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "how_it_works_subheading" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "key_benefits_heading" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "key_benefits_subheading" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "features_heading" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "features_subheading" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "problems_heading" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "problems_subheading" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "comparison_table_heading" DROP DEFAULT;
  ALTER TABLE "product_overview_page" ALTER COLUMN "comparison_table_subheading" DROP DEFAULT;
  ALTER TABLE "product_planning_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "product_planning_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "product_visuals_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "product_visuals_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "product_reporting_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "product_reporting_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "solutions_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "solutions_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "solutions_page" ALTER COLUMN "section_heading" DROP DEFAULT;
  ALTER TABLE "solutions_page" ALTER COLUMN "section_subheading" DROP DEFAULT;
  ALTER TABLE "pricing_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "pricing_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "pricing_page" ALTER COLUMN "monthly_label" DROP DEFAULT;
  ALTER TABLE "pricing_page" ALTER COLUMN "annual_label" DROP DEFAULT;
  ALTER TABLE "pricing_page" ALTER COLUMN "annual_discount_badge" DROP DEFAULT;
  ALTER TABLE "pricing_page" ALTER COLUMN "custom_price_label" DROP DEFAULT;
  ALTER TABLE "pricing_page" ALTER COLUMN "per_month_suffix" DROP DEFAULT;
  ALTER TABLE "pricing_page" ALTER COLUMN "popular_badge_label" DROP DEFAULT;
  ALTER TABLE "pricing_page" ALTER COLUMN "billed_annually_label" DROP DEFAULT;
  ALTER TABLE "blog_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "blog_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "blog_page" ALTER COLUMN "read_more_label" DROP DEFAULT;
  ALTER TABLE "blog_page" ALTER COLUMN "empty_state_heading" DROP DEFAULT;
  ALTER TABLE "blog_page" ALTER COLUMN "empty_state_message" DROP DEFAULT;
  ALTER TABLE "faqs_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "faqs_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "faqs_page" ALTER COLUMN "empty_state_message" DROP DEFAULT;
  ALTER TABLE "support_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "support_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "support_page" ALTER COLUMN "coming_soon_message" DROP DEFAULT;
  ALTER TABLE "support_page" ALTER COLUMN "contact_heading" DROP DEFAULT;
  ALTER TABLE "support_page" ALTER COLUMN "contact_email" DROP DEFAULT;
  ALTER TABLE "knowledge_base_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "knowledge_base_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "knowledge_base_page" ALTER COLUMN "coming_soon_heading" DROP DEFAULT;
  ALTER TABLE "knowledge_base_page" ALTER COLUMN "coming_soon_message" DROP DEFAULT;
  ALTER TABLE "contact_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "contact_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "contact_page" ALTER COLUMN "name_placeholder" DROP DEFAULT;
  ALTER TABLE "contact_page" ALTER COLUMN "email_placeholder" DROP DEFAULT;
  ALTER TABLE "contact_page" ALTER COLUMN "company_placeholder" DROP DEFAULT;
  ALTER TABLE "contact_page" ALTER COLUMN "message_placeholder" DROP DEFAULT;
  ALTER TABLE "contact_page" ALTER COLUMN "submit_button_label" DROP DEFAULT;
  ALTER TABLE "contact_page" ALTER COLUMN "success_message" DROP DEFAULT;
  ALTER TABLE "contact_page" ALTER COLUMN "response_note" DROP DEFAULT;
  ALTER TABLE "legal_page" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "legal_page" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "legal_page" ALTER COLUMN "terms_tab_label" DROP DEFAULT;
  ALTER TABLE "legal_page" ALTER COLUMN "privacy_tab_label" DROP DEFAULT;
  ALTER TABLE "legal_page" ALTER COLUMN "data_security_tab_label" DROP DEFAULT;
  ALTER TABLE "legal_page" ALTER COLUMN "terms_coming_soon" DROP DEFAULT;
  ALTER TABLE "legal_page" ALTER COLUMN "privacy_coming_soon" DROP DEFAULT;
  ALTER TABLE "legal_page" ALTER COLUMN "data_security_coming_soon" DROP DEFAULT;
  ALTER TABLE "footer" ALTER COLUMN "logo_text" DROP DEFAULT;
  ALTER TABLE "footer" ALTER COLUMN "nav_cta_label" DROP DEFAULT;
  ALTER TABLE "footer" ALTER COLUMN "nav_cta_url" DROP DEFAULT;
  ALTER TABLE "footer" ALTER COLUMN "tagline" DROP DEFAULT;
  ALTER TABLE "footer" ALTER COLUMN "copyright_name" DROP DEFAULT;
  ALTER TABLE "footer" ALTER COLUMN "copyright_suffix" DROP DEFAULT;
  ALTER TABLE "site_metadata" ALTER COLUMN "default_title" DROP DEFAULT;
  ALTER TABLE "site_metadata" ALTER COLUMN "default_description" DROP DEFAULT;
  ALTER TABLE "site_settings" ALTER COLUMN "site_name" DROP DEFAULT;
  ALTER TABLE "site_settings" ALTER COLUMN "maintenance_enabled" DROP DEFAULT;
  ALTER TABLE "product_planning_page" ADD COLUMN "templates_kicker" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "templates_heading" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "templates_body" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "templates_stat1_value" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "templates_stat1_label" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "templates_stat2_value" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "templates_stat2_label" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "templates_callout" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "metrics_kicker" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "metrics_heading" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "metrics_body" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "metrics_badge_label" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "metrics_mini_stat" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "tracking_kicker" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "tracking_heading" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "tracking_body" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "linked_planning_kicker" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "linked_planning_heading" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "linked_planning_body" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "ai_planning_kicker" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "ai_planning_heading" varchar;
  ALTER TABLE "product_planning_page" ADD COLUMN "ai_planning_body" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "infographics_kicker" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "infographics_heading" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "infographics_body" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "charting_kicker" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "charting_heading" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "charting_body" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "tables_kicker" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "tables_heading" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "tables_body" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "plan_views_kicker" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "plan_views_heading" varchar;
  ALTER TABLE "product_visuals_page" ADD COLUMN "plan_views_body" varchar;
  ALTER TABLE "product_reporting_page" ADD COLUMN "dashboards_kicker" varchar;
  ALTER TABLE "product_reporting_page" ADD COLUMN "dashboards_heading" varchar;
  ALTER TABLE "product_reporting_page" ADD COLUMN "dashboards_body" varchar;
  ALTER TABLE "product_reporting_page" ADD COLUMN "reporting_outputs_kicker" varchar;
  ALTER TABLE "product_reporting_page" ADD COLUMN "reporting_outputs_heading" varchar;
  ALTER TABLE "product_reporting_page" ADD COLUMN "reporting_outputs_body" varchar;
  ALTER TABLE "product_planning_page_pain_points" ADD CONSTRAINT "product_planning_page_pain_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_planning_page_templates_pills" ADD CONSTRAINT "product_planning_page_templates_pills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_planning_page_metrics_points" ADD CONSTRAINT "product_planning_page_metrics_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_planning_page_metrics_pills" ADD CONSTRAINT "product_planning_page_metrics_pills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_planning_page_tracking_views" ADD CONSTRAINT "product_planning_page_tracking_views_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_planning_page_linked_planning_points" ADD CONSTRAINT "product_planning_page_linked_planning_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_planning_page_ai_planning_steps" ADD CONSTRAINT "product_planning_page_ai_planning_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_planning_page_ai_planning_source_pills" ADD CONSTRAINT "product_planning_page_ai_planning_source_pills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_reporting_page_pain_points" ADD CONSTRAINT "product_reporting_page_pain_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_reporting_page_dashboards_points" ADD CONSTRAINT "product_reporting_page_dashboards_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_reporting_page_dashboards_metrics" ADD CONSTRAINT "product_reporting_page_dashboards_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_reporting_page_dashboards_tags" ADD CONSTRAINT "product_reporting_page_dashboards_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_reporting_page_reporting_outputs_points" ADD CONSTRAINT "product_reporting_page_reporting_outputs_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_reporting_page_reporting_outputs_formats" ADD CONSTRAINT "product_reporting_page_reporting_outputs_formats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_reporting_page_reporting_outputs_template_rows" ADD CONSTRAINT "product_reporting_page_reporting_outputs_template_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_visuals_page_pain_points" ADD CONSTRAINT "product_visuals_page_pain_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_visuals_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_visuals_page_infographics_capabilities" ADD CONSTRAINT "product_visuals_page_infographics_capabilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_visuals_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_visuals_page_charting_capabilities" ADD CONSTRAINT "product_visuals_page_charting_capabilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_visuals_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_visuals_page_tables_capabilities" ADD CONSTRAINT "product_visuals_page_tables_capabilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_visuals_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_visuals_page_plan_views_capabilities" ADD CONSTRAINT "product_visuals_page_plan_views_capabilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_visuals_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_knowledgebase_page_capture_insight_tags" ADD CONSTRAINT "product_knowledgebase_page_capture_insight_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_knowledgebase_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_knowledgebase_page_auto_capture_points" ADD CONSTRAINT "product_knowledgebase_page_auto_capture_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_knowledgebase_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_knowledgebase_page_ai_query_qa_examples" ADD CONSTRAINT "product_knowledgebase_page_ai_query_qa_examples_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_knowledgebase_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "product_planning_page_pain_points_order_idx" ON "product_planning_page_pain_points" USING btree ("_order");
  CREATE INDEX "product_planning_page_pain_points_parent_id_idx" ON "product_planning_page_pain_points" USING btree ("_parent_id");
  CREATE INDEX "product_planning_page_templates_pills_order_idx" ON "product_planning_page_templates_pills" USING btree ("_order");
  CREATE INDEX "product_planning_page_templates_pills_parent_id_idx" ON "product_planning_page_templates_pills" USING btree ("_parent_id");
  CREATE INDEX "product_planning_page_metrics_points_order_idx" ON "product_planning_page_metrics_points" USING btree ("_order");
  CREATE INDEX "product_planning_page_metrics_points_parent_id_idx" ON "product_planning_page_metrics_points" USING btree ("_parent_id");
  CREATE INDEX "product_planning_page_metrics_pills_order_idx" ON "product_planning_page_metrics_pills" USING btree ("_order");
  CREATE INDEX "product_planning_page_metrics_pills_parent_id_idx" ON "product_planning_page_metrics_pills" USING btree ("_parent_id");
  CREATE INDEX "product_planning_page_tracking_views_order_idx" ON "product_planning_page_tracking_views" USING btree ("_order");
  CREATE INDEX "product_planning_page_tracking_views_parent_id_idx" ON "product_planning_page_tracking_views" USING btree ("_parent_id");
  CREATE INDEX "product_planning_page_linked_planning_points_order_idx" ON "product_planning_page_linked_planning_points" USING btree ("_order");
  CREATE INDEX "product_planning_page_linked_planning_points_parent_id_idx" ON "product_planning_page_linked_planning_points" USING btree ("_parent_id");
  CREATE INDEX "product_planning_page_ai_planning_steps_order_idx" ON "product_planning_page_ai_planning_steps" USING btree ("_order");
  CREATE INDEX "product_planning_page_ai_planning_steps_parent_id_idx" ON "product_planning_page_ai_planning_steps" USING btree ("_parent_id");
  CREATE INDEX "product_planning_page_ai_planning_source_pills_order_idx" ON "product_planning_page_ai_planning_source_pills" USING btree ("_order");
  CREATE INDEX "product_planning_page_ai_planning_source_pills_parent_id_idx" ON "product_planning_page_ai_planning_source_pills" USING btree ("_parent_id");
  CREATE INDEX "product_reporting_page_pain_points_order_idx" ON "product_reporting_page_pain_points" USING btree ("_order");
  CREATE INDEX "product_reporting_page_pain_points_parent_id_idx" ON "product_reporting_page_pain_points" USING btree ("_parent_id");
  CREATE INDEX "product_reporting_page_dashboards_points_order_idx" ON "product_reporting_page_dashboards_points" USING btree ("_order");
  CREATE INDEX "product_reporting_page_dashboards_points_parent_id_idx" ON "product_reporting_page_dashboards_points" USING btree ("_parent_id");
  CREATE INDEX "product_reporting_page_dashboards_metrics_order_idx" ON "product_reporting_page_dashboards_metrics" USING btree ("_order");
  CREATE INDEX "product_reporting_page_dashboards_metrics_parent_id_idx" ON "product_reporting_page_dashboards_metrics" USING btree ("_parent_id");
  CREATE INDEX "product_reporting_page_dashboards_tags_order_idx" ON "product_reporting_page_dashboards_tags" USING btree ("_order");
  CREATE INDEX "product_reporting_page_dashboards_tags_parent_id_idx" ON "product_reporting_page_dashboards_tags" USING btree ("_parent_id");
  CREATE INDEX "product_reporting_page_reporting_outputs_points_order_idx" ON "product_reporting_page_reporting_outputs_points" USING btree ("_order");
  CREATE INDEX "product_reporting_page_reporting_outputs_points_parent_id_idx" ON "product_reporting_page_reporting_outputs_points" USING btree ("_parent_id");
  CREATE INDEX "product_reporting_page_reporting_outputs_formats_order_idx" ON "product_reporting_page_reporting_outputs_formats" USING btree ("_order");
  CREATE INDEX "product_reporting_page_reporting_outputs_formats_parent_id_idx" ON "product_reporting_page_reporting_outputs_formats" USING btree ("_parent_id");
  CREATE INDEX "product_reporting_page_reporting_outputs_template_rows_order_idx" ON "product_reporting_page_reporting_outputs_template_rows" USING btree ("_order");
  CREATE INDEX "product_reporting_page_reporting_outputs_template_rows_parent_id_idx" ON "product_reporting_page_reporting_outputs_template_rows" USING btree ("_parent_id");
  CREATE INDEX "product_visuals_page_pain_points_order_idx" ON "product_visuals_page_pain_points" USING btree ("_order");
  CREATE INDEX "product_visuals_page_pain_points_parent_id_idx" ON "product_visuals_page_pain_points" USING btree ("_parent_id");
  CREATE INDEX "product_visuals_page_infographics_capabilities_order_idx" ON "product_visuals_page_infographics_capabilities" USING btree ("_order");
  CREATE INDEX "product_visuals_page_infographics_capabilities_parent_id_idx" ON "product_visuals_page_infographics_capabilities" USING btree ("_parent_id");
  CREATE INDEX "product_visuals_page_charting_capabilities_order_idx" ON "product_visuals_page_charting_capabilities" USING btree ("_order");
  CREATE INDEX "product_visuals_page_charting_capabilities_parent_id_idx" ON "product_visuals_page_charting_capabilities" USING btree ("_parent_id");
  CREATE INDEX "product_visuals_page_tables_capabilities_order_idx" ON "product_visuals_page_tables_capabilities" USING btree ("_order");
  CREATE INDEX "product_visuals_page_tables_capabilities_parent_id_idx" ON "product_visuals_page_tables_capabilities" USING btree ("_parent_id");
  CREATE INDEX "product_visuals_page_plan_views_capabilities_order_idx" ON "product_visuals_page_plan_views_capabilities" USING btree ("_order");
  CREATE INDEX "product_visuals_page_plan_views_capabilities_parent_id_idx" ON "product_visuals_page_plan_views_capabilities" USING btree ("_parent_id");
  CREATE INDEX "product_knowledgebase_page_capture_insight_tags_order_idx" ON "product_knowledgebase_page_capture_insight_tags" USING btree ("_order");
  CREATE INDEX "product_knowledgebase_page_capture_insight_tags_parent_id_idx" ON "product_knowledgebase_page_capture_insight_tags" USING btree ("_parent_id");
  CREATE INDEX "product_knowledgebase_page_auto_capture_points_order_idx" ON "product_knowledgebase_page_auto_capture_points" USING btree ("_order");
  CREATE INDEX "product_knowledgebase_page_auto_capture_points_parent_id_idx" ON "product_knowledgebase_page_auto_capture_points" USING btree ("_parent_id");
  CREATE INDEX "product_knowledgebase_page_ai_query_qa_examples_order_idx" ON "product_knowledgebase_page_ai_query_qa_examples" USING btree ("_order");
  CREATE INDEX "product_knowledgebase_page_ai_query_qa_examples_parent_id_idx" ON "product_knowledgebase_page_ai_query_qa_examples" USING btree ("_parent_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "knowledge_base_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "changelog_id";
  ALTER TABLE "product_planning_page" DROP COLUMN "section_heading";
  ALTER TABLE "product_planning_page" DROP COLUMN "section_subheading";
  ALTER TABLE "product_visuals_page" DROP COLUMN "section_heading";
  ALTER TABLE "product_visuals_page" DROP COLUMN "section_subheading";
  ALTER TABLE "product_reporting_page" DROP COLUMN "section_heading";
  ALTER TABLE "product_reporting_page" DROP COLUMN "section_subheading";
  DROP TYPE "public"."enum_knowledge_base_category";
  DROP TYPE "public"."enum_knowledge_base_status";
  DROP TYPE "public"."enum__knowledge_base_v_version_category";
  DROP TYPE "public"."enum__knowledge_base_v_version_status";
  DROP TYPE "public"."enum_changelog_changes_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_knowledge_base_category" AS ENUM('getting-started', 'features', 'integrations', 'troubleshooting', 'best-practices', 'advanced');
  CREATE TYPE "public"."enum_knowledge_base_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__knowledge_base_v_version_category" AS ENUM('getting-started', 'features', 'integrations', 'troubleshooting', 'best-practices', 'advanced');
  CREATE TYPE "public"."enum__knowledge_base_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_changelog_changes_type" AS ENUM('feature', 'improvement', 'bugfix', 'security', 'documentation');
  CREATE TABLE "knowledge_base" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"content" jsonb,
  	"category" "enum_knowledge_base_category",
  	"subcategory" varchar,
  	"status" "enum_knowledge_base_status" DEFAULT 'draft',
  	"view_count" numeric DEFAULT 0,
  	"helpful_count" numeric DEFAULT 0,
  	"not_helpful_count" numeric DEFAULT 0,
  	"last_reviewed" timestamp(3) with time zone,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"seo_og_image_id" integer,
  	"seo_canonical_url" varchar,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_knowledge_base_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "knowledge_base_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "knowledge_base_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"knowledge_base_id" integer
  );
  
  CREATE TABLE "_knowledge_base_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_content" jsonb,
  	"version_category" "enum__knowledge_base_v_version_category",
  	"version_subcategory" varchar,
  	"version_status" "enum__knowledge_base_v_version_status" DEFAULT 'draft',
  	"version_view_count" numeric DEFAULT 0,
  	"version_helpful_count" numeric DEFAULT 0,
  	"version_not_helpful_count" numeric DEFAULT 0,
  	"version_last_reviewed" timestamp(3) with time zone,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_seo_og_image_id" integer,
  	"version_seo_canonical_url" varchar,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__knowledge_base_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_knowledge_base_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_knowledge_base_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"knowledge_base_id" integer
  );
  
  CREATE TABLE "faqs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"knowledge_base_id" integer
  );
  
  CREATE TABLE "changelog_changes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_changelog_changes_type" NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "changelog" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version" varchar NOT NULL,
  	"release_date" timestamp(3) with time zone NOT NULL,
  	"title" varchar NOT NULL,
  	"summary" varchar NOT NULL,
  	"breaking" boolean DEFAULT false,
  	"breaking_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "product_knowledge_base_page_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "product_knowledge_base_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT 'Knowledge Base',
  	"hero_subtitle" varchar DEFAULT 'Centralize organizational knowledge, market data, and research into a searchable intelligence hub.',
  	"section_heading" varchar DEFAULT 'Everything you know, in one place',
  	"section_subheading" varchar DEFAULT 'Stop losing insights across emails, docs, and spreadsheets',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "product_planning_page_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "product_visuals_page_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "product_reporting_page_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  ALTER TABLE "product_planning_page_pain_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_planning_page_templates_pills" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_planning_page_metrics_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_planning_page_metrics_pills" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_planning_page_tracking_views" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_planning_page_linked_planning_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_planning_page_ai_planning_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_planning_page_ai_planning_source_pills" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_reporting_page_pain_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_reporting_page_dashboards_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_reporting_page_dashboards_metrics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_reporting_page_dashboards_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_reporting_page_reporting_outputs_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_reporting_page_reporting_outputs_formats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_reporting_page_reporting_outputs_template_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_visuals_page_pain_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_visuals_page_infographics_capabilities" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_visuals_page_charting_capabilities" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_visuals_page_tables_capabilities" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_visuals_page_plan_views_capabilities" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_knowledgebase_page_capture_insight_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_knowledgebase_page_auto_capture_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_knowledgebase_page_ai_query_qa_examples" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_knowledgebase_page" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "product_planning_page_pain_points" CASCADE;
  DROP TABLE "product_planning_page_templates_pills" CASCADE;
  DROP TABLE "product_planning_page_metrics_points" CASCADE;
  DROP TABLE "product_planning_page_metrics_pills" CASCADE;
  DROP TABLE "product_planning_page_tracking_views" CASCADE;
  DROP TABLE "product_planning_page_linked_planning_points" CASCADE;
  DROP TABLE "product_planning_page_ai_planning_steps" CASCADE;
  DROP TABLE "product_planning_page_ai_planning_source_pills" CASCADE;
  DROP TABLE "product_reporting_page_pain_points" CASCADE;
  DROP TABLE "product_reporting_page_dashboards_points" CASCADE;
  DROP TABLE "product_reporting_page_dashboards_metrics" CASCADE;
  DROP TABLE "product_reporting_page_dashboards_tags" CASCADE;
  DROP TABLE "product_reporting_page_reporting_outputs_points" CASCADE;
  DROP TABLE "product_reporting_page_reporting_outputs_formats" CASCADE;
  DROP TABLE "product_reporting_page_reporting_outputs_template_rows" CASCADE;
  DROP TABLE "product_visuals_page_pain_points" CASCADE;
  DROP TABLE "product_visuals_page_infographics_capabilities" CASCADE;
  DROP TABLE "product_visuals_page_charting_capabilities" CASCADE;
  DROP TABLE "product_visuals_page_tables_capabilities" CASCADE;
  DROP TABLE "product_visuals_page_plan_views_capabilities" CASCADE;
  DROP TABLE "product_knowledgebase_page_capture_insight_tags" CASCADE;
  DROP TABLE "product_knowledgebase_page_auto_capture_points" CASCADE;
  DROP TABLE "product_knowledgebase_page_ai_query_qa_examples" CASCADE;
  DROP TABLE "product_knowledgebase_page" CASCADE;
  ALTER TABLE "pricing_plans" ALTER COLUMN "cta_text" SET DEFAULT 'Get Started';
  ALTER TABLE "solutions" ALTER COLUMN "cta_text" SET DEFAULT 'Get Started';
  ALTER TABLE "_solutions_v" ALTER COLUMN "version_cta_text" SET DEFAULT 'Get Started';
  ALTER TABLE "marketing_home" ALTER COLUMN "hero_eyebrow" SET DEFAULT 'AI-powered planning';
  ALTER TABLE "marketing_home" ALTER COLUMN "hero_badge" SET DEFAULT 'Launching Soon';
  ALTER TABLE "marketing_home" ALTER COLUMN "hero_headline" SET DEFAULT 'Turn insights into actionable plans';
  ALTER TABLE "marketing_home" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Capture insights as beautiful infographics, charts, and tables. Build and iterate plans fast with hundreds of predefined templates, then report and track execution.';
  ALTER TABLE "marketing_home" ALTER COLUMN "core_features_kicker" SET DEFAULT 'Built for clarity';
  ALTER TABLE "marketing_home" ALTER COLUMN "core_features_heading" SET DEFAULT 'Different by design.';
  ALTER TABLE "marketing_home" ALTER COLUMN "core_features_description" SET DEFAULT 'Bring knowledge, planning, and reporting together with curated insights and flexible building blocks.';
  ALTER TABLE "marketing_home" ALTER COLUMN "social_proof_heading" SET DEFAULT 'Trusted by Teams Worldwide';
  ALTER TABLE "marketing_home" ALTER COLUMN "social_proof_subheading" SET DEFAULT 'Join thousands of teams executing strategy with confidence';
  ALTER TABLE "marketing_home" ALTER COLUMN "social_proof_logos_label" SET DEFAULT 'TRUSTED BY LEADING ORGANIZATIONS';
  ALTER TABLE "marketing_home" ALTER COLUMN "cta_title" SET DEFAULT 'Build better plans, faster';
  ALTER TABLE "marketing_home" ALTER COLUMN "cta_description" SET DEFAULT 'Join the waitlist for early access to curated insights, flexible templates, and rapid iteration across strategy, planning, and project management.';
  ALTER TABLE "marketing_home" ALTER COLUMN "cta_email_placeholder" SET DEFAULT 'Enter your email';
  ALTER TABLE "marketing_home" ALTER COLUMN "cta_button_label" SET DEFAULT 'Join Waitlist';
  ALTER TABLE "marketing_home" ALTER COLUMN "cta_note" SET DEFAULT 'Get notified when we launch - no spam, ever';
  ALTER TABLE "product_overview_page" ALTER COLUMN "hero_title" SET DEFAULT 'Turn Insights into Plans';
  ALTER TABLE "product_overview_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Capture organizational knowledge, build strategic plans with proven frameworks, and generate beautiful reports—all in one platform.';
  ALTER TABLE "product_overview_page" ALTER COLUMN "how_it_works_heading" SET DEFAULT 'How It Works';
  ALTER TABLE "product_overview_page" ALTER COLUMN "how_it_works_subheading" SET DEFAULT 'Three simple steps to transform your planning process';
  ALTER TABLE "product_overview_page" ALTER COLUMN "key_benefits_heading" SET DEFAULT 'Key Benefits';
  ALTER TABLE "product_overview_page" ALTER COLUMN "key_benefits_subheading" SET DEFAULT 'Everything you need to transform your planning process';
  ALTER TABLE "product_overview_page" ALTER COLUMN "features_heading" SET DEFAULT 'Features';
  ALTER TABLE "product_overview_page" ALTER COLUMN "features_subheading" SET DEFAULT 'Everything you need to transform strategic planning from a painful process into a competitive advantage';
  ALTER TABLE "product_overview_page" ALTER COLUMN "problems_heading" SET DEFAULT 'Problems We Solve';
  ALTER TABLE "product_overview_page" ALTER COLUMN "problems_subheading" SET DEFAULT 'Common challenges Insaplan addresses';
  ALTER TABLE "product_overview_page" ALTER COLUMN "comparison_table_heading" SET DEFAULT 'Why Insaplan vs. Traditional Methods';
  ALTER TABLE "product_overview_page" ALTER COLUMN "comparison_table_subheading" SET DEFAULT 'See how Insaplan compares to traditional planning tools';
  ALTER TABLE "product_planning_page" ALTER COLUMN "hero_title" SET DEFAULT 'Planning';
  ALTER TABLE "product_planning_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Build strategic plans with proven frameworks and AI assistance — faster than ever before.';
  ALTER TABLE "product_reporting_page" ALTER COLUMN "hero_title" SET DEFAULT 'Reporting';
  ALTER TABLE "product_reporting_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Track execution, measure impact, and communicate progress with beautiful real-time dashboards and reports.';
  ALTER TABLE "product_visuals_page" ALTER COLUMN "hero_title" SET DEFAULT 'Visuals';
  ALTER TABLE "product_visuals_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Create stunning infographics, charts, and presentations that make your strategy impossible to ignore.';
  ALTER TABLE "solutions_page" ALTER COLUMN "hero_title" SET DEFAULT 'Solutions';
  ALTER TABLE "solutions_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Tailored for your industry and organizational needs';
  ALTER TABLE "solutions_page" ALTER COLUMN "section_heading" SET DEFAULT 'Choose your use case';
  ALTER TABLE "solutions_page" ALTER COLUMN "section_subheading" SET DEFAULT 'Insaplan adapts to the way your team works';
  ALTER TABLE "pricing_page" ALTER COLUMN "hero_title" SET DEFAULT 'Simple, transparent pricing';
  ALTER TABLE "pricing_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Start free. Scale as your team grows. No hidden fees.';
  ALTER TABLE "pricing_page" ALTER COLUMN "monthly_label" SET DEFAULT 'Monthly';
  ALTER TABLE "pricing_page" ALTER COLUMN "annual_label" SET DEFAULT 'Annual';
  ALTER TABLE "pricing_page" ALTER COLUMN "annual_discount_badge" SET DEFAULT 'Save 20%';
  ALTER TABLE "pricing_page" ALTER COLUMN "custom_price_label" SET DEFAULT 'Custom';
  ALTER TABLE "pricing_page" ALTER COLUMN "per_month_suffix" SET DEFAULT '/ mo';
  ALTER TABLE "pricing_page" ALTER COLUMN "popular_badge_label" SET DEFAULT 'Most Popular';
  ALTER TABLE "pricing_page" ALTER COLUMN "billed_annually_label" SET DEFAULT 'Billed annually';
  ALTER TABLE "blog_page" ALTER COLUMN "hero_title" SET DEFAULT 'Blog';
  ALTER TABLE "blog_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Insights, updates, and best practices';
  ALTER TABLE "blog_page" ALTER COLUMN "read_more_label" SET DEFAULT 'Read article →';
  ALTER TABLE "blog_page" ALTER COLUMN "empty_state_heading" SET DEFAULT 'No Posts Yet';
  ALTER TABLE "blog_page" ALTER COLUMN "empty_state_message" SET DEFAULT 'We''re working on content. Check back soon for insights on strategic planning, AI, and more.';
  ALTER TABLE "faqs_page" ALTER COLUMN "hero_title" SET DEFAULT 'Frequently Asked Questions';
  ALTER TABLE "faqs_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Everything you need to know about Insaplan';
  ALTER TABLE "faqs_page" ALTER COLUMN "empty_state_message" SET DEFAULT 'No FAQs available yet.';
  ALTER TABLE "support_page" ALTER COLUMN "hero_title" SET DEFAULT 'Support';
  ALTER TABLE "support_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'We''re here to help you succeed with Insaplan';
  ALTER TABLE "support_page" ALTER COLUMN "coming_soon_message" SET DEFAULT 'Our support center is launching soon. In the meantime, feel free to reach out to us directly.';
  ALTER TABLE "support_page" ALTER COLUMN "contact_heading" SET DEFAULT 'Get in Touch';
  ALTER TABLE "support_page" ALTER COLUMN "contact_email" SET DEFAULT 'support@insaplan.com';
  ALTER TABLE "knowledge_base_page" ALTER COLUMN "hero_title" SET DEFAULT 'Knowledge Base';
  ALTER TABLE "knowledge_base_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Learn how to get the most out of Insaplan';
  ALTER TABLE "knowledge_base_page" ALTER COLUMN "coming_soon_heading" SET DEFAULT 'Documentation Coming Soon';
  ALTER TABLE "knowledge_base_page" ALTER COLUMN "coming_soon_message" SET DEFAULT 'We''re building comprehensive documentation to help you get started with Insaplan. Check back soon!';
  ALTER TABLE "contact_page" ALTER COLUMN "hero_title" SET DEFAULT 'Contact Us';
  ALTER TABLE "contact_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Have a question or want to learn more? We''d love to hear from you.';
  ALTER TABLE "contact_page" ALTER COLUMN "name_placeholder" SET DEFAULT 'Your name';
  ALTER TABLE "contact_page" ALTER COLUMN "email_placeholder" SET DEFAULT 'your@email.com';
  ALTER TABLE "contact_page" ALTER COLUMN "company_placeholder" SET DEFAULT 'Your company';
  ALTER TABLE "contact_page" ALTER COLUMN "message_placeholder" SET DEFAULT 'How can we help?';
  ALTER TABLE "contact_page" ALTER COLUMN "submit_button_label" SET DEFAULT 'Send Message';
  ALTER TABLE "contact_page" ALTER COLUMN "success_message" SET DEFAULT 'Thank you! We''ll get back to you within 24 hours.';
  ALTER TABLE "contact_page" ALTER COLUMN "response_note" SET DEFAULT 'We typically respond within 24 hours';
  ALTER TABLE "legal_page" ALTER COLUMN "hero_title" SET DEFAULT 'Legal';
  ALTER TABLE "legal_page" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Terms of Service, Privacy Policy and Data Security';
  ALTER TABLE "legal_page" ALTER COLUMN "terms_tab_label" SET DEFAULT 'Terms of Service';
  ALTER TABLE "legal_page" ALTER COLUMN "privacy_tab_label" SET DEFAULT 'Privacy Policy';
  ALTER TABLE "legal_page" ALTER COLUMN "data_security_tab_label" SET DEFAULT 'Data Security';
  ALTER TABLE "legal_page" ALTER COLUMN "terms_coming_soon" SET DEFAULT 'Coming soon. Our terms of service are being finalized and will be available before launch.';
  ALTER TABLE "legal_page" ALTER COLUMN "privacy_coming_soon" SET DEFAULT 'Coming soon. Our privacy policy is being finalized and will be available before launch.';
  ALTER TABLE "legal_page" ALTER COLUMN "data_security_coming_soon" SET DEFAULT 'Coming soon. Our data security documentation is being finalized and will be available before launch.';
  ALTER TABLE "footer" ALTER COLUMN "logo_text" SET DEFAULT 'Insaplan';
  ALTER TABLE "footer" ALTER COLUMN "nav_cta_label" SET DEFAULT 'Request Access';
  ALTER TABLE "footer" ALTER COLUMN "nav_cta_url" SET DEFAULT '/contact';
  ALTER TABLE "footer" ALTER COLUMN "tagline" SET DEFAULT 'Turn Insights into Plans. Strategic planning and reporting made simple.';
  ALTER TABLE "footer" ALTER COLUMN "copyright_name" SET DEFAULT 'Insaplan';
  ALTER TABLE "footer" ALTER COLUMN "copyright_suffix" SET DEFAULT 'All Rights Reserved.';
  ALTER TABLE "site_metadata" ALTER COLUMN "default_title" SET DEFAULT 'Insaplan';
  ALTER TABLE "site_metadata" ALTER COLUMN "default_description" SET DEFAULT 'AI-Powered Strategy Execution Platform';
  ALTER TABLE "site_settings" ALTER COLUMN "site_name" SET DEFAULT 'Insaplan';
  ALTER TABLE "site_settings" ALTER COLUMN "maintenance_enabled" SET DEFAULT false;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "knowledge_base_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "changelog_id" integer;
  ALTER TABLE "product_planning_page" ADD COLUMN "section_heading" varchar DEFAULT 'From insight to action plan';
  ALTER TABLE "product_planning_page" ADD COLUMN "section_subheading" varchar DEFAULT 'Proven frameworks, flexible templates, AI-powered recommendations';
  ALTER TABLE "product_reporting_page" ADD COLUMN "section_heading" varchar DEFAULT 'From plan to proof';
  ALTER TABLE "product_reporting_page" ADD COLUMN "section_subheading" varchar DEFAULT 'Real-time dashboards, progress tracking, and reports that tell the full story';
  ALTER TABLE "product_visuals_page" ADD COLUMN "section_heading" varchar DEFAULT 'Strategy that speaks for itself';
  ALTER TABLE "product_visuals_page" ADD COLUMN "section_subheading" varchar DEFAULT 'Professional templates, custom branding, beautiful outputs';
  ALTER TABLE "knowledge_base" ADD CONSTRAINT "knowledge_base_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "knowledge_base_texts" ADD CONSTRAINT "knowledge_base_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."knowledge_base"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "knowledge_base_rels" ADD CONSTRAINT "knowledge_base_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."knowledge_base"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "knowledge_base_rels" ADD CONSTRAINT "knowledge_base_rels_knowledge_base_fk" FOREIGN KEY ("knowledge_base_id") REFERENCES "public"."knowledge_base"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_knowledge_base_v" ADD CONSTRAINT "_knowledge_base_v_parent_id_knowledge_base_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."knowledge_base"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_knowledge_base_v" ADD CONSTRAINT "_knowledge_base_v_version_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_knowledge_base_v_texts" ADD CONSTRAINT "_knowledge_base_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_knowledge_base_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_knowledge_base_v_rels" ADD CONSTRAINT "_knowledge_base_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_knowledge_base_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_knowledge_base_v_rels" ADD CONSTRAINT "_knowledge_base_v_rels_knowledge_base_fk" FOREIGN KEY ("knowledge_base_id") REFERENCES "public"."knowledge_base"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_rels" ADD CONSTRAINT "faqs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_rels" ADD CONSTRAINT "faqs_rels_knowledge_base_fk" FOREIGN KEY ("knowledge_base_id") REFERENCES "public"."knowledge_base"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "changelog_changes" ADD CONSTRAINT "changelog_changes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."changelog"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_knowledge_base_page_features" ADD CONSTRAINT "product_knowledge_base_page_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_knowledge_base_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_planning_page_features" ADD CONSTRAINT "product_planning_page_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_planning_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_visuals_page_features" ADD CONSTRAINT "product_visuals_page_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_visuals_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_reporting_page_features" ADD CONSTRAINT "product_reporting_page_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_reporting_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "knowledge_base_slug_idx" ON "knowledge_base" USING btree ("slug");
  CREATE INDEX "knowledge_base_seo_seo_og_image_idx" ON "knowledge_base" USING btree ("seo_og_image_id");
  CREATE INDEX "knowledge_base_updated_at_idx" ON "knowledge_base" USING btree ("updated_at");
  CREATE INDEX "knowledge_base_created_at_idx" ON "knowledge_base" USING btree ("created_at");
  CREATE INDEX "knowledge_base__status_idx" ON "knowledge_base" USING btree ("_status");
  CREATE INDEX "knowledge_base_texts_order_parent" ON "knowledge_base_texts" USING btree ("order","parent_id");
  CREATE INDEX "knowledge_base_rels_order_idx" ON "knowledge_base_rels" USING btree ("order");
  CREATE INDEX "knowledge_base_rels_parent_idx" ON "knowledge_base_rels" USING btree ("parent_id");
  CREATE INDEX "knowledge_base_rels_path_idx" ON "knowledge_base_rels" USING btree ("path");
  CREATE INDEX "knowledge_base_rels_knowledge_base_id_idx" ON "knowledge_base_rels" USING btree ("knowledge_base_id");
  CREATE INDEX "_knowledge_base_v_parent_idx" ON "_knowledge_base_v" USING btree ("parent_id");
  CREATE INDEX "_knowledge_base_v_version_version_slug_idx" ON "_knowledge_base_v" USING btree ("version_slug");
  CREATE INDEX "_knowledge_base_v_version_seo_version_seo_og_image_idx" ON "_knowledge_base_v" USING btree ("version_seo_og_image_id");
  CREATE INDEX "_knowledge_base_v_version_version_updated_at_idx" ON "_knowledge_base_v" USING btree ("version_updated_at");
  CREATE INDEX "_knowledge_base_v_version_version_created_at_idx" ON "_knowledge_base_v" USING btree ("version_created_at");
  CREATE INDEX "_knowledge_base_v_version_version__status_idx" ON "_knowledge_base_v" USING btree ("version__status");
  CREATE INDEX "_knowledge_base_v_created_at_idx" ON "_knowledge_base_v" USING btree ("created_at");
  CREATE INDEX "_knowledge_base_v_updated_at_idx" ON "_knowledge_base_v" USING btree ("updated_at");
  CREATE INDEX "_knowledge_base_v_latest_idx" ON "_knowledge_base_v" USING btree ("latest");
  CREATE INDEX "_knowledge_base_v_texts_order_parent" ON "_knowledge_base_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "_knowledge_base_v_rels_order_idx" ON "_knowledge_base_v_rels" USING btree ("order");
  CREATE INDEX "_knowledge_base_v_rels_parent_idx" ON "_knowledge_base_v_rels" USING btree ("parent_id");
  CREATE INDEX "_knowledge_base_v_rels_path_idx" ON "_knowledge_base_v_rels" USING btree ("path");
  CREATE INDEX "_knowledge_base_v_rels_knowledge_base_id_idx" ON "_knowledge_base_v_rels" USING btree ("knowledge_base_id");
  CREATE INDEX "faqs_rels_order_idx" ON "faqs_rels" USING btree ("order");
  CREATE INDEX "faqs_rels_parent_idx" ON "faqs_rels" USING btree ("parent_id");
  CREATE INDEX "faqs_rels_path_idx" ON "faqs_rels" USING btree ("path");
  CREATE INDEX "faqs_rels_knowledge_base_id_idx" ON "faqs_rels" USING btree ("knowledge_base_id");
  CREATE INDEX "changelog_changes_order_idx" ON "changelog_changes" USING btree ("_order");
  CREATE INDEX "changelog_changes_parent_id_idx" ON "changelog_changes" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "changelog_version_idx" ON "changelog" USING btree ("version");
  CREATE INDEX "changelog_updated_at_idx" ON "changelog" USING btree ("updated_at");
  CREATE INDEX "changelog_created_at_idx" ON "changelog" USING btree ("created_at");
  CREATE INDEX "product_knowledge_base_page_features_order_idx" ON "product_knowledge_base_page_features" USING btree ("_order");
  CREATE INDEX "product_knowledge_base_page_features_parent_id_idx" ON "product_knowledge_base_page_features" USING btree ("_parent_id");
  CREATE INDEX "product_planning_page_features_order_idx" ON "product_planning_page_features" USING btree ("_order");
  CREATE INDEX "product_planning_page_features_parent_id_idx" ON "product_planning_page_features" USING btree ("_parent_id");
  CREATE INDEX "product_visuals_page_features_order_idx" ON "product_visuals_page_features" USING btree ("_order");
  CREATE INDEX "product_visuals_page_features_parent_id_idx" ON "product_visuals_page_features" USING btree ("_parent_id");
  CREATE INDEX "product_reporting_page_features_order_idx" ON "product_reporting_page_features" USING btree ("_order");
  CREATE INDEX "product_reporting_page_features_parent_id_idx" ON "product_reporting_page_features" USING btree ("_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_knowledge_base_fk" FOREIGN KEY ("knowledge_base_id") REFERENCES "public"."knowledge_base"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_changelog_fk" FOREIGN KEY ("changelog_id") REFERENCES "public"."changelog"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_knowledge_base_id_idx" ON "payload_locked_documents_rels" USING btree ("knowledge_base_id");
  CREATE INDEX "payload_locked_documents_rels_changelog_id_idx" ON "payload_locked_documents_rels" USING btree ("changelog_id");
  ALTER TABLE "product_planning_page" DROP COLUMN "templates_kicker";
  ALTER TABLE "product_planning_page" DROP COLUMN "templates_heading";
  ALTER TABLE "product_planning_page" DROP COLUMN "templates_body";
  ALTER TABLE "product_planning_page" DROP COLUMN "templates_stat1_value";
  ALTER TABLE "product_planning_page" DROP COLUMN "templates_stat1_label";
  ALTER TABLE "product_planning_page" DROP COLUMN "templates_stat2_value";
  ALTER TABLE "product_planning_page" DROP COLUMN "templates_stat2_label";
  ALTER TABLE "product_planning_page" DROP COLUMN "templates_callout";
  ALTER TABLE "product_planning_page" DROP COLUMN "metrics_kicker";
  ALTER TABLE "product_planning_page" DROP COLUMN "metrics_heading";
  ALTER TABLE "product_planning_page" DROP COLUMN "metrics_body";
  ALTER TABLE "product_planning_page" DROP COLUMN "metrics_badge_label";
  ALTER TABLE "product_planning_page" DROP COLUMN "metrics_mini_stat";
  ALTER TABLE "product_planning_page" DROP COLUMN "tracking_kicker";
  ALTER TABLE "product_planning_page" DROP COLUMN "tracking_heading";
  ALTER TABLE "product_planning_page" DROP COLUMN "tracking_body";
  ALTER TABLE "product_planning_page" DROP COLUMN "linked_planning_kicker";
  ALTER TABLE "product_planning_page" DROP COLUMN "linked_planning_heading";
  ALTER TABLE "product_planning_page" DROP COLUMN "linked_planning_body";
  ALTER TABLE "product_planning_page" DROP COLUMN "ai_planning_kicker";
  ALTER TABLE "product_planning_page" DROP COLUMN "ai_planning_heading";
  ALTER TABLE "product_planning_page" DROP COLUMN "ai_planning_body";
  ALTER TABLE "product_reporting_page" DROP COLUMN "dashboards_kicker";
  ALTER TABLE "product_reporting_page" DROP COLUMN "dashboards_heading";
  ALTER TABLE "product_reporting_page" DROP COLUMN "dashboards_body";
  ALTER TABLE "product_reporting_page" DROP COLUMN "reporting_outputs_kicker";
  ALTER TABLE "product_reporting_page" DROP COLUMN "reporting_outputs_heading";
  ALTER TABLE "product_reporting_page" DROP COLUMN "reporting_outputs_body";
  ALTER TABLE "product_visuals_page" DROP COLUMN "infographics_kicker";
  ALTER TABLE "product_visuals_page" DROP COLUMN "infographics_heading";
  ALTER TABLE "product_visuals_page" DROP COLUMN "infographics_body";
  ALTER TABLE "product_visuals_page" DROP COLUMN "charting_kicker";
  ALTER TABLE "product_visuals_page" DROP COLUMN "charting_heading";
  ALTER TABLE "product_visuals_page" DROP COLUMN "charting_body";
  ALTER TABLE "product_visuals_page" DROP COLUMN "tables_kicker";
  ALTER TABLE "product_visuals_page" DROP COLUMN "tables_heading";
  ALTER TABLE "product_visuals_page" DROP COLUMN "tables_body";
  ALTER TABLE "product_visuals_page" DROP COLUMN "plan_views_kicker";
  ALTER TABLE "product_visuals_page" DROP COLUMN "plan_views_heading";
  ALTER TABLE "product_visuals_page" DROP COLUMN "plan_views_body";
  DROP TYPE "public"."enum_product_planning_page_pain_points_icon";
  DROP TYPE "public"."enum_product_planning_page_tracking_views_icon";
  DROP TYPE "public"."enum_product_reporting_page_pain_points_icon";
  DROP TYPE "public"."enum_product_reporting_page_dashboards_metrics_tone";
  DROP TYPE "public"."enum_product_visuals_page_pain_points_icon";`)
}
