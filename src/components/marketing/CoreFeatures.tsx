import { Container, Title, Text, Grid, GridCol, Stack, Box, ThemeIcon } from '@mantine/core'
import { IconBulb, IconTarget, IconReport } from '@tabler/icons-react'
import classes from './CoreFeatures.module.css'

const coreFeatures = [
    {
        icon: IconBulb,
        title: 'Capture Insights',
        description: 'Transform knowledge into actionable intelligence for planning and reporting.',
        capabilities: [
            'Use organizational knowledge to inform planning and reporting processes',
            'Build your own internal knowledge base',
            'Centralize insights from across your organization',
            'Create a single source of truth for strategic information',
        ],
        imagePlaceholder: '[SCREENSHOT: Knowledge base interface with insights captured]',
    },
    {
        icon: IconTarget,
        title: 'Build Plans',
        description:
            'Create professional strategic plans using proven business frameworks with AI assistance.',
        capabilities: [
            'Access integrated business frameworks (industry best practices)',
            'Create customized dashboards to monitor plan execution',
            'AI-assisted planning recommendations and insights',
            'Collaborative planning workflows',
        ],
        imagePlaceholder: '[SCREENSHOT: Plan builder with frameworks and AI assistance]',
    },
    {
        icon: IconReport,
        title: 'Report',
        description: 'Generate professional reports tailored to your audience and needs.',
        capabilities: [
            'Customizable reporting templates',
            'Export to PowerPoint presentations',
            'Export to PDF reports',
            'Beautiful data visualizations',
        ],
        imagePlaceholder: '[SCREENSHOT: Report generation and export interface]',
    },
]

const CoreFeatures = () => (
    <Box py={80} bg="gray.0">
        <Container size="xl">
            <Stack gap="xl">
                <Stack gap="md" align="center" ta="center">
                    <Title order={2}>Core Application Features</Title>
                    <Text size="lg" c="dimmed" maw={700}>
                        Three powerful capabilities working together to transform your planning
                        process
                    </Text>
                </Stack>

                <Stack gap={60} mt="xl">
                    {coreFeatures.map((feature, index) => (
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
                                        <feature.icon size={32} />
                                    </ThemeIcon>
                                    <Title order={3}>{feature.title}</Title>
                                    <Text size="lg" c="dimmed">
                                        {feature.description}
                                    </Text>
                                    <Text fw={600} size="sm" mt="md">
                                        Capabilities:
                                    </Text>
                                    <Stack gap="xs">
                                        {feature.capabilities.map((cap, idx) => (
                                            <Text key={idx} size="sm" c="dimmed">
                                                • {cap}
                                            </Text>
                                        ))}
                                    </Stack>
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
                    ))}
                </Stack>
            </Stack>
        </Container>
    </Box>
)

export default CoreFeatures
