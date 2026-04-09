'use client'

import { Box, Text, Button, Container, Stack, Group } from '@mantine/core'
import { useActionState, useEffect, useRef } from 'react'
import classes from './CTA.module.css'
import { submitWaitlistForm, type WaitlistFormState } from '@/app/(marketing)/actions'

const CTA = () => {
    const formRef = useRef<HTMLFormElement | null>(null)

    const initialState: WaitlistFormState = { status: 'idle' }
    const [state, formAction, pending] = useActionState(submitWaitlistForm, initialState)

    useEffect(() => {
        if (state.status === 'success') {
            formRef.current?.reset()
        }
    }, [state.status])

    return (
    <Box className={classes.cta} py={80}>
        <Container size={960}>
            <Stack align="center" gap="xl">
                <Text className={classes.ctaTitle} ta="center">
                    Build better plans, faster
                </Text>
                <Text size="lg" c="gray.1" ta="center" maw={600}>
                    Join the waitlist for early access to curated insights, flexible templates, and
                    rapid iteration across strategy, planning, and project management.
                </Text>
                <form action={formAction} ref={formRef}>
                    <Group gap="sm" justify="center" align="flex-start">
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
                            Join Waitlist
                        </Button>
                    </Group>
                    {state.status === 'success' && (
                        <Text mt={8} c="teal.2" size="sm" ta="center" aria-live="polite">
                            Email submitted successfully.
                        </Text>
                    )}
                    {state.status === 'error' && (
                        <Text mt={8} c="red.2" size="sm" ta="center" aria-live="polite">
                            {state.message}
                        </Text>
                    )}
                </form>
                <Text c="gray.2" size="sm">
                    Get notified when we launch - no spam, ever
                </Text>
            </Stack>
        </Container>
    </Box>
)
}

export default CTA
