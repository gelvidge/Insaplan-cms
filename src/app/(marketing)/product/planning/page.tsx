import { Box, Container, Title, Text, Stack, Grid, GridCol } from '@mantine/core'
import { IconCheck, IconColumns, IconRoute, IconTimeline } from '@tabler/icons-react'
import Background from '@/components/marketing/Background'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'
import SolutionChallenges from '@/components/marketing/SolutionChallenges'
import { fetchProductPlanningPage } from '@/lib/queries'
import classes from './page.module.css'

const PAIN_POINTS = [
    {
        title: 'Spreadsheet-led planning',
        description: 'Tracking your plans in spreadsheets?',
        icon: 'spreadsheet',
        color: '124,58,237',
    },
    {
        title: 'Progress is unclear',
        description: 'Unsure how plans are progressing?',
        icon: 'timeline',
        color: '34,139,230',
    },
    {
        title: 'Org-wide visibility is weak',
        description: 'Difficulties in seeing activities across the organisation?',
        icon: 'users',
        color: '34,197,94',
    },
    {
        title: 'Dependencies stay hidden',
        description: 'Unable to see how strategic activities support each other?',
        icon: 'puzzle',
        color: '251,146,60',
    },
    {
        title: 'Updates rely on chasing people',
        description: 'Difficulties in getting the team to update plans?',
        icon: 'clock',
        color: '236,72,153',
    },
]

const TEMPLATE_PILLS = [
    'OKRs',
    'Balanced Scorecard',
    'Product Roadmap',
    'Ansoff Matrix',
    'Business Model Canvas',
    'Scenario Planning',
    'Hoshin Kanri',
    'GSOT',
]

const METRIC_PILLS = [
    'KPI Library',
    'Dependencies',
    'Budgets',
    'Risk Registers',
    'Governance',
    'Stakeholders',
    'Custom Metrics',
]

const METRIC_POINTS = [
    'Choose from an extensive library of KPI metrics or create your own measures around how your organisation actually runs.',
    'Track supporting planning metadata like dependencies, budgets, risk registers, governance, and stakeholder ownership in one place.',
    'Turn plans from static documents into live operating tools with metrics and controls that travel with the work.',
]

const VIEW_OPTIONS = [
    {
        label: 'Gantt Charts',
        description: 'Map work across time, milestones, and dependencies so leaders can see delivery shape immediately.',
        Icon: IconTimeline,
    },
    {
        label: 'Kanban Boards',
        description: 'Give teams a clear operational view of work in motion, blockers, and what needs attention next.',
        Icon: IconColumns,
    },
    {
        label: 'Tree Views',
        description: 'Break strategy into goals, initiatives, and activities to show how execution rolls up to intent.',
        Icon: IconRoute,
    },
]

const LINKING_POINTS = [
    'Connect high-level strategic plans to departmental plans and day-to-day activities.',
    'See how one initiative supports another before work drifts or duplicates.',
    'Give leaders a clean line of sight from goal to execution across the organisation.',
]

const AI_STEPS = [
    'Pull insight from your own knowledge base, frameworks, and previous plans.',
    'Generate an initial plan structure with goals, workstreams, and supporting activities.',
    'Refine, link, and track the plan with your team instead of starting from a blank page.',
]

const SOURCE_PILLS = ['Knowledge Base', 'Past Plans', 'Best-Practice Frameworks', 'Team Context', 'Internal Strategy Docs']

export default async function ProductPlanningPage() {
    const pg = await fetchProductPlanningPage().catch(() => null) ?? {}

    const heroTitle = pg.heroTitle
    const heroSubtitle = pg.heroSubtitle

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <PageHero title={heroTitle} subtitle={heroSubtitle} />

                <SolutionChallenges challenges={PAIN_POINTS} />

                <Box className={classes.templateSection}>
                <Container size="xl">
                    <Grid gutter={{ base: 24, md: 36 }} align="stretch">
                        <GridCol span={{ base: 12, md: 7 }}>
                            <div className={classes.templatePanel}>
                                <Text className={classes.kicker}>Templates</Text>
                                <Title order={2} className={classes.sectionTitle}>
                                    Start from a planning model that already fits the work
                                </Title>
                                <Text className={classes.sectionBody}>
                                    Choose from multiple planning templates, adapt them to your organisation,
                                    or create your own. Insaplan gives teams a structured starting point
                                    without forcing every plan into the same shape.
                                </Text>
                                <div className={classes.pillCloud}>
                                    {TEMPLATE_PILLS.map((pill) => (
                                        <span key={pill} className={classes.pill}>{pill}</span>
                                    ))}
                                </div>
                            </div>
                        </GridCol>
                        <GridCol span={{ base: 12, md: 5 }}>
                            <div className={classes.summaryPanel}>
                                <div className={classes.summaryMetric}>
                                    <span className={classes.metricValue}>8+</span>
                                    <span className={classes.metricLabel}>ready-to-use framework examples</span>
                                </div>
                                <div className={classes.summaryMetric}>
                                    <span className={classes.metricValue}>Custom</span>
                                    <span className={classes.metricLabel}>template creation for your planning method</span>
                                </div>
                                <div className={classes.summaryCallout}>
                                    Standardise how teams plan without flattening how they think.
                                </div>
                            </div>
                        </GridCol>
                    </Grid>
                </Container>
            </Box>

            <Box className={classes.metricsSection}>
                <Container size="xl">
                    <Grid gutter={{ base: 24, md: 36 }} align="center">
                        <GridCol span={{ base: 12, md: 5 }}>
                            <Text className={classes.kicker}>Key Metrics</Text>
                            <Title order={2} className={classes.sectionTitle}>
                                Link key metrics to your plan
                            </Title>
                            <Text className={classes.sectionBody}>
                                Add the measures and planning controls that make execution manageable.
                                Insaplan lets you attach KPI metrics, dependencies, governance, budgets,
                                risks, stakeholders, and your own custom fields directly to the plan itself.
                            </Text>
                            <Stack gap="sm" mt="lg">
                                {METRIC_POINTS.map((point) => (
                                    <div key={point} className={classes.checkRow}>
                                        <div className={classes.checkIcon}>
                                            <IconCheck size={14} />
                                        </div>
                                        <Text className={classes.checkText}>{point}</Text>
                                    </div>
                                ))}
                            </Stack>
                        </GridCol>
                        <GridCol span={{ base: 12, md: 7 }}>
                            <div className={classes.metricsPanel}>
                                <div className={classes.metricsHeader}>
                                    <span className={classes.metricsBadge}>Plan Controls</span>
                                    <span className={classes.metricsMiniStat}>7 core tracking dimensions</span>
                                </div>
                                <div className={classes.metricsCloud}>
                                    {METRIC_PILLS.map((pill) => (
                                        <span key={pill} className={classes.metricPill}>{pill}</span>
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

            <Box className={classes.viewsSection}>
                <Container size="xl">
                    <Grid gutter={{ base: 24, md: 36 }} align="center">
                        <GridCol span={{ base: 12, md: 4 }}>
                            <Text className={classes.kicker}>Tracking</Text>
                            <Title order={2} className={classes.sectionTitle}>
                                Switch the same plan into the view each audience needs
                            </Title>
                            <Text className={classes.sectionBody}>
                                Planning is only useful when people can read it. Give leadership a timeline,
                                teams a board, or strategy owners a structural view of how work fits together.
                            </Text>
                        </GridCol>
                        <GridCol span={{ base: 12, md: 8 }}>
                            <div className={classes.viewGrid}>
                                {VIEW_OPTIONS.map(({ label, description, Icon }) => (
                                    <div key={label} className={classes.viewCard}>
                                        <div className={classes.viewIcon}>
                                            <Icon size={18} stroke={1.7} />
                                        </div>
                                        <Title order={4} className={classes.viewTitle}>{label}</Title>
                                        <Text className={classes.viewDescription}>{description}</Text>
                                        <div className={classes.viewLines}>
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GridCol>
                    </Grid>
                </Container>
            </Box>

            <Box className={classes.linkSection}>
                <Container size="xl">
                    <Grid gutter={{ base: 24, md: 36 }} align="center">
                        <GridCol span={{ base: 12, md: 5 }}>
                            <Text className={classes.kicker}>Linked Planning</Text>
                            <Title order={2} className={classes.sectionTitle}>
                                Show how plans and activities support each other
                            </Title>
                            <Text className={classes.sectionBody}>
                                Connect strategy, initiatives, and operational work so teams can see where
                                effort contributes, where dependencies exist, and where alignment is missing.
                            </Text>
                            <Stack gap="sm" mt="lg">
                                {LINKING_POINTS.map((point) => (
                                    <div key={point} className={classes.checkRow}>
                                        <div className={classes.checkIcon}>
                                            <IconCheck size={14} />
                                        </div>
                                        <Text className={classes.checkText}>{point}</Text>
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
                                <div className={classes.connector} data-conn="one" />
                                <div className={classes.connector} data-conn="two" />
                                <div className={classes.connector} data-conn="three" />
                                <div className={classes.connector} data-conn="four" />
                                <div className={classes.connector} data-conn="five" />
                                <div className={classes.connector} data-conn="six" />
                            </div>
                        </GridCol>
                    </Grid>
                </Container>
            </Box>

            <Box className={classes.aiSection}>
                <Container size="xl">
                    <div className={classes.aiPanel}>
                        <div className={classes.aiIntro}>
                            <Text className={classes.kicker}>AI Planning</Text>
                            <Title order={2} className={classes.sectionTitle}>
                                Generate plans from your own knowledge, not generic prompts
                            </Title>
                            <Text className={classes.sectionBody}>
                                Use AI-assisted plan generation grounded in your own knowledge base insights.
                                Start with what your organisation already knows, then turn it into a structured,
                                actionable plan faster.
                            </Text>
                            <div className={classes.sourcePills}>
                                {SOURCE_PILLS.map((pill) => (
                                    <span key={pill} className={classes.sourcePill}>{pill}</span>
                                ))}
                            </div>
                        </div>
                        <div className={classes.aiSteps}>
                            {AI_STEPS.map((step, index) => (
                                <div key={step} className={classes.aiStep}>
                                    <span className={classes.aiStepNumber}>{String(index + 1).padStart(2, '0')}</span>
                                    <Text className={classes.aiStepText}>{step}</Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Box>

            <CTA />
                </div>
            </div>
    )
}
