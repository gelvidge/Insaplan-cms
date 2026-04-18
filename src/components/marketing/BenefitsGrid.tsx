import { ThemeIcon } from '@mantine/core'
import {
    IconClock, IconPalette, IconAdjustments, IconBooks, IconDatabase, IconSparkles,
} from '@tabler/icons-react'
import classes from './FeatureGrid.module.css'

type BenefitIconKey = 'clock' | 'palette' | 'adjustments' | 'books' | 'database' | 'sparkles'

const iconMap: Record<BenefitIconKey, React.ComponentType<{ size?: number }>> = {
    clock:       IconClock,
    palette:     IconPalette,
    adjustments: IconAdjustments,
    books:       IconBooks,
    database:    IconDatabase,
    sparkles:    IconSparkles,
}

interface Benefit {
    icon?: string
    title: string
    description: string
    pills?: { label: string }[]
}

interface BenefitsGridProps {
    heading: string
    subheading: string
    benefits: Benefit[]
}

// Indices of benefits that get the wide card treatment (span 2 cols, show screenshot)
const WIDE_INDICES = new Set([0, 3, 4])

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

const mockVariants: Array<'dashboard' | 'report' | 'knowledge'> = ['report', 'knowledge', 'dashboard']

export default function BenefitsGrid({ heading, subheading, benefits }: BenefitsGridProps) {
    return (
        <section className={classes.root}>
            <div className={classes.inner}>
                <div className={classes.header}>
                    <h2 className={classes.heading}>{heading}</h2>
                    <p className={classes.sub}>{subheading}</p>
                </div>

                <div className={classes.grid}>
                    {benefits.map((b, i) => {
                        const Icon = (b.icon && iconMap[b.icon as BenefitIconKey]) || IconSparkles
                        const isWide = WIDE_INDICES.has(i)
                        const mockVariantIndex = Array.from(WIDE_INDICES).indexOf(i)
                        const mockVariant = mockVariants[mockVariantIndex] ?? 'dashboard'

                        const flipped = i === 0 || i === 4
                        return (
                            <article
                                key={i}
                                className={`${classes.card} ${isWide ? classes.cardWide : ''}`}
                            >
                                {isWide && flipped && (
                                    <div className={`${classes.cardScreenshot} ${classes.cardScreenshotLeft}`}>
                                        <MockScreen variant={mockVariant} />
                                    </div>
                                )}
                                <div className={classes.cardContent}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <ThemeIcon
                                            size={40}
                                            radius="md"
                                            variant="gradient"
                                            gradient={{ from: 'navy.7', to: 'violet.5', deg: 135 }}
                                            className={classes.icon}
                                        >
                                            <Icon size={20} />
                                        </ThemeIcon>
                                        <h3 className={classes.title}>{b.title}</h3>
                                    </div>
                                    <p className={classes.desc}>{b.description}</p>
                                    {b.pills && b.pills.length > 0 && (
                                        <div className={classes.pills}>
                                            {b.pills.slice(0, 3).map((p, j) => (
                                                <span key={j} className={classes.pill}>{p.label}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {isWide && !flipped && (
                                    <div className={classes.cardScreenshot}>
                                        <MockScreen variant={mockVariant} />
                                    </div>
                                )}
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
