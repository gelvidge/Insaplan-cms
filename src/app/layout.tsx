import type { Metadata } from 'next'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return children
}
