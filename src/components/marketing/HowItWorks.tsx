'use client'

import { Container, Stack, Title, Text, Grid, GridCol, Box } from '@mantine/core'
import { motion } from 'framer-motion'

const spring = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface Step {
    title: string
    description: string
}

interface HowItWorksProps {
    heading: string
    subheading: string
    steps: Step[]
}

const headingVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: spring } },
}

const stepVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: spring, delay: i * 0.13 },
    }),
}

export default function HowItWorks({ heading, subheading, steps }: HowItWorksProps) {
    return (
        <Box py={80} bg="gray.0">
            <Container size="xl">
                <Stack gap="xl">
                    <motion.div
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>{heading}</Title>
                            <Text size="lg" c="dimmed" maw={700}>{subheading}</Text>
                        </Stack>
                    </motion.div>

                    <Grid gutter="xl" mt="xl">
                        {steps.map((step, i) => (
                            <GridCol key={i} span={{ base: 12, md: 4 }}>
                                <motion.div
                                    custom={i}
                                    variants={stepVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <Stack align="center" ta="center" gap="md">
                                        <motion.div
                                            whileHover={{ scale: 1.12 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                                            style={{
                                                width: 60, height: 60, borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #2e4072, #64317f)',
                                                display: 'flex', alignItems: 'center',
                                                justifyContent: 'center', color: 'white',
                                                fontSize: '1.5rem', fontWeight: 700,
                                            }}
                                        >
                                            {i + 1}
                                        </motion.div>
                                        <Title order={3}>{step.title}</Title>
                                        <Text c="dimmed">{step.description}</Text>
                                    </Stack>
                                </motion.div>
                            </GridCol>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}
