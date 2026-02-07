import type { Field } from 'payload'

export const seoFields: Field[] = [
    {
        name: 'seo',
        type: 'group',
        label: 'SEO',
        fields: [
            {
                name: 'metaTitle',
                type: 'text',
                label: 'Meta Title',
                admin: {
                    description: 'Optimal length: 50-60 characters'
                }
            },
            {
                name: 'metaDescription',
                type: 'textarea',
                label: 'Meta Description',
                admin: {
                    description: 'Optimal length: 150-160 characters'
                }
            },
            {
                name: 'ogImage',
                type: 'upload',
                relationTo: 'media',
                label: 'Open Graph Image',
                admin: {
                    description: 'Recommended: 1200x630px'
                }
            },
            {
                name: 'canonicalUrl',
                type: 'text',
                label: 'Canonical URL',
                admin: {
                    description: 'Leave empty to use default URL'
                }
            },
            {
                name: 'noIndex',
                type: 'checkbox',
                label: 'No Index',
                defaultValue: false,
                admin: {
                    description: 'Prevent search engines from indexing this page'
                }
            },
            {
                name: 'keywords',
                type: 'text',
                label: 'Keywords',
                hasMany: true,
                admin: {
                    description: 'Comma-separated keywords for SEO'
                }
            }
        ]
    }
]
