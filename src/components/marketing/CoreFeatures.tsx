import { Container, Title, Text, Grid, GridCol, Stack, Box, ThemeIcon, List, ListItem } from '@mantine/core'
import { IconBulb, IconTarget, IconReport, IconCheck } from '@tabler/icons-react'
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

const featureIcons = {
    bulb: IconBulb,
    target: IconTarget,
    report: IconReport,
} as const

export default function CoreFeatures({ data }: { data?: CoreFeaturesData | null }) {
    const merged = {
        kicker: data?.kicker,
        heading: data?.heading,
        description: data?.description,
        features: data?.features ?? [],
    }

    return (
        <Box className={classes.section}>
            <Container size={1440}>
                <Stack gap="xl">
                    <div>
                        <Stack gap="md" align="center" ta="center" className={classes.header}>
                            <Text className={classes.kicker} size="sm" tt="uppercase" fw={700}>
                                {merged.kicker}
                            </Text>
                            <Title order={2}>{merged.heading}</Title>
                            <Text size="lg" c="dimmed" maw={760}>
                                {merged.description}
                            </Text>
                        </Stack>
                    </div>

                    <Stack gap={40} mt="xl">
                        {(merged.features || []).map((feature, index) => {
                            const FeatureIcon =
                                (feature.icon && featureIcons[feature.icon as keyof typeof featureIcons]) || IconBulb
                            const isEven = index % 2 === 0

                            return (
                                <Box key={index} className={classes.featureCard}>
                                    <Grid align="center" gutter={40}>
                                        <GridCol
                                            span={{ base: 12, md: 6 }}
                                            order={{ base: 2, md: isEven ? 1 : 2 }}
                                        >
                                            <div>
                                                <Stack gap="md" className={classes.featureText}>
                                                    <div style={{ width: 'fit-content' }}>
                                                        <ThemeIcon
                                                            size={60}
                                                            radius="md"
                                                            variant="gradient"
                                                            gradient={{ from: 'deepblue.6', to: 'purple.6', deg: 45 }}
                                                        >
                                                            <FeatureIcon size={32} />
                                                        </ThemeIcon>
                                                    </div>
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
                                                            <div key={`${cap.label || 'cap'}-${capIndex}`}>
                                                                <ListItem>{cap.label}</ListItem>
                                                            </div>
                                                        ))}
                                                    </List>
                                                </Stack>
                                            </div>
                                        </GridCol>

                                        <GridCol
                                            span={{ base: 12, md: 6 }}
                                            order={{ base: 1, md: isEven ? 2 : 1 }}
                                        >
                                            <div>
                                                <Box className={classes.visualsWrap}>
                                                    <Box className={classes.visualsGrid}>
                                                        {(feature.visuals || []).map((visual, visualIndex) => {
                                                            const imageSrc = resolveMediaURL(visual.image, 'card')
                                                            return (
                                                                <Box
                                                                    key={`${feature.title || 'feature'}-${visual.label || visualIndex}`}
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
                                                            )
                                                        })}
                                                    </Box>
                                                </Box>
                                            </div>
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
