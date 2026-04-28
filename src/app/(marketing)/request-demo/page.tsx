import type { Metadata } from 'next'
import Background from '@/components/marketing/Background'
import DemoPageClient from './DemoPageClient'

export const metadata: Metadata = {
    title: 'Request a Demo',
    description: 'Request a demo of Insaplan and let our team walk you through the product.',
}

export default function RequestDemoPage() {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <Background />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <DemoPageClient
                    heroTitle="Request a Demo"
                    heroSubtitle="Tell us who you are and we’ll reach out to schedule a personalized demo."
                    namePlaceholder="Enter your name"
                    emailPlaceholder="Enter your email"
                    submitButtonLabel="Request Demo"
                    successMessage="Thanks! We’ll be in touch soon to schedule your demo."
                    responseNote="You’ll receive a confirmation from support@insaplan.com shortly."
                />
            </div>
        </div>
    )
}
