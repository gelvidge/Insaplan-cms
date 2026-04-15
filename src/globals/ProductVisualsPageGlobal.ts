import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const ProductVisualsPageGlobal: GlobalConfig = {
    slug: 'product-visuals-page',
    label: 'Product — Visuals',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text', defaultValue: 'Visuals' },
        { name: 'heroSubtitle', type: 'textarea', defaultValue: 'Create stunning infographics, charts, and presentations that make your strategy impossible to ignore.' },
        { name: 'sectionHeading', type: 'text', defaultValue: 'Strategy that speaks for itself' },
        { name: 'sectionSubheading', type: 'text', defaultValue: 'Professional templates, custom branding, beautiful outputs' },
        {
            name: 'features',
            type: 'array',
            labels: { singular: 'Feature', plural: 'Features' },
            fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
            ],
        },
    ],
}
