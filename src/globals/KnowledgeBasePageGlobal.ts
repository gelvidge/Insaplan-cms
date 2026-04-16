import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const KnowledgeBasePageGlobal: GlobalConfig = {
    slug: 'knowledge-base-page',
    label: 'Knowledge Base',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        { name: 'heroTitle',          type: 'text' },
        { name: 'heroSubtitle',       type: 'text' },
        { name: 'comingSoonHeading',  type: 'text' },
        { name: 'comingSoonMessage',  type: 'textarea' },
    ],
}
