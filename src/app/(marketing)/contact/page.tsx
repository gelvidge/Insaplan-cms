import Background from '@/components/marketing/Background'
import { fetchContactPage } from '@/lib/queries'
import ContactPageClient from './ContactPageClient'

export default async function ContactPage() {
    const copy = await fetchContactPage().catch(() => null) ?? {}

    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <Background />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <ContactPageClient
                    heroTitle={copy.heroTitle ?? 'Contact Us'}
                    heroSubtitle={copy.heroSubtitle ?? "Have a question or want to learn more? We'd love to hear from you."}
                    namePlaceholder={copy.namePlaceholder ?? 'Your name'}
                    emailPlaceholder={copy.emailPlaceholder ?? 'your@email.com'}
                    companyPlaceholder={copy.companyPlaceholder ?? 'Your company'}
                    messagePlaceholder={copy.messagePlaceholder ?? 'How can we help?'}
                    submitButtonLabel={copy.submitButtonLabel ?? 'Send Message'}
                    successMessage={copy.successMessage ?? "Thank you! We'll get back to you within 24 hours."}
                    responseNote={copy.responseNote ?? 'We typically respond within 24 hours'}
                />
            </div>
        </div>
    )
}
