import { Box, Container, Title, Text, Stack, Grid, GridCol, ThemeIcon } from '@mantine/core'
import {
    IconChartBar,
    IconTimeline,
    IconCheck,
    IconChartPie,
    IconChartLine,
    IconChartArea,
    IconChartBubble,
    IconChartRadar,
    IconChartHistogram,
    IconChartTreemap,
    IconChartScatter,
    IconMap,
    IconGrid4x4,
    IconSitemap,
    IconLetterW,
    IconTable,
    IconTableColumn,
    IconTableRow,
    IconTableOptions,
    IconTableExport,
    IconFreezeColumn,
    IconFreezeRow,
    IconSortAscending,
    IconFilter,
    IconStack2,
    IconColumns,
    IconRoute,
} from '@tabler/icons-react'
import { IconLollipop }      from '@/components/icons/IconLollipop'
import { IconMekko }         from '@/components/icons/IconMekko'
import { IconBoxPlot }       from '@/components/icons/IconBoxPlot'
import { IconStackedBars }   from '@/components/icons/IconStackedBars'
import { IconGroupedBars }   from '@/components/icons/IconGroupedBars'
import { IconBiDirectional } from '@/components/icons/IconBiDirectional'
import { IconWaterfall }     from '@/components/icons/IconWaterfall'
import { IconDonutCustom }   from '@/components/icons/IconDonutCustom'
import { IconChordCustom }   from '@/components/icons/IconChordCustom'
import { IconSankey }        from '@/components/icons/IconSankey'
import { IconSunburst }      from '@/components/icons/IconSunburst'
import { IconFunnel }        from '@/components/icons/IconFunnel'
import Background from '@/components/marketing/Background'
import PageHero from '@/components/marketing/PageHero'
import CTA from '@/components/marketing/CTA'
import SolutionChallenges from '@/components/marketing/SolutionChallenges'
import classes from './page.module.css'

// ── Pain points ───────────────────────────────────────────────────────────────
const PAIN_POINTS = [
    { icon: 'presentation', title: 'Slide creation is too slow', description: 'Constantly building slides to communicate your activities?',  color: '124,58,237'  },
    { icon: 'moodsad',      title: 'Visuals lack impact', description: 'Slides lacking creative and visual impact?',                   color: '34,139,230'  },
    { icon: 'chart',        title: 'Charts are hard to build', description: 'Unable to build the charts you require in spreadsheets?',      color: '34,197,94'   },
    { icon: 'dashboard',    title: 'Framework choice is unclear', description: 'Unsure on the best business framework to convey your plans?',  color: '251,146,60'  },
    { icon: 'spreadsheet',  title: 'Spreadsheets feel boring', description: 'Need to make boring spreadsheets engaging?',                   color: '236,72,153'  },
    { icon: 'timeline',     title: 'Plan tracking is messy', description: 'Tracking strategic plans in spreadsheets?',                    color: '20,184,166'  },
]

// ── Chart types ───────────────────────────────────────────────────────────────
const CHART_TYPES = [
    { icon: IconChartArea,     label: 'Area' },
    { icon: IconGroupedBars,   label: 'Grouped Bar' },
    { icon: IconStackedBars,   label: 'Stacked Bar' },
    { icon: IconBiDirectional, label: 'Tornado' },
    { icon: IconBoxPlot,       label: 'Box Plot' },
    { icon: IconChartPie,      label: 'Pie' },
    { icon: IconDonutCustom,   label: 'Donut' },
    { icon: IconLollipop,      label: 'Lollipop' },
    { icon: IconChartScatter,  label: 'Scatterplot' },
    { icon: IconChartBubble,   label: 'Bubble' },
    { icon: IconChordCustom,   label: 'Chord' },
    { icon: IconSitemap,       label: 'Dendrogram' },
    { icon: IconMap,           label: 'Maps' },
    { icon: IconGrid4x4,       label: 'Heatmap' },
    { icon: IconChartHistogram,label: 'Histogram' },
    { icon: IconChartLine,     label: 'Line' },
    { icon: IconMekko,         label: 'Mekko' },
    { icon: IconChartRadar,    label: 'Radar' },
    { icon: IconSankey,        label: 'Sankey' },
    { icon: IconSunburst,      label: 'Sunburst' },
    { icon: IconChartTreemap,  label: 'Treemap' },
    { icon: IconTable,         label: 'Summary Table' },
    { icon: IconLetterW,       label: 'Word Cloud' },
    { icon: IconWaterfall,     label: 'Waterfall' },
    { icon: IconFunnel,        label: 'Funnel' },
]

// ── Infographic capabilities ──────────────────────────────────────────────────
const INFOGRAPHIC_CAPABILITIES = [
    'Drag-and-drop visual builder with no design skills required',
    'Business framework templates (SWOT, Porter\'s Five Forces, McKinsey 7-S, and more)',
    'Custom colour palettes and brand asset integration',
    'Export-ready outputs in PDF and image formats',
    'Animated reveal mode for live presentations',
]

// ── Charting capabilities ─────────────────────────────────────────────────────
const CHARTING_CAPABILITIES = [
    'Connect directly to your Insaplan data — no copy-paste',
    'Auto-select the best chart type for your dataset',
    'Interactive tooltips and drill-down for stakeholder review',
    'Annotations, trend lines, and targets overlaid on any chart',
    'One-click format switching between chart families',
]

// ── Table capabilities ────────────────────────────────────────────────────────
const TABLE_CAPABILITIES = [
    'Conditional formatting to surface risks, statuses, and priorities at a glance',
    'Freeze rows and columns to keep context while scrolling large datasets',
    'Sort, filter, and group by any field — without touching a formula',
    'Inline sparklines and progress bars embedded directly in cells',
    'Export to Excel, CSV, or PDF in a single click',
]

const TABLE_FEATURES = [
    { icon: IconFreezeRow,     label: 'Freeze Rows' },
    { icon: IconFreezeColumn,  label: 'Freeze Columns' },
    { icon: IconSortAscending, label: 'Sort & Group' },
    { icon: IconFilter,        label: 'Filters' },
    { icon: IconTableColumn,   label: 'Custom Columns' },
    { icon: IconTableRow,      label: 'Row Grouping' },
    { icon: IconTableOptions,  label: 'Conditional Format' },
    { icon: IconTableExport,   label: 'Export' },
]

// ── Plan view capabilities ────────────────────────────────────────────────────
const PLAN_CAPABILITIES = [
    'Gantt view for timeline and dependency management',
    'Kanban board for task and workstream tracking',
    'Explorer view for a high-level strategic map across all plans',
    'Switch between views instantly — same data, different lens',
    'Share any view as a shareable link or export to PDF',
]

// ── Reusable 3-card visual stack ──────────────────────────────────────────────
function VisualStack({ cards }: { cards: { label: string; content: React.ReactNode }[] }) {
    return (
        <Box className={classes.visualsWrap}>
            <Box className={classes.visualsGrid}>
                {cards.map((card, i) => (
                    <Box key={i} className={`${classes.visualCard} ${classes[`visualCard${i + 1}` as keyof typeof classes]}`}>
                        <Box className={classes.visualChrome}>
                            <span className={classes.visualChromeTitle}>{card.label}</span>
                            <Box className={classes.visualControls}>
                                <Box className={classes.visualControl} />
                                <Box className={classes.visualControl} />
                            </Box>
                        </Box>
                        <Box className={classes.visualBody} aria-hidden="true">
                            <Box className={classes.visualPlaceholder}>
                                {card.content}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

// ── SVG mock screens ──────────────────────────────────────────────────────────

// Infographic: SWOT framework mock
const InfographicSwot = (
    <svg viewBox="0 0 300 200" className={classes.cardSvg}>
        <rect width="300" height="200" fill="rgba(248,248,252,0.9)" />
        <text x="150" y="18" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="2">SWOT ANALYSIS</text>
        {/* Quadrant lines */}
        <line x1="150" y1="28" x2="150" y2="196" stroke="rgba(124,58,237,0.2)" strokeWidth="1" />
        <line x1="10"  y1="112" x2="290" y2="112" stroke="rgba(124,58,237,0.2)" strokeWidth="1" />
        {/* Quadrant labels */}
        {[
            { x: 12,  y: 30,  label: 'Strengths',   fill: 'rgba(34,139,230,0.08)'  },
            { x: 152, y: 30,  label: 'Weaknesses',  fill: 'rgba(239,68,68,0.07)'   },
            { x: 12,  y: 114, label: 'Opportunities',fill:'rgba(34,197,94,0.07)'   },
            { x: 152, y: 114, label: 'Threats',      fill: 'rgba(251,146,60,0.08)' },
        ].map((q, i) => (
            <g key={i}>
                <rect x={q.x} y={q.y} width="136" height="80" rx="4" fill={q.fill} stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                <text x={q.x + 8} y={q.y + 14} fontSize="7" fontWeight="700" fill="rgba(0,0,0,0.55)">{q.label}</text>
                <rect x={q.x + 8} y={q.y + 22} width="80" height="4" rx="2" fill="rgba(0,0,0,0.1)" />
                <rect x={q.x + 8} y={q.y + 30} width="60" height="4" rx="2" fill="rgba(0,0,0,0.07)" />
                <rect x={q.x + 8} y={q.y + 38} width="70" height="4" rx="2" fill="rgba(0,0,0,0.07)" />
            </g>
        ))}
    </svg>
)

// Infographic: Porter's five forces
const InfographicForces = (
    <svg viewBox="0 0 220 180" className={classes.cardSvg}>
        <rect width="220" height="180" fill="rgba(248,248,252,0.9)" />
        <text x="110" y="16" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="1.5">PORTER'S FIVE FORCES</text>
        {/* Centre */}
        <ellipse cx="110" cy="95" rx="32" ry="24" fill="rgba(124,58,237,0.14)" stroke="rgba(124,58,237,0.4)" strokeWidth="1.2" />
        <text x="110" y="91"  textAnchor="middle" fontSize="6.5" fontWeight="700" fill="rgba(80,20,180,0.8)">Industry</text>
        <text x="110" y="101" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="rgba(80,20,180,0.8)">Rivalry</text>
        {/* Satellite nodes */}
        {[
            { cx: 110, cy: 32,  label: 'New Entrants'   },
            { cx: 190, cy: 95,  label: 'Buyers'          },
            { cx: 110, cy: 160, label: 'Substitutes'     },
            { cx: 30,  cy: 95,  label: 'Suppliers'       },
        ].map((n, i) => (
            <g key={i}>
                <line x1={n.cx} y1={n.cy} x2="110" y2="95" stroke="rgba(124,58,237,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <ellipse cx={n.cx} cy={n.cy} rx="26" ry="17" fill="rgba(34,139,230,0.1)" stroke="rgba(34,139,230,0.35)" strokeWidth="1" />
                <text x={n.cx} y={n.cy + 4} textAnchor="middle" fontSize="6" fontWeight="600" fill="rgba(0,0,80,0.7)">{n.label}</text>
            </g>
        ))}
    </svg>
)

// Infographic: icon+stat tiles
const InfographicStats = (
    <svg viewBox="0 0 260 160" className={classes.cardSvg}>
        <rect width="260" height="160" fill="rgba(248,248,252,0.9)" />
        <text x="130" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="2">STRATEGIC HIGHLIGHTS</text>
        {[
            { x: 12,  y: 26, val: '94%',  label: 'Plan Adoption',  color: 'rgba(124,58,237,0.12)', stroke: 'rgba(124,58,237,0.35)' },
            { x: 96,  y: 26, val: '3.2×',  label: 'Exec Efficiency', color: 'rgba(34,139,230,0.1)', stroke: 'rgba(34,139,230,0.35)' },
            { x: 178, y: 26, val: '28%',  label: 'Faster Reporting', color: 'rgba(34,197,94,0.1)', stroke:'rgba(34,197,94,0.4)' },
            { x: 12,  y: 95, val: '12',   label: 'Frameworks',     color: 'rgba(251,146,60,0.1)', stroke:'rgba(251,146,60,0.35)' },
            { x: 96,  y: 95, val: '100+', label: 'Templates',      color: 'rgba(124,58,237,0.08)',stroke:'rgba(124,58,237,0.25)' },
            { x: 178, y: 95, val: '∞',    label: 'Customisation',  color: 'rgba(34,139,230,0.08)',stroke:'rgba(34,139,230,0.25)' },
        ].map((tile, i) => (
            <g key={i}>
                <rect x={tile.x} y={tile.y} width="72" height="58" rx="6" fill={tile.color} stroke={tile.stroke} strokeWidth="1" />
                <text x={tile.x + 36} y={tile.y + 28} textAnchor="middle" fontSize="16" fontWeight="900" fill="rgba(0,0,0,0.65)">{tile.val}</text>
                <text x={tile.x + 36} y={tile.y + 44} textAnchor="middle" fontSize="6.5" fontWeight="500" fill="rgba(0,0,0,0.45)">{tile.label}</text>
            </g>
        ))}
    </svg>
)

// Charting: bar chart mock
const ChartBar = (
    <svg viewBox="0 0 300 180" className={classes.cardSvg}>
        <rect width="300" height="180" fill="rgba(248,248,252,0.9)" />
        <text x="20" y="18" fontSize="8" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="1.5">REVENUE BY REGION · Q1–Q4</text>
        {/* Axes */}
        <line x1="40" y1="140" x2="286" y2="140" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        <line x1="40" y1="30"  x2="40"  y2="140" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        {/* Gridlines */}
        {[55, 80, 105, 130].map((y, i) => (
            <line key={i} x1="40" y1={y} x2="286" y2={y} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {/* Grouped bars: 4 quarters, 3 regions each */}
        {[
            { q: 'Q1', x: 52,  bars: [70, 50, 38] },
            { q: 'Q2', x: 112, bars: [85, 62, 44] },
            { q: 'Q3', x: 172, bars: [78, 70, 52] },
            { q: 'Q4', x: 232, bars: [95, 80, 60] },
        ].map((group) => (
            <g key={group.q}>
                {group.bars.map((h, bi) => {
                    const colors = ['rgba(124,58,237,0.7)', 'rgba(34,139,230,0.65)', 'rgba(34,197,94,0.6)']
                    return (
                        <rect key={bi} x={group.x + bi * 14} y={140 - h} width="12" height={h} rx="2" fill={colors[bi]} />
                    )
                })}
                <text x={group.x + 21} y="152" textAnchor="middle" fontSize="7" fill="rgba(0,0,0,0.4)">{group.q}</text>
            </g>
        ))}
        {/* Legend */}
        {['EMEA', 'Americas', 'APAC'].map((r, i) => {
            const fills = ['rgba(124,58,237,0.7)', 'rgba(34,139,230,0.65)', 'rgba(34,197,94,0.6)']
            return (
                <g key={r}>
                    <rect x={60 + i * 62} y="164" width="8" height="8" rx="2" fill={fills[i]} />
                    <text x={72 + i * 62} y="171" fontSize="7" fill="rgba(0,0,0,0.45)">{r}</text>
                </g>
            )
        })}
    </svg>
)

// Charting: line chart mock
const ChartLine = (
    <svg viewBox="0 0 200 140" className={classes.cardSvg}>
        <rect width="200" height="140" fill="rgba(248,248,252,0.9)" />
        <text x="14" y="16" fontSize="7.5" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="1">NRR · ROLLING 12M</text>
        <line x1="24" y1="110" x2="188" y2="110" stroke="rgba(0,0,0,0.09)" strokeWidth="1" />
        <line x1="24" y1="28"  x2="24"  y2="110" stroke="rgba(0,0,0,0.09)" strokeWidth="1" />
        {/* Area fill */}
        <path d="M24,95 C50,88 70,76 90,68 C110,60 130,52 150,46 C170,40 188,36 188,36 L188,110 L24,110 Z"
            fill="rgba(124,58,237,0.08)" />
        {/* Line */}
        <path d="M24,95 C50,88 70,76 90,68 C110,60 130,52 150,46 C170,40 188,36 188,36"
            fill="none" stroke="rgba(124,58,237,0.75)" strokeWidth="2" strokeLinecap="round" />
        {/* Target line */}
        <line x1="24" y1="55" x2="188" y2="55" stroke="rgba(34,197,94,0.5)" strokeWidth="1" strokeDasharray="4 3" />
        <text x="190" y="58" fontSize="6" fill="rgba(34,197,94,0.8)" fontWeight="600">Target</text>
        {/* Data dots */}
        {[[24,95],[60,82],[90,68],[120,58],[150,46],[188,36]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="white" stroke="rgba(124,58,237,0.75)" strokeWidth="1.5" />
        ))}
        {/* Y labels */}
        {['80%', '90%', '100%', '110%'].map((l, i) => (
            <text key={i} x="22" y={105 - i * 23} textAnchor="end" fontSize="6.5" fill="rgba(0,0,0,0.35)">{l}</text>
        ))}
    </svg>
)

// Charting: pie/donut mock
const ChartDonut = (
    <svg viewBox="0 0 180 140" className={classes.cardSvg}>
        <rect width="180" height="140" fill="rgba(248,248,252,0.9)" />
        <text x="90" y="14" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="1">SPEND ALLOCATION</text>
        {/* Donut arcs — approximate segments */}
        <circle cx="70" cy="78" r="34" fill="none" stroke="rgba(124,58,237,0.7)" strokeWidth="18"
            strokeDasharray="75 139" strokeDashoffset="0" />
        <circle cx="70" cy="78" r="34" fill="none" stroke="rgba(34,139,230,0.65)" strokeWidth="18"
            strokeDasharray="48 139" strokeDashoffset="-75" />
        <circle cx="70" cy="78" r="34" fill="none" stroke="rgba(34,197,94,0.6)" strokeWidth="18"
            strokeDasharray="30 139" strokeDashoffset="-123" />
        <circle cx="70" cy="78" r="34" fill="none" stroke="rgba(251,146,60,0.65)" strokeWidth="18"
            strokeDasharray="20 139" strokeDashoffset="-153" />
        <circle cx="70" cy="78" r="20" fill="rgba(248,248,252,0.95)" />
        <text x="70" y="75" textAnchor="middle" fontSize="10" fontWeight="900" fill="rgba(0,0,0,0.65)">54%</text>
        <text x="70" y="85" textAnchor="middle" fontSize="6" fill="rgba(0,0,0,0.4)">Marketing</text>
        {/* Legend */}
        {['Marketing','Sales','Product','Ops'].map((l, i) => {
            const fills = ['rgba(124,58,237,0.7)','rgba(34,139,230,0.65)','rgba(34,197,94,0.6)','rgba(251,146,60,0.65)']
            return (
                <g key={l}>
                    <rect x="118" y={26 + i * 22} width="8" height="8" rx="2" fill={fills[i]} />
                    <text x="130" y={34 + i * 22} fontSize="7" fill="rgba(0,0,0,0.5)">{l}</text>
                </g>
            )
        })}
    </svg>
)

// Tables: Strategic data table mock
const TableStrategic = (
    <svg viewBox="0 0 300 180" className={classes.cardSvg}>
        <rect width="300" height="180" fill="rgba(248,248,252,0.9)" />
        <text x="16" y="16" fontSize="8" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="1.5">STRATEGIC ACTIVITIES · Q2</text>
        {/* Header row */}
        <rect x="10" y="22" width="280" height="20" rx="3" fill="rgba(124,58,237,0.1)" />
        {['Activity', 'Owner', 'Status', 'Progress', 'Due'].map((h, i) => {
            const xs = [16, 96, 152, 200, 258]
            return <text key={h} x={xs[i]} y="35" fontSize="7" fontWeight="700" fill="rgba(80,20,180,0.75)">{h}</text>
        })}
        {/* Data rows */}
        {[
            { act: 'Brand Refresh',      owner: 'Marketing',  status: 'On Track',   prog: 72, due: 'Apr 28', sColor: 'rgba(34,197,94,0.7)'  },
            { act: 'Enterprise Outreach', owner: 'Sales',      status: 'At Risk',    prog: 38, due: 'May 10', sColor: 'rgba(251,146,60,0.8)' },
            { act: 'Platform v2.4',      owner: 'Product',    status: 'On Track',   prog: 85, due: 'Apr 30', sColor: 'rgba(34,197,94,0.7)'  },
            { act: 'EMEA Expansion',     owner: 'Leadership', status: 'Delayed',    prog: 20, due: 'May 15', sColor: 'rgba(239,68,68,0.7)'  },
            { act: 'Partner Programme',  owner: 'Alliances',  status: 'On Track',   prog: 55, due: 'Jun 1',  sColor: 'rgba(34,197,94,0.7)'  },
        ].map((row, i) => (
            <g key={i}>
                <rect x="10" y={46 + i * 24} width="280" height="22" rx="2"
                    fill={i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(248,248,252,0.5)'}
                    stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                <text x="16"  y={61 + i * 24} fontSize="7" fill="rgba(0,0,0,0.65)" fontWeight="500">{row.act}</text>
                <text x="96"  y={61 + i * 24} fontSize="6.5" fill="rgba(0,0,0,0.45)">{row.owner}</text>
                {/* Status badge */}
                <rect x="148" y={49 + i * 24} width="46" height="14" rx="7" fill={row.sColor} opacity="0.2" />
                <text x="171" y={59 + i * 24} textAnchor="middle" fontSize="6" fontWeight="700" fill={row.sColor.replace('0.7','1').replace('0.8','1')}>{row.status}</text>
                {/* Progress bar */}
                <rect x="200" y={55 + i * 24} width="50" height="5" rx="2.5" fill="rgba(0,0,0,0.08)" />
                <rect x="200" y={55 + i * 24} width={50 * row.prog / 100} height="5" rx="2.5" fill="rgba(124,58,237,0.6)" />
                <text x="256" y={61 + i * 24} fontSize="6.5" fill="rgba(0,0,0,0.4)">{row.due}</text>
            </g>
        ))}
    </svg>
)

// Tables: KPI scorecard table mock
const TableKPI = (
    <svg viewBox="0 0 240 150" className={classes.cardSvg}>
        <rect width="240" height="150" fill="rgba(248,248,252,0.9)" />
        <text x="14" y="16" fontSize="8" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="1.5">KPI SCORECARD · LIVE</text>
        {/* Header */}
        <rect x="10" y="22" width="220" height="18" rx="3" fill="rgba(34,139,230,0.1)" />
        {['Metric', 'Actual', 'Target', 'vs Target', 'Trend'].map((h, i) => {
            const xs = [16, 84, 120, 158, 202]
            return <text key={h} x={xs[i]} y="34" fontSize="6.5" fontWeight="700" fill="rgba(34,60,130,0.75)">{h}</text>
        })}
        {/* Rows */}
        {[
            { metric: 'NRR',          actual: '108%', target: '105%', delta: '+3%',  trend: [4,5,5,6,5,7],  up: true  },
            { metric: 'New Logos',    actual: '22',   target: '25',   delta: '-12%', trend: [6,5,4,4,3,3],  up: false },
            { metric: 'Gross Margin', actual: '74%',  target: '72%',  delta: '+2%',  trend: [4,5,5,5,6,6],  up: true  },
            { metric: 'CAC',          actual: '$4.1k', target: '$4k', delta: '-3%',  trend: [5,5,6,6,5,4],  up: false },
            { metric: 'Churn',        actual: '1.8%', target: '2%',   delta: '+11%', trend: [6,5,5,4,3,3],  up: true  },
        ].map((row, i) => {
            const y = 44 + i * 20
            const dColor = row.up ? 'rgba(34,197,94,0.9)' : 'rgba(239,68,68,0.85)'
            const pts = row.trend.map((v, ti) => `${202 + ti * 5},${y + 13 - v}`).join(' ')
            return (
                <g key={i}>
                    <rect x="10" y={y} width="220" height="18" rx="2"
                        fill={i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(248,248,252,0.5)'}
                        stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                    <text x="16"  y={y + 12} fontSize="7"   fontWeight="600" fill="rgba(0,0,0,0.65)">{row.metric}</text>
                    <text x="84"  y={y + 12} fontSize="7"   fontWeight="700" fill="rgba(0,0,0,0.7)">{row.actual}</text>
                    <text x="120" y={y + 12} fontSize="6.5" fill="rgba(0,0,0,0.4)">{row.target}</text>
                    <text x="158" y={y + 12} fontSize="7"   fontWeight="700" fill={dColor}>{row.delta}</text>
                    <polyline points={pts} fill="none" stroke={dColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            )
        })}
    </svg>
)

// Tables: Comparison / feature matrix table mock
const TableComparison = (
    <svg viewBox="0 0 240 150" className={classes.cardSvg}>
        <rect width="240" height="150" fill="rgba(248,248,252,0.9)" />
        <text x="14" y="16" fontSize="8" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="1.5">COMPETITOR COMPARISON</text>
        {/* Column headers */}
        <rect x="10" y="22" width="220" height="18" rx="3" fill="rgba(124,58,237,0.08)" />
        {['Feature', 'Insaplan', 'Rival A', 'Rival B'].map((h, i) => {
            const xs = [16, 104, 150, 196]
            return (
                <text key={h} x={xs[i]} y="34" fontSize="6.5" fontWeight="700"
                    fill={i === 1 ? 'rgba(124,58,237,0.9)' : 'rgba(0,0,0,0.45)'}>{h}</text>
            )
        })}
        {[
            { feat: 'Infographics',    vals: [true,  false, false] },
            { feat: 'Chart Builder',   vals: [true,  true,  false] },
            { feat: 'Plan Views',      vals: [true,  false, true]  },
            { feat: 'AI Querying',     vals: [true,  false, false] },
            { feat: 'Knowledge Base',  vals: [true,  false, false] },
            { feat: 'Custom Branding', vals: [true,  true,  true]  },
        ].map((row, i) => {
            const y = 44 + i * 17
            return (
                <g key={i}>
                    <rect x="10" y={y} width="220" height="15" rx="2"
                        fill={i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(248,248,252,0.5)'}
                        stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                    <text x="16" y={y + 10} fontSize="6.5" fill="rgba(0,0,0,0.6)">{row.feat}</text>
                    {row.vals.map((v, vi) => {
                        const cx = [120, 166, 212][vi]
                        return v
                            ? <text key={vi} x={cx} y={y + 11} textAnchor="middle" fontSize="9" fill="rgba(34,197,94,0.85)" fontWeight="900">✓</text>
                            : <text key={vi} x={cx} y={y + 11} textAnchor="middle" fontSize="9" fill="rgba(200,50,50,0.5)">–</text>
                    })}
                </g>
            )
        })}
    </svg>
)

// Plans: Gantt mock
const PlanGantt = (
    <svg viewBox="0 0 320 180" className={classes.cardSvg}>
        <rect width="320" height="180" fill="rgba(248,248,252,0.9)" />
        <text x="16" y="18" fontSize="8" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="1.5">GANTT · Q2 ROADMAP</text>
        {/* Month headers */}
        {['Apr', 'May', 'Jun'].map((m, i) => (
            <text key={m} x={115 + i * 68} y="32" textAnchor="middle" fontSize="7" fontWeight="600" fill="rgba(0,0,0,0.35)">{m}</text>
        ))}
        <line x1="100" y1="36" x2="316" y2="36" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
        {/* Gantt rows */}
        {[
            { label: 'Brand Refresh',     x: 100, w: 92,  color: 'rgba(124,58,237,0.65)',  y: 46  },
            { label: 'Market Analysis',   x: 130, w: 120, color: 'rgba(34,139,230,0.6)',   y: 66  },
            { label: 'Product Launch',    x: 190, w: 76,  color: 'rgba(34,197,94,0.6)',    y: 86  },
            { label: 'Sales Enablement',  x: 100, w: 60,  color: 'rgba(251,146,60,0.65)',  y: 106 },
            { label: 'Partner Programme', x: 168, w: 100, color: 'rgba(124,58,237,0.45)', y: 126 },
            { label: 'H2 Planning',       x: 230, w: 86,  color: 'rgba(34,139,230,0.45)', y: 146 },
        ].map((row) => (
            <g key={row.label}>
                <text x="96" y={row.y + 10} textAnchor="end" fontSize="7" fill="rgba(0,0,0,0.5)">{row.label}</text>
                <rect x={row.x} y={row.y} width={row.w} height="14" rx="4" fill={row.color} />
            </g>
        ))}
    </svg>
)

// Plans: Kanban mock
const PlanKanban = (
    <svg viewBox="0 0 260 160" className={classes.cardSvg}>
        <rect width="260" height="160" fill="rgba(248,248,252,0.9)" />
        <text x="130" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="1.5">KANBAN BOARD</text>
        {[
            { col: 'To Do',       x: 10,  cards: ['Market audit', 'Define ICP', 'Brand assets'], color: 'rgba(0,0,0,0.06)', badge: 'rgba(100,100,100,0.3)' },
            { col: 'In Progress', x: 96,  cards: ['Campaign brief', 'Q2 OKRs'],                 color: 'rgba(34,139,230,0.07)', badge: 'rgba(34,139,230,0.4)' },
            { col: 'Done',        x: 182, cards: ['H1 review', 'Exec deck', 'NPS analysis'],    color: 'rgba(34,197,94,0.07)', badge: 'rgba(34,197,94,0.5)' },
        ].map((col) => (
            <g key={col.col}>
                <rect x={col.x} y="22" width="76" height="132" rx="6" fill={col.color} stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                <rect x={col.x + 6} y="28" width="46" height="12" rx="6" fill={col.badge} />
                <text x={col.x + 29} y="38" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="white">{col.col}</text>
                {col.cards.map((card, ci) => (
                    <g key={ci}>
                        <rect x={col.x + 6} y={48 + ci * 30} width="64" height="22" rx="4" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                        <text x={col.x + 14} y={63 + ci * 30} fontSize="6.5" fill="rgba(0,0,0,0.6)">{card}</text>
                    </g>
                ))}
            </g>
        ))}
    </svg>
)

// Plans: Explorer / mind-map mock
const PlanExplorer = (
    <svg viewBox="0 0 280 160" className={classes.cardSvg}>
        <rect width="280" height="160" fill="rgba(248,248,252,0.9)" />
        <text x="140" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(0,0,0,0.4)" letterSpacing="1.5">EXPLORER VIEW</text>
        {/* Root */}
        <rect x="100" y="58" width="80" height="28" rx="8" fill="rgba(124,58,237,0.16)" stroke="rgba(124,58,237,0.45)" strokeWidth="1.5" />
        <text x="140" y="76" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(80,20,180,0.8)">Strategy 2026</text>
        {/* Branch nodes */}
        {[
            { x: 16,  y: 24,  label: 'Growth',   w: 58 },
            { x: 100, y: 24,  label: 'Product',   w: 58 },
            { x: 185, y: 24,  label: 'Ops',        w: 52 },
            { x: 16,  y: 112, label: 'Marketing', w: 66 },
            { x: 104, y: 112, label: 'People',    w: 54 },
            { x: 183, y: 112, label: 'Finance',   w: 58 },
        ].map((n, i) => (
            <g key={i}>
                <line
                    x1={n.x + n.w / 2} y1={i < 3 ? n.y + 22 : n.y}
                    x2="140" y2={i < 3 ? 58 : 86}
                    stroke="rgba(124,58,237,0.2)" strokeWidth="1" strokeDasharray="3 3"
                />
                <rect x={n.x} y={n.y} width={n.w} height="22" rx="6" fill="rgba(34,139,230,0.1)" stroke="rgba(34,139,230,0.3)" strokeWidth="1" />
                <text x={n.x + n.w / 2} y={n.y + 14} textAnchor="middle" fontSize="7" fontWeight="600" fill="rgba(0,0,80,0.7)">{n.label}</text>
            </g>
        ))}
    </svg>
)

export default function ProductVisualsPage() {
    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>

                <PageHero
                    title="Make your strategy impossible to ignore"
                    subtitle="Insaplan turns your plans, data, and frameworks into stunning infographics, charts, and visual plans — no design skills, no slides, no spreadsheet hacks."
                />

                {/* ── Pain points ───────────────────────────────────────── */}
                <SolutionChallenges challenges={PAIN_POINTS} />

                {/* ── Infographics section ───────────────────────────────── */}
                <Box className={classes.featureSectionAlt}>
                    <Container size="xl">
                        <Grid gutter={{ base: 40, md: 80 }} align="center">
                            {/* Text */}
                            <GridCol span={{ base: 12, md: 5 }}>
                                <Stack gap="lg">
                                    <Text className={classes.sectionKicker}>Infographics</Text>
                                    <Title order={2} className={classes.sectionHeading} ta="left">
                                        Business frameworks that actually look the part
                                    </Title>
                                    <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>
                                        Replace hand-built slides with professionally designed infographics.
                                        Choose from strategy frameworks, icon-driven summaries, and visual layouts
                                        that make complex ideas instantly clear — then customise everything to your brand.
                                    </Text>
                                    <Stack gap="xs" mt="sm">
                                        {INFOGRAPHIC_CAPABILITIES.map((point, i) => (
                                            <Box key={i} className={classes.checkRow}>
                                                <Box className={classes.checkIcon}>
                                                    <IconCheck size={14} />
                                                </Box>
                                                <Text size="sm" c="dark.6">{point}</Text>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Stack>
                            </GridCol>
                            {/* Visuals */}
                            <GridCol span={{ base: 12, md: 7 }}>
                                <VisualStack cards={[
                                    { label: 'SWOT Analysis',     content: InfographicSwot   },
                                    { label: "Porter's 5 Forces", content: InfographicForces },
                                    { label: 'Strategic Stats',   content: InfographicStats  },
                                ]} />
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* ── Charting section ───────────────────────────────────── */}
                <Box className={classes.featureSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 40, md: 80 }} align="center">
                            {/* Visuals — left on desktop */}
                            <GridCol span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
                                <VisualStack cards={[
                                    { label: 'Bar Chart — Revenue by Region', content: ChartBar   },
                                    { label: 'Line Chart — NRR Trend',        content: ChartLine  },
                                    { label: 'Donut Chart — Spend Split',     content: ChartDonut },
                                ]} />
                            </GridCol>
                            {/* Text — right on desktop */}
                            <GridCol span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
                                <Stack gap="lg">
                                    <Text className={classes.sectionKicker}>Charting</Text>
                                    <Title order={2} className={classes.sectionHeading} ta="left">
                                        Every chart type your business needs
                                    </Title>
                                    <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>
                                        From revenue trends to spend breakdowns, Insaplan generates beautiful,
                                        presentation-ready charts directly from your data — no spreadsheet exports required.
                                    </Text>
                                    <Stack gap="xs" mt="sm">
                                        {CHARTING_CAPABILITIES.map((point, i) => (
                                            <Box key={i} className={classes.checkRow}>
                                                <Box className={classes.checkIcon}>
                                                    <IconCheck size={14} />
                                                </Box>
                                                <Text size="sm" c="dark.6">{point}</Text>
                                            </Box>
                                        ))}
                                    </Stack>
                                    {/* Chart type pills */}
                                    <Stack gap="xs" mt="md">
                                        <Text size="xs" fw={700} tt="uppercase" c="dimmed" style={{ letterSpacing: '1.5px' }}>
                                            chart types
                                        </Text>
                                        <div className={classes.chartGrid}>
                                            {CHART_TYPES.map(({ icon: Icon, label }) => (
                                                <div key={label} className={classes.chartPill}>
                                                    <Icon size={12} className={classes.chartPillIcon} />
                                                    <span>{label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Stack>
                                </Stack>
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* ── Tables section ────────────────────────────────────── */}
                <Box className={classes.featureSectionAlt}>
                    <Container size="xl">
                        <Grid gutter={{ base: 40, md: 80 }} align="center">
                            {/* Text */}
                            <GridCol span={{ base: 12, md: 5 }}>
                                <Stack gap="lg">
                                    <Text className={classes.sectionKicker}>Tables</Text>
                                    <Title order={2} className={classes.sectionHeading} ta="left">
                                        Spreadsheets that actually tell a story
                                    </Title>
                                    <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>
                                        Replace static grids with smart, visual tables. Conditional formatting,
                                        inline sparklines, and live progress bars turn raw data into decisions —
                                        without a single formula or manual update.
                                    </Text>
                                    <Stack gap="xs" mt="sm">
                                        {TABLE_CAPABILITIES.map((point, i) => (
                                            <Box key={i} className={classes.checkRow}>
                                                <Box className={classes.checkIcon}>
                                                    <IconCheck size={14} />
                                                </Box>
                                                <Text size="sm" c="dark.6">{point}</Text>
                                            </Box>
                                        ))}
                                    </Stack>
                                    {/* Feature pills */}
                                    <Stack gap="xs" mt="md">
                                        <Text size="xs" fw={700} tt="uppercase" c="dimmed" style={{ letterSpacing: '1.5px' }}>
                                            Table features
                                        </Text>
                                        <div className={classes.chartGrid}>
                                            {TABLE_FEATURES.map(({ icon: Icon, label }) => (
                                                <div key={label} className={classes.chartPill}>
                                                    <Icon size={12} className={classes.chartPillIcon} />
                                                    <span>{label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Stack>
                                </Stack>
                            </GridCol>
                            {/* Visuals */}
                            <GridCol span={{ base: 12, md: 7 }}>
                                <VisualStack cards={[
                                    { label: 'Strategic Activities',   content: TableStrategic  },
                                    { label: 'KPI Scorecard',          content: TableKPI        },
                                    { label: 'Competitor Comparison',  content: TableComparison },
                                ]} />
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                {/* ── Plan views section ─────────────────────────────────── */}
                <Box className={classes.featureSection}>
                    <Container size="xl">
                        <Grid gutter={{ base: 40, md: 80 }} align="center">
                            {/* Text */}
                            <GridCol span={{ base: 12, md: 5 }}>
                                <Stack gap="lg">
                                    <Text className={classes.sectionKicker}>Plan Views</Text>
                                    <Title order={2} className={classes.sectionHeading} ta="left">
                                        See your plans the way your audience needs them
                                    </Title>
                                    <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>
                                        Switch between Gantt, Kanban, and Explorer views of the same plan in a single click.
                                        Share a timeline with engineering, a board with your team,
                                        and a strategic map with the exec — all from one source of truth.
                                    </Text>
                                    <Stack gap="xs" mt="sm">
                                        {PLAN_CAPABILITIES.map((point, i) => (
                                            <Box key={i} className={classes.checkRow}>
                                                <Box className={classes.checkIcon}>
                                                    <IconCheck size={14} />
                                                </Box>
                                                <Text size="sm" c="dark.6">{point}</Text>
                                            </Box>
                                        ))}
                                    </Stack>
                                    {/* View type pills */}
                                    <Stack gap="xs" mt="md">
                                        <Text size="xs" fw={700} tt="uppercase" c="dimmed" style={{ letterSpacing: '1.5px' }}>
                                            Available views
                                        </Text>
                                        <div className={classes.chartGrid}>
                                            {[
                                                { icon: IconTimeline, label: 'Gantt' },
                                                { icon: IconColumns,  label: 'Kanban' },
                                                { icon: IconRoute,    label: 'Explorer' },
                                            ].map(({ icon: Icon, label }) => (
                                                <div key={label} className={classes.chartPill}>
                                                    <Icon size={12} className={classes.chartPillIcon} />
                                                    <span>{label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Stack>
                                </Stack>
                            </GridCol>
                            {/* Visuals */}
                            <GridCol span={{ base: 12, md: 7 }}>
                                <VisualStack cards={[
                                    { label: 'Gantt View',     content: PlanGantt    },
                                    { label: 'Kanban Board',   content: PlanKanban   },
                                    { label: 'Explorer View',  content: PlanExplorer },
                                ]} />
                            </GridCol>
                        </Grid>
                    </Container>
                </Box>

                <CTA />
            </div>
        </div>
    )
}
