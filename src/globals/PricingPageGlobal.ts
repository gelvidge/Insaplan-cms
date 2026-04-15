import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const PricingPageGlobal: GlobalConfig = {
    slug: 'pricing-page',
    label: 'Pricing',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text', defaultValue: 'Simple, transparent pricing' },
        {
            name: 'heroSubtitle',
            type: 'text',
            defaultValue: 'Start free. Scale as your team grows. No hidden fees.',
        },
        {
            name: 'monthlyLabel',
            type: 'text',
            defaultValue: 'Monthly',
            admin: { description: 'Label for the monthly billing toggle option' },
        },
        {
            name: 'annualLabel',
            type: 'text',
            defaultValue: 'Annual',
            admin: { description: 'Label for the annual billing toggle option' },
        },
        {
            name: 'annualDiscountBadge',
            type: 'text',
            defaultValue: 'Save 20%',
            admin: { description: 'Badge text shown next to the annual option' },
        },
        {
            name: 'customPriceLabel',
            type: 'text',
            defaultValue: 'Custom',
            admin: { description: 'Shown in place of a price for enterprise/custom plans' },
        },
        {
            name: 'perMonthSuffix',
            type: 'text',
            defaultValue: '/ mo',
            admin: { description: 'Suffix appended to monthly price display' },
        },
        {
            name: 'popularBadgeLabel',
            type: 'text',
            defaultValue: 'Most Popular',
            admin: { description: 'Badge label on the highlighted plan' },
        },
        {
            name: 'billedAnnuallyLabel',
            type: 'text',
            defaultValue: 'Billed annually',
            admin: { description: 'Note shown below price when annual billing is selected' },
        },
    ],
}
