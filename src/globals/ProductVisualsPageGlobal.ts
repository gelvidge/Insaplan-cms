import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'
import { seoFields } from '../fields/seoFields'

export const ProductVisualsPageGlobal: GlobalConfig = {
    slug: 'product-visuals-page',
    label: 'Product — Visuals',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        { name: 'heroTitle',    type: 'text' },
        { name: 'heroSubtitle', type: 'textarea' },

        {
            name: 'painPoints', type: 'array', label: 'Pain Points',
            labels: { singular: 'Pain Point', plural: 'Pain Points' },
            fields: [
                { name: 'icon', type: 'select', required: true, options: [
                    { label: 'Presentation', value: 'presentation' }, { label: 'Mood Sad',    value: 'moodsad'     },
                    { label: 'Chart',        value: 'chart'        }, { label: 'Dashboard',   value: 'dashboard'   },
                    { label: 'Spreadsheet',  value: 'spreadsheet'  }, { label: 'Timeline',    value: 'timeline'    },
                ]},
                { name: 'title',       type: 'text',     required: true },
                { name: 'description', type: 'textarea', required: true },
                { name: 'color',       type: 'text',     required: true, admin: { description: 'RGB e.g. 124,58,237' } },
            ],
        },

        {
            name: 'infographics', type: 'group', label: 'Infographics Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'capabilities', type: 'array', label: 'Capabilities',
                    labels: { singular: 'Capability', plural: 'Capabilities' },
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },

        {
            name: 'charting', type: 'group', label: 'Charting Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'capabilities', type: 'array', label: 'Capabilities',
                    labels: { singular: 'Capability', plural: 'Capabilities' },
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },

        {
            name: 'tables', type: 'group', label: 'Tables Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'capabilities', type: 'array', label: 'Capabilities',
                    labels: { singular: 'Capability', plural: 'Capabilities' },
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },

        {
            name: 'planViews', type: 'group', label: 'Plan Views Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'capabilities', type: 'array', label: 'Capabilities',
                    labels: { singular: 'Capability', plural: 'Capabilities' },
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },
        ...seoFields,
    ],
}
