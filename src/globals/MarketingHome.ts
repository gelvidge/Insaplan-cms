import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'
import { seoFields } from '../fields/seoFields'

export const MarketingHome: GlobalConfig = {
    slug: 'marketing-home',
    label: 'Home',
    admin: { group: 'Pages' },
    access: { read: publicRead, update: isAdminOrEditor },
    fields: [
        {
            name: 'hero',
            type: 'group',
            label: 'Hero',
            fields: [
                { name: 'eyebrow',  type: 'text' },
                { name: 'badge',    type: 'text' },
                { name: 'headline', type: 'text' },
                { name: 'subtitle', type: 'textarea' },
                {
                    name: 'pillars',
                    type: 'array',
                    labels: { singular: 'Pillar', plural: 'Pillars' },
                    fields: [{ name: 'label', type: 'text' }],
                },
                {
                    name: 'useCases',
                    type: 'array',
                    labels: { singular: 'Use Case', plural: 'Use Cases' },
                    fields: [{ name: 'label', type: 'text' }],
                },
                {
                    name: 'trustSignals',
                    type: 'array',
                    labels: { singular: 'Trust Signal', plural: 'Trust Signals' },
                    fields: [
                        {
                            name: 'icon',
                            type: 'text',
                            admin: { description: 'Tabler icon name without the "Icon" prefix, e.g. "Sparkles", "ChartBar", "Users"' },
                        },
                        { name: 'label', type: 'text' },
                    ],
                },
                {
                    name: 'carouselSlides',
                    type: 'array',
                    labels: { singular: 'Slide', plural: 'Slides' },
                    fields: [
                        { name: 'title',       type: 'text' },
                        { name: 'description', type: 'textarea' },
                        {
                            name: 'image',
                            type: 'upload',
                            relationTo: 'media',
                            admin: { description: 'Optional screenshot/image for this slide' },
                        },
                    ],
                },
            ],
        },
        {
            name: 'coreFeatures',
            type: 'group',
            label: 'Core Features',
            fields: [
                { name: 'kicker',      type: 'text' },
                { name: 'heading',     type: 'text' },
                { name: 'description', type: 'textarea' },
                {
                    name: 'features',
                    type: 'array',
                    labels: { singular: 'Feature', plural: 'Features' },
                    fields: [
                        {
                            name: 'icon',
                            type: 'select',
                            options: [
                                { label: 'Bulb',   value: 'bulb'   },
                                { label: 'Target', value: 'target' },
                                { label: 'Report', value: 'report' },
                            ],
                        },
                        { name: 'title',       type: 'text' },
                        { name: 'description', type: 'textarea' },
                        {
                            name: 'capabilities',
                            type: 'array',
                            labels: { singular: 'Capability', plural: 'Capabilities' },
                            fields: [{ name: 'label', type: 'text' }],
                        },
                        {
                            name: 'visuals',
                            type: 'array',
                            labels: { singular: 'Visual', plural: 'Visuals' },
                            maxRows: 3,
                            fields: [
                                { name: 'label', type: 'text' },
                                {
                                    name: 'image',
                                    type: 'upload',
                                    relationTo: 'media',
                                    admin: { description: 'Optional screenshot for this visual card' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'socialProof',
            type: 'group',
            label: 'Social Proof',
            fields: [
                { name: 'heading',    type: 'text' },
                { name: 'subheading', type: 'text' },
                { name: 'logosLabel', type: 'text' },
                {
                    name: 'customerLogos',
                    type: 'array',
                    labels: { singular: 'Logo', plural: 'Logos' },
                    fields: [
                        { name: 'companyName', type: 'text',   required: true },
                        { name: 'logo',        type: 'upload', relationTo: 'media' },
                    ],
                },
            ],
        },
        {
            name: 'cta',
            type: 'group',
            label: 'CTA',
            fields: [
                { name: 'title',            type: 'text' },
                { name: 'description',      type: 'textarea' },
                { name: 'emailPlaceholder', type: 'text' },
                { name: 'buttonLabel',      type: 'text' },
                { name: 'note',             type: 'text' },
            ],
        },
        ...seoFields,
    ],
}
