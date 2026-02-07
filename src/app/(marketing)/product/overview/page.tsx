import { Box, Container, Title, Text, Stack, Grid, GridCol } from '@mantine/core'
import PageHero from '@/components/marketing/PageHero'
import KeyBenefits from '@/components/marketing/KeyBenefits'
import ComparisonTable from '@/components/marketing/ComparisonTable'
import CTA from '@/components/marketing/CTA'

const steps = [
    {
        number: '1',
        title: 'Capture Insights',
        description:
            'Centralize organizational knowledge, market data, and research into a searchable intelligence hub.',
    },
    {
        number: '2',
        title: 'Build Plans',
        description:
            'Use proven frameworks and AI assistance to create strategic plans, budgets, and roadmaps.',
    },
    {
        number: '3',
        title: 'Generate Reports',
        description:
            'Create beautiful, data-driven reports and presentations that communicate your strategy clearly.',
    },
]

export default function ProductOverviewPage() {
    return (
        <>
            <PageHero
                title="Turn Insights into Plans"
                subtitle="Capture organizational knowledge, build strategic plans with proven frameworks, and generate beautiful reports—all in one platform."
            />
            <Box py={80} bg="gray.0">
                <Container size="xl">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>How It Works</Title>
                            <Text size="lg" c="dimmed" maw={700}>
                                Three simple steps to transform your planning process
                            </Text>
                        </Stack>
                        <Grid gutter="xl" mt="xl">
                            {steps.map((step) => (
                                <GridCol key={step.number} span={{ base: 12, md: 4 }}>
                                    <Stack align="center" ta="center" gap="md">
                                        <Box
                                            style={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '50%',
                                                background:
                                                    'linear-gradient(135deg, #2e4072, #64317f)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '1.5rem',
                                                fontWeight: 700,
                                            }}
                                        >
                                            {step.number}
                                        </Box>
                                        <Title order={3}>{step.title}</Title>
                                        <Text c="dimmed">{step.description}</Text>
                                    </Stack>
                                </GridCol>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Box>
            <KeyBenefits />
            <Box bg="gray.0">
                <ComparisonTable />
            </Box>
            <CTA />
        </>
    )
}
