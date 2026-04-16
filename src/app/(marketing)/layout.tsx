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
        title: meta?.defaultTitle,
        description: meta?.defaultDescription,
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
                <script defer src="https://umami-production-1420.up.railway.app/script.js" data-website-id="ac9e4413-71a7-4446-809c-f9b8561145da" />
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
