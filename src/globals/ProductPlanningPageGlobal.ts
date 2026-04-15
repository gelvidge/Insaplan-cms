import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const ProductPlanningPageGlobal: GlobalConfig = {
    slug: 'product-planning-page',
    label: 'Product — Planning',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text', defaultValue: 'Planning' },
        { name: 'heroSubtitle', type: 'textarea', defaultValue: 'Build strategic plans with proven frameworks and AI assistance — faster than ever before.' },
        { name: 'sectionHeading', type: 'text', defaultValue: 'From insight to action plan' },
        { name: 'sectionSubheading', type: 'text', defaultValue: 'Proven frameworks, flexible templates, AI-powered recommendations' },
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
