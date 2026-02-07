import { createFileRoute, Link } from '@tanstack/react-router'
import {
    Box,
    Container,
    Title,
    Text,
    SimpleGrid,
    Card,
    Group,
    Badge,
    Button,
    Image,
    Stack
} from '@mantine/core'
import { IconClock, IconCalendar } from '@tabler/icons-react'
import Footer from '@Components/Landing Page/Footer'
import type { BlogPost } from '@Utils/cms/fetchContent'

// Import statically generated content
import blogPostsData from '@/generated-content/blog-posts.json'

export const Route = createFileRoute('/blog/')({
    component: BlogIndexPage,
    loader: () => {
        // In production, this data is statically generated
        // In development, you might want to fetch fresh data
        return {
            posts: blogPostsData as BlogPost[]
        }
    }
})

function BlogIndexPage() {
    const { posts } = Route.useLoaderData()

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
                <Container size="lg">
                    <Stack gap="xl" align="center" ta="center">
                        <Title order={1} size="3rem" fw={900}>
                            Blog
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Insights, updates, and best practices for strategic
                            planning
                        </Text>
                    </Stack>
                </Container>
            </Box>

            {/* Blog Posts Grid */}
            <Container size="lg" py={80}>
                <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
                    {posts.map((post) => (
                        <Card
                            key={post.id}
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                            component={Link}
                            to={`/blog/${post.slug}`}
                            style={{
                                textDecoration: 'none',
                                transition: 'transform 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    'translateY(-4px)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    'translateY(0)'
                            }}
                        >
                            <Card.Section>
                                <Image
                                    src={post.featuredImage?.url}
                                    alt={post.featuredImage?.alt}
                                    height={200}
                                    fit="cover"
                                />
                            </Card.Section>

                            <Stack gap="md" mt="md">
                                <Group justify="space-between">
                                    <Badge variant="light" size="sm">
                                        {post.category
                                            .replace('-', ' ')
                                            .replace(/\b\w/g, (l) =>
                                                l.toUpperCase()
                                            )}
                                    </Badge>
                                    {post.readTime && (
                                        <Group gap={4}>
                                            <IconClock size={14} />
                                            <Text size="xs" c="dimmed">
                                                {post.readTime} min read
                                            </Text>
                                        </Group>
                                    )}
                                </Group>

                                <Title order={3} lineClamp={2}>
                                    {post.title}
                                </Title>

                                <Text c="dimmed" size="sm" lineClamp={3}>
                                    {post.excerpt}
                                </Text>

                                <Group justify="space-between" mt="auto">
                                    <Group gap={4}>
                                        <IconCalendar size={14} />
                                        <Text size="xs" c="dimmed">
                                            {new Date(
                                                post.publishedDate
                                            ).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </Text>
                                    </Group>
                                    <Text size="xs" c="dimmed">
                                        {post.author.name}
                                    </Text>
                                </Group>

                                <Button
                                    variant="light"
                                    fullWidth
                                    mt="xs"
                                    component="span"
                                >
                                    Read More
                                </Button>
                            </Stack>
                        </Card>
                    ))}
                </SimpleGrid>

                {posts.length === 0 && (
                    <Box ta="center" py={60}>
                        <Text size="lg" c="dimmed">
                            No blog posts yet. Check back soon!
                        </Text>
                    </Box>
                )}
            </Container>

            <Footer />
        </Box>
    )
}
