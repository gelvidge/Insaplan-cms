import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const ProductReportingPageGlobal: GlobalConfig = {
    slug: 'product-reporting-page',
    label: 'Product — Reporting',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text', defaultValue: 'Reporting' },
        { name: 'heroSubtitle', type: 'textarea', defaultValue: 'Track execution, measure impact, and communicate progress with beautiful real-time dashboards and reports.' },
        { name: 'sectionHeading', type: 'text', defaultValue: 'From plan to proof' },
        { name: 'sectionSubheading', type: 'text', defaultValue: 'Real-time dashboards, progress tracking, and reports that tell the full story' },
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
