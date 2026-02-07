import type { CollectionConfig } from 'payload'
import { isAdminOrEditor, publicRead } from '../access'

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticDir: '../media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre'
            },
            {
                name: 'card',
                width: 768,
                height: 512,
                position: 'centre'
            },
            {
                name: 'hero',
                width: 1920,
                height: 1080,
                position: 'centre'
            },
            {
                name: 'og',
                width: 1200,
                height: 630,
                position: 'centre'
            }
        ],
        mimeTypes: ['image/*', 'video/*', 'application/pdf']
    },
    access: {
        read: publicRead,
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        delete: isAdminOrEditor
    },
    admin: {
        group: 'Media'
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            label: 'Alt Text',
            required: true,
            admin: {
                description: 'Describe the image for accessibility and SEO'
            }
        },
        {
            name: 'caption',
            type: 'text',
            label: 'Caption'
        }
    ]
}
