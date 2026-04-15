import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const BlogPageGlobal: GlobalConfig = {
    slug: 'blog-page',
    label: 'Blog',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text', defaultValue: 'Blog' },
        {
            name: 'heroSubtitle',
            type: 'text',
            defaultValue: 'Insights, updates, and best practices',
        },
        { name: 'readMoreLabel', type: 'text', defaultValue: 'Read article →' },
        { name: 'emptyStateHeading', type: 'text', defaultValue: 'No Posts Yet' },
        {
            name: 'emptyStateMessage',
            type: 'textarea',
            defaultValue:
                "We're working on content. Check back soon for insights on strategic planning, AI, and more.",
        },
        {
            name: 'categoryLabels',
            type: 'array',
            label: 'Category Labels',
            admin: {
                description: 'Map blog category slugs to display labels.',
            },
            fields: [
                {
                    name: 'slug',
                    type: 'text',
                    required: true,
                    admin: { description: 'Category slug as stored on posts (e.g. "product-updates")' },
                },
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                    admin: { description: 'Display label shown in the UI (e.g. "Product Updates")' },
                },
            ],
            defaultValue: [
                { slug: 'product-updates', label: 'Product Updates' },
                { slug: 'company-news', label: 'Company News' },
                { slug: 'best-practices', label: 'Best Practices' },
                { slug: 'case-studies', label: 'Case Studies' },
                { slug: 'industry-insights', label: 'Industry Insights' },
            ],
        },
    ],
}
