import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import { fetchFooter, fetchNavigationMenu } from '@/lib/queries'

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
    const [footerData, headerNav] = await Promise.all([
        fetchFooter().catch(() => null),
        fetchNavigationMenu('header').catch(() => null),
    ])

    return (
        <>
            <Navigation menuItems={headerNav?.items} />
            <main>{children}</main>
            <Footer data={footerData} />
        </>
    )
}
