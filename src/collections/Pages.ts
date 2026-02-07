import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publishedOnly } from '../access'
import { slugField } from '../fields/slugField'
import { statusField } from '../fields/statusField'
import { seoFields } from '../fields/seoFields'

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
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
            label: 'Page Content'
        },
        {
            name: 'layout',
            type: 'select',
            label: 'Page Layout',
            defaultValue: 'standard',
            options: [
                {
                    label: 'Standard',
                    value: 'standard'
                },
                {
                    label: 'Full Width',
                    value: 'fullWidth'
                },
                {
                    label: 'Landing Page',
                    value: 'landing'
                }
            ]
        },
        statusField,
        {
            name: 'publishedDate',
            type: 'date',
            label: 'Published Date',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime'
                }
            }
        },
        ...seoFields
    ],
    versions: {
        drafts: true
    }
}
