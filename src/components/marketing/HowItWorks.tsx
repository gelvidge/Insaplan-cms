import { Container, Stack, Title, Text, Grid, GridCol, Box } from '@mantine/core'
import classes from './HowItWorks.module.css'

interface Step {
    title: string
    description: string
}

interface HowItWorksProps {
    heading: string
    subheading: string
    steps: Step[]
}

export default function HowItWorks({ heading, subheading, steps }: HowItWorksProps) {
    return (
        <Box py={80} bg="gray.0">
            <Container size="xl">
                <Stack gap="xl">
                    <div>
                        <Stack gap="md" align="center" ta="center">
                            <Title order={2}>{heading}</Title>
                            <Text size="lg" c="dimmed" maw={700}>{subheading}</Text>
                        </Stack>
                    </div>

                    <Grid gutter="xl" mt="xl">
                        {steps.map((step, i) => (
                            <GridCol key={i} span={{ base: 12, md: 4 }}>
                                <div>
                                    <Stack align="center" ta="center" gap="md">
                                        <div className={classes.stepNumber}>
                                            {i + 1}
                                        </div>
                                        <Title order={3}>{step.title}</Title>
                                        <Text c="dimmed">{step.description}</Text>
                                    </Stack>
                                </div>
                            </GridCol>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}
