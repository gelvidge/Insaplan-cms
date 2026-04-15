import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
  ALTER TABLE "marketing_pages"
    ADD COLUMN IF NOT EXISTS "contact_page_hero_title"          varchar DEFAULT 'Contact Us',
    ADD COLUMN IF NOT EXISTS "contact_page_hero_subtitle"       varchar DEFAULT 'Have a question or want to learn more? We''d love to hear from you.',
    ADD COLUMN IF NOT EXISTS "contact_page_name_placeholder"    varchar DEFAULT 'Your name',
    ADD COLUMN IF NOT EXISTS "contact_page_email_placeholder"   varchar DEFAULT 'your@email.com',
    ADD COLUMN IF NOT EXISTS "contact_page_company_placeholder" varchar DEFAULT 'Your company',
    ADD COLUMN IF NOT EXISTS "contact_page_message_placeholder" varchar DEFAULT 'How can we help?',
    ADD COLUMN IF NOT EXISTS "contact_page_submit_button_label" varchar DEFAULT 'Send Message',
    ADD COLUMN IF NOT EXISTS "contact_page_success_message"     varchar DEFAULT 'Thank you! We''ll get back to you within 24 hours.',
    ADD COLUMN IF NOT EXISTS "contact_page_response_note"       varchar DEFAULT 'We typically respond within 24 hours',

    ADD COLUMN IF NOT EXISTS "blog_page_hero_title"             varchar DEFAULT 'Blog',
    ADD COLUMN IF NOT EXISTS "blog_page_hero_subtitle"          varchar DEFAULT 'Insights, updates, and best practices',
    ADD COLUMN IF NOT EXISTS "blog_page_read_more_label"        varchar DEFAULT 'Read More',
    ADD COLUMN IF NOT EXISTS "blog_page_empty_state_heading"    varchar DEFAULT 'No Posts Yet',
    ADD COLUMN IF NOT EXISTS "blog_page_empty_state_message"    varchar DEFAULT 'We''re working on content. Check back soon for insights on strategic planning, AI, and more.',

    ADD COLUMN IF NOT EXISTS "product_overview_hero_title"              varchar DEFAULT 'Turn Insights into Plans',
    ADD COLUMN IF NOT EXISTS "product_overview_hero_subtitle"           varchar DEFAULT 'Capture organizational knowledge, build strategic plans with proven frameworks, and generate beautiful reports—all in one platform.',
    ADD COLUMN IF NOT EXISTS "product_overview_how_it_works_heading"    varchar DEFAULT 'How It Works',
    ADD COLUMN IF NOT EXISTS "product_overview_how_it_works_subheading" varchar DEFAULT 'Three simple steps to transform your planning process',

    ADD COLUMN IF NOT EXISTS "product_features_hero_title"              varchar DEFAULT 'Features',
    ADD COLUMN IF NOT EXISTS "product_features_hero_subtitle"           varchar DEFAULT 'Everything you need to transform strategic planning from a painful process into a competitive advantage',
    ADD COLUMN IF NOT EXISTS "product_features_problems_heading"        varchar DEFAULT 'Problems We Solve',
    ADD COLUMN IF NOT EXISTS "product_features_problems_subheading"     varchar DEFAULT 'Common challenges Insaplan addresses',

    ADD COLUMN IF NOT EXISTS "pricing_page_hero_title"                  varchar DEFAULT 'Pricing',
    ADD COLUMN IF NOT EXISTS "pricing_page_hero_subtitle"               varchar DEFAULT 'Simple, transparent pricing for teams of all sizes',
    ADD COLUMN IF NOT EXISTS "pricing_page_coming_soon_heading"         varchar DEFAULT 'Pricing Details Coming Soon',
    ADD COLUMN IF NOT EXISTS "pricing_page_coming_soon_message"         varchar DEFAULT 'We''re finalizing our pricing plans. Join the waitlist to be the first to know when pricing is available.',

    ADD COLUMN IF NOT EXISTS "legal_page_hero_title"                    varchar DEFAULT 'Legal',
    ADD COLUMN IF NOT EXISTS "legal_page_hero_subtitle"                 varchar DEFAULT 'Terms of Service and Privacy Policy',
    ADD COLUMN IF NOT EXISTS "legal_page_terms_content"                 jsonb,
    ADD COLUMN IF NOT EXISTS "legal_page_privacy_content"               jsonb,
    ADD COLUMN IF NOT EXISTS "legal_page_terms_coming_soon"             varchar DEFAULT 'Coming soon. Our terms of service are being finalized and will be available before launch.',
    ADD COLUMN IF NOT EXISTS "legal_page_privacy_coming_soon"           varchar DEFAULT 'Coming soon. Our privacy policy is being finalized and will be available before launch.',

    ADD COLUMN IF NOT EXISTS "support_page_hero_title"                  varchar DEFAULT 'Support',
    ADD COLUMN IF NOT EXISTS "support_page_hero_subtitle"               varchar DEFAULT 'We''re here to help you succeed with Insaplan',
    ADD COLUMN IF NOT EXISTS "support_page_coming_soon_message"         varchar DEFAULT 'Our support center is launching soon. In the meantime, feel free to reach out to us directly.',
    ADD COLUMN IF NOT EXISTS "support_page_contact_heading"             varchar DEFAULT 'Get in Touch',
    ADD COLUMN IF NOT EXISTS "support_page_contact_email"               varchar DEFAULT 'support@insaplan.com',

    ADD COLUMN IF NOT EXISTS "knowledge_base_page_hero_title"           varchar DEFAULT 'Knowledge Base',
    ADD COLUMN IF NOT EXISTS "knowledge_base_page_hero_subtitle"        varchar DEFAULT 'Learn how to get the most out of Insaplan',
    ADD COLUMN IF NOT EXISTS "knowledge_base_page_coming_soon_heading"  varchar DEFAULT 'Documentation Coming Soon',
    ADD COLUMN IF NOT EXISTS "knowledge_base_page_coming_soon_message"  varchar DEFAULT 'We''re building comprehensive documentation to help you get started with Insaplan. Check back soon!',

    ADD COLUMN IF NOT EXISTS "site_metadata_default_title"              varchar DEFAULT 'Insaplan',
    ADD COLUMN IF NOT EXISTS "site_metadata_default_description"        varchar DEFAULT 'AI-Powered Strategy Execution Platform';

  CREATE TABLE "marketing_pages_product_overview_steps" (
    "_order"      integer NOT NULL,
    "_parent_id"  integer NOT NULL,
    "id"          varchar PRIMARY KEY NOT NULL,
    "title"       varchar,
    "description" varchar
  );

  ALTER TABLE "marketing_pages_product_overview_steps"
    ADD CONSTRAINT "marketing_pages_product_overview_steps_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "marketing_pages"("id") ON DELETE cascade ON UPDATE no action;

  CREATE INDEX "marketing_pages_product_overview_steps_order_idx" ON "marketing_pages_product_overview_steps" USING btree ("_order");
  CREATE INDEX "marketing_pages_product_overview_steps_parent_id_idx" ON "marketing_pages_product_overview_steps" USING btree ("_parent_id");

  CREATE TABLE "marketing_pages_product_features_features" (
    "_order"      integer NOT NULL,
    "_parent_id"  integer NOT NULL,
    "id"          varchar PRIMARY KEY NOT NULL,
    "icon"        varchar,
    "title"       varchar,
    "description" varchar
  );

  ALTER TABLE "marketing_pages_product_features_features"
    ADD CONSTRAINT "marketing_pages_product_features_features_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "marketing_pages"("id") ON DELETE cascade ON UPDATE no action;

  CREATE INDEX "marketing_pages_product_features_features_order_idx" ON "marketing_pages_product_features_features" USING btree ("_order");
  CREATE INDEX "marketing_pages_product_features_features_parent_id_idx" ON "marketing_pages_product_features_features" USING btree ("_parent_id");

  CREATE TABLE "marketing_pages_product_features_features_benefits" (
    "_order"     integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "id"         varchar PRIMARY KEY NOT NULL,
    "label"      varchar
  );

  ALTER TABLE "marketing_pages_product_features_features_benefits"
    ADD CONSTRAINT "marketing_pages_product_features_features_benefits_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "marketing_pages_product_features_features"("id") ON DELETE cascade ON UPDATE no action;

  CREATE INDEX "marketing_pages_product_features_features_benefits_order_idx" ON "marketing_pages_product_features_features_benefits" USING btree ("_order");
  CREATE INDEX "marketing_pages_product_features_features_benefits_parent_id_idx" ON "marketing_pages_product_features_features_benefits" USING btree ("_parent_id");

  CREATE TABLE "marketing_pages_product_features_problems" (
    "_order"      integer NOT NULL,
    "_parent_id"  integer NOT NULL,
    "id"          varchar PRIMARY KEY NOT NULL,
    "problem"     varchar,
    "solution"    varchar
  );

  ALTER TABLE "marketing_pages_product_features_problems"
    ADD CONSTRAINT "marketing_pages_product_features_problems_parent_id_fk"
    FOREIGN KEY ("_parent_id") REFERENCES "marketing_pages"("id") ON DELETE cascade ON UPDATE no action;

  CREATE INDEX "marketing_pages_product_features_problems_order_idx" ON "marketing_pages_product_features_problems" USING btree ("_order");
  CREATE INDEX "marketing_pages_product_features_problems_parent_id_idx" ON "marketing_pages_product_features_problems" USING btree ("_parent_id");
    `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
  DROP TABLE IF EXISTS "marketing_pages_product_features_features_benefits" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_product_features_features" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_product_features_problems" CASCADE;
  DROP TABLE IF EXISTS "marketing_pages_product_overview_steps" CASCADE;

  ALTER TABLE "marketing_pages"
    DROP COLUMN IF EXISTS "contact_page_hero_title",
    DROP COLUMN IF EXISTS "contact_page_hero_subtitle",
    DROP COLUMN IF EXISTS "contact_page_name_placeholder",
    DROP COLUMN IF EXISTS "contact_page_email_placeholder",
    DROP COLUMN IF EXISTS "contact_page_company_placeholder",
    DROP COLUMN IF EXISTS "contact_page_message_placeholder",
    DROP COLUMN IF EXISTS "contact_page_submit_button_label",
    DROP COLUMN IF EXISTS "contact_page_success_message",
    DROP COLUMN IF EXISTS "contact_page_response_note",
    DROP COLUMN IF EXISTS "blog_page_hero_title",
    DROP COLUMN IF EXISTS "blog_page_hero_subtitle",
    DROP COLUMN IF EXISTS "blog_page_read_more_label",
    DROP COLUMN IF EXISTS "blog_page_empty_state_heading",
    DROP COLUMN IF EXISTS "blog_page_empty_state_message",
    DROP COLUMN IF EXISTS "product_overview_hero_title",
    DROP COLUMN IF EXISTS "product_overview_hero_subtitle",
    DROP COLUMN IF EXISTS "product_overview_how_it_works_heading",
    DROP COLUMN IF EXISTS "product_overview_how_it_works_subheading",
    DROP COLUMN IF EXISTS "product_features_hero_title",
    DROP COLUMN IF EXISTS "product_features_hero_subtitle",
    DROP COLUMN IF EXISTS "product_features_problems_heading",
    DROP COLUMN IF EXISTS "product_features_problems_subheading",
    DROP COLUMN IF EXISTS "pricing_page_hero_title",
    DROP COLUMN IF EXISTS "pricing_page_hero_subtitle",
    DROP COLUMN IF EXISTS "pricing_page_coming_soon_heading",
    DROP COLUMN IF EXISTS "pricing_page_coming_soon_message",
    DROP COLUMN IF EXISTS "legal_page_hero_title",
    DROP COLUMN IF EXISTS "legal_page_hero_subtitle",
    DROP COLUMN IF EXISTS "legal_page_terms_content",
    DROP COLUMN IF EXISTS "legal_page_privacy_content",
    DROP COLUMN IF EXISTS "legal_page_terms_coming_soon",
    DROP COLUMN IF EXISTS "legal_page_privacy_coming_soon",
    DROP COLUMN IF EXISTS "support_page_hero_title",
    DROP COLUMN IF EXISTS "support_page_hero_subtitle",
    DROP COLUMN IF EXISTS "support_page_coming_soon_message",
    DROP COLUMN IF EXISTS "support_page_contact_heading",
    DROP COLUMN IF EXISTS "support_page_contact_email",
    DROP COLUMN IF EXISTS "knowledge_base_page_hero_title",
    DROP COLUMN IF EXISTS "knowledge_base_page_hero_subtitle",
    DROP COLUMN IF EXISTS "knowledge_base_page_coming_soon_heading",
    DROP COLUMN IF EXISTS "knowledge_base_page_coming_soon_message",
    DROP COLUMN IF EXISTS "site_metadata_default_title",
    DROP COLUMN IF EXISTS "site_metadata_default_description";
    `)
}
