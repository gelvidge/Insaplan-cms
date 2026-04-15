import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // New child table for solutions_page
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "solutions_page_solution_links" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "label" varchar NOT NULL,
      "slug" varchar NOT NULL,
      "description" varchar NOT NULL
    )
  `)

  // New columns on existing solutions_page table
  await db.execute(sql`ALTER TABLE "solutions_page" ADD COLUMN IF NOT EXISTS "hero_title" varchar DEFAULT 'Solutions'`)
  await db.execute(sql`ALTER TABLE "solutions_page" ADD COLUMN IF NOT EXISTS "hero_subtitle" varchar DEFAULT 'Tailored for your industry and organizational needs'`)
  await db.execute(sql`ALTER TABLE "solutions_page" ADD COLUMN IF NOT EXISTS "section_heading" varchar DEFAULT 'Choose your use case'`)
  await db.execute(sql`ALTER TABLE "solutions_page" ADD COLUMN IF NOT EXISTS "section_subheading" varchar DEFAULT 'Insaplan adapts to the way your team works'`)

  // New pricing_page global table
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "pricing_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_title" varchar DEFAULT 'Simple, transparent pricing',
      "hero_subtitle" varchar DEFAULT 'Start free. Scale as your team grows. No hidden fees.',
      "monthly_label" varchar DEFAULT 'Monthly',
      "annual_label" varchar DEFAULT 'Annual',
      "annual_discount_badge" varchar DEFAULT 'Save 20%',
      "custom_price_label" varchar DEFAULT 'Custom',
      "per_month_suffix" varchar DEFAULT '/ mo',
      "popular_badge_label" varchar DEFAULT 'Most Popular',
      "billed_annually_label" varchar DEFAULT 'Billed annually',
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    )
  `)

  // blog_page category labels child table
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "blog_page_category_labels" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "slug" varchar NOT NULL,
      "label" varchar NOT NULL
    )
  `)

  // New columns on existing blog_page table
  await db.execute(sql`ALTER TABLE "blog_page" ADD COLUMN IF NOT EXISTS "read_more_label" varchar DEFAULT 'Read article →'`)
  await db.execute(sql`ALTER TABLE "blog_page" ADD COLUMN IF NOT EXISTS "empty_state_heading" varchar DEFAULT 'No Posts Yet'`)
  await db.execute(sql`ALTER TABLE "blog_page" ADD COLUMN IF NOT EXISTS "empty_state_message" varchar DEFAULT 'We''re working on content. Check back soon for insights on strategic planning, AI, and more.'`)

  // faqs_page child table and global
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "faqs_page_category_labels" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "slug" varchar NOT NULL,
      "label" varchar NOT NULL
    )
  `)

  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "faqs_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_title" varchar DEFAULT 'Frequently Asked Questions',
      "hero_subtitle" varchar DEFAULT 'Everything you need to know about Insaplan',
      "empty_state_message" varchar DEFAULT 'No FAQs available yet.',
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    )
  `)

  // support_page global
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "support_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_title" varchar DEFAULT 'Support',
      "hero_subtitle" varchar DEFAULT 'We''re here to help you succeed with Insaplan',
      "coming_soon_message" varchar DEFAULT 'Our support center is launching soon. In the meantime, feel free to reach out to us directly.',
      "contact_heading" varchar DEFAULT 'Get in Touch',
      "contact_email" varchar DEFAULT 'support@insaplan.com',
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    )
  `)

  // knowledge_base_page global
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "knowledge_base_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_title" varchar DEFAULT 'Knowledge Base',
      "hero_subtitle" varchar DEFAULT 'Learn how to get the most out of Insaplan',
      "coming_soon_heading" varchar DEFAULT 'Documentation Coming Soon',
      "coming_soon_message" varchar DEFAULT 'We''re building comprehensive documentation to help you get started with Insaplan. Check back soon!',
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    )
  `)

  // contact_page global
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "contact_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_title" varchar DEFAULT 'Contact Us',
      "hero_subtitle" varchar DEFAULT 'Have a question or want to learn more? We''d love to hear from you.',
      "name_placeholder" varchar DEFAULT 'Your name',
      "email_placeholder" varchar DEFAULT 'your@email.com',
      "company_placeholder" varchar DEFAULT 'Your company',
      "message_placeholder" varchar DEFAULT 'How can we help?',
      "submit_button_label" varchar DEFAULT 'Send Message',
      "success_message" varchar DEFAULT 'Thank you! We''ll get back to you within 24 hours.',
      "response_note" varchar DEFAULT 'We typically respond within 24 hours',
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    )
  `)

  // legal_page global
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "legal_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_title" varchar DEFAULT 'Legal',
      "hero_subtitle" varchar DEFAULT 'Terms of Service, Privacy Policy and Data Security',
      "terms_tab_label" varchar DEFAULT 'Terms of Service',
      "privacy_tab_label" varchar DEFAULT 'Privacy Policy',
      "data_security_tab_label" varchar DEFAULT 'Data Security',
      "terms_content" jsonb,
      "privacy_content" jsonb,
      "terms_coming_soon" varchar DEFAULT 'Coming soon. Our terms of service are being finalized and will be available before launch.',
      "privacy_coming_soon" varchar DEFAULT 'Coming soon. Our privacy policy is being finalized and will be available before launch.',
      "data_security_content" jsonb,
      "data_security_coming_soon" varchar DEFAULT 'Coming soon. Our data security documentation is being finalized and will be available before launch.',
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    )
  `)

  // footer child tables and global
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "footer_link_groups_links" (
      "_order" integer NOT NULL,
      "_parent_id" varchar NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "label" varchar NOT NULL,
      "url" varchar NOT NULL
    )
  `)

  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "footer_link_groups" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "heading" varchar NOT NULL
    )
  `)

  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "footer" (
      "id" serial PRIMARY KEY NOT NULL,
      "logo_text" varchar DEFAULT 'Insaplan',
      "nav_cta_label" varchar DEFAULT 'Request Access',
      "nav_cta_url" varchar DEFAULT '/contact',
      "tagline" varchar DEFAULT 'Turn Insights into Plans. Strategic planning and reporting made simple.',
      "copyright_name" varchar DEFAULT 'Insaplan',
      "copyright_suffix" varchar DEFAULT 'All Rights Reserved.',
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    )
  `)

  // site_metadata global
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "site_metadata" (
      "id" serial PRIMARY KEY NOT NULL,
      "default_title" varchar DEFAULT 'Insaplan',
      "default_description" varchar DEFAULT 'AI-Powered Strategy Execution Platform',
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    )
  `)

  // New columns on solutions collection
  await db.execute(sql`ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "hero_kicker" varchar`)
  await db.execute(sql`ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "hero_headline" varchar`)
  await db.execute(sql`ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "hero_headline_accent" varchar`)
  await db.execute(sql`ALTER TABLE "solutions" ADD COLUMN IF NOT EXISTS "hero_body" varchar`)
  await db.execute(sql`ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_hero_kicker" varchar`)
  await db.execute(sql`ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_hero_headline" varchar`)
  await db.execute(sql`ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_hero_headline_accent" varchar`)
  await db.execute(sql`ALTER TABLE "_solutions_v" ADD COLUMN IF NOT EXISTS "version_hero_body" varchar`)

  // Foreign keys — wrapped in DO blocks so re-runs skip existing constraints
  await db.execute(sql`
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'solutions_page_solution_links_parent_id_fk') THEN
        ALTER TABLE "solutions_page_solution_links" ADD CONSTRAINT "solutions_page_solution_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions_page"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$
  `)
  await db.execute(sql`
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'blog_page_category_labels_parent_id_fk') THEN
        ALTER TABLE "blog_page_category_labels" ADD CONSTRAINT "blog_page_category_labels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_page"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$
  `)
  await db.execute(sql`
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'faqs_page_category_labels_parent_id_fk') THEN
        ALTER TABLE "faqs_page_category_labels" ADD CONSTRAINT "faqs_page_category_labels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faqs_page"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$
  `)
  await db.execute(sql`
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'footer_link_groups_links_parent_id_fk') THEN
        ALTER TABLE "footer_link_groups_links" ADD CONSTRAINT "footer_link_groups_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_link_groups"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$
  `)
  await db.execute(sql`
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'footer_link_groups_parent_id_fk') THEN
        ALTER TABLE "footer_link_groups" ADD CONSTRAINT "footer_link_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$
  `)

  // Indexes
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "solutions_page_solution_links_order_idx" ON "solutions_page_solution_links" USING btree ("_order")`)
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "solutions_page_solution_links_parent_id_idx" ON "solutions_page_solution_links" USING btree ("_parent_id")`)
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "blog_page_category_labels_order_idx" ON "blog_page_category_labels" USING btree ("_order")`)
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "blog_page_category_labels_parent_id_idx" ON "blog_page_category_labels" USING btree ("_parent_id")`)
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "faqs_page_category_labels_order_idx" ON "faqs_page_category_labels" USING btree ("_order")`)
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "faqs_page_category_labels_parent_id_idx" ON "faqs_page_category_labels" USING btree ("_parent_id")`)
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "footer_link_groups_links_order_idx" ON "footer_link_groups_links" USING btree ("_order")`)
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "footer_link_groups_links_parent_id_idx" ON "footer_link_groups_links" USING btree ("_parent_id")`)
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "footer_link_groups_order_idx" ON "footer_link_groups" USING btree ("_order")`)
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "footer_link_groups_parent_id_idx" ON "footer_link_groups" USING btree ("_parent_id")`)

  // Cleanup: drop obsolete tables (old collections removed from codebase)
  await db.execute(sql`DROP TABLE IF EXISTS "product_features" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "product_features_available_in" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "_product_features_v" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "_product_features_v_version_available_in" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "case_studies" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "case_studies_results" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "case_studies_texts" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "_case_studies_v" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "_case_studies_v_texts" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "_case_studies_v_version_results" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "testimonials" CASCADE`)

  // Drop obsolete rels columns
  await db.execute(sql`ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "product_features_id"`)
  await db.execute(sql`ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "case_studies_id"`)
  await db.execute(sql`ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "testimonials_id"`)

  // Drop obsolete enum types (tables dropped above, so no dependents remain)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum_product_features_available_in"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum_product_features_category"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum_product_features_status"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum__product_features_v_version_available_in"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum__product_features_v_version_category"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum__product_features_v_version_status"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum_case_studies_industry"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum_case_studies_company_size"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum_case_studies_status"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum__case_studies_v_version_industry"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum__case_studies_v_version_company_size"`)
  await db.execute(sql`DROP TYPE IF EXISTS "public"."enum__case_studies_v_version_status"`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`DROP TABLE IF EXISTS "solutions_page_solution_links" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "pricing_page" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "blog_page_category_labels" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "faqs_page_category_labels" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "faqs_page" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "support_page" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "knowledge_base_page" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "contact_page" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "legal_page" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "footer_link_groups_links" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "footer_link_groups" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "footer" CASCADE`)
  await db.execute(sql`DROP TABLE IF EXISTS "site_metadata" CASCADE`)
  await db.execute(sql`ALTER TABLE "solutions" DROP COLUMN IF EXISTS "hero_kicker"`)
  await db.execute(sql`ALTER TABLE "solutions" DROP COLUMN IF EXISTS "hero_headline"`)
  await db.execute(sql`ALTER TABLE "solutions" DROP COLUMN IF EXISTS "hero_headline_accent"`)
  await db.execute(sql`ALTER TABLE "solutions" DROP COLUMN IF EXISTS "hero_body"`)
  await db.execute(sql`ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_hero_kicker"`)
  await db.execute(sql`ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_hero_headline"`)
  await db.execute(sql`ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_hero_headline_accent"`)
  await db.execute(sql`ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "version_hero_body"`)
  await db.execute(sql`ALTER TABLE "solutions_page" DROP COLUMN IF EXISTS "hero_title"`)
  await db.execute(sql`ALTER TABLE "solutions_page" DROP COLUMN IF EXISTS "hero_subtitle"`)
  await db.execute(sql`ALTER TABLE "solutions_page" DROP COLUMN IF EXISTS "section_heading"`)
  await db.execute(sql`ALTER TABLE "solutions_page" DROP COLUMN IF EXISTS "section_subheading"`)
  await db.execute(sql`ALTER TABLE "blog_page" DROP COLUMN IF EXISTS "read_more_label"`)
  await db.execute(sql`ALTER TABLE "blog_page" DROP COLUMN IF EXISTS "empty_state_heading"`)
  await db.execute(sql`ALTER TABLE "blog_page" DROP COLUMN IF EXISTS "empty_state_message"`)
}
