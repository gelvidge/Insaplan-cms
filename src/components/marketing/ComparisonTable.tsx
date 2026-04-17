import {
    Container,
    Title,
    Text,
    Table,
    TableThead,
    TableTbody,
    TableTr,
    TableTh,
    TableTd,
    Stack,
    Box,
    ThemeIcon,
} from '@mantine/core'
import { IconCheck, IconX, IconAlertCircle } from '@tabler/icons-react'

type CellValue = 'true' | 'false' | 'limited'

const renderIcon = (value: CellValue) => {
    if (value === 'true') {
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

type CmsRow = {
    aspect: string
    values?: Array<{ value: CellValue }> | null
}

type SectionData = {
    heading?: string | null
    subheading?: string | null
    columns?: Array<{ label: string }> | null
    rows?: CmsRow[] | null
}

type Props = { data?: SectionData | null }

const ComparisonTable = ({ data }: Props) => {
    const heading = data?.heading
    const subheading = data?.subheading
    const columns = (data?.columns ?? []).map((c) => c.label)
    const rows = (data?.rows ?? []).map((r) => ({
        aspect: r.aspect,
        values: (r.values ?? []).map((v) => v.value),
    }))

    return (
        <Box py={80} bg="gray.0" style={{ borderTop: '1px solid rgba(20,28,48,0.06)' }}>
            <Container size="lg">
                <Stack gap="xl">
                    <Stack gap="md" align="center" ta="center">
                        <Title order={2} c="navy.9">{heading}</Title>
                        <Text size="lg" c="rgba(20,36,70,0.6)" maw={700}>
                            {subheading}
                        </Text>
                    </Stack>

                    <Table
                        striped
                        stripedColor="gray.1"
                        highlightOnHover
                        highlightOnHoverColor="navy.0"
                        borderColor="rgba(20,28,48,0.07)"
                        mt="xl"
                    >
                        <TableThead>
                            <TableTr>
                                <TableTh c="navy.9">Aspect</TableTh>
                                {columns.map((col) => (
                                    <TableTh key={col} ta="center" c="navy.9">
                                        {col}
                                    </TableTh>
                                ))}
                            </TableTr>
                        </TableThead>
                        <TableTbody>
                            {rows.map((row, index) => (
                                <TableTr key={index}>
                                    <TableTd fw={500} c="navy.9">{row.aspect}</TableTd>
                                    {row.values.map((value, vIndex) => (
                                        <TableTd key={vIndex} ta="center">
                                            {renderIcon(value as CellValue)}
                                        </TableTd>
                                    ))}
                                </TableTr>
                            ))}
                        </TableTbody>
                    </Table>
                </Stack>
            </Container>
        </Box>
    )
}

export default ComparisonTable
