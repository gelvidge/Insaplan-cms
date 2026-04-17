import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'
import { seoFields } from '../fields/seoFields'

export const BlogPageGlobal: GlobalConfig = {
    slug: 'blog-page',
    label: 'Blog',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        { name: 'heroTitle',          type: 'text' },
        { name: 'heroSubtitle',       type: 'text' },
        { name: 'readMoreLabel',      type: 'text' },
        { name: 'emptyStateHeading',  type: 'text' },
        { name: 'emptyStateMessage',  type: 'textarea' },
        {
            name: 'categoryLabels',
            type: 'array',
            label: 'Category Labels',
            admin: { description: 'Map blog category slugs to display labels.' },
            fields: [
                { name: 'slug',  type: 'text', required: true, admin: { description: 'Category slug as stored on posts (e.g. "product-updates")' } },
                { name: 'label', type: 'text', required: true, admin: { description: 'Display label shown in the UI (e.g. "Product Updates")' } },
            ],
        },
        ...seoFields,
    ],
}
