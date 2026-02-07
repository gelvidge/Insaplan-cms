import { Box, Text, Container, Grid, Stack, Anchor } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import classes from './Footer.module.css';

const footerLinks = {
    product: [
        { label: 'Overview', link: '/product/overview' },
        { label: 'Features', link: '/product/features' }
    ],
    solutions: [
        { label: 'Sales', link: '/solutions/sales' },
        { label: 'Marketing', link: '/solutions/marketing' },
        { label: 'Start Ups', link: '/solutions/startups' },
        { label: 'Enterprise', link: '/solutions/enterprise' },
        { label: 'Not for Profit', link: '/solutions/nonprofit' }
    ],
    resources: [
        { label: 'Support', link: '/resources/support' },
        { label: 'Knowledge Base', link: '/resources/knowledge-base' }
    ],
    company: [
        { label: 'About', link: '/about' },
        { label: 'Pricing', link: '/pricing' },
        { label: 'Contact Us', link: '/contact' }
    ],
    legal: [
        { label: 'Terms of Service', link: '/legal' },
        { label: 'Privacy Policy', link: '/legal' },
        { label: 'Data Security', link: '/legal' }
    ]
};

const Footer = () => (
    <Box className={classes.footer} py={60}>
        <Container size="xl">
            <Stack gap="xl">
                {/* Logo and tagline */}
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

                {/* Links Grid - Responsive */}
                <Grid gutter="xl">
                    <Grid.Col span={{ base: 6, sm: 4, md: 2.4 }}>
                        <Stack gap="md">
                            <Text fw={600} size="sm">
                                Product
                            </Text>
                            {footerLinks.product.map((link) => (
                                <Anchor
                                    key={link.label}
                                    component={Link}
                                    to={link.link}
                                    size="sm"
                                    c="dimmed"
                                    className={classes.footerLink}
                                >
                                    {link.label}
                                </Anchor>
                            ))}
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 6, sm: 4, md: 2.4 }}>
                        <Stack gap="md">
                            <Text fw={600} size="sm">
                                Solutions
                            </Text>
                            {footerLinks.solutions.map((link) => (
                                <Anchor
                                    key={link.label}
                                    component={Link}
                                    to={link.link}
                                    size="sm"
                                    c="dimmed"
                                    className={classes.footerLink}
                                >
                                    {link.label}
                                </Anchor>
                            ))}
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 6, sm: 4, md: 2.4 }}>
                        <Stack gap="md">
                            <Text fw={600} size="sm">
                                Resources
                            </Text>
                            {footerLinks.resources.map((link) => (
                                <Anchor
                                    key={link.label}
                                    component={Link}
                                    to={link.link}
                                    size="sm"
                                    c="dimmed"
                                    className={classes.footerLink}
                                >
                                    {link.label}
                                </Anchor>
                            ))}
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 6, sm: 4, md: 2.4 }}>
                        <Stack gap="md">
                            <Text fw={600} size="sm">
                                Company
                            </Text>
                            {footerLinks.company.map((link) => (
                                <Anchor
                                    key={link.label}
                                    component={Link}
                                    to={link.link}
                                    size="sm"
                                    c="dimmed"
                                    className={classes.footerLink}
                                >
                                    {link.label}
                                </Anchor>
                            ))}
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 6, sm: 4, md: 2.4 }}>
                        <Stack gap="md">
                            <Text fw={600} size="sm">
                                Legal
                            </Text>
                            {footerLinks.legal.map((link) => (
                                <Anchor
                                    key={link.label}
                                    component={Link}
                                    to={link.link}
                                    size="sm"
                                    c="dimmed"
                                    className={classes.footerLink}
                                >
                                    {link.label}
                                </Anchor>
                            ))}
                        </Stack>
                    </Grid.Col>
                </Grid>

                {/* Copyright */}
                <Box className={classes.footerBottom} pt="xl">
                    <Text size="xs" c="dimmed" ta="center">
                        © {new Date().getFullYear()} Insaplan. All Rights Reserved.
                    </Text>
                </Box>
            </Stack>
        </Container>
    </Box>
);

export default Footer;
