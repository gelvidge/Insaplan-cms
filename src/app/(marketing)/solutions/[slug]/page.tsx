import { notFound } from 'next/navigation'
import { Box, Container, Title, Stack, List, ListItem, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import SolutionHero from '@/components/marketing/SolutionHero'
import CTA from '@/components/marketing/CTA'
import SolutionChallenges from '@/components/marketing/SolutionChallenges'
import UseCases from '@/components/marketing/UseCases'
import Background from '@/components/marketing/Background'
import { fetchSolutionBySlug } from '@/lib/queries'
import classes from './page.module.css'

// ---------------------------------------------------------------------------
// DEPRECATED: hardcoded fallback content — these are used when no matching
// document exists in the CMS Solutions collection. Add a Solution document
// with the matching slug in the CMS admin, then this fallback becomes unused.
// ---------------------------------------------------------------------------
type FallbackSolution = {
    title: string
    subtitle: string
    heroKicker: string
    heroHeadline: string
    heroHeadlineAccent: string
    heroBody: string
    heroSteps: { label: string; active?: boolean }[]
    challenges: { title: string; description: string; icon: string; color?: string }[]
    useCases: { title: string; description: string }[]
    values: string[]
}

const DEPRECATED_fallbacks: Record<string, FallbackSolution> = {
    sales: {
        title: 'Sales',
        subtitle: 'Transform sales planning and reporting',
        heroKicker: 'THE PROBLEM',
        heroHeadline: "WHAT'S KILLING YOUR PIPELINE?",
        heroHeadlineAccent: 'YOUR PIPELINE?',
        heroBody: 'Sales teams lose deals to disconnected spreadsheets, manual reporting, and inconsistent territory plans — problems you can\'t see until it\'s too late.',
        heroSteps: [
            { label: 'Build Territory Plan' },
            { label: 'Align the Team', active: true },
            { label: 'Track Pipeline' },
            { label: 'Close & Report' },
        ],
        challenges: [
            { title: 'Plans buried in disconnected spreadsheets', description: 'Territory and account plans live in dozens of files, making it impossible to get a consistent view across the team.', icon: 'stack', color: '124,58,237' },
            { title: 'Reporting takes days, not hours', description: 'Manually pulling together pipeline data and performance metrics eats time that should go to selling.', icon: 'clock', color: '34,139,230' },
            { title: 'No single source of truth', description: 'Different reps use different templates, so leadership can never compare performance or spot trends easily.', icon: 'puzzle', color: '34,197,94' },
        ],
        useCases: [
            { title: 'Sales Updates & Performance Reviews', description: 'Create data-driven sales performance reports and reviews that showcase progress and identify opportunities.' },
            { title: 'Territory Plans & Forecasting', description: 'Build comprehensive territory plans with AI-powered forecasting and pipeline visibility.' },
            { title: 'Pipeline Management', description: 'Visualize and manage your sales pipeline with real-time dashboards and progress tracking.' },
        ],
        values: [
            'Quickly create data-driven territory and account plans',
            'Monitor sales execution in real-time',
            'Generate compelling sales reports for leadership',
        ],
    },
    marketing: {
        title: 'Marketing',
        subtitle: 'Accelerate go-to-market strategy and execution',
        heroKicker: 'THE PROBLEM',
        heroHeadline: "WHAT'S SLOWING YOUR GO-TO-MARKET?",
        heroHeadlineAccent: 'YOUR GO-TO-MARKET?',
        heroBody: 'GTM plans locked in slide decks, misaligned stakeholders, and no clear way to show marketing\'s impact — problems that compound silently until the quarter ends badly.',
        heroSteps: [
            { label: 'Capture Strategy' },
            { label: 'Align Teams', active: true },
            { label: 'Execute Campaigns' },
            { label: 'Measure Impact' },
        ],
        challenges: [
            { title: 'Strategy locked inside slide decks', description: 'GTM plans and roadmaps get created once and then forgotten — no easy way to keep them live as priorities shift.', icon: 'file' },
            { title: 'Aligning stakeholders wastes cycles', description: 'Getting leadership, product, and sales on the same page requires constant rework of the same documents.', icon: 'users' },
            { title: "Hard to show marketing's impact", description: "Without clear visualizations, it's difficult to demonstrate how marketing activities tie to business results.", icon: 'chart' },
        ],
        useCases: [
            { title: 'Go-to-Market (GTM) Plans', description: 'Build comprehensive go-to-market strategies with clear timelines, milestones, and resource allocation.' },
            { title: 'Product Roadmaps', description: 'Visualize product development timelines and align marketing activities with launches.' },
            { title: 'Strategic Marketing Plans', description: 'Create data-driven marketing plans with campaign tracking and performance measurement.' },
        ],
        values: [
            'Align marketing strategy with business objectives',
            'Visualize product roadmaps with compelling graphics',
            'Measure campaign effectiveness and adjust quickly',
        ],
    },
    startups: {
        title: 'Start Ups',
        subtitle: 'Build investor-ready plans and presentations',
        heroKicker: 'THE PROBLEM',
        heroHeadline: "WHAT'S HOLDING BACK YOUR PITCH?",
        heroHeadlineAccent: 'YOUR PITCH?',
        heroBody: "Founders spend weeks wrestling with formatting and frameworks instead of refining their strategy — and static docs can't keep pace with the speed of an early-stage company.",
        heroSteps: [
            { label: 'Define Strategy' },
            { label: 'Build Plan', active: true },
            { label: 'Create Pitch' },
            { label: 'Win Investors' },
        ],
        challenges: [
            { title: 'Investor docs take weeks to produce', description: 'Founders spend more time wrestling with formatting and frameworks than refining their actual strategy.', icon: 'clock' },
            { title: "Plans don't keep pace with the business", description: "Early-stage companies pivot fast, but static documents can't reflect the latest thinking without a full rebuild.", icon: 'bolt' },
            { title: 'Hard to look credible on limited resources', description: 'Without design or ops support, business plans and pitch decks often fall short of investor expectations.', icon: 'confused' },
        ],
        useCases: [
            { title: 'Business Plans', description: 'Create professional, investor-ready business plans quickly using proven frameworks and AI assistance.' },
            { title: 'Investor Presentations', description: 'Generate compelling pitch decks and presentations that showcase your vision and traction.' },
            { title: 'Growth Strategy', description: 'Document growth strategies, track milestones, and measure progress against objectives.' },
        ],
        values: [
            'Create professional business plans in days, not weeks',
            'Generate investor-ready presentations',
            'Document strategy and track progress against milestones',
        ],
    },
    enterprise: {
        title: 'Enterprise',
        subtitle: 'Standardize planning across the organization',
        heroKicker: 'THE PROBLEM',
        heroHeadline: "WHAT'S FRAGMENTING YOUR ORGANIZATION?",
        heroHeadlineAccent: 'YOUR ORGANIZATION?',
        heroBody: 'Every team plans differently, best practices live in peoples heads, and leadership lacks the visibility to assess strategic alignment or track execution across the org.',
        heroSteps: [
            { label: 'Standardize Templates' },
            { label: 'Align Departments', active: true },
            { label: 'Execute Plans' },
            { label: 'Leadership Visibility' },
        ],
        challenges: [
            { title: 'Inconsistent planning across departments', description: 'Every team uses a different process, making cross-functional collaboration and roll-up reporting a constant struggle.', icon: 'puzzle' },
            { title: 'Institutional knowledge gets lost', description: 'Best practices and frameworks exist in people\'s heads or buried in old files — not captured or reused systematically.', icon: 'stack' },
            { title: 'Leadership lacks visibility', description: "Without standardized outputs, executives can't easily assess strategic alignment or track execution across the org.", icon: 'chart' },
        ],
        useCases: [
            { title: 'Internal Knowledge Base', description: 'Build centralized knowledge bases with best practices, frameworks, and institutional knowledge.' },
            { title: 'Standardized Planning', description: 'Ensure uniform planning processes across departments with customizable workflows.' },
            { title: 'Department Collaboration', description: 'Enable cross-department visibility and collaboration on strategic initiatives.' },
        ],
        values: [
            'Build internal knowledge bases with organizational best practices',
            'Ensure consistent methodologies across the organization',
            'Scale planning processes across multiple departments',
            'Centralized monitoring and reporting for leadership',
        ],
    },
    nonprofit: {
        title: 'Not for Profit',
        subtitle: 'Track and communicate your mission',
        heroKicker: 'THE PROBLEM',
        heroHeadline: "WHAT'S DRAINING YOUR MISSION CAPACITY?",
        heroHeadlineAccent: 'YOUR MISSION CAPACITY?',
        heroBody: 'Grant reports, board updates, and donor communications produced manually take time away from mission-critical work — and scattered impact data makes it hard to tell your story.',
        heroSteps: [
            { label: 'Capture Impact' },
            { label: 'Build Reports', active: true },
            { label: 'Engage Donors' },
            { label: 'Mission Grows' },
        ],
        challenges: [
            { title: 'Reporting drains limited capacity', description: 'Producing grant reports, board updates, and donor communications manually takes time away from mission-critical work.', icon: 'clock' },
            { title: 'Hard to quantify impact', description: 'Communicating results to funders and stakeholders is difficult when impact data is scattered across programs.', icon: 'chart' },
            { title: "Strategy doesn't translate to the frontline", description: 'High-level strategic plans rarely make it into the day-to-day work of staff and volunteers in a meaningful way.', icon: 'users' },
        ],
        useCases: [
            { title: 'Strategic Plans', description: 'Create mission-driven strategic plans that align your organization around shared goals.' },
            { title: 'Grant Applications', description: 'Generate compelling grant proposals and reports that demonstrate impact and accountability.' },
            { title: 'Impact Measurement', description: 'Track and visualize your impact with clear metrics and beautiful reporting.' },
        ],
        values: [
            'Create compelling narratives around your mission',
            'Generate reports that resonate with donors and stakeholders',
            'Track and demonstrate impact with clear metrics',
            'Do more with limited resources using AI assistance',
        ],
    },
    'project-management': {
        title: 'Project Management',
        subtitle: 'Plan, execute, and report on projects with clarity',
        heroKicker: 'THE PROBLEM',
        heroHeadline: "WHAT'S DERAILING YOUR PROJECTS?",
        heroHeadlineAccent: 'YOUR PROJECTS?',
        heroBody: "Projects stall when plans live in disconnected tools, stakeholders lack visibility, and status updates are produced by hand — long after decisions should have been made.",
        heroSteps: [
            { label: 'Define Scope' },
            { label: 'Build Plan', active: true },
            { label: 'Track Progress' },
            { label: 'Deliver Results' },
        ],
        challenges: [
            { title: 'Plans scattered across tools', description: 'Project plans, timelines, and resources live in different systems — making it nearly impossible to get a single coherent view.', icon: 'puzzle' },
            { title: 'Stakeholders lack visibility', description: 'Without clear, up-to-date reporting, sponsors and leadership rely on hearsay rather than facts to judge project health.', icon: 'chart' },
            { title: 'Status updates eat project time', description: 'Manually compiling updates and producing progress reports takes hours that should go to actually delivering the project.', icon: 'clock' },
        ],
        useCases: [
            { title: 'Project Plans & Timelines', description: 'Build structured project plans with clear milestones, dependencies, and ownership using proven PM frameworks.' },
            { title: 'Stakeholder Reporting', description: 'Generate polished progress reports and executive summaries that keep sponsors informed without constant meetings.' },
            { title: 'Risk & Issue Tracking', description: 'Document and visualize risks, issues, and decisions in a way that keeps the whole team aligned and accountable.' },
        ],
        values: [
            'Create structured project plans using proven frameworks',
            'Keep stakeholders informed with clear, visual reporting',
            'Track risks, issues, and decisions in one place',
            'Reduce time spent on status updates and admin',
        ],
    },
    government: {
        title: 'Government',
        subtitle: 'Deliver accountable, evidence-based planning',
        heroKicker: 'THE PROBLEM',
        heroHeadline: "WHAT'S UNDERMINING PUBLIC TRUST IN YOUR PLANS?",
        heroHeadlineAccent: 'PUBLIC TRUST?',
        heroBody: "Government teams face pressure to plan transparently, evidence decisions rigorously, and report outcomes clearly — while navigating complex stakeholder environments with limited resources.",
        heroSteps: [
            { label: 'Gather Evidence' },
            { label: 'Build Policy', active: true },
            { label: 'Consult Stakeholders' },
            { label: 'Report Outcomes' },
        ],
        challenges: [
            { title: 'Evidence is hard to surface and share', description: 'Research, data, and prior decisions are scattered across systems and people, making it difficult to build evidence-based policy consistently.', icon: 'stack' },
            { title: 'Plans lack transparency for stakeholders', description: 'Publishing strategic plans in static documents makes it difficult for citizens and partners to understand intent, progress, or accountability.', icon: 'users' },
            { title: 'Outcome reporting is manual and slow', description: 'Producing performance reports, ministerial briefings, and public accountability documents requires significant effort with little standardisation.', icon: 'clock' },
        ],
        useCases: [
            { title: 'Strategic & Policy Plans', description: 'Develop structured, evidence-based strategic plans and policy documents using proven public sector frameworks.' },
            { title: 'Performance & Outcome Reporting', description: 'Generate clear, consistent reports on programme performance and outcomes for ministers, oversight bodies, and the public.' },
            { title: 'Stakeholder Consultation', description: 'Document consultation processes, synthesise feedback, and communicate decisions in a transparent and auditable way.' },
        ],
        values: [
            'Ground policy decisions in searchable evidence and prior work',
            'Standardise planning and reporting across departments',
            'Communicate outcomes clearly to ministers and the public',
            'Reduce the time burden of compliance and accountability reporting',
        ],
    },
}
// ---------------------------------------------------------------------------

type Props = { params: Promise<{ slug: string }> }

export default async function SolutionPage({ params }: Props) {
    const { slug } = await params

    // Try CMS first
    const solution = await fetchSolutionBySlug(slug).catch(() => null)

    // CMS document found — render from Solutions collection
    if (solution) {
        const challenges = solution.challenges ?? []
        const useCases = solution.useCases ?? []
        const keyFeatures = solution.keyFeatures ?? []

        return (
            <div className={classes.page}>
                <Background />
                <div className={classes.content}>
                    <SolutionHero
                        kicker={solution.heroKicker}
                        headline={solution.heroHeadline ?? solution.title}
                        headlineAccent={solution.heroHeadlineAccent}
                        body={solution.heroBody ?? solution.subtitle}
                        steps={solution.heroSteps}
                    />

                    <SolutionChallenges challenges={challenges} />

                    <UseCases useCases={useCases} />

                    {keyFeatures.length > 0 && (
                        <Box py={80}>
                            <Container size="xl">
                                <Stack gap="xl">
                                    <Stack gap="md" align="center" ta="center">
                                        <Title order={2} c="gray.0">Key Features</Title>
                                    </Stack>
                                    <List
                                        spacing="xs"
                                        size="sm"
                                        icon={
                                            <ThemeIcon color="green.5" size={20} radius="xl">
                                                <IconCheck size={12} />
                                            </ThemeIcon>
                                        }
                                    >
                                        {keyFeatures.map((f: any, i: number) => (
                                            <ListItem key={i} c="gray.3">{f.title}</ListItem>
                                        ))}
                                    </List>
                                </Stack>
                            </Container>
                        </Box>
                    )}

                    <CTA />
                </div>
            </div>
        )
    }

    // Fall back to hardcoded content if no CMS document yet
    const fallback = DEPRECATED_fallbacks[slug]
    if (!fallback) notFound()

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <SolutionHero
                    kicker={fallback.heroKicker}
                    headline={fallback.heroHeadline}
                    headlineAccent={fallback.heroHeadlineAccent}
                    body={fallback.heroBody}
                    steps={fallback.heroSteps}
                />

                <SolutionChallenges challenges={fallback.challenges} />

                <UseCases useCases={fallback.useCases} />

                <CTA />
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return Object.keys(DEPRECATED_fallbacks).map((slug) => ({ slug }))
}

export const dynamicParams = true
