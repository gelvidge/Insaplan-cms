import { Box, Text, Button } from '@mantine/core';

const Hero = () => (
    <Box style={{ textAlign: 'center', padding: '4rem 0' }}>
        <Text size="2.5rem" fw={900} style={{ marginBottom: '1.5rem', display: 'block' }}>
            Strategic Clarity for Modern Enterprises
        </Text>
        <Text size="lg" c="dimmed" style={{ marginBottom: '2rem' }}>
            Align teams, forecast outcomes, and execute with precision.
        </Text>
        <Button color="green.9" size="lg" radius="md">
            Get Started
        </Button>
    </Box>
);

export default Hero;
