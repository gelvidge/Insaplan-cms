'use client'

import { useActionState } from 'react'
import { Box, Container, Text, Stack, Card, TextInput, Button, Alert } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'
import { submitContactForm } from '@/app/(marketing)/contact/actions'

type Props = {
    heroTitle: string
    heroSubtitle: string
    namePlaceholder: string
    emailPlaceholder: string
    submitButtonLabel: string
    successMessage: string
    responseNote: string
}

export default function DemoPageClient({
    heroTitle,
    heroSubtitle,
    namePlaceholder,
    emailPlaceholder,
    submitButtonLabel,
    successMessage,
    responseNote,
}: Props) {
    const [state, formAction, isPending] = useActionState(submitContactForm, null)

    return (
        <div style={{ display: 'contents' }}>
            <PageHero title={heroTitle} subtitle={heroSubtitle} />
            <Box py={80} bg="gray.1" style={{ flex: 1 }}>
                <Container size="sm">
                    <Card shadow="sm" padding="xl" radius="md">
                        <form action={formAction}>
                            <input type="hidden" name="formType" value="demo" />
                            <Stack gap="md">
                                <TextInput label="Name" name="name" placeholder={namePlaceholder} />
                                <TextInput label="Email" name="email" type="email" placeholder={emailPlaceholder} required />
                                <Button type="submit" size="lg" variant="filled" loading={isPending}>
                                    {submitButtonLabel}
                                </Button>
                                {state?.success && (
                                    <Alert icon={<IconCheck size={16} />} color="green" title="Request Sent">
                                        {successMessage}
                                    </Alert>
                                )}
                                {state?.error && (
                                    <Alert icon={<IconX size={16} />} color="red" title="Error">
                                        {state.error}
                                    </Alert>
                                )}
                                <Text size="sm" c="dimmed" ta="center">
                                    {responseNote}
                                </Text>
                            </Stack>
                        </form>
                    </Card>
                </Container>
            </Box>
        </div>
    )
}
