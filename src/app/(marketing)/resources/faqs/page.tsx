import Background from '@/components/marketing/Background'
import PageHero from '@/components/marketing/PageHero'
import { fetchFAQs, fetchFAQsPage } from '@/lib/queries'
import FAQClient from './FAQClient'
import classes from './faq.module.css'

// Extract plain text from Payload Lexical richText nodes
function lexicalToPlainText(node: any): string {
    if (!node) return ''
    if (node.text) return node.text
    if (node.children) return node.children.map(lexicalToPlainText).join('')
    return ''
}

export default async function FAQPage() {
    const [rawFaqs, fp] = await Promise.all([
        fetchFAQs().catch(() => null),
        fetchFAQsPage().catch(() => null),
    ])

    const heroTitle = fp?.heroTitle
    const heroSubtitle = fp?.heroSubtitle
    const emptyStateMessage = fp?.emptyStateMessage

    const categoryEntries: { slug: string; label: string }[] = fp?.categoryLabels ?? []
    const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
        categoryEntries.map((c: any) => [c.slug, c.label])
    )
    const CATEGORY_ORDER = categoryEntries.map((c: any) => c.slug)

    const faqs = rawFaqs && rawFaqs.length > 0
        ? rawFaqs.map((f: any) => ({
              id: String(f.id),
              question: f.question,
              answer: typeof f.answer === 'string'
                  ? f.answer
                  : lexicalToPlainText(f.answer?.root ?? f.answer),
              category: f.category ?? 'general',
          }))
        : []

    // Group by category in CMS-defined order
    const grouped: Record<string, typeof faqs> = {}
    for (const cat of CATEGORY_ORDER) {
        const items = faqs.filter((f: any) => f.category === cat)
        if (items.length > 0) grouped[cat] = items
    }
    // Catch any categories not in the ordered list
    for (const faq of faqs) {
        if (!grouped[faq.category]) {
            grouped[faq.category] = faqs.filter((f: any) => f.category === faq.category)
        }
    }

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <PageHero title={heroTitle} subtitle={heroSubtitle} />
                <div className={classes.body}>
                    <div className={classes.inner}>
                        {Object.keys(grouped).length > 0 ? (
                            <FAQClient grouped={grouped} categoryLabels={CATEGORY_LABELS} />
                        ) : (
                            <p className={classes.empty}>{emptyStateMessage}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
