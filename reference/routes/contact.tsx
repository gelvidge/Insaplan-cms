import { createFileRoute } from '@tanstack/react-router';
import { Box, Container, Title, Text, Stack, Card, TextInput, Textarea, Button } from '@mantine/core';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/contact')({
    component: ContactPage
});

function ContactPage() {
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
                            Contact Us
                        </Title>
                        <Text size="xl" maw={800} c="gray.1">
                            Get in touch with our team
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Box py={80}>
                <Container size="sm">
                    <Card shadow="sm" padding="xl" radius="md" withBorder>
                        <Stack gap="md">
                            <Title order={3} mb="md">
                                Send us a message
                            </Title>
                            <TextInput label="Name" placeholder="Your name" required size="md" />
                            <TextInput
                                label="Email"
                                placeholder="your.email@company.com"
                                required
                                size="md"
                                type="email"
                            />
                            <TextInput label="Company" placeholder="Your company" size="md" />
                            <Textarea
                                label="Message"
                                placeholder="Tell us how we can help..."
                                required
                                size="md"
                                minRows={5}
                            />
                            <Button size="lg" variant="filled" color="deepblue.6" mt="md">
                                Send Message
                            </Button>
                            <Text size="sm" c="dimmed" ta="center">
                                We'll get back to you within 24 hours
                            </Text>
                        </Stack>
                    </Card>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
