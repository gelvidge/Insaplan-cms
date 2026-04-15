import Background from '@/components/marketing/Background'
import CTA from '@/components/marketing/CTA'
import PageHero from '@/components/marketing/PageHero'
import { fetchPricingPlans, fetchPricingPage } from '@/lib/queries'
import PricingClient from './PricingClient'
import classes from './page.module.css'

const FALLBACK_PLANS = [
    {
        id: 'starter',
        planName: 'Starter',
        planType: 'starter',
        description: 'For individuals and small teams getting started with strategic planning.',
        monthlyPrice: 29,
        annualPrice: 23,
        currency: 'USD',
        popular: false,
        cta: { text: 'Start free trial', url: '/contact', variant: 'outline' },
        features: [
            { feature: 'plans', included: true, limit: '3' },
            { feature: 'team members', included: true, limit: '2' },
            { feature: 'planning frameworks', included: true, limit: '5' },
            { feature: 'PDF exports', included: true },
            { feature: 'Knowledge base', included: true },
            { feature: 'AI assistance', included: false },
            { feature: 'Custom branding', included: false },
            { feature: 'Priority support', included: false },
        ],
    },
    {
        id: 'professional',
        planName: 'Professional',
        planType: 'professional',
        description: 'For growing teams that need the full planning and reporting toolkit.',
        monthlyPrice: 79,
        annualPrice: 63,
        currency: 'USD',
        popular: true,
        cta: { text: 'Start free trial', url: '/contact', variant: 'primary' },
        features: [
            { feature: 'plans', included: true, limit: 'Unlimited' },
            { feature: 'team members', included: true, limit: '15' },
            { feature: 'planning frameworks', included: true, limit: 'All' },
            { feature: 'PDF exports', included: true },
            { feature: 'Knowledge base', included: true },
            { feature: 'AI assistance', included: true },
            { feature: 'Custom branding', included: true },
            { feature: 'Priority support', included: false },
        ],
    },
    {
        id: 'enterprise',
        planName: 'Enterprise',
        planType: 'enterprise',
        description: 'For large organisations that need security, control, and dedicated support.',
        monthlyPrice: 0,
        annualPrice: 0,
        currency: 'USD',
        popular: false,
        cta: { text: 'Contact us', url: '/contact', variant: 'outline' },
        features: [
            { feature: 'plans', included: true, limit: 'Unlimited' },
            { feature: 'team members', included: true, limit: 'Unlimited' },
            { feature: 'planning frameworks', included: true, limit: 'All' },
            { feature: 'PDF exports', included: true },
            { feature: 'Knowledge base', included: true },
            { feature: 'AI assistance', included: true },
            { feature: 'Custom branding', included: true },
            { feature: 'Priority support', included: true },
        ],
    },
]

export default async function PricingPage() {
    const [pp, rawPlans] = await Promise.all([
        fetchPricingPage().catch(() => null),
        fetchPricingPlans().catch(() => null),
    ])

    const plans = rawPlans && rawPlans.length > 0
        ? rawPlans.map((p: any) => ({
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
        : FALLBACK_PLANS

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <PageHero
                    title={(pp as any)?.heroTitle ?? 'Simple, transparent pricing'}
                    subtitle={(pp as any)?.heroSubtitle ?? 'Start free. Scale as your team grows. No hidden fees.'}
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
                <CTA />
            </div>
        </div>
    )
}
