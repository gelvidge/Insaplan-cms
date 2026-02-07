import { Container, Title, Text, Button, Stack } from '@mantine/core'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Container size="md" py={120}>
            <Stack align="center" ta="center" gap="xl">
                <Title order={1}>Page Not Found</Title>
                <Text c="dimmed">The page you&apos;re looking for doesn&apos;t exist.</Text>
                <Button component={Link} href="/" variant="filled">
                    Go Home
                </Button>
            </Stack>
        </Container>
    )
}
