# PayloadCMS Integration Plan for Insaplan

## Executive Summary

This document outlines the integration of PayloadCMS as a headless CMS for managing marketing website content (all non-`/app/*` routes). The solution uses a separate PayloadCMS deployment with static site generation for optimal performance and maintainability.

## Architecture Overview

### Deployment Strategy
- **PayloadCMS**: Separate application deployed at `cms.insaplan.com`
- **Main App**: Existing React app at `insaplan.com`
- **Content Flow**: Payload → Webhook → Build trigger → Static pages generated
- **Database**: Shared PostgreSQL database with separate schema for Payload

### Technology Stack
- **CMS**: PayloadCMS 3.x (latest stable)
- **API**: Payload REST API + GraphQL (optional)
- **Build**: Vite with static page generation
- **Hosting Options**:
  - Digital Ocean Droplet/App Platform
  - AWS (EC2 + S3 for static assets, or Amplify)

## Content Collections Design

### 1. Pages Collection
Flexible page builder for landing pages, legal pages, etc.

```typescript
{
  slug: 'text', // URL slug
  title: 'text',
  metaTitle: 'text',
  metaDescription: 'text',
  status: 'draft | published',
  publishedDate: 'date',
  layout: 'lexical', // Rich content editor
  seo: {
    ogImage: 'upload',
    canonicalUrl: 'text',
    noIndex: 'checkbox'
  }
}
```

**Use for**: Legal, Contact, About, custom landing pages

### 2. Blog Posts Collection
```typescript
{
  slug: 'text',
  title: 'text',
  excerpt: 'textarea',
  featuredImage: 'upload',
  content: 'lexical',
  author: 'relationship:users',
  category: 'relationship:blogCategories',
  tags: 'relationship:tags[]',
  publishedDate: 'date',
  status: 'draft | published | scheduled',
  seo: { /* same as Pages */ }
}
```

**Routes**: `/blog`, `/blog/:slug`

### 3. Knowledge Base Articles
```typescript
{
  slug: 'text',
  title: 'text',
  content: 'lexical',
  category: 'relationship:kbCategories',
  subcategory: 'relationship:kbSubcategories',
  relatedArticles: 'relationship:knowledgeBase[]',
  searchKeywords: 'text[]',
  helpfulness: 'number', // Track user ratings
  viewCount: 'number',
  lastReviewed: 'date',
  status: 'draft | published | outdated'
}
```

**Routes**: `/resources/knowledge-base`, `/resources/knowledge-base/:slug`

### 4. FAQ Collection
```typescript
{
  question: 'text',
  answer: 'lexical',
  category: 'select:general|technical|billing|account',
  order: 'number',
  helpfulCount: 'number',
  notHelpfulCount: 'number',
  relatedArticles: 'relationship:knowledgeBase[]'
}
```

**Routes**: `/resources/support`, `/resources/faq`

### 5. Pricing Plans
```typescript
{
  planName: 'text',
  planType: 'select:starter|professional|enterprise|custom',
  price: 'number',
  billingPeriod: 'select:monthly|annual',
  currency: 'select:USD|EUR|GBP',
  features: 'array[{
    feature: text,
    included: boolean,
    limit: text
  }]',
  cta: {
    text: 'text',
    url: 'text',
    variant: 'primary|secondary'
  },
  popular: 'checkbox',
  order: 'number'
}
```

**Routes**: `/pricing`

### 6. Solutions Collection
```typescript
{
  slug: 'text', // 'sales', 'marketing', 'startups', etc.
  title: 'text',
  subtitle: 'text',
  heroImage: 'upload',
  overview: 'lexical',
  keyFeatures: 'array[{
    title: text,
    description: textarea,
    icon: text
  }]',
  useCases: 'array[{
    title: text,
    description: textarea,
    image: upload
  }]',
  caseStudies: 'relationship:caseStudies[]',
  cta: { /* same structure */ }
}
```

**Routes**: `/solutions/:slug`

### 7. Product Features
```typescript
{
  slug: 'text',
  name: 'text',
  tagline: 'text',
  description: 'lexical',
  icon: 'upload',
  screenshot: 'upload',
  video: 'upload',
  category: 'relationship:featureCategories',
  availableIn: 'select[]:starter|professional|enterprise',
  order: 'number',
  comingSoon: 'checkbox'
}
```

**Routes**: `/product/features`, `/product/features/:slug`

### 8. Case Studies
```typescript
{
  slug: 'text',
  companyName: 'text',
  companyLogo: 'upload',
  industry: 'select:saas|ecommerce|healthcare|finance|other',
  companySize: 'select:startup|smb|enterprise',
  challenge: 'lexical',
  solution: 'lexical',
  results: 'array[{
    metric: text,
    value: text,
    improvement: text
  }]',
  quote: {
    text: 'textarea',
    author: 'text',
    role: 'text',
    photo: 'upload'
  },
  heroImage: 'upload',
  publishedDate: 'date'
}
```

**Routes**: `/case-studies`, `/case-studies/:slug`

### 9. Testimonials
```typescript
{
  quote: 'textarea',
  author: 'text',
  role: 'text',
  company: 'text',
  companyLogo: 'upload',
  photo: 'upload',
  rating: 'number',
  featured: 'checkbox',
  order: 'number'
}
```

**Used in**: Various pages as embedded content

### 10. Changelog
```typescript
{
  version: 'text',
  releaseDate: 'date',
  title: 'text',
  summary: 'textarea',
  changes: 'array[{
    type: select:feature|improvement|bugfix|security,
    description: text
  }]',
  breaking: 'checkbox'
}
```

**Routes**: `/changelog`, `/changelog/:version`

### 11. Site Settings (Global Singleton)
```typescript
{
  siteName: 'text',
  siteDescription: 'textarea',
  logo: 'upload',
  favicon: 'upload',
  socialLinks: {
    twitter: 'text',
    linkedin: 'text',
    github: 'text'
  },
  analytics: {
    googleAnalyticsId: 'text',
    plausibleDomain: 'text'
  },
  contact: {
    email: 'email',
    phone: 'text',
    address: 'textarea'
  },
  maintenance: {
    enabled: 'checkbox',
    message: 'textarea'
  }
}
```

### 12. Navigation Menus
```typescript
{
  name: 'text',
  location: 'select:header|footer|mobile',
  items: 'array[{
    label: text,
    url: text,
    type: select:page|custom|dropdown,
    children: array[]
  }]'
}
```

### 13. Form Submissions
```typescript
{
  formType: 'select:contact|demo|waitlist|newsletter',
  name: 'text',
  email: 'email',
  company: 'text',
  message: 'textarea',
  metadata: 'json',
  submittedAt: 'date',
  status: 'select:new|contacted|converted|spam',
  source: 'text' // UTM tracking
}
```

### 14. Media Library
Built-in Payload uploads with:
- Image optimization
- Multiple sizes/formats
- CDN integration
- Alt text and metadata

## Implementation Steps

### Phase 1: PayloadCMS Setup (Week 1)

#### 1.1 Create Payload Project
```bash
npx create-payload-app@latest payload-cms
cd payload-cms
```

Configuration options:
- Database: PostgreSQL
- Template: Blank
- TypeScript: Yes

#### 1.2 Database Schema
- Use same PostgreSQL instance as main app
- Create separate schema: `payload_cms`
- Update connection string in Payload config

```typescript
// payload.config.ts
export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'https://cms.insaplan.com',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
      schema: 'payload_cms'
    }
  }),
  collections: [
    Pages,
    BlogPosts,
    KnowledgeBase,
    // ... other collections
  ],
  globals: [
    SiteSettings,
    NavigationMenus
  ]
})
```

#### 1.3 Define Collections
Create collection configs for all 14 collections listed above.

#### 1.4 Access Control
```typescript
// Basic access control
const isAdmin = ({ req: { user } }) => user?.role === 'admin'
const isEditor = ({ req: { user } }) => ['admin', 'editor'].includes(user?.role)

// Apply to collections
{
  access: {
    read: () => true, // Public read
    create: isEditor,
    update: isEditor,
    delete: isAdmin
  }
}
```

### Phase 2: Main App Integration (Week 2)

#### 2.1 Install Dependencies
```bash
pnpm add @payloadcms/client graphql-request date-fns gray-matter
```

#### 2.2 Create Payload Client
```typescript
// src/lib/payloadClient.ts
import { GraphQLClient } from 'graphql-request'

const PAYLOAD_API_URL = import.meta.env.VITE_PAYLOAD_API_URL || 'https://cms.insaplan.com/api'
const PAYLOAD_API_KEY = import.meta.env.VITE_PAYLOAD_API_KEY

export const payloadClient = new GraphQLClient(`${PAYLOAD_API_URL}/graphql`, {
  headers: {
    'Authorization': `Bearer ${PAYLOAD_API_KEY}`
  }
})

// REST client for specific needs
export const payloadRest = {
  async get(endpoint: string, params?: Record<string, any>) {
    const url = new URL(`${PAYLOAD_API_URL}${endpoint}`)
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value))
      })
    }
    const response = await fetch(url.toString())
    return response.json()
  }
}
```

#### 2.3 TypeScript Types Generation
Payload can generate TypeScript types for all collections:

```bash
# In payload-cms directory
payload generate:types

# Copy types to main app
cp ./src/payload-types.ts ../src/types/payload-types.ts
```

#### 2.4 Content Fetching Utilities
```typescript
// src/utils/cms/fetchContent.ts
import { payloadClient } from '@/lib/payloadClient'
import type { Page, BlogPost, KnowledgeBaseArticle } from '@/types/payload-types'

export async function fetchPage(slug: string): Promise<Page | null> {
  const query = `
    query GetPage($slug: String!) {
      Pages(where: { slug: { equals: $slug }, status: { equals: published } }) {
        docs {
          id
          title
          content
          metaTitle
          metaDescription
          seo {
            ogImage {
              url
            }
          }
        }
      }
    }
  `

  const data = await payloadClient.request(query, { slug })
  return data.Pages.docs[0] || null
}

export async function fetchAllBlogPosts(limit = 10, page = 1): Promise<BlogPost[]> {
  const query = `
    query GetBlogPosts($limit: Int, $page: Int) {
      BlogPosts(
        limit: $limit,
        page: $page,
        where: { status: { equals: published } },
        sort: "-publishedDate"
      ) {
        docs {
          id
          slug
          title
          excerpt
          featuredImage {
            url
            alt
          }
          author {
            name
          }
          publishedDate
        }
        totalDocs
        hasNextPage
      }
    }
  `

  const data = await payloadClient.request(query, { limit, page })
  return data.BlogPosts.docs
}

// Similar functions for other collections...
```

#### 2.5 Static Site Generation Setup

Since you're using Vite, we'll need to implement a build-time data fetching strategy:

```typescript
// scripts/generateStaticContent.ts
import fs from 'fs/promises'
import path from 'path'
import { fetchAllBlogPosts, fetchAllPages, fetchAllKnowledgeBase } from '../src/utils/cms/fetchContent'

async function generateStaticContent() {
  console.log('Fetching content from PayloadCMS...')

  // Fetch all content
  const [pages, blogPosts, kbArticles] = await Promise.all([
    fetchAllPages(),
    fetchAllBlogPosts(1000),
    fetchAllKnowledgeBase(1000)
  ])

  // Write to JSON files
  const contentDir = path.join(process.cwd(), 'src', 'generated-content')
  await fs.mkdir(contentDir, { recursive: true })

  await Promise.all([
    fs.writeFile(
      path.join(contentDir, 'pages.json'),
      JSON.stringify(pages, null, 2)
    ),
    fs.writeFile(
      path.join(contentDir, 'blog-posts.json'),
      JSON.stringify(blogPosts, null, 2)
    ),
    fs.writeFile(
      path.join(contentDir, 'kb-articles.json'),
      JSON.stringify(kbArticles, null, 2)
    )
  ])

  console.log('✓ Static content generated')
}

generateStaticContent().catch(console.error)
```

Add to package.json:
```json
{
  "scripts": {
    "generate:content": "tsx scripts/generateStaticContent.ts",
    "prebuild": "pnpm generate:content"
  }
}
```

#### 2.6 Update Routes to Use CMS Data

Example for blog:
```typescript
// src/routes/blog/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Box, Container, Title, SimpleGrid, Card } from '@mantine/core'
import blogPosts from '@/generated-content/blog-posts.json'
import Footer from '@Components/Landing Page/Footer'

export const Route = createFileRoute('/blog')({
  component: BlogIndexPage
})

function BlogIndexPage() {
  return (
    <Box>
      <Box py={80} bg="linear-gradient(135deg, #060a14 0%, #2e4072 50%, #64317f 100%)">
        <Container size="lg">
          <Title order={1} c="white">Blog</Title>
        </Container>
      </Box>

      <Container size="lg" py={60}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {blogPosts.map(post => (
            <Card key={post.id} shadow="sm" padding="lg">
              <Card.Section>
                <img
                  src={post.featuredImage?.url}
                  alt={post.featuredImage?.alt}
                />
              </Card.Section>
              <Title order={3} mt="md">{post.title}</Title>
              <Text c="dimmed" size="sm" mt="xs">{post.excerpt}</Text>
              <Button
                component={Link}
                to={`/blog/${post.slug}`}
                variant="light"
                mt="md"
              >
                Read more
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      <Footer />
    </Box>
  )
}
```

Example for dynamic blog post:
```typescript
// src/routes/blog/$slug.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Box, Container, Title, Text, TypographyStylesProvider } from '@mantine/core'
import blogPosts from '@/generated-content/blog-posts.json'
import Footer from '@Components/Landing Page/Footer'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = blogPosts.find(p => p.slug === params.slug)
    if (!post) throw new Error('Post not found')
    return { post }
  }
})

function BlogPostPage() {
  const { post } = Route.useLoaderData()

  return (
    <Box>
      <Container size="md" py={60}>
        <Title order={1}>{post.title}</Title>
        <Text c="dimmed" mt="sm">
          {new Date(post.publishedDate).toLocaleDateString()} • {post.author.name}
        </Text>

        <TypographyStylesProvider mt="xl">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </TypographyStylesProvider>
      </Container>

      <Footer />
    </Box>
  )
}
```

### Phase 3: Webhooks & Auto-Rebuild (Week 2-3)

#### 3.1 Payload Webhook Configuration
```typescript
// payload.config.ts
export default buildConfig({
  // ... other config
  hooks: {
    afterChange: [
      async ({ doc, req, operation, collection }) => {
        // Only trigger rebuild on publish/update of published content
        if (operation === 'update' && doc.status === 'published') {
          await triggerRebuild(collection.slug)
        }
      }
    ]
  }
})
```

#### 3.2 Rebuild Trigger Implementation

**For Digital Ocean App Platform:**
```typescript
// payload-cms/src/utils/triggerRebuild.ts
export async function triggerRebuild(collection: string) {
  const webhookUrl = process.env.DO_APP_PLATFORM_WEBHOOK

  if (!webhookUrl) {
    console.warn('No rebuild webhook configured')
    return
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        collection,
        timestamp: new Date().toISOString()
      })
    })
    console.log(`✓ Rebuild triggered for ${collection}`)
  } catch (error) {
    console.error('Rebuild trigger failed:', error)
  }
}
```

**For AWS (CodePipeline/Amplify):**
```typescript
import { CodePipeline } from '@aws-sdk/client-codepipeline'

const codepipeline = new CodePipeline({ region: 'us-east-1' })

export async function triggerRebuild(collection: string) {
  try {
    await codepipeline.startPipelineExecution({
      name: process.env.AWS_PIPELINE_NAME
    })
    console.log(`✓ Rebuild triggered for ${collection}`)
  } catch (error) {
    console.error('Rebuild trigger failed:', error)
  }
}
```

### Phase 4: Deployment (Week 3)

#### 4.1 PayloadCMS Deployment

**Digital Ocean App Platform:**
```yaml
# .do/app.yaml
name: insaplan-cms
services:
  - name: payload
    github:
      repo: your-org/insaplan-payload
      branch: main
      deploy_on_push: true
    build_command: pnpm build
    run_command: pnpm start
    envs:
      - key: DATABASE_URL
        value: ${db.DATABASE_URL}
      - key: PAYLOAD_SECRET
        type: SECRET
      - key: PAYLOAD_PUBLIC_SERVER_URL
        value: https://cms.insaplan.com
    http_port: 3000
    routes:
      - path: /

databases:
  - name: postgres
    engine: PG
    version: "15"
```

**AWS (EC2 + Docker):**
```dockerfile
# Dockerfile
FROM node:20-alpine AS base
RUN corepack enable

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000
CMD ["pnpm", "start"]
```

#### 4.2 Main App Deployment

Update existing deployment to include content generation step:
```json
{
  "scripts": {
    "build": "pnpm generate:content && vite build"
  }
}
```

### Phase 5: Content Migration (Week 4)

#### 5.1 Create Migration Scripts
```typescript
// scripts/migrateContent.ts
import { payloadClient } from '../src/lib/payloadClient'

async function migrateExistingContent() {
  // Example: Migrate hardcoded pricing data
  const pricingPlans = [
    {
      planName: 'Starter',
      planType: 'starter',
      price: 29,
      billingPeriod: 'monthly',
      features: [
        { feature: 'Up to 5 projects', included: true },
        { feature: 'Basic analytics', included: true },
        { feature: 'Email support', included: true }
      ]
    },
    // ... more plans
  ]

  for (const plan of pricingPlans) {
    await payloadClient.request(`
      mutation CreatePricingPlan($data: PricingPlanInput!) {
        createPricingPlan(data: $data) {
          id
        }
      }
    `, { data: plan })
  }

  console.log('✓ Pricing plans migrated')
}

migrateExistingContent().catch(console.error)
```

## Security Considerations

### 1. API Key Management
```typescript
// Use environment variables
VITE_PAYLOAD_API_URL=https://cms.insaplan.com/api
VITE_PAYLOAD_API_KEY=your-api-key-here

// Rotate keys regularly
// Use read-only API keys for production builds
```

### 2. CORS Configuration
```typescript
// payload.config.ts
export default buildConfig({
  cors: [
    'https://insaplan.com',
    'https://www.insaplan.com',
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
  ].filter(Boolean)
})
```

### 3. Rate Limiting
```typescript
// Implement rate limiting on Payload API
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

// Apply to Payload server
```

## Performance Optimization

### 1. Image Optimization
```typescript
// payload.config.ts
export default buildConfig({
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
  }
})
```

### 2. CDN Integration
- Upload media to S3 or Digital Ocean Spaces
- Configure CloudFront or DO CDN
- Update Payload upload adapter

```typescript
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'

export default buildConfig({
  plugins: [
    s3Adapter({
      config: {
        endpoint: process.env.S3_ENDPOINT,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
      },
      bucket: process.env.S3_BUCKET,
    }),
  ]
})
```

### 3. Caching Strategy
```typescript
// Cache CMS responses for 5 minutes
const CMS_CACHE_TTL = 5 * 60 * 1000

const cache = new Map<string, { data: any, timestamp: number }>()

export async function fetchWithCache<T>(
  key: string,
  fetcher: () => Promise<T>
): Promise<T> {
  const cached = cache.get(key)

  if (cached && Date.now() - cached.timestamp < CMS_CACHE_TTL) {
    return cached.data
  }

  const data = await fetcher()
  cache.set(key, { data, timestamp: Date.now() })

  return data
}
```

## Monitoring & Analytics

### 1. Content Analytics
- Track page views per article
- Monitor search queries
- Track helpful/not helpful votes on FAQs

```typescript
// Track in Payload
{
  hooks: {
    afterRead: [
      async ({ doc, req }) => {
        // Increment view count
        await req.payload.update({
          collection: 'knowledge-base',
          id: doc.id,
          data: {
            viewCount: (doc.viewCount || 0) + 1
          }
        })
      }
    ]
  }
}
```

### 2. Build Notifications
- Slack/Discord webhook on successful rebuild
- Email alerts on failed builds
- Status page integration

## Cost Estimation

### Digital Ocean
- **Payload CMS App**: $12-25/month (Basic - Pro)
- **PostgreSQL Database**: $15/month (shared with main app)
- **Spaces (CDN + Storage)**: $5/month + $0.01/GB transfer
- **Main App**: Existing infrastructure
- **Total Additional**: ~$20-30/month

### AWS
- **EC2 (t3.small)**: ~$15/month
- **RDS PostgreSQL**: ~$15/month (can share)
- **S3 + CloudFront**: ~$5-10/month
- **CodePipeline/Amplify**: $1/pipeline
- **Total Additional**: ~$20-35/month

## Timeline Summary

- **Week 1**: PayloadCMS setup, collections, local development
- **Week 2**: Main app integration, content fetching utilities
- **Week 3**: Webhooks, deployment, testing
- **Week 4**: Content migration, documentation, training

**Total Estimated Time**: 3-4 weeks for full implementation

## Next Steps

1. **Immediate**: Review this plan and confirm approach
2. **Day 1-2**: Set up PayloadCMS project locally
3. **Day 3-5**: Define and create all collections
4. **Week 2**: Integrate with main app
5. **Week 3**: Deploy to staging and test
6. **Week 4**: Migrate content and go live

## Additional Recommendations

### Content Workflow
1. **Draft → Review → Publish** workflow
2. **Scheduled Publishing**: Queue posts for future dates
3. **Version Control**: Track content changes over time
4. **Preview URLs**: Generate preview links for unpublished content

### Future Enhancements
1. **Multi-language Support**: i18n plugin for international markets
2. **A/B Testing**: Test different landing page variants
3. **Personalization**: Dynamic content based on user segments
4. **API Rate Limiting**: Protect against abuse
5. **Content Search**: Algolia or Meilisearch integration

### Developer Experience
1. **TypeScript types** auto-generated from Payload schema
2. **GraphQL playground** for testing queries
3. **Storybook** integration for component development with CMS data
4. **Mock data** for local development without CMS

## Questions?

Let me know if you'd like me to:
1. Start implementing any specific phase
2. Create detailed code for specific collections
3. Set up the deployment configuration
4. Create migration scripts for existing content
