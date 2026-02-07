import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack, Card, Group, ThemeIcon } from '@mantine/core';
import { IconMail, IconBrandSlack, IconLifebuoy } from '@tabler/icons-react';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/resources/support')({
    component: SupportPage
});

function SupportPage() {
    return (
        <Box>
            <Box
                style={{
                    background: 'linear-gradient(135deg, #060a14 0%, #2e4072 50%, #64317f 100%)',
                    color: 'white'
                }}
                py={80}
            >
                <Container size="lg">
                    <Stack gap="xl" align="center" ta="center">
                        <Title order={1} size="3rem" fw={900}>
                            Support
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            We're here to help you succeed with Insaplan
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Box py={80}>
                <Container size="md">
                    <Stack gap="xl">
                        <Card shadow="sm" padding="xl" radius="md" withBorder>
                            <Group>
                                <ThemeIcon size={60} radius="md" variant="light" color="deepblue.6">
                                    <IconLifebuoy size={32} />
                                </ThemeIcon>
                                <Stack gap="xs" style={{ flex: 1 }}>
                                    <Title order={3}>Coming Soon</Title>
                                    <Text c="dimmed">
                                        Support resources will be available when Insaplan launches. Join our
                                        waitlist to be notified.
                                    </Text>
                                </Stack>
                            </Group>
                        </Card>

                        <Card shadow="sm" padding="xl" radius="md" withBorder>
                            <Group>
                                <ThemeIcon size={60} radius="md" variant="light" color="deepblue.6">
                                    <IconMail size={32} />
                                </ThemeIcon>
                                <Stack gap="xs" style={{ flex: 1 }}>
                                    <Title order={3}>Get in Touch</Title>
                                    <Text c="dimmed">
                                        Have questions? Contact us at support@insaplan.com
                                    </Text>
                                </Stack>
                            </Group>
                        </Card>
                    </Stack>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
