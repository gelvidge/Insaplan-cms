import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const ProductKnowledgeBasePageGlobal: GlobalConfig = {
    slug: 'product-knowledge-base-page',
    label: 'Product — Knowledge Base',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text', defaultValue: 'Knowledge Base' },
        { name: 'heroSubtitle', type: 'textarea', defaultValue: 'Centralize organizational knowledge, market data, and research into a searchable intelligence hub.' },
        { name: 'sectionHeading', type: 'text', defaultValue: 'Everything you know, in one place' },
        { name: 'sectionSubheading', type: 'text', defaultValue: 'Stop losing insights across emails, docs, and spreadsheets' },
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
