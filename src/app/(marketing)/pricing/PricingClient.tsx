'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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

const spring = [0.22, 1, 0.36, 1] as [number, number, number, number]

const cardVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: spring } },
}

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
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
                    <motion.span
                        className={classes.toggleThumb}
                        animate={{ x: annual ? 20 : 2 }}
                        transition={{ duration: 0.25, ease: spring }}
                    />
                </button>
                <span className={`${classes.toggleLabel} ${annual ? classes.toggleLabelActive : ''}`}>
                    {annualLabel}
                    <span className={classes.saveBadge}>{annualDiscountBadge}</span>
                </span>
            </div>

            {/* Plan cards */}
            <motion.div
                className={classes.grid}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {plans.map((plan) => {
                    const price = annual ? plan.annualPrice : plan.monthlyPrice
                    const sym = currencySymbols[plan.currency] ?? '$'
                    const isTbd = plan.monthlyPrice === 0
                    const isCustom = plan.planType === 'custom' && !isTbd
                    const isHighPrice = !isTbd && !isCustom && price > 1000

                    return (
                        <motion.article
                            key={plan.id}
                            className={`${classes.card} ${plan.popular ? classes.cardPopular : ''}`}
                            variants={cardVariant}
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
                                            <motion.span
                                                key={annual ? 'annual' : 'monthly'}
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2, ease: spring }}
                                            >
                                                {price}
                                            </motion.span>
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
                        </motion.article>
                    )
                })}
            </motion.div>
        </div>
    )
}
