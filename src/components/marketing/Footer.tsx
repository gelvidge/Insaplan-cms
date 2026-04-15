import { Box, Text, Container, Grid, GridCol, Stack, Anchor } from '@mantine/core'
import Link from 'next/link'
import classes from './Footer.module.css'

// ---------------------------------------------------------------------------
// DEPRECATED: hardcoded fallback data — enter content in CMS under
// Marketing > Marketing Pages > Footer tab, then remove this block.
// ---------------------------------------------------------------------------
const DEPRECATED_footerLinks = [
    {
        heading: 'Product',
        links: [
            { label: 'Overview', url: '/product/overview' },
            { label: 'Features', url: '/product/features' },
        ],
    },
    {
        heading: 'Solutions',
        links: [
            { label: 'Sales', url: '/solutions/sales' },
            { label: 'Marketing', url: '/solutions/marketing' },
            { label: 'Start Ups', url: '/solutions/startups' },
            { label: 'Enterprise', url: '/solutions/enterprise' },
            { label: 'Not for Profit', url: '/solutions/nonprofit' },
        ],
    },
    {
        heading: 'Resources',
        links: [
            { label: 'Support', url: '/resources/support' },
            { label: 'Knowledge Base', url: '/resources/knowledge-base' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { label: 'About', url: '/about' },
            { label: 'Pricing', url: '/pricing' },
            { label: 'Contact Us', url: '/contact' },
        ],
    },
    {
        heading: 'Legal',
        links: [
            { label: 'Terms of Service', url: '/legal' },
            { label: 'Privacy Policy', url: '/legal' },
            { label: 'Data Security', url: '/legal' },
        ],
    },
]

const DEPRECATED_tagline =
    'Turn Insights into Plans. Strategic planning and reporting made simple.'

const DEPRECATED_copyrightName = 'Insaplan'
// ---------------------------------------------------------------------------

type FooterLink = { label: string; url: string }
type LinkGroup = { heading: string; links: FooterLink[] }

type FooterData = {
    logoText?: string | null
    tagline?: string | null
    copyrightName?: string | null
    copyrightSuffix?: string | null
    linkGroups?: LinkGroup[] | null
}

type Props = { data?: FooterData | null }

const Footer = ({ data }: Props) => {
    const logoText = data?.logoText ?? DEPRECATED_copyrightName
    const tagline = data?.tagline ?? DEPRECATED_tagline
    const copyrightName = data?.copyrightName ?? DEPRECATED_copyrightName
    const copyrightSuffix = data?.copyrightSuffix ?? 'All Rights Reserved.'
    const linkGroups =
        data?.linkGroups && data.linkGroups.length > 0
            ? data.linkGroups
            : DEPRECATED_footerLinks

    return (
        <Box className={classes.footer} py={60}>
            <Container size={1440}>
                <Stack gap="xl">
                    <Stack gap="sm">
                        <Text size="xl" fw={700} c="white">
                            {logoText}
                        </Text>
                        <Text size="sm" c="dimmed" maw={400}>
                            {tagline}
                        </Text>
                    </Stack>

                    <Grid gutter="xl">
                        {linkGroups.map((group) => (
                            <GridCol key={group.heading} span={{ base: 6, sm: 4, md: 2.4 }}>
                                <Stack gap="md">
                                    <Text fw={600} size="sm" tt="capitalize">
                                        {group.heading}
                                    </Text>
                                    {group.links.map((link) => (
                                        <Anchor
                                            key={link.label}
                                            component={Link}
                                            href={link.url}
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
                            © {new Date().getFullYear()} {copyrightName}. {copyrightSuffix}
                        </Text>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer
