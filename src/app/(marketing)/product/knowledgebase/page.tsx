'use client'

import { Box, Container, Title, Text, Stack, Grid, GridCol } from '@mantine/core'
import {
    IconSparkles,
    IconCheck,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Background from '@/components/marketing/Background'
import CTA from '@/components/marketing/CTA'
import classes from './page.module.css'

const spring = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: spring } },
}

const fadeLeft = {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: spring } },
}

const fadeRight = {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: spring, delay: 0.1 } },
}

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
}

const tagVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: spring } },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkRowVariant: any = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1, x: 0,
        transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.07 },
    }),
}

// ── Illustrative insight examples (not exhaustive) ───────────────────────────
const INSIGHT_EXAMPLES = [
    'Market Insights', 'Competitor Intel', 'Macroeconomic Influencers',
    'Business Drivers', 'Moderators', 'Strategic Activities',
    'Customer Feedback', 'Regulatory Changes', 'Technology Trends',
    'Sales Performance', 'Operational Risks', 'Partnership Opportunities',
    'Industry Benchmarks', 'Growth Initiatives', 'Product Milestones',
    'Team OKRs', 'Financial KPIs', 'Talent & Culture',
]

// ── AI Q&A pairs ─────────────────────────────────────────────────────────────
const AI_QA = [
    {
        q: 'What strategic activities are we working on in the US this quarter?',
        a: 'There are 4 active strategic activities in the US this quarter: (1) Enterprise channel expansion in the Northeast, (2) Partnership programme with regional SIs, (3) Brand awareness campaign targeting mid-market CFOs, and (4) Pilot rollout of the new onboarding flow. The enterprise expansion is flagged as highest priority.',
    },
    {
        q: 'What are the main business drivers shaping our performance?',
        a: 'Your top 3 business drivers this quarter are: Net Revenue Retention (currently 108%, above target), New Logo Acquisition (tracking 12% below plan), and Gross Margin (holding at 74%). Customer churn in the SMB segment is flagged as a key moderator to watch.',
    },
    {
        q: 'What initiatives is the sales team running to grow the business?',
        a: 'The sales team has 3 active growth initiatives: a mid-market outbound sequence launched in week 2, a win-back programme targeting 28 churned accounts from Q3, and an upsell motion targeting single-product customers. The win-back programme has generated 6 qualified opportunities to date.',
    },
    {
        q: 'What upcoming milestones do we have in our strategic plan?',
        a: '5 milestones are due in the next 60 days: Product v2.4 launch (Apr 28), Board strategy review (May 3), EMEA go-live (May 15), Annual partner summit (May 22), and H2 plan sign-off (Jun 1). The EMEA go-live is currently marked at risk due to a data residency dependency.',
    },
]

// ── AI question examples (for right-column pills) ────────────────────────────
const AI_QUESTIONS = AI_QA.map(qa => qa.q)

export default function ProductKnowledgeBasePage() {
    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>

                {/* ── Hero ─────────────────────────────────────────────── */}
                <Box className={classes.hero}>
                    <Container size="xl">
                        <Stack gap={0} align="center" ta="center">
                            <motion.h1
                                className={classes.heroHeadline}
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.1 }}
                            >
                                Every insight your business generates,{' '}
                                <span className={classes.accent}>always within reach</span>
                            </motion.h1>
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                            >
                                <Text className={classes.heroSubtitle} maw={700}>
                                    Insaplan automatically captures knowledge as you create plans and reports — building
                                    a living intelligence layer your whole team can query in plain language.
                                </Text>
                            </motion.div>
                        </Stack>
                    </Container>
                </Box>

                {/* ── What Insaplan captures ───────────────────────────── */}
                <Box className={classes.insightsSection}>
                    <Container size="xl">
                        <Stack gap={48}>
                            <Stack gap="sm" align="center" ta="center">
                                <Text className={classes.sectionKicker}>What gets captured</Text>
                                <Title order={2} className={classes.sectionHeading}>
                                    Any insight that matters to your business
                                </Title>
                                <Text size="lg" c="dimmed" maw={680}>
                                    Whatever knowledge is relevant to your plan — market signals, competitive moves, internal performance,
                                    operational risks — it all flows to the knowledgebase automatically as you work.
                                </Text>
                            </Stack>

                            <motion.div
                                className={classes.tagCloud}
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {INSIGHT_EXAMPLES.map((label, i) => (
                                    <motion.span key={i} className={classes.tag} variants={tagVariant}>
                                        {label}
                                    </motion.span>
                                ))}
                                <motion.span className={classes.tagEtc} variants={tagVariant}>
                                    and anything else that drives your strategy…
                                </motion.span>
                            </motion.div>
                        </Stack>
                    </Container>
                </Box>

                {/* ── How the knowledgebase builds itself ──────────────── */}
                <Box className={classes.autoSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 40, md: 80 }} align="center">
                            {/* Left — text */}
                            <GridCol span={{ base: 12, md: 5 }}>
                                <motion.div
                                    variants={fadeLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <Stack gap="lg">
                                        <Text className={classes.sectionKicker}>Automatic capture</Text>
                                        <Title order={2} className={classes.sectionHeading} ta="left">
                                            Built as you work — no extra effort
                                        </Title>
                                        <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>
                                            Every infographic, chart, table, and strategic plan you create in Insaplan
                                            automatically flows into your knowledge base. Insights flow
                                            in continuously, so the pool is always current.
                                        </Text>
                                        <Stack gap="xs" mt="sm">
                                            {[
                                                'Plans and reports contribute automatically',
                                                'Structured by category — no manual tagging',
                                                'Accessible to every team member instantly',
                                                'Grows richer the more you use Insaplan',
                                                'Curate by removing out of date insights'
                                            ].map((point, i) => (
                                                <motion.div
                                                    key={i}
                                                    custom={i}
                                                    variants={checkRowVariant}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true, amount: 0.5 }}
                                                >
                                                    <Box className={classes.checkRow}>
                                                        <Box className={classes.checkIcon}>
                                                            <IconCheck size={14} />
                                                        </Box>
                                                        <Text size="sm" c="dark.6">{point}</Text>
                                                    </Box>
                                                </motion.div>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </motion.div>
                            </GridCol>

                            {/* Right — video placeholder */}
                            <GridCol span={{ base: 12, md: 7 }}>
                                <motion.div
                                    variants={fadeRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                <Box className={classes.videoWrap}>
                                    <Box className={classes.videoChrome}>
                                        <Box className={classes.videoChromeBar}>
                                            <Box className={classes.videoDot} />
                                            <Box className={classes.videoDot} />
                                            <Box className={classes.videoDot} />
                                        </Box>
                                        <Box className={classes.videoBody}>
                                            <Box className={classes.videoPlaceholder}>
                                                <Background />
                                                {/* Animated SVG: source content types → travelling insight tags → book icon */}
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

                                                    {/*
                                                      ── Source nodes (content types that feed the KB) ──
                                                      Positioned at corners + top-centre
                                                    */}
                                                    {([
                                                        { x: 58,  y: 58,  label: 'Infographics' },
                                                        { x: 240, y: 32,  label: 'Charts' },
                                                        { x: 422, y: 58,  label: 'Tables' },
                                                        { x: 240, y: 280, label: 'Plans' },
                                                        { x: 72,  y: 240, label: 'Reports' },
                                                        { x: 408, y: 240, label: 'Manual Entries' },
                                                    ] as { x: number; y: number; label: string }[]).map((node, i) => (
                                                        <g key={`node-${i}`}>
                                                            {/* Dashed connector to centre */}
                                                            <line
                                                                x1={node.x} y1={node.y}
                                                                x2="240" y2="168"
                                                                stroke="rgba(167,139,250,0.2)"
                                                                strokeWidth="1"
                                                                strokeDasharray="4 5"
                                                            />
                                                            {/* Source pill */}
                                                            <rect
                                                                x={node.x - 54} y={node.y - 15}
                                                                width="108" height="30"
                                                                rx="15"
                                                                fill="rgba(255,255,255,0.07)"
                                                                stroke="rgba(167,139,250,0.3)"
                                                                strokeWidth="1"
                                                            />
                                                            <text x={node.x} y={node.y + 5} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="600">
                                                                {node.label}
                                                            </text>
                                                        </g>
                                                    ))}

                                                    {/*
                                                      ── Travelling insight tags ──
                                                      Each travels from a source node to the book centre.
                                                      Labels are example insight types, not source types.
                                                    */}
                                                    {([
                                                        { sx: 58,  sy: 58,  tag: 'Market Driver',   delay: '0s',    dur: '3s'   },
                                                        { sx: 240, sy: 32,  tag: 'Competitor Intel', delay: '1s',    dur: '2.8s' },
                                                        { sx: 422, sy: 58,  tag: 'Data Trends',      delay: '2s',    dur: '3.2s' },
                                                        { sx: 72,  sy: 240, tag: 'Risk Signal',      delay: '0.5s',  dur: '3s'   },
                                                        { sx: 408, sy: 240, tag: 'Strategic Goal',   delay: '1.5s',  dur: '2.6s' },
                                                        { sx: 240, sy: 280, tag: 'Plan Insight',     delay: '2.5s',  dur: '3s'   },
                                                    ] as { sx: number; sy: number; tag: string; delay: string; dur: string }[]).map((t, i) => (
                                                        <g key={`tag-${i}`} filter="url(#tagGlow)">
                                                            {/* Hidden path for animateMotion */}
                                                            <path id={`tp${i}`} d={`M${t.sx},${t.sy} Q${(t.sx + 240) / 2},${(t.sy + 168) / 2 - 20} 240,168`} fill="none" />
                                                            <g>
                                                                <animateMotion dur={t.dur} repeatCount="indefinite" begin={t.delay} fill="freeze">
                                                                    <mpath href={`#tp${i}`} />
                                                                </animateMotion>
                                                                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={t.dur} repeatCount="indefinite" begin={t.delay} />
                                                                {/* Tag pill — semi-transparent */}
                                                                <rect x={-46} y={-12} width="92" height="24" rx="12"
                                                                    fill="rgba(124,58,237,0.35)" stroke="rgba(167,139,250,0.5)" strokeWidth="1" />
                                                                <text x="0" y="4.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">
                                                                    {t.tag}
                                                                </text>
                                                            </g>
                                                        </g>
                                                    ))}

                                                    {/* ── Central open-book icon ── */}
                                                    <g transform="translate(240, 155)">
                                                        {/* Left cover */}
                                                        <path d="M-38,-30 L-4,-26 L-4,30 L-38,26 Z"
                                                            fill="#a78bfa" stroke="#c4b5fd" strokeWidth="1.5" strokeLinejoin="round" />
                                                        {/* Right cover */}
                                                        <path d="M4,-26 L38,-30 L38,26 L4,30 Z"
                                                            fill="#7c3aed" stroke="#c4b5fd" strokeWidth="1.5" strokeLinejoin="round" />
                                                        {/* Spine */}
                                                        <path d="M-4,-26 L-4,30 M4,-26 L4,30"
                                                            stroke="rgba(167,139,250,1)" strokeWidth="3" strokeLinecap="round" />
                                                        {/* Page lines — left */}
                                                        <line x1="-32" y1="-12" x2="-8" y2="-10" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                        <line x1="-32" y1="-2"  x2="-8" y2="-1"  stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                        <line x1="-32" y1="8"   x2="-8" y2="8"   stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                        <line x1="-32" y1="18"  x2="-16" y2="18" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
                                                        {/* Page lines — right */}
                                                        <line x1="8" y1="-10" x2="32" y2="-12" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                        <line x1="8" y1="-1"  x2="32" y2="-2"  stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                        <line x1="8" y1="8"   x2="32" y2="8"   stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" />
                                                        <line x1="16" y1="18" x2="32" y2="18"  stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
                                                        {/* Label */}
                                                        <text y="50" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9" fontWeight="700" letterSpacing="1">
                                                            KNOWLEDGE BASE
                                                        </text>
                                                    </g>
                                                </svg>

                                                <Box className={classes.videoLabel}>
                                                    <IconSparkles size={14} color="white" />
                                                    <Text size="xs" fw={600} c="white">Continuous capture — no manual effort</Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                </motion.div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* ── AI Query interface ───────────────────────────────── */}
                <Box className={classes.aiSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 40, md: 80 }} align="center">
                            {/* Left — AI chat UI */}
                            <GridCol span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
                                <motion.div
                                    variants={fadeLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                <Box className={classes.videoWrap}>
                                    <Box className={classes.videoChrome}>
                                        <Box className={classes.videoChromeBar}>
                                            <Box className={classes.videoDot} />
                                            <Box className={classes.videoDot} />
                                            <Box className={classes.videoDot} />
                                            <Text size="xs" c="gray.5" ml="auto" fw={500}>Insaplan AI · Knowledge Base</Text>
                                        </Box>
                                        <Box className={classes.aiChatBody}>
                                            {/* Duplicate the list so the scroll loop is seamless */}
                                            <Box className={classes.aiChatScroll}>
                                                {[...AI_QA, ...AI_QA].map((qa, i) => (
                                                    <Box key={i} className={classes.aiMessage}>
                                                        <Box className={classes.aiQ}>
                                                            <Text size="sm" c="dark.7">{qa.q}</Text>
                                                        </Box>
                                                        <Box className={classes.aiA}>
                                                            <Text size="xs" c="dark.4" style={{ lineHeight: 1.6 }}>{qa.a}</Text>
                                                        </Box>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                </motion.div>
                            </GridCol>

                            {/* Right — text */}
                            <GridCol span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
                                <motion.div
                                    variants={fadeRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <Stack gap="lg">
                                        <Text className={classes.sectionKicker}>AI-powered querying</Text>
                                        <Title order={2} className={classes.sectionHeading} ta="left">
                                            Ask your business anything, in plain language
                                        </Title>
                                        <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>
                                            Your knowledge base becomes a conversational intelligence layer.
                                            Ask questions across all your plans, reports, and captured insights —
                                            and get precise, sourced answers instantly.
                                        </Text>
                                        <Stack gap="sm">
                                            {AI_QUESTIONS.map((q, i) => (
                                                <Box key={i} className={classes.questionPill}>
                                                    <IconSparkles size={13} style={{ flexShrink: 0, color: 'var(--mantine-color-purple-6)' }} />
                                                    <Text size="sm" c="dark.6">"{q}"</Text>
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </motion.div>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                <CTA />
            </div>
        </div>
    )
}
