'use client'

import { Box, Text, Button, Stack, Group, Container, Grid } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useActionState, useEffect, useRef } from 'react'
import { IconCheck, IconSparkles } from '@tabler/icons-react'
import * as TablerIcons from '@tabler/icons-react'
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

function getTrustIcon(name: string | null | undefined) {
    if (!name) return IconSparkles
    const key = `Icon${name.charAt(0).toUpperCase()}${name.slice(1)}`
    return (TablerIcons as Record<string, unknown>)[key] as typeof IconSparkles ?? IconSparkles
}

const Hero = ({ data }: { data?: HeroData | null }) => {
    const merged = {
        eyebrow: data?.eyebrow,
        badge: data?.badge,
        headline: data?.headline,
        subtitle: data?.subtitle,
        pillars: data?.pillars ?? [],
        useCases: data?.useCases ?? [],
        trustSignals: data?.trustSignals ?? [],
        carouselSlides: data?.carouselSlides ?? [],
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
                    {/* Left column */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack gap="xl">
                            <div>
                                <Group gap="sm" align="center" className={classes.eyebrowRow}>
                                    <Text className={classes.eyebrow} size="sm" tt="uppercase" fw={600}>
                                        {merged.eyebrow}
                                    </Text>
                                    <Text size="xs" fw={700} tt="uppercase" className={classes.launchingSoonBadge}>
                                        {merged.badge}
                                    </Text>
                                </Group>
                            </div>

                            <h1 className={classes.mainTitle}>
                                {merged.headline}
                            </h1>

                            <div>
                                <Text className={classes.subtitle} size="xl">
                                    {merged.subtitle}
                                </Text>
                            </div>

                            <div>
                                <Group gap="lg">
                                    {(merged.pillars || []).map((pillar, i) => (
                                        <Group key={`${pillar.label || 'pillar'}-${i}`} gap="xs">
                                            <Box className={classes.checkIcon}><IconCheck size={16} /></Box>
                                            <Text size="md" fw={500} c="gray.0">{pillar.label}</Text>
                                        </Group>
                                    ))}
                                </Group>
                            </div>

                            <div>
                                <Group gap="sm" className={classes.useCases}>
                                    {(merged.useCases || []).map((useCase, i) => (
                                        <Text key={`${useCase.label || 'usecase'}-${i}`} size="sm" className={classes.useCasePill}>
                                            {useCase.label}
                                        </Text>
                                    ))}
                                </Group>
                            </div>

                            <div>
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
                                                c="navy.9"
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
                                        <Text c="gray.2" size="sm">Be the first to know when we launch</Text>
                                    </Stack>
                                </form>
                            </div>
                        </Stack>
                    </Grid.Col>

                    {/* Right column */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <div>
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
                                                            <Text size="lg" fw={600} c="navy.9" ta="center">{slide.title}</Text>
                                                            <Text size="sm" c="dimmed" ta="center" maw={400}>{slide.description}</Text>
                                                            {slideSrc && (
                                                                <Box className={classes.slideImageWrap}>
                                                                    <img
                                                                        src={slideSrc}
                                                                        alt={String(slide.title || 'Slide')}
                                                                        className={classes.slideImage}
                                                                        loading="lazy"
                                                                    />
                                                                </Box>
                                                            )}
                                                        </Stack>
                                                    </Box>
                                                </Carousel.Slide>
                                            )
                                        })}
                                    </Carousel>
                                </Box>
                            </Box>
                        </div>
                    </Grid.Col>
                </Grid>

                {/* Trust bar */}
                <div>
                    <Box className={classes.trustBar} mt={50}>
                        <Grid gutter="xl">
                            {(merged.trustSignals || []).map((signal, i) => {
                                const Icon = getTrustIcon(signal.icon)
                                return (
                                    <Grid.Col key={`${signal.label || 'signal'}-${i}`} span={{ base: 6, sm: 3 }}>
                                        <Stack align="center" gap="xs">
                                            <Box className={classes.trustIcon}><Icon size={24} /></Box>
                                            <Text size="sm" fw={600} c="white" ta="center">{signal.label}</Text>
                                        </Stack>
                                    </Grid.Col>
                                )
                            })}
                        </Grid>
                    </Box>
                </div>
            </Container>
        </Box>
    )
}

export default Hero
