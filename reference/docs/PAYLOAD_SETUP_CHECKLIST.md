# PayloadCMS Setup Checklist

Use this checklist to get PayloadCMS up and running.

## Initial Setup

### 1. Install PayloadCMS Dependencies
```bash
cd payload-cms
pnpm install
```
- [ ] Dependencies installed without errors
- [ ] Check for any peer dependency warnings

### 2. Configure Database
```bash
cd payload-cms
cp .env.example .env
```

Edit `.env`:
- [ ] Set `DATABASE_URL` (PostgreSQL connection string)
- [ ] Generate and set `PAYLOAD_SECRET` (use: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
- [ ] Set `PAYLOAD_PUBLIC_SERVER_URL` (e.g., `http://localhost:3001`)

### 3. Test Database Connection
```bash
# Test connection
psql $DATABASE_URL -c "SELECT 1"
```
- [ ] Database connection works
- [ ] Database exists and is accessible

### 4. Start PayloadCMS
```bash
cd payload-cms
pnpm dev
```
- [ ] Server starts without errors
- [ ] Can access admin at http://localhost:3001/admin
- [ ] See registration form

### 5. Create First Admin User
Visit http://localhost:3001/admin
- [ ] Fill in registration form:
  - Name: _________________
  - Email: _________________
  - Password: _________________
- [ ] User created successfully
- [ ] Can log in to admin panel

### 6. Configure Main App
Add to root `.env`:
```env
VITE_PAYLOAD_API_URL=http://localhost:3001/api
```
- [ ] Environment variable added
- [ ] Main app can be started

## Test Content Creation

### 7. Create Test Blog Post
In PayloadCMS admin:
- [ ] Navigate to "Blog Posts"
- [ ] Click "Create New"
- [ ] Fill in required fields:
  - Title: "Test Post"
  - Slug: "test-post"
  - Excerpt: "This is a test"
  - Upload featured image
  - Write some content
  - Select yourself as author
  - Choose category
  - Set status: "Published"
  - Set published date: Today
- [ ] Save successfully
- [ ] Post appears in blog posts list

### 8. Create Test Pricing Plan
- [ ] Navigate to "Pricing Plans"
- [ ] Click "Create New"
- [ ] Fill in:
  - Plan Name: "Starter"
  - Type: "starter"
  - Price: 29
  - Period: "monthly"
  - Add 3-5 features
- [ ] Save successfully

### 9. Configure Site Settings
- [ ] Navigate to "Globals" → "Site Settings"
- [ ] Fill in:
  - Site Name: "Insaplan"
  - Site Description
  - Upload logo (if available)
  - Upload favicon (if available)
  - Add contact email
- [ ] Save successfully

## Test Integration

### 10. Generate Static Content
From root directory:
```bash
pnpm cms:generate
```
- [ ] Command runs without errors
- [ ] Files created in `src/generated-content/`:
  - [ ] `blog-posts.json`
  - [ ] `pricing-plans.json`
  - [ ] `site-settings.json`
  - [ ] Other JSON files
- [ ] Content matches what you created in CMS

### 11. Test Main App
```bash
pnpm dev
```
- [ ] Main app starts without errors
- [ ] Can navigate to existing routes
- [ ] Check browser console for errors

### 12. Test Blog Route (if created)
Visit http://localhost:3000/blog
- [ ] Page loads successfully
- [ ] Test blog post appears
- [ ] Click post to view detail page
- [ ] Detail page loads successfully

## API Testing

### 13. Test REST API
```bash
# Test getting blog posts
curl http://localhost:3001/api/blog-posts

# Test getting site settings
curl http://localhost:3001/api/globals/site-settings
```
- [ ] REST API returns data
- [ ] JSON is valid
- [ ] Status field filters work

### 14. Test GraphQL API
Visit http://localhost:3001/api/graphql

Try query:
```graphql
query {
  BlogPosts {
    docs {
      id
      title
      slug
    }
  }
}
```
- [ ] GraphQL playground loads
- [ ] Query executes successfully
- [ ] Returns expected data

## Optional But Recommended

### 15. Create More Test Content
- [ ] Create 2-3 more blog posts
- [ ] Create all pricing plans
- [ ] Create 1-2 FAQs
- [ ] Create 1-2 testimonials
- [ ] Upload some test images to Media

### 16. Test Draft/Publish Workflow
- [ ] Create a blog post as "Draft"
- [ ] Verify it doesn't appear in API results
- [ ] Change status to "Published"
- [ ] Verify it now appears in API

### 17. Test Form Submission
```bash
curl -X POST http://localhost:3001/api/form-submissions \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contact",
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test"
  }'
```
- [ ] Submission created successfully
- [ ] Appears in "Form Submissions" collection
- [ ] All fields saved correctly

## Production Preparation

### 18. Generate Secure Secrets
```bash
# Generate production PAYLOAD_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
- [ ] Generated and saved securely
- [ ] Different from development secret

### 19. Plan Database
- [ ] Decided on database provider (DO/AWS/other)
- [ ] Planned backup strategy
- [ ] Considered using same DB as main app or separate

### 20. Plan Media Storage
- [ ] Decided on storage solution (S3/DO Spaces/local)
- [ ] Planned CDN strategy
- [ ] Configured in `payload.config.ts` if needed

### 21. Plan Deployment
- [ ] Chosen hosting provider (Digital Ocean/AWS/other)
- [ ] Reviewed deployment config files
- [ ] Planned subdomain (cms.insaplan.com)

### 22. Set Up Webhooks
- [ ] Identified rebuild webhook URL from hosting provider
- [ ] Planned to add `REBUILD_WEBHOOK_URL` to production env
- [ ] Tested webhook locally if possible

## Documentation Review

### 23. Review Documentation
- [ ] Read `docs/payload-cms-setup-guide.md`
- [ ] Read `docs/payload-cms-quick-reference.md`
- [ ] Bookmarked PayloadCMS docs: https://payloadcms.com/docs
- [ ] Understand content workflow

### 24. Share with Team
- [ ] Document shared with team members
- [ ] Admin accounts created for team members (if needed)
- [ ] Roles assigned correctly

## Troubleshooting

If you encounter issues, check:

### Database Connection Issues
```bash
# Verify DATABASE_URL format
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL -c "SELECT 1"

# Check PostgreSQL is running
pg_isready
```

### Port Conflicts
```bash
# Check if port 3001 is in use
lsof -i :3001

# Kill process if needed
lsof -ti:3001 | xargs kill -9
```

### Build Errors
```bash
# Clear cache and reinstall
cd payload-cms
rm -rf node_modules dist
pnpm install
```

### TypeScript Errors
```bash
# Generate types
cd payload-cms
pnpm generate:types
```

## Success Criteria

✅ PayloadCMS admin accessible
✅ Can create and publish content
✅ Content appears in API
✅ Static content generation works
✅ Main app can consume CMS data
✅ All tests passing

## Next Steps After Checklist

1. **Create real content** for your marketing site
2. **Update existing routes** to use CMS data
3. **Deploy to staging** environment
4. **Test thoroughly** with real data
5. **Deploy to production**
6. **Train team** on using CMS

---

## Help & Support

- **Setup Issues**: See `docs/payload-cms-setup-guide.md`
- **API Questions**: See `docs/payload-cms-quick-reference.md`
- **Architecture**: See `docs/payload-cms-integration-plan.md`
- **PayloadCMS Docs**: https://payloadcms.com/docs

---

**Started**: _______________
**Completed**: _______________
**Notes**: _______________________________________________
