import { Container } from '@mantine/core'
import classes from './SolutionHero.module.css'

type Step = {
    label: string
    active?: boolean | null
}

type Props = {
    kicker?: string | null
    headline?: string | null
    headlineAccent?: string | null
    body?: string | null
    steps?: Step[] | null
}

const DEFAULT_STEPS: Step[] = [
    { label: 'Capture Insights' },
    { label: 'Build Plan', active: true },
    { label: 'Track Progress' },
    { label: 'Results Grow' },
]

export default function SolutionHero({ kicker, headline, headlineAccent, body, steps }: Props) {
    const resolvedSteps = steps?.length ? steps : DEFAULT_STEPS

    // Split headline: everything before the accent word, the accent, everything after
    // headlineAccent matches a word/phrase in headline (case-insensitive)
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
                    {/* Left — headline */}
                    <div>
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
                    </div>

                    {/* Right — body text */}
                    <div className={classes.bodyCol}>
                        {body && (
                            <p className={classes.bodyText}>{body}</p>
                        )}
                    </div>
                </div>

                {/* Step flow */}
                <div className={classes.steps}>
                    {resolvedSteps.map((step, i) => (
                        <div key={i} className={classes.step}>
                            <span className={`${classes.stepLabel}${step.active === true ? ` ${classes.active}` : ''}`}>
                                {step.label}
                            </span>
                            {i < resolvedSteps.length - 1 && (
                                <span className={classes.stepArrow} aria-hidden>→</span>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
