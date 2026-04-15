import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const SiteMetadataGlobal: GlobalConfig = {
    slug: 'site-metadata',
    label: 'Site Metadata',
    admin: {
        group: 'Configuration',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        {
            name: 'defaultTitle',
            type: 'text',
            defaultValue: 'Insaplan',
            admin: { description: 'Browser tab title for all marketing pages' },
        },
        {
            name: 'defaultDescription',
            type: 'textarea',
            defaultValue: 'AI-Powered Strategy Execution Platform',
            admin: { description: 'Default meta description' },
        },
    ],
}
