import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const NavigationMenus: CollectionConfig = {
    slug: 'navigation-menus',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'location'],
        group: 'Configuration'
    },
    access: {
        read: publicRead,
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        delete: isAdminOrEditor
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            admin: {
                description: 'Internal name for this menu'
            }
        },
        {
            name: 'location',
            type: 'select',
            required: true,
            unique: true,
            options: [
                { label: 'Header', value: 'header' },
                { label: 'Footer', value: 'footer' },
                { label: 'Mobile', value: 'mobile' }
            ]
        },
        {
            name: 'items',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true
                },
                {
                    name: 'type',
                    type: 'select',
                    required: true,
                    defaultValue: 'custom',
                    options: [
                        { label: 'Custom Link', value: 'custom' },
                        { label: 'Page', value: 'page' },
                        { label: 'Dropdown', value: 'dropdown' }
                    ]
                },
                {
                    name: 'url',
                    type: 'text',
                    admin: {
                        condition: (data, siblingData) => siblingData?.type === 'custom'
                    }
                },
                {
                    name: 'page',
                    type: 'relationship',
                    relationTo: 'pages',
                    admin: {
                        condition: (data, siblingData) => siblingData?.type === 'page'
                    }
                },
                {
                    name: 'children',
                    type: 'array',
                    admin: {
                        condition: (data, siblingData) => siblingData?.type === 'dropdown'
                    },
                    fields: [
                        {
                            name: 'label',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'url',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'description',
                            type: 'text'
                        }
                    ]
                },
                {
                    name: 'openInNewTab',
                    type: 'checkbox',
                    defaultValue: false
                }
            ]
        }
    ]
}
