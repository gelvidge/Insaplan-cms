import { Box, Container, Title, Text, Grid, GridCol } from '@mantine/core'
import {
    IconClock, IconPuzzle, IconBolt, IconChartBar, IconUsers, IconFileText,
    IconAlertTriangle, IconMoodConfuzed, IconStack2, IconPresentation,
    IconMoodSad, IconLayoutDashboard, IconFileSpreadsheet, IconTimeline,
    IconChartPie, IconChartLine, IconTarget, IconBulb,
} from '@tabler/icons-react'
import classes from './SolutionChallenges.module.css'

type Challenge = {
    title?: string | null
    description: string
    icon?: string | null
    color?: string | null
}

type Props = {
    challenges: Challenge[]
    heading?: string | null
    subheading?: string | null
}

const iconMap: Record<string, React.ComponentType<{ size?: number; stroke?: number }>> = {
    clock: IconClock, puzzle: IconPuzzle, bolt: IconBolt, chart: IconChartBar,
    users: IconUsers, file: IconFileText, alert: IconAlertTriangle,
    confused: IconMoodConfuzed, stack: IconStack2, presentation: IconPresentation,
    moodsad: IconMoodSad, dashboard: IconLayoutDashboard, spreadsheet: IconFileSpreadsheet,
    timeline: IconTimeline, pie: IconChartPie, line: IconChartLine,
    target: IconTarget, bulb: IconBulb,
}

const DEFAULT_ICONS = [IconClock, IconPuzzle, IconBolt, IconChartBar, IconUsers, IconFileText]

export default function SolutionChallenges({ challenges }: Props) {
    if (!challenges || challenges.length === 0) return null

    return (
        <Box className={classes.section}>
            <Container size="xl">
                <div>
                    <Grid gutter={{ base: 'md', md: 'lg' }}>
                        {challenges.map((challenge, index) => {
                            const IconComponent =
                                (challenge.icon && iconMap[challenge.icon]) ||
                                DEFAULT_ICONS[index % DEFAULT_ICONS.length]
                            const hasColor = !!challenge.color

                            return (
                                <GridCol key={index} span={{ base: 12, sm: 6, lg: 4 }}>
                                    <div style={{ height: '100%' }}>
                                        <Box
                                            className={classes.card}
                                            data-colored={hasColor ? 'true' : undefined}
                                            style={hasColor ? { '--card-color': challenge.color } as React.CSSProperties : undefined}
                                        >
                                            <Box className={classes.cardNumber}>
                                                {String(index + 1).padStart(2, '0')}
                                            </Box>
                                            <Box className={classes.iconWrap}>
                                                <IconComponent size={26} stroke={1.5} />
                                            </Box>
                                            {challenge.title && (
                                                <Title order={4} className={classes.cardTitle}>
                                                    {challenge.title}
                                                </Title>
                                            )}
                                            <Text size="sm" className={classes.cardDescription}>
                                                {challenge.description}
                                            </Text>
                                        </Box>
                                    </div>
                                </GridCol>
                            )
                        })}
                    </Grid>
                </div>
            </Container>
        </Box>
    )
}
