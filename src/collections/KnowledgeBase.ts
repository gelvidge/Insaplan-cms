import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publishedOnly } from '../access'
import { slugField } from '../fields/slugField'
import { statusField } from '../fields/statusField'
import { seoFields } from '../fields/seoFields'

export const KnowledgeBase: CollectionConfig = {
    slug: 'knowledge-base',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status', 'viewCount'],
        group: 'Content'
    },
    access: {
        read: publishedOnly,
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        delete: isAdminOrEditor
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        slugField,
        {
            name: 'content',
            type: 'richText',
            required: true,
            label: 'Article Content'
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            options: [
                { label: 'Getting Started', value: 'getting-started' },
                { label: 'Features', value: 'features' },
                { label: 'Integrations', value: 'integrations' },
                { label: 'Troubleshooting', value: 'troubleshooting' },
                { label: 'Best Practices', value: 'best-practices' },
                { label: 'Advanced', value: 'advanced' }
            ],
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'subcategory',
            type: 'text',
            admin: {
                position: 'sidebar'
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
            name: 'searchKeywords',
            type: 'text',
            hasMany: true,
            admin: {
                description: 'Keywords to improve search discoverability'
            }
        },
        statusField,
        {
            name: 'viewCount',
            type: 'number',
            defaultValue: 0,
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: 'Number of times this article was viewed'
            }
        },
        {
            name: 'helpfulCount',
            type: 'number',
            defaultValue: 0,
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: 'Number of "helpful" votes'
            }
        },
        {
            name: 'notHelpfulCount',
            type: 'number',
            defaultValue: 0,
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: 'Number of "not helpful" votes'
            }
        },
        {
            name: 'lastReviewed',
            type: 'date',
            admin: {
                position: 'sidebar',
                description: 'Last time content accuracy was verified'
            }
        },
        ...seoFields
    ],
    versions: {
        drafts: true
    }
}
