import { Box, Container, Stack, Title, Text } from '@mantine/core'

interface PageHeroProps {
    title: string
    subtitle: string
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
    <Box
        style={{
            background: 'linear-gradient(135deg, #060a14 0%, #2e4072 50%, #64317f 100%)',
            color: 'white',
        }}
        py={80}
        pt={140}
    >
        <Container size="lg">
            <Stack gap="xl" align="center" ta="center">
                <Title order={1} size="3rem" fw={900}>
                    {title}
                </Title>
                <Text size="xl" maw={800} c="gray.1">
                    {subtitle}
                </Text>
            </Stack>
        </Container>
    </Box>
)

export default PageHero
