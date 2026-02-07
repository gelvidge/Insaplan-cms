'use client'

import { Box, Text, Button, Container, Stack, Group } from '@mantine/core'
import classes from './CTA.module.css'
import { submitWaitlistForm } from '@/app/(marketing)/actions'

const CTA = () => (
    <Box className={classes.cta} py={80}>
        <Container size="md">
            <Stack align="center" gap="xl">
                <Text className={classes.ctaTitle} ta="center">
                    Be among the first to experience Insaplan
                </Text>
                <Text size="lg" c="gray.1" ta="center" maw={600}>
                    Join our waitlist for exclusive early access and launch updates
                </Text>
                <form action={submitWaitlistForm}>
                    <Group gap="sm" justify="center">
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
                            Join Waitlist
                        </Button>
                    </Group>
                </form>
                <Text c="gray.2" size="sm">
                    Get notified when we launch • No spam, ever
                </Text>
            </Stack>
        </Container>
    </Box>
)

export default CTA
