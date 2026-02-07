'use client'

import { Container, Title, Text, Tabs, Stack, Box, List, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import classes from './Solutions.module.css'

const solutions = [
    {
        value: 'sales',
        title: 'Sales',
        tagline: 'Transform sales planning and reporting',
        useCases: [
            'Sales updates and performance reviews',
            'Territory plans and forecasting',
            'Pipeline management and visibility',
        ],
        values: [
            'Quickly create data-driven territory and account plans',
            'Monitor sales execution in real-time',
            'Generate compelling sales reports for leadership',
        ],
        imagePlaceholder: '[SCREENSHOT: Sales dashboard with territory plans and forecasts]',
    },
    {
        value: 'marketing',
        title: 'Marketing',
        tagline: 'Accelerate go-to-market strategy and execution',
        useCases: [
            'Go-to-market (GTM) plans',
            'Product roadmaps',
            'Strategic marketing plans and campaigns',
        ],
        values: [
            'Align marketing strategy with business objectives',
            'Visualize product roadmaps with compelling graphics',
            'Measure campaign effectiveness and adjust quickly',
        ],
        imagePlaceholder: '[SCREENSHOT: Marketing GTM plan with roadmap visualization]',
    },
    {
        value: 'startups',
        title: 'Start Ups',
        tagline: 'Build investor-ready plans and presentations',
        useCases: [
            'Business plans and pitch decks',
            'Investor presentations',
            'Growth strategy and milestone planning',
        ],
        values: [
            'Create professional business plans in days, not weeks',
            'Generate investor-ready presentations',
            'Document strategy and track progress against milestones',
        ],
        imagePlaceholder: '[SCREENSHOT: Startup pitch deck and business plan interface]',
    },
    {
        value: 'enterprise',
        title: 'Enterprise',
        tagline: 'Standardize planning across the organization',
        useCases: [
            'Internal knowledge base and best practices',
            'AI-assisted insights from enterprise data',
            'Uniform planning processes across departments',
            'Customizable workflows for different business units',
        ],
        values: [
            'Ensure consistency and alignment across the organization',
            'Leverage AI to extract insights from large datasets',
            'Reduce planning cycle time',
            'Build institutional knowledge',
        ],
        imagePlaceholder: '[SCREENSHOT: Enterprise dashboard with multi-department views]',
    },
    {
        value: 'nonprofit',
        title: 'Not for Profit',
        tagline: 'Track and communicate your mission',
        useCases: [
            'Internal strategic planning and initiatives',
            'Strategic initiatives tracking',
            'Fundraising activities and impact reporting',
        ],
        values: [
            'Create compelling narratives around your mission',
            'Track progress on strategic initiatives',
            'Generate reports that resonate with donors and stakeholders',
            'Demonstrate impact and accountability',
        ],
        imagePlaceholder: '[SCREENSHOT: Nonprofit impact dashboard and fundraising tracker]',
    },
]

const Solutions = () => (
    <Box py={80} bg="gray.0">
        <Container size="xl">
            <Stack gap="xl">
                <Stack gap="md" align="center" ta="center">
                    <Title order={2}>Solutions by Use Case</Title>
                    <Text size="lg" c="dimmed" maw={700}>
                        Tailored for your industry and organizational needs
                    </Text>
                </Stack>

                <Tabs defaultValue="sales" mt="xl">
                    <Tabs.List grow>
                        {solutions.map((solution) => (
                            <Tabs.Tab key={solution.value} value={solution.value}>
                                {solution.title}
                            </Tabs.Tab>
                        ))}
                    </Tabs.List>

                    {solutions.map((solution) => (
                        <Tabs.Panel key={solution.value} value={solution.value} pt="xl">
                            <Stack gap="xl">
                                <Stack gap="sm">
                                    <Title order={3}>{solution.title}</Title>
                                    <Text size="lg" c="dimmed">
                                        {solution.tagline}
                                    </Text>
                                </Stack>

                                <Box className={classes.solutionImagePlaceholder}>
                                    <Text size="sm" c="dimmed" ta="center">
                                        {solution.imagePlaceholder}
                                    </Text>
                                </Box>

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
                                            <List.Item key={idx}>{useCase}</List.Item>
                                        ))}
                                    </List>
                                </Box>

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
                                            <List.Item key={idx}>{value}</List.Item>
                                        ))}
                                    </List>
                                </Box>
                            </Stack>
                        </Tabs.Panel>
                    ))}
                </Tabs>
            </Stack>
        </Container>
    </Box>
)

export default Solutions
