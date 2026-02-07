import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack, List, Grid, Card, ThemeIcon } from '@mantine/core';
import { IconTarget, IconChartLine, IconUsers } from '@tabler/icons-react';
import CTA from '@Components/Landing Page/CTA';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/solutions/sales')({
    component: SalesSolutionPage
});

const useCases = [
    {
        icon: IconChartLine,
        title: 'Sales Updates & Performance Reviews',
        description: 'Create data-driven sales reports and performance dashboards in minutes'
    },
    {
        icon: IconTarget,
        title: 'Territory Plans & Forecasting',
        description: 'Build comprehensive territory plans with AI-assisted forecasting'
    },
    {
        icon: IconUsers,
        title: 'Pipeline Management',
        description: 'Visualize and monitor your sales pipeline with real-time dashboards'
    }
];

function SalesSolutionPage() {
    return (
        <Box>
            {/* Hero Section */}
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
                            Transform Sales Planning & Reporting
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Accelerate territory planning, pipeline management, and performance reporting
                            with AI-powered insights
                        </Text>
                    </Stack>
                </Container>
            </Box>

            {/* Use Cases */}
            <Box py={80}>
                <Container size="xl">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>Sales Use Cases</Title>
                            <Text size="lg" c="dimmed" maw={700}>
                                How sales teams use Insaplan
                            </Text>
                        </Stack>

                        <Grid gutter="xl" mt="xl">
                            {useCases.map((useCase, index) => (
                                <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                                    <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
                                        <Stack gap="md" align="center" ta="center">
                                            <ThemeIcon size={60} radius="md" variant="light" color="deepblue.6">
                                                <useCase.icon size={32} />
                                            </ThemeIcon>
                                            <Title order={4}>{useCase.title}</Title>
                                            <Text size="sm" c="dimmed">
                                                {useCase.description}
                                            </Text>
                                        </Stack>
                                    </Card>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Box>

            {/* Value Section */}
            <Box py={80} bg="gray.0">
                <Container size="lg">
                    <Stack gap="xl">
                        <Title order={2} ta="center">
                            Value for Sales Teams
                        </Title>
                        <List spacing="lg" size="lg" withPadding>
                            <List.Item>
                                <Text fw={600}>Quickly create data-driven territory and account plans</Text>
                                <Text c="dimmed" size="sm">
                                    Use AI assistance and integrated frameworks to build comprehensive territory
                                    strategies in hours instead of days
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Monitor sales execution in real-time</Text>
                                <Text c="dimmed" size="sm">
                                    Track pipeline progress, deal velocity, and team performance with live
                                    dashboards
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Generate compelling sales reports for leadership</Text>
                                <Text c="dimmed" size="sm">
                                    Create professional, visually stunning reports with one click — no manual
                                    formatting required
                                </Text>
                            </List.Item>
                        </List>
                    </Stack>
                </Container>
            </Box>

            {/* CTA */}
            <CTA />

            {/* Footer */}
            <Footer />
        </Box>
    );
}
