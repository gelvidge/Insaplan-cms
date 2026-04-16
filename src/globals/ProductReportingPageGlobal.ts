import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const ProductReportingPageGlobal: GlobalConfig = {
    slug: 'product-reporting-page',
    label: 'Product — Reporting',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        { name: 'heroTitle',    type: 'text' },
        { name: 'heroSubtitle', type: 'textarea' },

        {
            name: 'painPoints', type: 'array', label: 'Pain Points',
            fields: [
                { name: 'icon', type: 'select', required: true, options: [
                    { label: 'Presentation', value: 'presentation' }, { label: 'Chart',    value: 'chart'    },
                    { label: 'Target',       value: 'target'       }, { label: 'Clock',    value: 'clock'    },
                    { label: 'Spreadsheet',  value: 'spreadsheet'  }, { label: 'Timeline', value: 'timeline' },
                ]},
                { name: 'title',       type: 'text',     required: true },
                { name: 'description', type: 'textarea', required: true },
                { name: 'color',       type: 'text',     required: true, admin: { description: 'RGB e.g. 124,58,237' } },
            ],
        },

        {
            name: 'dashboards', type: 'group', label: 'Dashboards Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'points', type: 'array', label: 'Bullet Points',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
                {
                    name: 'metrics', type: 'array', label: 'Metric Cards',
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'value', type: 'text', required: true },
                        { name: 'tone', type: 'select', options: [
                            { label: 'Purple', value: 'purple' },
                            { label: 'Amber',  value: 'amber'  },
                            { label: 'Green',  value: 'green'  },
                        ]},
                    ],
                },
                {
                    name: 'tags', type: 'array', label: 'Dashboard Tags',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },

        {
            name: 'reportingOutputs', type: 'group', label: 'Reporting Outputs Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'points', type: 'array', label: 'Bullet Points',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
                {
                    name: 'formats', type: 'array', label: 'Output Format Pills',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
                {
                    name: 'templateRows', type: 'array', label: 'Template Preview Rows',
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'width', type: 'text', required: true, admin: { description: 'CSS width e.g. 88%' } },
                    ],
                },
            ],
        },
    ],
}
