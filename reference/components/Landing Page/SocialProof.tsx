import { Container, Title, Text, Stack, Box, Group, Grid, Card } from '@mantine/core';
import classes from './SocialProof.module.css';

const testimonials = [
    {
        quote: 'Insaplan reduced our planning cycle by 60%. We can now respond to market changes in days instead of weeks.',
        author: 'Jane Smith',
        title: 'VP of Strategy',
        company: 'TechCorp Inc.',
        logoPlaceholder: '[LOGO: TechCorp]'
    },
    {
        quote: 'The AI-assisted planning features have transformed how we create our go-to-market strategies.',
        author: 'John Doe',
        title: 'CMO',
        company: 'Growth Ventures',
        logoPlaceholder: '[LOGO: Growth Ventures]'
    },
    {
        quote: 'Beautiful reports that actually help us communicate our strategic vision to investors and stakeholders.',
        author: 'Sarah Johnson',
        title: 'CEO',
        company: 'Startup XYZ',
        logoPlaceholder: '[LOGO: Startup XYZ]'
    }
];

const customerLogos = [
    '[CUSTOMER LOGO 1]',
    '[CUSTOMER LOGO 2]',
    '[CUSTOMER LOGO 3]',
    '[CUSTOMER LOGO 4]',
    '[CUSTOMER LOGO 5]',
    '[CUSTOMER LOGO 6]',
    '[CUSTOMER LOGO 7]',
    '[CUSTOMER LOGO 8]'
];

const SocialProof = () => (
    <Box py={80} bg="gray.0">
        <Container size="xl">
            <Stack gap="xl">
                <Stack gap="md" align="center" ta="center">
                    <Title order={2}>Trusted by Teams Worldwide</Title>
                    <Text size="lg" c="dimmed" maw={700}>
                        Join thousands of teams executing strategy with confidence
                    </Text>
                </Stack>

                {/* Customer Logos */}
                <Box mt="xl">
                    <Text size="sm" c="dimmed" ta="center" mb="lg" fw={500}>
                        TRUSTED BY LEADING ORGANIZATIONS
                    </Text>
                    <Grid gutter="md">
                        {customerLogos.map((logo, index) => (
                            <Grid.Col key={index} span={{ base: 6, sm: 4, md: 3 }}>
                                <Box className={classes.logoPlaceholder}>
                                    <Text size="xs" c="dimmed" ta="center">
                                        {logo}
                                    </Text>
                                </Box>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Box>

                {/* Testimonials */}
                <Grid gutter="lg" mt="xl">
                    {testimonials.map((testimonial, index) => (
                        <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                <Stack gap="md">
                                    <Text size="sm" c="dimmed" style={{ fontStyle: 'italic' }}>
                                        "{testimonial.quote}"
                                    </Text>
                                    <Box className={classes.testimonialLogoPlaceholder}>
                                        <Text size="xs" c="dimmed">
                                            {testimonial.logoPlaceholder}
                                        </Text>
                                    </Box>
                                    <Stack gap={4}>
                                        <Text fw={600} size="sm">
                                            {testimonial.author}
                                        </Text>
                                        <Text size="xs" c="dimmed">
                                            {testimonial.title}
                                        </Text>
                                        <Text size="xs" c="dimmed">
                                            {testimonial.company}
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>
            </Stack>
        </Container>
    </Box>
);

export default SocialProof;
