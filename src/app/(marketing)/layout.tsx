import type { Metadata } from 'next'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import '../globals.css'
import Providers from '@/components/marketing/Providers'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import { fetchSiteMetadata, fetchFooter, fetchNavigationMenu } from '@/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
    const meta = await fetchSiteMetadata().catch(() => null)
    return {
        title: meta?.defaultTitle ?? 'Insaplan',
        description: meta?.defaultDescription ?? 'AI-Powered Strategy Execution Platform',
    }
}

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
    const [footerData, headerNav] = await Promise.all([
        fetchFooter().catch(() => null),
        fetchNavigationMenu('header').catch(() => null),
    ])

    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <Providers>
                    <Navigation
                        menuItems={headerNav?.items}
                        logoText={footerData?.logoText}
                        ctaLabel={footerData?.navCtaLabel}
                        ctaUrl={footerData?.navCtaUrl}
                    />
                    <main>{children}</main>
                    <Footer data={footerData} />
                </Providers>
            </body>
        </html>
    )
}
