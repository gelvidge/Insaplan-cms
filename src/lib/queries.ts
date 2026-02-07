import { getPayloadClient } from './payload'

export async function fetchBlogPosts(limit = 10, page = 1) {
    const payload = await getPayloadClient()
    return payload.find({
        collection: 'blog-posts',
        where: { status: { equals: 'published' } },
        sort: '-publishedDate',
        limit,
        page,
    })
}

export async function fetchBlogPost(slug: string) {
    const payload = await getPayloadClient()
    const result = await payload.find({
        collection: 'blog-posts',
        where: {
            slug: { equals: slug },
            status: { equals: 'published' },
        },
        limit: 1,
    })
    return result.docs[0] || null
}

export async function fetchPricingPlans() {
    const payload = await getPayloadClient()
    const result = await payload.find({
        collection: 'pricing-plans',
        sort: 'order',
        limit: 100,
    })
    return result.docs
}

export async function fetchSiteSettings() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'site-settings' })
}

export async function createFormSubmission(data: {
    formType: 'contact' | 'demo' | 'waitlist' | 'newsletter' | 'support'
    name?: string
    email: string
    company?: string
    message?: string
}) {
    const payload = await getPayloadClient()
    return payload.create({
        collection: 'form-submissions',
        data: {
            ...data,
            submittedAt: new Date().toISOString(),
            status: 'new',
        },
    })
}
