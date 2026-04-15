'use client'

import { Container, Title, Text, Grid, GridCol, Stack, Box, ThemeIcon, List, ListItem } from '@mantine/core'
import { IconBulb, IconTarget, IconReport, IconCheck } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import classes from './CoreFeatures.module.css'
import { resolveMediaURL } from '@/lib/media'

type CoreFeaturesData = {
    kicker?: string | null
    heading?: string | null
    description?: string | null
    features?: {
        icon?: string | null
        title?: string | null
        description?: string | null
        capabilities?: { label?: string | null }[] | null
        visuals?: { label?: string | null; image?: unknown }[] | null
    }[] | null
}

const defaultData: Required<Pick<CoreFeaturesData, 'kicker' | 'heading' | 'description'>> & {
    features: NonNullable<CoreFeaturesData['features']>
} = {
    kicker: 'Built for clarity',
    heading: 'Different by design.',
    description:
        'Bring knowledge, planning, and reporting together with curated insights and flexible building blocks.',
    features: [
        {
            icon: 'bulb',
            title: 'Capture and Curate Insights',
            description:
                'Turn internal knowledge into a reusable library of insights you can apply across plans.',
            capabilities: [
                { label: 'Capture and organize insights from across the business' },
                { label: 'Curate what matters so teams can reuse it consistently' },
                { label: 'Build a searchable internal knowledge base for planning' },
                { label: 'Create a single source of truth that stays current as you learn' },
            ],
            visuals: [{ label: 'Insights library' }, { label: 'Tags & themes' }, { label: 'Insight detail' }],
        },
        {
            icon: 'target',
            title: 'Build Plans at Speed',
            description: 'Manage a broad set of business frameworks and processes with flexible templates.',
            capabilities: [
                { label: 'Use built-in frameworks and planning processes, or create your own' },
                { label: 'Create custom templates with hundreds of configuration options' },
                { label: 'Assemble strategic plans, project plans, and execution workstreams in one place' },
                { label: 'Iterate quickly as priorities change and new information arrives' },
            ],
            visuals: [{ label: 'Template picker' }, { label: 'Plan builder' }, { label: 'Workstreams' }],
        },
        {
            icon: 'report',
            title: 'Visualize and Communicate',
            description:
                'Bring plans to life with visual tables, infographics, and audience-ready reporting.',
            capabilities: [
                { label: 'Visual tables and dashboards that make progress and priorities clear' },
                { label: 'Infographics to communicate complex ideas quickly' },
                { label: 'Custom reporting templates for different stakeholders' },
                { label: 'Export-ready outputs (PDF and presentation formats)' },
            ],
            visuals: [{ label: 'Dashboards' }, { label: 'Infographics' }, { label: 'Reporting' }],
        },
    ],
}

const featureIcons = {
    bulb: IconBulb,
    target: IconTarget,
    report: IconReport,
} as const

const headerVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const capabilityVariants: any = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.07 },
    }),
}

export default function CoreFeatures({ data }: { data?: CoreFeaturesData | null }) {
    const merged = {
        ...defaultData,
        ...data,
        features: data?.features?.length ? data.features : defaultData.features,
    }

    return (
        <Box className={classes.section}>
            <Container size={1440}>
                <Stack gap="xl">
                    <motion.div
                        variants={headerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <Stack gap="md" align="center" ta="center" className={classes.header}>
                            <Text className={classes.kicker} size="sm" tt="uppercase" fw={700}>
                                {merged.kicker}
                            </Text>
                            <Title order={2}>{merged.heading}</Title>
                            <Text size="lg" c="dimmed" maw={760}>
                                {merged.description}
                            </Text>
                        </Stack>
                    </motion.div>

                    <Stack gap={40} mt="xl">
                        {(merged.features || []).map((feature, index) => {
                            const FeatureIcon =
                                (feature.icon && featureIcons[feature.icon as keyof typeof featureIcons]) || IconBulb
                            const isEven = index % 2 === 0
                            // Text slides in from the side it appears on
                            const textVariants = {
                                hidden: { opacity: 0, x: isEven ? -60 : 60 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
                            }
                            const visualVariants = {
                                hidden: { opacity: 0, x: isEven ? 60 : -60, scale: 0.96 },
                                visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.12 } },
                            }

                            return (
                                <Box key={index} className={classes.featureCard}>
                                    <Grid align="center" gutter={40}>
                                        <GridCol
                                            span={{ base: 12, md: 6 }}
                                            order={{ base: 2, md: isEven ? 1 : 2 }}
                                        >
                                            <motion.div
                                                variants={textVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.3 }}
                                            >
                                                <Stack gap="md" className={classes.featureText}>
                                                    <motion.div
                                                        whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                                                        style={{ width: 'fit-content' }}
                                                    >
                                                        <ThemeIcon
                                                            size={60}
                                                            radius="md"
                                                            variant="gradient"
                                                            gradient={{ from: 'deepblue.6', to: 'purple.6', deg: 45 }}
                                                        >
                                                            <FeatureIcon size={32} />
                                                        </ThemeIcon>
                                                    </motion.div>
                                                    <Title order={3}>{feature.title}</Title>
                                                    <Text size="lg" c="dimmed">{feature.description}</Text>
                                                    <Text fw={700} size="sm" mt="md" className={classes.capabilitiesLabel}>
                                                        Capabilities
                                                    </Text>
                                                    <List
                                                        spacing="xs"
                                                        size="sm"
                                                        c="dimmed"
                                                        icon={
                                                            <ThemeIcon size={18} radius="xl" variant="light" color="deepblue.6">
                                                                <IconCheck size={12} />
                                                            </ThemeIcon>
                                                        }
                                                    >
                                                        {(feature.capabilities || []).map((cap, capIndex) => (
                                                            <motion.div
                                                                key={`${cap.label || 'cap'}-${capIndex}`}
                                                                custom={capIndex}
                                                                variants={capabilityVariants}
                                                                initial="hidden"
                                                                whileInView="visible"
                                                                viewport={{ once: true, amount: 0.5 }}
                                                            >
                                                                <ListItem>{cap.label}</ListItem>
                                                            </motion.div>
                                                        ))}
                                                    </List>
                                                </Stack>
                                            </motion.div>
                                        </GridCol>

                                        <GridCol
                                            span={{ base: 12, md: 6 }}
                                            order={{ base: 1, md: isEven ? 2 : 1 }}
                                        >
                                            <motion.div
                                                variants={visualVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.3 }}
                                            >
                                                <Box className={classes.visualsWrap}>
                                                    <Box className={classes.visualsGrid}>
                                                        {(feature.visuals || []).map((visual, visualIndex) => {
                                                            const imageSrc = resolveMediaURL(visual.image, 'card')
                                                            return (
                                                                <motion.div
                                                                    key={`${feature.title || 'feature'}-${visual.label || visualIndex}`}
                                                                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                                                                >
                                                                    <Box
                                                                        className={`${classes.visualCard} ${classes[`visualCard${visualIndex + 1}`]}`}
                                                                    >
                                                                        <Box className={classes.visualChrome}>
                                                                            <Text size="xs" fw={700} tt="uppercase" className={classes.visualChromeTitle}>
                                                                                {visual.label}
                                                                            </Text>
                                                                            <Box className={classes.visualControls}>
                                                                                <Box className={classes.visualControl} />
                                                                                <Box className={classes.visualControl} />
                                                                            </Box>
                                                                        </Box>
                                                                        <Box className={classes.visualBody} aria-hidden="true">
                                                                            {imageSrc ? (
                                                                                <img
                                                                                    src={imageSrc}
                                                                                    alt={String(visual.label || 'Visual')}
                                                                                    className={classes.visualImage}
                                                                                    loading="lazy"
                                                                                />
                                                                            ) : (
                                                                                <Box className={classes.visualPlaceholder} />
                                                                            )}
                                                                        </Box>
                                                                    </Box>
                                                                </motion.div>
                                                            )
                                                        })}
                                                    </Box>
                                                </Box>
                                            </motion.div>
                                        </GridCol>
                                    </Grid>
                                </Box>
                            )
                        })}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
