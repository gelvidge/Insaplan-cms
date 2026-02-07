import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack, List, Grid, Card, ThemeIcon } from '@mantine/core';
import { IconBriefcase, IconPresentation, IconGrowth } from '@tabler/icons-react';
import CTA from '@Components/Landing Page/CTA';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/solutions/startups')({
    component: StartupsSolutionPage
});

const useCases = [
    {
        icon: IconBriefcase,
        title: 'Business Plans',
        description: 'Create comprehensive business plans with professional formatting'
    },
    {
        icon: IconPresentation,
        title: 'Investor Presentations',
        description: 'Build compelling pitch decks that win funding'
    },
    {
        icon: IconGrowth,
        title: 'Growth Strategy',
        description: 'Plan milestones and track progress against growth objectives'
    }
];

function StartupsSolutionPage() {
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
                            Build Investor-Ready Plans
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Create professional business plans and presentations that attract funding and
                            guide execution
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Box py={80}>
                <Container size="xl">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>Startup Use Cases</Title>
                            <Text size="lg" c="dimmed" maw={700}>
                                How startups use Insaplan
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

            <Box py={80} bg="gray.0">
                <Container size="lg">
                    <Stack gap="xl">
                        <Title order={2} ta="center">
                            Value for Startups
                        </Title>
                        <List spacing="lg" size="lg" withPadding>
                            <List.Item>
                                <Text fw={600}>Create professional business plans in days, not weeks</Text>
                                <Text c="dimmed" size="sm">
                                    Leverage built-in frameworks and templates to accelerate plan development
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Generate investor-ready presentations</Text>
                                <Text c="dimmed" size="sm">
                                    Export beautiful pitch decks with professional infographics and charts
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Document strategy and track progress against milestones</Text>
                                <Text c="dimmed" size="sm">
                                    Monitor execution and demonstrate traction to investors and stakeholders
                                </Text>
                            </List.Item>
                        </List>
                    </Stack>
                </Container>
            </Box>

            <CTA />
            <Footer />
        </Box>
    );
}
