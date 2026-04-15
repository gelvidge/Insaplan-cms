'use client'

import { Box, Text, Button, Stack, Group, Container, Grid } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useActionState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
    IconCheck,
    IconSparkles,
    IconTemplate,
    IconCards,
    IconBuildingSkyscraper,
} from '@tabler/icons-react'
import classes from './Hero.module.css'
import { submitWaitlistForm, type WaitlistFormState } from '@/app/(marketing)/actions'
import { resolveMediaURL } from '@/lib/media'

type HeroData = {
    eyebrow?: string | null
    badge?: string | null
    headline?: string | null
    subtitle?: string | null
    pillars?: { label?: string | null }[] | null
    useCases?: { label?: string | null }[] | null
    trustSignals?: { icon?: string | null; label?: string | null }[] | null
    carouselSlides?: { title?: string | null; description?: string | null; image?: unknown }[] | null
}

const defaultData: Required<Pick<HeroData, 'eyebrow' | 'badge' | 'headline' | 'subtitle'>> & {
    pillars: { label: string }[]
    useCases: { label: string }[]
    trustSignals: { icon: string; label: string }[]
    carouselSlides: { title: string; description: string; image?: unknown }[]
} = {
    eyebrow: 'AI-powered planning',
    badge: 'Launching Soon',
    headline: 'Turn insights into actionable plans',
    subtitle:
        'Capture insights as beautiful infographics, charts, and tables. Build and iterate plans fast with hundreds of predefined templates, then report and track execution.',
    pillars: [{ label: 'Insights' }, { label: 'Planning' }, { label: 'Reporting' }],
    useCases: [
        { label: 'Strategic Plans' },
        { label: 'Corporate Plans' },
        { label: 'Sales Plans' },
        { label: 'Marketing Plans' },
        { label: 'Product Launch Plans' },
        { label: 'Project Management' },
        { label: 'Growth Plans' },
        { label: 'Account Plans' },
        { label: 'Product Roadmaps' },
        { label: 'Startup Business Plans' },
    ],
    trustSignals: [
        { icon: 'sparkles', label: 'AI-powered' },
        { icon: 'template', label: 'Custom templates' },
        { icon: 'cards', label: 'Knowledgebase' },
        { icon: 'building', label: 'Enterprise features' },
    ],
    carouselSlides: [
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
    ],
}

const trustSignalIcons = {
    sparkles: IconSparkles,
    template: IconTemplate,
    cards: IconCards,
    building: IconBuildingSkyscraper,
} as const

// Shared fade-up used for each staggered child
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.1 },
    }),
}

const slideInRight = {
    hidden: { opacity: 0, x: 60, scale: 0.97 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 },
    },
}

const trustBar = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const trustItem: any = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Hero = ({ data }: { data?: HeroData | null }) => {
    const merged = {
        ...defaultData,
        ...data,
        pillars: data?.pillars?.length ? data.pillars : defaultData.pillars,
        useCases: data?.useCases?.length ? data.useCases : defaultData.useCases,
        trustSignals: data?.trustSignals?.length ? data.trustSignals : defaultData.trustSignals,
        carouselSlides: data?.carouselSlides?.length ? data.carouselSlides : defaultData.carouselSlides,
    }

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
                    {/* Left column — staggered fade-up */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack gap="xl">
                            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
                                <Group gap="sm" align="center" className={classes.eyebrowRow}>
                                    <Text className={classes.eyebrow} size="sm" tt="uppercase" fw={600}>
                                        {merged.eyebrow}
                                    </Text>
                                    <Text size="xs" fw={700} tt="uppercase" className={classes.launchingSoonBadge}>
                                        {merged.badge}
                                    </Text>
                                </Group>
                            </motion.div>

                            <motion.h1 className={classes.mainTitle} custom={1} variants={fadeUp} initial="hidden" animate="visible">
                                {merged.headline}
                            </motion.h1>

                            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
                                <Text className={classes.subtitle} size="xl">
                                    {merged.subtitle}
                                </Text>
                            </motion.div>

                            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
                                <Group gap="lg">
                                    {(merged.pillars || []).map((pillar, i) => (
                                        <Group key={`${pillar.label || 'pillar'}-${i}`} gap="xs">
                                            <Box className={classes.checkIcon}><IconCheck size={16} /></Box>
                                            <Text size="md" fw={500} c="gray.0">{pillar.label}</Text>
                                        </Group>
                                    ))}
                                </Group>
                            </motion.div>

                            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
                                <Group gap="sm" className={classes.useCases}>
                                    {(merged.useCases || []).map((useCase, i) => (
                                        <Text key={`${useCase.label || 'usecase'}-${i}`} size="sm" className={classes.useCasePill}>
                                            {useCase.label}
                                        </Text>
                                    ))}
                                </Group>
                            </motion.div>

                            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible">
                                <form action={formAction} ref={formRef}>
                                    <Stack gap="md" mt="md">
                                        <Text size="lg" fw={500} c="gray.1">Join the waitlist for early access</Text>
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
                                            <Text c="teal.2" size="sm" aria-live="polite">Email submitted successfully.</Text>
                                        )}
                                        {state.status === 'error' && (
                                            <Text c="red.2" size="sm" aria-live="polite">{state.message}</Text>
                                        )}
                                        <Text c="gray.2" size="sm">Be the first to know when we launch - no spam</Text>
                                    </Stack>
                                </form>
                            </motion.div>
                        </Stack>
                    </Grid.Col>

                    {/* Right column — slides in from right */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <motion.div variants={slideInRight} initial="hidden" animate="visible">
                            <Box className={classes.heroImageContainer}>
                                <Box className={classes.browserChrome}>
                                    <Group justify="space-between" align="center" mb="sm" className={classes.windowHeader}>
                                        <Text size="xs" fw={700} tt="uppercase" className={classes.windowTitle}>
                                            Insaplan
                                        </Text>
                                        <Group gap={6} className={classes.windowControls}>
                                            <Box className={classes.windowControl} />
                                            <Box className={classes.windowControl} />
                                        </Group>
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
                                        {(merged.carouselSlides || []).map((slide, index) => {
                                            const slideSrc = resolveMediaURL(slide.image, 'card')
                                            return (
                                                <Carousel.Slide key={index}>
                                                    <Box className={classes.imageContent}>
                                                        <Stack gap="md" align="center">
                                                            <Text size="lg" fw={600} c="deepblue.9" ta="center">{slide.title}</Text>
                                                            <Text size="sm" c="dimmed" ta="center" maw={400}>{slide.description}</Text>
                                                            {slideSrc ? (
                                                                <Box className={classes.slideImageWrap}>
                                                                    <img
                                                                        src={slideSrc}
                                                                        alt={String(slide.title || 'Slide')}
                                                                        className={classes.slideImage}
                                                                        loading="lazy"
                                                                    />
                                                                </Box>
                                                            ) : (
                                                                <Text size="xs" c="dimmed" ta="center" mt="xl">
                                                                    [Upload a screenshot for this slide in CMS]
                                                                </Text>
                                                            )}
                                                        </Stack>
                                                    </Box>
                                                </Carousel.Slide>
                                            )
                                        })}
                                    </Carousel>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid.Col>
                </Grid>

                {/* Trust bar — staggered */}
                <motion.div variants={trustBar} initial="hidden" animate="visible">
                    <Box className={classes.trustBar} mt={50}>
                        <Grid gutter="xl">
                            {(merged.trustSignals || []).map((signal, i) => {
                                const Icon =
                                    (signal.icon && trustSignalIcons[signal.icon as keyof typeof trustSignalIcons]) ||
                                    IconSparkles
                                return (
                                    <Grid.Col key={`${signal.label || 'signal'}-${i}`} span={{ base: 6, sm: 3 }}>
                                        <motion.div variants={trustItem}>
                                            <Stack align="center" gap="xs">
                                                <Box className={classes.trustIcon}><Icon size={24} /></Box>
                                                <Text size="sm" fw={600} c="white" ta="center">{signal.label}</Text>
                                            </Stack>
                                        </motion.div>
                                    </Grid.Col>
                                )
                            })}
                        </Grid>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    )
}

export default Hero
