import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

/**
 * Shared homepage sections — Social Proof, Key Benefits, Comparison Table, Solutions tabs.
 * Individual page copy (Contact, Blog, Pricing, etc.) lives in their own globals.
 */
export const MarketingPages: GlobalConfig = {
    slug: 'marketing-pages',
    label: 'Homepage Sections',
    admin: {
        group: 'Marketing',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        // ── Social Proof ──────────────────────────────────────────────────
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
        // ── Key Benefits ──────────────────────────────────────────────────
        {
            name: 'keyBenefits',
            type: 'group',
            label: 'Key Benefits',
            fields: [
                { name: 'heading', type: 'text', defaultValue: 'Key Benefits' },
                { name: 'subheading', type: 'text', defaultValue: 'Everything you need to transform your planning process' },
                {
                    name: 'benefits',
                    type: 'array',
                    labels: { singular: 'Benefit', plural: 'Benefits' },
                    fields: [
                        {
                            name: 'icon',
                            type: 'select',
                            options: [
                                { label: 'Clock', value: 'clock' },
                                { label: 'Palette', value: 'palette' },
                                { label: 'Adjustments', value: 'adjustments' },
                                { label: 'Books', value: 'books' },
                                { label: 'Database', value: 'database' },
                                { label: 'Sparkles', value: 'sparkles' },
                            ],
                        },
                        { name: 'title', type: 'text', required: true },
                        { name: 'description', type: 'textarea', required: true },
                    ],
                },
            ],
        },
        // ── Comparison Table ──────────────────────────────────────────────
        {
            name: 'comparisonTable',
            type: 'group',
            label: 'Comparison Table',
            fields: [
                { name: 'heading', type: 'text', defaultValue: 'Why Insaplan vs. Traditional Methods' },
                { name: 'subheading', type: 'text', defaultValue: 'See how Insaplan compares to traditional planning tools' },
                {
                    name: 'columns',
                    type: 'array',
                    labels: { singular: 'Column', plural: 'Columns' },
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
                {
                    name: 'rows',
                    type: 'array',
                    labels: { singular: 'Row', plural: 'Rows' },
                    fields: [
                        { name: 'aspect', type: 'text', required: true },
                        {
                            name: 'values',
                            type: 'array',
                            labels: { singular: 'Value', plural: 'Values' },
                            fields: [
                                {
                                    name: 'value',
                                    type: 'select',
                                    options: [
                                        { label: 'Yes', value: 'true' },
                                        { label: 'No', value: 'false' },
                                        { label: 'Limited', value: 'limited' },
                                    ],
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ── Solutions Section ─────────────────────────────────────────────
        {
            name: 'solutionsSection',
            type: 'group',
            label: 'Solutions Section',
            fields: [
                { name: 'heading', type: 'text', defaultValue: 'Solutions by Use Case' },
                { name: 'subheading', type: 'text', defaultValue: 'Tailored for your industry and organizational needs' },
                {
                    name: 'solutions',
                    type: 'array',
                    labels: { singular: 'Solution', plural: 'Solutions' },
                    fields: [
                        { name: 'tabKey', type: 'text', required: true, admin: { description: 'Unique key for the tab (e.g. "sales", "marketing")' } },
                        { name: 'title', type: 'text', required: true },
                        { name: 'tagline', type: 'text', required: true },
                        { name: 'image', type: 'upload', relationTo: 'media' },
                        {
                            name: 'useCases',
                            type: 'array',
                            labels: { singular: 'Use Case', plural: 'Use Cases' },
                            fields: [{ name: 'label', type: 'text' }],
                        },
                        {
                            name: 'values',
                            type: 'array',
                            label: 'Value Points',
                            labels: { singular: 'Value Point', plural: 'Value Points' },
                            fields: [{ name: 'label', type: 'text' }],
                        },
                    ],
                },
            ],
        },
    ],
}
