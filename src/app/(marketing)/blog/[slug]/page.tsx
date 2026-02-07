import { Box, Container, Title, Text, Group, Badge, Stack } from '@mantine/core'
import { IconClock, IconCalendar } from '@tabler/icons-react'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { fetchBlogPost, fetchBlogPosts } from '@/lib/queries'
import type { Metadata } from 'next'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await fetchBlogPost(slug)

    if (!post) return { title: 'Post Not Found' }

    return {
        title: `${post.title} | Insaplan Blog`,
        description: post.excerpt,
    }
}

export async function generateStaticParams() {
    const { docs: posts } = await fetchBlogPosts(1000, 1)
    return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = await fetchBlogPost(slug)

    if (!post) notFound()

    return (
        <>
            <Box
                style={{
                    background: 'linear-gradient(135deg, #060a14 0%, #2e4072 50%, #64317f 100%)',
                    color: 'white',
                }}
                py={80}
                pt={140}
            >
                <Container size="md">
                    <Stack gap="lg" align="center" ta="center">
                        <Badge variant="light" size="lg">
                            {post.category}
                        </Badge>
                        <Title order={1} size="2.5rem" fw={900}>
                            {post.title}
                        </Title>
                        <Text size="lg" c="gray.1" maw={600}>
                            {post.excerpt}
                        </Text>
                        <Group gap="xl">
                            <Group gap={4}>
                                <IconCalendar size={16} />
                                <Text size="sm">
                                    {new Date(post.publishedDate).toLocaleDateString()}
                                </Text>
                            </Group>
                            {post.readTime && (
                                <Group gap={4}>
                                    <IconClock size={16} />
                                    <Text size="sm">{post.readTime} min read</Text>
                                </Group>
                            )}
                        </Group>
                    </Stack>
                </Container>
            </Box>

            <Box py={80}>
                <Container size="md">
                    {post.content && <RichText data={post.content} />}

                    {post.tags && post.tags.length > 0 && (
                        <Group gap="xs" mt="xl" pt="xl" style={{ borderTop: '1px solid #eee' }}>
                            <Text size="sm" fw={600}>
                                Tags:
                            </Text>
                            {post.tags.map((tag: string) => (
                                <Badge key={tag} variant="outline" size="sm">
                                    {tag}
                                </Badge>
                            ))}
                        </Group>
                    )}
                </Container>
            </Box>
        </>
    )
}
