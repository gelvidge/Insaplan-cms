'use client'

import { Box, Container, Title, Text, Stack, Tabs } from '@mantine/core'
import { RichText } from '@payloadcms/richtext-lexical/react'
import PageHero from '@/components/marketing/PageHero'

type Props = {
    heroTitle: string
    heroSubtitle: string
    termsTabLabel: string
    privacyTabLabel: string
    dataSecurityTabLabel: string
    termsContent: any
    privacyContent: any
    dataSecurityContent: any
    termsComingSoon: string
    privacyComingSoon: string
    dataSecurityComingSoon: string
}

export default function LegalPageClient({
    heroTitle,
    heroSubtitle,
    termsTabLabel,
    privacyTabLabel,
    dataSecurityTabLabel,
    termsContent,
    privacyContent,
    dataSecurityContent,
    termsComingSoon,
    privacyComingSoon,
    dataSecurityComingSoon,
}: Props) {
    return (
        <div style={{ display: 'contents' }}>
            <PageHero title={heroTitle} subtitle={heroSubtitle} />
            <Box py={80} bg="gray.0" style={{ flex: 1, borderTop: '1px solid rgba(20,28,48,0.06)' }}>
                <Container size="lg">
                    <Tabs defaultValue="terms">
                        <Tabs.List>
                            <Tabs.Tab value="terms">{termsTabLabel}</Tabs.Tab>
                            <Tabs.Tab value="privacy">{privacyTabLabel}</Tabs.Tab>
                            <Tabs.Tab value="security">{dataSecurityTabLabel}</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="terms" pt="xl">
                            <Stack gap="md">
                                <Title order={3}>{termsTabLabel}</Title>
                                {termsContent ? (
                                    <RichText data={termsContent} />
                                ) : (
                                    <Text c="dimmed">{termsComingSoon}</Text>
                                )}
                            </Stack>
                        </Tabs.Panel>

                        <Tabs.Panel value="privacy" pt="xl">
                            <Stack gap="md">
                                <Title order={3}>{privacyTabLabel}</Title>
                                {privacyContent ? (
                                    <RichText data={privacyContent} />
                                ) : (
                                    <Text c="dimmed">{privacyComingSoon}</Text>
                                )}
                            </Stack>
                        </Tabs.Panel>

                        <Tabs.Panel value="security" pt="xl">
                            <Stack gap="md">
                                <Title order={3}>{dataSecurityTabLabel}</Title>
                                {dataSecurityContent ? (
                                    <RichText data={dataSecurityContent} />
                                ) : (
                                    <Text c="dimmed">{dataSecurityComingSoon}</Text>
                                )}
                            </Stack>
                        </Tabs.Panel>
                    </Tabs>
                </Container>
            </Box>
        </div>
    )
}
