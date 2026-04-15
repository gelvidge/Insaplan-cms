import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const FAQsPageGlobal: GlobalConfig = {
    slug: 'faqs-page',
    label: 'FAQs',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text', defaultValue: 'Frequently Asked Questions' },
        {
            name: 'heroSubtitle',
            type: 'text',
            defaultValue: 'Everything you need to know about Insaplan',
        },
        {
            name: 'emptyStateMessage',
            type: 'text',
            defaultValue: 'No FAQs available yet.',
            admin: { description: 'Shown when there are no FAQs in the system' },
        },
        {
            name: 'categoryLabels',
            type: 'array',
            label: 'Category Labels',
            admin: {
                description: 'Map category slugs to display labels. Order determines display sequence.',
            },
            fields: [
                {
                    name: 'slug',
                    type: 'text',
                    required: true,
                    admin: { description: 'Category slug as stored on FAQ records (e.g. "general")' },
                },
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                    admin: { description: 'Display label shown in the UI (e.g. "General")' },
                },
            ],
            defaultValue: [
                { slug: 'general', label: 'General' },
                { slug: 'features', label: 'Features' },
                { slug: 'billing', label: 'Billing' },
                { slug: 'account', label: 'Account' },
                { slug: 'technical', label: 'Technical' },
                { slug: 'security', label: 'Security' },
            ],
        },
    ],
}
