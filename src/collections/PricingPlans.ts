import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const PricingPlans: CollectionConfig = {
    slug: 'pricing-plans',
    admin: {
        useAsTitle: 'planName',
        defaultColumns: ['planName', 'planType', 'price', 'order'],
        group: 'Marketing'
    },
    access: {
        read: publicRead,
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        delete: isAdminOrEditor
    },
    fields: [
        {
            name: 'planName',
            type: 'text',
            required: true,
            label: 'Plan Name'
        },
        {
            name: 'planType',
            type: 'select',
            required: true,
            options: [
                { label: 'Starter', value: 'starter' },
                { label: 'Professional', value: 'professional' },
                { label: 'Enterprise', value: 'enterprise' },
                { label: 'Custom', value: 'custom' }
            ]
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
            admin: {
                description: 'Brief plan description'
            }
        },
        {
            name: 'price',
            type: 'number',
            required: true
        },
        {
            name: 'billingPeriod',
            type: 'select',
            required: true,
            defaultValue: 'monthly',
            options: [
                { label: 'Monthly', value: 'monthly' },
                { label: 'Annual', value: 'annual' }
            ]
        },
        {
            name: 'currency',
            type: 'select',
            required: true,
            defaultValue: 'USD',
            options: [
                { label: 'USD', value: 'USD' },
                { label: 'EUR', value: 'EUR' },
                { label: 'GBP', value: 'GBP' }
            ]
        },
        {
            name: 'features',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'feature',
                    type: 'text',
                    required: true
                },
                {
                    name: 'included',
                    type: 'checkbox',
                    defaultValue: true
                },
                {
                    name: 'limit',
                    type: 'text',
                    admin: {
                        description: 'E.g., "Up to 5", "Unlimited", "10GB"'
                    }
                }
            ]
        },
        {
            name: 'cta',
            type: 'group',
            label: 'Call to Action',
            fields: [
                {
                    name: 'text',
                    type: 'text',
                    required: true,
                    defaultValue: 'Get Started'
                },
                {
                    name: 'url',
                    type: 'text',
                    required: true
                },
                {
                    name: 'variant',
                    type: 'select',
                    defaultValue: 'primary',
                    options: [
                        { label: 'Primary', value: 'primary' },
                        { label: 'Secondary', value: 'secondary' },
                        { label: 'Outline', value: 'outline' }
                    ]
                }
            ]
        },
        {
            name: 'popular',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                position: 'sidebar',
                description: 'Mark as "Most Popular" plan'
            }
        },
        {
            name: 'order',
            type: 'number',
            required: true,
            defaultValue: 0,
            admin: {
                position: 'sidebar',
                description: 'Display order (lower numbers appear first)'
            }
        }
    ]
}
