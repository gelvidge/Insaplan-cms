'use client'

import { Container, Title, Text, Grid, GridCol, Stack, Box, ThemeIcon, List, ListItem } from '@mantine/core'
import { IconBulb, IconTarget, IconReport, IconCheck } from '@tabler/icons-react'
import classes from './CoreFeatures.module.css'

const coreFeatures = [
    {
        icon: IconBulb,
        title: 'Capture and Curate Insights',
        description:
            'Turn internal knowledge into a reusable library of insights you can apply across plans.',
        capabilities: [
            'Capture and organize insights from across the business',
            'Curate what matters so teams can reuse it consistently',
            'Build a searchable internal knowledge base for planning',
            'Create a single source of truth that stays current as you learn',
        ],
        imagePlaceholder: '[SCREENSHOT: Curated insights library]',
    },
    {
        icon: IconTarget,
        title: 'Build Plans at Speed',
        description:
            'Manage a broad set of business frameworks and processes with flexible templates.',
        capabilities: [
            'Use built-in frameworks and planning processes, or create your own',
            'Create custom templates with hundreds of configuration options',
            'Assemble strategic plans, project plans, and execution workstreams in one place',
            'Iterate quickly as priorities change and new information arrives',
        ],
        imagePlaceholder: '[SCREENSHOT: Plan builder with frameworks, processes, and templates]',
    },
    {
        icon: IconReport,
        title: 'Visualize and Communicate',
        description:
            'Bring plans to life with visual tables, infographics, and audience-ready reporting.',
        capabilities: [
            'Visual tables and dashboards that make progress and priorities clear',
            'Infographics to communicate complex ideas quickly',
            'Custom reporting templates for different stakeholders',
            'Export-ready outputs (PDF and presentation formats)',
        ],
        imagePlaceholder: '[SCREENSHOT: Visual tables, infographics, and reporting]',
    },
]

const CoreFeatures = () => (
    <Box py={80} bg="gray.0">
        <Container size={1440}>
            <Stack gap="xl">
                <Stack gap="md" align="center" ta="center">
                    <Title order={2}>What Makes Insaplan Different</Title>
                    <Text size="lg" c="dimmed" maw={700}>
                        It is not just strategy. It is planning, project management, and strategy, all
                        powered by curated insights and flexible building blocks.
                    </Text>
                </Stack>

                <Stack gap={60} mt="xl">
                    {coreFeatures.map((feature, index) => {
                        const FeatureIcon = feature.icon

                        return (
                            <Grid key={index} align="center" gutter={40}>
                                <GridCol
                                    span={{ base: 12, md: 6 }}
                                    order={{ base: 2, md: index % 2 === 0 ? 1 : 2 }}
                                >
                                    <Stack gap="md">
                                        <ThemeIcon
                                            size={60}
                                            radius="md"
                                            variant="gradient"
                                            gradient={{ from: 'deepblue.6', to: 'purple.6', deg: 45 }}
                                        >
                                            <FeatureIcon size={32} />
                                        </ThemeIcon>
                                        <Title order={3}>{feature.title}</Title>
                                        <Text size="lg" c="dimmed">
                                            {feature.description}
                                        </Text>
                                        <Text fw={600} size="sm" mt="md">
                                            Capabilities:
                                        </Text>
                                        <List
                                            spacing="xs"
                                            size="sm"
                                            c="dimmed"
                                            icon={
                                                <ThemeIcon
                                                    size={18}
                                                    radius="xl"
                                                    variant="light"
                                                    color="deepblue.6"
                                                >
                                                    <IconCheck size={12} />
                                                </ThemeIcon>
                                            }
                                        >
                                            {feature.capabilities.map((cap) => (
                                                <ListItem key={cap}>{cap}</ListItem>
                                            ))}
                                        </List>
                                    </Stack>
                                </GridCol>

                                <GridCol
                                    span={{ base: 12, md: 6 }}
                                    order={{ base: 1, md: index % 2 === 0 ? 2 : 1 }}
                                >
                                    <Box className={classes.featureImagePlaceholder}>
                                        <Text size="sm" c="dimmed" ta="center">
                                            {feature.imagePlaceholder}
                                        </Text>
                                    </Box>
                                </GridCol>
                            </Grid>
                        )
                    })}
                </Stack>
            </Stack>
        </Container>
    </Box>
)

export default CoreFeatures
