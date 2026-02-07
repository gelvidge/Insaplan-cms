import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publishedOnly } from '../access'
import { slugField } from '../fields/slugField'
import { statusField } from '../fields/statusField'
import { seoFields } from '../fields/seoFields'

export const Solutions: CollectionConfig = {
    slug: 'solutions',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'status'],
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
            name: 'title',
            type: 'text',
            required: true
        },
        slugField,
        {
            name: 'subtitle',
            type: 'text',
            required: true
        },
        {
            name: 'heroImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Hero Image'
        },
        {
            name: 'overview',
            type: 'richText',
            required: true,
            label: 'Solution Overview'
        },
        {
            name: 'keyFeatures',
            type: 'array',
            label: 'Key Features',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true
                },
                {
                    name: 'icon',
                    type: 'text',
                    admin: {
                        description: 'Icon name from Tabler Icons (e.g., "IconRocket")'
                    }
                }
            ]
        },
        {
            name: 'useCases',
            type: 'array',
            label: 'Use Cases',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media'
                }
            ]
        },
        {
            name: 'caseStudies',
            type: 'relationship',
            relationTo: 'case-studies',
            hasMany: true,
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'cta',
            type: 'group',
            label: 'Call to Action',
            fields: [
                {
                    name: 'text',
                    type: 'text',
                    defaultValue: 'Get Started'
                },
                {
                    name: 'url',
                    type: 'text'
                }
            ]
        },
        statusField,
        ...seoFields
    ],
    versions: {
        drafts: true
    }
}
