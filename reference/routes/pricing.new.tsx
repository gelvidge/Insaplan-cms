import { createFileRoute } from '@tanstack/react-router'
import {
    Box,
    Container,
    Title,
    Text,
    Stack,
    SimpleGrid,
    Card,
    Button,
    List,
    Badge,
    Group
} from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import CTA from '@Components/Landing Page/CTA'
import Footer from '@Components/Landing Page/Footer'
import type { PricingPlan } from '@Utils/cms/fetchContent'

// Import statically generated content
import pricingPlansData from '@/generated-content/pricing-plans.json'

export const Route = createFileRoute('/pricing/new')({
    component: PricingPage,
    loader: () => {
        return {
            plans: pricingPlansData as PricingPlan[]
        }
    }
})

function PricingPage() {
    const { plans } = Route.useLoaderData()

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
                            Pricing
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Simple, transparent pricing for teams of all sizes
                        </Text>
                    </Stack>
                </Container>
            </Box>

            {/* Pricing Cards */}
            <Box py={80}>
                <Container size="xl">
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: plans.length > 2 ? 3 : 2 }}
                        spacing="xl"
                    >
                        {plans.map((plan) => (
                            <Card
                                key={plan.id}
                                shadow="md"
                                padding="xl"
                                radius="lg"
                                withBorder
                                style={{
                                    position: 'relative',
                                    borderWidth: plan.popular ? 2 : 1,
                                    borderColor: plan.popular
                                        ? 'var(--mantine-color-deepblue-6)'
                                        : undefined
                                }}
                            >
                                {plan.popular && (
                                    <Badge
                                        color="deepblue"
                                        variant="filled"
                                        size="lg"
                                        style={{
                                            position: 'absolute',
                                            top: -12,
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                        }}
                                    >
                                        Most Popular
                                    </Badge>
                                )}

                                <Stack gap="lg">
                                    <div>
                                        <Title order={2} size="h3">
                                            {plan.planName}
                                        </Title>
                                        <Text c="dimmed" mt="xs">
                                            {plan.description}
                                        </Text>
                                    </div>

                                    <div>
                                        <Group align="baseline" gap={4}>
                                            <Title order={1} size="3rem">
                                                {plan.currency === 'USD'
                                                    ? '$'
                                                    : plan.currency}
                                                {plan.price}
                                            </Title>
                                            <Text c="dimmed" size="lg">
                                                /
                                                {plan.billingPeriod === 'monthly'
                                                    ? 'month'
                                                    : 'year'}
                                            </Text>
                                        </Group>
                                    </div>

                                    <Button
                                        size="lg"
                                        variant={
                                            plan.cta.variant || 'primary'
                                        }
                                        fullWidth
                                        component="a"
                                        href={plan.cta.url}
                                    >
                                        {plan.cta.text}
                                    </Button>

                                    <List
                                        spacing="sm"
                                        icon={
                                            <IconCheck
                                                size={20}
                                                stroke={2}
                                                color="var(--mantine-color-teal-6)"
                                            />
                                        }
                                    >
                                        {plan.features.map((feature, idx) => (
                                            <List.Item
                                                key={idx}
                                                icon={
                                                    !feature.included ? (
                                                        <IconX
                                                            size={20}
                                                            stroke={2}
                                                            color="var(--mantine-color-gray-5)"
                                                        />
                                                    ) : undefined
                                                }
                                                style={{
                                                    opacity: feature.included
                                                        ? 1
                                                        : 0.5
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        textDecoration:
                                                            !feature.included
                                                                ? 'line-through'
                                                                : undefined
                                                    }}
                                                >
                                                    {feature.feature}
                                                    {feature.limit && (
                                                        <Text
                                                            span
                                                            c="dimmed"
                                                            size="sm"
                                                        >
                                                            {' '}
                                                            ({feature.limit})
                                                        </Text>
                                                    )}
                                                </Text>
                                            </List.Item>
                                        ))}
                                    </List>
                                </Stack>
                            </Card>
                        ))}
                    </SimpleGrid>

                    {plans.length === 0 && (
                        <Box ta="center" py={60}>
                            <Text size="lg" c="dimmed">
                                Pricing information coming soon. Join our
                                waitlist to be notified!
                            </Text>
                        </Box>
                    )}
                </Container>
            </Box>

            <CTA />
            <Footer />
        </Box>
    )
}
