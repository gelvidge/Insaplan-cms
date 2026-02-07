import { Grid, Text, Box, Paper } from '@mantine/core';

const features = [
    { title: 'Scenario Planning', description: 'Model multiple outcomes and adapt in real time.' },
    { title: 'Team Alignment', description: 'Keep stakeholders on the same strategic page.' },
    {
        title: 'Forecasting Engine',
        description: 'Predict outcomes with confidence using AI-driven insights.'
    }
];

const Features = () => (
    <Box style={{ padding: '3rem 0' }}>
        <Text size="xl" fw={700} ta="center" style={{ marginBottom: '2rem' }}>
            Why Choose Us
        </Text>
        <Grid gutter={32}>
            {features.map((feature, idx) => (
                <Grid.Col span={{ base: 12, md: 4 }} key={idx}>
                    <Paper shadow="md" p="lg" radius="md" withBorder>
                        <Text size="lg" fw={600} style={{ marginBottom: '0.5rem' }}>
                            {feature.title}
                        </Text>
                        <Text size="sm" color="dimmed">
                            {feature.description}
                        </Text>
                    </Paper>
                </Grid.Col>
            ))}
        </Grid>
    </Box>
);

export default Features;
