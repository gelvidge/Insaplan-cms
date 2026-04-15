-- Marketing Home global tables (manual apply for Postgres / Supabase)
-- Generated from `src/migrations/20260409_120000.ts`

SET search_path = public;

BEGIN;

DO $$
BEGIN
  CREATE TYPE "public"."enum_marketing_home_hero_trust_signals_icon" AS ENUM ('sparkles', 'template', 'cards', 'building');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  CREATE TYPE "public"."enum_marketing_home_core_features_features_icon" AS ENUM ('bulb', 'target', 'report');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

CREATE TABLE IF NOT EXISTS "marketing_home" (
  "id" serial PRIMARY KEY NOT NULL,
  "hero_eyebrow" varchar DEFAULT 'AI-powered planning',
  "hero_badge" varchar DEFAULT 'Launching Soon',
  "hero_headline" varchar DEFAULT 'Turn insights into actionable plans',
  "hero_subtitle" varchar DEFAULT 'Capture insights as beautiful infographics, charts, and tables. Build and iterate plans fast with hundreds of predefined templates, then report and track execution.',
  "core_features_kicker" varchar DEFAULT 'Built for clarity',
  "core_features_heading" varchar DEFAULT 'Different by design.',
  "core_features_description" varchar DEFAULT 'Bring knowledge, planning, and reporting together with curated insights and flexible building blocks.',
  "cta_title" varchar DEFAULT 'Build better plans, faster',
  "cta_description" varchar DEFAULT 'Join the waitlist for early access to curated insights, flexible templates, and rapid iteration across strategy, planning, and project management.',
  "cta_email_placeholder" varchar DEFAULT 'Enter your email',
  "cta_button_label" varchar DEFAULT 'Join Waitlist',
  "cta_note" varchar DEFAULT 'Get notified when we launch - no spam, ever',
  "updated_at" timestamp(3) with time zone,
  "created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "marketing_home_hero_pillars" (
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id" varchar PRIMARY KEY NOT NULL,
  "label" varchar
);

CREATE TABLE IF NOT EXISTS "marketing_home_hero_use_cases" (
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id" varchar PRIMARY KEY NOT NULL,
  "label" varchar
);

CREATE TABLE IF NOT EXISTS "marketing_home_hero_trust_signals" (
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id" varchar PRIMARY KEY NOT NULL,
  "icon" "enum_marketing_home_hero_trust_signals_icon",
  "label" varchar
);

CREATE TABLE IF NOT EXISTS "marketing_home_hero_carousel_slides" (
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id" varchar PRIMARY KEY NOT NULL,
  "title" varchar,
  "description" varchar,
  "image_id" integer
);

CREATE TABLE IF NOT EXISTS "marketing_home_core_features_features" (
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id" varchar PRIMARY KEY NOT NULL,
  "icon" "enum_marketing_home_core_features_features_icon",
  "title" varchar,
  "description" varchar
);

CREATE TABLE IF NOT EXISTS "marketing_home_core_features_features_capabilities" (
  "_order" integer NOT NULL,
  "_parent_id" varchar NOT NULL,
  "id" varchar PRIMARY KEY NOT NULL,
  "label" varchar
);

CREATE TABLE IF NOT EXISTS "marketing_home_core_features_features_visuals" (
  "_order" integer NOT NULL,
  "_parent_id" varchar NOT NULL,
  "id" varchar PRIMARY KEY NOT NULL,
  "label" varchar,
  "image_id" integer
);

-- Foreign keys (may fail if already present; run once on a fresh schema)
ALTER TABLE "marketing_home_hero_pillars"
  ADD CONSTRAINT "marketing_home_hero_pillars_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_home"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "marketing_home_hero_use_cases"
  ADD CONSTRAINT "marketing_home_hero_use_cases_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_home"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "marketing_home_hero_trust_signals"
  ADD CONSTRAINT "marketing_home_hero_trust_signals_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_home"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "marketing_home_hero_carousel_slides"
  ADD CONSTRAINT "marketing_home_hero_carousel_slides_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_home"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "marketing_home_hero_carousel_slides"
  ADD CONSTRAINT "marketing_home_hero_carousel_slides_image_id_media_id_fk"
  FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;

ALTER TABLE "marketing_home_core_features_features"
  ADD CONSTRAINT "marketing_home_core_features_features_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_home"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "marketing_home_core_features_features_capabilities"
  ADD CONSTRAINT "marketing_home_core_features_features_capabilities_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_home_core_features_features"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "marketing_home_core_features_features_visuals"
  ADD CONSTRAINT "marketing_home_core_features_features_visuals_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_home_core_features_features"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "marketing_home_core_features_features_visuals"
  ADD CONSTRAINT "marketing_home_core_features_features_visuals_image_id_media_id_fk"
  FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;

CREATE INDEX IF NOT EXISTS "marketing_home_hero_pillars_order_idx" ON "marketing_home_hero_pillars" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_home_hero_pillars_parent_id_idx" ON "marketing_home_hero_pillars" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_home_hero_use_cases_order_idx" ON "marketing_home_hero_use_cases" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_home_hero_use_cases_parent_id_idx" ON "marketing_home_hero_use_cases" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_home_hero_trust_signals_order_idx" ON "marketing_home_hero_trust_signals" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_home_hero_trust_signals_parent_id_idx" ON "marketing_home_hero_trust_signals" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_home_hero_carousel_slides_order_idx" ON "marketing_home_hero_carousel_slides" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_home_hero_carousel_slides_parent_id_idx" ON "marketing_home_hero_carousel_slides" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_home_hero_carousel_slides_image_idx" ON "marketing_home_hero_carousel_slides" USING btree ("image_id");

CREATE INDEX IF NOT EXISTS "marketing_home_core_features_features_order_idx" ON "marketing_home_core_features_features" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_home_core_features_features_parent_id_idx" ON "marketing_home_core_features_features" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_home_core_features_features_capabilities_order_idx" ON "marketing_home_core_features_features_capabilities" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_home_core_features_features_capabilities_parent_id_idx" ON "marketing_home_core_features_features_capabilities" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_home_core_features_features_visuals_order_idx" ON "marketing_home_core_features_features_visuals" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "marketing_home_core_features_features_visuals_parent_id_idx" ON "marketing_home_core_features_features_visuals" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "marketing_home_core_features_features_visuals_image_idx" ON "marketing_home_core_features_features_visuals" USING btree ("image_id");

COMMIT;

