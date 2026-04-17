import type { Metadata } from 'next'
import { Box, Container, Title, Text, Stack, Grid, GridCol } from '@mantine/core'
import { IconSparkles, IconCheck } from '@tabler/icons-react'
import Background from '@/components/marketing/Background'
import CTASection from '@/components/marketing/CTASection'
import { fetchProductKnowledgeBasePage } from '@/lib/queries'
import classes from './page.module.css'

export async function generateMetadata(): Promise<Metadata> {
    const page = await fetchProductKnowledgeBasePage().catch(() => null)
    const title = page?.seo?.metaTitle ?? page?.heroTitle ?? 'Knowledge Base'
    const description = page?.seo?.metaDescription ?? page?.heroSubtitle ?? ''
    return {
        title,
        description,
        keywords: page?.seo?.keywords?.split(',').map((k: string) => k.trim()).filter(Boolean) ?? [],
        openGraph: { title, description, url: 'https://insaplan.com/product/knowledgebase' },
    }
}

export default async function ProductKnowledgeBasePage() {
    const page = await fetchProductKnowledgeBasePage().catch(() => ({}))

    const capture     = page.capture     ?? {}
    const autoCapture = page.autoCapture ?? {}
    const section3    = page.section3    ?? {}
    const aiQuery     = page.aiQuery     ?? {}
    const insightTags = capture.insightTags ?? []
    const autoPoints  = autoCapture.points  ?? []
    const sec3Points  = section3.points     ?? []
    const qaExamples  = aiQuery.qaExamples  ?? []

    const heroTitle  = page.heroTitle  ?? ''
    const heroAccent = page.heroAccent ?? ''
    const accentIdx  = heroTitle.indexOf(heroAccent)
    const heroBefore = accentIdx > -1 ? heroTitle.slice(0, accentIdx) : heroTitle
    const heroAfter  = accentIdx > -1 ? heroTitle.slice(accentIdx + heroAccent.length) : ''

    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>

                {/* ── Hero ─────────────────────────────────────────────── */}
                <Box className={classes.hero}>
                    <Container size="xl">
                        <Stack gap={0} align="center" ta="center">
                            <h1 className={classes.heroHeadline}>
                                {heroBefore}
                                {heroAccent && <span className={classes.accent}>{heroAccent}</span>}
                                {heroAfter}
                            </h1>
                            <div>
                                <Text className={classes.heroSubtitle} maw={700}>
                                    {page.heroSubtitle}
                                </Text>
                            </div>
                        </Stack>
                    </Container>
                </Box>

                {/* ── What Insaplan captures ───────────────────────────── */}
                <Box className={classes.insightsSection}>
                    <Container size="xl">
                        <Stack gap={48}>
                            <Stack gap="sm" align="center" ta="center">
                                <Text className={classes.sectionKicker}>{capture.kicker}</Text>
                                <Title order={2} className={classes.sectionHeading}>{capture.heading}</Title>
                                <Text size="lg" c="dimmed" maw={680}>{capture.body}</Text>
                            </Stack>
                            <div className={classes.tagCloud}>
                                {insightTags.map((t: { label: string }, i: number) => (
                                    <span key={i} className={classes.tag}>
                                        {t.label}
                                    </span>
                                ))}
                                {capture.tagEtc && (
                                    <span className={classes.tagEtc}>
                                        {capture.tagEtc}
                                    </span>
                                )}
                            </div>
                        </Stack>
                    </Container>
                </Box>

                {/* ── How the knowledgebase builds itself ──────────────── */}
                <Box className={classes.autoSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 40, md: 80 }} align="center">
                            <GridCol span={{ base: 12, md: 5 }}>
                                <div>
                                    <Stack gap="lg">
                                        <Text className={classes.sectionKicker}>{autoCapture.kicker}</Text>
                                        <Title order={2} className={classes.sectionHeading} ta="left">{autoCapture.heading}</Title>
                                        <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>{autoCapture.body}</Text>
                                        <Stack gap="xs" mt="sm">
                                            {autoPoints.map((p: { label: string }, i: number) => (
                                                <div key={i}>
                                                    <Box className={classes.checkRow}>
                                                        <Box className={classes.checkIcon}><IconCheck size={14} /></Box>
                                                        <Text size="sm" c="dark.6">{p.label}</Text>
                                                    </Box>
                                                </div>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </div>
                            </GridCol>

                            <GridCol span={{ base: 12, md: 7 }}>
                                <div>
                                    <Box className={classes.videoWrap}>
                                        <Box className={classes.videoChrome}>
                                            <Box className={classes.videoChromeBar}>
                                                <Box className={classes.videoDot} />
                                                <Box className={classes.videoDot} />
                                                <Box className={classes.videoDot} />
                                            </Box>
                                            <Box className={classes.videoBody}>
                                                <Box className={classes.videoPlaceholder}>
                                                    <svg viewBox="0 0 480 310" className={classes.flowSvg} aria-hidden>
                                                        <defs>
                                                            <filter id="glow2">
                                                                <feGaussianBlur stdDeviation="2.5" result="blur" />
                                                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                                            </filter>
                                                            <filter id="tagGlow">
                                                                <feGaussianBlur stdDeviation="4" result="blur" />
                                                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                                            </filter>
                                                        </defs>
                                                        {([
                                                            { x: 58,  y: 58,  label: 'Infographics'   },
                                                            { x: 240, y: 32,  label: 'Charts'          },
                                                            { x: 422, y: 58,  label: 'Tables'          },
                                                            { x: 240, y: 280, label: 'Plans'           },
                                                            { x: 72,  y: 240, label: 'Reports'         },
                                                            { x: 408, y: 240, label: 'Manual Entries'  },
                                                        ] as { x: number; y: number; label: string }[]).map((node, i) => (
                                                            <g key={`node-${i}`}>
                                                                <line x1={node.x} y1={node.y} x2="240" y2="168" stroke="rgba(167,139,250,0.2)" strokeWidth="1" strokeDasharray="4 5" />
                                                                <rect x={node.x - 54} y={node.y - 15} width="108" height="30" rx="15" fill="rgba(255,255,255,0.07)" stroke="rgba(167,139,250,0.3)" strokeWidth="1" />
                                                                <text x={node.x} y={node.y + 5} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">{node.label}</text>
                                                            </g>
                                                        ))}
                                                        {([
                                                            { sx: 58,  sy: 58,  tag: 'Market Driver',   delay: '0s',   dur: '3s'   },
                                                            { sx: 240, sy: 32,  tag: 'Competitor Intel', delay: '1s',   dur: '2.8s' },
                                                            { sx: 422, sy: 58,  tag: 'Data Trends',      delay: '2s',   dur: '3.2s' },
                                                            { sx: 72,  sy: 240, tag: 'Risk Signal',      delay: '0.5s', dur: '3s'   },
                                                            { sx: 408, sy: 240, tag: 'Strategic Goal',   delay: '1.5s', dur: '2.6s' },
                                                            { sx: 240, sy: 280, tag: 'Plan Insight',     delay: '2.5s', dur: '3s'   },
                                                        ] as { sx: number; sy: number; tag: string; delay: string; dur: string }[]).map((t, i) => (
                                                            <g key={`tag-${i}`} filter="url(#tagGlow)">
                                                                <path id={`tp${i}`} d={`M${t.sx},${t.sy} Q${(t.sx + 240) / 2},${(t.sy + 168) / 2 - 20} 240,168`} fill="none" />
                                                                <g>
                                                                    <animateMotion dur={t.dur} repeatCount="indefinite" begin={t.delay} fill="freeze">
                                                                        <mpath href={`#tp${i}`} />
                                                                    </animateMotion>
                                                                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={t.dur} repeatCount="indefinite" begin={t.delay} />
                                                                    <rect x={-46} y={-12} width="92" height="24" rx="12" fill="rgba(124,58,237,0.35)" stroke="rgba(167,139,250,0.5)" strokeWidth="1" />
                                                                    <text x="0" y="4.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">{t.tag}</text>
                                                                </g>
                                                            </g>
                                                        ))}
                                                        <g transform="translate(240, 155)">
                                                            <path d="M-38,-30 L-4,-26 L-4,30 L-38,26 Z" fill="#a78bfa" stroke="#c4b5fd" strokeWidth="1.5" strokeLinejoin="round" />
                                                            <path d="M4,-26 L38,-30 L38,26 L4,30 Z" fill="#7c3aed" stroke="#c4b5fd" strokeWidth="1.5" strokeLinejoin="round" />
                                                            <path d="M-4,-26 L-4,30 M4,-26 L4,30" stroke="rgba(167,139,250,1)" strokeWidth="3" strokeLinecap="round" />
                                                            <line x1="-32" y1="-12" x2="-8" y2="-10" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                            <line x1="-32" y1="-2"  x2="-8" y2="-1"  stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                            <line x1="-32" y1="8"   x2="-8" y2="8"   stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                            <line x1="-32" y1="18"  x2="-16" y2="18" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
                                                            <line x1="8" y1="-10" x2="32" y2="-12" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                            <line x1="8" y1="-1"  x2="32" y2="-2"  stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                            <line x1="8" y1="8"   x2="32" y2="8"   stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                            <line x1="16" y1="18" x2="32" y2="18"  stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
                                                            <text y="50" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9" fontWeight="700" letterSpacing="1">KNOWLEDGE BASE</text>
                                                        </g>
                                                    </svg>
                                                    <Box className={classes.videoLabel}>
                                                        <IconSparkles size={14} color="white" />
                                                        <Text size="xs" fw={600} c="white">{autoCapture.videoLabel}</Text>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* ── AI Query interface ───────────────────────────────── */}
                <Box className={classes.aiSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 40, md: 80 }} align="center">
                            <GridCol span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
                                <div>
                                    <Box className={classes.videoWrap}>
                                        <Box className={classes.videoChrome}>
                                            <Box className={classes.videoChromeBar}>
                                                <Box className={classes.videoDot} />
                                                <Box className={classes.videoDot} />
                                                <Box className={classes.videoDot} />
                                                <Text size="xs" c="gray.5" ml="auto" fw={500}>Insaplan AI · Knowledge Base</Text>
                                            </Box>
                                            <Box className={classes.aiChatBody}>
                                                <Box className={classes.aiChatScroll}>
                                                    {[...qaExamples, ...qaExamples].map((qa: { question: string; answer: string }, i: number) => (
                                                        <Box key={i} className={classes.aiMessage}>
                                                            <Box className={classes.aiQ}>
                                                                <Text size="sm" c="dark.7">{qa.question}</Text>
                                                            </Box>
                                                            <Box className={classes.aiA}>
                                                                <Text size="xs" c="dark.4" style={{ lineHeight: 1.6 }}>{qa.answer}</Text>
                                                            </Box>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </div>
                            </GridCol>

                            <GridCol span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
                                <div>
                                    <Stack gap="lg">
                                        <Text className={classes.sectionKicker}>{aiQuery.kicker}</Text>
                                        <Title order={2} className={classes.sectionHeading} ta="left">{aiQuery.heading}</Title>
                                        <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>{aiQuery.body}</Text>
                                        <Stack gap="sm">
                                            {qaExamples.map((qa: { question: string; answer: string }, i: number) => (
                                                <Box key={i} className={classes.questionPill}>
                                                    <IconSparkles size={13} style={{ flexShrink: 0, color: 'var(--mantine-color-purple-6)' }} />
                                                    <Text size="sm" c="dark.6">"{qa.question}"</Text>
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* ── Section 3 ───────────────────────────────────────── */}
                <Box className={classes.section3}>
                    <Container size="xl">
                        <Grid gutter={{ base: 40, md: 80 }} align="center">
                            <GridCol span={{ base: 12, md: 5 }}>
                                <div>
                                    <Stack gap="lg">
                                        <Text className={classes.sectionKicker}>{section3.kicker}</Text>
                                        <Title order={2} className={classes.sectionHeading} ta="left">{section3.heading}</Title>
                                        <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>{section3.body}</Text>
                                        <Stack gap="xs" mt="sm">
                                            {sec3Points.map((p: { label: string }, i: number) => (
                                                <div key={i}>
                                                    <Box className={classes.checkRow}>
                                                        <Box className={classes.checkIcon}><IconCheck size={14} /></Box>
                                                        <Text size="sm" c="dark.6">{p.label}</Text>
                                                    </Box>
                                                </div>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </div>
                            </GridCol>

                            <GridCol span={{ base: 12, md: 7 }}>
                                <div>
                                    <Box className={classes.videoWrap}>
                                        <Box className={classes.videoChrome}>
                                            <Box className={classes.videoChromeBar}>
                                                <Box className={classes.videoDot} />
                                                <Box className={classes.videoDot} />
                                                <Box className={classes.videoDot} />
                                            </Box>
                                            <Box className={classes.screenshotBody}>
                                                <Box className={classes.screenshotPlaceholder} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                <CTASection />
            </div>
        </div>
    )
}
