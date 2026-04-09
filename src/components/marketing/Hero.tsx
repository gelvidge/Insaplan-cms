'use client'

import { Box, Text, Button, Stack, Group, Container, Grid } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useActionState, useEffect, useRef } from 'react'
import {
    IconCheck,
    IconSparkles,
    IconTemplate,
    IconCards,
    IconBuildingSkyscraper,
} from '@tabler/icons-react'
import classes from './Hero.module.css'
import { submitWaitlistForm, type WaitlistFormState } from '@/app/(marketing)/actions'

const trustSignals = [
    { icon: IconSparkles, label: 'AI-powered' },
    { icon: IconTemplate, label: 'Custom templates' },
    { icon: IconCards, label: "Knowledgebase" },
    { icon: IconBuildingSkyscraper, label: 'Enterprise features' },
]

const carouselSlides = [
    {
        title: 'Curate Insights Once',
        description: 'Capture, tag, and reuse internal knowledge across every plan you build.',
    },
    {
        title: 'Frameworks and Processes Built In',
        description: 'Manage a broad library of business frameworks and planning processes.',
    },
    {
        title: 'Visual Tables and Infographics',
        description: 'Turn complex information into clear tables and visuals stakeholders understand.',
    },
    {
        title: 'Templates With Hundreds of Options',
        description: 'Use custom templates and flexible building blocks to fit the way you work.',
    },
    {
        title: 'Iterate Fast',
        description: 'Refine and evolve plans quickly as priorities, teams, and projects change.',
    },
]

const useCases = [
    'Strategic Plans',
    'Corporate Plans',
    'Sales Plans',
    'Marketing Plans',
    'Product Launch Plans',
    'Project Management',
    'Growth Plans',
    'Account Plans',
    'Product Roadmaps',
    'Startup Business Plans',
]

const Hero = () => {
    const autoplay = useRef(Autoplay({ delay: 4000 }))
    const formRef = useRef<HTMLFormElement | null>(null)

    const initialState: WaitlistFormState = { status: 'idle' }
    const [state, formAction, pending] = useActionState(submitWaitlistForm, initialState)

    useEffect(() => {
        if (state.status === 'success') {
            formRef.current?.reset()
        }
    }, [state.status])

    return (
        <Box className={classes.hero}>
            <Container size={1440} className={classes.heroContainer}>
                <Grid gutter={{ base: 24, md: 60 }} align="center">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack gap="xl">
                            <Group gap="sm" align="center" className={classes.eyebrowRow}>
                                <Text className={classes.eyebrow} size="sm" tt="uppercase" fw={600}>
                                    AI-powered planning
                                </Text>
                                <Text size="xs" fw={700} tt="uppercase" className={classes.launchingSoonBadge}>
                                    Launching Soon
                                </Text>
                            </Group>

                            <h1 className={classes.mainTitle}>Insight-Driven Planning Made Easy</h1>

                            <Text className={classes.subtitle} size="xl">
                                Capture insights as beautiful infographics, charts, and tables. Build
                                and iterate plans fast with hundreds of predefined templates, then
                                report and track execution.
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

                            <Stack gap="sm">
                                <Group gap="sm" className={classes.useCases}>
                                    {useCases.map((useCase) => (
                                        <Text key={useCase} size="sm" className={classes.useCasePill}>
                                            {useCase}
                                        </Text>
                                    ))}
                                </Group>
                            </Stack>

                            <form action={formAction} ref={formRef}>
                                <Stack gap="md" mt="md">
                                    <Text size="lg" fw={500} c="gray.1">
                                        Join the waitlist for early access
                                    </Text>
                                    <Group gap="sm" align="flex-start" className={classes.emailRow}>
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
                                            loading={pending}
                                            disabled={pending}
                                        >
                                            Get Early Access
                                        </Button>
                                    </Group>
                                    {state.status === 'success' && (
                                        <Text c="teal.2" size="sm" aria-live="polite">
                                            Email submitted successfully.
                                        </Text>
                                    )}
                                    {state.status === 'error' && (
                                        <Text c="red.2" size="sm" aria-live="polite">
                                            {state.message}
                                        </Text>
                                    )}
                                    <Text c="gray.2" size="sm">
                                        Be the first to know when we launch - no spam
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

                <Box className={classes.trustBar} mt={50}>
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
