import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const MarketingHome: GlobalConfig = {
    slug: 'marketing-home',
    label: 'Home',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        // ── Hero ─────────────────────────────────────────────────────────────
        {
            name: 'hero',
            type: 'group',
            label: 'Hero',
            fields: [
                { name: 'eyebrow', type: 'text', defaultValue: 'AI-powered planning' },
                { name: 'badge', type: 'text', defaultValue: 'Launching Soon' },
                { name: 'headline', type: 'text', defaultValue: 'Turn insights into actionable plans' },
                {
                    name: 'subtitle',
                    type: 'textarea',
                    defaultValue: 'Capture insights as beautiful infographics, charts, and tables. Build and iterate plans fast with hundreds of predefined templates, then report and track execution.',
                },
                {
                    name: 'pillars',
                    type: 'array',
                    labels: { singular: 'Pillar', plural: 'Pillars' },
                    fields: [{ name: 'label', type: 'text' }],
                },
                {
                    name: 'useCases',
                    type: 'array',
                    labels: { singular: 'Use Case', plural: 'Use Cases' },
                    fields: [{ name: 'label', type: 'text' }],
                },
                {
                    name: 'trustSignals',
                    type: 'array',
                    labels: { singular: 'Trust Signal', plural: 'Trust Signals' },
                    fields: [
                        {
                            name: 'icon',
                            type: 'select',
                            options: [
                                { label: 'Sparkles', value: 'sparkles' },
                                { label: 'Template', value: 'template' },
                                { label: 'Cards', value: 'cards' },
                                { label: 'Building', value: 'building' },
                            ],
                        },
                        { name: 'label', type: 'text' },
                    ],
                },
                {
                    name: 'carouselSlides',
                    type: 'array',
                    labels: { singular: 'Slide', plural: 'Slides' },
                    fields: [
                        { name: 'title', type: 'text' },
                        { name: 'description', type: 'textarea' },
                        {
                            name: 'image',
                            type: 'upload',
                            relationTo: 'media',
                            admin: { description: 'Optional screenshot/image for this slide' },
                        },
                    ],
                },
            ],
        },
        // ── Core Features ─────────────────────────────────────────────────────
        {
            name: 'coreFeatures',
            type: 'group',
            label: 'Core Features',
            fields: [
                { name: 'kicker', type: 'text', defaultValue: 'Built for clarity' },
                { name: 'heading', type: 'text', defaultValue: 'Different by design.' },
                {
                    name: 'description',
                    type: 'textarea',
                    defaultValue: 'Bring knowledge, planning, and reporting together with curated insights and flexible building blocks.',
                },
                {
                    name: 'features',
                    type: 'array',
                    labels: { singular: 'Feature', plural: 'Features' },
                    fields: [
                        {
                            name: 'icon',
                            type: 'select',
                            options: [
                                { label: 'Bulb', value: 'bulb' },
                                { label: 'Target', value: 'target' },
                                { label: 'Report', value: 'report' },
                            ],
                        },
                        { name: 'title', type: 'text' },
                        { name: 'description', type: 'textarea' },
                        {
                            name: 'capabilities',
                            type: 'array',
                            labels: { singular: 'Capability', plural: 'Capabilities' },
                            fields: [{ name: 'label', type: 'text' }],
                        },
                        {
                            name: 'visuals',
                            type: 'array',
                            labels: { singular: 'Visual', plural: 'Visuals' },
                            maxRows: 3,
                            fields: [
                                { name: 'label', type: 'text' },
                                {
                                    name: 'image',
                                    type: 'upload',
                                    relationTo: 'media',
                                    admin: { description: 'Optional screenshot for this visual card' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ── Social Proof ──────────────────────────────────────────────────────
        {
            name: 'socialProof',
            type: 'group',
            label: 'Social Proof',
            fields: [
                { name: 'heading', type: 'text', defaultValue: 'Trusted by Teams Worldwide' },
                { name: 'subheading', type: 'text', defaultValue: 'Join thousands of teams executing strategy with confidence' },
                { name: 'logosLabel', type: 'text', defaultValue: 'TRUSTED BY LEADING ORGANIZATIONS' },
                {
                    name: 'customerLogos',
                    type: 'array',
                    labels: { singular: 'Logo', plural: 'Logos' },
                    fields: [
                        { name: 'companyName', type: 'text', required: true },
                        { name: 'logo', type: 'upload', relationTo: 'media' },
                    ],
                },
            ],
        },
        // ── CTA ───────────────────────────────────────────────────────────────
        {
            name: 'cta',
            type: 'group',
            label: 'CTA',
            fields: [
                { name: 'title', type: 'text', defaultValue: 'Build better plans, faster' },
                {
                    name: 'description',
                    type: 'textarea',
                    defaultValue: 'Join the waitlist for early access to curated insights, flexible templates, and rapid iteration across strategy, planning, and project management.',
                },
                { name: 'emailPlaceholder', type: 'text', defaultValue: 'Enter your email' },
                { name: 'buttonLabel', type: 'text', defaultValue: 'Join Waitlist' },
                { name: 'note', type: 'text', defaultValue: 'Get notified when we launch - no spam, ever' },
            ],
        },
    ],
}
