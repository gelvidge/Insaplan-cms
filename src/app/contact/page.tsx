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
                    heroTitle={copy.heroTitle}
                    heroSubtitle={copy.heroSubtitle}
                    namePlaceholder={copy.namePlaceholder}
                    emailPlaceholder={copy.emailPlaceholder}
                    companyPlaceholder={copy.companyPlaceholder}
                    messagePlaceholder={copy.messagePlaceholder}
                    submitButtonLabel={copy.submitButtonLabel}
                    successMessage={copy.successMessage}
                    responseNote={copy.responseNote}
                />
            </div>
        </div>
    )
}
