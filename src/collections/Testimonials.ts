import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    admin: {
        useAsTitle: 'author',
        defaultColumns: ['author', 'company', 'rating', 'featured', 'order'],
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
            name: 'quote',
            type: 'textarea',
            required: true,
            maxLength: 500,
            admin: {
                description: 'Keep it concise and impactful (max 500 characters)'
            }
        },
        {
            name: 'author',
            type: 'text',
            required: true
        },
        {
            name: 'role',
            type: 'text',
            required: true,
            admin: {
                description: 'E.g., "CEO", "Product Manager"'
            }
        },
        {
            name: 'company',
            type: 'text',
            required: true
        },
        {
            name: 'companyLogo',
            type: 'upload',
            relationTo: 'media',
            label: 'Company Logo'
        },
        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
            label: 'Author Photo'
        },
        {
            name: 'rating',
            type: 'number',
            min: 1,
            max: 5,
            defaultValue: 5,
            admin: {
                position: 'sidebar',
                description: 'Rating out of 5'
            }
        },
        {
            name: 'featured',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                position: 'sidebar',
                description: 'Show on homepage'
            }
        },
        {
            name: 'order',
            type: 'number',
            required: true,
            defaultValue: 0,
            admin: {
                position: 'sidebar'
            }
        }
    ]
}
