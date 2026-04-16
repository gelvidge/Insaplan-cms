import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const ProductPlanningPageGlobal: GlobalConfig = {
    slug: 'product-planning-page',
    label: 'Product — Planning',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        { name: 'heroTitle',    type: 'text' },
        { name: 'heroSubtitle', type: 'textarea' },

        {
            name: 'painPoints', type: 'array', label: 'Pain Points',
            fields: [
                { name: 'icon', type: 'select', required: true, options: [
                    { label: 'Spreadsheet', value: 'spreadsheet' }, { label: 'Timeline', value: 'timeline' },
                    { label: 'Users',       value: 'users'       }, { label: 'Puzzle',   value: 'puzzle'   },
                    { label: 'Clock',       value: 'clock'       }, { label: 'Chart',    value: 'chart'    },
                ]},
                { name: 'title',       type: 'text',     required: true },
                { name: 'description', type: 'textarea', required: true },
                { name: 'color',       type: 'text',     required: true, admin: { description: 'RGB e.g. 124,58,237' } },
            ],
        },

        {
            name: 'templates', type: 'group', label: 'Templates Section',
            fields: [
                { name: 'kicker',     type: 'text' },
                { name: 'heading',    type: 'text' },
                { name: 'body',       type: 'textarea' },
                { name: 'stat1Value', type: 'text', admin: { description: 'e.g. 8+' } },
                { name: 'stat1Label', type: 'text' },
                { name: 'stat2Value', type: 'text' },
                { name: 'stat2Label', type: 'text' },
                { name: 'callout',    type: 'text' },
                {
                    name: 'pills', type: 'array', label: 'Template Pills',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },

        {
            name: 'metrics', type: 'group', label: 'Key Metrics Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'points', type: 'array', label: 'Bullet Points',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
                {
                    name: 'pills', type: 'array', label: 'Metric Pills',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
                { name: 'badgeLabel', type: 'text' },
                { name: 'miniStat',   type: 'text' },
            ],
        },

        {
            name: 'tracking', type: 'group', label: 'Tracking Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'views', type: 'array', label: 'View Cards',
                    fields: [
                        { name: 'label',       type: 'text',     required: true },
                        { name: 'description', type: 'textarea', required: true },
                        { name: 'icon', type: 'select', options: [
                            { label: 'Timeline', value: 'timeline' },
                            { label: 'Columns',  value: 'columns'  },
                            { label: 'Route',    value: 'route'    },
                        ]},
                    ],
                },
            ],
        },

        {
            name: 'linkedPlanning', type: 'group', label: 'Linked Planning Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'points', type: 'array', label: 'Bullet Points',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },

        {
            name: 'aiPlanning', type: 'group', label: 'AI Planning Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'steps', type: 'array', label: 'Steps',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
                {
                    name: 'sourcePills', type: 'array', label: 'Source Pills',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },
    ],
}
