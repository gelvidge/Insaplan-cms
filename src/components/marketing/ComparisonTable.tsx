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

// ---------------------------------------------------------------------------
// DEPRECATED: hardcoded comparison data — enter rows and columns in the CMS
// under Marketing > Marketing Pages > Comparison Table tab, then remove
// this block.
// ---------------------------------------------------------------------------
const DEPRECATED_columns = ['Spreadsheets', 'PowerPoint', 'Insaplan']

const DEPRECATED_rows: Array<{
    aspect: string
    values: Array<'true' | 'false' | 'limited'>
}> = [
    { aspect: 'Real-time updates', values: ['false', 'false', 'true'] },
    { aspect: 'Searchable insights', values: ['false', 'false', 'true'] },
    { aspect: 'Version control', values: ['limited', 'limited', 'true'] },
    { aspect: 'Beautiful reports', values: ['false', 'true', 'true'] },
    { aspect: 'AI assistance', values: ['false', 'false', 'true'] },
    { aspect: 'Collaboration', values: ['limited', 'limited', 'true'] },
    { aspect: 'Progress tracking', values: ['false', 'false', 'true'] },
]
// ---------------------------------------------------------------------------

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
    const heading = data?.heading ?? 'Why Insaplan vs. Traditional Methods'
    const subheading =
        data?.subheading ?? 'See how Insaplan compares to traditional planning tools'

    const hasCmsData =
        data?.columns && data.columns.length > 0 && data?.rows && data.rows.length > 0

    const columns = hasCmsData
        ? data!.columns!.map((c) => c.label)
        : DEPRECATED_columns

    const rows = hasCmsData
        ? data!.rows!.map((r) => ({
              aspect: r.aspect,
              values: (r.values ?? []).map((v) => v.value),
          }))
        : DEPRECATED_rows

    return (
        <Box py={80} bg="gray.0" style={{ borderTop: '1px solid rgba(20,28,48,0.06)' }}>
            <Container size="lg">
                <Stack gap="xl">
                    <Stack gap="md" align="center" ta="center">
                        <Title order={2}>{heading}</Title>
                        <Text size="lg" c="dimmed" maw={700}>
                            {subheading}
                        </Text>
                    </Stack>

                    <Table striped highlightOnHover mt="xl">
                        <TableThead>
                            <TableTr>
                                <TableTh>Aspect</TableTh>
                                {columns.map((col) => (
                                    <TableTh key={col} ta="center">
                                        {col}
                                    </TableTh>
                                ))}
                            </TableTr>
                        </TableThead>
                        <TableTbody>
                            {rows.map((row, index) => (
                                <TableTr key={index}>
                                    <TableTd fw={500}>{row.aspect}</TableTd>
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
