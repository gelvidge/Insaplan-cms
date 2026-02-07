import { createFileRoute } from '@tanstack/react-router'
import {
    Box,
    Container,
    Title,
    Text,
    Group,
    Avatar,
    Badge,
    TypographyStylesProvider,
    Stack,
    Image
} from '@mantine/core'
import { IconClock, IconCalendar } from '@tabler/icons-react'
import Footer from '@Components/Landing Page/Footer'
import type { BlogPost } from '@Utils/cms/fetchContent'

// Import statically generated content
import blogPostsData from '@/generated-content/blog-posts.json'

export const Route = createFileRoute('/blog/$slug')({
    component: BlogPostPage,
    loader: ({ params }) => {
        const posts = blogPostsData as BlogPost[]
        const post = posts.find((p) => p.slug === params.slug)

        if (!post) {
            throw new Error('Blog post not found')
        }

        return { post }
    }
})

function BlogPostPage() {
    const { post } = Route.useLoaderData()

    // Convert Lexical JSON to HTML (simplified - you may need a proper renderer)
    const renderContent = (content: any) => {
        // This is a simplified version - in production, use a proper Lexical renderer
        if (typeof content === 'string') {
            return content
        }

        // For now, return a placeholder
        // TODO: Implement proper Lexical renderer
        return '<p>Content rendering coming soon...</p>'
    }

    return (
        <Box>
            {/* Hero Section */}
            <Box
                style={{
                    background:
                        'linear-gradient(135deg, #060a14 0%, #2e4072 50%, #64317f 100%)',
                    color: 'white'
                }}
                py={80}
            >
                <Container size="md">
                    <Stack gap="lg">
                        <Badge
                            variant="light"
                            size="lg"
                            style={{ alignSelf: 'flex-start' }}
                        >
                            {post.category
                                .replace('-', ' ')
                                .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Badge>

                        <Title order={1} size="3rem" fw={900}>
                            {post.title}
                        </Title>

                        <Text size="xl" c="gray.2">
                            {post.excerpt}
                        </Text>

                        <Group gap="xl" mt="md">
                            <Group gap="sm">
                                <Avatar color="deepblue" radius="xl">
                                    {post.author.name.charAt(0)}
                                </Avatar>
                                <div>
                                    <Text size="sm" fw={500}>
                                        {post.author.name}
                                    </Text>
                                    <Text size="xs" c="gray.3">
                                        Author
                                    </Text>
                                </div>
                            </Group>

                            <Group gap={4}>
                                <IconCalendar size={16} />
                                <Text size="sm">
                                    {new Date(
                                        post.publishedDate
                                    ).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </Text>
                            </Group>

                            {post.readTime && (
                                <Group gap={4}>
                                    <IconClock size={16} />
                                    <Text size="sm">
                                        {post.readTime} min read
                                    </Text>
                                </Group>
                            )}
                        </Group>
                    </Stack>
                </Container>
            </Box>

            {/* Featured Image */}
            {post.featuredImage && (
                <Container size="lg" mt={-40}>
                    <Image
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt}
                        radius="md"
                        style={{
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </Container>
            )}

            {/* Content */}
            <Container size="md" py={80}>
                <TypographyStylesProvider>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: renderContent(post.content)
                        }}
                    />
                </TypographyStylesProvider>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <Group gap="xs" mt={40}>
                        <Text fw={500} mr="xs">
                            Tags:
                        </Text>
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="light">
                                {tag}
                            </Badge>
                        ))}
                    </Group>
                )}
            </Container>

            <Footer />
        </Box>
    )
}
