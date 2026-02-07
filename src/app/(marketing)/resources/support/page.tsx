import { Box, Container, Stack, Card, Text, ThemeIcon } from '@mantine/core'
import { IconMail, IconLifebuoy } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'

export default function SupportPage() {
    return (
        <>
            <PageHero
                title="Support"
                subtitle="We're here to help you succeed with Insaplan"
            />
            <Box py={80}>
                <Container size="md">
                    <Stack gap="xl">
                        <Card shadow="sm" padding="xl" radius="md" withBorder>
                            <Stack align="center" gap="md" ta="center">
                                <ThemeIcon size={60} radius="md" variant="light" color="deepblue.6">
                                    <IconLifebuoy size={32} />
                                </ThemeIcon>
                                <Text fw={600} size="lg">
                                    Coming Soon
                                </Text>
                                <Text c="dimmed" maw={400}>
                                    Our support center is launching soon. In the meantime, feel free
                                    to reach out to us directly.
                                </Text>
                            </Stack>
                        </Card>
                        <Card shadow="sm" padding="xl" radius="md" withBorder>
                            <Stack align="center" gap="md" ta="center">
                                <ThemeIcon size={60} radius="md" variant="light" color="deepblue.6">
                                    <IconMail size={32} />
                                </ThemeIcon>
                                <Text fw={600} size="lg">
                                    Get in Touch
                                </Text>
                                <Text c="dimmed">
                                    Email us at{' '}
                                    <Text component="a" href="mailto:support@insaplan.com" c="deepblue.6">
                                        support@insaplan.com
                                    </Text>
                                </Text>
                            </Stack>
                        </Card>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
