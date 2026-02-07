import { Box, Container, Stack, Card, Text, ThemeIcon } from '@mantine/core'
import { IconBook } from '@tabler/icons-react'
import PageHero from '@/components/marketing/PageHero'

export default function KnowledgeBasePage() {
    return (
        <>
            <PageHero
                title="Knowledge Base"
                subtitle="Learn how to get the most out of Insaplan"
            />
            <Box py={80}>
                <Container size="md">
                    <Card shadow="sm" padding="xl" radius="md" withBorder>
                        <Stack align="center" gap="md" ta="center">
                            <ThemeIcon size={60} radius="md" variant="light" color="deepblue.6">
                                <IconBook size={32} />
                            </ThemeIcon>
                            <Text fw={600} size="lg">
                                Documentation Coming Soon
                            </Text>
                            <Text c="dimmed" maw={400}>
                                We&apos;re building comprehensive documentation to help you get
                                started with Insaplan. Check back soon!
                            </Text>
                        </Stack>
                    </Card>
                </Container>
            </Box>
        </>
    )
}
