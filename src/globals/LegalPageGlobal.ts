import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const LegalPageGlobal: GlobalConfig = {
    slug: 'legal-page',
    label: 'Legal',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text', defaultValue: 'Legal' },
        {
            name: 'heroSubtitle',
            type: 'text',
            defaultValue: 'Terms of Service, Privacy Policy and Data Security',
        },
        { name: 'termsTabLabel', type: 'text', defaultValue: 'Terms of Service', admin: { description: 'Label for the Terms of Service tab' } },
        { name: 'privacyTabLabel', type: 'text', defaultValue: 'Privacy Policy', admin: { description: 'Label for the Privacy Policy tab' } },
        { name: 'dataSecurityTabLabel', type: 'text', defaultValue: 'Data Security', admin: { description: 'Label for the Data Security tab' } },
        {
            name: 'termsContent',
            type: 'richText',
            admin: { description: 'Full Terms of Service text' },
        },
        {
            name: 'privacyContent',
            type: 'richText',
            admin: { description: 'Full Privacy Policy text' },
        },
        {
            name: 'termsComingSoon',
            type: 'text',
            defaultValue:
                'Coming soon. Our terms of service are being finalized and will be available before launch.',
            admin: { description: 'Shown when terms richText is empty' },
        },
        {
            name: 'privacyComingSoon',
            type: 'text',
            defaultValue:
                'Coming soon. Our privacy policy is being finalized and will be available before launch.',
            admin: { description: 'Shown when privacy richText is empty' },
        },
        {
            name: 'dataSecurityContent',
            type: 'richText',
            admin: { description: 'Full Data Security documentation text' },
        },
        {
            name: 'dataSecurityComingSoon',
            type: 'text',
            defaultValue:
                'Coming soon. Our data security documentation is being finalized and will be available before launch.',
            admin: { description: 'Shown when data security richText is empty' },
        },
    ],
}
