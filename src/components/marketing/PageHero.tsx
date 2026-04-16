import { Box, Container, Stack, Title, Text } from '@mantine/core'

interface PageHeroProps {
    title: string
    subtitle: string
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
    return (
        <Box style={{ background: 'transparent', color: 'white' }} py={80} pt={140}>
            <Container size="lg">
                <Stack gap="xl" align="center" ta="center">
                    <div>
                        <Title order={1} size="3rem" fw={900}>{title}</Title>
                    </div>
                    <div>
                        <Text size="xl" maw={800} c="gray.1">{subtitle}</Text>
                    </div>
                </Stack>
            </Container>
        </Box>
    )
}

export default PageHero
