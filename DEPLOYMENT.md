# Deployment Guide - Insaplan CMS

This guide covers deploying the PayloadCMS instance as a standalone Next.js application.

## Prerequisites

- PostgreSQL database (Supabase recommended)
- Node.js 20+ runtime environment
- Domain name (optional, for production)

## Quick Deploy Options

### Option 1: Railway (Recommended for Quick Setup)

Railway provides easy PostgreSQL + Next.js deployment:

1. **Connect Repository**
   ```bash
   # Push to GitHub first
   git remote add origin https://github.com/your-org/insaplan-cms.git
   git push -u origin main
   ```

2. **Deploy on Railway**
   - Visit [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Add PostgreSQL Database**
   - Click "New" → "Database" → "PostgreSQL"
   - Railway will auto-provision and set `DATABASE_URL`

4. **Configure Environment Variables**
   ```
   PAYLOAD_SECRET=<generate-32-byte-hex>
   PAYLOAD_PUBLIC_SERVER_URL=https://your-app.railway.app
   FRONTEND_URL=https://your-main-app.com
   NODE_ENV=production
   ```

5. **Deploy**
   - Railway auto-deploys on git push
   - Access admin at `https://your-app.railway.app/admin`

**Cost**: ~$5/month (PostgreSQL) + ~$5/month (App) = $10/month

---

### Option 2: Vercel + Supabase

Vercel provides free Next.js hosting (paid PostgreSQL required):

1. **Setup Supabase Database**
   - Create project at [supabase.com](https://supabase.com)
   - Get connection string from Settings → Database
   - Use Transaction Pooler (port 6543) with `?pgbouncer=true`

2. **Deploy to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

3. **Configure Environment Variables** (Vercel Dashboard)
   ```
   DATABASE_URL=postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true
   PAYLOAD_SECRET=<generate-32-byte-hex>
   PAYLOAD_PUBLIC_SERVER_URL=https://your-app.vercel.app
   FRONTEND_URL=https://your-main-app.com
   NODE_ENV=production
   ```

4. **Redeploy**
   - Vercel auto-deploys on git push
   - Access admin at `https://your-app.vercel.app/admin`

**Cost**: Free (Vercel) + ~$25/month (Supabase Pro)

---

### Option 3: DigitalOcean App Platform

Full-stack deployment with managed PostgreSQL:

1. **Create Database**
   - Go to DigitalOcean Dashboard
   - Create → Databases → PostgreSQL
   - Note connection details

2. **Create App**
   ```bash
   doctl apps create --spec .do/app.yaml
   ```

   Or use DigitalOcean Dashboard:
   - Create → Apps
   - Connect GitHub repository
   - Detect as Node.js app

3. **Configure Environment**
   - App Settings → Environment Variables
   - Add all required variables
   - Link database connection

4. **Deploy**
   - Auto-deploys on git push
   - Custom domain available

**Cost**: ~$5/month (App) + ~$15/month (PostgreSQL) = $20/month

---

### Option 4: Docker + VPS (Self-Hosted)

For maximum control and cost efficiency:

1. **Build Docker Image**
   ```bash
   docker build -t insaplan-cms:latest .
   ```

2. **Run Container**
   ```bash
   docker run -d \
     --name insaplan-cms \
     -p 3001:3001 \
     -e DATABASE_URL="postgresql://..." \
     -e PAYLOAD_SECRET="..." \
     -e PAYLOAD_PUBLIC_SERVER_URL="https://cms.yourdomain.com" \
     -e FRONTEND_URL="https://yourdomain.com" \
     -e NODE_ENV=production \
     --restart unless-stopped \
     insaplan-cms:latest
   ```

3. **Setup Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name cms.yourdomain.com;

       location / {
           proxy_pass http://localhost:3001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d cms.yourdomain.com
   ```

**Cost**: ~$5-12/month (VPS like DigitalOcean Droplet, Hetzner, or Linode)

---

## Environment Variables Reference

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `PAYLOAD_SECRET` | 32-byte hex secret for encryption | Generate with script below |
| `PAYLOAD_PUBLIC_SERVER_URL` | Public URL of CMS | `https://cms.insaplan.com` |
| `NODE_ENV` | Environment mode | `production` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `FRONTEND_URL` | Main app URL for CORS | `http://localhost:3000` |
| `REBUILD_WEBHOOK_URL` | Trigger rebuild on publish | - |
| `S3_ENDPOINT` | S3-compatible storage endpoint | - |
| `S3_BUCKET` | Storage bucket name | - |
| `S3_ACCESS_KEY_ID` | Storage access key | - |
| `S3_SECRET_ACCESS_KEY` | Storage secret key | - |
| `S3_REGION` | Storage region | `us-east-1` |
| `PORT` | Server port | `3001` |

### Generate Secrets

```bash
# Generate PAYLOAD_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Database Setup

### Supabase Configuration

1. **Get Connection String**
   - Supabase Dashboard → Settings → Database
   - Use "Transaction Pooler" (port 6543)
   - Copy connection string

2. **Format for PayloadCMS**
   ```
   postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1
   ```

3. **URL Encode Password**
   - Replace `!` with `%21`
   - Replace `@` with `%40`
   - Replace `#` with `%23`

### Standard PostgreSQL

```bash
# Connection format
postgresql://username:password@host:5432/database_name

# For connection pooling (PgBouncer)
postgresql://username:password@host:6543/database_name?pgbouncer=true
```

---

## Build Configuration

### Build Command
```bash
pnpm build
# or
npm run build
```

### Start Command
```bash
pnpm start
# or
npm run start
```

### Health Check Endpoint
```
GET /api/health
```

---

## Post-Deployment

### 1. Create Admin User

Visit `https://your-cms-domain.com/admin` and create your first admin account.

### 2. Configure CORS

Update `src/payload.config.ts` with production domains:

```typescript
cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL,
    process.env.FRONTEND_URL,
    'https://insaplan.com',
    'https://www.insaplan.com',
    'https://app.insaplan.com'
].filter(Boolean)
```

Redeploy after changes.

### 3. Test API Access

```bash
# Test REST API
curl https://your-cms-domain.com/api/pages

# Test GraphQL
curl -X POST https://your-cms-domain.com/api/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ Pages { docs { id title } } }"}'
```

### 4. Setup Webhook (Optional)

Configure rebuild webhook in environment:
```
REBUILD_WEBHOOK_URL=https://api.vercel.com/v1/integrations/deploy/...
```

Test webhook trigger by publishing content.

---

## Monitoring & Maintenance

### Health Monitoring

Set up uptime monitoring:
- [UptimeRobot](https://uptimerobot.com) (Free)
- [Better Uptime](https://betteruptime.com) (Paid)

Monitor endpoint: `https://your-cms-domain.com/api/health`

### Database Backups

**Supabase**: Automatic daily backups included

**Self-hosted**:
```bash
# Backup
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Restore
psql $DATABASE_URL < backup-20240207.sql
```

### Logs

**Railway**: View logs in dashboard

**Vercel**: `vercel logs`

**Docker**: `docker logs insaplan-cms -f`

---

## Scaling Considerations

### Database Connection Pooling

Use PgBouncer for connection pooling:
- Add `?pgbouncer=true` to DATABASE_URL
- Set `connection_limit=1` for serverless environments

### Media Storage

For production, use S3-compatible storage:

1. **AWS S3**
   ```bash
   S3_ENDPOINT=https://s3.amazonaws.com
   S3_BUCKET=insaplan-cms-media
   S3_REGION=us-east-1
   S3_ACCESS_KEY_ID=AKIA...
   S3_SECRET_ACCESS_KEY=...
   ```

2. **DigitalOcean Spaces**
   ```bash
   S3_ENDPOINT=https://nyc3.digitaloceanspaces.com
   S3_BUCKET=insaplan-cms
   S3_REGION=us-east-1
   S3_ACCESS_KEY_ID=DO00...
   S3_SECRET_ACCESS_KEY=...
   ```

3. **Cloudflare R2**
   ```bash
   S3_ENDPOINT=https://[account-id].r2.cloudflarestorage.com
   S3_BUCKET=insaplan-cms
   S3_REGION=auto
   S3_ACCESS_KEY_ID=...
   S3_SECRET_ACCESS_KEY=...
   ```

### CDN

Serve media through CDN:
- Cloudflare CDN (Free)
- AWS CloudFront
- DigitalOcean CDN

---

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
pnpm install
pnpm build
```

### Database Connection Issues

- Verify DATABASE_URL is correct
- Check password URL encoding
- Confirm network access (firewall, IP whitelist)
- Test connection: `psql $DATABASE_URL -c "SELECT 1"`

### API Not Accessible

- Check CORS configuration in `payload.config.ts`
- Verify `PAYLOAD_PUBLIC_SERVER_URL` is correct
- Ensure port 3001 is accessible

### Performance Issues

- Enable database connection pooling
- Move media to S3/CDN
- Increase server resources
- Add caching layer (Redis)

---

## Security Checklist

- [ ] Strong `PAYLOAD_SECRET` (32-byte random hex)
- [ ] HTTPS enabled (SSL certificate)
- [ ] Database restricted to app IP only
- [ ] CORS configured for specific domains only
- [ ] Regular security updates (`pnpm update`)
- [ ] Environment variables not committed to git
- [ ] Database backups configured
- [ ] Monitoring and alerting setup
- [ ] Rate limiting on API endpoints
- [ ] Admin panel behind strong authentication

---

## Cost Comparison

| Platform | Database | App Hosting | Total/Month |
|----------|----------|-------------|-------------|
| Railway | Included | Included | ~$10 |
| Vercel + Supabase | $25 | Free | ~$25 |
| DigitalOcean | $15 | $5 | ~$20 |
| VPS (Self-hosted) | Included | Included | ~$5-12 |

---

## Support

For deployment issues:
1. Check this guide first
2. Review [PayloadCMS Deployment Docs](https://payloadcms.com/docs/production/deployment)
3. Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
4. Contact development team

## Next Steps

After deployment:
1. Create admin user
2. Seed initial content
3. Test API from main app
4. Configure webhooks
5. Setup monitoring
6. Document content workflows for team
