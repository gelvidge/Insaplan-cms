'use client'

import { useActionState } from 'react'
import { Box, Container, Text, Stack, Card, TextInput, Textarea, Button, Alert } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'
import { submitContactForm } from './actions'

type Props = {
    heroTitle: string
    heroSubtitle: string
    namePlaceholder: string
    emailPlaceholder: string
    companyPlaceholder: string
    messagePlaceholder: string
    submitButtonLabel: string
    successMessage: string
    responseNote: string
}

export default function ContactPageClient({
    heroTitle,
    heroSubtitle,
    namePlaceholder,
    emailPlaceholder,
    companyPlaceholder,
    messagePlaceholder,
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
                            <Stack gap="md">
                                <TextInput label="Name" name="name" placeholder={namePlaceholder} required />
                                <TextInput label="Email" name="email" type="email" placeholder={emailPlaceholder} required />
                                <TextInput label="Company" name="company" placeholder={companyPlaceholder} />
                                <Textarea label="Message" name="message" placeholder={messagePlaceholder} minRows={10} required />
                                <Button type="submit" size="lg" variant="filled" loading={isPending}>
                                    {submitButtonLabel}
                                </Button>
                                {state?.success && (
                                    <Alert icon={<IconCheck size={16} />} color="green" title="Message Sent">
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
