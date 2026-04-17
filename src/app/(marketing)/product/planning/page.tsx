import type { Metadata } from 'next'
import { Box, Container, Title, Text, Stack, Grid, GridCol } from '@mantine/core'
import { IconCheck, IconColumns, IconRoute, IconTimeline } from '@tabler/icons-react'
import Background from '@/components/marketing/Background'
import PageHero from '@/components/marketing/PageHero'
import CTASection from '@/components/marketing/CTASection'
import SolutionChallenges from '@/components/marketing/SolutionChallenges'
import { fetchProductPlanningPage } from '@/lib/queries'
import classes from './page.module.css'

export async function generateMetadata(): Promise<Metadata> {
    const pg = await fetchProductPlanningPage().catch(() => null)
    const title = pg?.seo?.metaTitle ?? pg?.heroTitle ?? 'Planning'
    const description = pg?.seo?.metaDescription ?? pg?.heroSubtitle ?? ''
    return {
        title,
        description,
        keywords: pg?.seo?.keywords?.split(',').map((k: string) => k.trim()).filter(Boolean) ?? [],
        openGraph: { title, description, url: 'https://insaplan.com/product/planning' },
    }
}

const VIEW_ICONS: Record<string, React.ComponentType<{ size: number; stroke: number }>> = {
    timeline: IconTimeline,
    columns:  IconColumns,
    route:    IconRoute,
}

export default async function ProductPlanningPage() {
    const pg = (await fetchProductPlanningPage().catch(() => null)) ?? {}

    const heroTitle    = pg.heroTitle
    const heroSubtitle = pg.heroSubtitle
    const painPoints   = pg.painPoints    ?? []
    const templates    = pg.templates     ?? {}
    const metrics      = pg.metrics       ?? {}
    const tracking     = pg.tracking      ?? {}
    const linked       = pg.linkedPlanning ?? {}
    const ai           = pg.aiPlanning    ?? {}

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <PageHero title={heroTitle} subtitle={heroSubtitle} />

                <SolutionChallenges challenges={painPoints} />

                {/* Templates */}
                <Box className={classes.templateSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 24, md: 36 }} align="stretch">
                            <GridCol span={{ base: 12, md: 7 }}>
                                <div className={classes.templatePanel}>
                                    <Text className={classes.kicker}>{templates.kicker}</Text>
                                    <Title order={2} className={classes.sectionTitle} c="purple.4">{templates.heading}</Title>
                                    <Text className={classes.sectionBody}>{templates.body}</Text>
                                    <div className={classes.pillCloud}>
                                        {(templates.pills ?? []).map((p: { label: string }) => (
                                            <span key={p.label} className={classes.pill}>{p.label}</span>
                                        ))}
                                    </div>
                                </div>
                            </GridCol>
                            <GridCol span={{ base: 12, md: 5 }}>
                                <div className={classes.summaryPanel}>
                                    <div className={classes.summaryMetric}>
                                        <span className={classes.metricValue}>{templates.stat1Value}</span>
                                        <span className={classes.metricLabel}>{templates.stat1Label}</span>
                                    </div>
                                    <div className={classes.summaryMetric}>
                                        <span className={classes.metricValue}>{templates.stat2Value}</span>
                                        <span className={classes.metricLabel}>{templates.stat2Label}</span>
                                    </div>
                                    <div className={classes.summaryCallout}>{templates.callout}</div>
                                </div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* Key Metrics */}
                <Box className={classes.metricsSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 24, md: 36 }} align="center">
                            <GridCol span={{ base: 12, md: 5 }}>
                                <Text className={classes.kicker}>{metrics.kicker}</Text>
                                <Title order={2} className={classes.sectionTitle} c="blue.5">{metrics.heading}</Title>
                                <Text className={classes.sectionBody}>{metrics.body}</Text>
                                <Stack gap="sm" mt="lg">
                                    {(metrics.points ?? []).map((p: { label: string }) => (
                                        <div key={p.label} className={classes.checkRow}>
                                            <div className={classes.checkIcon}><IconCheck size={14} /></div>
                                            <Text className={classes.checkText}>{p.label}</Text>
                                        </div>
                                    ))}
                                </Stack>
                            </GridCol>
                            <GridCol span={{ base: 12, md: 7 }}>
                                <div className={classes.metricsPanel}>
                                    <div className={classes.metricsHeader}>
                                        <span className={classes.metricsBadge}>{metrics.badgeLabel}</span>
                                        <span className={classes.metricsMiniStat}>{metrics.miniStat}</span>
                                    </div>
                                    <div className={classes.metricsCloud}>
                                        {(metrics.pills ?? []).map((p: { label: string }) => (
                                            <span key={p.label} className={classes.metricPill}>{p.label}</span>
                                        ))}
                                    </div>
                                    <div className={classes.metricsRail}>
                                        <div className={classes.metricTile}>
                                            <span className={classes.metricTileLabel}>Primary KPI</span>
                                            <span className={classes.metricTileValue}>Revenue Growth</span>
                                        </div>
                                        <div className={classes.metricTile}>
                                            <span className={classes.metricTileLabel}>Owner</span>
                                            <span className={classes.metricTileValue}>Commercial Strategy</span>
                                        </div>
                                        <div className={classes.metricTile}>
                                            <span className={classes.metricTileLabel}>Risk Status</span>
                                            <span className={classes.metricTileValue}>2 dependencies flagged</span>
                                        </div>
                                    </div>
                                </div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* Tracking / Views */}
                <Box className={classes.viewsSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 24, md: 36 }} align="center">
                            <GridCol span={{ base: 12, md: 4 }}>
                                <Text className={classes.kicker}>{tracking.kicker}</Text>
                                <Title order={2} className={classes.sectionTitle} c="green.5">{tracking.heading}</Title>
                                <Text className={classes.sectionBody}>{tracking.body}</Text>
                            </GridCol>
                            <GridCol span={{ base: 12, md: 8 }}>
                                <div className={classes.viewGrid}>
                                    {(tracking.views ?? []).map((v: { label: string; description: string; icon: string }) => {
                                        const Icon = VIEW_ICONS[v.icon] ?? IconTimeline
                                        return (
                                            <div key={v.label} className={classes.viewCard}>
                                                <div className={classes.viewIcon}><Icon size={18} stroke={1.7} /></div>
                                                <Title order={4} className={classes.viewTitle}>{v.label}</Title>
                                                <Text className={classes.viewDescription}>{v.description}</Text>
                                                <div className={classes.viewLines}><span /><span /><span /></div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* Linked Planning */}
                <Box className={classes.linkSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 24, md: 36 }} align="center">
                            <GridCol span={{ base: 12, md: 5 }}>
                                <Text className={classes.kicker}>{linked.kicker}</Text>
                                <Title order={2} className={classes.sectionTitle} c="purple.4">{linked.heading}</Title>
                                <Text className={classes.sectionBody}>{linked.body}</Text>
                                <Stack gap="sm" mt="lg">
                                    {(linked.points ?? []).map((p: { label: string }) => (
                                        <div key={p.label} className={classes.checkRow}>
                                            <div className={classes.checkIcon}><IconCheck size={14} /></div>
                                            <Text className={classes.checkText}>{p.label}</Text>
                                        </div>
                                    ))}
                                </Stack>
                            </GridCol>
                            <GridCol span={{ base: 12, md: 7 }}>
                                <div className={classes.mapPanel}>
                                    <div className={classes.mapNodePrimary}>Corporate Strategy</div>
                                    <div className={classes.mapNodeSecondary} data-pos="one">Revenue Plan</div>
                                    <div className={classes.mapNodeSecondary} data-pos="two">Product Priorities</div>
                                    <div className={classes.mapNodeSecondary} data-pos="three">Marketing Campaigns</div>
                                    <div className={classes.mapNodeTertiary} data-pos="one">Q3 Pipeline Review</div>
                                    <div className={classes.mapNodeTertiary} data-pos="two">Launch Readiness</div>
                                    <div className={classes.mapNodeTertiary} data-pos="three">Regional Rollout</div>
                                    {/*
                                      * SVG connectors.
                                      * viewBox="0 0 100 380" — x is percentage of width, y is px.
                                      * preserveAspectRatio="none" stretches x to fill width while y stays px.
                                      * Column centres: col1=16.67, col2=50, col3=83.33
                                      * Primary:   top=24, h=48  → bottom-centre y=72
                                      * Secondary: top=140, h=44 → top y=140, bottom y=184
                                      * Tertiary:  top=296        → top y=296
                                      */}
                                    <svg className={classes.connectorSvg} viewBox="0 0 100 380" preserveAspectRatio="none" aria-hidden="true">
                                        <defs>
                                            <linearGradient id="connectorGrad" x1="0" y1="0" x2="0" y2="380" gradientUnits="userSpaceOnUse">
                                                <stop offset="0%" stopColor="rgba(46,64,114,0.4)" />
                                                <stop offset="100%" stopColor="rgba(100,49,127,0.3)" />
                                            </linearGradient>
                                        </defs>
                                        {/* Primary bottom-centre → secondary top-centres */}
                                        <line x1="50"    y1="72" x2="16.67" y2="140" />
                                        <line x1="50"    y1="72" x2="50"    y2="140" />
                                        <line x1="50"    y1="72" x2="83.33" y2="140" />
                                        {/* Secondary bottom-centres → tertiary top-centres (vertical) */}
                                        <line x1="16.67" y1="184" x2="16.67" y2="296" />
                                        <line x1="50"    y1="184" x2="50"    y2="296" />
                                        <line x1="83.33" y1="184" x2="83.33" y2="296" />
                                    </svg>
                                </div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* AI Planning */}
                <Box className={classes.aiSection}>
                    <Container size="xl">
                        <div className={classes.aiPanel}>
                            <div className={classes.aiIntro}>
                                <Text className={classes.kicker}>{ai.kicker}</Text>
                                <Title order={2} className={classes.sectionTitle} c="blue.5">{ai.heading}</Title>
                                <Text className={classes.sectionBody}>{ai.body}</Text>
                                <div className={classes.sourcePills}>
                                    {(ai.sourcePills ?? []).map((p: { label: string }) => (
                                        <span key={p.label} className={classes.sourcePill}>{p.label}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={classes.aiSteps}>
                                {(ai.steps ?? []).map((s: { label: string }, i: number) => (
                                    <div key={i} className={classes.aiStep}>
                                        <span className={classes.aiStepNumber}>{String(i + 1).padStart(2, '0')}</span>
                                        <Text className={classes.aiStepText}>{s.label}</Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Box>

                <CTASection />
            </div>
        </div>
    )
}
