import { notFound } from 'next/navigation'
import { IconClock, IconCalendar } from '@tabler/icons-react'
import Background from '@/components/marketing/Background'
import CTASection from '@/components/marketing/CTASection'
import { fetchBlogPost, fetchBlogPosts, fetchBlogPage } from '@/lib/queries'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import classes from './page.module.css'
import BlogArticle from './BlogArticle'

const DEFAULT_CATEGORY_LABELS: Record<string, string> = {
    'product-updates': 'Product Updates',
    'company-news': 'Company News',
    'best-practices': 'Best Practices',
    'case-studies': 'Case Studies',
    'industry-insights': 'Industry Insights',
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await fetchBlogPost(slug)
    if (!post) return { title: 'Post Not Found' }
    const title = post.seo?.metaTitle ?? post.title
    const description = post.seo?.metaDescription ?? post.excerpt ?? ''
    return {
        title,
        description,
        keywords: post.seo?.keywords?.split(',').map((k: string) => k.trim()).filter(Boolean) ?? [],
        openGraph: {
            type: 'article',
            title,
            description,
            url: `https://insaplan.com/blog/${slug}`,
            publishedTime: post.publishedDate,
            modifiedTime: post.updatedAt,
        },
        twitter: { card: 'summary_large_image', title, description },
    }
}

export const dynamicParams = true

export async function generateStaticParams() {
    const { docs: posts } = await fetchBlogPosts(1000, 1)
    return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const [post, blogPage] = await Promise.all([
        fetchBlogPost(slug),
        fetchBlogPage().catch(() => null),
    ])
    if (!post) notFound()

    const date = new Date(post.publishedDate).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric',
    })

    const CATEGORY_LABELS: Record<string, string> = blogPage?.categoryLabels?.length
        ? Object.fromEntries(blogPage.categoryLabels.map((c: any) => [c.slug, c.label]))
        : DEFAULT_CATEGORY_LABELS

    const category = CATEGORY_LABELS[post.category] ?? post.category

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt ?? '',
        datePublished: post.publishedDate,
        dateModified: post.updatedAt ?? post.publishedDate,
        author: { '@type': 'Organization', name: 'Insaplan', url: 'https://insaplan.com' },
        publisher: { '@type': 'Organization', name: 'Insaplan', url: 'https://insaplan.com' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://insaplan.com/blog/${post.slug}` },
    }

    return (
        <div className={classes.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Background />
            <div className={classes.content}>

                {/* Hero */}
                <div className={classes.hero}>
                    <div className={classes.heroInner}>
                        <div className={classes.heroMeta}>
                            <span className={classes.categoryBadge}>{category}</span>
                            {post.readTime && (
                                <span className={classes.heroDivider}>·</span>
                            )}
                            {post.readTime && (
                                <span className={classes.heroMetaItem}>
                                    <IconClock size={13} />
                                    {post.readTime} min read
                                </span>
                            )}
                            <span className={classes.heroDivider}>·</span>
                            <span className={classes.heroMetaItem}>
                                <IconCalendar size={13} />
                                {date}
                            </span>
                        </div>
                        <h1 className={classes.heroTitle}>{post.title}</h1>
                        <p className={classes.heroExcerpt}>{post.excerpt}</p>
                    </div>

                    {/* Image placeholder beneath headline */}
                    <div className={classes.heroImage}>
                        <div className={classes.heroImageOrb} style={{ top: -60, right: -60, width: 300, height: 300, background: 'radial-gradient(circle, rgba(120,80,220,0.3), transparent 70%)' }} />
                        <div className={classes.heroImageOrb} style={{ bottom: -40, left: -40, width: 220, height: 220, background: 'radial-gradient(circle, rgba(60,160,255,0.2), transparent 70%)' }} />
                        <div className={classes.heroImageContent}>
                            {/* Mock bar chart */}
                            <div className={classes.mockDoc}>
                                <div className={classes.mockDocHeading} />
                                <div className={classes.mockDocLine} style={{ width: '60%' }} />
                            </div>
                            <div className={classes.mockBars}>
                                {[50, 75, 40, 90, 60, 80, 55, 70, 45, 85].map((h, i) => (
                                    <div key={i} className={classes.mockBar} style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article body */}
                <div className={classes.articleWrap}>
                    <article className={classes.article}>

                        <BlogArticle>
                            {post.content && <RichText data={post.content} />}
                        </BlogArticle>

                        <div style={{ clear: 'both' }} />

                        {post.tags && post.tags.length > 0 && (
                            <div className={classes.tags}>
                                <span className={classes.tagsLabel}>Tags:</span>
                                {post.tags.map((tag: string) => (
                                    <span key={tag} className={classes.tag}>{tag}</span>
                                ))}
                            </div>
                        )}
                    </article>
                </div>

                <CTASection />
            </div>
        </div>
    )
}
