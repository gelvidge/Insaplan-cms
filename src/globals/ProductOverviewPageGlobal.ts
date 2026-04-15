import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const ProductOverviewPageGlobal: GlobalConfig = {
    slug: 'product-overview-page',
    label: 'Product Overview',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        // ── Hero ─────────────────────────────────────────────────────────────
        { name: 'heroTitle', type: 'text', defaultValue: 'Turn Insights into Plans' },
        {
            name: 'heroSubtitle',
            type: 'textarea',
            defaultValue: 'Capture organizational knowledge, build strategic plans with proven frameworks, and generate beautiful reports—all in one platform.',
        },
        // ── How It Works ─────────────────────────────────────────────────────
        { name: 'howItWorksHeading', type: 'text', defaultValue: 'How It Works' },
        { name: 'howItWorksSubheading', type: 'text', defaultValue: 'Three simple steps to transform your planning process' },
        {
            name: 'steps',
            type: 'array',
            labels: { singular: 'Step', plural: 'Steps' },
            fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
            ],
        },
        // ── Key Benefits ─────────────────────────────────────────────────────
        {
            name: 'keyBenefits',
            type: 'group',
            label: 'Key Benefits Section',
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
        // ── Features ─────────────────────────────────────────────────────────
        {
            name: 'featuresHeading', type: 'text', defaultValue: 'Features',
        },
        {
            name: 'featuresSubheading', type: 'textarea',
            defaultValue: 'Everything you need to transform strategic planning from a painful process into a competitive advantage',
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
                        { label: 'Chart Bar', value: 'chart-bar' },
                        { label: 'Palette', value: 'palette' },
                        { label: 'Brain', value: 'brain' },
                        { label: 'Adjustments', value: 'adjustments' },
                        { label: 'Books', value: 'books' },
                        { label: 'Database', value: 'database' },
                    ],
                },
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
                {
                    name: 'benefits',
                    type: 'array',
                    labels: { singular: 'Benefit', plural: 'Benefits' },
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },
        // ── Problems We Solve ─────────────────────────────────────────────────
        { name: 'problemsHeading', type: 'text', defaultValue: 'Problems We Solve' },
        { name: 'problemsSubheading', type: 'text', defaultValue: 'Common challenges Insaplan addresses' },
        {
            name: 'problems',
            type: 'array',
            labels: { singular: 'Problem', plural: 'Problems' },
            fields: [
                { name: 'problem', type: 'textarea', required: true },
                { name: 'solution', type: 'textarea', required: true },
            ],
        },
        // ── Comparison Table ─────────────────────────────────────────────────
        {
            name: 'comparisonTable',
            type: 'group',
            label: 'Comparison Table Section',
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
    ],
}
