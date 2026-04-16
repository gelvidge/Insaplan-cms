import Hero from '@/components/marketing/Hero'
import CoreFeatures from '@/components/marketing/CoreFeatures'
import CTA from '@/components/marketing/CTA'
import Background from '@/components/marketing/Background'
import classes from './page.module.css'
import { fetchMarketingHome } from '@/lib/queries'

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
                <CTA />
            </div>
        </div>
    )
}
