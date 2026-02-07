import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack } from '@mantine/core';
import CTA from '@Components/Landing Page/CTA';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/pricing')({
    component: PricingPage
});

function PricingPage() {
    return (
        <Box>
            <Box
                style={{
                    background: 'linear-gradient(135deg, #060a14 0%, #2e4072 50%, #64317f 100%)',
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

            <Box py={120}>
                <Container size="md">
                    <Stack gap="xl" align="center" ta="center">
                        <Title order={2}>Pricing Details Coming Soon</Title>
                        <Text size="lg" c="dimmed" maw={600}>
                            We're finalizing our pricing plans to ensure they provide the best value for
                            your organization. Join our waitlist to be among the first to know when pricing
                            is announced.
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <CTA />
            <Footer />
        </Box>
    );
}
