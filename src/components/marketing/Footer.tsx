import { Box, Text, Container, Grid, GridCol, Stack, Anchor } from '@mantine/core'
import Link from 'next/link'
import classes from './Footer.module.css'

type FooterLink = { label: string; url: string }
type LinkGroup = { heading: string; links: FooterLink[] }

type FooterData = {
    copyrightName?: string | null
    copyrightSuffix?: string | null
    linkGroups?: LinkGroup[] | null
}

type Props = { data?: FooterData | null }

const Footer = ({ data }: Props) => {
    const copyrightName = data?.copyrightName
    const copyrightSuffix = data?.copyrightSuffix
    const linkGroups = data?.linkGroups ?? []

    return (
        <Box className={classes.footer} py={60}>
            <Container size={1440}>
                <Stack gap="xl">

                    <Grid gutter="xl">
                        {linkGroups.map((group) => (
                            <GridCol key={group.heading} span={{ base: 6, sm: 4, md: 2.4 }}>
                                <Stack gap="md">
                                    <Text fw={600} size="sm" tt="capitalize" c="dimmed">
                                        {group.heading}
                                    </Text>
                                    {group.links.map((link) => (
                                        <Anchor
                                            key={link.label}
                                            component={Link}
                                            href={link.url}
                                            size="sm"
                                            
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
