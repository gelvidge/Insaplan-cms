import Background from '@/components/marketing/Background'
import { fetchLegalPage } from '@/lib/queries'
import LegalPageClient from './LegalPageClient'

export default async function LegalPage() {
    const lp = await fetchLegalPage().catch(() => null) ?? {}

    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <Background />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <LegalPageClient
                    heroTitle={lp.heroTitle}
                    heroSubtitle={lp.heroSubtitle}
                    termsTabLabel={lp.termsTabLabel}
                    privacyTabLabel={lp.privacyTabLabel}
                    dataSecurityTabLabel={lp.dataSecurityTabLabel}
                    termsContent={lp.termsContent ?? null}
                    privacyContent={lp.privacyContent ?? null}
                    dataSecurityContent={lp.dataSecurityContent ?? null}
                    termsComingSoon={lp.termsComingSoon}
                    privacyComingSoon={lp.privacyComingSoon}
                    dataSecurityComingSoon={lp.dataSecurityComingSoon}
                />
            </div>
        </div>
    )
}
