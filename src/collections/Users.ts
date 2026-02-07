import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminOrSelf } from '../access'

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
        group: 'Admin'
    },
    access: {
        read: isAdminOrSelf,
        create: isAdmin,
        update: isAdminOrSelf,
        delete: isAdmin
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },
        {
            name: 'role',
            type: 'select',
            required: true,
            defaultValue: 'editor',
            options: [
                {
                    label: 'Admin',
                    value: 'admin'
                },
                {
                    label: 'Editor',
                    value: 'editor'
                },
                {
                    label: 'Viewer',
                    value: 'viewer'
                }
            ],
            access: {
                create: isAdmin,
                update: isAdmin
            }
        }
    ]
}
