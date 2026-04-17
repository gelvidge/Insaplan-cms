import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'
import { seoFields } from '../fields/seoFields'

export const SupportPageGlobal: GlobalConfig = {
    slug: 'support-page',
    label: 'Support',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text'},
        {
            name: 'heroSubtitle',
            type: 'text',
            
        },
        { name: 'comingSoonMessage', type: 'textarea' },
        { name: 'contactHeading', type: 'text'},
        {
            name: 'contactEmail',
            type: 'email',
            
            admin: { description: 'Support email address shown on the page' },
        },
        ...seoFields,
    ],
}
