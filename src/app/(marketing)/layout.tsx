import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import Providers from '@/components/marketing/Providers'
import Navigation from '@/components/marketing/Navigation'
import Footer from '@/components/marketing/Footer'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </Providers>
    )
}
