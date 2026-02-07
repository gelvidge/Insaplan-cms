# PayloadCMS Setup Guide for Insaplan

This guide walks you through setting up the PayloadCMS integration for your marketing website.

## Prerequisites

- Node.js 20+ installed
- pnpm installed (`npm install -g pnpm`)
- PostgreSQL database (local or remote)
- Git repository access

## Local Development Setup

### Step 1: Install PayloadCMS Dependencies

```bash
cd payload-cms
pnpm install
```

### Step 2: Configure Environment Variables

Create a `.env` file in the `payload-cms` directory:

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/insaplan
PAYLOAD_SECRET=your-very-secret-key-change-this
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
NODE_ENV=development
```

**Generate a secure PAYLOAD_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 3: Run Database Migrations

PayloadCMS will automatically create tables on first run, but you can manually migrate:

```bash
cd payload-cms
pnpm payload migrate
```

### Step 4: Start PayloadCMS

```bash
cd payload-cms
pnpm dev
```

PayloadCMS will be available at: `http://localhost:3001/admin`

### Step 5: Create Your First Admin User

1. Open `http://localhost:3001/admin`
2. Fill in the registration form:
   - Name: Your name
   - Email: your@email.com
   - Password: Secure password (min 8 characters)
3. Click "Create First User"

### Step 6: Configure Main App Environment

Add to your main app's `.env`:

```env
VITE_PAYLOAD_API_URL=http://localhost:3001/api
VITE_PAYLOAD_API_KEY=optional-for-local-dev
```

### Step 7: Generate Static Content (for SSG)

From the root of your project:

```bash
pnpm cms:generate
```

This will fetch content from PayloadCMS and save it to `src/generated-content/`.

### Step 8: Run Your Main App

```bash
pnpm dev
```

Your main app will now use content from PayloadCMS!

## Adding Content

### Create Your First Blog Post

1. Go to `http://localhost:3001/admin`
2. Click "Blog Posts" in the sidebar
3. Click "Create New"
4. Fill in:
   - Title: "Welcome to Insaplan"
   - Slug: "welcome" (auto-generated)
   - Excerpt: Brief description
   - Featured Image: Upload an image
   - Content: Write your post using the rich text editor
   - Author: Select yourself
   - Category: Choose a category
   - Status: Select "Published"
   - Published Date: Set to today
5. Click "Save"

### Create Pricing Plans

1. Go to "Pricing Plans"
2. Click "Create New"
3. Fill in plan details:
   - Plan Name: "Starter"
   - Plan Type: "starter"
   - Price: 29
   - Billing Period: "monthly"
   - Add features using the array field
4. Save and repeat for other plans

### Configure Site Settings

1. Go to "Globals" → "Site Settings"
2. Fill in all tabs:
   - General: Logo, favicon, site name
   - Social: Social media links
   - Analytics: Google Analytics ID
   - Contact: Email addresses
3. Save

## Production Deployment

### Option 1: Digital Ocean App Platform

1. **Prepare Repository**
   ```bash
   git add payload-cms/
   git commit -m "Add PayloadCMS"
   git push
   ```

2. **Create App in Digital Ocean**
   - Go to Digital Ocean App Platform
   - Click "Create App"
   - Connect your GitHub repository
   - Use the provided app spec (`.do/app.yaml`)

3. **Configure Environment Variables**
   In DO dashboard, add:
   - `PAYLOAD_SECRET`: Generate secure key
   - `REBUILD_WEBHOOK_URL`: Your main app's rebuild webhook
   - Database URL will be auto-configured

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Access admin at `https://your-app.ondigitalocean.app/admin`

### Option 2: AWS (Docker)

1. **Build Docker Image**
   ```bash
   cd payload-cms
   docker build -t insaplan-cms .
   ```

2. **Push to ECR**
   ```bash
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin your-ecr-url
   docker tag insaplan-cms:latest your-ecr-url/insaplan-cms:latest
   docker push your-ecr-url/insaplan-cms:latest
   ```

3. **Deploy to ECS/EC2**
   - Create ECS task definition
   - Configure environment variables
   - Set up load balancer
   - Deploy service

### Option 3: Self-Hosted (Docker Compose)

1. **Configure Environment**
   ```bash
   cd payload-cms
   cp .env.example .env
   # Edit .env with production values
   ```

2. **Start Services**
   ```bash
   docker-compose up -d
   ```

3. **Access Admin**
   - Navigate to `http://your-server:3001/admin`

## Setting Up Auto-Rebuild Webhooks

### For Digital Ocean

1. Get your app's webhook URL from DO dashboard
2. Add to PayloadCMS environment:
   ```env
   REBUILD_WEBHOOK_URL=https://your-webhook-url
   ```
3. PayloadCMS will trigger rebuilds on content publish

### For Vercel/Netlify

1. Create a deploy hook in your hosting provider
2. Add to PayloadCMS:
   ```env
   REBUILD_WEBHOOK_URL=https://api.vercel.com/v1/integrations/deploy/...
   ```

### For GitHub Actions

1. Create a Personal Access Token
2. Set up webhook to trigger GitHub workflow:
   ```yaml
   # .github/workflows/deploy.yml
   on:
     repository_dispatch:
       types: [cms-update]
   ```

## Content Workflow

### Development Workflow

1. **Start both servers:**
   ```bash
   # Terminal 1 - PayloadCMS
   cd payload-cms && pnpm dev

   # Terminal 2 - Main app
   pnpm dev
   ```

2. **Make content changes** in PayloadCMS admin

3. **Regenerate static content:**
   ```bash
   pnpm cms:generate
   ```

4. **Refresh your browser** to see changes

### Production Workflow

1. **Author content** in PayloadCMS admin
2. **Save as draft** for review
3. **Preview changes** (optional - requires preview setup)
4. **Publish** when ready
5. **Webhook automatically triggers rebuild**
6. **New content goes live** after build completes (2-5 minutes)

## Backup and Recovery

### Database Backups

**Digital Ocean:**
- Automatic daily backups enabled
- Point-in-time recovery available
- Backups retained for 7 days

**Self-Hosted:**
```bash
# Backup
docker exec insaplan-db pg_dump -U payload payload_cms > backup.sql

# Restore
docker exec -i insaplan-db psql -U payload payload_cms < backup.sql
```

### Media Backups

**Digital Ocean Spaces:**
- Configure S3-compatible storage
- Enable versioning
- Set up lifecycle policies

**Local:**
```bash
# Backup media directory
tar -czf media-backup.tar.gz payload-cms/media/

# Restore
tar -xzf media-backup.tar.gz
```

## Troubleshooting

### PayloadCMS won't start

1. Check PostgreSQL is running:
   ```bash
   psql $DATABASE_URL -c "SELECT 1"
   ```

2. Check environment variables:
   ```bash
   cd payload-cms
   cat .env
   ```

3. Check logs:
   ```bash
   cd payload-cms
   pnpm dev --verbose
   ```

### Content not showing in main app

1. Regenerate static content:
   ```bash
   pnpm cms:generate
   ```

2. Check generated files:
   ```bash
   ls -la src/generated-content/
   ```

3. Verify API connection:
   ```bash
   curl http://localhost:3001/api/pages
   ```

### Webhook not triggering

1. Check `REBUILD_WEBHOOK_URL` is set
2. Test webhook manually:
   ```bash
   curl -X POST $REBUILD_WEBHOOK_URL \
     -H "Content-Type: application/json" \
     -d '{"test": true}'
   ```

3. Check PayloadCMS logs for webhook errors

## Next Steps

- [ ] Set up CDN for media files (CloudFront/Spaces CDN)
- [ ] Configure preview deployments
- [ ] Set up content staging environment
- [ ] Implement search (Algolia/Meilisearch)
- [ ] Add custom validation rules
- [ ] Create custom admin UI components
- [ ] Set up automated content backups
- [ ] Configure rate limiting

## Support

For issues or questions:
- PayloadCMS Docs: https://payloadcms.com/docs
- GitHub Issues: [Your repo]/issues
- Team: contact developer
