import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack } from '@mantine/core';
import KeyBenefits from '@Components/Landing Page/KeyBenefits';
import ComparisonTable from '@Components/Landing Page/ComparisonTable';
import CTA from '@Components/Landing Page/CTA';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/product/overview')({
    component: ProductOverviewPage
});

function ProductOverviewPage() {
    return (
        <Box>
            {/* Hero Section */}
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
                            Turn Insights into Plans
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Insaplan combines the power of insights capture, strategic planning, and
                            beautiful reporting in one unified platform. Transform your planning process
                            from weeks to hours with AI-powered frameworks and real-time collaboration.
                        </Text>
                    </Stack>
                </Container>
            </Box>

            {/* How It Works Section */}
            <Box py={80} bg="gray.0">
                <Container size="lg">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>How Insaplan Works</Title>
                            <Text size="lg" c="dimmed" maw={700}>
                                Three powerful components working together
                            </Text>
                        </Stack>

                        <Stack gap="xl" mt="xl">
                            <Box>
                                <Title order={3} mb="md">
                                    1. Capture Insights
                                </Title>
                                <Text size="md" c="dimmed">
                                    Record and organize strategic insights from meetings, research, and team
                                    discussions. Our AI-powered knowledge base helps you categorize and
                                    retrieve insights when you need them most.
                                </Text>
                            </Box>

                            <Box>
                                <Title order={3} mb="md">
                                    2. Build Plans
                                </Title>
                                <Text size="md" c="dimmed">
                                    Transform insights into actionable plans using proven business frameworks.
                                    Choose from SWOT, OKRs, Business Model Canvas, and more. Our intelligent
                                    system guides you through each step with best practices built in.
                                </Text>
                            </Box>

                            <Box>
                                <Title order={3} mb="md">
                                    3. Generate Reports
                                </Title>
                                <Text size="md" c="dimmed">
                                    Create stunning visual reports with professional infographics, charts, and
                                    dashboards. Export to PDF or PowerPoint with one click, or share live
                                    dashboards with stakeholders for real-time updates.
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            {/* Key Benefits Section */}
            <KeyBenefits />

            {/* Comparison Table */}
            <Box bg="gray.0">
                <ComparisonTable />
            </Box>

            {/* CTA */}
            <CTA />

            {/* Footer */}
            <Footer />
        </Box>
    );
}
