# PayloadCMS Quick Reference

## Common Commands

### Development
```bash
# Start PayloadCMS
cd payload-cms && pnpm dev

# Start main app
pnpm dev

# Generate static content from CMS
pnpm cms:generate

# Start both (use two terminals)
pnpm cms:dev  # Terminal 1
pnpm dev      # Terminal 2
```

### Production
```bash
# Build PayloadCMS
cd payload-cms && pnpm build

# Build main app (includes content generation)
pnpm build

# Start PayloadCMS
cd payload-cms && pnpm start
```

## URLs

- **Admin Panel**: http://localhost:3001/admin
- **REST API**: http://localhost:3001/api
- **GraphQL**: http://localhost:3001/api/graphql
- **Main App**: http://localhost:3000

## API Examples

### REST API

```bash
# Get all published blog posts
curl http://localhost:3001/api/blog-posts?where[status][equals]=published&limit=10

# Get page by slug
curl http://localhost:3001/api/pages?where[slug][equals]=about&limit=1

# Get pricing plans
curl http://localhost:3001/api/pricing-plans?sort=order

# Get site settings
curl http://localhost:3001/api/globals/site-settings

# Submit form
curl -X POST http://localhost:3001/api/form-submissions \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contact",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
  }'
```

### GraphQL

```graphql
# Query blog posts
query {
  BlogPosts(where: { status: { equals: published } }, limit: 10) {
    docs {
      id
      title
      slug
      excerpt
      featuredImage {
        url
        alt
      }
    }
  }
}

# Query knowledge base articles
query {
  KnowledgeBase(where: { category: { equals: "getting-started" } }) {
    docs {
      id
      title
      slug
      category
    }
  }
}

# Query site settings
query {
  SiteSettings {
    siteName
    logo {
      url
      alt
    }
    socialLinks {
      twitter
      linkedin
    }
  }
}
```

## Collection Slugs

| Collection | Slug | Purpose |
|------------|------|---------|
| Pages | `pages` | Landing pages, legal |
| Blog Posts | `blog-posts` | Articles |
| Knowledge Base | `knowledge-base` | Help docs |
| FAQs | `faqs` | Support Q&A |
| Pricing Plans | `pricing-plans` | Product pricing |
| Solutions | `solutions` | Solution pages |
| Product Features | `product-features` | Feature listings |
| Case Studies | `case-studies` | Customer stories |
| Testimonials | `testimonials` | Quotes |
| Changelog | `changelog` | Updates |
| Navigation | `navigation-menus` | Menus |
| Forms | `form-submissions` | Leads |
| Media | `media` | Assets |
| Users | `users` | Admin users |

## Field Types

- `text`: Single line text
- `textarea`: Multi-line text
- `richText`: Lexical editor
- `email`: Email validation
- `number`: Numeric input
- `date`: Date picker
- `checkbox`: Boolean
- `select`: Dropdown
- `upload`: File/image
- `relationship`: Link to other collection
- `array`: Repeatable fields
- `group`: Nested fields
- `json`: Raw JSON

## Status Values

- `draft`: Work in progress
- `published`: Live on website
- `archived`: Hidden but preserved

## Common Queries

### In Main App (TypeScript)

```typescript
import { fetchBlogPost, fetchAllBlogPosts, fetchSiteSettings } from '@Utils/cms/fetchContent'

// Get single blog post
const post = await fetchBlogPost('welcome-post')

// Get all blog posts (paginated)
const { docs, totalDocs, hasNextPage } = await fetchAllBlogPosts(10, 1)

// Get site settings
const settings = await fetchSiteSettings()
```

### Using Static Data (SSG)

```typescript
import blogPosts from '@/generated-content/blog-posts.json'
import pricingPlans from '@/generated-content/pricing-plans.json'

// Data is pre-fetched at build time
const posts = blogPosts as BlogPost[]
```

## Troubleshooting

### "Cannot connect to database"
```bash
# Check DATABASE_URL in .env
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL -c "SELECT 1"
```

### "Port 3001 already in use"
```bash
# Kill process
lsof -ti:3001 | xargs kill -9
```

### "Content not updating"
```bash
# Regenerate static content
pnpm cms:generate

# Clear browser cache
# Restart dev server
```

### "Type errors in main app"
```bash
# Regenerate Payload types
cd payload-cms
pnpm generate:types

# Copy types to main app
cp payload-types.ts ../src/types/payload-types.ts
```

## Environment Variables

### Required
```env
DATABASE_URL=postgresql://user:password@localhost:5432/insaplan
PAYLOAD_SECRET=your-secret-key
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
```

### Main App
```env
VITE_PAYLOAD_API_URL=http://localhost:3001/api
VITE_PAYLOAD_API_KEY=optional-for-local
```

## File Structure

```
payload-cms/
├── src/
│   ├── collections/      # Content types
│   ├── globals/         # Singletons
│   ├── fields/          # Reusable fields
│   ├── access/          # Permissions
│   ├── hooks/           # Lifecycle hooks
│   └── payload.config.ts
└── media/               # Uploads

src/
├── lib/
│   └── payloadClient.ts    # API client
├── utils/cms/
│   └── fetchContent.ts     # Fetch helpers
└── generated-content/      # Static data
    ├── blog-posts.json
    ├── pages.json
    └── ...
```

## Best Practices

1. **Always publish, never delete**: Use `archived` status instead
2. **Fill in SEO fields**: Better search rankings
3. **Use descriptive slugs**: Good for URLs
4. **Optimize images**: Compress before upload
5. **Write good alt text**: Accessibility + SEO
6. **Test before publish**: Use draft mode
7. **Backup regularly**: Database + media

## Support

- Setup Guide: `/docs/payload-cms-setup-guide.md`
- Integration Plan: `/docs/payload-cms-integration-plan.md`
- PayloadCMS Docs: https://payloadcms.com/docs
