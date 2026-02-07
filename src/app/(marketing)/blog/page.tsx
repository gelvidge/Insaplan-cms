import { Box, Container, Title, Text, SimpleGrid, Card, Group, Badge, Button, Stack } from '@mantine/core'
import { IconClock, IconCalendar } from '@tabler/icons-react'
import Link from 'next/link'
import PageHero from '@/components/marketing/PageHero'
import { fetchBlogPosts } from '@/lib/queries'

export default async function BlogListingPage() {
    const { docs: posts } = await fetchBlogPosts(12, 1)

    return (
        <>
            <PageHero title="Blog" subtitle="Insights, updates, and best practices" />
            <Box py={80}>
                <Container size="xl">
                    {posts.length > 0 ? (
                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
                            {posts.map((post) => (
                                <Card
                                    key={post.id}
                                    shadow="sm"
                                    padding="lg"
                                    radius="md"
                                    withBorder
                                    component={Link}
                                    href={`/blog/${post.slug}`}
                                    style={{
                                        textDecoration: 'none',
                                        transition: 'transform 0.2s ease',
                                    }}
                                >
                                    <Stack gap="sm">
                                        <Group justify="space-between">
                                            <Badge variant="light">{post.category}</Badge>
                                            {post.readTime && (
                                                <Group gap={4}>
                                                    <IconClock size={14} />
                                                    <Text size="xs" c="dimmed">
                                                        {post.readTime} min read
                                                    </Text>
                                                </Group>
                                            )}
                                        </Group>
                                        <Title order={4} lineClamp={2}>
                                            {post.title}
                                        </Title>
                                        <Text size="sm" c="dimmed" lineClamp={3}>
                                            {post.excerpt}
                                        </Text>
                                        <Group justify="space-between" mt="auto">
                                            <Group gap={4}>
                                                <IconCalendar size={14} />
                                                <Text size="xs" c="dimmed">
                                                    {new Date(post.publishedDate).toLocaleDateString()}
                                                </Text>
                                            </Group>
                                            <Button variant="subtle" size="xs">
                                                Read More
                                            </Button>
                                        </Group>
                                    </Stack>
                                </Card>
                            ))}
                        </SimpleGrid>
                    ) : (
                        <Stack align="center" gap="md" ta="center" py={60}>
                            <Title order={3}>No Posts Yet</Title>
                            <Text c="dimmed" maw={400}>
                                We&apos;re working on content. Check back soon for insights on
                                strategic planning, AI, and more.
                            </Text>
                        </Stack>
                    )}
                </Container>
            </Box>
        </>
    )
}
