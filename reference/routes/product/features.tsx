import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack, Grid, Card, ThemeIcon, List } from '@mantine/core';
import {
    IconChartBar,
    IconPalette,
    IconBrain,
    IconAdjustments,
    IconBooks,
    IconDatabase
} from '@tabler/icons-react';
import CTA from '@Components/Landing Page/CTA';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/product/features')({
    component: ProductFeaturesPage
});

const features = [
    {
        icon: IconPalette,
        title: 'Beautiful Infographics',
        description: 'Professional, data-driven visual elements that make your plans stand out',
        benefits: [
            'Customizable templates for every planning framework',
            'Auto-generated visualizations from your data',
            'Export-ready graphics for presentations'
        ]
    },
    {
        icon: IconChartBar,
        title: 'Beautiful Charts',
        description: 'Interactive and customizable data visualizations',
        benefits: [
            'Real-time dashboard updates',
            'Multiple chart types and styles',
            'Drill-down capabilities for detailed analysis'
        ]
    },
    {
        icon: IconBrain,
        title: 'AI-Assisted Insights & Planning',
        description: 'Intelligent recommendations powered by AI',
        benefits: [
            'Smart suggestions for strategic insights',
            'Context-aware planning recommendations',
            'Automated analysis of plan completeness'
        ]
    },
    {
        icon: IconAdjustments,
        title: 'Fully Customizable',
        description: 'Adapt the platform to your specific needs',
        benefits: [
            'Custom workflows for your unique processes',
            'Flexible data structures and fields',
            'Branded report templates'
        ]
    },
    {
        icon: IconBooks,
        title: 'Integrated Business Frameworks',
        description: 'Access proven strategic planning methodologies',
        benefits: [
            'SWOT, OKRs, Business Model Canvas, and more',
            'Best practice guidance built into each framework',
            'Templates that ensure consistency'
        ]
    },
    {
        icon: IconDatabase,
        title: 'Integrated Knowledge Bases',
        description: 'Pre-built libraries of common KPIs and best practices',
        benefits: [
            'Industry-standard KPI definitions',
            'Searchable repository of strategic insights',
            'Build your own organizational knowledge base'
        ]
    }
];

const problemsSolved = [
    {
        problem: 'Information scattered across PowerPoint files',
        solution: 'Centralized, searchable knowledge base'
    },
    {
        problem: 'Hours spent building strategic plans',
        solution: 'AI-powered frameworks reduce planning to minutes'
    },
    {
        problem: 'Lack of monitoring and progress reporting',
        solution: 'Real-time dashboards and automated reporting'
    },
    {
        problem: 'No feedback mechanisms',
        solution: 'Track outcomes and learnings for continuous improvement'
    },
    {
        problem: 'Inconsistent processes and terminology',
        solution: 'Standardized frameworks and organizational alignment'
    },
    {
        problem: 'Failure to follow best practices',
        solution: 'Integrated business frameworks guide every step'
    }
];

function ProductFeaturesPage() {
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
                            Powerful Features for Modern Planning
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Everything you need to transform insights into actionable plans and beautiful
                            reports
                        </Text>
                    </Stack>
                </Container>
            </Box>

            {/* Features Grid */}
            <Box py={80}>
                <Container size="xl">
                    <Grid gutter="xl">
                        {features.map((feature, index) => (
                            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                                <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
                                    <Stack gap="md">
                                        <ThemeIcon size={60} radius="md" variant="light" color="deepblue.6">
                                            <feature.icon size={32} />
                                        </ThemeIcon>
                                        <Title order={3}>{feature.title}</Title>
                                        <Text size="md" c="dimmed">
                                            {feature.description}
                                        </Text>
                                        <List spacing="sm" size="sm" c="dimmed">
                                            {feature.benefits.map((benefit, idx) => (
                                                <List.Item key={idx}>{benefit}</List.Item>
                                            ))}
                                        </List>
                                    </Stack>
                                </Card>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Problems Solved Section */}
            <Box py={80} bg="gray.0">
                <Container size="lg">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>Problems We Solve</Title>
                            <Text size="lg" c="dimmed" maw={700}>
                                Insaplan addresses critical challenges organizations face
                            </Text>
                        </Stack>

                        <Grid gutter="lg" mt="xl">
                            {problemsSolved.map((item, index) => (
                                <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                                    <Card shadow="sm" padding="lg" radius="md" h="100%">
                                        <Stack gap="md">
                                            <Text fw={600} c="red.7">
                                                Problem: {item.problem}
                                            </Text>
                                            <Text c="green.7" fw={500}>
                                                Solution: {item.solution}
                                            </Text>
                                        </Stack>
                                    </Card>
                                </Grid.Col>
                            ))}
                        </Grid>
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
