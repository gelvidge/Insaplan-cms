import { createTheme, type MantineColorsTuple } from '@mantine/core'

const navy: MantineColorsTuple = [
    '#f0f2f5',
    '#d7deea',
    '#afc0df',
    '#7898d4',
    '#3e6fcb',
    '#2853a4',
    '#213f78',
    '#1a2f57',
    '#111e36',
    '#090f1a',
]

const blue: MantineColorsTuple = [
    '#f0f2f4',
    '#d8dee9',
    '#b2c1dc',
    '#7d9bcf',
    '#4674c3',
    '#2f579d',
    '#254274',
    '#1d3153',
    '#131f34',
    '#0a101a',
]

const indigo: MantineColorsTuple = [
    '#f1f1f4',
    '#dbdce6',
    '#b9bcd5',
    '#8b92c1',
    '#5b66ae',
    '#424b8a',
    '#333966',
    '#262b4a',
    '#191c2e',
    '#0d0e17',
]

const purple: MantineColorsTuple = [
    '#f3f1f4',
    '#e2dae6',
    '#ccb7d6',
    '#af88c4',
    '#9357b2',
    '#733e8e',
    '#563069',
    '#3e244c',
    '#281830',
    '#140c17',
]

const green: MantineColorsTuple = [
    '#f1f3f2',
    '#dce5df',
    '#bbd3c3',
    '#8ebe9d',
    '#60a978',
    '#46865b',
    '#366344',
    '#284832',
    '#1a2d20',
    '#0d1610',
]

export const theme = createTheme({
    primaryColor: 'blue',
    colors: { navy, blue, indigo, purple, green },
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
})
