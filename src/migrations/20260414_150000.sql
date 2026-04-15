-- Migration: add solutions_page global table
CREATE TABLE IF NOT EXISTS solutions_page (
    id              SERIAL PRIMARY KEY,
    hero_title      VARCHAR,
    hero_subtitle   VARCHAR,
    section_heading VARCHAR,
    section_subheading VARCHAR,
    updated_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
