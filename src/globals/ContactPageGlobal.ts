import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const ContactPageGlobal: GlobalConfig = {
    slug: 'contact-page',
    label: 'Contact',
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
        { name: 'namePlaceholder', type: 'text'},
        { name: 'emailPlaceholder', type: 'text'},
        { name: 'companyPlaceholder', type: 'text'},
        { name: 'messagePlaceholder', type: 'text'},
        { name: 'submitButtonLabel', type: 'text'},
        {
            name: 'successMessage',
            type: 'text',
            
        },
        { name: 'responseNote', type: 'text'},
    ],
}
