-- Split marketing_pages monolith into separate globals
-- Creates individual tables for: footer, contact_page, blog_page, pricing_page,
-- legal_page, support_page, knowledge_base_page, site_metadata,
-- product_overview_page, product_features_page
-- The existing marketing_pages table is kept for homepage sections (social proof,
-- key benefits, comparison table, solutions) — no data loss.

SET search_path = public;

BEGIN;

-- ── Footer ────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS "footer" (
  "id"             serial PRIMARY KEY,
  "tagline"        varchar DEFAULT 'Turn Insights into Plans. Strategic planning and reporting made simple.',
  "copyright_name" varchar DEFAULT 'Insaplan',
  "updated_at"     timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at"     timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "footer_link_groups" (
  "_order"     integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id"         varchar PRIMARY KEY NOT NULL,
  "heading"    varchar
);
ALTER TABLE "footer_link_groups"
  ADD CONSTRAINT "footer_link_groups_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
CREATE INDEX IF NOT EXISTS "footer_link_groups_order_idx" ON "footer_link_groups" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "footer_link_groups_parent_id_idx" ON "footer_link_groups" USING btree ("_parent_id");

CREATE TABLE IF NOT EXISTS "footer_link_groups_links" (
  "_order"     integer NOT NULL,
  "_parent_id" varchar NOT NULL,
  "id"         varchar PRIMARY KEY NOT NULL,
  "label"      varchar,
  "url"        varchar
);
ALTER TABLE "footer_link_groups_links"
  ADD CONSTRAINT "footer_link_groups_links_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "footer_link_groups"("id") ON DELETE cascade ON UPDATE no action;
CREATE INDEX IF NOT EXISTS "footer_link_groups_links_order_idx" ON "footer_link_groups_links" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "footer_link_groups_links_parent_id_idx" ON "footer_link_groups_links" USING btree ("_parent_id");

-- ── Contact Page ──────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS "contact_page" (
  "id"                    serial PRIMARY KEY,
  "hero_title"            varchar DEFAULT 'Contact Us',
  "hero_subtitle"         varchar DEFAULT 'Have a question or want to learn more? We''d love to hear from you.',
  "name_placeholder"      varchar DEFAULT 'Your name',
  "email_placeholder"     varchar DEFAULT 'your@email.com',
  "company_placeholder"   varchar DEFAULT 'Your company',
  "message_placeholder"   varchar DEFAULT 'How can we help?',
  "submit_button_label"   varchar DEFAULT 'Send Message',
  "success_message"       varchar DEFAULT 'Thank you! We''ll get back to you within 24 hours.',
  "response_note"         varchar DEFAULT 'We typically respond within 24 hours',
  "updated_at"            timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at"            timestamp(3) with time zone DEFAULT now() NOT NULL
);

-- ── Blog Page ─────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS "blog_page" (
  "id"                   serial PRIMARY KEY,
  "hero_title"           varchar DEFAULT 'Blog',
  "hero_subtitle"        varchar DEFAULT 'Insights, updates, and best practices',
  "read_more_label"      varchar DEFAULT 'Read More',
  "empty_state_heading"  varchar DEFAULT 'No Posts Yet',
  "empty_state_message"  varchar DEFAULT 'We''re working on content. Check back soon for insights on strategic planning, AI, and more.',
  "updated_at"           timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at"           timestamp(3) with time zone DEFAULT now() NOT NULL
);

-- ── Pricing Page ──────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS "pricing_page" (
  "id"                    serial PRIMARY KEY,
  "hero_title"            varchar DEFAULT 'Pricing',
  "hero_subtitle"         varchar DEFAULT 'Simple, transparent pricing for teams of all sizes',
  "coming_soon_heading"   varchar DEFAULT 'Pricing Details Coming Soon',
  "coming_soon_message"   varchar DEFAULT 'We''re finalizing our pricing plans. Join the waitlist to be the first to know when pricing is available.',
  "updated_at"            timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at"            timestamp(3) with time zone DEFAULT now() NOT NULL
);

-- ── Legal Page ────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS "legal_page" (
  "id"                  serial PRIMARY KEY,
  "hero_title"          varchar DEFAULT 'Legal',
  "hero_subtitle"       varchar DEFAULT 'Terms of Service and Privacy Policy',
  "terms_content"       jsonb,
  "privacy_content"     jsonb,
  "terms_coming_soon"   varchar DEFAULT 'Coming soon. Our terms of service are being finalized and will be available before launch.',
  "privacy_coming_soon" varchar DEFAULT 'Coming soon. Our privacy policy is being finalized and will be available before launch.',
  "updated_at"          timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at"          timestamp(3) with time zone DEFAULT now() NOT NULL
);

-- ── Support Page ──────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS "support_page" (
  "id"                   serial PRIMARY KEY,
  "hero_title"           varchar DEFAULT 'Support',
  "hero_subtitle"        varchar DEFAULT 'We''re here to help you succeed with Insaplan',
  "coming_soon_message"  varchar DEFAULT 'Our support center is launching soon. In the meantime, feel free to reach out to us directly.',
  "contact_heading"      varchar DEFAULT 'Get in Touch',
  "contact_email"        varchar DEFAULT 'support@insaplan.com',
  "updated_at"           timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at"           timestamp(3) with time zone DEFAULT now() NOT NULL
);

-- ── Knowledge Base Page ───────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS "knowledge_base_page" (
  "id"                    serial PRIMARY KEY,
  "hero_title"            varchar DEFAULT 'Knowledge Base',
  "hero_subtitle"         varchar DEFAULT 'Learn how to get the most out of Insaplan',
  "coming_soon_heading"   varchar DEFAULT 'Documentation Coming Soon',
  "coming_soon_message"   varchar DEFAULT 'We''re building comprehensive documentation to help you get started with Insaplan. Check back soon!',
  "updated_at"            timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at"            timestamp(3) with time zone DEFAULT now() NOT NULL
);

-- ── Site Metadata ─────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS "site_metadata" (
  "id"                  serial PRIMARY KEY,
  "default_title"       varchar DEFAULT 'Insaplan',
  "default_description" varchar DEFAULT 'AI-Powered Strategy Execution Platform',
  "updated_at"          timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at"          timestamp(3) with time zone DEFAULT now() NOT NULL
);

-- ── Product Overview Page ─────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS "product_overview_page" (
  "id"                        serial PRIMARY KEY,
  "hero_title"                varchar DEFAULT 'Turn Insights into Plans',
  "hero_subtitle"             varchar DEFAULT 'Capture organizational knowledge, build strategic plans with proven frameworks, and generate beautiful reports—all in one platform.',
  "how_it_works_heading"      varchar DEFAULT 'How It Works',
  "how_it_works_subheading"   varchar DEFAULT 'Three simple steps to transform your planning process',
  "updated_at"                timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at"                timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "product_overview_page_steps" (
  "_order"      integer NOT NULL,
  "_parent_id"  integer NOT NULL,
  "id"          varchar PRIMARY KEY NOT NULL,
  "title"       varchar,
  "description" varchar
);
ALTER TABLE "product_overview_page_steps"
  ADD CONSTRAINT "product_overview_page_steps_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "product_overview_page"("id") ON DELETE cascade ON UPDATE no action;
CREATE INDEX IF NOT EXISTS "product_overview_page_steps_order_idx" ON "product_overview_page_steps" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "product_overview_page_steps_parent_id_idx" ON "product_overview_page_steps" USING btree ("_parent_id");

-- ── Product Features Page ─────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS "product_features_page" (
  "id"                    serial PRIMARY KEY,
  "hero_title"            varchar DEFAULT 'Features',
  "hero_subtitle"         varchar DEFAULT 'Everything you need to transform strategic planning from a painful process into a competitive advantage',
  "problems_heading"      varchar DEFAULT 'Problems We Solve',
  "problems_subheading"   varchar DEFAULT 'Common challenges Insaplan addresses',
  "updated_at"            timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at"            timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "product_features_page_features" (
  "_order"      integer NOT NULL,
  "_parent_id"  integer NOT NULL,
  "id"          varchar PRIMARY KEY NOT NULL,
  "icon"        varchar,
  "title"       varchar,
  "description" varchar
);
ALTER TABLE "product_features_page_features"
  ADD CONSTRAINT "product_features_page_features_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "product_features_page"("id") ON DELETE cascade ON UPDATE no action;
CREATE INDEX IF NOT EXISTS "product_features_page_features_order_idx" ON "product_features_page_features" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "product_features_page_features_parent_id_idx" ON "product_features_page_features" USING btree ("_parent_id");

CREATE TABLE IF NOT EXISTS "product_features_page_features_benefits" (
  "_order"     integer NOT NULL,
  "_parent_id" varchar NOT NULL,
  "id"         varchar PRIMARY KEY NOT NULL,
  "label"      varchar
);
ALTER TABLE "product_features_page_features_benefits"
  ADD CONSTRAINT "product_features_page_features_benefits_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "product_features_page_features"("id") ON DELETE cascade ON UPDATE no action;
CREATE INDEX IF NOT EXISTS "product_features_page_features_benefits_order_idx" ON "product_features_page_features_benefits" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "product_features_page_features_benefits_parent_id_idx" ON "product_features_page_features_benefits" USING btree ("_parent_id");

CREATE TABLE IF NOT EXISTS "product_features_page_problems" (
  "_order"      integer NOT NULL,
  "_parent_id"  integer NOT NULL,
  "id"          varchar PRIMARY KEY NOT NULL,
  "problem"     varchar,
  "solution"    varchar
);
ALTER TABLE "product_features_page_problems"
  ADD CONSTRAINT "product_features_page_problems_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "product_features_page"("id") ON DELETE cascade ON UPDATE no action;
CREATE INDEX IF NOT EXISTS "product_features_page_problems_order_idx" ON "product_features_page_problems" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "product_features_page_problems_parent_id_idx" ON "product_features_page_problems" USING btree ("_parent_id");

COMMIT;
