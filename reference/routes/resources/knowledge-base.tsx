import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack, Card, ThemeIcon } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/resources/knowledge-base')({
    component: KnowledgeBasePage
});

function KnowledgeBasePage() {
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
                            Knowledge Base
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Learn how to get the most out of Insaplan
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Box py={80}>
                <Container size="md">
                    <Card shadow="sm" padding="xl" radius="md" withBorder>
                        <Stack gap="md" align="center" ta="center">
                            <ThemeIcon size={80} radius="md" variant="light" color="deepblue.6">
                                <IconBook size={40} />
                            </ThemeIcon>
                            <Title order={3}>Documentation Coming Soon</Title>
                            <Text c="dimmed" maw={600}>
                                Our comprehensive knowledge base with tutorials, guides, and best practices
                                will be available at launch. Join the waitlist to be notified when it's ready.
                            </Text>
                        </Stack>
                    </Card>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
