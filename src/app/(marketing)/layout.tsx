import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import '@/app/globals.css'
import Providers from '@/components/marketing/Providers'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'
import { fetchFooter, fetchNavigationMenu } from '@/lib/queries'

const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Insaplan',
    url: 'https://insaplan.com',
    logo: 'https://insaplan.com/icon.svg',
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@insaplan.com',
        contactType: 'customer support',
    },
}

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
    const [footerData, headerNav] = await Promise.all([
        fetchFooter().catch(() => null),
        fetchNavigationMenu('header').catch(() => null),
    ])

    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript defaultColorScheme="dark" />
                <script defer src="https://umami-production-1420.up.railway.app/script.js" data-website-id="ac9e4413-71a7-4446-809c-f9b8561145da" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
                />
            </head>
            <body>
                <Providers>
                    <Navigation menuItems={headerNav?.items} />
                    <main>{children}</main>
                    <Footer data={footerData} />
                </Providers>
            </body>
        </html>
    )
}
