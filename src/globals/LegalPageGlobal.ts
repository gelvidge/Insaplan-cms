import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const LegalPageGlobal: GlobalConfig = {
    slug: 'legal-page',
    label: 'Legal',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        { name: 'heroTitle',              type: 'text' },
        { name: 'heroSubtitle',           type: 'text' },
        { name: 'termsTabLabel',          type: 'text', admin: { description: 'Label for the Terms of Service tab' } },
        { name: 'privacyTabLabel',        type: 'text', admin: { description: 'Label for the Privacy Policy tab' } },
        { name: 'dataSecurityTabLabel',   type: 'text', admin: { description: 'Label for the Data Security tab' } },
        { name: 'termsContent',           type: 'richText', admin: { description: 'Full Terms of Service text' } },
        { name: 'privacyContent',         type: 'richText', admin: { description: 'Full Privacy Policy text' } },
        { name: 'termsComingSoon',        type: 'text', admin: { description: 'Shown when terms richText is empty' } },
        { name: 'privacyComingSoon',      type: 'text', admin: { description: 'Shown when privacy richText is empty' } },
        { name: 'dataSecurityContent',    type: 'richText', admin: { description: 'Full Data Security documentation text' } },
        { name: 'dataSecurityComingSoon', type: 'text', admin: { description: 'Shown when data security richText is empty' } },
    ],
}
