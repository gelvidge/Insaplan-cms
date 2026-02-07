'use client'

import { useActionState } from 'react'
import { Box, Container, Title, Text, Stack, Card, TextInput, Textarea, Button, Alert } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'
import { submitContactForm } from './actions'

export default function ContactPage() {
    const [state, formAction, isPending] = useActionState(submitContactForm, null)

    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="Have a question or want to learn more? We'd love to hear from you."
            />
            <Box py={80}>
                <Container size="sm">
                    <Card shadow="sm" padding="xl" radius="md" withBorder>
                        <form action={formAction}>
                            <Stack gap="md">
                                {state?.success && (
                                    <Alert icon={<IconCheck size={16} />} color="green" title="Message Sent">
                                        Thank you! We&apos;ll get back to you within 24 hours.
                                    </Alert>
                                )}
                                {state?.error && (
                                    <Alert icon={<IconX size={16} />} color="red" title="Error">
                                        {state.error}
                                    </Alert>
                                )}
                                <TextInput label="Name" name="name" placeholder="Your name" required />
                                <TextInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                />
                                <TextInput label="Company" name="company" placeholder="Your company" />
                                <Textarea
                                    label="Message"
                                    name="message"
                                    placeholder="How can we help?"
                                    minRows={5}
                                    required
                                />
                                <Button type="submit" size="lg" variant="filled" loading={isPending}>
                                    Send Message
                                </Button>
                                <Text size="sm" c="dimmed" ta="center">
                                    We typically respond within 24 hours
                                </Text>
                            </Stack>
                        </form>
                    </Card>
                </Container>
            </Box>
        </>
    )
}
