# Setting Up as Standalone Repository

This guide walks you through extracting PayloadCMS into its own repository, separate from the main Insaplan app.

## Why Separate Repository?

✅ **Benefits:**
- Different tech stacks (Next.js vs Vite)
- Independent deployment cycles
- Clearer separation of concerns
- Different team access control
- Simpler dependency management
- Independent version control

## Step-by-Step Setup

### 1. Create New Repository

**Option A: GitHub**
```bash
# On GitHub, create new repository: insaplan-cms
# Don't initialize with README (we already have one)
```

**Option B: Command Line**
```bash
cd c:\Users\garet\GitRep
mkdir insaplan-cms-repo
cd insaplan-cms-repo
git init
```

### 2. Copy Files from Monorepo

```bash
# From your current location (c:\Users\garet\GitRep\Insaplan\payload-cms)
# Copy all files to new repo location

# Windows PowerShell
robocopy "c:\Users\garet\GitRep\Insaplan\payload-cms" "c:\Users\garet\GitRep\insaplan-cms-repo" /E /XD node_modules .next

# Or manually:
# 1. Copy all files from payload-cms folder
# 2. Exclude: node_modules, .next, .env (copy .env separately later)
```

### 3. Initialize Git in New Repository

```bash
cd c:\Users\garet\GitRep\insaplan-cms-repo

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: PayloadCMS v3 standalone setup"

# Add remote (if using GitHub)
git remote add origin https://github.com/your-org/insaplan-cms.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Install Dependencies in New Repo

```bash
cd c:\Users\garet\GitRep\insaplan-cms-repo

# Install dependencies
pnpm install

# Copy your .env file
copy "c:\Users\garet\GitRep\Insaplan\payload-cms\.env" .env

# Test the server
pnpm dev
```

### 5. Update Main Repository

Remove PayloadCMS from main repo's workspace:

**Edit `c:\Users\garet\GitRep\Insaplan\pnpm-workspace.yaml`:**
```yaml
packages:
  - 'packages/*'
  # Remove: - 'payload-cms'
```

**Remove the payload-cms folder from main repo:**
```bash
cd c:\Users\garet\GitRep\Insaplan

# Remove from git tracking
git rm -r payload-cms

# Commit the removal
git commit -m "Move PayloadCMS to separate repository

PayloadCMS is now maintained as a standalone repository for:
- Independent deployment
- Separate tech stack (Next.js vs Vite)
- Clearer separation of concerns

New repository: https://github.com/your-org/insaplan-cms"

# Push changes
git push
```

### 6. Update Main App Integration

Update how your main app fetches CMS content:

**Create `src/lib/cmsClient.ts` in main app:**
```typescript
const CMS_API_URL = import.meta.env.VITE_CMS_API_URL || 'http://localhost:3001/api'

export async function fetchFromCMS<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${CMS_API_URL}/${endpoint}`)
    if (!response.ok) {
        throw new Error(`CMS API error: ${response.statusText}`)
    }
    return response.json()
}

// Example usage:
// const posts = await fetchFromCMS<BlogPostsResponse>('blog-posts')
```

**Add to main app's `.env`:**
```bash
# Development
VITE_CMS_API_URL=http://localhost:3001/api

# Production
VITE_CMS_API_URL=https://cms.insaplan.com/api
```

### 7. Update Documentation

**In main repository**, update references:

1. **README.md** - Remove PayloadCMS monorepo references
2. **CLAUDE.md** - Update project structure
3. Add note about separate CMS repository

**Example note for main app README:**
```markdown
## Content Management

Content is managed through a separate PayloadCMS instance:
- Repository: https://github.com/your-org/insaplan-cms
- Local dev: http://localhost:3001/admin
- API docs: See insaplan-cms repository
```

### 8. VSCode Workspace Setup

**Option A: Multi-root Workspace**

Create `insaplan.code-workspace`:
```json
{
    "folders": [
        {
            "path": ".",
            "name": "Insaplan App"
        },
        {
            "path": "../insaplan-cms-repo",
            "name": "Insaplan CMS"
        }
    ],
    "settings": {
        "files.exclude": {
            "**/node_modules": true,
            "**/.next": true
        }
    }
}
```

Open in VSCode: `File > Open Workspace from File`

**Option B: Separate Windows**

Open each repo in its own VSCode window:
- Window 1: Main app (`c:\Users\garet\GitRep\Insaplan`)
- Window 2: CMS (`c:\Users\garet\GitRep\insaplan-cms-repo`)

### 9. Update CI/CD

If you have CI/CD configured, create separate workflows:

**Main App** (`.github/workflows/app-deploy.yml`):
```yaml
name: Deploy Main App
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - name: Build and Deploy
        run: |
          pnpm install
          pnpm build
          # Deploy commands
```

**CMS** (separate repo `.github/workflows/cms-deploy.yml`):
```yaml
name: Deploy CMS
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - name: Build and Deploy
        run: |
          pnpm install
          pnpm build
          # Deploy CMS
```

### 10. Development Workflow

**Daily Development:**

```bash
# Terminal 1: Start CMS
cd c:\Users\garet\GitRep\insaplan-cms-repo
pnpm dev

# Terminal 2: Start Main App
cd c:\Users\garet\GitRep\Insaplan
pnpm dev
```

**Making Changes:**

For CMS changes:
```bash
cd c:\Users\garet\GitRep\insaplan-cms-repo
# Make changes
git add .
git commit -m "Add new content collection"
git push
```

For main app changes:
```bash
cd c:\Users\garet\GitRep\Insaplan
# Make changes
git add .
git commit -m "Update homepage"
git push
```

## Verification Checklist

After setup, verify:

- [ ] CMS runs independently: `cd insaplan-cms-repo && pnpm dev`
- [ ] Admin panel accessible: http://localhost:3001/admin
- [ ] API accessible: http://localhost:3001/api/pages
- [ ] GraphQL playground: http://localhost:3001/api/graphql-playground
- [ ] Main app removed payload-cms from workspace
- [ ] Main app can fetch from CMS API
- [ ] Both repositories have separate git history
- [ ] Environment variables copied to new repo
- [ ] Dependencies installed in new repo
- [ ] Documentation updated in both repos

## Team Communication

Notify your team about the change:

**Example Message:**
```
📢 Repository Structure Update

We've separated PayloadCMS into its own repository for better organization:

Old: Monorepo with payload-cms folder
New: Separate repositories

Main App: https://github.com/your-org/insaplan
CMS: https://github.com/your-org/insaplan-cms

Why?
✅ Independent deployments
✅ Clearer separation of concerns
✅ Different tech stacks (Next.js vs Vite)

What you need to do:
1. Clone new CMS repo: git clone https://github.com/your-org/insaplan-cms.git
2. Pull latest main app: git pull origin main
3. Run both servers for local dev (see README)

Questions? Ask in #dev-team
```

## Troubleshooting

### CMS Won't Start

```bash
# Clear and reinstall
rm -rf node_modules .next
pnpm install
pnpm dev
```

### Main App Can't Connect to CMS

1. Check CMS is running: http://localhost:3001
2. Verify CORS in `payload.config.ts`
3. Check `VITE_CMS_API_URL` in main app `.env`

### Git History Issues

If you want to preserve git history from the monorepo:
```bash
# Use git filter-branch (advanced)
git filter-branch --subdirectory-filter payload-cms -- --all
```

## Next Steps

1. ✅ Complete the repository separation
2. ✅ Test both apps run independently
3. ✅ Update team documentation
4. ✅ Configure separate deployments
5. ✅ Set up separate CI/CD pipelines
6. ✅ Update team access controls

## Benefits You'll See

**Short Term:**
- Cleaner codebase organization
- Faster dependency installs (smaller repos)
- Independent deployments
- Clearer git history

**Long Term:**
- Easier to hand off CMS to content team
- Can upgrade each stack independently
- Better separation of concerns
- Simpler onboarding for new developers

---

**Need Help?**
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment guides
- See [README.md](./README.md) for CMS usage
- Contact dev team for questions
