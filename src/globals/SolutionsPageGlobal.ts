import type { GlobalConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const SolutionsPageGlobal: GlobalConfig = {
    slug: 'solutions-page',
    label: 'Solutions',
    admin: {
        group: 'Pages',
    },
    access: {
        read: publicRead,
        update: isAdminOrEditor,
    },
    fields: [
        { name: 'heroTitle', type: 'text', defaultValue: 'Solutions' },
        { name: 'heroSubtitle', type: 'text', defaultValue: 'Tailored for your industry and organizational needs' },
        { name: 'sectionHeading', type: 'text', defaultValue: 'Choose your use case' },
        { name: 'sectionSubheading', type: 'text', defaultValue: 'Insaplan adapts to the way your team works' },
        {
            name: 'solutionLinks',
            type: 'array',
            label: 'Solution Links',
            admin: {
                description: 'The list of solutions shown on the solutions landing page. Order determines display order.',
            },
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                    admin: { description: 'Display name (e.g. "Sales")' },
                },
                {
                    name: 'slug',
                    type: 'text',
                    required: true,
                    admin: { description: 'URL slug (e.g. "sales" → /solutions/sales)' },
                },
                {
                    name: 'description',
                    type: 'text',
                    required: true,
                    admin: { description: 'Short description shown on the card' },
                },
            ],
            defaultValue: [
                { label: 'Sales', slug: 'sales', description: 'Transform sales planning and reporting' },
                { label: 'Marketing', slug: 'marketing', description: 'Accelerate go-to-market strategy and execution' },
                { label: 'Start Ups', slug: 'startups', description: 'Build investor-ready plans and presentations' },
                { label: 'Enterprise', slug: 'enterprise', description: 'Standardize planning across the organization' },
                { label: 'Not for Profit', slug: 'nonprofit', description: 'Track and communicate your mission' },
                { label: 'Project Management', slug: 'project-management', description: 'Plan, execute, and report on projects with clarity' },
                { label: 'Government', slug: 'government', description: 'Deliver accountable, evidence-based planning' },
            ],
        },
    ],
}
