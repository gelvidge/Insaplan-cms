import type { Metadata } from 'next'
import { IconClock } from '@tabler/icons-react'
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
        keywords: pp?.seo?.keywords?.split(',').map((k: string) => k.trim()).filter(Boolean) ?? [],
        openGraph: { title, description, url: 'https://insaplan.com/pricing' },
    }
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.insaplan.com'

function ComingSoon() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '48px 24px' }}>
            <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '48px 56px',
                textAlign: 'center',
                maxWidth: '480px',
                boxShadow: '0 2px 16px rgba(20,28,48,0.08)',
            }}>
                <div style={{ marginBottom: '16px', color: '#2853a4' }}><IconClock size={40} stroke={1.5} /></div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111e36', margin: '0 0 12px' }}>
                    Pricing Coming Soon
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'rgba(20,36,70,0.6)', lineHeight: 1.6, margin: 0 }}>
                    Pricing will be available closer to launch. In the meantime,{' '}
                    <a href="/contact" style={{ color: '#2853a4', fontWeight: 600 }}>get in touch</a>
                    {' '}to discuss your needs.
                </p>
            </div>
        </div>
    )
}

export default async function PricingPage() {
    const [pp, rawPlans] = await Promise.all([
        fetchPricingPage().catch(() => null),
        fetchPricingPlans().catch(() => null),
    ])

    const comingSoon = (pp as any)?.comingSoon !== false

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
        cta: {
            text: p.cta?.text ?? 'Get Started',
            url: `${APP_URL}/auth/signup`,
            variant: p.cta?.variant ?? 'primary',
        },
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
                        {comingSoon ? (
                            <ComingSoon />
                        ) : (
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
                        )}
                    </div>
                </div>
                <CTASection />
            </div>
        </div>
    )
}
