import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const KnowledgeBasePageGlobal: GlobalConfig = {
    slug: 'knowledge-base-page',
    label: 'Knowledge Base',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text', defaultValue: 'Knowledge Base' },
        {
            name: 'heroSubtitle',
            type: 'text',
            defaultValue: 'Learn how to get the most out of Insaplan',
        },
        { name: 'comingSoonHeading', type: 'text', defaultValue: 'Documentation Coming Soon' },
        {
            name: 'comingSoonMessage',
            type: 'textarea',
            defaultValue:
                "We're building comprehensive documentation to help you get started with Insaplan. Check back soon!",
        },
    ],
}
