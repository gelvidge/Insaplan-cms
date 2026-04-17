import type { Metadata } from 'next'
import Background from '@/components/marketing/Background'
import CTASection from '@/components/marketing/CTASection'
import PageHero from '@/components/marketing/PageHero'
import { fetchPricingPlans, fetchPricingPage } from '@/lib/queries'
import PricingClient from './PricingClient'
import classes from './page.module.css'

export async function generateMetadata(): Promise<Metadata> {
    const pp = await fetchPricingPage().catch(() => null)
    const title = pp?.seo?.metaTitle ?? pp?.heroTitle ?? 'Pricing'
    const description = pp?.seo?.metaDescription ?? pp?.heroSubtitle ?? ''
    return {
        title,
        description,
        openGraph: { title, description, url: 'https://insaplan.com/pricing' },
    }
}

export default async function PricingPage() {
    const [pp, rawPlans] = await Promise.all([
        fetchPricingPage().catch(() => null),
        fetchPricingPlans().catch(() => null),
    ])

    const plans = (rawPlans ?? []).map((p: any) => ({
        id: String(p.id),
        planName: p.planName,
        planType: p.planType,
        description: p.description,
        monthlyPrice: p.billingPeriod === 'monthly' ? p.price : Math.round(p.price / 12),
        annualPrice: p.billingPeriod === 'annual'
            ? Math.round(p.price / 12)
            : Math.round(p.price * 0.8),
        currency: p.currency ?? 'USD',
        popular: p.popular ?? false,
        cta: p.cta ?? { text: 'Get Started', url: '/contact', variant: 'primary' },
        features: (p.features ?? []).map((f: any) => ({
            feature: f.feature,
            included: f.included ?? true,
            limit: f.limit ?? undefined,
        })),
    }))

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <PageHero
                    title={(pp as any)?.heroTitle}
                    subtitle={(pp as any)?.heroSubtitle}
                />
                <div className={classes.body}>
                    <div className={classes.inner}>
                        <PricingClient
                            plans={plans}
                            monthlyLabel={(pp as any)?.monthlyLabel}
                            annualLabel={(pp as any)?.annualLabel}
                            annualDiscountBadge={(pp as any)?.annualDiscountBadge}
                            customPriceLabel={(pp as any)?.customPriceLabel}
                            perMonthSuffix={(pp as any)?.perMonthSuffix}
                            popularBadgeLabel={(pp as any)?.popularBadgeLabel}
                            billedAnnuallyLabel={(pp as any)?.billedAnnuallyLabel}
                        />
                    </div>
                </div>
                <CTASection />
            </div>
        </div>
    )
}
