import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access'

export const FormSubmissions: CollectionConfig = {
    slug: 'form-submissions',
    admin: {
        useAsTitle: 'email',
        defaultColumns: ['formType', 'email', 'status', 'submittedAt'],
        group: 'Forms'
    },
    access: {
        read: isAdminOrEditor,
        create: () => true, // Allow public form submissions
        update: isAdminOrEditor,
        delete: isAdminOrEditor
    },
    fields: [
        {
            name: 'formType',
            type: 'select',
            required: true,
            options: [
                { label: 'Contact', value: 'contact' },
                { label: 'Demo Request', value: 'demo' },
                { label: 'Waitlist', value: 'waitlist' },
                { label: 'Newsletter', value: 'newsletter' },
                { label: 'Support', value: 'support' }
            ],
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'name',
            type: 'text'
        },
        {
            name: 'email',
            type: 'email',
            required: true
        },
        {
            name: 'company',
            type: 'text'
        },
        {
            name: 'phone',
            type: 'text'
        },
        {
            name: 'message',
            type: 'textarea'
        },
        {
            name: 'metadata',
            type: 'json',
            admin: {
                description: 'Additional form data (UTM params, referrer, etc.)'
            }
        },
        {
            name: 'submittedAt',
            type: 'date',
            required: true,
            defaultValue: () => new Date().toISOString(),
            admin: {
                position: 'sidebar',
                readOnly: true
            }
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'new',
            options: [
                { label: 'New', value: 'new' },
                { label: 'Contacted', value: 'contacted' },
                { label: 'Converted', value: 'converted' },
                { label: 'Spam', value: 'spam' }
            ],
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'source',
            type: 'text',
            admin: {
                position: 'sidebar',
                description: 'UTM source or referrer'
            }
        },
        {
            name: 'notes',
            type: 'textarea',
            admin: {
                description: 'Internal notes about this submission'
            }
        }
    ]
}
