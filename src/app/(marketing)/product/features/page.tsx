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
import { fetchProductFeaturesPage } from '@/lib/queries'

type IconKey = 'chart-bar' | 'palette' | 'brain' | 'adjustments' | 'books' | 'database'
const iconMap: Record<IconKey, React.ComponentType<{ size?: number }>> = {
    'chart-bar': IconChartBar,
    palette: IconPalette,
    brain: IconBrain,
    adjustments: IconAdjustments,
    books: IconBooks,
    database: IconDatabase,
}

const DEPRECATED_features = [
    { icon: 'palette' as IconKey, title: 'Beautiful Infographics', description: 'Create stunning visual presentations of your strategic plans and data.', benefits: [{ label: 'Professional templates' }, { label: 'Custom branding' }, { label: 'Export to multiple formats' }] },
    { icon: 'chart-bar' as IconKey, title: 'Beautiful Charts', description: 'Visualize data with professional charts that tell your story.', benefits: [{ label: 'Interactive dashboards' }, { label: 'Real-time data updates' }, { label: 'Multiple chart types' }] },
    { icon: 'brain' as IconKey, title: 'AI-Assisted Insights & Planning', description: 'Leverage AI to uncover insights and accelerate planning.', benefits: [{ label: 'Smart recommendations' }, { label: 'Automated analysis' }, { label: 'Pattern recognition' }] },
    { icon: 'adjustments' as IconKey, title: 'Fully Customizable', description: "Tailor every aspect to your organization's needs.", benefits: [{ label: 'Custom workflows' }, { label: 'Flexible data models' }, { label: 'Personalized dashboards' }] },
    { icon: 'books' as IconKey, title: 'Integrated Business Frameworks', description: 'Access proven frameworks like SWOT, OKRs, and Business Model Canvas.', benefits: [{ label: 'Best practice templates' }, { label: 'Industry-specific frameworks' }, { label: 'Guided planning processes' }] },
    { icon: 'database' as IconKey, title: 'Integrated Knowledge Bases', description: 'Build and leverage organizational knowledge for better planning.', benefits: [{ label: 'Searchable insights' }, { label: 'Common KPIs library' }, { label: 'Industry benchmarks' }] },
]

const DEPRECATED_problems = [
    { problem: 'Plans take weeks to create and are outdated by the time they are finished', solution: 'AI-assisted planning reduces creation time from weeks to hours with real-time updates' },
    { problem: 'Strategic reports are static, ugly, and fail to communicate vision', solution: 'Beautiful, dynamic reports with professional infographics and data visualizations' },
    { problem: 'Organizational knowledge is scattered across emails, docs, and spreadsheets', solution: 'Centralized knowledge base that integrates with your planning process' },
    { problem: 'No standardized approach to strategic planning across the organization', solution: 'Integrated business frameworks ensure consistency and best practices' },
    { problem: 'Difficult to track progress and measure impact of strategic initiatives', solution: 'Real-time dashboards and progress tracking with customizable KPIs' },
    { problem: 'Teams work in silos without visibility into overall strategy', solution: 'Collaborative platform with shared visibility and aligned objectives' },
]

export default async function ProductFeaturesPage() {
    const pf = await fetchProductFeaturesPage().catch(() => null) ?? {}

    const heroTitle = pf.heroTitle ?? 'Features'
    const heroSubtitle = pf.heroSubtitle ?? 'Everything you need to transform strategic planning from a painful process into a competitive advantage'
    const problemsHeading = pf.problemsHeading ?? 'Problems We Solve'
    const problemsSubheading = pf.problemsSubheading ?? 'Common challenges Insaplan addresses'
    const features = pf.features?.length ? pf.features : DEPRECATED_features
    const problems = pf.problems?.length ? pf.problems : DEPRECATED_problems

    return (
        <>
            <PageHero title={heroTitle} subtitle={heroSubtitle} />

            <Box py={80}>
                <Container size="xl">
                    <Grid gutter="lg">
                        {features.map((feature: any, index: number) => {
                            const IconComponent = feature.icon && iconMap[feature.icon as IconKey] ? iconMap[feature.icon as IconKey] : IconChartBar
                            return (
                                <GridCol key={index} span={{ base: 12, md: 6 }}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                        <Stack gap="md">
                                            <ThemeIcon size={50} radius="md" variant="gradient" gradient={{ from: 'deepblue.6', to: 'purple.6', deg: 45 }}>
                                                <IconComponent size={28} />
                                            </ThemeIcon>
                                            <Title order={4}>{feature.title}</Title>
                                            <Text size="sm" c="dimmed">{feature.description}</Text>
                                            {feature.benefits?.length > 0 && (
                                                <List size="sm" spacing="xs">
                                                    {feature.benefits.map((b: { label: string }, i: number) => (
                                                        <ListItem key={i}>{b.label}</ListItem>
                                                    ))}
                                                </List>
                                            )}
                                        </Stack>
                                    </Card>
                                </GridCol>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>

            <Box py={80} bg="gray.0">
                <Container size="xl">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>{problemsHeading}</Title>
                            <Text size="lg" c="dimmed" maw={700}>{problemsSubheading}</Text>
                        </Stack>
                        <Grid gutter="lg" mt="xl">
                            {problems.map((item: any, index: number) => (
                                <GridCol key={index} span={{ base: 12, md: 6 }}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                        <Stack gap="md">
                                            <Text fw={600} size="sm" c="red.7">Problem: {item.problem}</Text>
                                            <Text fw={600} size="sm" c="green.7">Solution: {item.solution}</Text>
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
