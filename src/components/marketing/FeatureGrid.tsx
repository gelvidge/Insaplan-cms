'use client'

import { motion } from 'framer-motion'
import { ThemeIcon } from '@mantine/core'
import {
    IconChartBar, IconPalette, IconBrain,
    IconAdjustments, IconBooks, IconDatabase,
} from '@tabler/icons-react'
import classes from './FeatureGrid.module.css'

type FeatureIconKey = 'chart-bar' | 'palette' | 'brain' | 'adjustments' | 'books' | 'database'

const iconMap: Record<FeatureIconKey, React.ComponentType<{ size?: number }>> = {
    'chart-bar': IconChartBar,
    palette:     IconPalette,
    brain:       IconBrain,
    adjustments: IconAdjustments,
    books:       IconBooks,
    database:    IconDatabase,
}

interface Feature {
    icon?: string
    title: string
    description: string
    benefits?: { label: string }[]
}

interface FeatureGridProps {
    heading: string
    subheading: string
    features: Feature[]
}

const spring = [0.22, 1, 0.36, 1] as [number, number, number, number]

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: spring } },
}

const headingVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: spring } },
}

// Indices of features that get the wide card treatment (span 2 cols, show screenshot)
const WIDE_INDICES = new Set([0, 3])

function MockScreen({ variant }: { variant: 'dashboard' | 'report' | 'knowledge' }) {
    return (
        <div className={classes.mockScreen}>
            <div className={classes.mockChrome}>
                <span /><span /><span />
            </div>
            <div className={classes.mockBody}>
                {variant === 'dashboard' && (
                    <>
                        <div className={classes.mockSidebar}>
                            <div className={classes.mockSidebarItem} />
                            <div className={classes.mockSidebarItem} />
                            <div className={classes.mockSidebarItem} />
                            <div className={classes.mockSidebarItem} />
                        </div>
                        <div className={classes.mockCanvas}>
                            <div className={classes.mockChartRow}>
                                <div className={classes.mockBar} style={{ height: '60%' }} />
                                <div className={classes.mockBar} style={{ height: '80%' }} />
                                <div className={classes.mockBar} style={{ height: '45%' }} />
                                <div className={classes.mockBar} style={{ height: '90%' }} />
                                <div className={classes.mockBar} style={{ height: '65%' }} />
                            </div>
                            <div className={classes.mockStatRow}>
                                <div className={classes.mockStat} />
                                <div className={classes.mockStat} />
                                <div className={classes.mockStat} />
                            </div>
                        </div>
                    </>
                )}
                {variant === 'report' && (
                    <>
                        <div className={classes.mockCanvas} style={{ padding: '12px 14px' }}>
                            <div className={classes.mockReportHeader} />
                            <div className={classes.mockReportLine} style={{ width: '80%' }} />
                            <div className={classes.mockReportLine} style={{ width: '65%' }} />
                            <div className={classes.mockReportInfographic} />
                            <div className={classes.mockReportLine} style={{ width: '90%' }} />
                            <div className={classes.mockReportLine} style={{ width: '55%' }} />
                        </div>
                    </>
                )}
                {variant === 'knowledge' && (
                    <>
                        <div className={classes.mockSidebar}>
                            <div className={classes.mockSidebarItem} />
                            <div className={classes.mockSidebarItem} />
                            <div className={classes.mockSidebarItem} />
                        </div>
                        <div className={classes.mockCanvas}>
                            <div className={classes.mockSearchBar} />
                            <div className={classes.mockTagRow}>
                                <div className={classes.mockTag} />
                                <div className={classes.mockTag} style={{ width: '52px' }} />
                                <div className={classes.mockTag} style={{ width: '44px' }} />
                            </div>
                            <div className={classes.mockKbCard} />
                            <div className={classes.mockKbCard} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

const mockVariants: Array<'dashboard' | 'report' | 'knowledge'> = ['dashboard', 'report', 'knowledge']

export default function FeatureGrid({ heading, subheading, features }: FeatureGridProps) {
    return (
        <section className={classes.root}>
            <div className={classes.inner}>
                <motion.div
                    className={classes.header}
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <h2 className={classes.heading}>{heading}</h2>
                    <p className={classes.sub}>{subheading}</p>
                </motion.div>

                <motion.div
                    className={classes.grid}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {features.map((f, i) => {
                        const Icon = (f.icon && iconMap[f.icon as FeatureIconKey]) || IconChartBar
                        const isWide = WIDE_INDICES.has(i)
                        const mockVariantIndex = Array.from(WIDE_INDICES).indexOf(i)
                        const mockVariant = mockVariants[mockVariantIndex] ?? 'dashboard'

                        return (
                            <motion.article
                                key={i}
                                className={`${classes.card} ${isWide ? classes.cardWide : ''}`}
                                variants={cardVariant}
                            >
                                <div className={classes.cardContent}>
                                    <ThemeIcon
                                        size={40}
                                        radius="md"
                                        variant="gradient"
                                        gradient={{ from: 'deepblue.7', to: 'violet.5', deg: 135 }}
                                        className={classes.icon}
                                    >
                                        <Icon size={20} />
                                    </ThemeIcon>
                                    <h3 className={classes.title}>{f.title}</h3>
                                    <p className={classes.desc}>{f.description}</p>
                                    {f.benefits && f.benefits.length > 0 && (
                                        <div className={classes.pills}>
                                            {f.benefits.slice(0, 3).map((b, j) => (
                                                <span key={j} className={classes.pill}>{b.label}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {isWide && (
                                    <div className={classes.cardScreenshot}>
                                        <MockScreen variant={mockVariant} />
                                    </div>
                                )}
                            </motion.article>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
