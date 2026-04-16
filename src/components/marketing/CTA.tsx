import { Box, Text, Container, Stack } from '@mantine/core'
import classes from './CTA.module.css'
import CTAForm from './CTAForm'
import { fetchMarketingHome } from '@/lib/queries'

const CTA = async () => {
    const resolved = (await fetchMarketingHome().catch(() => null))?.cta ?? null

    return (
        <Box className={classes.cta} py={80}>
            <Container size={960}>
                <Stack align="center" gap="xl">
                    <Text className={classes.ctaTitle} ta="center">
                        {resolved?.title}
                    </Text>
                    <Text size="lg" c="gray.1" ta="center" maw={600}>
                        {resolved?.description}
                    </Text>
                    <CTAForm
                        emailPlaceholder={resolved?.emailPlaceholder}
                        buttonLabel={resolved?.buttonLabel}
                    />
                </Stack>
            </Container>
        </Box>
    )
}

export default CTA
