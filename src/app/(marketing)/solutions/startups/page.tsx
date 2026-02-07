import { Box, Container, Title, Text, Stack, Grid, GridCol, Card, ThemeIcon, List, ListItem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'

const useCases = [
    {
        title: 'Business Plans',
        description: 'Create professional, investor-ready business plans quickly using proven frameworks and AI assistance.',
    },
    {
        title: 'Investor Presentations',
        description: 'Generate compelling pitch decks and presentations that showcase your vision and traction.',
    },
    {
        title: 'Growth Strategy',
        description: 'Document growth strategies, track milestones, and measure progress against objectives.',
    },
]

const values = [
    'Create professional business plans in days, not weeks',
    'Generate investor-ready presentations',
    'Document strategy and track progress against milestones',
]

export default function StartupsSolutionPage() {
    return (
        <>
            <PageHero title="Start Ups" subtitle="Build investor-ready plans and presentations" />
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
