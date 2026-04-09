import Hero from '@/components/marketing/Hero'
import CoreFeatures from '@/components/marketing/CoreFeatures'
import CTA from '@/components/marketing/CTA'
import Background from '@/components/marketing/Background'
import classes from './page.module.css'

export default function HomePage() {
    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <Hero />
                <CoreFeatures />
                <CTA />
            </div>
        </div>
    )
}
