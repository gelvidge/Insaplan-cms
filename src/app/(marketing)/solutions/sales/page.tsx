import { Box, Container, Title, Text, Stack, Grid, GridCol, Card, ThemeIcon, List, ListItem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'

const useCases = [
    {
        title: 'Sales Updates & Performance Reviews',
        description: 'Create data-driven sales performance reports and reviews that showcase progress and identify opportunities.',
    },
    {
        title: 'Territory Plans & Forecasting',
        description: 'Build comprehensive territory plans with AI-powered forecasting and pipeline visibility.',
    },
    {
        title: 'Pipeline Management',
        description: 'Visualize and manage your sales pipeline with real-time dashboards and progress tracking.',
    },
]

const values = [
    'Quickly create data-driven territory and account plans',
    'Monitor sales execution in real-time',
    'Generate compelling sales reports for leadership',
]

export default function SalesSolutionPage() {
    return (
        <>
            <PageHero title="Sales" subtitle="Transform sales planning and reporting" />
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
