import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const FAQs: CollectionConfig = {
    slug: 'faqs',
    admin: {
        useAsTitle: 'question',
        defaultColumns: ['question', 'category', 'order'],
        group: 'Content'
    },
    access: {
        read: publicRead,
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        delete: isAdminOrEditor
    },
    fields: [
        {
            name: 'question',
            type: 'text',
            required: true
        },
        {
            name: 'answer',
            type: 'richText',
            required: true
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            defaultValue: 'general',
            options: [
                { label: 'General', value: 'general' },
                { label: 'Technical', value: 'technical' },
                { label: 'Billing', value: 'billing' },
                { label: 'Account', value: 'account' },
                { label: 'Features', value: 'features' },
                { label: 'Security', value: 'security' }
            ],
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'order',
            type: 'number',
            required: true,
            defaultValue: 0,
            admin: {
                position: 'sidebar',
                description: 'Display order (lower numbers appear first)'
            }
        },
        {
            name: 'relatedArticles',
            type: 'relationship',
            relationTo: 'knowledge-base',
            hasMany: true,
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'helpfulCount',
            type: 'number',
            defaultValue: 0,
            admin: {
                position: 'sidebar',
                readOnly: true
            }
        },
        {
            name: 'notHelpfulCount',
            type: 'number',
            defaultValue: 0,
            admin: {
                position: 'sidebar',
                readOnly: true
            }
        }
    ]
}
