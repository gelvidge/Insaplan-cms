import type { Metadata } from 'next'
import { Box, Container, Stack, Card, Text, ThemeIcon } from '@mantine/core'
import { IconMail } from '@tabler/icons-react'
import Background from '@/components/marketing/Background'
import PageHero from '@/components/marketing/PageHero'
import { fetchSupportPage } from '@/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
    const sp = await fetchSupportPage().catch(() => null)
    const title = sp?.seo?.metaTitle ?? sp?.heroTitle ?? 'Support'
    const description = sp?.seo?.metaDescription ?? sp?.heroSubtitle ?? ''
    return {
        title,
        description,
        openGraph: { title, description, url: 'https://insaplan.com/resources/support' },
    }
}

export default async function SupportPage() {
    const sp = await fetchSupportPage().catch(() => null) ?? {}

    const heroTitle = sp.heroTitle
    const heroSubtitle = sp.heroSubtitle
    const contactHeading = sp.contactHeading
    const contactEmail = sp.contactEmail

    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <Background />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <PageHero title={heroTitle} subtitle={heroSubtitle} />
            <Box py={80} bg="gray.0" style={{ borderTop: '1px solid rgba(20,28,48,0.06)', flex: 1 }}>
                <Container size="md">
                    <Stack gap="xl">
<Card shadow="sm" padding="xl" radius="md" withBorder>
                            <Stack align="center" gap="md" ta="center">
                                <ThemeIcon size={60} radius="md" variant="light" color="deepblue.6">
                                    <IconMail size={32} />
                                </ThemeIcon>
                                <Text fw={600} size="lg">{contactHeading}</Text>
                                <Text c="dimmed">
                                    Email us at{' '}
                                    <Text component="a" href={`mailto:${contactEmail}`} c="deepblue.6">
                                        {contactEmail}
                                    </Text>
                                </Text>
                            </Stack>
                        </Card>
                    </Stack>
                </Container>
            </Box>
            </div>
        </div>
    )
}
