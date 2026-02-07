'use client'

import { Box, Text, Button, Stack, Group, Container, Grid } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { IconCheck, IconUsers, IconFileCheck, IconTrendingUp, IconClock } from '@tabler/icons-react'
import classes from './Hero.module.css'
import { submitWaitlistForm } from '@/app/(marketing)/actions'

const trustSignals = [
    { icon: IconUsers, label: '10,000+ Teams' },
    { icon: IconFileCheck, label: '500K+ Plans Created' },
    { icon: IconTrendingUp, label: '98% Satisfaction' },
    { icon: IconClock, label: '90% Time Saved' },
]

const carouselSlides = [
    {
        title: 'Strategic Planning Dashboard',
        description: 'Real-time view of your strategic plans with progress tracking and KPIs',
    },
    {
        title: 'Insights Knowledge Base',
        description: 'Centralized repository of organizational insights, searchable and AI-powered',
    },
    {
        title: 'Framework Selection',
        description: 'Choose from SWOT, OKRs, Business Model Canvas, and more proven methodologies',
    },
    {
        title: 'Beautiful Reports',
        description: 'Generate professional reports with stunning infographics and visualizations',
    },
    {
        title: 'Real-Time Collaboration',
        description: 'Work together on plans with live updates and commenting',
    },
]

const Hero = () => {
    const autoplay = useRef(Autoplay({ delay: 4000 }))

    return (
        <Box className={classes.hero}>
            <Container size="xl" className={classes.heroContainer}>
                <Box className={classes.launchingBanner}>
                    <Text size="sm" fw={600} c="white">
                        🚀 Launching Soon
                    </Text>
                </Box>

                <Grid gutter={60} align="center">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack gap="xl">
                            <Text className={classes.eyebrow} size="sm" tt="uppercase" fw={600}>
                                AI-Powered Strategy Execution Platform
                            </Text>

                            <h1 className={classes.mainTitle}>Turn Insights into Plans</h1>

                            <Text className={classes.subtitle} size="xl">
                                Transform strategic planning from weeks to hours with AI-powered
                                frameworks, real-time dashboards, and beautiful reporting—all in one
                                unified platform.
                            </Text>

                            <Group gap="lg">
                                {['Insights', 'Planning', 'Reporting'].map((pillar) => (
                                    <Group key={pillar} gap="xs">
                                        <Box className={classes.checkIcon}>
                                            <IconCheck size={16} />
                                        </Box>
                                        <Text size="md" fw={500} c="gray.0">
                                            {pillar}
                                        </Text>
                                    </Group>
                                ))}
                            </Group>

                            <form action={submitWaitlistForm}>
                                <Stack gap="md" mt="md">
                                    <Text size="lg" fw={500} c="gray.1">
                                        Join the waitlist for early access
                                    </Text>
                                    <Group gap="sm" align="flex-start">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className={classes.emailInput}
                                            required
                                        />
                                        <Button
                                            type="submit"
                                            size="lg"
                                            radius="md"
                                            variant="white"
                                            c="deepblue.9"
                                            className={classes.primaryCta}
                                        >
                                            Get Early Access
                                        </Button>
                                    </Group>
                                    <Text c="gray.2" size="sm">
                                        Be the first to know when we launch • No spam, ever
                                    </Text>
                                </Stack>
                            </form>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Box className={classes.heroImageContainer}>
                            <Box className={classes.browserChrome}>
                                <Group gap={6} mb="sm">
                                    <Box className={classes.dot} style={{ background: '#ff5f56' }} />
                                    <Box className={classes.dot} style={{ background: '#ffbd2e' }} />
                                    <Box className={classes.dot} style={{ background: '#27c93f' }} />
                                </Group>
                                <Carousel
                                    withIndicators
                                    emblaOptions={{ loop: true, dragFree: false }}
                                    classNames={{
                                        root: classes.carouselRoot,
                                        indicators: classes.carouselIndicators,
                                        indicator: classes.carouselIndicator,
                                    }}
                                    slideSize="100%"
                                    slideGap={0}
                                    controlsOffset="xs"
                                    plugins={[autoplay.current]}
                                >
                                    {carouselSlides.map((slide, index) => (
                                        <Carousel.Slide key={index}>
                                            <Box className={classes.imageContent}>
                                                <Stack gap="md" align="center">
                                                    <Text size="lg" fw={600} c="deepblue.9" ta="center">
                                                        {slide.title}
                                                    </Text>
                                                    <Text size="sm" c="dimmed" ta="center" maw={400}>
                                                        {slide.description}
                                                    </Text>
                                                    <Text size="xs" c="dimmed" ta="center" mt="xl">
                                                        [Screenshot placeholder]
                                                    </Text>
                                                </Stack>
                                            </Box>
                                        </Carousel.Slide>
                                    ))}
                                </Carousel>
                            </Box>
                        </Box>
                    </Grid.Col>
                </Grid>

                <Box className={classes.trustBar} mt={80}>
                    <Grid gutter="xl">
                        {trustSignals.map((signal) => (
                            <Grid.Col key={signal.label} span={{ base: 6, sm: 3 }}>
                                <Stack align="center" gap="xs">
                                    <Box className={classes.trustIcon}>
                                        <signal.icon size={24} />
                                    </Box>
                                    <Text size="sm" fw={600} c="white" ta="center">
                                        {signal.label}
                                    </Text>
                                </Stack>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero
