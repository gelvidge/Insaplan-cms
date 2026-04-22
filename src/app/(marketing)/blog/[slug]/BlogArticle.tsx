'use client'

import { useRef } from 'react'

export default function BlogArticle({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)

    return (
        <div ref={ref}>
            {children}
        </div>
    )
}
