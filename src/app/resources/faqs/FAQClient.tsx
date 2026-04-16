'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
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

const spring = [0.22, 1, 0.36, 1] as [number, number, number, number]

const itemVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: spring } },
}

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
}

export default function FAQClient({ grouped, categoryLabels }: FAQClientProps) {
    const [open, setOpen] = useState<string | null>(null)
    const categories = Object.keys(grouped)

    return (
        <LayoutGroup>
        <div className={classes.sections}>
            {categories.map((cat) => (
                <motion.section
                    key={cat}
                    className={classes.group}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.h2 className={classes.groupHeading} variants={itemVariant}>
                        {categoryLabels[cat] ?? cat}
                    </motion.h2>

                    <div className={classes.list}>
                        {grouped[cat].map((faq) => {
                            const isOpen = open === faq.id
                            return (
                                <motion.div key={faq.id} className={classes.item} variants={itemVariant}>
                                    <button
                                        className={classes.question}
                                        onClick={() => setOpen(isOpen ? null : faq.id)}
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.question}</span>
                                        <motion.span
                                            className={classes.chevron}
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.25, ease: spring }}
                                            aria-hidden="true"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </motion.span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                className={classes.answer}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: spring }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div className={classes.answerInner}>
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.section>
            ))}
        </div>
        </LayoutGroup>
    )
}
