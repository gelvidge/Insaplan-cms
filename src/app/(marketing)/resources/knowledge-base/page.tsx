import { Box, Container, Stack, Card, Text, ThemeIcon } from '@mantine/core'
import { IconBook } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'
import { fetchKnowledgeBasePage } from '@/lib/queries'

export default async function KnowledgeBasePage() {
    const kbp = await fetchKnowledgeBasePage().catch(() => null) ?? {}

    return (
        <>
            <PageHero
                title={kbp.heroTitle ?? 'Knowledge Base'}
                subtitle={kbp.heroSubtitle ?? 'Learn how to get the most out of Insaplan'}
            />
            <Box py={80}>
                <Container size="md">
                    <Card shadow="sm" padding="xl" radius="md" withBorder>
                        <Stack align="center" gap="md" ta="center">
                            <ThemeIcon size={60} radius="md" variant="light" color="deepblue.6">
                                <IconBook size={32} />
                            </ThemeIcon>
                            <Text fw={600} size="lg">
                                {kbp.comingSoonHeading ?? 'Documentation Coming Soon'}
                            </Text>
                            <Text c="dimmed" maw={400}>
                                {kbp.comingSoonMessage ?? "We're building comprehensive documentation to help you get started with Insaplan. Check back soon!"}
                            </Text>
                        </Stack>
                    </Card>
                </Container>
            </Box>
        </>
    )
}
