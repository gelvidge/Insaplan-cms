import { Container } from '@mantine/core'
import classes from './SolutionHero.module.css'

type Step = {
    label: string
    active?: boolean | null
}

type Props = {
    headline?: string | null
    headlineAccent?: string | null
    body?: string | null
    steps?: Step[] | null
}

export default function SolutionHero({ headline, headlineAccent, body, steps }: Props) {
    let headlineParts: { before: string; accent: string; after: string } | null = null
    if (headline && headlineAccent) {
        const idx = headline.toUpperCase().indexOf(headlineAccent.toUpperCase())
        if (idx !== -1) {
            headlineParts = {
                before: headline.slice(0, idx),
                accent: headline.slice(idx, idx + headlineAccent.length),
                after: headline.slice(idx + headlineAccent.length),
            }
        }
    }

    return (
        <section className={classes.hero}>
            <Container size="xl" className={classes.inner}>
                <div className={classes.layout}>
                    <h1 className={classes.headline}>
                        {headlineParts ? (
                            <>
                                {headlineParts.before}
                                <span className={classes.accent}>{headlineParts.accent}</span>
                                {headlineParts.after}
                            </>
                        ) : (
                            headline ?? 'The Problem'
                        )}
                    </h1>
                    {body && (
                        <p className={classes.bodyText}>{body}</p>
                    )}
                </div>

                {steps && steps.length > 0 && (
                    <div className={classes.steps}>
                        {steps.map((step, i) => (
                            <div key={i} className={classes.step}>
                                <span className={`${classes.stepLabel}${step.active === true ? ` ${classes.active}` : ''}`}>
                                    {step.label}
                                </span>
                                {i < steps.length - 1 && (
                                    <>
                                        <span className={classes.stepArrow} aria-hidden>→</span>
                                        <span className={classes.stepArrowDown} aria-hidden>↓</span>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </section>
    )
}
