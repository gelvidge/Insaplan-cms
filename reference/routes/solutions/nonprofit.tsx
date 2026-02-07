import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack, List, Grid, Card, ThemeIcon } from '@mantine/core';
import { IconHeart, IconReport, IconTarget } from '@tabler/icons-react';
import CTA from '@Components/Landing Page/CTA';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/solutions/nonprofit')({
    component: NonprofitSolutionPage
});

const useCases = [
    {
        icon: IconTarget,
        title: 'Strategic Plans',
        description: 'Develop mission-driven strategic plans with measurable objectives'
    },
    {
        icon: IconReport,
        title: 'Grant Applications',
        description: 'Create compelling proposals and impact reports for funders'
    },
    {
        icon: IconHeart,
        title: 'Impact Measurement',
        description: 'Track and visualize program outcomes and social impact'
    }
];

function NonprofitSolutionPage() {
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
                            Amplify Your Mission
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Create compelling strategic plans, grant proposals, and impact reports that
                            demonstrate your value
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Box py={80}>
                <Container size="xl">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>Not-for-Profit Use Cases</Title>
                            <Text size="lg" c="dimmed" maw={700}>
                                How nonprofits use Insaplan
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
                            Value for Not-for-Profit Organizations
                        </Title>
                        <List spacing="lg" size="lg" withPadding>
                            <List.Item>
                                <Text fw={600}>Create mission-driven strategic plans</Text>
                                <Text c="dimmed" size="sm">
                                    Use proven frameworks to align programs with mission and theory of change
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Generate compelling grant proposals and reports</Text>
                                <Text c="dimmed" size="sm">
                                    Professional formatting and beautiful visualizations make your impact clear
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Track and demonstrate program impact</Text>
                                <Text c="dimmed" size="sm">
                                    Measure outcomes with KPI dashboards and share results with stakeholders
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Do more with limited resources</Text>
                                <Text c="dimmed" size="sm">
                                    Reduce time spent on planning and reporting so you can focus on your mission
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
