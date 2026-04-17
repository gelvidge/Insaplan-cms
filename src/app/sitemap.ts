import type { MetadataRoute } from 'next'
import { fetchBlogPosts, fetchSolutions } from '@/lib/queries'

const BASE_URL = 'https://insaplan.com'

const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/pricing`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/solutions`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/product/overview`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/product/planning`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/product/reporting`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/product/visuals`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/product/features`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/contact`, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/resources/faqs`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/resources/support`, priority: 0.5, changeFrequency: 'monthly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [{ docs: posts }, solutions] = await Promise.all([
        fetchBlogPosts(1000, 1).catch(() => ({ docs: [] })),
        fetchSolutions().catch(() => []),
    ])

    const blogRoutes: MetadataRoute.Sitemap = posts.map((post: any) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : undefined,
        priority: 0.6,
        changeFrequency: 'monthly' as const,
    }))

    const solutionRoutes: MetadataRoute.Sitemap = solutions.map((s: any) => ({
        url: `${BASE_URL}/solutions/${s.slug}`,
        lastModified: s.updatedAt ? new Date(s.updatedAt) : undefined,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
    }))

    return [...staticRoutes, ...blogRoutes, ...solutionRoutes]
}
