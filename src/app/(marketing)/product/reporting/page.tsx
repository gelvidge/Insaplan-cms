import { Box, Container, Title, Text, Stack, Grid, GridCol } from '@mantine/core'
import { IconCheck, IconBellRinging, IconFileExport } from '@tabler/icons-react'
import Background from '@/components/marketing/Background'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'
import SolutionChallenges from '@/components/marketing/SolutionChallenges'
import { fetchProductReportingPage } from '@/lib/queries'
import classes from './page.module.css'

const PAIN_POINTS = [
    {
        title: 'Manual progress reporting',
        description: 'Are you generating progress reports for projects manually?',
        icon: 'presentation',
        color: '124,58,237',
    },
    {
        title: 'Impact is hard to see',
        description: 'Having difficulties in seeing the impact your plans have on the organisation?',
        icon: 'chart',
        color: '34,139,230',
    },
    {
        title: 'No feedback loop',
        description: 'No feedback loop to assess which activities bring the most benefit?',
        icon: 'target',
        color: '34,197,94',
    },
]

const DASHBOARD_POINTS = [
    'Generate your own dashboard to track the performance and execution of your plans.',
    'Monitor key metrics in one place instead of stitching together multiple files and status updates.',
    'Receive notifications when progress slips, milestones move, or metrics fall outside target ranges.',
    'Create a clear feedback loop between strategic activity and organisational impact.',
]

const REPORT_POINTS = [
    'Generate flexible PDF reports and spreadsheet presentations using predefined templates or your own layouts.',
    'Produce audience-specific packs for leadership, programme teams, boards, or external stakeholders without rebuilding the same report twice.',
    'Turn the same reporting data into polished narrative documents, status summaries, and exportable working files.',
    'Keep reporting consistent across the organisation while still adapting output to the audience in front of you.',
]

const DASHBOARD_METRICS = [
    { label: 'On-track initiatives', value: '24', tone: 'purple' },
    { label: 'Plans needing attention', value: '5', tone: 'amber' },
    { label: 'Impact signals improved', value: '+18%', tone: 'green' },
]

const DASHBOARD_TAGS = ['Execution', 'Impact', 'Milestones', 'Alerts', 'KPIs', 'Ownership']

const REPORT_FORMATS = ['Board PDF', 'Status Pack', 'Programme Summary', 'Spreadsheet Export', 'Custom Template']

const TEMPLATE_ROWS = [
    { label: 'Executive summary', width: '88%' },
    { label: 'Progress by workstream', width: '74%' },
    { label: 'Impact outcomes', width: '81%' },
    { label: 'Risks and next actions', width: '67%' },
]

export default async function ProductReportingPage() {
    const pg = await fetchProductReportingPage().catch(() => null) ?? {}

    const heroTitle = pg.heroTitle
    const heroSubtitle = pg.heroSubtitle

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <PageHero title={heroTitle} subtitle={heroSubtitle} />

                <SolutionChallenges challenges={PAIN_POINTS} />

                <Box className={classes.dashboardSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 28, md: 44 }} align="center">
                            <GridCol span={{ base: 12, md: 5 }}>
                                <Stack gap="lg">
                                    <Text className={classes.kicker}>Dashboards</Text>
                                    <Title order={2} className={classes.sectionTitle}>
                                        Build your own dashboard for plan performance and execution
                                    </Title>
                                    <Text className={classes.sectionBody}>
                                        Reporting should not start at the end of the month. Create dashboards that show how
                                        plans are executing right now, which activities are moving the needle, and where the
                                        organisation needs to intervene next.
                                    </Text>
                                    <Stack gap="sm">
                                        {DASHBOARD_POINTS.map((point) => (
                                            <div key={point} className={classes.checkRow}>
                                                <div className={classes.checkIcon}>
                                                    <IconCheck size={14} />
                                                </div>
                                                <Text className={classes.checkText}>{point}</Text>
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
                                        {DASHBOARD_METRICS.map((metric) => (
                                            <div key={metric.label} className={classes.metricCard} data-tone={metric.tone}>
                                                <span className={classes.metricValue}>{metric.value}</span>
                                                <span className={classes.metricLabel}>{metric.label}</span>
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
                                                <line
                                                    key={y}
                                                    x1="30"
                                                    y1={y}
                                                    x2="390"
                                                    y2={y}
                                                    stroke="rgba(22, 32, 51, 0.08)"
                                                    strokeWidth="1"
                                                />
                                            ))}
                                            {[
                                                { x: 60, h: 76 },
                                                { x: 120, h: 94 },
                                                { x: 180, h: 118 },
                                                { x: 240, h: 134 },
                                                { x: 300, h: 150 },
                                            ].map((bar, index) => (
                                                <rect
                                                    key={index}
                                                    x={bar.x}
                                                    y={190 - bar.h}
                                                    width="26"
                                                    height={bar.h}
                                                    rx="8"
                                                    fill="rgba(92, 68, 201, 0.16)"
                                                />
                                            ))}
                                            <path
                                                d="M43 146 C82 136, 122 128, 162 112 C198 98, 238 88, 278 76 C314 64, 350 58, 382 50"
                                                fill="none"
                                                stroke="url(#reportingLine)"
                                                strokeWidth="5"
                                                strokeLinecap="round"
                                            />
                                            {[
                                                [43, 146],
                                                [102, 132],
                                                [162, 112],
                                                [222, 92],
                                                [282, 74],
                                                [382, 50],
                                            ].map(([x, y], index) => (
                                                <circle key={index} cx={x} cy={y} r="6" fill="white" stroke="rgba(38,139,255,0.7)" strokeWidth="3" />
                                            ))}
                                        </svg>
                                    </div>
                                    <div className={classes.tagRow}>
                                        {DASHBOARD_TAGS.map((tag) => (
                                            <span key={tag} className={classes.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

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
                                                {TEMPLATE_ROWS.map((row) => (
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
                                                {REPORT_FORMATS.map((format) => (
                                                    <span key={format} className={classes.formatItem}>{format}</span>
                                                ))}
                                            </div>
                                            <div className={classes.spreadsheetCard}>
                                                <div className={classes.sheetHeader}>
                                                    <span />
                                                    <span />
                                                    <span />
                                                </div>
                                                <div className={classes.sheetBody}>
                                                    {Array.from({ length: 5 }).map((_, rowIndex) => (
                                                        <div key={rowIndex} className={classes.sheetRow}>
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
                                    <Text className={classes.kicker}>Reporting outputs</Text>
                                    <Title order={2} className={classes.sectionTitle}>
                                        Generate flexible PDF reports and spreadsheet presentations
                                    </Title>
                                    <Text className={classes.sectionBody}>
                                        Use predefined templates to move quickly, or build your own reporting format for
                                        the way your organisation communicates. The same underlying plan data can power a
                                        polished board report, a working spreadsheet, or a stakeholder-ready status pack.
                                    </Text>
                                    <Stack gap="sm">
                                        {REPORT_POINTS.map((point) => (
                                            <div key={point} className={classes.checkRow}>
                                                <div className={classes.checkIcon}>
                                                    <IconCheck size={14} />
                                                </div>
                                                <Text className={classes.checkText}>{point}</Text>
                                            </div>
                                        ))}
                                    </Stack>
                                </Stack>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                <CTA />
            </div>
        </div>
    )
}
