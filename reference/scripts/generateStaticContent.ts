import fs from 'fs/promises'
import path from 'path'
import {
    fetchAllPages,
    fetchAllBlogPosts,
    fetchAllKnowledgeBase,
    fetchFAQs,
    fetchPricingPlans,
    fetchAllSolutions,
    fetchSiteSettings
} from '../src/utils/cms/fetchContent'

async function generateStaticContent() {
    console.log('🚀 Fetching content from PayloadCMS...')

    try {
        // Fetch all content in parallel
        const [
            pages,
            blogPostsResult,
            kbArticles,
            faqs,
            pricingPlans,
            solutions,
            siteSettings
        ] = await Promise.all([
            fetchAllPages(),
            fetchAllBlogPosts(1000),
            fetchAllKnowledgeBase(),
            fetchFAQs(),
            fetchPricingPlans(),
            fetchAllSolutions(),
            fetchSiteSettings()
        ])

        console.log('✓ Content fetched successfully')
        console.log(`  - Pages: ${pages.length}`)
        console.log(`  - Blog Posts: ${blogPostsResult.docs.length}`)
        console.log(`  - Knowledge Base: ${kbArticles.length}`)
        console.log(`  - FAQs: ${faqs.length}`)
        console.log(`  - Pricing Plans: ${pricingPlans.length}`)
        console.log(`  - Solutions: ${solutions.length}`)

        // Ensure output directory exists
        const contentDir = path.join(
            process.cwd(),
            'src',
            'generated-content'
        )
        await fs.mkdir(contentDir, { recursive: true })

        // Write content to JSON files
        await Promise.all([
            fs.writeFile(
                path.join(contentDir, 'pages.json'),
                JSON.stringify(pages, null, 2)
            ),
            fs.writeFile(
                path.join(contentDir, 'blog-posts.json'),
                JSON.stringify(blogPostsResult.docs, null, 2)
            ),
            fs.writeFile(
                path.join(contentDir, 'knowledge-base.json'),
                JSON.stringify(kbArticles, null, 2)
            ),
            fs.writeFile(
                path.join(contentDir, 'faqs.json'),
                JSON.stringify(faqs, null, 2)
            ),
            fs.writeFile(
                path.join(contentDir, 'pricing-plans.json'),
                JSON.stringify(pricingPlans, null, 2)
            ),
            fs.writeFile(
                path.join(contentDir, 'solutions.json'),
                JSON.stringify(solutions, null, 2)
            ),
            fs.writeFile(
                path.join(contentDir, 'site-settings.json'),
                JSON.stringify(siteSettings, null, 2)
            )
        ])

        // Generate route manifest for static pages
        const routeManifest = {
            pages: pages.map((p) => ({ slug: p.slug, title: p.title })),
            blogPosts: blogPostsResult.docs.map((p) => ({
                slug: p.slug,
                title: p.title
            })),
            knowledgeBase: kbArticles.map((a) => ({
                slug: a.slug,
                title: a.title
            })),
            solutions: solutions.map((s) => ({ slug: s.slug, title: s.title })),
            generatedAt: new Date().toISOString()
        }

        await fs.writeFile(
            path.join(contentDir, 'route-manifest.json'),
            JSON.stringify(routeManifest, null, 2)
        )

        console.log('✓ Static content generated successfully')
        console.log(`  Output directory: ${contentDir}`)
    } catch (error) {
        console.error('❌ Error generating static content:', error)
        process.exit(1)
    }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    generateStaticContent().catch(console.error)
}

export { generateStaticContent }
