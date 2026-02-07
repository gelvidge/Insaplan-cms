# Insaplan CMS

PayloadCMS v3 headless CMS for managing Insaplan marketing website content.

> **Architecture**: This is a standalone Next.js 15 application, separate from the main Insaplan app. It provides a REST and GraphQL API for content management.

## Overview

This PayloadCMS v3 instance manages all content for the marketing website (`/` routes), including:

- **Pages**: Landing pages, legal pages
- **Blog Posts**: Articles and company news
- **Knowledge Base**: Help documentation
- **FAQs**: Support questions
- **Pricing Plans**: Product pricing
- **Solutions**: Solution pages (sales, marketing, etc.)
- **Product Features**: Feature listings
- **Case Studies**: Customer stories
- **Testimonials**: Customer quotes
- **Changelog**: Product updates
- **Site Settings**: Global configuration
- **Navigation Menus**: Header/footer menus
- **Form Submissions**: Lead capture

## Tech Stack

- **PayloadCMS v3.6+** - Headless CMS framework
- **Next.js 15+** - React framework with App Router
- **PostgreSQL** - Database (configured for Supabase)
- **TypeScript 5.7+** - Type safety
- **Lexical Editor** - Rich text editing
- **React 19** - UI library

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm
- PostgreSQL database (Supabase account recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Configure environment
cp .env.example .env
# Edit .env with your database and secrets

# Generate Payload secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Start development server
pnpm dev
```

Access admin panel at: `http://localhost:3001/admin`

**Important**: For Supabase, use:
- Port 6543 (direct connection)
- Add `?pgbouncer=true&connection_limit=1` to connection string
- URL-encode special characters in password (e.g., `!` → `%21`)

## Scripts

```bash
# Development
pnpm dev              # Start Next.js dev server on port 3001

# Production
pnpm build            # Build Next.js app for production
pnpm start            # Start production server on port 3001

# Type Generation
pnpm generate:types   # Generate TypeScript types from collections

# Payload CLI
pnpm payload          # Access Payload CLI commands
```

## Project Structure

```
payload-cms/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (payload)/             # Payload route group
│   │   │   ├── admin/             # Admin panel
│   │   │   │   └── [[...segments]]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── not-found.tsx
│   │   │   └── api/               # REST & GraphQL APIs
│   │   │       ├── [...slug]/
│   │   │       │   └── route.ts
│   │   │       ├── graphql/
│   │   │       │   └── route.ts
│   │   │       └── graphql-playground/
│   │   │           └── route.ts
│   │   ├── layout.tsx             # Root layout
│   │   └── globals.css            # Global styles
│   ├── collections/               # Content type definitions
│   │   ├── Pages.ts
│   │   ├── BlogPosts.ts
│   │   ├── KnowledgeBase.ts
│   │   ├── Media.ts
│   │   ├── Users.ts
│   │   └── ...
│   ├── globals/                   # Global singletons
│   │   └── SiteSettings.ts
│   ├── migrations/                # Database migrations
│   └── payload.config.ts          # Payload configuration
├── .next/                         # Next.js build (gitignored)
├── node_modules/                  # Dependencies (gitignored)
├── payload-types.ts               # Generated TypeScript types
├── next.config.mjs                # Next.js configuration
├── next-env.d.ts                  # Next.js type definitions
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies and scripts
├── .env                           # Environment variables (gitignored)
├── .env.example                   # Environment template
├── .gitignore                     # Git ignore rules
├── Dockerfile                     # Container definition
├── docker-compose.yml             # Local Docker setup
└── README.md                      # This file
```

## Collections

### Content Collections

**Pages**
- Flexible page builder
- SEO metadata
- Draft/published workflow
- Version history

**Blog Posts**
- Rich text editor (Lexical)
- Featured images
- Categories and tags
- Auto-calculated read time
- Author relationship

**Knowledge Base**
- Categorized articles
- Related articles
- View/helpful tracking
- Search keywords

**FAQs**
- Categorized Q&A
- Display ordering
- Helpful votes
- Related KB articles

### Marketing Collections

**Pricing Plans**
- Flexible features array
- Multiple currencies
- CTA configuration
- Popular badge

**Solutions**
- Hero images
- Key features
- Use cases
- Case study relationships

**Product Features**
- Screenshots/videos
- Plan availability
- Coming soon flag
- Feature categories

**Case Studies**
- Company details
- Challenge/solution format
- Results metrics
- Customer quotes

**Testimonials**
- Author details
- Company logos
- Featured flag
- Display ordering

### System Collections

**Navigation Menus**
- Header/footer/mobile
- Nested dropdown support
- Page relationships
- Custom links

**Form Submissions**
- Lead capture
- Status tracking
- Metadata storage
- Source attribution

**Media**
- Automatic image resizing
- Multiple formats
- Alt text required
- CDN ready

### Global Configuration

**Site Settings**
- General info
- Social links
- Analytics IDs
- Contact details
- Maintenance mode

## API Usage

### REST API

```bash
# Get all published blog posts
curl http://localhost:3001/api/blog-posts?where[status][equals]=published

# Get specific page by slug
curl http://localhost:3001/api/pages?where[slug][equals]=about

# Get site settings
curl http://localhost:3001/api/globals/site-settings
```

### GraphQL API

```graphql
query GetBlogPosts {
  BlogPosts(where: { status: { equals: published } }) {
    docs {
      id
      title
      slug
      excerpt
      featuredImage {
        url
        alt
      }
      publishedDate
    }
  }
}
```

GraphQL Playground: `http://localhost:3001/api/graphql`

## Access Control

### Roles

- **Admin**: Full access
- **Editor**: Create/edit content, no delete
- **Viewer**: Read-only access

### Collection Access

- **Public Read**: Published content only
- **Editor Write**: Admins and editors can modify
- **Admin Only**: Settings, users, critical data

## Webhooks

### Rebuild Trigger

On content publish, PayloadCMS triggers a webhook to rebuild your static site:

```typescript
// Configured in collections with:
import { withRebuildHook } from './hooks/triggerRebuild'

export const BlogPosts = withRebuildHook({
  // ... collection config
})
```

Set `REBUILD_WEBHOOK_URL` in environment variables.

## Deployment

### Digital Ocean App Platform

```bash
# Deploy using app spec
doctl apps create --spec .do/app.yaml
```

### Docker

```bash
# Build image
docker build -t insaplan-cms .

# Run with docker-compose
docker-compose up -d
```

### Manual

```bash
# Build
pnpm build

# Start
NODE_ENV=production pnpm start
```

## Environment Variables

### Required

```env
DATABASE_URL=postgresql://user:password@host:5432/db
PAYLOAD_SECRET=your-secret-key
PAYLOAD_PUBLIC_SERVER_URL=https://cms.insaplan.com
```

### Optional

```env
REBUILD_WEBHOOK_URL=https://your-deploy-webhook
S3_ENDPOINT=https://s3.amazonaws.com
S3_BUCKET=your-bucket
S3_ACCESS_KEY_ID=your-key
S3_SECRET_ACCESS_KEY=your-secret
```

## Security

### Best Practices

1. **Secrets**: Use strong, randomly generated keys
2. **Database**: Restrict network access
3. **API Keys**: Rotate regularly
4. **HTTPS**: Always use SSL in production
5. **Rate Limiting**: Configure on reverse proxy
6. **Backups**: Daily automated backups

### CORS Configuration

Configure allowed origins in `src/payload.config.ts`:

```typescript
cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'https://insaplan.com',  // Add production domains
    'https://www.insaplan.com'
].filter(Boolean)
```

Set `FRONTEND_URL` environment variable to your main app's URL.

## Performance

### Caching

- Static content cached for 5 minutes
- Media served via CDN
- GraphQL queries optimized

### Image Optimization

Automatic generation of multiple sizes:
- `thumbnail`: 400x300
- `card`: 768x512
- `hero`: 1920x1080
- `og`: 1200x630

## Development

### Adding a New Collection

1. Create collection file in `src/collections/`
2. Define fields and access control
3. Import in `payload.config.ts`
4. Run type generation: `pnpm generate:types`

### Custom Fields

Reusable fields in `src/fields/`:
- `slugField`: Auto-generated slugs
- `statusField`: Draft/published
- `seoFields`: Meta tags

### Hooks

Add lifecycle hooks in `src/hooks/`:
- `beforeChange`: Modify before save
- `afterChange`: Trigger actions after save
- `beforeRead`: Filter read operations

## Monitoring

### Logs

```bash
# View logs in development
pnpm dev --verbose

# Docker logs
docker logs insaplan-cms -f
```

### Health Check

```bash
curl http://localhost:3001/health
```

## Backup & Recovery

### Database Backup

```bash
pg_dump $DATABASE_URL > backup.sql
```

### Media Backup

```bash
tar -czf media-backup.tar.gz media/
```

### Restore

```bash
psql $DATABASE_URL < backup.sql
tar -xzf media-backup.tar.gz
```

## Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

**Database connection fails**
```bash
# Test connection
psql $DATABASE_URL -c "SELECT 1"
```

**Build fails**
```bash
# Clear cache and rebuild
rm -rf dist node_modules
pnpm install
pnpm build
```

## Support

- **Documentation**: See `/docs/payload-cms-setup-guide.md`
- **Payload Docs**: https://payloadcms.com/docs
- **Issues**: GitHub Issues
- **Team**: Contact your development team

## License

Private - Insaplan Internal Use Only
