import classes from './ProblemsSection.module.css'

interface Problem { problem: string; solution: string }
interface ProblemsSectionProps {
    heading: string
    subheading: string
    problems: Problem[]
}

export default function ProblemsSection({ heading, subheading, problems }: ProblemsSectionProps) {
    return (
        <section className={classes.root}>
            <div className={classes.inner}>
                <div className={classes.header}>
                    <h2 className={classes.heading}>{heading}</h2>
                    <p className={classes.subheading}>{subheading}</p>
                </div>

                <div className={classes.grid}>
                    {problems.map((item, i) => (
                        <div key={i} className={classes.strip}>
                            <div className={classes.beforeSide}>
                                <span className={classes.icon} aria-hidden="true">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                                </span>
                                <p className={classes.beforeText}>{item.problem}</p>
                            </div>
                            <div className={classes.afterSide}>
                                <span className={classes.icon} aria-hidden="true">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5l2.5 3L11 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                                <p className={classes.afterText}>{item.solution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
