import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publishedOnly } from '../access'
import { slugField } from '../fields/slugField'
import { statusField } from '../fields/statusField'
import { seoFields } from '../fields/seoFields'

export const BlogPosts: CollectionConfig = {
    slug: 'blog-posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'author', 'category', 'status', 'publishedDate'],
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
            name: 'excerpt',
            type: 'textarea',
            required: true,
            maxLength: 200,
            admin: {
                description: 'Brief summary for previews (max 200 characters)'
            }
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Featured Image'
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            label: 'Post Content'
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            options: [
                { label: 'Product Updates', value: 'product-updates' },
                { label: 'Company News', value: 'company-news' },
                { label: 'Best Practices', value: 'best-practices' },
                { label: 'Case Studies', value: 'case-studies' },
                { label: 'Industry Insights', value: 'industry-insights' }
            ],
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'tags',
            type: 'text',
            hasMany: true,
            admin: {
                position: 'sidebar'
            }
        },
        statusField,
        {
            name: 'publishedDate',
            type: 'date',
            required: true,
            label: 'Published Date',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime'
                }
            }
        },
        {
            name: 'readTime',
            type: 'number',
            label: 'Read Time (minutes)',
            admin: {
                position: 'sidebar',
                description: 'Estimated reading time'
            }
        },
        ...seoFields
    ],
    versions: {
        drafts: true
    },
    hooks: {
        beforeChange: [
            ({ data }) => {
                // Auto-calculate read time based on content
                if (data.content) {
                    const text = JSON.stringify(data.content)
                    const wordCount = text.split(/\s+/).length
                    data.readTime = Math.ceil(wordCount / 200) // Average reading speed
                }
                return data
            }
        ]
    }
}
