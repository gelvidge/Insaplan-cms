import { Box, Text, Container, Grid, GridCol, Stack, Anchor } from '@mantine/core'
import Link from 'next/link'
import classes from './Footer.module.css'

const footerLinks = {
    product: [
        { label: 'Overview', link: '/product/overview' },
        { label: 'Features', link: '/product/features' },
    ],
    solutions: [
        { label: 'Sales', link: '/solutions/sales' },
        { label: 'Marketing', link: '/solutions/marketing' },
        { label: 'Start Ups', link: '/solutions/startups' },
        { label: 'Enterprise', link: '/solutions/enterprise' },
        { label: 'Not for Profit', link: '/solutions/nonprofit' },
    ],
    resources: [
        { label: 'Support', link: '/resources/support' },
        { label: 'Knowledge Base', link: '/resources/knowledge-base' },
    ],
    company: [
        { label: 'About', link: '/about' },
        { label: 'Pricing', link: '/pricing' },
        { label: 'Contact Us', link: '/contact' },
    ],
    legal: [
        { label: 'Terms of Service', link: '/legal' },
        { label: 'Privacy Policy', link: '/legal' },
        { label: 'Data Security', link: '/legal' },
    ],
}

const Footer = () => (
    <Box className={classes.footer} py={60}>
        <Container size="xl">
            <Stack gap="xl">
                <Stack gap="sm">
                    <Box className={classes.footerLogoPlaceholder}>
                        <Text size="sm" c="dimmed">
                            [LOGO: Insaplan]
                        </Text>
                    </Box>
                    <Text size="sm" c="dimmed" maw={400}>
                        Turn Insights into Plans. Strategic planning and reporting made simple.
                    </Text>
                </Stack>

                <Grid gutter="xl">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <GridCol key={category} span={{ base: 6, sm: 4, md: 2.4 }}>
                            <Stack gap="md">
                                <Text fw={600} size="sm" tt="capitalize">
                                    {category}
                                </Text>
                                {links.map((link) => (
                                    <Anchor
                                        key={link.label}
                                        component={Link}
                                        href={link.link}
                                        size="sm"
                                        c="dimmed"
                                        className={classes.footerLink}
                                    >
                                        {link.label}
                                    </Anchor>
                                ))}
                            </Stack>
                        </GridCol>
                    ))}
                </Grid>

                <Box className={classes.footerBottom} pt="xl">
                    <Text size="xs" c="dimmed" ta="center">
                        © {new Date().getFullYear()} Insaplan. All Rights Reserved.
                    </Text>
                </Box>
            </Stack>
        </Container>
    </Box>
)

export default Footer
