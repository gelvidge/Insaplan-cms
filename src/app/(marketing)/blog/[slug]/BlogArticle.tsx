'use client'

import { useEffect, useRef } from 'react'
import classes from './page.module.css'

// Variants cycle through for each injected placeholder
const VARIANTS = ['chart', 'doc', 'nodes'] as const
type Variant = typeof VARIANTS[number]

function InlineMockImage({ variant, side }: { variant: Variant; side: 'left' | 'right' }) {
    return (
        <div className={`${classes.inlineMock} ${side === 'right' ? classes.inlineMockRight : ''}`}>
            <div className={classes.inlineMockOrb} />
            {variant === 'chart' && (
                <div className={classes.inlineBars}>
                    {[60, 85, 45, 95, 70, 80, 55].map((h, i) => (
                        <div key={i} className={classes.inlineBar} style={{ height: `${h}%` }} />
                    ))}
                </div>
            )}
            {variant === 'doc' && (
                <div className={classes.inlineDocLines}>
                    <div className={classes.inlineDocHeading} />
                    <div className={classes.inlineDocLine} style={{ width: '80%' }} />
                    <div className={classes.inlineDocLine} style={{ width: '65%' }} />
                    <div className={classes.inlineDocBlock} />
                    <div className={classes.inlineDocLine} style={{ width: '75%' }} />
                </div>
            )}
            {variant === 'nodes' && (
                <>
                    <div className={classes.inlineNode} style={{ top: '35%', left: '50%' }} />
                    <div className={classes.inlineNode} style={{ top: '60%', left: '25%', width: 8, height: 8 }} />
                    <div className={classes.inlineNode} style={{ top: '25%', left: '28%', width: 7, height: 7 }} />
                    <div className={classes.inlineNode} style={{ top: '55%', left: '70%', width: 9, height: 9 }} />
                    <div className={classes.inlineConnector} style={{ top: '37%', left: '26%', width: 80, transform: 'rotate(22deg)' }} />
                    <div className={classes.inlineConnector} style={{ top: '37%', left: '51%', width: 70, transform: 'rotate(35deg)' }} />
                    <div className={classes.inlineConnector} style={{ top: '37%', left: '51%', width: 55, transform: 'rotate(-20deg)' }} />
                </>
            )}
        </div>
    )
}

// Inject image placeholders after every Nth <h2> heading in the rendered article
export default function BlogArticle({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const article = ref.current
        if (!article) return

        const headings = Array.from(article.querySelectorAll('h2'))
        // Place after heading index 0, 2, 4 (every other h2)
        const insertAfter = [0, 2, 4]

        insertAfter.forEach((headingIndex, i) => {
            const h2 = headings[headingIndex]
            if (!h2) return

            // Don't double-inject
            if (h2.nextSibling && (h2.nextSibling as HTMLElement).classList?.contains('blog-inline-img')) return

            const variant = VARIANTS[i % VARIANTS.length]
            const side = i % 2 === 0 ? 'left' : 'right'

            const wrapper = document.createElement('div')
            wrapper.className = `blog-inline-img ${classes.inlineMock} ${side === 'right' ? classes.inlineMockRight : ''}`

            // Build inner content
            wrapper.innerHTML = `<div class="${classes.inlineMockOrb}"></div>`

            if (variant === 'chart') {
                const bars = [60, 85, 45, 95, 70, 80, 55]
                const barsEl = document.createElement('div')
                barsEl.className = classes.inlineBars
                bars.forEach(h => {
                    const bar = document.createElement('div')
                    bar.className = classes.inlineBar
                    bar.style.height = `${h}%`
                    barsEl.appendChild(bar)
                })
                wrapper.appendChild(barsEl)
            } else if (variant === 'doc') {
                const doc = document.createElement('div')
                doc.className = classes.inlineDocLines
                doc.innerHTML = `
                    <div class="${classes.inlineDocHeading}"></div>
                    <div class="${classes.inlineDocLine}" style="width:80%"></div>
                    <div class="${classes.inlineDocLine}" style="width:65%"></div>
                    <div class="${classes.inlineDocBlock}"></div>
                    <div class="${classes.inlineDocLine}" style="width:75%"></div>
                `
                wrapper.appendChild(doc)
            } else {
                wrapper.innerHTML += `
                    <div class="${classes.inlineNode}" style="top:35%;left:50%"></div>
                    <div class="${classes.inlineNode}" style="top:60%;left:25%;width:8px;height:8px"></div>
                    <div class="${classes.inlineNode}" style="top:25%;left:28%;width:7px;height:7px"></div>
                    <div class="${classes.inlineNode}" style="top:55%;left:70%;width:9px;height:9px"></div>
                    <div class="${classes.inlineConnector}" style="top:37%;left:26%;width:80px;transform:rotate(22deg)"></div>
                    <div class="${classes.inlineConnector}" style="top:37%;left:51%;width:70px;transform:rotate(35deg)"></div>
                    <div class="${classes.inlineConnector}" style="top:37%;left:51%;width:55px;transform:rotate(-20deg)"></div>
                `
            }

            h2.insertAdjacentElement('afterend', wrapper)
        })

        return () => {
            // Cleanup on unmount
            article.querySelectorAll('.blog-inline-img').forEach(el => el.remove())
        }
    }, [])

    return (
        <div ref={ref}>
            {children}
        </div>
    )
}
