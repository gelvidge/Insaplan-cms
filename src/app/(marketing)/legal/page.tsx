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
                    heroTitle={lp.heroTitle ?? 'Legal'}
                    heroSubtitle={lp.heroSubtitle ?? 'Terms of Service, Privacy Policy and Data Security'}
                    termsTabLabel={lp.termsTabLabel ?? 'Terms of Service'}
                    privacyTabLabel={lp.privacyTabLabel ?? 'Privacy Policy'}
                    dataSecurityTabLabel={lp.dataSecurityTabLabel ?? 'Data Security'}
                    termsContent={lp.termsContent ?? null}
                    privacyContent={lp.privacyContent ?? null}
                    dataSecurityContent={lp.dataSecurityContent ?? null}
                    termsComingSoon={lp.termsComingSoon ?? 'Coming soon. Our terms of service are being finalized and will be available before launch.'}
                    privacyComingSoon={lp.privacyComingSoon ?? 'Coming soon. Our privacy policy is being finalized and will be available before launch.'}
                    dataSecurityComingSoon={lp.dataSecurityComingSoon ?? 'Coming soon. Our data security documentation is being finalized and will be available before launch.'}
                />
            </div>
        </div>
    )
}
