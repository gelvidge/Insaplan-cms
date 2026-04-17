import type { Metadata } from 'next'
import { Box, Container, Title, Text, Stack, Grid, GridCol } from '@mantine/core'
import { IconCheck, IconBellRinging, IconFileExport } from '@tabler/icons-react'
import Background from '@/components/marketing/Background'
import PageHero from '@/components/marketing/PageHero'
import CTASection from '@/components/marketing/CTASection'
import SolutionChallenges from '@/components/marketing/SolutionChallenges'
import { fetchProductReportingPage } from '@/lib/queries'
import classes from './page.module.css'

export async function generateMetadata(): Promise<Metadata> {
    const pg = await fetchProductReportingPage().catch(() => null)
    const title = pg?.seo?.metaTitle ?? pg?.heroTitle ?? 'Reporting'
    const description = pg?.seo?.metaDescription ?? pg?.heroSubtitle ?? ''
    return {
        title,
        description,
        openGraph: { title, description, url: 'https://insaplan.com/product/reporting' },
    }
}

export default async function ProductReportingPage() {
    const pg = (await fetchProductReportingPage().catch(() => null)) ?? {}

    const heroTitle  = pg.heroTitle
    const heroSubtitle = pg.heroSubtitle
    const painPoints   = pg.painPoints      ?? []
    const dashboards   = pg.dashboards      ?? {}
    const outputs      = pg.reportingOutputs ?? {}

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <PageHero title={heroTitle} subtitle={heroSubtitle} />

                <SolutionChallenges challenges={painPoints} />

                {/* Dashboards */}
                <Box className={classes.dashboardSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 28, md: 44 }} align="center">
                            <GridCol span={{ base: 12, md: 5 }}>
                                <Stack gap="lg">
                                    <Text className={classes.kicker}>{dashboards.kicker}</Text>
                                    <Title order={2} className={classes.sectionTitle}>{dashboards.heading}</Title>
                                    <Text className={classes.sectionBody}>{dashboards.body}</Text>
                                    <Stack gap="sm">
                                        {(dashboards.points ?? []).map((p: { label: string }) => (
                                            <div key={p.label} className={classes.checkRow}>
                                                <div className={classes.checkIcon}><IconCheck size={14} /></div>
                                                <Text className={classes.checkText}>{p.label}</Text>
                                            </div>
                                        ))}
                                    </Stack>
                                </Stack>
                            </GridCol>
                            <GridCol span={{ base: 12, md: 7 }}>
                                <div className={classes.panel}>
                                    <div className={classes.panelHeader}>
                                        <span className={classes.panelEyebrow}>Live dashboard</span>
                                        <span className={classes.panelBadge}>3 alerts active</span>
                                    </div>
                                    <div className={classes.metricGrid}>
                                        {(dashboards.metrics ?? []).map((m: { label: string; value: string; tone: string }) => (
                                            <div key={m.label} className={classes.metricCard} data-tone={m.tone}>
                                                <span className={classes.metricValue}>{m.value}</span>
                                                <span className={classes.metricLabel}>{m.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={classes.chartCard}>
                                        <div className={classes.chartHeader}>
                                            <Text size="sm" fw={700} c="dark.7">Execution vs impact</Text>
                                            <div className={classes.alertPill}>
                                                <IconBellRinging size={13} />
                                                <span>Notifications enabled</span>
                                            </div>
                                        </div>
                                        <svg viewBox="0 0 420 220" className={classes.chartSvg} aria-hidden>
                                            <defs>
                                                <linearGradient id="reportingLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="rgba(92, 68, 201, 0.9)" />
                                                    <stop offset="100%" stopColor="rgba(38, 139, 255, 0.85)" />
                                                </linearGradient>
                                            </defs>
                                            {[40, 80, 120, 160, 200].map((y) => (
                                                <line key={y} x1="30" y1={y} x2="390" y2={y} stroke="rgba(22, 32, 51, 0.08)" strokeWidth="1" />
                                            ))}
                                            {[{ x: 60, h: 76 }, { x: 120, h: 94 }, { x: 180, h: 118 }, { x: 240, h: 134 }, { x: 300, h: 150 }].map((bar, i) => (
                                                <rect key={i} x={bar.x} y={190 - bar.h} width="26" height={bar.h} rx="8" fill="rgba(92, 68, 201, 0.16)" />
                                            ))}
                                            <path d="M43 146 C82 136, 122 128, 162 112 C198 98, 238 88, 278 76 C314 64, 350 58, 382 50" fill="none" stroke="url(#reportingLine)" strokeWidth="5" strokeLinecap="round" />
                                            {[[43,146],[102,132],[162,112],[222,92],[282,74],[382,50]].map(([x,y], i) => (
                                                <circle key={i} cx={x} cy={y} r="6" fill="white" stroke="rgba(38,139,255,0.7)" strokeWidth="3" />
                                            ))}
                                        </svg>
                                    </div>
                                    <div className={classes.tagRow}>
                                        {(dashboards.tags ?? []).map((t: { label: string }) => (
                                            <span key={t.label} className={classes.tag}>{t.label}</span>
                                        ))}
                                    </div>
                                </div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* Reporting Outputs */}
                <Box className={classes.reportSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 28, md: 44 }} align="center">
                            <GridCol span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
                                <div className={classes.panel}>
                                    <div className={classes.reportShell}>
                                        <div className={classes.reportMain}>
                                            <div className={classes.reportPageHeader}>
                                                <span className={classes.reportTitle}>Monthly strategy report</span>
                                                <span className={classes.reportMeta}>Template: leadership pack</span>
                                            </div>
                                            <div className={classes.reportHeroBlock}>
                                                <div>
                                                    <span className={classes.reportHeroLabel}>Headline status</span>
                                                    <strong className={classes.reportHeroValue}>76% of initiatives on track</strong>
                                                </div>
                                                <div className={classes.exportPill}>
                                                    <IconFileExport size={13} />
                                                    <span>PDF and spreadsheet ready</span>
                                                </div>
                                            </div>
                                            <div className={classes.templateList}>
                                                {(outputs.templateRows ?? []).map((row: { label: string; width: string }) => (
                                                    <div key={row.label} className={classes.templateRow}>
                                                        <span className={classes.templateLabel}>{row.label}</span>
                                                        <span className={classes.templateBar} style={{ width: row.width }} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={classes.reportRail}>
                                            <span className={classes.reportRailTitle}>Output formats</span>
                                            <div className={classes.formatList}>
                                                {(outputs.formats ?? []).map((f: { label: string }) => (
                                                    <span key={f.label} className={classes.formatItem}>{f.label}</span>
                                                ))}
                                            </div>
                                            <div className={classes.spreadsheetCard}>
                                                <div className={classes.sheetHeader}><span /><span /><span /></div>
                                                <div className={classes.sheetBody}>
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <div key={i} className={classes.sheetRow}>
                                                            <span className={classes.sheetCellWide} />
                                                            <span className={classes.sheetCell} />
                                                            <span className={classes.sheetCell} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GridCol>
                            <GridCol span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
                                <Stack gap="lg">
                                    <Text className={classes.kicker}>{outputs.kicker}</Text>
                                    <Title order={2} className={classes.sectionTitle}>{outputs.heading}</Title>
                                    <Text className={classes.sectionBody}>{outputs.body}</Text>
                                    <Stack gap="sm">
                                        {(outputs.points ?? []).map((p: { label: string }) => (
                                            <div key={p.label} className={classes.checkRow}>
                                                <div className={classes.checkIcon}><IconCheck size={14} /></div>
                                                <Text className={classes.checkText}>{p.label}</Text>
                                            </div>
                                        ))}
                                    </Stack>
                                </Stack>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                <CTASection />
            </div>
        </div>
    )
}
