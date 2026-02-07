import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const Changelog: CollectionConfig = {
    slug: 'changelog',
    admin: {
        useAsTitle: 'version',
        defaultColumns: ['version', 'title', 'releaseDate', 'breaking'],
        group: 'Content'
    },
    access: {
        read: publicRead,
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        delete: isAdminOrEditor
    },
    fields: [
        {
            name: 'version',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                description: 'Semantic version (e.g., "1.2.0")'
            }
        },
        {
            name: 'releaseDate',
            type: 'date',
            required: true,
            label: 'Release Date',
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'title',
            type: 'text',
            required: true,
            admin: {
                description: 'Release title or theme'
            }
        },
        {
            name: 'summary',
            type: 'textarea',
            required: true,
            admin: {
                description: 'Brief overview of this release'
            }
        },
        {
            name: 'changes',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'type',
                    type: 'select',
                    required: true,
                    options: [
                        { label: '✨ Feature', value: 'feature' },
                        { label: '🔧 Improvement', value: 'improvement' },
                        { label: '🐛 Bug Fix', value: 'bugfix' },
                        { label: '🔒 Security', value: 'security' },
                        { label: '📚 Documentation', value: 'documentation' }
                    ]
                },
                {
                    name: 'description',
                    type: 'text',
                    required: true
                }
            ]
        },
        {
            name: 'breaking',
            type: 'checkbox',
            defaultValue: false,
            label: 'Breaking Changes',
            admin: {
                position: 'sidebar',
                description: 'Does this release include breaking changes?'
            }
        },
        {
            name: 'breakingDescription',
            type: 'textarea',
            admin: {
                condition: (data) => data.breaking === true,
                description: 'Describe the breaking changes and migration steps'
            }
        }
    ]
}
