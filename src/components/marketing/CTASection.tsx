import { fetchMarketingHome } from '@/lib/queries'
import CTA from './CTA'

export default async function CTASection() {
    const data = (await fetchMarketingHome().catch(() => null))?.cta ?? null
    return <CTA data={data} />
}
