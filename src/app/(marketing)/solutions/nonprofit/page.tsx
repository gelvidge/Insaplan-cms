import { Box, Container, Title, Text, Stack, Grid, GridCol, Card, ThemeIcon, List, ListItem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'

const useCases = [
    {
        title: 'Strategic Plans',
        description: 'Create mission-driven strategic plans that align your organization around shared goals.',
    },
    {
        title: 'Grant Applications',
        description: 'Generate compelling grant proposals and reports that demonstrate impact and accountability.',
    },
    {
        title: 'Impact Measurement',
        description: 'Track and visualize your impact with clear metrics and beautiful reporting.',
    },
]

const values = [
    'Create compelling narratives around your mission',
    'Generate reports that resonate with donors and stakeholders',
    'Track and demonstrate impact with clear metrics',
    'Do more with limited resources using AI assistance',
]

export default function NonprofitSolutionPage() {
    return (
        <>
            <PageHero title="Not for Profit" subtitle="Track and communicate your mission" />
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
