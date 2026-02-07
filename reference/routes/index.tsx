import { createFileRoute } from '@tanstack/react-router';
import { Box } from '@mantine/core';
import Hero from '@Components/Landing Page/Hero';
import CoreFeatures from '@Components/Landing Page/CoreFeatures';
import CTA from '@Components/Landing Page/CTA';
import Footer from '@Components/Landing Page/Footer';

export const Route = createFileRoute('/')({
    component: HomePage
});

function HomePage() {
    return (
        <Box>
            <Hero />
            <CoreFeatures />
            <CTA />
            <Footer />
        </Box>
    );
}
