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
        { name: 'heroTitle', type: 'text', defaultValue: 'Contact Us' },
        {
            name: 'heroSubtitle',
            type: 'text',
            defaultValue: "Have a question or want to learn more? We'd love to hear from you.",
        },
        { name: 'namePlaceholder', type: 'text', defaultValue: 'Your name' },
        { name: 'emailPlaceholder', type: 'text', defaultValue: 'your@email.com' },
        { name: 'companyPlaceholder', type: 'text', defaultValue: 'Your company' },
        { name: 'messagePlaceholder', type: 'text', defaultValue: 'How can we help?' },
        { name: 'submitButtonLabel', type: 'text', defaultValue: 'Send Message' },
        {
            name: 'successMessage',
            type: 'text',
            defaultValue: "Thank you! We'll get back to you within 24 hours.",
        },
        { name: 'responseNote', type: 'text', defaultValue: 'We typically respond within 24 hours' },
    ],
}
