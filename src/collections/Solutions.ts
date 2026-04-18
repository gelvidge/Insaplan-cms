import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publishedOnly } from '../access'
import { slugField } from '../fields/slugField'
import { statusField } from '../fields/statusField'
import { seoFields } from '../fields/seoFields'

export const Solutions: CollectionConfig = {
    slug: 'solutions',
    admin: {
        useAsTitle: 'heroHeadline',
        defaultColumns: ['heroHeadline', 'slug', 'status'],
        group: 'Content'
    },
    access: {
        read: publishedOnly,
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        delete: isAdminOrEditor
    },
    fields: [
        slugField,
        // ── Hero section ───────────────────────────────────────────────────
        {
            name: 'heroHeadline',
            type: 'text',
            label: 'Hero Headline',
            admin: {
                description: 'Large bold headline — e.g. "WHAT\'S KILLING YOUR RANKINGS?"'
            }
        },
        {
            name: 'heroHeadlineAccent',
            type: 'text',
            label: 'Hero Headline Accent Word',
            admin: {
                description: 'Word or phrase within the headline to highlight in purple — e.g. "YOUR RANKINGS?"'
            }
        },
        {
            name: 'heroBody',
            type: 'textarea',
            label: 'Hero Body Text',
            admin: {
                description: 'Paragraph shown to the right of the headline'
            }
        },
        {
            name: 'heroSteps',
            type: 'array',
            label: 'Hero Step Flow',
            admin: {
                description: 'Process steps shown below the headline (e.g. Enter URL → Agent Analyzes → …)'
            },
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true
                },
                {
                    name: 'active',
                    type: 'checkbox',
                    label: 'Highlighted step',
                    defaultValue: false
                }
            ]
        },
        // ──────────────────────────────────────────────────────────────────
        {
            name: 'heroImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Hero Image'
        },
        {
            name: 'challenges',
            type: 'array',
            label: 'Challenges & Frustrations',
            admin: {
                description: 'The key challenges or frustrations this solution resolves for the audience'
            },
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
                        description: 'Icon name from Tabler Icons (e.g., "clock", "puzzle", "bolt")'
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
            name: 'keyFeatures',
            type: 'array',
            label: 'Key Features',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true
                },
            ]
        },
        statusField,
        ...seoFields
    ],
    versions: {
        drafts: true
    }
}
