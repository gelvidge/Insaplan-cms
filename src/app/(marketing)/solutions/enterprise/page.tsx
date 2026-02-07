import { Box, Container, Title, Text, Stack, Grid, GridCol, Card, ThemeIcon, List, ListItem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'

const useCases = [
    {
        title: 'Internal Knowledge Base',
        description: 'Build centralized knowledge bases with best practices, frameworks, and institutional knowledge.',
    },
    {
        title: 'Standardized Planning',
        description: 'Ensure uniform planning processes across departments with customizable workflows.',
    },
    {
        title: 'Department Collaboration',
        description: 'Enable cross-department visibility and collaboration on strategic initiatives.',
    },
]

const values = [
    'Build internal knowledge bases with organizational best practices',
    'Ensure consistent methodologies across the organization',
    'Scale planning processes across multiple departments',
    'Centralized monitoring and reporting for leadership',
]

export default function EnterpriseSolutionPage() {
    return (
        <>
            <PageHero title="Enterprise" subtitle="Standardize planning across the organization" />
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
