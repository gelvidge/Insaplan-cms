'use client'

import { Box, Text, Container, Stack } from '@mantine/core'
import classes from './CTA.module.css'
import CTAForm from './CTAForm'

export type CTAData = {
    title?: string | null
    description?: string | null
    emailPlaceholder?: string | null
    buttonLabel?: string | null
}

const CTA = ({ data }: { data?: CTAData | null }) => {
    return (
        <Box className={classes.cta} py={80}>
            <Container size={960}>
                <Stack align="center" gap="xl">
                    <Text className={classes.ctaTitle} ta="center">
                        {data?.title}
                    </Text>
                    <Text size="lg" c="gray.1" ta="center" maw={600}>
                        {data?.description}
                    </Text>
                    <CTAForm
                        emailPlaceholder={data?.emailPlaceholder}
                        buttonLabel={data?.buttonLabel}
                    />
                </Stack>
            </Container>
        </Box>
    )
}

export default CTA
