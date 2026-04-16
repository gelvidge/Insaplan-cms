import classes from './ProblemsSection.module.css'

interface Problem { problem: string; solution: string }
interface ProblemsSectionProps {
    heading: string
    subheading: string
    problems: Problem[]
}

export default function ProblemsSection({ problems }: ProblemsSectionProps) {
    return (
        <section className={classes.root}>
            <div className={classes.inner}>
                {/* Column labels */}
                <div className={classes.colRow} aria-hidden="true">
                    <div className={classes.colLabelBefore}>Current reality</div>
                    <div className={classes.colGap} />
                    <div className={classes.colLabelAfter}>With Insaplan</div>
                </div>

                {/* Rows */}
                {problems.map((item, i) => (
                    <div key={i} className={classes.row}>
                        <div className={classes.problemCell}>
                            <span className={classes.xDot} aria-hidden="true" />
                            <p className={classes.problemText}>{item.problem}</p>
                        </div>

                        <div className={classes.arrow} aria-hidden="true">
                            <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                                <path d="M0 6h24M18 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <div className={classes.solutionCell}>
                            <span className={classes.checkDot} aria-hidden="true" />
                            <p className={classes.solutionText}>{item.solution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
