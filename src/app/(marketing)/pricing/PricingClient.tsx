'use client'

import { useState } from 'react'
import { IconCheck, IconMinus } from '@tabler/icons-react'
import classes from './pricing.module.css'

interface PlanFeature {
    feature: string
    included: boolean
    limit?: string
}

interface Plan {
    id: string
    planName: string
    planType: string
    description: string
    monthlyPrice: number
    annualPrice: number
    currency: string
    features: PlanFeature[]
    cta: { text: string; url: string; variant: string }
    popular: boolean
}

interface PricingClientProps {
    plans: Plan[]
    monthlyLabel?: string
    annualLabel?: string
    annualDiscountBadge?: string
    customPriceLabel?: string
    perMonthSuffix?: string
    popularBadgeLabel?: string
    billedAnnuallyLabel?: string
}

const currencySymbols: Record<string, string> = { USD: '$', EUR: '€', GBP: '£' }

export default function PricingClient({
    plans,
    monthlyLabel,
    annualLabel,
    annualDiscountBadge,
    customPriceLabel,
    perMonthSuffix,
    popularBadgeLabel,
    billedAnnuallyLabel,
}: PricingClientProps) {
    const [annual, setAnnual] = useState(false)

    return (
        <div className={classes.clientRoot}>
            {/* Billing toggle */}
            <div className={classes.toggleRow}>
                <span className={`${classes.toggleLabel} ${!annual ? classes.toggleLabelActive : ''}`}>{monthlyLabel}</span>
                <button
                    className={`${classes.toggle} ${annual ? classes.toggleOn : ''}`}
                    onClick={() => setAnnual(v => !v)}
                    role="switch"
                    aria-checked={annual}
                    aria-label="Toggle annual billing"
                >
                    <span className={`${classes.toggleThumb} ${annual ? classes.toggleThumbOn : ''}`} />
                </button>
                <span className={`${classes.toggleLabel} ${annual ? classes.toggleLabelActive : ''}`}>
                    {annualLabel}
                    <span className={classes.saveBadge}>{annualDiscountBadge}</span>
                </span>
            </div>

            {/* Plan cards */}
            <div className={classes.grid}>
                {plans.map((plan) => {
                    const price = annual ? plan.annualPrice : plan.monthlyPrice
                    const sym = currencySymbols[plan.currency] ?? '$'
                    const isTbd = plan.monthlyPrice === 0
                    const isCustom = plan.planType === 'custom' && !isTbd
                    const isHighPrice = !isTbd && !isCustom && price > 1000

                    return (
                        <article
                            key={plan.id}
                            className={`${classes.card} ${plan.popular ? classes.cardPopular : ''}`}
                        >
                            {plan.popular && (
                                <div className={classes.popularBadge}>{popularBadgeLabel}</div>
                            )}

                            <div className={classes.cardHeader}>
                                <h3 className={classes.planName}>{plan.planName}</h3>
                                <p className={classes.planDesc}>{plan.description}</p>
                            </div>

                            <div className={classes.priceRow}>
                                {isTbd ? (
                                    <span className={classes.priceCustom}>TBD</span>
                                ) : isCustom || isHighPrice ? (
                                    <span className={classes.priceCustom}>{customPriceLabel}</span>
                                ) : (
                                    <>
                                        <span className={classes.priceCurrency}>{sym}</span>
                                        <span className={classes.priceAmount}>
                                            <span
                                                key={annual ? 'annual' : 'monthly'}
                                                className={classes.priceValue}
                                            >
                                                {price}
                                            </span>
                                        </span>
                                        <span className={classes.pricePer}>{perMonthSuffix}</span>
                                    </>
                                )}
                            </div>
                            {!isCustom && annual && (
                                <p className={classes.annualNote}>{billedAnnuallyLabel}</p>
                            )}

                            <a
                                href={plan.cta.url || '#'}
                                className={`${classes.ctaButton} ${plan.popular ? classes.ctaButtonPrimary : classes.ctaButtonOutline}`}
                            >
                                {plan.cta.text}
                            </a>

                            <ul className={classes.featureList}>
                                {plan.features.map((f, i) => (
                                    <li key={i} className={`${classes.featureItem} ${!f.included ? classes.featureItemExcluded : ''}`}>
                                        <span className={`${classes.featureIcon} ${f.included ? classes.featureIconCheck : classes.featureIconMinus}`}>
                                            {f.included ? <IconCheck size={13} /> : <IconMinus size={13} />}
                                        </span>
                                        <span className={classes.featureText}>
                                            {f.limit ? <><strong>{f.limit}</strong> {f.feature}</> : f.feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
