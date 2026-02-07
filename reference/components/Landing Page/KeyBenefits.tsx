import { Container, Title, Text, Grid, Card, Stack, Box, ThemeIcon, Group } from '@mantine/core';
import {
    IconClock,
    IconPalette,
    IconAdjustments,
    IconBooks,
    IconDatabase,
    IconSparkles
} from '@tabler/icons-react';

const benefits = [
    {
        icon: IconClock,
        title: 'Fast & Efficient',
        description: 'Produce plans quickly and edit/monitor them in real-time'
    },
    {
        icon: IconPalette,
        title: 'Beautiful Outputs',
        description: 'Create stunning reports with professional infographics and charts'
    },
    {
        icon: IconAdjustments,
        title: 'Flexible & Customizable',
        description: 'Tailor workflows, data structures, and reports to your needs'
    },
    {
        icon: IconBooks,
        title: 'Best Practices Built-In',
        description: 'Integrated business frameworks guide your planning process'
    },
    {
        icon: IconDatabase,
        title: 'Knowledge-Powered',
        description: 'Integrated knowledge bases include common KPIs and industry standards'
    },
    {
        icon: IconSparkles,
        title: 'AI-Assisted',
        description: 'Get intelligent recommendations for insights and planning'
    }
];

const KeyBenefits = () => (
    <Box py={80}>
        <Container size="xl">
            <Stack gap="xl">
                <Stack gap="md" align="center" ta="center">
                    <Title order={2}>Key Benefits</Title>
                    <Text size="lg" c="dimmed" maw={700}>
                        Everything you need to transform your planning process
                    </Text>
                </Stack>

                <Grid gutter="lg" mt="xl">
                    {benefits.map((benefit, index) => (
                        <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                <Stack gap="md">
                                    <ThemeIcon
                                        size={50}
                                        radius="md"
                                        variant="light"
                                        color="deepblue.6"
                                    >
                                        <benefit.icon size={28} />
                                    </ThemeIcon>
                                    <Title order={4}>{benefit.title}</Title>
                                    <Text size="sm" c="dimmed">
                                        {benefit.description}
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>
            </Stack>
        </Container>
    </Box>
);

export default KeyBenefits;
