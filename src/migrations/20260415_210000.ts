import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Enable Row Level Security on all public tables.
 * Supabase flags tables without RLS as a security risk.
 *
 * Payload CMS accesses the DB via the service role (bypasses RLS), so
 * enabling RLS does not affect CMS reads/writes. Direct client connections
 * (e.g. anon key) will have no access unless explicit policies are added.
 */

const tables = [
    '_blog_posts_v',
    '_blog_posts_v_texts',
    '_knowledge_base_v',
    '_knowledge_base_v_rels',
    '_knowledge_base_v_texts',
    '_pages_v',
    '_pages_v_texts',
    '_solutions_v',
    '_solutions_v_rels',
    '_solutions_v_texts',
    '_solutions_v_version_challenges',
    '_solutions_v_version_hero_steps',
    '_solutions_v_version_key_features',
    '_solutions_v_version_use_cases',
    'blog_page',
    'blog_page_category_labels',
    'blog_posts',
    'blog_posts_texts',
    'changelog',
    'changelog_changes',
    'contact_page',
    'faqs',
    'faqs_page',
    'faqs_page_category_labels',
    'faqs_rels',
    'footer',
    'footer_link_groups',
    'footer_link_groups_links',
    'form_submissions',
    'knowledge_base',
    'knowledge_base_page',
    'knowledge_base_rels',
    'knowledge_base_texts',
    'legal_page',
    'marketing_home',
    'marketing_home_core_features_features',
    'marketing_home_core_features_features_capabilities',
    'marketing_home_core_features_features_visuals',
    'marketing_home_hero_carousel_slides',
    'marketing_home_hero_pillars',
    'marketing_home_hero_trust_signals',
    'marketing_home_hero_use_cases',
    'marketing_home_social_proof_customer_logos',
    'marketing_pages',
    'marketing_pages_comparison_table_columns',
    'marketing_pages_comparison_table_rows',
    'marketing_pages_comparison_table_rows_values',
    'marketing_pages_footer_link_groups',
    'marketing_pages_footer_link_groups_links',
    'marketing_pages_key_benefits_benefits',
    'marketing_pages_product_features_features',
    'marketing_pages_product_features_features_benefits',
    'marketing_pages_product_features_problems',
    'marketing_pages_product_overview_steps',
    'marketing_pages_social_proof_customer_logos',
    'marketing_pages_solutions_section_solutions',
    'marketing_pages_solutions_section_solutions_use_cases',
    'marketing_pages_solutions_section_solutions_values',
    'media',
    'navigation_menus',
    'navigation_menus_items',
    'navigation_menus_items_children',
    'pages',
    'pages_texts',
    'payload_kv',
    'payload_locked_documents',
    'payload_locked_documents_rels',
    'payload_migrations',
    'payload_preferences',
    'payload_preferences_rels',
    'pricing_page',
    'pricing_plans',
    'pricing_plans_features',
    'product_features_page',
    'product_features_page_features',
    'product_features_page_features_benefits',
    'product_features_page_problems',
    'product_knowledge_base_page',
    'product_knowledge_base_page_features',
    'product_overview_page',
    'product_overview_page_comparison_table_columns',
    'product_overview_page_comparison_table_rows',
    'product_overview_page_comparison_table_rows_values',
    'product_overview_page_features',
    'product_overview_page_features_benefits',
    'product_overview_page_key_benefits_benefits',
    'product_overview_page_problems',
    'product_overview_page_steps',
    'product_planning_page',
    'product_planning_page_features',
    'product_reporting_page',
    'product_reporting_page_features',
    'product_visuals_page',
    'product_visuals_page_features',
    'site_metadata',
    'site_settings',
    'solutions',
    'solutions_challenges',
    'solutions_hero_steps',
    'solutions_key_features',
    'solutions_page',
    'solutions_page_solution_links',
    'solutions_rels',
    'solutions_texts',
    'solutions_use_cases',
    'support_page',
    'users',
    'users_sessions',
]

export async function up({ db }: MigrateUpArgs): Promise<void> {
    for (const table of tables) {
        // sql.raw bypasses parameterisation — safe here as table names are hardcoded strings
        await db.execute(sql.raw(`ALTER TABLE "public"."${table}" ENABLE ROW LEVEL SECURITY`))
    }
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    for (const table of tables) {
        await db.execute(sql.raw(`ALTER TABLE "public"."${table}" DISABLE ROW LEVEL SECURITY`))
    }
}
