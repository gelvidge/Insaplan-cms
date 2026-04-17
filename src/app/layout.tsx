import type { Metadata } from 'next'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import './globals.css'
import Providers from '@/components/marketing/Providers'
import { fetchSiteMetadata } from '@/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
    const meta = await fetchSiteMetadata().catch(() => null)
    const title = meta?.defaultTitle ?? 'Insaplan'
    const description = meta?.defaultDescription ?? ''
    return {
        title: {
            default: title,
            template: `%s | Insaplan`,
        },
        description,
        metadataBase: new URL('https://insaplan.com'),
        openGraph: {
            siteName: 'Insaplan',
            type: 'website',
            locale: 'en_GB',
            title,
            description,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    }
}

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
                <script defer src="https://umami-production-1420.up.railway.app/script.js" data-website-id="ac9e4413-71a7-4446-809c-f9b8561145da" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
                />
            </head>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
