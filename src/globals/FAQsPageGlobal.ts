import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const FAQsPageGlobal: GlobalConfig = {
    slug: 'faqs-page',
    label: 'FAQs',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        { name: 'heroTitle',         type: 'text' },
        { name: 'heroSubtitle',      type: 'text' },
        { name: 'emptyStateMessage', type: 'text', admin: { description: 'Shown when there are no FAQs in the system' } },
        {
            name: 'categoryLabels',
            type: 'array',
            label: 'Category Labels',
            admin: { description: 'Map category slugs to display labels. Order determines display sequence.' },
            fields: [
                { name: 'slug',  type: 'text', required: true, admin: { description: 'Category slug as stored on FAQ records (e.g. "general")' } },
                { name: 'label', type: 'text', required: true, admin: { description: 'Display label shown in the UI (e.g. "General")' } },
            ],
        },
    ],
}
