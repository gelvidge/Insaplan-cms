'use client'

import { motion } from 'framer-motion'
import classes from './ProblemsSection.module.css'

interface Problem { problem: string; solution: string }
interface ProblemsSectionProps {
    heading: string
    subheading: string
    problems: Problem[]
}

const spring = [0.22, 1, 0.36, 1] as [number, number, number, number]

const rowVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}
const leftVariants = {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: spring } },
}
const rightVariants = {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: spring } },
}
const arrowVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: spring } },
}

export default function ProblemsSection({ problems }: ProblemsSectionProps) {
    return (
        <section className={classes.root}>
            <div className={classes.inner}>
                {/* Column labels */}
                <div className={classes.colRow} aria-hidden="true">
                    <div className={classes.colLabelBefore}>Current reality</div>
                    <div className={classes.colGap} />
                    <div className={classes.colLabelAfter}>With Insaplan</div>
                </div>

                {/* Rows */}
                {problems.map((item, i) => (
                    <motion.div
                        key={i}
                        className={classes.row}
                        variants={rowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.div className={classes.problemCell} variants={leftVariants}>
                            <span className={classes.xDot} aria-hidden="true" />
                            <p className={classes.problemText}>{item.problem}</p>
                        </motion.div>

                        <motion.div className={classes.arrow} variants={arrowVariants} aria-hidden="true">
                            <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                                <path d="M0 6h24M18 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </motion.div>

                        <motion.div className={classes.solutionCell} variants={rightVariants}>
                            <span className={classes.checkDot} aria-hidden="true" />
                            <p className={classes.solutionText}>{item.solution}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
