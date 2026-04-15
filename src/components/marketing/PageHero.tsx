'use client'

import { useRef } from 'react'
import { Box, Container, Stack, Title, Text } from '@mantine/core'
import { motion } from 'framer-motion'

interface PageHeroProps {
    title: string
    subtitle: string
}

const spring = [0.22, 1, 0.36, 1] as [number, number, number, number]

const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: spring } },
}

const subtitleVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: spring, delay: 0.15 } },
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
    // Only animate on the very first mount — never re-animate on re-renders
    const animated = useRef(false)
    const initial = animated.current ? false : 'hidden'
    animated.current = true

    return (
        <Box style={{ background: 'transparent', color: 'white' }} py={80} pt={140}>
            <Container size="lg">
                <Stack gap="xl" align="center" ta="center">
                    <motion.div variants={titleVariants} initial={initial} animate="visible">
                        <Title order={1} size="3rem" fw={900}>{title}</Title>
                    </motion.div>
                    <motion.div variants={subtitleVariants} initial={initial} animate="visible">
                        <Text size="xl" maw={800} c="gray.1">{subtitle}</Text>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    )
}

export default PageHero
