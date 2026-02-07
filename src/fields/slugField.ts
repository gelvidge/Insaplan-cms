import type { Field } from 'payload'

export const slugField: Field = {
    name: 'slug',
    type: 'text',
    label: 'Slug',
    required: true,
    unique: true,
    index: true,
    admin: {
        position: 'sidebar',
        description: 'URL-friendly identifier'
    },
    hooks: {
        beforeValidate: [
            ({ value, data }) => {
                if (!value && data?.title) {
                    return data.title
                        .toLowerCase()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/--+/g, '-')
                        .trim()
                }
                return value
            }
        ]
    }
}
