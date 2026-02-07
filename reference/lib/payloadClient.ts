import { GraphQLClient } from 'graphql-request'

const PAYLOAD_API_URL =
    import.meta.env.VITE_PAYLOAD_API_URL || 'http://localhost:3001/api'
const PAYLOAD_API_KEY = import.meta.env.VITE_PAYLOAD_API_KEY

// GraphQL client for queries
export const payloadGraphQL = new GraphQLClient(`${PAYLOAD_API_URL}/graphql`, {
    headers: PAYLOAD_API_KEY
        ? {
              Authorization: `Bearer ${PAYLOAD_API_KEY}`
          }
        : {}
})

// REST client for specific needs
export const payloadRest = {
    async get<T = any>(
        endpoint: string,
        params?: Record<string, any>
    ): Promise<T> {
        const url = new URL(`${PAYLOAD_API_URL}${endpoint}`)

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    url.searchParams.append(key, String(value))
                }
            })
        }

        const headers: HeadersInit = {
            'Content-Type': 'application/json'
        }

        if (PAYLOAD_API_KEY) {
            headers['Authorization'] = `Bearer ${PAYLOAD_API_KEY}`
        }

        const response = await fetch(url.toString(), { headers })

        if (!response.ok) {
            throw new Error(
                `Payload API error: ${response.status} ${response.statusText}`
            )
        }

        return response.json()
    },

    async post<T = any>(endpoint: string, data: any): Promise<T> {
        const url = `${PAYLOAD_API_URL}${endpoint}`

        const headers: HeadersInit = {
            'Content-Type': 'application/json'
        }

        if (PAYLOAD_API_KEY) {
            headers['Authorization'] = `Bearer ${PAYLOAD_API_KEY}`
        }

        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(
                `Payload API error: ${response.status} ${response.statusText}`
            )
        }

        return response.json()
    }
}

// Cache for API responses (5 minutes TTL)
const CACHE_TTL = 5 * 60 * 1000
const cache = new Map<
    string,
    { data: any; timestamp: number; expiresAt: number }
>()

export async function fetchWithCache<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl: number = CACHE_TTL
): Promise<T> {
    const cached = cache.get(key)
    const now = Date.now()

    if (cached && now < cached.expiresAt) {
        return cached.data
    }

    const data = await fetcher()
    cache.set(key, {
        data,
        timestamp: now,
        expiresAt: now + ttl
    })

    return data
}

// Clear cache (useful for development)
export function clearCache(key?: string) {
    if (key) {
        cache.delete(key)
    } else {
        cache.clear()
    }
}
