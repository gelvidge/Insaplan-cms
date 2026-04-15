import type { Media } from '../../payload-types'

type MediaSize = 'thumbnail' | 'card' | 'hero' | 'og'

function isMedia(value: unknown): value is Media {
    return Boolean(value) && typeof value === 'object' && 'url' in (value as Record<string, unknown>)
}

export function resolveMediaURL(value: unknown, size?: MediaSize): string | null {
    if (!isMedia(value)) return null

    const sizedURL =
        size && value.sizes && typeof value.sizes === 'object'
            ? (value.sizes as Record<string, { url?: string | null } | undefined>)[size]?.url
            : undefined

    return sizedURL || value.url || null
}

