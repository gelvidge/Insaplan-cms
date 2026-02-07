import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publishedOnly } from '../access'
import { slugField } from '../fields/slugField'
import { statusField } from '../fields/statusField'
import { seoFields } from '../fields/seoFields'

export const CaseStudies: CollectionConfig = {
    slug: 'case-studies',
    admin: {
        useAsTitle: 'companyName',
        defaultColumns: ['companyName', 'industry', 'status', 'publishedDate'],
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
            name: 'companyName',
            type: 'text',
            required: true,
            label: 'Company Name'
        },
        slugField,
        {
            name: 'companyLogo',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Company Logo'
        },
        {
            name: 'industry',
            type: 'select',
            required: true,
            options: [
                { label: 'SaaS', value: 'saas' },
                { label: 'E-commerce', value: 'ecommerce' },
                { label: 'Healthcare', value: 'healthcare' },
                { label: 'Finance', value: 'finance' },
                { label: 'Education', value: 'education' },
                { label: 'Manufacturing', value: 'manufacturing' },
                { label: 'Other', value: 'other' }
            ]
        },
        {
            name: 'companySize',
            type: 'select',
            required: true,
            options: [
                { label: 'Startup (1-50)', value: 'startup' },
                { label: 'SMB (51-500)', value: 'smb' },
                { label: 'Enterprise (500+)', value: 'enterprise' }
            ]
        },
        {
            name: 'challenge',
            type: 'richText',
            required: true,
            label: 'The Challenge'
        },
        {
            name: 'solution',
            type: 'richText',
            required: true,
            label: 'The Solution'
        },
        {
            name: 'results',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'metric',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'E.g., "Revenue Growth", "Time Saved"'
                    }
                },
                {
                    name: 'value',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'E.g., "50%", "10 hours/week"'
                    }
                },
                {
                    name: 'improvement',
                    type: 'text',
                    admin: {
                        description: 'Optional context, e.g., "vs. previous year"'
                    }
                }
            ]
        },
        {
            name: 'quote',
            type: 'group',
            label: 'Customer Quote',
            fields: [
                {
                    name: 'text',
                    type: 'textarea',
                    required: true
                },
                {
                    name: 'author',
                    type: 'text',
                    required: true
                },
                {
                    name: 'role',
                    type: 'text',
                    required: true
                },
                {
                    name: 'photo',
                    type: 'upload',
                    relationTo: 'media'
                }
            ]
        },
        {
            name: 'heroImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Hero Image'
        },
        statusField,
        {
            name: 'publishedDate',
            type: 'date',
            admin: {
                position: 'sidebar'
            }
        },
        ...seoFields
    ],
    versions: {
        drafts: true
    }
}
