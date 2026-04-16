/**
 * Seed script — populates all marketing globals and collections
 * with content previously hardcoded in UI components.
 *
 * Run with:  pnpm seed
 */

import { getPayload } from 'payload'
import config from './payload.config.js'

console.log('=== SEED SCRIPT STARTING ===')
console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'set' : 'NOT SET')

// Helper: build a minimal Lexical richText node from a plain string
const richText = (text: string) => ({
    root: {
        type: 'root',
        children: [
            {
                type: 'paragraph',
                version: 1,
                children: [{ type: 'text', text, version: 1 }],
            },
        ],
        direction: 'ltr' as const,
        format: '' as const,
        indent: 0,
        version: 1,
    },
})

async function seed() {
    const payload = await getPayload({ config })

    // ── Marketing Home ────────────────────────────────────────────────────
    console.log('Seeding marketing-home...')
    await payload.updateGlobal({
        slug: 'marketing-home',
        data: {
            hero: {
                eyebrow: 'AI-powered planning',
                badge: 'Launching Soon',
                headline: 'Turn insights into actionable plans',
                subtitle: 'Capture insights as beautiful infographics, charts, and tables. Build and iterate plans fast with hundreds of predefined templates, then report and track execution.',
                pillars: [
                    { label: 'Insights' },
                    { label: 'Planning' },
                    { label: 'Reporting' },
                ],
                useCases: [
                    { label: 'Strategic Plans' },
                    { label: 'Corporate Plans' },
                    { label: 'Sales Plans' },
                    { label: 'Marketing Plans' },
                    { label: 'Product Launch Plans' },
                    { label: 'Project Management' },
                    { label: 'Growth Plans' },
                    { label: 'Account Plans' },
                    { label: 'Product Roadmaps' },
                    { label: 'Startup Business Plans' },
                ],
                trustSignals: [
                    { icon: 'sparkles', label: 'AI-powered' },
                    { icon: 'template', label: 'Custom templates' },
                    { icon: 'cards', label: 'Knowledgebase' },
                    { icon: 'building', label: 'Enterprise features' },
                ],
                carouselSlides: [
                    { title: 'Curate Insights Once', description: 'Capture, tag, and reuse internal knowledge across every plan you build.' },
                    { title: 'Frameworks and Processes Built In', description: 'Manage a broad library of business frameworks and planning processes.' },
                    { title: 'Visual Tables and Infographics', description: 'Turn complex information into clear tables and visuals stakeholders understand.' },
                    { title: 'Templates With Hundreds of Options', description: 'Use custom templates and flexible building blocks to fit the way you work.' },
                    { title: 'Iterate Fast', description: 'Refine and evolve plans quickly as priorities, teams, and projects change.' },
                ],
            },
            coreFeatures: {
                kicker: 'Built for clarity',
                heading: 'Different by design.',
                description: 'Bring knowledge, planning, and reporting together with curated insights and flexible building blocks.',
                features: [
                    {
                        icon: 'bulb',
                        title: 'Capture and Curate Insights',
                        description: 'Turn internal knowledge into a reusable library of insights you can apply across plans.',
                        capabilities: [
                            { label: 'Capture and organize insights from across the business' },
                            { label: 'Curate what matters so teams can reuse it consistently' },
                            { label: 'Build a searchable internal knowledge base for planning' },
                            { label: 'Create a single source of truth that stays current as you learn' },
                        ],
                        visuals: [
                            { label: 'Insights library' },
                            { label: 'Tags & themes' },
                            { label: 'Insight detail' },
                        ],
                    },
                    {
                        icon: 'target',
                        title: 'Build Plans at Speed',
                        description: 'Manage a broad set of business frameworks and processes with flexible templates.',
                        capabilities: [
                            { label: 'Use built-in frameworks and planning processes, or create your own' },
                            { label: 'Create custom templates with hundreds of configuration options' },
                            { label: 'Assemble strategic plans, project plans, and execution workstreams in one place' },
                            { label: 'Iterate quickly as priorities change and new information arrives' },
                        ],
                        visuals: [
                            { label: 'Template picker' },
                            { label: 'Plan builder' },
                            { label: 'Workstreams' },
                        ],
                    },
                    {
                        icon: 'report',
                        title: 'Visualize and Communicate',
                        description: 'Bring plans to life with visual tables, infographics, and audience-ready reporting.',
                        capabilities: [
                            { label: 'Visual tables and dashboards that make progress and priorities clear' },
                            { label: 'Infographics to communicate complex ideas quickly' },
                            { label: 'Custom reporting templates for different stakeholders' },
                            { label: 'Export-ready outputs (PDF and presentation formats)' },
                        ],
                        visuals: [
                            { label: 'Dashboards' },
                            { label: 'Infographics' },
                            { label: 'Reporting' },
                        ],
                    },
                ],
            },
            cta: {
                title: 'Build better plans, faster',
                description: 'Join the waitlist for early access to curated insights, flexible templates, and rapid iteration across strategy, planning, and project management.',
                emailPlaceholder: 'Enter your email',
                buttonLabel: 'Join Waitlist',
                note: 'Get notified when we launch - no spam, ever',
            },
        } as any,
    })
    console.log('  done.')

    // ── Solutions Page ────────────────────────────────────────────────────
    console.log('Seeding solutions-page...')
    await payload.updateGlobal({
        slug: 'solutions-page',
        data: {
            heroTitle: 'Solutions',
            heroSubtitle: 'Tailored for your industry and organizational needs',
            sectionHeading: 'Choose your use case',
            sectionSubheading: 'Insaplan adapts to the way your team works',
            solutionLinks: [
                { label: 'Sales', slug: 'sales', description: 'Transform sales planning and reporting' },
                { label: 'Marketing', slug: 'marketing', description: 'Accelerate go-to-market strategy and execution' },
                { label: 'Start Ups', slug: 'startups', description: 'Build investor-ready plans and presentations' },
                { label: 'Enterprise', slug: 'enterprise', description: 'Standardize planning across the organization' },
                { label: 'Not for Profit', slug: 'nonprofit', description: 'Track and communicate your mission' },
                { label: 'Project Management', slug: 'project-management', description: 'Plan, execute, and report on projects with clarity' },
                { label: 'Government', slug: 'government', description: 'Deliver accountable, evidence-based planning' },
            ],
        } as any,
    })
    console.log('  done.')

    // ── Footer ────────────────────────────────────────────────────────────
    console.log('Seeding footer...')
    await payload.updateGlobal({
        slug: 'footer',
        data: {
            logoText: 'Insaplan',
            navCtaLabel: 'Request Access',
            navCtaUrl: '/contact',
            tagline: 'Turn Insights into Plans. Strategic planning and reporting made simple.',
            copyrightName: 'Insaplan',
            copyrightSuffix: 'All Rights Reserved.',
            linkGroups: [
                { heading: 'Product', links: [{ label: 'Overview', url: '/product/overview' }, { label: 'Features', url: '/product/features' }] },
                { heading: 'Solutions', links: [{ label: 'Sales', url: '/solutions/sales' }, { label: 'Marketing', url: '/solutions/marketing' }, { label: 'Start Ups', url: '/solutions/startups' }, { label: 'Enterprise', url: '/solutions/enterprise' }, { label: 'Not for Profit', url: '/solutions/nonprofit' }, { label: 'Project Management', url: '/solutions/project-management' }, { label: 'Government', url: '/solutions/government' }] },
                { heading: 'Resources', links: [{ label: 'Blog', url: '/resources/blog' }, { label: 'FAQs', url: '/resources/faqs' }, { label: 'Knowledge Base', url: '/resources/knowledge-base' }, { label: 'Support', url: '/resources/support' }] },
                { heading: 'Company', links: [{ label: 'About', url: '/about' }, { label: 'Pricing', url: '/pricing' }, { label: 'Contact Us', url: '/contact' }] },
                { heading: 'Legal', links: [{ label: 'Terms of Service', url: '/legal' }, { label: 'Privacy Policy', url: '/legal' }, { label: 'Data Security', url: '/legal' }] },
            ],
        } as any,
    })
    console.log('  done.')

    // ── Contact Page ──────────────────────────────────────────────────────
    console.log('Seeding contact-page...')
    await payload.updateGlobal({
        slug: 'contact-page',
        data: {
            heroTitle: 'Contact Us',
            heroSubtitle: "Have a question or want to learn more? We'd love to hear from you.",
            namePlaceholder: 'Your name',
            emailPlaceholder: 'your@email.com',
            companyPlaceholder: 'Your company',
            messagePlaceholder: 'How can we help?',
            submitButtonLabel: 'Send Message',
            successMessage: "Thank you! We'll get back to you within 24 hours.",
            responseNote: 'We typically respond within 24 hours',
        } as any,
    })
    console.log('  done.')

    // ── Blog Page ─────────────────────────────────────────────────────────
    console.log('Seeding blog-page...')
    await payload.updateGlobal({
        slug: 'blog-page',
        data: {
            heroTitle: 'Blog',
            heroSubtitle: 'Insights, guides, and best practices for strategic planning',
            readMoreLabel: 'Read article →',
            emptyStateHeading: 'No Posts Yet',
            emptyStateMessage: "We're working on content. Check back soon for insights on strategic planning, AI, and more.",
            categoryLabels: [
                { slug: 'product-updates', label: 'Product Updates' },
                { slug: 'company-news', label: 'Company News' },
                { slug: 'best-practices', label: 'Best Practices' },
                { slug: 'case-studies', label: 'Case Studies' },
                { slug: 'industry-insights', label: 'Industry Insights' },
            ],
        } as any,
    })
    console.log('  done.')

    // ── Pricing Page ──────────────────────────────────────────────────────
    console.log('Seeding pricing-page...')
    await payload.updateGlobal({
        slug: 'pricing-page',
        data: {
            heroTitle: 'Simple, transparent pricing',
            heroSubtitle: 'Start free. Scale as your team grows. No hidden fees.',
            monthlyLabel: 'Monthly',
            annualLabel: 'Annual',
            annualDiscountBadge: 'Save 20%',
            customPriceLabel: 'Custom',
            perMonthSuffix: '/ mo',
            popularBadgeLabel: 'Most Popular',
            billedAnnuallyLabel: 'Billed annually',
        } as any,
    })
    console.log('  done.')

    // ── Legal Page ────────────────────────────────────────────────────────
    console.log('Seeding legal-page...')
    await payload.updateGlobal({
        slug: 'legal-page',
        data: {
            heroTitle: 'Legal',
            heroSubtitle: 'Terms of Service, Privacy Policy and Data Security',
            termsTabLabel: 'Terms of Service',
            privacyTabLabel: 'Privacy Policy',
            dataSecurityTabLabel: 'Data Security',
            termsComingSoon: 'Coming soon. Our terms of service are being finalized and will be available before launch.',
            privacyComingSoon: 'Coming soon. Our privacy policy is being finalized and will be available before launch.',
            dataSecurityComingSoon: 'Coming soon. Our data security documentation is being finalized and will be available before launch.',
        } as any,
    })
    console.log('  done.')

    // ── Support Page ──────────────────────────────────────────────────────
    console.log('Seeding support-page...')
    await payload.updateGlobal({
        slug: 'support-page',
        data: {
            heroTitle: 'Support',
            heroSubtitle: "We're here to help you succeed with Insaplan",
            comingSoonMessage: 'Our support center is launching soon. In the meantime, feel free to reach out to us directly.',
            contactHeading: 'Get in Touch',
            contactEmail: 'support@insaplan.com',
        } as any,
    })
    console.log('  done.')

    // ── Knowledge Base Page ───────────────────────────────────────────────
    console.log('Seeding knowledge-base-page...')
    await payload.updateGlobal({
        slug: 'knowledge-base-page',
        data: {
            heroTitle: 'Knowledge Base',
            heroSubtitle: 'Learn how to get the most out of Insaplan',
            comingSoonHeading: 'Documentation Coming Soon',
            comingSoonMessage: "We're building comprehensive documentation to help you get started with Insaplan. Check back soon!",
        } as any,
    })
    console.log('  done.')

    // ── Site Metadata ─────────────────────────────────────────────────────
    console.log('Seeding site-metadata...')
    await payload.updateGlobal({
        slug: 'site-metadata',
        data: {
            defaultTitle: 'Insaplan',
            defaultDescription: 'AI-Powered Strategy Execution Platform',
        } as any,
    })
    console.log('  done.')

    // ── Product Overview Page ─────────────────────────────────────────────
    console.log('Seeding product-overview-page...')
    await payload.updateGlobal({
        slug: 'product-overview-page',
        data: {
            heroTitle: 'Turn Insights into Plans',
            heroSubtitle: 'Capture organizational knowledge, build strategic plans with proven frameworks, and generate beautiful reports—all in one platform.',
            howItWorksHeading: 'How It Works',
            howItWorksSubheading: 'Three simple steps to transform your planning process',
            steps: [
                { title: 'Capture Insights', description: 'Centralize organizational knowledge, market data, and research into a searchable intelligence hub.' },
                { title: 'Build Plans', description: 'Use proven frameworks and AI assistance to create strategic plans, budgets, and roadmaps.' },
                { title: 'Generate Reports', description: 'Create beautiful, data-driven reports and presentations that communicate your strategy clearly.' },
            ],
            keyBenefits: {
                heading: 'Key Benefits',
                subheading: 'Everything you need to transform your planning process',
                benefits: [
                    { icon: 'clock', title: 'Fast & Efficient', description: 'Produce plans quickly and edit/monitor them in real-time' },
                    { icon: 'palette', title: 'Beautiful Outputs', description: 'Create stunning reports with professional infographics and charts' },
                    { icon: 'adjustments', title: 'Flexible & Customizable', description: 'Tailor workflows, data structures, and reports to your needs' },
                    { icon: 'books', title: 'Best Practices Built-In', description: 'Integrated business frameworks guide your planning process' },
                    { icon: 'database', title: 'Knowledge-Powered', description: 'Integrated knowledge bases include common KPIs and industry standards' },
                    { icon: 'sparkles', title: 'AI-Assisted', description: 'Get intelligent recommendations for insights and planning' },
                ],
            },
            comparisonTable: {
                heading: 'Why Insaplan vs. Traditional Methods',
                subheading: 'See how Insaplan compares to traditional planning tools',
                columns: [{ label: 'Spreadsheets' }, { label: 'PowerPoint' }, { label: 'Insaplan' }],
                rows: [
                    { aspect: 'Real-time updates', values: [{ value: 'false' }, { value: 'false' }, { value: 'true' }] },
                    { aspect: 'Searchable insights', values: [{ value: 'false' }, { value: 'false' }, { value: 'true' }] },
                    { aspect: 'Version control', values: [{ value: 'limited' }, { value: 'limited' }, { value: 'true' }] },
                    { aspect: 'Beautiful reports', values: [{ value: 'false' }, { value: 'true' }, { value: 'true' }] },
                    { aspect: 'AI assistance', values: [{ value: 'false' }, { value: 'false' }, { value: 'true' }] },
                    { aspect: 'Collaboration', values: [{ value: 'limited' }, { value: 'limited' }, { value: 'true' }] },
                    { aspect: 'Progress tracking', values: [{ value: 'false' }, { value: 'false' }, { value: 'true' }] },
                ],
            },
            featuresHeading: 'Features',
            featuresSubheading: 'Everything you need to transform strategic planning from a painful process into a competitive advantage',
            features: [
                { icon: 'palette', title: 'Beautiful Infographics', description: 'Create stunning visual presentations of your strategic plans and data.', benefits: [{ label: 'Professional templates' }, { label: 'Custom branding' }, { label: 'Export to multiple formats' }] },
                { icon: 'chart-bar', title: 'Beautiful Charts', description: 'Visualize data with professional charts that tell your story.', benefits: [{ label: 'Interactive dashboards' }, { label: 'Real-time data updates' }, { label: 'Multiple chart types' }] },
                { icon: 'brain', title: 'AI-Assisted Insights & Planning', description: 'Leverage AI to uncover insights and accelerate planning.', benefits: [{ label: 'Smart recommendations' }, { label: 'Automated analysis' }, { label: 'Pattern recognition' }] },
                { icon: 'adjustments', title: 'Fully Customizable', description: "Tailor every aspect to your organization's needs.", benefits: [{ label: 'Custom workflows' }, { label: 'Flexible data models' }, { label: 'Personalized dashboards' }] },
                { icon: 'books', title: 'Integrated Business Frameworks', description: 'Access proven frameworks like SWOT, OKRs, and Business Model Canvas.', benefits: [{ label: 'Best practice templates' }, { label: 'Industry-specific frameworks' }, { label: 'Guided planning processes' }] },
                { icon: 'database', title: 'Integrated Knowledge Bases', description: 'Build and leverage organizational knowledge for better planning.', benefits: [{ label: 'Searchable insights' }, { label: 'Common KPIs library' }, { label: 'Industry benchmarks' }] },
            ],
            problemsHeading: 'Problems We Solve',
            problemsSubheading: 'Common challenges Insaplan addresses',
            problems: [
                { problem: 'Plans take weeks to create and are outdated by the time they are finished', solution: 'AI-assisted planning reduces creation time from weeks to hours with real-time updates' },
                { problem: 'Strategic reports are static, ugly, and fail to communicate vision', solution: 'Beautiful, dynamic reports with professional infographics and data visualizations' },
                { problem: 'Organizational knowledge is scattered across emails, docs, and spreadsheets', solution: 'Centralized knowledge base that integrates with your planning process' },
                { problem: 'No standardized approach to strategic planning across the organization', solution: 'Integrated business frameworks ensure consistency and best practices' },
                { problem: 'Difficult to track progress and measure impact of strategic initiatives', solution: 'Real-time dashboards and progress tracking with customizable KPIs' },
                { problem: 'Teams work in silos without visibility into overall strategy', solution: 'Collaborative platform with shared visibility and aligned objectives' },
            ],
        } as any,
    })
    console.log('  done.')

    // ── Solutions collection ──────────────────────────────────────────────
    console.log('Seeding solutions collection...')
    const solutions = [
        {
            slug: 'sales', title: 'Sales', subtitle: 'Transform sales planning and reporting', status: 'published' as const,
            overview: richText('Transform how your sales team plans and reports. Insaplan helps you create data-driven territory plans, performance reviews, and pipeline dashboards that drive results.'),
            challenges: [
                { title: 'Plans buried in disconnected spreadsheets', description: 'Territory and account plans live in dozens of files, making it impossible to get a consistent view across the team.', icon: 'stack' },
                { title: 'Reporting takes days, not hours', description: 'Manually pulling together pipeline data and performance metrics eats time that should go to selling.', icon: 'clock' },
                { title: 'No single source of truth', description: 'Different reps use different templates, so leadership can never compare performance or spot trends easily.', icon: 'puzzle' },
            ],
            useCases: [
                { title: 'Sales Updates & Performance Reviews', description: 'Create data-driven sales performance reports and reviews that showcase progress and identify opportunities.' },
                { title: 'Territory Plans & Forecasting', description: 'Build comprehensive territory plans with AI-powered forecasting and pipeline visibility.' },
                { title: 'Pipeline Management', description: 'Visualize and manage your sales pipeline with real-time dashboards and progress tracking.' },
            ],
            keyFeatures: [
                { title: 'Data-driven territory planning', description: 'Quickly create data-driven territory and account plans with AI assistance.' },
                { title: 'Real-time execution monitoring', description: 'Monitor sales execution in real-time with live dashboards.' },
                { title: 'Leadership-ready reports', description: 'Generate compelling sales reports for leadership in minutes.' },
            ],
        },
        {
            slug: 'marketing', title: 'Marketing', subtitle: 'Accelerate go-to-market strategy and execution', status: 'published' as const,
            overview: richText('Accelerate your go-to-market strategy with Insaplan. Build comprehensive GTM plans, visualize product roadmaps, and measure campaign effectiveness — all in one platform.'),
            challenges: [
                { title: 'Strategy locked inside slide decks', description: 'GTM plans and roadmaps get created once and then forgotten — no easy way to keep them live as priorities shift.', icon: 'file' },
                { title: 'Aligning stakeholders wastes cycles', description: 'Getting leadership, product, and sales on the same page requires constant rework of the same documents.', icon: 'users' },
                { title: "Hard to show marketing's impact", description: "Without clear visualizations, it's difficult to demonstrate how marketing activities tie to business results.", icon: 'chart' },
            ],
            useCases: [
                { title: 'Go-to-Market (GTM) Plans', description: 'Build comprehensive go-to-market strategies with clear timelines, milestones, and resource allocation.' },
                { title: 'Product Roadmaps', description: 'Visualize product development timelines and align marketing activities with launches.' },
                { title: 'Strategic Marketing Plans', description: 'Create data-driven marketing plans with campaign tracking and performance measurement.' },
            ],
            keyFeatures: [
                { title: 'Strategy alignment', description: 'Align marketing strategy with business objectives using proven frameworks.' },
                { title: 'Visual roadmaps', description: 'Visualize product roadmaps with compelling graphics and timeline views.' },
                { title: 'Campaign measurement', description: 'Measure campaign effectiveness and adjust quickly with real-time data.' },
            ],
        },
        {
            slug: 'startups', title: 'Start Ups', subtitle: 'Build investor-ready plans and presentations', status: 'published' as const,
            overview: richText('Give your startup the professional edge it needs. Insaplan helps you build investor-ready business plans and presentations in days, not weeks, using proven frameworks and AI assistance.'),
            challenges: [
                { title: 'Investor docs take weeks to produce', description: 'Founders spend more time wrestling with formatting and frameworks than refining their actual strategy.', icon: 'clock' },
                { title: "Plans don't keep pace with the business", description: 'Early-stage companies pivot fast, but static documents can\'t reflect the latest thinking without a full rebuild.', icon: 'bolt' },
                { title: 'Hard to look credible on limited resources', description: 'Without design or ops support, business plans and pitch decks often fall short of investor expectations.', icon: 'confused' },
            ],
            useCases: [
                { title: 'Business Plans', description: 'Create professional, investor-ready business plans quickly using proven frameworks and AI assistance.' },
                { title: 'Investor Presentations', description: 'Generate compelling pitch decks and presentations that showcase your vision and traction.' },
                { title: 'Growth Strategy', description: 'Document growth strategies, track milestones, and measure progress against objectives.' },
            ],
            keyFeatures: [
                { title: 'Fast business planning', description: 'Create professional business plans in days, not weeks.' },
                { title: 'Investor-ready presentations', description: 'Generate investor-ready pitch decks and presentations with professional design.' },
                { title: 'Milestone tracking', description: 'Document strategy and track progress against milestones in real-time.' },
            ],
        },
        {
            slug: 'enterprise', title: 'Enterprise', subtitle: 'Standardize planning across the organization', status: 'published' as const,
            overview: richText('Bring consistency and alignment to enterprise planning. Insaplan helps large organizations standardize planning processes, leverage AI insights, and build institutional knowledge across every department.'),
            challenges: [
                { title: 'Inconsistent planning across departments', description: "Every team uses a different process, making cross-functional collaboration and roll-up reporting a constant struggle.", icon: 'puzzle' },
                { title: 'Institutional knowledge gets lost', description: "Best practices and frameworks exist in people's heads or buried in old files — not captured or reused systematically.", icon: 'stack' },
                { title: 'Leadership lacks visibility', description: "Without standardized outputs, executives can't easily assess strategic alignment or track execution across the org.", icon: 'chart' },
            ],
            useCases: [
                { title: 'Internal Knowledge Base', description: 'Build centralized knowledge bases with best practices, frameworks, and institutional knowledge.' },
                { title: 'Standardized Planning', description: 'Ensure uniform planning processes across departments with customizable workflows.' },
                { title: 'Department Collaboration', description: 'Enable cross-department visibility and collaboration on strategic initiatives.' },
            ],
            keyFeatures: [
                { title: 'Organizational knowledge base', description: 'Build internal knowledge bases with organizational best practices and institutional memory.' },
                { title: 'Consistent methodologies', description: 'Ensure consistent methodologies across the organization with standardized templates.' },
                { title: 'Scalable planning', description: 'Scale planning processes across multiple departments without losing alignment.' },
                { title: 'Leadership reporting', description: 'Centralized monitoring and reporting for leadership with real-time dashboards.' },
            ],
        },
        {
            slug: 'nonprofit', title: 'Not for Profit', subtitle: 'Track and communicate your mission', status: 'published' as const,
            overview: richText('Help your nonprofit communicate impact, secure funding, and align your team around your mission. Insaplan makes it easy to create compelling strategic plans, grant reports, and impact dashboards.'),
            challenges: [
                { title: 'Reporting drains limited capacity', description: 'Producing grant reports, board updates, and donor communications manually takes time away from mission-critical work.', icon: 'clock' },
                { title: 'Hard to quantify impact', description: 'Communicating results to funders and stakeholders is difficult when impact data is scattered across programs.', icon: 'chart' },
                { title: "Strategy doesn't translate to the frontline", description: 'High-level strategic plans rarely make it into the day-to-day work of staff and volunteers in a meaningful way.', icon: 'users' },
            ],
            useCases: [
                { title: 'Strategic Plans', description: 'Create mission-driven strategic plans that align your organization around shared goals.' },
                { title: 'Grant Applications', description: 'Generate compelling grant proposals and reports that demonstrate impact and accountability.' },
                { title: 'Impact Measurement', description: 'Track and visualize your impact with clear metrics and beautiful reporting.' },
            ],
            keyFeatures: [
                { title: 'Mission-driven narratives', description: 'Create compelling narratives around your mission that resonate with donors and stakeholders.' },
                { title: 'Donor-ready reports', description: 'Generate reports that resonate with donors and stakeholders with professional design.' },
                { title: 'Impact tracking', description: 'Track and demonstrate impact with clear metrics and beautiful visualizations.' },
                { title: 'Resource efficiency', description: 'Do more with limited resources using AI assistance and proven templates.' },
            ],
        },
    ]

    for (const solution of solutions) {
        const existing = await payload.find({ collection: 'solutions', where: { slug: { equals: solution.slug } }, limit: 1 })
        if (existing.docs.length > 0) {
            console.log(`  solutions/${solution.slug} — already exists, skipping`)
            continue
        }
        await payload.create({ collection: 'solutions', data: solution as any })
        console.log(`  solutions/${solution.slug} — created`)
    }

    // ── Blog author + post ────────────────────────────────────────────────
    console.log('Seeding blog author and post...')

    // Create or find author
    let authorId: number | string
    const existingAuthor = await payload.find({ collection: 'users', where: { email: { equals: 'sarah.chen@insaplan.com' } }, limit: 1 })
    if (existingAuthor.docs.length > 0) {
        authorId = existingAuthor.docs[0].id
        console.log('  author — already exists, skipping')
    } else {
        const author = await payload.create({
            collection: 'users',
            data: {
                name: 'Sarah Chen',
                email: 'sarah.chen@insaplan.com',
                password: Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2),
                role: 'editor',
            } as any,
        })
        authorId = author.id
        console.log('  author — created')
    }

    // Create or find placeholder media
    let mediaId: number | string
    const existingMedia = await payload.find({ collection: 'media', where: { filename: { equals: 'blog-strategy-placeholder.svg' } }, limit: 1 })
    if (existingMedia.docs.length > 0) {
        mediaId = existingMedia.docs[0].id
        console.log('  media — already exists, skipping')
    } else {
        // Create a minimal SVG buffer as placeholder
        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#1a3264"/><rect x="100" y="180" width="400" height="12" rx="6" fill="rgba(255,255,255,0.3)"/><rect x="100" y="210" width="300" height="8" rx="4" fill="rgba(255,255,255,0.18)"/><rect x="100" y="280" width="60" height="80" rx="4" fill="rgba(148,180,255,0.4)"/><rect x="180" y="240" width="60" height="120" rx="4" fill="rgba(148,180,255,0.5)"/><rect x="260" y="260" width="60" height="100" rx="4" fill="rgba(148,180,255,0.35)"/><rect x="340" y="220" width="60" height="140" rx="4" fill="rgba(148,180,255,0.6)"/></svg>`
        const buffer = Buffer.from(svgContent)
        const media = await payload.create({
            collection: 'media',
            data: { alt: 'How to Build a Good Strategy Plan' } as any,
            file: {
                data: buffer,
                mimetype: 'image/svg+xml',
                name: 'blog-strategy-placeholder.svg',
                size: buffer.length,
            },
        })
        mediaId = media.id
        console.log('  media — created')
    }

    // Blog post content
    const blogContent = {
        root: {
            type: 'root',
            children: [
                {
                    type: 'heading', tag: 'h2', version: 1,
                    children: [{ type: 'text', text: 'Why Most Strategic Plans Fail', version: 1 }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'Research consistently shows that between 60% and 90% of strategic plans never get fully executed. The documents are produced, circulated, and then quietly forgotten as the organisation returns to the gravitational pull of day-to-day operations. The problem is rarely the quality of the thinking. It is the way the plan is built, communicated, and tracked.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'heading', tag: 'h2', version: 1,
                    children: [{ type: 'text', text: '1. Start With the Right Question', version: 1 }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'Before opening a spreadsheet or a slide deck, ask: what decision does this plan need to enable? A strategy plan is not a history document — it is a decision-making tool. Every section should answer a specific question that leadership, managers, or front-line teams need answered in order to act.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'The best strategic plans are built around three core questions: Where are we now? Where do we want to be? How do we get there? These sound simple, but the discipline of answering them with evidence, specificity, and honest assessment is where most organisations struggle.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'heading', tag: 'h2', version: 1,
                    children: [{ type: 'text', text: '2. Ground the Plan in Evidence', version: 1 }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'Strategic plans built on assumptions rather than evidence erode credibility the moment they meet reality. A strong plan surfaces the data that matters — market trends, competitive positioning, internal performance metrics, customer feedback — and makes it searchable and reusable across planning cycles.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'This is where an integrated knowledge base becomes essential. When your strategic insights, prior research, and benchmark data live alongside your plan — rather than buried in email threads and shared drives — your plan becomes a living document rather than a snapshot.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'heading', tag: 'h2', version: 1,
                    children: [{ type: 'text', text: '3. Use a Framework — But Adapt It', version: 1 }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'Business frameworks like SWOT, OKRs, the Balanced Scorecard, and the Business Model Canvas exist because they encode decades of strategic thinking into structured formats that prompt the right questions. They are starting points, not straitjackets.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'The key is choosing the right framework for your context. OKRs work well for growth-stage organisations that need to cascade goals quickly. The Balanced Scorecard suits mature organisations that need to balance financial performance with operational and customer metrics. SWOT is useful as a rapid-alignment tool but should always feed into something more actionable.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'heading', tag: 'h2', version: 1,
                    children: [{ type: 'text', text: '4. Be Ruthlessly Specific About Priorities', version: 1 }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'The most common failure mode in strategic planning is having too many priorities. When everything is a priority, nothing is. A good strategic plan identifies three to five genuinely strategic bets — initiatives that are differentiating, resource-intensive, and require sustained focus over multiple quarters.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'Each strategic priority should have a clear owner, a measurable outcome, a timeline, and explicit resource commitments. If you cannot name those four things for a priority, it is not yet a priority — it is an aspiration.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'heading', tag: 'h2', version: 1,
                    children: [{ type: 'text', text: '5. Design for Communication, Not Completion', version: 1 }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'A strategic plan that only the leadership team understands is not a strategic plan — it is a leadership document. For a plan to drive execution, every person in the organisation needs to understand how their work connects to the strategic priorities.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'This requires investing in how the plan is presented. Visual structure, clear hierarchy, and compelling infographics are not cosmetic choices — they are communication choices. A well-designed one-page strategy summary that teams can refer to daily is more valuable than a 40-slide deck that gets reviewed once a quarter.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'heading', tag: 'h2', version: 1,
                    children: [{ type: 'text', text: '6. Build in Review Cadences From Day One', version: 1 }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'The moment a strategic plan is published without a defined review cadence, it begins to decay. The operating environment changes, assumptions prove wrong, and new opportunities emerge. A plan without built-in checkpoints cannot adapt.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'Effective organisations schedule quarterly strategy reviews that are distinct from operational reviews. The purpose is not to report on activity — it is to assess whether the strategic bets are still the right ones, whether the evidence base has shifted, and whether resources need to be reallocated. This review loop is what transforms a static document into a genuine management tool.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'heading', tag: 'h2', version: 1,
                    children: [{ type: 'text', text: 'The Role of AI in Modern Strategic Planning', version: 1 }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'AI is beginning to change the economics of strategic planning. Tasks that previously required days of analyst time — synthesising research, identifying patterns across datasets, generating scenario analyses — can now be done in hours. This shifts the focus of strategic planning from data gathering to strategic judgement, which is where human expertise creates the most value.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'The most effective use of AI in strategic planning is not to replace the thinking — it is to accelerate the preparation and reduce the blank-page problem. When AI can surface relevant insights, suggest frameworks appropriate to your context, and flag gaps in your reasoning, your team spends less time on process and more time on substance.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'heading', tag: 'h2', version: 1,
                    children: [{ type: 'text', text: 'A Practical Checklist', version: 1 }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'Before finalising your next strategic plan, run it through these questions: Does it start with a clear statement of where you are and why that matters? Is every priority backed by evidence and owned by a named individual? Are the success metrics specific, measurable, and time-bound? Can a front-line team member explain how their work connects to the plan? Does it have a defined review cadence with pre-scheduled checkpoints? Is it presented in a format that can be used as a working document, not just read once?' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
                {
                    type: 'paragraph', version: 1,
                    children: [{ type: 'text', version: 1, text: 'If you can answer yes to all six, you have a strategic plan that has a genuine chance of being executed.' }],
                    direction: 'ltr' as const, format: '' as const, indent: 0,
                },
            ],
            direction: 'ltr' as const,
            format: '' as const,
            indent: 0,
            version: 1,
        },
    }

    const existingPost = await payload.find({ collection: 'blog-posts', where: { slug: { equals: 'how-to-build-a-good-strategy-plan' } }, limit: 1 })
    if (existingPost.docs.length > 0) {
        console.log('  blog post — already exists, skipping')
    } else {
        await payload.create({
            collection: 'blog-posts',
            data: {
                title: 'How to Build a Good Strategy Plan',
                slug: 'how-to-build-a-good-strategy-plan',
                excerpt: 'Most strategic plans fail not because of poor thinking, but because of how they are built, communicated, and tracked. Here is a practical guide to getting it right.',
                content: blogContent,
                author: authorId,
                featuredImage: mediaId,
                category: 'best-practices',
                tags: ['strategy', 'planning', 'frameworks', 'OKRs', 'leadership'],
                status: 'published',
                publishedDate: new Date('2026-04-15').toISOString(),
                readTime: 8,
            } as any,
        })
        console.log('  blog post — created')
    }

    // ── Pricing Plans collection ──────────────────────────────────────────
    console.log('Seeding pricing-plans collection...')
    const pricingPlans = [
        {
            planName: 'Starter', planType: 'starter' as const,
            description: 'Perfect for small teams getting started with strategic planning.',
            price: 29, billingPeriod: 'monthly' as const, currency: 'USD' as const, order: 1, popular: false,
            features: [
                { feature: 'Users', included: true, limit: 'Up to 3' },
                { feature: 'Strategic plans', included: true, limit: '5' },
                { feature: 'AI-assisted planning', included: true, limit: '' },
                { feature: 'Beautiful reports', included: true, limit: '' },
                { feature: 'Business frameworks', included: true, limit: '' },
                { feature: 'Knowledge base', included: false, limit: '' },
                { feature: 'Custom branding', included: false, limit: '' },
                { feature: 'Priority support', included: false, limit: '' },
            ],
            cta: { text: 'Get Started', url: '/contact', variant: 'outline' as const },
        },
        {
            planName: 'Professional', planType: 'professional' as const,
            description: 'For growing teams that need advanced planning and reporting capabilities.',
            price: 99, billingPeriod: 'monthly' as const, currency: 'USD' as const, order: 2, popular: true,
            features: [
                { feature: 'Users', included: true, limit: 'Up to 10' },
                { feature: 'Strategic plans', included: true, limit: 'Unlimited' },
                { feature: 'AI-assisted planning', included: true, limit: '' },
                { feature: 'Beautiful reports', included: true, limit: '' },
                { feature: 'Business frameworks', included: true, limit: '' },
                { feature: 'Knowledge base', included: true, limit: '' },
                { feature: 'Custom branding', included: true, limit: '' },
                { feature: 'Priority support', included: false, limit: '' },
            ],
            cta: { text: 'Get Started', url: '/contact', variant: 'primary' as const },
        },
        {
            planName: 'Enterprise', planType: 'enterprise' as const,
            description: 'For large organisations requiring custom workflows, SSO, and dedicated support.',
            price: 299, billingPeriod: 'monthly' as const, currency: 'USD' as const, order: 3, popular: false,
            features: [
                { feature: 'Users', included: true, limit: 'Unlimited' },
                { feature: 'Strategic plans', included: true, limit: 'Unlimited' },
                { feature: 'AI-assisted planning', included: true, limit: '' },
                { feature: 'Beautiful reports', included: true, limit: '' },
                { feature: 'Business frameworks', included: true, limit: '' },
                { feature: 'Knowledge base', included: true, limit: '' },
                { feature: 'Custom branding', included: true, limit: '' },
                { feature: 'Priority support', included: true, limit: '' },
            ],
            cta: { text: 'Contact Sales', url: '/contact', variant: 'outline' as const },
        },
    ]

    for (const plan of pricingPlans) {
        const existing = await payload.find({ collection: 'pricing-plans', where: { planName: { equals: plan.planName } }, limit: 1 })
        if (existing.docs.length > 0) {
            console.log(`  pricing-plans/${plan.planName} — already exists, skipping`)
            continue
        }
        await payload.create({ collection: 'pricing-plans', data: plan as any })
        console.log(`  pricing-plans/${plan.planName} — created`)
    }

    // ── FAQs Page global ──────────────────────────────────────────────────
    console.log('Seeding faqs-page...')
    await payload.updateGlobal({
        slug: 'faqs-page',
        data: {
            heroTitle: 'Frequently Asked Questions',
            heroSubtitle: 'Everything you need to know about Insaplan',
            emptyStateMessage: 'No FAQs available yet.',
            categoryLabels: [
                { slug: 'general', label: 'General' },
                { slug: 'features', label: 'Features' },
                { slug: 'billing', label: 'Billing' },
                { slug: 'account', label: 'Account' },
                { slug: 'technical', label: 'Technical' },
                { slug: 'security', label: 'Security' },
            ],
        } as any,
    })
    console.log('  done.')

    // ── FAQs collection ───────────────────────────────────────────────────
    console.log('Seeding faqs collection...')

    const faqs = [
        { question: 'What is Insaplan?', answer: richText('Insaplan is a strategic planning platform that helps organisations capture insights, build plans using proven frameworks, and generate beautiful reports — all in one place.'), category: 'general', order: 1 },
        { question: 'Who is Insaplan designed for?', answer: richText('Insaplan is built for strategy, planning, and leadership teams in organisations of all sizes — from growth-stage startups to enterprise teams.'), category: 'general', order: 2 },
        { question: 'What planning frameworks does Insaplan support?', answer: richText('Insaplan includes templates and guidance for SWOT, OKRs, Business Model Canvas, PESTLE, Balanced Scorecard, and more. New frameworks are added regularly.'), category: 'features', order: 3 },
        { question: 'Can I export my plans and reports?', answer: richText('Yes. You can export plans and reports to PDF and other formats. Branded exports are available on Pro and Enterprise plans.'), category: 'features', order: 4 },
        { question: 'How does AI assistance work?', answer: richText('Insaplan uses AI to surface relevant insights, suggest plan content based on your goals, and highlight gaps in your strategy. You remain in full control of all outputs.'), category: 'features', order: 5 },
        { question: 'What are the billing options?', answer: richText('We offer monthly and annual billing. Annual plans include a discount. All plans start with a free trial — no credit card required.'), category: 'billing', order: 6 },
        { question: 'Can I change my plan later?', answer: richText('Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle.'), category: 'billing', order: 7 },
        { question: 'Is my data secure?', answer: richText('Yes. All data is encrypted at rest and in transit. We follow industry-standard security practices and comply with GDPR.'), category: 'security', order: 8 },
    ]
    for (const faq of faqs) {
        const existing = await payload.find({ collection: 'faqs', where: { question: { equals: faq.question } }, limit: 1 })
        if (existing.docs.length > 0) {
            console.log(`  faqs/"${faq.question.slice(0, 40)}..." — already exists, skipping`)
            continue
        }
        await payload.create({ collection: 'faqs', data: faq as any })
        console.log(`  faqs/"${faq.question.slice(0, 40)}..." — created`)
    }
    console.log('  done.')

    console.log('\nAll done!')
    process.exit(0)
}

seed().catch((err) => {
    console.error('Seed failed:', err)
    process.exit(1)
})
