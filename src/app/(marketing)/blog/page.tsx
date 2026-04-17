import type { Metadata } from 'next'
import Link from 'next/link'
import Background from '@/components/marketing/Background'
import PageHero from '@/components/marketing/PageHero'
import CTASection from '@/components/marketing/CTASection'
import { fetchBlogPosts, fetchBlogPage } from '@/lib/queries'
import classes from './page.module.css'

export async function generateMetadata(): Promise<Metadata> {
    const copy = await fetchBlogPage().catch(() => null)
    const title = copy?.seo?.metaTitle ?? copy?.heroTitle ?? 'Blog'
    const description = copy?.seo?.metaDescription ?? copy?.heroSubtitle ?? ''
    return {
        title,
        description,
        openGraph: { title, description, url: 'https://insaplan.com/blog' },
    }
}

// Different decorative placeholder visuals cycling through card index
function CardImagePlaceholder({ index, category }: { index: number; category: string }) {
    const variant = index % 4

    return (
        <div className={classes.cardImage}>
            <div className={classes.cardImageInner}>
                {/* Ambient orbs */}
                <div className={classes.imgOrb} style={{
                    width: 180, height: 180,
                    top: -40, right: -40,
                    background: index % 2 === 0
                        ? 'radial-gradient(circle, rgba(120,80,220,0.35), transparent 70%)'
                        : 'radial-gradient(circle, rgba(60,140,255,0.3), transparent 70%)',
                }} />
                <div className={classes.imgOrb} style={{
                    width: 140, height: 140,
                    bottom: -30, left: -20,
                    background: 'radial-gradient(circle, rgba(80,180,160,0.2), transparent 70%)',
                }} />

                {variant === 0 && (
                    /* Bar chart */
                    <>
                        <div className={classes.imgDoc} style={{ bottom: 'auto', top: 20, right: 24, left: 24 }}>
                            <div className={classes.imgDocHeading} />
                            <div className={classes.imgDocLine} style={{ width: '70%' }} />
                        </div>
                        <div className={classes.imgBars}>
                            {[55, 80, 45, 90, 65, 75, 50].map((h, i) => (
                                <div key={i} className={classes.imgBar} style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </>
                )}

                {variant === 1 && (
                    /* Document / report */
                    <div className={classes.imgDoc} style={{ top: 28, gap: 10 }}>
                        <div className={classes.imgDocHeading} style={{ width: '60%', height: 16 }} />
                        <div className={classes.imgDocLine} style={{ width: '85%' }} />
                        <div className={classes.imgDocLine} style={{ width: '70%' }} />
                        <div className={classes.imgDocLine} style={{ width: '78%' }} />
                        <div style={{ height: 36, borderRadius: 8, background: 'rgba(148,180,255,0.18)', marginTop: 6 }} />
                        <div className={classes.imgDocLine} style={{ width: '65%' }} />
                        <div className={classes.imgDocLine} style={{ width: '80%' }} />
                    </div>
                )}

                {variant === 2 && (
                    /* Network / nodes */
                    <>
                        <div className={classes.imgNode} style={{ top: '30%', left: '50%' }} />
                        <div className={classes.imgNode} style={{ top: '55%', left: '25%', width: 8, height: 8 }} />
                        <div className={classes.imgNode} style={{ top: '20%', left: '30%', width: 7, height: 7 }} />
                        <div className={classes.imgNode} style={{ top: '60%', left: '65%', width: 9, height: 9 }} />
                        <div className={classes.imgNode} style={{ top: '40%', left: '75%', width: 7, height: 7 }} />
                        <div className={classes.imgLine} style={{ top: '32%', left: '25%', width: '80px', transform: 'rotate(25deg)' }} />
                        <div className={classes.imgLine} style={{ top: '32%', left: '51%', width: '60px', transform: 'rotate(40deg)' }} />
                        <div className={classes.imgLine} style={{ top: '32%', left: '51%', width: '70px', transform: 'rotate(-30deg)' }} />
                        <div className={classes.imgLine} style={{ top: '32%', left: '51%', width: '90px', transform: 'rotate(15deg)' }} />
                        <div style={{
                            position: 'absolute', bottom: 20, left: 24, right: 24,
                            height: 28, borderRadius: 6,
                            background: 'rgba(255,255,255,0.07)',
                        }} />
                    </>
                )}

                {variant === 3 && (
                    /* Donut + stats */
                    <>
                        <div className={classes.imgDonut} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -60%) rotate(-30deg)' }} />
                        <div style={{ position: 'absolute', bottom: 20, left: 24, right: 24, display: 'flex', gap: 8 }}>
                            {[1, 2, 3].map(i => (
                                <div key={i} style={{ flex: 1, height: 32, borderRadius: 6, background: 'rgba(255,255,255,0.08)' }} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Category pill overlaid on image */}
            <div className={classes.imgCategory}>{category}</div>
        </div>
    )
}

export default async function BlogListingPage() {
    const [{ docs: posts }, copy] = await Promise.all([
        fetchBlogPosts(12, 1),
        fetchBlogPage().catch(() => null),
    ])

    const heroTitle = copy?.heroTitle
    const heroSubtitle = copy?.heroSubtitle
    const emptyStateHeading = copy?.emptyStateHeading
    const emptyStateMessage = copy?.emptyStateMessage
    const readMoreLabel = copy?.readMoreLabel
    const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
        (copy?.categoryLabels ?? []).map((c: any) => [c.slug, c.label])
    )

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <PageHero title={heroTitle} subtitle={heroSubtitle} />

                <div className={classes.body}>
                    <div className={classes.inner}>
                        {posts.length > 0 ? (
                            <div className={classes.grid}>
                                {posts.map((post, i) => {
                                    const isFeatured = i === 0
                                    const category = CATEGORY_LABELS[post.category] ?? post.category
                                    const date = new Date(post.publishedDate).toLocaleDateString('en-GB', {
                                        day: 'numeric', month: 'long', year: 'numeric',
                                    })
                                    return (
                                        <Link
                                            key={post.id}
                                            href={`/blog/${post.slug}`}
                                            className={`${classes.card} ${isFeatured ? classes.cardFeatured : ''}`}
                                        >
                                            <CardImagePlaceholder index={i} category={category} />
                                            <div className={classes.cardBody}>
                                                <div className={classes.cardMeta}>
                                                    {post.readTime && (
                                                        <span className={classes.readTime}>{post.readTime} min read</span>
                                                    )}
                                                </div>
                                                <h2 className={`${classes.cardTitle} ${isFeatured ? classes.cardTitleFeatured : ''}`}>
                                                    {post.title}
                                                </h2>
                                                <p className={classes.cardExcerpt}>{post.excerpt}</p>
                                                <div className={classes.cardFooter}>
                                                    <span className={classes.date}>{date}</span>
                                                    <span className={classes.readMore}>{readMoreLabel}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className={classes.empty}>
                                <h3 className={classes.emptyHeading}>{emptyStateHeading}</h3>
                                <p className={classes.emptyMessage}>{emptyStateMessage}</p>
                            </div>
                        )}
                    </div>
                </div>

                <CTASection />
            </div>
        </div>
    )
}
