import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const ProductKnowledgeBasePageGlobal: GlobalConfig = {
    slug: 'product-knowledgebase-page',
    label: 'Product — Knowledge Base',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        { name: 'heroTitle',    type: 'text' },
        { name: 'heroAccent',   type: 'text', admin: { description: 'The portion of the title rendered in accent colour' } },
        { name: 'heroSubtitle', type: 'textarea' },

        {
            name: 'capture', type: 'group', label: 'What Gets Captured Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'insightTags', type: 'array', label: 'Insight Tags',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
                { name: 'tagEtc', type: 'text' },
            ],
        },

        {
            name: 'autoCapture', type: 'group', label: 'Automatic Capture Section',
            fields: [
                { name: 'kicker',     type: 'text' },
                { name: 'heading',    type: 'text' },
                { name: 'body',       type: 'textarea' },
                { name: 'videoLabel', type: 'text' },
                {
                    name: 'points', type: 'array', label: 'Bullet Points',
                    fields: [{ name: 'label', type: 'text', required: true }],
                },
            ],
        },

        {
            name: 'aiQuery', type: 'group', label: 'AI Query Section',
            fields: [
                { name: 'kicker',  type: 'text' },
                { name: 'heading', type: 'text' },
                { name: 'body',    type: 'textarea' },
                {
                    name: 'qaExamples', type: 'array', label: 'Q&A Examples',
                    fields: [
                        { name: 'question', type: 'text',     required: true },
                        { name: 'answer',   type: 'textarea', required: true },
                    ],
                },
            ],
        },
    ],
}
