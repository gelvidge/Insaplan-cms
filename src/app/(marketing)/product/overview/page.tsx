import Background from '@/components/marketing/Background'
import CTA from '@/components/marketing/CTA'
import ComparisonTable from '@/components/marketing/ComparisonTable'
import FeatureGrid from '@/components/marketing/FeatureGrid'
import HowItWorks from '@/components/marketing/HowItWorks'
import PageHero from '@/components/marketing/PageHero'
import ProblemsSection from '@/components/marketing/ProblemsSection'
import { fetchProductOverviewPage } from '@/lib/queries'
import classes from './page.module.css'

type FeatureIconKey = 'chart-bar' | 'palette' | 'brain' | 'adjustments' | 'books' | 'database'

const FALLBACK_STEPS = [
    {
        title: 'Capture Insights',
        description: 'Centralize organizational knowledge, market data, and research into a searchable intelligence hub.',
    },
    {
        title: 'Build Plans',
        description: 'Use proven frameworks and AI assistance to create strategic plans, budgets, and roadmaps.',
    },
    {
        title: 'Generate Reports',
        description: 'Create beautiful, data-driven reports and presentations that communicate your strategy clearly.',
    },
]

const FALLBACK_FEATURES = [
    {
        icon: 'palette' as FeatureIconKey,
        title: 'Beautiful Infographics',
        description: 'Create stunning visual presentations of your strategic plans and data.',
        benefits: [
            { label: 'Professional templates' },
            { label: 'Custom branding' },
            { label: 'Export to multiple formats' },
        ],
    },
    {
        icon: 'chart-bar' as FeatureIconKey,
        title: 'Beautiful Charts',
        description: 'Visualize data with professional charts that tell your story.',
        benefits: [
            { label: 'Interactive dashboards' },
            { label: 'Real-time data updates' },
            { label: 'Multiple chart types' },
        ],
    },
    {
        icon: 'brain' as FeatureIconKey,
        title: 'AI-Assisted Insights & Planning',
        description: 'Leverage AI to uncover insights and accelerate planning.',
        benefits: [
            { label: 'Smart recommendations' },
            { label: 'Automated analysis' },
            { label: 'Pattern recognition' },
        ],
    },
    {
        icon: 'adjustments' as FeatureIconKey,
        title: 'Fully Customizable',
        description: "Tailor every aspect to your organization's needs.",
        benefits: [
            { label: 'Custom workflows' },
            { label: 'Flexible data models' },
            { label: 'Personalized dashboards' },
        ],
    },
    {
        icon: 'books' as FeatureIconKey,
        title: 'Integrated Business Frameworks',
        description: 'Access proven frameworks like SWOT, OKRs, and Business Model Canvas.',
        benefits: [
            { label: 'Best practice templates' },
            { label: 'Industry-specific frameworks' },
            { label: 'Guided planning processes' },
        ],
    },
    {
        icon: 'database' as FeatureIconKey,
        title: 'Integrated Knowledge Bases',
        description: 'Build and leverage organizational knowledge for better planning.',
        benefits: [
            { label: 'Searchable insights' },
            { label: 'Common KPIs library' },
            { label: 'Industry benchmarks' },
        ],
    },
]

const FALLBACK_PROBLEMS = [
    {
        problem: 'Plans take weeks to create and are outdated by the time they are finished',
        solution: 'AI-assisted planning reduces creation time from weeks to hours with real-time updates',
    },
    {
        problem: 'Strategic reports are static, ugly, and fail to communicate vision',
        solution: 'Beautiful, dynamic reports with professional infographics and data visualizations',
    },
    {
        problem: 'Organizational knowledge is scattered across emails, docs, and spreadsheets',
        solution: 'Centralized knowledge base that integrates with your planning process',
    },
    {
        problem: 'No standardized approach to strategic planning across the organization',
        solution: 'Integrated business frameworks ensure consistency and best practices',
    },
    {
        problem: 'Difficult to track progress and measure impact of strategic initiatives',
        solution: 'Real-time dashboards and progress tracking with customizable KPIs',
    },
    {
        problem: 'Teams work in silos without visibility into overall strategy',
        solution: 'Collaborative platform with shared visibility and aligned objectives',
    },
]

export default async function ProductOverviewPage() {
    const ov = (await fetchProductOverviewPage().catch(() => null)) ?? {}

    const heroTitle = ov.heroTitle ?? 'Turn Insights into Plans'
    const heroSubtitle =
        ov.heroSubtitle ??
        'Capture organizational knowledge, build strategic plans with proven frameworks, and generate beautiful reports-all in one platform.'
    const howItWorksHeading = ov.howItWorksHeading ?? 'How It Works'
    const howItWorksSubheading =
        ov.howItWorksSubheading ?? 'Three simple steps to transform your planning process'
    const steps = ov.steps?.length ? ov.steps : FALLBACK_STEPS
    const problemsHeading = ov.problemsHeading ?? 'Problems We Solve'
    const problemsSubheading = ov.problemsSubheading ?? 'Common challenges Insaplan addresses'
    const problems = ov.problems?.length ? ov.problems : FALLBACK_PROBLEMS
    const featuresHeading = ov.featuresHeading ?? 'Features'
    const featuresSubheading =
        ov.featuresSubheading ??
        'Everything you need to transform strategic planning from a painful process into a competitive advantage'
    const features = ov.features?.length ? ov.features : FALLBACK_FEATURES

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <PageHero title={heroTitle} subtitle={heroSubtitle} />

                <HowItWorks
                    heading={howItWorksHeading}
                    subheading={howItWorksSubheading}
                    steps={steps}
                />

                <ProblemsSection
                    heading={problemsHeading}
                    subheading={problemsSubheading}
                    problems={problems as { problem: string; solution: string }[]}
                />

                <FeatureGrid
                    heading={featuresHeading}
                    subheading={featuresSubheading}
                    features={features}
                />

                <ComparisonTable data={ov.comparisonTable ?? null} />

                <CTA />
            </div>
        </div>
    )
}
