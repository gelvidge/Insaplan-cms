import { Box, Container, Title, Text, Stack, Grid, GridCol, Card, Button } from '@mantine/core'
import Link from 'next/link'
import Background from '@/components/marketing/Background'
import PageHero from '@/components/marketing/PageHero'
import CTASection from '@/components/marketing/CTASection'
import { fetchSolutionsPage } from '@/lib/queries'

export default async function SolutionsPage() {
    const sp = await fetchSolutionsPage().catch(() => null) ?? {}

    const heroTitle = sp.heroTitle
    const heroSubtitle = sp.heroSubtitle
    const sectionHeading = sp.sectionHeading
    const sectionSubheading = sp.sectionSubheading
    const solutionLinks: { label: string; slug: string; description: string }[] =
        sp.solutionLinks ?? []

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

                <CTASection />
            </div>
        </div>
    )
}
