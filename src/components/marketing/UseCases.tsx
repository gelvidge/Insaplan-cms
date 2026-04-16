import classes from './UseCases.module.css'

interface UseCase {
    title: string
    description: string
}

interface UseCasesProps {
    useCases: UseCase[]
    heading?: string
}

function MockScreen({ index }: { index: number }) {
    const variant = index % 3

    return (
        <div className={classes.mock}>
            <div className={classes.mockChrome}>
                <span /><span /><span />
            </div>
            <div className={classes.mockBody}>
                {variant === 0 && (
                    <>
                        <div className={classes.mockSidebar}>
                            <div className={classes.mockSidebarItem} />
                            <div className={classes.mockSidebarItem} />
                            <div className={classes.mockSidebarItem} />
                            <div className={classes.mockSidebarItem} />
                        </div>
                        <div className={classes.mockCanvas}>
                            <div className={classes.mockHeader} />
                            <div className={classes.mockChartRow}>
                                <div className={classes.mockBar} style={{ height: '55%' }} />
                                <div className={classes.mockBar} style={{ height: '80%' }} />
                                <div className={classes.mockBar} style={{ height: '40%' }} />
                                <div className={classes.mockBar} style={{ height: '90%' }} />
                                <div className={classes.mockBar} style={{ height: '65%' }} />
                                <div className={classes.mockBar} style={{ height: '70%' }} />
                            </div>
                            <div className={classes.mockStatRow}>
                                <div className={classes.mockStat} />
                                <div className={classes.mockStat} />
                                <div className={classes.mockStat} />
                            </div>
                        </div>
                    </>
                )}
                {variant === 1 && (
                    <>
                        <div className={classes.mockCanvas} style={{ padding: '16px 18px' }}>
                            <div className={classes.mockDocHeader} />
                            <div className={classes.mockDocLine} style={{ width: '85%' }} />
                            <div className={classes.mockDocLine} style={{ width: '70%' }} />
                            <div className={classes.mockDocLine} style={{ width: '60%' }} />
                            <div className={classes.mockDocBlock} />
                            <div className={classes.mockDocLine} style={{ width: '80%' }} />
                            <div className={classes.mockDocLine} style={{ width: '55%' }} />
                            <div className={classes.mockDocLine} style={{ width: '75%' }} />
                        </div>
                    </>
                )}
                {variant === 2 && (
                    <>
                        <div className={classes.mockSidebar}>
                            <div className={classes.mockSidebarItem} />
                            <div className={classes.mockSidebarItem} />
                            <div className={classes.mockSidebarItem} />
                        </div>
                        <div className={classes.mockCanvas}>
                            <div className={classes.mockSearchBar} />
                            <div className={classes.mockKbCard} />
                            <div className={classes.mockKbCard} style={{ opacity: 0.7 }} />
                            <div className={classes.mockKbCard} style={{ opacity: 0.45 }} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default function UseCases({ useCases, heading = 'Use Cases' }: UseCasesProps) {
    if (!useCases || useCases.length === 0) return null

    return (
        <section className={classes.root}>
            <div className={classes.inner}>
                <h2 className={classes.heading}>{heading}</h2>
                <div className={classes.list}>
                    {useCases.map((uc, i) => {
                        const reversed = i % 2 === 1
                        return (
                            <div
                                key={i}
                                className={`${classes.row} ${reversed ? classes.rowReversed : ''}`}
                            >
                                <div className={classes.textCol}>
                                    <div className={classes.index}>{String(i + 1).padStart(2, '0')}</div>
                                    <h3 className={classes.title}>{uc.title}</h3>
                                    <p className={classes.desc}>{uc.description}</p>
                                </div>

                                <div className={classes.screenCol}>
                                    <MockScreen index={i} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
