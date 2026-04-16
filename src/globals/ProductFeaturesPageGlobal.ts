import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const ProductFeaturesPageGlobal: GlobalConfig = {
    slug: 'product-features-page',
    label: 'Product Features',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        { name: 'heroTitle',           type: 'text' },
        { name: 'heroSubtitle',        type: 'textarea' },
        {
            name: 'features',
            type: 'array',
            labels: { singular: 'Feature', plural: 'Features' },
            fields: [
                {
                    name: 'icon',
                    type: 'select',
                    options: [
                        { label: 'Chart Bar',    value: 'chart-bar'    },
                        { label: 'Palette',      value: 'palette'      },
                        { label: 'Brain',        value: 'brain'        },
                        { label: 'Adjustments',  value: 'adjustments'  },
                        { label: 'Books',        value: 'books'        },
                        { label: 'Database',     value: 'database'     },
                    ],
                },
                { name: 'title',       type: 'text',     required: true },
                { name: 'description', type: 'textarea', required: true },
                {
                    name: 'benefits',
                    type: 'array',
                    labels: { singular: 'Benefit', plural: 'Benefits' },
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },
        { name: 'problemsHeading',    type: 'text' },
        { name: 'problemsSubheading', type: 'text' },
        {
            name: 'problems',
            type: 'array',
            labels: { singular: 'Problem', plural: 'Problems' },
            fields: [
                { name: 'problem',  type: 'textarea', required: true },
                { name: 'solution', type: 'textarea', required: true },
            ],
        },
    ],
}
