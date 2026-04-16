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
        { name: 'heroTitle', type: 'text'},
        { name: 'heroSubtitle', type: 'text'},
        { name: 'sectionHeading', type: 'text'},
        { name: 'sectionSubheading', type: 'text'},
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
        },
    ],
}
