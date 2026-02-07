import { Container, Title, Text, Table, TableThead, TableTbody, TableTr, TableTh, TableTd, Stack, Box, ThemeIcon } from '@mantine/core'
import { IconCheck, IconX, IconAlertCircle } from '@tabler/icons-react'

const comparisonData = [
    { aspect: 'Real-time updates', spreadsheets: false, powerpoint: false, insaplan: true },
    { aspect: 'Searchable insights', spreadsheets: false, powerpoint: false, insaplan: true },
    { aspect: 'Version control', spreadsheets: 'limited' as const, powerpoint: 'limited' as const, insaplan: true },
    { aspect: 'Beautiful reports', spreadsheets: false, powerpoint: true, insaplan: true },
    { aspect: 'AI assistance', spreadsheets: false, powerpoint: false, insaplan: true },
    { aspect: 'Collaboration', spreadsheets: 'limited' as const, powerpoint: 'limited' as const, insaplan: true },
    { aspect: 'Progress tracking', spreadsheets: false, powerpoint: false, insaplan: true },
]

const renderIcon = (value: boolean | string) => {
    if (value === true) {
        return (
            <ThemeIcon color="green.5" size={24} radius="xl" variant="light">
                <IconCheck size={16} />
            </ThemeIcon>
        )
    } else if (value === 'limited') {
        return (
            <ThemeIcon color="yellow.6" size={24} radius="xl" variant="light">
                <IconAlertCircle size={16} />
            </ThemeIcon>
        )
    } else {
        return (
            <ThemeIcon color="red.5" size={24} radius="xl" variant="light">
                <IconX size={16} />
            </ThemeIcon>
        )
    }
}

const ComparisonTable = () => (
    <Box py={80}>
        <Container size="lg">
            <Stack gap="xl">
                <Stack gap="md" align="center" ta="center">
                    <Title order={2}>Why Insaplan vs. Traditional Methods</Title>
                    <Text size="lg" c="dimmed" maw={700}>
                        See how Insaplan compares to traditional planning tools
                    </Text>
                </Stack>

                <Table striped highlightOnHover mt="xl">
                    <TableThead>
                        <TableTr>
                            <TableTh>Aspect</TableTh>
                            <TableTh ta="center">Spreadsheets</TableTh>
                            <TableTh ta="center">PowerPoint</TableTh>
                            <TableTh ta="center">Insaplan</TableTh>
                        </TableTr>
                    </TableThead>
                    <TableTbody>
                        {comparisonData.map((row, index) => (
                            <TableTr key={index}>
                                <TableTd fw={500}>{row.aspect}</TableTd>
                                <TableTd ta="center">{renderIcon(row.spreadsheets)}</TableTd>
                                <TableTd ta="center">{renderIcon(row.powerpoint)}</TableTd>
                                <TableTd ta="center">{renderIcon(row.insaplan)}</TableTd>
                            </TableTr>
                        ))}
                    </TableTbody>
                </Table>
            </Stack>
        </Container>
    </Box>
)

export default ComparisonTable
