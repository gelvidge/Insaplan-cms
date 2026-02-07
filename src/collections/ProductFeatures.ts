import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publishedOnly } from '../access'
import { slugField } from '../fields/slugField'
import { statusField } from '../fields/statusField'

export const ProductFeatures: CollectionConfig = {
    slug: 'product-features',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'category', 'comingSoon', 'order'],
        group: 'Marketing'
    },
    access: {
        read: publishedOnly,
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        delete: isAdminOrEditor
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },
        slugField,
        {
            name: 'tagline',
            type: 'text',
            required: true,
            admin: {
                description: 'Short catchy description (one sentence)'
            }
        },
        {
            name: 'description',
            type: 'richText',
            required: true,
            label: 'Detailed Description'
        },
        {
            name: 'icon',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description: 'Feature icon or illustration'
            }
        },
        {
            name: 'screenshot',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description: 'Screenshot showing the feature'
            }
        },
        {
            name: 'video',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description: 'Demo video (optional)'
            }
        },
        {
            name: 'category',
            type: 'select',
            options: [
                { label: 'Planning', value: 'planning' },
                { label: 'Collaboration', value: 'collaboration' },
                { label: 'Analytics', value: 'analytics' },
                { label: 'Automation', value: 'automation' },
                { label: 'Integration', value: 'integration' },
                { label: 'Visualization', value: 'visualization' }
            ],
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'availableIn',
            type: 'select',
            hasMany: true,
            options: [
                { label: 'Starter', value: 'starter' },
                { label: 'Professional', value: 'professional' },
                { label: 'Enterprise', value: 'enterprise' }
            ],
            admin: {
                position: 'sidebar',
                description: 'Which plans include this feature'
            }
        },
        {
            name: 'comingSoon',
            type: 'checkbox',
            defaultValue: false,
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
                position: 'sidebar'
            }
        },
        statusField
    ],
    versions: {
        drafts: true
    }
}
