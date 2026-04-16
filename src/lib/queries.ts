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

export async function fetchMarketingHome() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'marketing-home' as any }) as any
}

export async function fetchFooter() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'footer' as any }) as any
}

export async function fetchContactPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'contact-page' as any }) as any
}

export async function fetchBlogPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'blog-page' as any }) as any
}

export async function fetchPricingPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'pricing-page' as any }) as any
}

export async function fetchLegalPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'legal-page' as any }) as any
}

export async function fetchSupportPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'support-page' as any }) as any
}

export async function fetchKnowledgeBasePage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'knowledge-base-page' as any }) as any
}

export async function fetchSiteMetadata() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'site-metadata' as any }) as any
}

export async function fetchProductFeaturesPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'product-features-page' as any }) as any
}

export async function fetchProductOverviewPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'product-overview-page' as any }) as any
}

export async function fetchProductPlanningPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'product-planning-page' as any }) as any
}

export async function fetchProductReportingPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'product-reporting-page' as any }) as any
}

export async function fetchSolutionsPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'solutions-page' as any }) as any
}

export async function fetchNavigationMenu(location: 'header' | 'footer' | 'mobile') {
    const payload = await getPayloadClient()
    const result = await payload.find({
        collection: 'navigation-menus',
        where: { location: { equals: location } },
        limit: 1,
    })
    return result.docs[0] || null
}

export async function fetchSolutionBySlug(slug: string) {
    const payload = await getPayloadClient()
    const result = await payload.find({
        collection: 'solutions',
        where: {
            slug: { equals: slug },
            status: { equals: 'published' },
        },
        limit: 1,
    })
    return result.docs[0] || null
}

export async function fetchFAQsPage() {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'faqs-page' as any }) as any
}

export async function fetchFAQs() {
    const payload = await getPayloadClient()
    const result = await payload.find({
        collection: 'faqs',
        sort: 'order',
        limit: 200,
    })
    return result.docs
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
