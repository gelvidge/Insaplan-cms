import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

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
        { name: 'heroTitle', type: 'text', defaultValue: 'Support' },
        {
            name: 'heroSubtitle',
            type: 'text',
            defaultValue: "We're here to help you succeed with Insaplan",
        },
        {
            name: 'comingSoonMessage',
            type: 'textarea',
            defaultValue:
                'Our support center is launching soon. In the meantime, feel free to reach out to us directly.',
        },
        { name: 'contactHeading', type: 'text', defaultValue: 'Get in Touch' },
        {
            name: 'contactEmail',
            type: 'email',
            defaultValue: 'support@insaplan.com',
            admin: { description: 'Support email address shown on the page' },
        },
    ],
}
