import type { Metadata } from 'next'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import './globals.css'
import Providers from '@/components/marketing/Providers'
import { fetchSiteMetadata } from '@/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
    const meta = await fetchSiteMetadata().catch(() => null)
    return {
        title: meta?.defaultTitle,
        description: meta?.defaultDescription,
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
                <script defer src="https://umami-production-1420.up.railway.app/script.js" data-website-id="ac9e4413-71a7-4446-809c-f9b8561145da" />
            </head>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
