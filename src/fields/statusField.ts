import type { Field } from 'payload'

export const statusField: Field = {
    name: 'status',
    type: 'select',
    label: 'Status',
    required: true,
    defaultValue: 'draft',
    options: [
        {
            label: 'Draft',
            value: 'draft'
        },
        {
            label: 'Published',
            value: 'published'
        },
        {
            label: 'Archived',
            value: 'archived'
        }
    ],
    admin: {
        position: 'sidebar'
    }
}
