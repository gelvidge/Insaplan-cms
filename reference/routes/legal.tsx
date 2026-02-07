import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack, Tabs } from '@mantine/core';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/legal')({
    component: LegalPage
});

function LegalPage() {
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
                            Legal
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Terms of Service and Privacy Policy
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Box py={80}>
                <Container size="md">
                    <Tabs defaultValue="terms">
                        <Tabs.List>
                            <Tabs.Tab value="terms">Terms of Service</Tabs.Tab>
                            <Tabs.Tab value="privacy">Privacy Policy</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="terms" pt="xl">
                            <Stack gap="lg">
                                <Title order={3}>Terms of Service</Title>
                                <Text c="dimmed">
                                    Our Terms of Service will be published prior to launch. These terms will
                                    govern your use of the Insaplan platform and outline the rights and
                                    responsibilities of both users and Insaplan.
                                </Text>
                                <Text c="dimmed" size="sm">
                                    Last updated: Coming soon
                                </Text>
                            </Stack>
                        </Tabs.Panel>

                        <Tabs.Panel value="privacy" pt="xl">
                            <Stack gap="lg">
                                <Title order={3}>Privacy Policy</Title>
                                <Text c="dimmed">
                                    Our Privacy Policy will be published prior to launch. We are committed to
                                    protecting your privacy and will clearly outline how we collect, use, and
                                    safeguard your data.
                                </Text>
                                <Text c="dimmed" size="sm">
                                    Last updated: Coming soon
                                </Text>
                            </Stack>
                        </Tabs.Panel>
                    </Tabs>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
