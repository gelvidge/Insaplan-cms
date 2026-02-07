import type { Metadata } from 'next'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import './globals.css'

export const metadata: Metadata = {
    title: 'Insaplan',
    description: 'AI-Powered Strategy Execution Platform',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>{children}</body>
        </html>
    )
}
