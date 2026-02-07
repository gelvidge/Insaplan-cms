import { Box, Container, Title, Text, Stack, Grid, GridCol, Card, ThemeIcon, List, ListItem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'

const useCases = [
    {
        title: 'Go-to-Market (GTM) Plans',
        description: 'Build comprehensive go-to-market strategies with clear timelines, milestones, and resource allocation.',
    },
    {
        title: 'Product Roadmaps',
        description: 'Visualize product development timelines and align marketing activities with launches.',
    },
    {
        title: 'Strategic Marketing Plans',
        description: 'Create data-driven marketing plans with campaign tracking and performance measurement.',
    },
]

const values = [
    'Align marketing strategy with business objectives',
    'Visualize product roadmaps with compelling graphics',
    'Measure campaign effectiveness and adjust quickly',
]

export default function MarketingSolutionPage() {
    return (
        <>
            <PageHero title="Marketing" subtitle="Accelerate go-to-market strategy and execution" />
            <Box py={80}>
                <Container size="xl">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>Use Cases</Title>
                        </Stack>
                        <Grid gutter="lg">
                            {useCases.map((uc, i) => (
                                <GridCol key={i} span={{ base: 12, md: 4 }}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                        <Stack gap="md">
                                            <Title order={4}>{uc.title}</Title>
                                            <Text size="sm" c="dimmed">{uc.description}</Text>
                                        </Stack>
                                    </Card>
                                </GridCol>
                            ))}
                        </Grid>

                        <Box mt="xl">
                            <Title order={3} mb="md">Value</Title>
                            <List spacing="xs" size="sm" icon={<ThemeIcon color="green.5" size={20} radius="xl"><IconCheck size={12} /></ThemeIcon>}>
                                {values.map((v, i) => (
                                    <ListItem key={i}>{v}</ListItem>
                                ))}
                            </List>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <CTA />
        </>
    )
}
