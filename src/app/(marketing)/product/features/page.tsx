import { Box, Container, Title, Text, Stack, Grid, GridCol, Card, ThemeIcon, List, ListItem } from '@mantine/core'
import {
    IconChartBar,
    IconPalette,
    IconBrain,
    IconAdjustments,
    IconBooks,
    IconDatabase,
} from '@tabler/icons-react'
import type { Metadata } from 'next'
import PageHero from '@/components/marketing/PageHero'
import CTASection from '@/components/marketing/CTASection'
import { fetchProductFeaturesPage } from '@/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
    const pf = await fetchProductFeaturesPage().catch(() => null)
    const title = pf?.seo?.metaTitle ?? pf?.heroTitle ?? 'Features'
    const description = pf?.seo?.metaDescription ?? pf?.heroSubtitle ?? ''
    return {
        title,
        description,
        openGraph: { title, description, url: 'https://insaplan.com/product/features' },
    }
}

type IconKey = 'chart-bar' | 'palette' | 'brain' | 'adjustments' | 'books' | 'database'
const iconMap: Record<IconKey, React.ComponentType<{ size?: number }>> = {
    'chart-bar': IconChartBar,
    palette: IconPalette,
    brain: IconBrain,
    adjustments: IconAdjustments,
    books: IconBooks,
    database: IconDatabase,
}

export default async function ProductFeaturesPage() {
    const pf = await fetchProductFeaturesPage().catch(() => null) ?? {}

    const heroTitle = pf.heroTitle
    const heroSubtitle = pf.heroSubtitle
    const problemsHeading = pf.problemsHeading
    const problemsSubheading = pf.problemsSubheading
    const features = pf.features ?? []
    const problems = pf.problems ?? []

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

            <CTASection />
        </>
    )
}
