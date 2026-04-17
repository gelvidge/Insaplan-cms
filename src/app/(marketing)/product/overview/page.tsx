import type { Metadata } from 'next'
import Background from '@/components/marketing/Background'
import CTASection from '@/components/marketing/CTASection'
import ComparisonTable from '@/components/marketing/ComparisonTable'
import FeatureGrid from '@/components/marketing/FeatureGrid'
import HowItWorks from '@/components/marketing/HowItWorks'
import PageHero from '@/components/marketing/PageHero'
import ProblemsSection from '@/components/marketing/ProblemsSection'
import { fetchProductOverviewPage } from '@/lib/queries'
import classes from './page.module.css'

export async function generateMetadata(): Promise<Metadata> {
    const ov = await fetchProductOverviewPage().catch(() => null)
    const title = ov?.seo?.metaTitle ?? ov?.heroTitle ?? 'Product Overview'
    const description = ov?.seo?.metaDescription ?? ov?.heroSubtitle ?? ''
    return {
        title,
        description,
        openGraph: { title, description, url: 'https://insaplan.com/product/overview' },
    }
}

export default async function ProductOverviewPage() {
    const ov = (await fetchProductOverviewPage().catch(() => null)) ?? {}

    const heroTitle = ov.heroTitle
    const heroSubtitle = ov.heroSubtitle
    const howItWorksHeading = ov.howItWorksHeading
    const howItWorksSubheading = ov.howItWorksSubheading
    const steps = ov.steps ?? []
    const problemsHeading = ov.problemsHeading
    const problemsSubheading = ov.problemsSubheading
    const problems = ov.problems ?? []
    const featuresHeading = ov.featuresHeading
    const featuresSubheading = ov.featuresSubheading
    const features = ov.features ?? []

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

                <CTASection />
            </div>
        </div>
    )
}
