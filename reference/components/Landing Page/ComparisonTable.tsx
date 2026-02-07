import { Container, Title, Text, Table, Stack, Box, ThemeIcon } from '@mantine/core';
import { IconCheck, IconX, IconAlertCircle } from '@tabler/icons-react';

const comparisonData = [
    {
        aspect: 'Real-time updates',
        spreadsheets: false,
        powerpoint: false,
        insaplan: true
    },
    {
        aspect: 'Searchable insights',
        spreadsheets: false,
        powerpoint: false,
        insaplan: true
    },
    {
        aspect: 'Version control',
        spreadsheets: 'limited',
        powerpoint: 'limited',
        insaplan: true
    },
    {
        aspect: 'Beautiful reports',
        spreadsheets: false,
        powerpoint: true,
        insaplan: true
    },
    {
        aspect: 'AI assistance',
        spreadsheets: false,
        powerpoint: false,
        insaplan: true
    },
    {
        aspect: 'Collaboration',
        spreadsheets: 'limited',
        powerpoint: 'limited',
        insaplan: true
    },
    {
        aspect: 'Progress tracking',
        spreadsheets: false,
        powerpoint: false,
        insaplan: true
    }
];

const renderIcon = (value: boolean | string) => {
    if (value === true) {
        return (
            <ThemeIcon color="green.5" size={24} radius="xl" variant="light">
                <IconCheck size={16} />
            </ThemeIcon>
        );
    } else if (value === 'limited') {
        return (
            <ThemeIcon color="yellow.6" size={24} radius="xl" variant="light">
                <IconAlertCircle size={16} />
            </ThemeIcon>
        );
    } else {
        return (
            <ThemeIcon color="red.5" size={24} radius="xl" variant="light">
                <IconX size={16} />
            </ThemeIcon>
        );
    }
};

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
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Aspect</Table.Th>
                            <Table.Th ta="center">Spreadsheets</Table.Th>
                            <Table.Th ta="center">PowerPoint</Table.Th>
                            <Table.Th ta="center">Insaplan</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {comparisonData.map((row, index) => (
                            <Table.Tr key={index}>
                                <Table.Td fw={500}>{row.aspect}</Table.Td>
                                <Table.Td ta="center">{renderIcon(row.spreadsheets)}</Table.Td>
                                <Table.Td ta="center">{renderIcon(row.powerpoint)}</Table.Td>
                                <Table.Td ta="center">{renderIcon(row.insaplan)}</Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </Stack>
        </Container>
    </Box>
);

export default ComparisonTable;
