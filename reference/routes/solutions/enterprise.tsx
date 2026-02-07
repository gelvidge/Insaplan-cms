import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack, List, Grid, Card, ThemeIcon } from '@mantine/core';
import { IconDatabase, IconTemplate, IconBuilding } from '@tabler/icons-react';
import CTA from '@Components/Landing Page/CTA';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/solutions/enterprise')({
    component: EnterpriseSolutionPage
});

const useCases = [
    {
        icon: IconDatabase,
        title: 'Internal Knowledge Base',
        description: 'Centralize organizational knowledge and best practices'
    },
    {
        icon: IconTemplate,
        title: 'Standardized Planning',
        description: 'Ensure consistency across departments with unified frameworks'
    },
    {
        icon: IconBuilding,
        title: 'Department Collaboration',
        description: 'Align strategic plans across business units'
    }
];

function EnterpriseSolutionPage() {
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
                            Standardize Planning Across the Organization
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Create a unified planning framework, centralized knowledge base, and consistent
                            reporting across all departments
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Box py={80}>
                <Container size="xl">
                    <Stack gap="xl">
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>Enterprise Use Cases</Title>
                            <Text size="lg" c="dimmed" maw={700}>
                                How enterprises use Insaplan
                            </Text>
                        </Stack>

                        <Grid gutter="xl" mt="xl">
                            {useCases.map((useCase, index) => (
                                <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                                    <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
                                        <Stack gap="md" align="center" ta="center">
                                            <ThemeIcon size={60} radius="md" variant="light" color="deepblue.6">
                                                <useCase.icon size={32} />
                                            </ThemeIcon>
                                            <Title order={4}>{useCase.title}</Title>
                                            <Text size="sm" c="dimmed">
                                                {useCase.description}
                                            </Text>
                                        </Stack>
                                    </Card>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Box>

            <Box py={80} bg="gray.0">
                <Container size="lg">
                    <Stack gap="xl">
                        <Title order={2} ta="center">
                            Value for Enterprise
                        </Title>
                        <List spacing="lg" size="lg" withPadding>
                            <List.Item>
                                <Text fw={600}>Build internal knowledge bases across departments</Text>
                                <Text c="dimmed" size="sm">
                                    Create a searchable repository of strategic insights, KPIs, and best
                                    practices
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Ensure consistent planning methodologies</Text>
                                <Text c="dimmed" size="sm">
                                    Standardize on proven frameworks and reduce variation in plan quality
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Scale planning across the organization</Text>
                                <Text c="dimmed" size="sm">
                                    Enable every department to create professional plans without specialized
                                    training
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text fw={600}>Centralized monitoring and reporting</Text>
                                <Text c="dimmed" size="sm">
                                    Track execution across all business units from a single dashboard
                                </Text>
                            </List.Item>
                        </List>
                    </Stack>
                </Container>
            </Box>

            <CTA />
            <Footer />
        </Box>
    );
}
