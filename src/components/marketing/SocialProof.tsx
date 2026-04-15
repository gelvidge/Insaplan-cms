import { Container, Title, Text, Stack, Box, Grid, GridCol, Card } from '@mantine/core'
import Image from 'next/image'
import classes from './SocialProof.module.css'

// ---------------------------------------------------------------------------
// DEPRECATED: hardcoded fallback testimonials — add real entries via the
// CMS under Marketing > Testimonials (mark "Featured" = true), then
// remove this block.
// ---------------------------------------------------------------------------
const DEPRECATED_testimonials = [
    {
        quote: 'Insaplan reduced our planning cycle by 60%. We can now respond to market changes in days instead of weeks.',
        author: 'Jane Smith',
        role: 'VP of Strategy',
        company: 'TechCorp Inc.',
    },
    {
        quote: 'The AI-assisted planning features have transformed how we create our go-to-market strategies.',
        author: 'John Doe',
        role: 'CMO',
        company: 'Growth Ventures',
    },
    {
        quote: 'Beautiful reports that actually help us communicate our strategic vision to investors and stakeholders.',
        author: 'Sarah Johnson',
        role: 'CEO',
        company: 'Startup XYZ',
    },
]
// ---------------------------------------------------------------------------

type CustomerLogo = {
    companyName: string
    logo?: { url?: string; alt?: string } | null
}

type Testimonial = {
    quote: string
    author: string
    role: string
    company: string
    companyLogo?: { url?: string; alt?: string } | null
    photo?: { url?: string; alt?: string } | null
}

type SectionData = {
    heading?: string | null
    subheading?: string | null
    logosLabel?: string | null
    customerLogos?: CustomerLogo[] | null
}

type Props = {
    section?: SectionData | null
    testimonials?: Testimonial[] | null
}

const SocialProof = ({ section, testimonials }: Props) => {
    const heading = section?.heading ?? 'Trusted by Teams Worldwide'
    const subheading =
        section?.subheading ?? 'Join thousands of teams executing strategy with confidence'
    const logosLabel = section?.logosLabel ?? 'TRUSTED BY LEADING ORGANIZATIONS'
    const customerLogos = section?.customerLogos ?? []
    const activeTestimonials =
        testimonials && testimonials.length > 0 ? testimonials : DEPRECATED_testimonials

    return (
        <Box py={80} bg="gray.0">
            <Container size="xl">
                <Stack gap="xl">
                    <Stack gap="md" align="center" ta="center">
                        <Title order={2}>{heading}</Title>
                        <Text size="lg" c="dimmed" maw={700}>
                            {subheading}
                        </Text>
                    </Stack>

                    {customerLogos.length > 0 && (
                        <Box mt="xl">
                            <Text size="sm" c="dimmed" ta="center" mb="lg" fw={500}>
                                {logosLabel}
                            </Text>
                            <Grid gutter="md">
                                {customerLogos.map((logo, index) => (
                                    <GridCol key={index} span={{ base: 6, sm: 4, md: 3 }}>
                                        <Box className={classes.logoPlaceholder}>
                                            {logo.logo?.url ? (
                                                <Image
                                                    src={logo.logo.url}
                                                    alt={logo.logo.alt ?? logo.companyName}
                                                    width={120}
                                                    height={40}
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            ) : (
                                                <Text size="xs" c="dimmed" ta="center">
                                                    {logo.companyName}
                                                </Text>
                                            )}
                                        </Box>
                                    </GridCol>
                                ))}
                            </Grid>
                        </Box>
                    )}

                    <Grid gutter="lg" mt="xl">
                        {activeTestimonials.map((testimonial, index) => (
                            <GridCol key={index} span={{ base: 12, md: 4 }}>
                                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                                    <Stack gap="md">
                                        <Text size="sm" c="dimmed" style={{ fontStyle: 'italic' }}>
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </Text>
                                        {'companyLogo' in testimonial && (testimonial.companyLogo as any)?.url ? (
                                            <Box className={classes.testimonialLogoPlaceholder}>
                                                <Image
                                                    src={(testimonial.companyLogo as any).url}
                                                    alt={(testimonial.companyLogo as any).alt ?? testimonial.company}
                                                    width={80}
                                                    height={30}
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </Box>
                                        ) : null}
                                        <Stack gap={4}>
                                            <Text fw={600} size="sm">
                                                {testimonial.author}
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                {testimonial.role}
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                {testimonial.company}
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </Card>
                            </GridCol>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}

export default SocialProof
