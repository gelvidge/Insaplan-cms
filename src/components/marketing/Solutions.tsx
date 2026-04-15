'use client'

import { Container, Title, Text, Tabs, Stack, Box, List, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import classes from './Solutions.module.css'

type Solution = {
    tabKey: string
    title: string
    tagline: string
    image?: { url?: string; alt?: string } | null
    useCases?: Array<{ label: string }> | null
    values?: Array<{ label: string }> | null
}

// ---------------------------------------------------------------------------
// DEPRECATED: hardcoded solution data — enter solutions in the CMS under
// Marketing > Marketing Pages > Solutions tab, then remove this block.
// ---------------------------------------------------------------------------
const DEPRECATED_solutions: Solution[] = [
    {
        tabKey: 'sales',
        title: 'Sales',
        tagline: 'Transform sales planning and reporting',
        useCases: [
            { label: 'Sales updates and performance reviews' },
            { label: 'Territory plans and forecasting' },
            { label: 'Pipeline management and visibility' },
        ],
        values: [
            { label: 'Quickly create data-driven territory and account plans' },
            { label: 'Monitor sales execution in real-time' },
            { label: 'Generate compelling sales reports for leadership' },
        ],
    },
    {
        tabKey: 'marketing',
        title: 'Marketing',
        tagline: 'Accelerate go-to-market strategy and execution',
        useCases: [
            { label: 'Go-to-market (GTM) plans' },
            { label: 'Product roadmaps' },
            { label: 'Strategic marketing plans and campaigns' },
        ],
        values: [
            { label: 'Align marketing strategy with business objectives' },
            { label: 'Visualize product roadmaps with compelling graphics' },
            { label: 'Measure campaign effectiveness and adjust quickly' },
        ],
    },
    {
        tabKey: 'startups',
        title: 'Start Ups',
        tagline: 'Build investor-ready plans and presentations',
        useCases: [
            { label: 'Business plans and pitch decks' },
            { label: 'Investor presentations' },
            { label: 'Growth strategy and milestone planning' },
        ],
        values: [
            { label: 'Create professional business plans in days, not weeks' },
            { label: 'Generate investor-ready presentations' },
            { label: 'Document strategy and track progress against milestones' },
        ],
    },
    {
        tabKey: 'enterprise',
        title: 'Enterprise',
        tagline: 'Standardize planning across the organization',
        useCases: [
            { label: 'Internal knowledge base and best practices' },
            { label: 'AI-assisted insights from enterprise data' },
            { label: 'Uniform planning processes across departments' },
            { label: 'Customizable workflows for different business units' },
        ],
        values: [
            { label: 'Ensure consistency and alignment across the organization' },
            { label: 'Leverage AI to extract insights from large datasets' },
            { label: 'Reduce planning cycle time' },
            { label: 'Build institutional knowledge' },
        ],
    },
    {
        tabKey: 'nonprofit',
        title: 'Not for Profit',
        tagline: 'Track and communicate your mission',
        useCases: [
            { label: 'Internal strategic planning and initiatives' },
            { label: 'Strategic initiatives tracking' },
            { label: 'Fundraising activities and impact reporting' },
        ],
        values: [
            { label: 'Create compelling narratives around your mission' },
            { label: 'Track progress on strategic initiatives' },
            { label: 'Generate reports that resonate with donors and stakeholders' },
            { label: 'Demonstrate impact and accountability' },
        ],
    },
]
// ---------------------------------------------------------------------------

type SectionData = {
    heading?: string | null
    subheading?: string | null
    solutions?: Solution[] | null
}

type Props = { data?: SectionData | null }

const Solutions = ({ data }: Props) => {
    const heading = data?.heading ?? 'Solutions by Use Case'
    const subheading = data?.subheading ?? 'Tailored for your industry and organizational needs'
    const solutions =
        data?.solutions && data.solutions.length > 0 ? data.solutions : DEPRECATED_solutions

    return (
        <Box py={80} bg="gray.0">
            <Container size="xl">
                <Stack gap="xl">
                    <Stack gap="md" align="center" ta="center">
                        <Title order={2}>{heading}</Title>
                        <Text size="lg" c="dimmed" maw={700}>
                            {subheading}
                        </Text>
                    </Stack>

                    <Tabs defaultValue={solutions[0]?.tabKey ?? 'sales'} mt="xl">
                        <Tabs.List grow>
                            {solutions.map((solution) => (
                                <Tabs.Tab key={solution.tabKey} value={solution.tabKey}>
                                    {solution.title}
                                </Tabs.Tab>
                            ))}
                        </Tabs.List>

                        {solutions.map((solution) => (
                            <Tabs.Panel key={solution.tabKey} value={solution.tabKey} pt="xl">
                                <Stack gap="xl">
                                    <Stack gap="sm">
                                        <Title order={3}>{solution.title}</Title>
                                        <Text size="lg" c="dimmed">
                                            {solution.tagline}
                                        </Text>
                                    </Stack>

                                    {solution.image?.url ? (
                                        <Box className={classes.solutionImagePlaceholder}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={solution.image.url}
                                                alt={solution.image.alt ?? solution.title}
                                                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                                            />
                                        </Box>
                                    ) : (
                                        <Box className={classes.solutionImagePlaceholder}>
                                            <Text size="sm" c="dimmed" ta="center">
                                                {/* DEPRECATED: image placeholder — upload screenshot in CMS */}
                                                [SCREENSHOT: {solution.title} dashboard]
                                            </Text>
                                        </Box>
                                    )}

                                    {solution.useCases && solution.useCases.length > 0 && (
                                        <Box>
                                            <Text fw={600} size="md" mb="sm">
                                                Use Cases:
                                            </Text>
                                            <List
                                                spacing="xs"
                                                size="sm"
                                                icon={
                                                    <ThemeIcon color="blue.5" size={20} radius="xl">
                                                        <IconCheck size={12} />
                                                    </ThemeIcon>
                                                }
                                            >
                                                {solution.useCases.map((useCase, idx) => (
                                                    <List.Item key={idx}>{useCase.label}</List.Item>
                                                ))}
                                            </List>
                                        </Box>
                                    )}

                                    {solution.values && solution.values.length > 0 && (
                                        <Box>
                                            <Text fw={600} size="md" mb="sm">
                                                Value:
                                            </Text>
                                            <List
                                                spacing="xs"
                                                size="sm"
                                                icon={
                                                    <ThemeIcon color="green.5" size={20} radius="xl">
                                                        <IconCheck size={12} />
                                                    </ThemeIcon>
                                                }
                                            >
                                                {solution.values.map((value, idx) => (
                                                    <List.Item key={idx}>{value.label}</List.Item>
                                                ))}
                                            </List>
                                        </Box>
                                    )}
                                </Stack>
                            </Tabs.Panel>
                        ))}
                    </Tabs>
                </Stack>
            </Container>
        </Box>
    )
}

export default Solutions
