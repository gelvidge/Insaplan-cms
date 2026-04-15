import { Box, Container, Title, Text, Stack, Grid, GridCol, Card, Button } from '@mantine/core'
import Link from 'next/link'
import Background from '@/components/marketing/Background'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'
import { fetchSolutionsPage } from '@/lib/queries'

const DEFAULT_SOLUTION_LINKS = [
    { label: 'Sales', slug: 'sales', description: 'Transform sales planning and reporting' },
    { label: 'Marketing', slug: 'marketing', description: 'Accelerate go-to-market strategy and execution' },
    { label: 'Start Ups', slug: 'startups', description: 'Build investor-ready plans and presentations' },
    { label: 'Enterprise', slug: 'enterprise', description: 'Standardize planning across the organization' },
    { label: 'Not for Profit', slug: 'nonprofit', description: 'Track and communicate your mission' },
    { label: 'Project Management', slug: 'project-management', description: 'Plan, execute, and report on projects with clarity' },
    { label: 'Government', slug: 'government', description: 'Deliver accountable, evidence-based planning' },
]

export default async function SolutionsPage() {
    const sp = await fetchSolutionsPage().catch(() => null) ?? {}

    const heroTitle = sp.heroTitle ?? 'Solutions'
    const heroSubtitle = sp.heroSubtitle ?? 'Tailored for your industry and organizational needs'
    const sectionHeading = sp.sectionHeading ?? 'Choose your use case'
    const sectionSubheading = sp.sectionSubheading ?? 'Insaplan adapts to the way your team works'
    const solutionLinks: { label: string; slug: string; description: string }[] =
        sp.solutionLinks?.length ? sp.solutionLinks : DEFAULT_SOLUTION_LINKS

    return (
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            <Background />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <PageHero title={heroTitle} subtitle={heroSubtitle} />

                <Box py={80}>
                    <Container size="xl">
                        <Stack gap="xl">
                            <Stack gap="md" align="center" ta="center">
                                <Title order={2}>{sectionHeading}</Title>
                                <Text size="lg" c="dimmed" maw={600}>{sectionSubheading}</Text>
                            </Stack>
                            <Grid gutter="lg" mt="xl">
                                {solutionLinks.map((s) => (
                                    <GridCol key={s.slug} span={{ base: 12, sm: 6, md: 4 }}>
                                        <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                            <Stack gap="md" justify="space-between" h="100%">
                                                <Stack gap="xs">
                                                    <Title order={4}>{s.label}</Title>
                                                    <Text size="sm" c="dimmed">{s.description}</Text>
                                                </Stack>
                                                <Button
                                                    variant="light"
                                                    component={Link}
                                                    href={`/solutions/${s.slug}`}
                                                    fullWidth
                                                >
                                                    Learn more
                                                </Button>
                                            </Stack>
                                        </Card>
                                    </GridCol>
                                ))}
                            </Grid>
                        </Stack>
                    </Container>
                </Box>

                <CTA />
            </div>
        </div>
    )
}
