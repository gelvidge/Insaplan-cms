import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack, List, Grid, Card, ThemeIcon } from '@mantine/core';
import { IconRocket, IconMap, IconBrandCampaignmonitor } from '@tabler/icons-react';
import CTA from '@Components/Landing Page/CTA';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/solutions/marketing')({
    component: MarketingSolutionPage
});

const useCases = [
    {
        icon: IconRocket,
        title: 'Go-to-Market (GTM) Plans',
        description: 'Develop comprehensive GTM strategies with AI-powered market insights'
    },
    {
        icon: IconMap,
        title: 'Product Roadmaps',
        description: 'Visualize product timelines with professional infographics'
    },
    {
        icon: IconBrandCampaignmonitor,
        title: 'Strategic Marketing Plans',
        description: 'Create data-driven marketing campaigns aligned with business objectives'
    }
];

function MarketingSolutionPage() {
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
                            Accelerate Go-to-Market Strategy
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Plan, execute, and measure marketing initiatives with AI-powered frameworks and
                            beautiful visualizations
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Box py={80}>
                <Container size="xl">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>Marketing Use Cases</Title>
                            <Text size="lg" c="dimmed" maw={700}>
                                How marketing teams use Insaplan
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
                            Value for Marketing Teams
                        </Title>
                        <List spacing="lg" size="lg" withPadding>
                            <List.Item>
                                <Text fw={600}>Align marketing strategy with business objectives</Text>
                                <Text c="dimmed" size="sm">
                                    Use integrated frameworks like OKRs and Business Model Canvas to ensure
                                    alignment
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Visualize product roadmaps with compelling graphics</Text>
                                <Text c="dimmed" size="sm">
                                    Create timeline visualizations and infographics that stakeholders love
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Measure campaign effectiveness and adjust quickly</Text>
                                <Text c="dimmed" size="sm">
                                    Track KPIs in real-time and pivot strategies based on data
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
