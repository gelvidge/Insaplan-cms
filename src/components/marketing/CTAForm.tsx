'use client'

import { Button, Group, Text } from '@mantine/core'
import { useActionState, useEffect, useRef } from 'react'
import classes from './CTA.module.css'
import { submitWaitlistForm, type WaitlistFormState } from '@/app/(marketing)/actions'

export default function CTAForm({
    emailPlaceholder,
    buttonLabel,
}: {
    emailPlaceholder?: string | null
    buttonLabel?: string | null
}) {
    const formRef = useRef<HTMLFormElement | null>(null)
    const initialState: WaitlistFormState = { status: 'idle' }
    const [state, formAction, pending] = useActionState(submitWaitlistForm, initialState)

    useEffect(() => {
        if (state.status === 'success') {
            formRef.current?.reset()
        }
    }, [state.status])

    return (
        <form action={formAction} ref={formRef}>
            <Group gap="sm" justify="center" align="flex-start">
                <input
                    type="email"
                    name="email"
                    placeholder={emailPlaceholder ?? 'Enter your email'}
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
                    {buttonLabel ?? 'Join Waitlist'}
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
    )
}
