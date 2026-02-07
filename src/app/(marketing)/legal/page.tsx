'use client'

import { Box, Container, Title, Text, Stack, Tabs } from '@mantine/core'
import PageHero from '@/components/marketing/PageHero'

export default function LegalPage() {
    return (
        <>
            <PageHero title="Legal" subtitle="Terms of Service and Privacy Policy" />
            <Box py={80}>
                <Container size="lg">
                    <Tabs defaultValue="terms">
                        <Tabs.List>
                            <Tabs.Tab value="terms">Terms of Service</Tabs.Tab>
                            <Tabs.Tab value="privacy">Privacy Policy</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="terms" pt="xl">
                            <Stack gap="md">
                                <Title order={3}>Terms of Service</Title>
                                <Text c="dimmed">
                                    Coming soon. Our terms of service are being finalized and will be
                                    available before launch.
                                </Text>
                            </Stack>
                        </Tabs.Panel>

                        <Tabs.Panel value="privacy" pt="xl">
                            <Stack gap="md">
                                <Title order={3}>Privacy Policy</Title>
                                <Text c="dimmed">
                                    Coming soon. Our privacy policy is being finalized and will be
                                    available before launch.
                                </Text>
                            </Stack>
                        </Tabs.Panel>
                    </Tabs>
                </Container>
            </Box>
        </>
    )
}
