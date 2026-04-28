import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'
import { seoFields } from '../fields/seoFields'

export const PricingPageGlobal: GlobalConfig = {
    slug: 'pricing-page',
    label: 'Pricing',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        {
            name: 'comingSoon',
            type: 'checkbox',
            defaultValue: true,
            admin: {
                position: 'sidebar',
                description: 'When checked, the pricing page shows a "Coming Soon" placeholder instead of live pricing. Uncheck to publish pricing.'
            }
        },
        { name: 'heroTitle',            type: 'text' },
        { name: 'heroSubtitle',         type: 'text' },
        { name: 'monthlyLabel',         type: 'text', admin: { description: 'Label for the monthly billing toggle option' } },
        { name: 'annualLabel',          type: 'text', admin: { description: 'Label for the annual billing toggle option' } },
        { name: 'annualDiscountBadge',  type: 'text', admin: { description: 'Badge text shown next to the annual option' } },
        { name: 'customPriceLabel',     type: 'text', admin: { description: 'Shown in place of a price for enterprise/custom plans' } },
        { name: 'perMonthSuffix',       type: 'text', admin: { description: 'Suffix appended to monthly price display' } },
        { name: 'popularBadgeLabel',    type: 'text', admin: { description: 'Badge label on the highlighted plan' } },
        { name: 'billedAnnuallyLabel',  type: 'text', admin: { description: 'Note shown below price when annual billing is selected' } },
        ...seoFields,
    ],
}
