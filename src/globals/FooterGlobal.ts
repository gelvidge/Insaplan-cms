import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const FooterGlobal: GlobalConfig = {
    slug: 'footer',
    label: 'Footer',
    admin: {
        group: 'Configuration',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        {
            name: 'logoText',
            type: 'text',
            defaultValue: 'Insaplan',
            admin: { description: 'Brand name shown as logo text in nav and footer' },
        },
        {
            name: 'navCtaLabel',
            type: 'text',
            defaultValue: 'Request Access',
            admin: { description: 'Label for the primary CTA button in the navigation bar' },
        },
        {
            name: 'navCtaUrl',
            type: 'text',
            defaultValue: '/contact',
            admin: { description: 'URL for the navigation CTA button' },
        },
        {
            name: 'tagline',
            type: 'text',
            defaultValue: 'Turn Insights into Plans. Strategic planning and reporting made simple.',
        },
        {
            name: 'copyrightName',
            type: 'text',
            defaultValue: 'Insaplan',
            admin: { description: 'Name used in the copyright line (e.g. "Insaplan")' },
        },
        {
            name: 'copyrightSuffix',
            type: 'text',
            defaultValue: 'All Rights Reserved.',
            admin: { description: 'Text after the year and company name in the copyright line' },
        },
        {
            name: 'linkGroups',
            type: 'array',
            labels: { singular: 'Link Group', plural: 'Link Groups' },
            fields: [
                {
                    name: 'heading',
                    type: 'text',
                    required: true,
                    admin: { description: 'Category heading (e.g. "Product")' },
                },
                {
                    name: 'links',
                    type: 'array',
                    labels: { singular: 'Link', plural: 'Links' },
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'url', type: 'text', required: true },
                    ],
                },
            ],
        },
    ],
}
