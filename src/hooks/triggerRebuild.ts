import type { CollectionAfterChangeHook } from 'payload'

// Webhook trigger for auto-rebuild
export const triggerRebuild: CollectionAfterChangeHook = async ({
    doc,
    req,
    operation,
    collection
}) => {
    // Only trigger rebuild on published content updates
    if (operation === 'update' && doc.status === 'published') {
        const webhookUrl = process.env.REBUILD_WEBHOOK_URL

        if (!webhookUrl) {
            req.payload.logger.warn(
                `No REBUILD_WEBHOOK_URL configured - skipping rebuild trigger for ${collection.slug}`
            )
            return doc
        }

        try {
            req.payload.logger.info(
                `Triggering rebuild for ${collection.slug}:${doc.slug || doc.id}`
            )

            await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'PayloadCMS-Webhook'
                },
                body: JSON.stringify({
                    collection: collection.slug,
                    document: {
                        id: doc.id,
                        slug: doc.slug,
                        title: doc.title || doc.name
                    },
                    timestamp: new Date().toISOString(),
                    operation
                })
            })

            req.payload.logger.info(
                `✓ Rebuild triggered successfully for ${collection.slug}`
            )
        } catch (error) {
            req.payload.logger.error(
                `Failed to trigger rebuild for ${collection.slug}: ${error instanceof Error ? error.message : String(error)}`
            )
            // Don't fail the document save if webhook fails
        }
    }

    return doc
}

// Export helper to add to collections
export function withRebuildHook(collectionConfig: any) {
    return {
        ...collectionConfig,
        hooks: {
            ...collectionConfig.hooks,
            afterChange: [
                ...(collectionConfig.hooks?.afterChange || []),
                triggerRebuild
            ]
        }
    }
}
