'use client'

import { Box, Text, Button, Container, Stack, Group } from '@mantine/core'
import { useActionState, useEffect, useRef } from 'react'
import classes from './CTA.module.css'
import { submitWaitlistForm, type WaitlistFormState } from '@/app/(marketing)/actions'

type CTAData = {
    title?: string
    description?: string
    emailPlaceholder?: string
    buttonLabel?: string
    note?: string
}

const CTA = ({ data }: { data?: CTAData | null }) => {
    const merged = {
        title: data?.title,
        description: data?.description,
        emailPlaceholder: data?.emailPlaceholder,
        buttonLabel: data?.buttonLabel,
    }

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
                    {merged.title}
                </Text>
                <Text size="lg" c="gray.1" ta="center" maw={600}>
                    {merged.description}
                </Text>
                <form action={formAction} ref={formRef}>
                    <Group gap="sm" justify="center" align="flex-start">
                        <input
                            type="email"
                            name="email"
                            placeholder={merged.emailPlaceholder}
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
                            {merged.buttonLabel}
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
               
            </Stack>
        </Container>
    </Box>
)
}

export default CTA
