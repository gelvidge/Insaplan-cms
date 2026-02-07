import { Box, Container, Title, Text, Stack, Grid, GridCol, Card, ThemeIcon, List, ListItem } from '@mantine/core'
import {
    IconChartBar,
    IconPalette,
    IconBrain,
    IconAdjustments,
    IconBooks,
    IconDatabase,
} from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'

const features = [
    {
        icon: IconPalette,
        title: 'Beautiful Infographics',
        description: 'Create stunning visual presentations of your strategic plans and data.',
        benefits: [
            'Professional templates',
            'Custom branding',
            'Export to multiple formats',
        ],
    },
    {
        icon: IconChartBar,
        title: 'Beautiful Charts',
        description: 'Visualize data with professional charts that tell your story.',
        benefits: [
            'Interactive dashboards',
            'Real-time data updates',
            'Multiple chart types',
        ],
    },
    {
        icon: IconBrain,
        title: 'AI-Assisted Insights & Planning',
        description: 'Leverage AI to uncover insights and accelerate planning.',
        benefits: [
            'Smart recommendations',
            'Automated analysis',
            'Pattern recognition',
        ],
    },
    {
        icon: IconAdjustments,
        title: 'Fully Customizable',
        description: 'Tailor every aspect to your organization&apos;s needs.',
        benefits: [
            'Custom workflows',
            'Flexible data models',
            'Personalized dashboards',
        ],
    },
    {
        icon: IconBooks,
        title: 'Integrated Business Frameworks',
        description: 'Access proven frameworks like SWOT, OKRs, and Business Model Canvas.',
        benefits: [
            'Best practice templates',
            'Industry-specific frameworks',
            'Guided planning processes',
        ],
    },
    {
        icon: IconDatabase,
        title: 'Integrated Knowledge Bases',
        description: 'Build and leverage organizational knowledge for better planning.',
        benefits: [
            'Searchable insights',
            'Common KPIs library',
            'Industry benchmarks',
        ],
    },
]

const problemsSolved = [
    {
        problem: 'Plans take weeks to create and are outdated by the time they are finished',
        solution: 'AI-assisted planning reduces creation time from weeks to hours with real-time updates',
    },
    {
        problem: 'Strategic reports are static, ugly, and fail to communicate vision',
        solution: 'Beautiful, dynamic reports with professional infographics and data visualizations',
    },
    {
        problem: 'Organizational knowledge is scattered across emails, docs, and spreadsheets',
        solution: 'Centralized knowledge base that integrates with your planning process',
    },
    {
        problem: 'No standardized approach to strategic planning across the organization',
        solution: 'Integrated business frameworks ensure consistency and best practices',
    },
    {
        problem: 'Difficult to track progress and measure impact of strategic initiatives',
        solution: 'Real-time dashboards and progress tracking with customizable KPIs',
    },
    {
        problem: 'Teams work in silos without visibility into overall strategy',
        solution: 'Collaborative platform with shared visibility and aligned objectives',
    },
]

export default function ProductFeaturesPage() {
    return (
        <>
            <PageHero
                title="Features"
                subtitle="Everything you need to transform strategic planning from a painful process into a competitive advantage"
            />
            <Box py={80}>
                <Container size="xl">
                    <Grid gutter="lg">
                        {features.map((feature, index) => (
                            <GridCol key={index} span={{ base: 12, md: 6 }}>
                                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                    <Stack gap="md">
                                        <ThemeIcon
                                            size={50}
                                            radius="md"
                                            variant="gradient"
                                            gradient={{
                                                from: 'deepblue.6',
                                                to: 'purple.6',
                                                deg: 45,
                                            }}
                                        >
                                            <feature.icon size={28} />
                                        </ThemeIcon>
                                        <Title order={4}>{feature.title}</Title>
                                        <Text size="sm" c="dimmed">
                                            {feature.description}
                                        </Text>
                                        <List size="sm" spacing="xs">
                                            {feature.benefits.map((b, i) => (
                                                <ListItem key={i}>{b}</ListItem>
                                            ))}
                                        </List>
                                    </Stack>
                                </Card>
                            </GridCol>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box py={80} bg="gray.0">
                <Container size="xl">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>Problems We Solve</Title>
                            <Text size="lg" c="dimmed" maw={700}>
                                Common challenges Insaplan addresses
                            </Text>
                        </Stack>
                        <Grid gutter="lg" mt="xl">
                            {problemsSolved.map((item, index) => (
                                <GridCol key={index} span={{ base: 12, md: 6 }}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                        <Stack gap="md">
                                            <Text fw={600} size="sm" c="red.7">
                                                Problem: {item.problem}
                                            </Text>
                                            <Text fw={600} size="sm" c="green.7">
                                                Solution: {item.solution}
                                            </Text>
                                        </Stack>
                                    </Card>
                                </GridCol>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Box>
            <CTA />
        </>
    )
}
