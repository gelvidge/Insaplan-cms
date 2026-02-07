# Migration from Express to Next.js

This document explains the architectural change from PayloadCMS v3 Express setup to Next.js.

## What Changed

### Before (Express Server)
```
payload-cms/
├── src/
│   ├── server.ts           # Express server (REMOVED)
│   ├── payload.config.ts
│   └── collections/
└── package.json
```

### After (Next.js)
```
payload-cms/
├── src/
│   ├── app/                # NEW: Next.js App Router
│   │   ├── (payload)/
│   │   │   ├── admin/      # Admin panel routes
│   │   │   └── api/        # REST & GraphQL routes
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── payload.config.ts   # Same config, different usage
│   └── collections/        # Unchanged
├── next.config.mjs         # NEW: Next.js config
└── package.json            # Updated scripts
```

## Why This Change?

PayloadCMS v3 is built on Next.js, not Express. The previous setup attempted to use Express with Payload v3, which is no longer the supported architecture.

**Key Differences:**
- Payload v3.0+ is deeply integrated with Next.js App Router
- Admin panel is now a Next.js application
- API routes use Next.js Route Handlers
- Better TypeScript support and DX
- Built-in optimizations (React Server Components, etc.)

## What Broke (and Why)

### Issue: `payload.router` doesn't exist
```typescript
// ❌ This doesn't work in Payload v3
const payload = await getPayload({ config })
app.use(payload.router)  // Error: Property 'router' does not exist
```

**Why:** Payload v3's `getPayload()` returns a `BasePayload` instance for Local API access, not Express middleware.

### Solution: Use Next.js Route Handlers
```typescript
// ✅ Payload v3 approach
// src/app/(payload)/api/[...slug]/route.ts
import { REST_GET, REST_POST, REST_DELETE, REST_PATCH } from '@payloadcms/next/routes'

export const GET = REST_GET
export const POST = REST_POST
export const DELETE = REST_DELETE
export const PATCH = REST_PATCH
```

## Migration Steps Taken

### 1. Updated Dependencies
```diff
 "dependencies": {
-  "express": "^4.21.2",
+  "next": "^15.1.6",
+  "react": "^19.0.0",
+  "react-dom": "^19.0.0",
+  "sharp": "0.33.5",
   "@payloadcms/next": "^3.75.0",
   ...
 }
```

### 2. Updated Scripts
```diff
 "scripts": {
-  "dev": "tsx src/server.ts",
-  "build": "tsc",
-  "start": "cross-env NODE_ENV=production node dist/server.js",
+  "dev": "next dev --port 3001",
+  "build": "next build",
+  "start": "next start --port 3001",
   ...
 }
```

### 3. Created Next.js Structure
- `next.config.mjs` - Next.js configuration with `withPayload()`
- `src/app/layout.tsx` - Root layout
- `src/app/(payload)/admin/` - Admin panel routes
- `src/app/(payload)/api/` - API routes

### 4. Removed Express Code
- Deleted `src/server.ts` (Express server)
- No longer needed `@types/express`
- No longer needed `tsx` for development

## API Compatibility

Good news: **The API remains the same!**

### REST API (Unchanged)
```bash
GET  /api/pages
POST /api/pages
GET  /api/pages/:id
PATCH /api/pages/:id
DELETE /api/pages/:id
```

### GraphQL (Unchanged)
```bash
POST /api/graphql
GET  /api/graphql-playground
```

### Admin Panel (Same URL)
```
/admin
```

## Local API Usage

If you were using Payload's Local API in the Express setup:

```typescript
// This still works the same way
import { getPayload } from 'payload'
import config from '@/payload.config'

const payload = await getPayload({ config })

// Use Local API
const pages = await payload.find({
    collection: 'pages',
    where: {
        status: { equals: 'published' }
    }
})
```

## Environment Variables (Unchanged)

All environment variables remain the same:
```env
DATABASE_URL=...
PAYLOAD_SECRET=...
PAYLOAD_PUBLIC_SERVER_URL=...
FRONTEND_URL=...
NODE_ENV=...
```

## Development Workflow

### Before
```bash
pnpm dev  # Started Express server with tsx
```

### After
```bash
pnpm dev  # Starts Next.js dev server
```

Same port (3001), same experience!

## Performance Improvements

Next.js provides several benefits:

1. **React Server Components** - Reduced client bundle size
2. **Built-in Optimization** - Image optimization, code splitting
3. **Better Caching** - Automatic static optimization
4. **TypeScript** - Improved type checking with Next.js plugin
5. **Hot Module Replacement** - Faster dev experience

## Breaking Changes (None for API Consumers)

If your main app consumes the CMS API, **nothing changes**:

```typescript
// This still works exactly the same
const response = await fetch('http://localhost:3001/api/blog-posts')
const data = await response.json()
```

## Deployment Changes

### Before: Express Deployment
- Could deploy to any Node.js host
- Required process manager (PM2, etc.)
- Manual setup for static file serving

### After: Next.js Deployment
- Native support on Vercel, Railway, DigitalOcean App Platform
- Built-in production optimizations
- Better serverless support
- Automatic static optimization

See [DEPLOYMENT.md](./DEPLOYMENT.md) for updated deployment guides.

## Troubleshooting

### "Module not found: Can't resolve 'react'"
**Fix:** Install React dependencies
```bash
pnpm install
```

### "next.config.mjs not found"
**Fix:** Ensure next.config.mjs exists with `withPayload()` wrapper

### "Port 3001 already in use"
**Fix:** Kill old Express server
```bash
# Windows
netstat -ano | findstr :3001
taskkill //F //PID <process-id>

# Mac/Linux
lsof -ti:3001 | xargs kill -9
```

### TypeScript Errors
**Fix:** Regenerate Next.js types
```bash
rm -rf .next
pnpm dev
```

## References

- [PayloadCMS v3 Migration Guide](https://github.com/payloadcms/payload/discussions/6929)
- [Using Payload outside Next.js](https://payloadcms.com/docs/local-api/outside-nextjs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Payload + Next.js Guide](https://payloadcms.com/posts/blog/the-ultimate-guide-to-using-nextjs-with-payload)

## Summary

✅ **Migrated successfully from Express to Next.js**
- Modern architecture aligned with Payload v3
- Same API endpoints (no breaking changes)
- Better developer experience
- Improved performance
- Easier deployment

✅ **What you need to know:**
- Use `pnpm dev` to start (same as before)
- API endpoints unchanged
- Admin panel URL unchanged
- Environment variables unchanged
- Deployment options expanded

The migration is complete and the CMS is ready for use! 🎉
