import type { Metadata } from 'next'
import Hero from '@/components/marketing/Hero'
import CoreFeatures from '@/components/marketing/CoreFeatures'
import CTA from '@/components/marketing/CTA'
import Background from '@/components/marketing/Background'
import classes from './page.module.css'
import { fetchMarketingHome, fetchSiteMetadata } from '@/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
    const meta = await fetchSiteMetadata().catch(() => null)
    return {
        title: { absolute: meta?.defaultTitle ?? 'Insaplan' },
        description: meta?.defaultDescription,
        openGraph: {
            title: meta?.defaultTitle,
            description: meta?.defaultDescription,
            url: 'https://insaplan.com',
        },
    }
}

export default async function HomePage() {
    let marketingHome: any = null
    try {
        marketingHome = await fetchMarketingHome()
    } catch {
        marketingHome = null
    }

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <Hero data={marketingHome?.hero} />
                <CoreFeatures data={marketingHome?.coreFeatures} />
                <CTA data={marketingHome?.cta} />
            </div>
        </div>
    )
}
