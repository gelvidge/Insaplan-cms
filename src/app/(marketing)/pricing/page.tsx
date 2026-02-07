import { Container, Title, Text, Stack, Box } from '@mantine/core'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'

export default function PricingPage() {
    return (
        <>
            <PageHero
                title="Pricing"
                subtitle="Simple, transparent pricing for teams of all sizes"
            />
            <Box py={80}>
                <Container size="md">
                    <Stack align="center" gap="xl" ta="center">
                        <Title order={2}>Pricing Details Coming Soon</Title>
                        <Text size="lg" c="dimmed" maw={600}>
                            We&apos;re finalizing our pricing plans. Join the waitlist to be the
                            first to know when pricing is available.
                        </Text>
                    </Stack>
                </Container>
            </Box>
            <CTA />
        </>
    )
}
