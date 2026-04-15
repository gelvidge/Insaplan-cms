import { Container, Title, Text, Grid, GridCol, Card, Stack, Box, ThemeIcon } from '@mantine/core'
import {
    IconClock,
    IconPalette,
    IconAdjustments,
    IconBooks,
    IconDatabase,
    IconSparkles,
} from '@tabler/icons-react'

// ---------------------------------------------------------------------------
// DEPRECATED: hardcoded benefit cards — enter benefits in the CMS under
// Marketing > Marketing Pages > Key Benefits tab, then remove this block.
// ---------------------------------------------------------------------------
const DEPRECATED_benefits = [
    {
        icon: 'clock' as const,
        title: 'Fast & Efficient',
        description: 'Produce plans quickly and edit/monitor them in real-time',
    },
    {
        icon: 'palette' as const,
        title: 'Beautiful Outputs',
        description: 'Create stunning reports with professional infographics and charts',
    },
    {
        icon: 'adjustments' as const,
        title: 'Flexible & Customizable',
        description: 'Tailor workflows, data structures, and reports to your needs',
    },
    {
        icon: 'books' as const,
        title: 'Best Practices Built-In',
        description: 'Integrated business frameworks guide your planning process',
    },
    {
        icon: 'database' as const,
        title: 'Knowledge-Powered',
        description: 'Integrated knowledge bases include common KPIs and industry standards',
    },
    {
        icon: 'sparkles' as const,
        title: 'AI-Assisted',
        description: 'Get intelligent recommendations for insights and planning',
    },
]
// ---------------------------------------------------------------------------

type IconKey = 'clock' | 'palette' | 'adjustments' | 'books' | 'database' | 'sparkles'

const iconMap: Record<IconKey, React.ComponentType<{ size?: number }>> = {
    clock: IconClock,
    palette: IconPalette,
    adjustments: IconAdjustments,
    books: IconBooks,
    database: IconDatabase,
    sparkles: IconSparkles,
}

type Benefit = {
    icon?: IconKey | null
    title: string
    description: string
}

type SectionData = {
    heading?: string | null
    subheading?: string | null
    benefits?: Benefit[] | null
}

type Props = { data?: SectionData | null }

const KeyBenefits = ({ data }: Props) => {
    const heading = data?.heading ?? 'Key Benefits'
    const subheading =
        data?.subheading ?? 'Everything you need to transform your planning process'
    const benefits =
        data?.benefits && data.benefits.length > 0 ? data.benefits : DEPRECATED_benefits

    return (
        <Box py={80}>
            <Container size="xl">
                <Stack gap="xl">
                    <Stack gap="md" align="center" ta="center">
                        <Title order={2}>{heading}</Title>
                        <Text size="lg" c="dimmed" maw={700}>
                            {subheading}
                        </Text>
                    </Stack>

                    <Grid gutter="lg" mt="xl">
                        {benefits.map((benefit, index) => {
                            const IconComponent =
                                benefit.icon && iconMap[benefit.icon]
                                    ? iconMap[benefit.icon]
                                    : IconSparkles
                            return (
                                <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                        <Stack gap="md">
                                            <ThemeIcon
                                                size={50}
                                                radius="md"
                                                variant="light"
                                                color="deepblue.6"
                                            >
                                                <IconComponent size={28} />
                                            </ThemeIcon>
                                            <Title order={4}>{benefit.title}</Title>
                                            <Text size="sm" c="dimmed">
                                                {benefit.description}
                                            </Text>
                                        </Stack>
                                    </Card>
                                </GridCol>
                            )
                        })}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}

export default KeyBenefits
