'use client'

import { useState } from 'react'
import classes from './faq.module.css'

interface FAQItem {
    id: string
    question: string
    answer: string
    category: string
}

interface FAQClientProps {
    grouped: Record<string, FAQItem[]>
    categoryLabels: Record<string, string>
}

export default function FAQClient({ grouped, categoryLabels }: FAQClientProps) {
    const [open, setOpen] = useState<string | null>(null)
    const categories = Object.keys(grouped)

    return (
        <div className={classes.sections}>
            {categories.map((cat) => (
                <section key={cat} className={classes.group}>
                    <h2 className={classes.groupHeading}>
                        {categoryLabels[cat] ?? cat}
                    </h2>

                    <div className={classes.list}>
                        {grouped[cat].map((faq) => {
                            const isOpen = open === faq.id
                            return (
                                <div key={faq.id} className={classes.item}>
                                    <button
                                        className={classes.question}
                                        onClick={() => setOpen(isOpen ? null : faq.id)}
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.question}</span>
                                        <span
                                            className={`${classes.chevron} ${isOpen ? classes.chevronOpen : ''}`}
                                            aria-hidden="true"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </button>

                                    <div className={`${classes.answer} ${isOpen ? classes.answerOpen : ''}`}>
                                        <div className={classes.answerInner}>
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            ))}
        </div>
    )
}
