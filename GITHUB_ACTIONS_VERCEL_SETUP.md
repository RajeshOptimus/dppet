# 🚀 GitHub Actions + Vercel Deployment Guide

**Status:** ✅ READY FOR DEPLOYMENT  
**YouTube Channel:** https://youtube.com/@farmingzilla  
**Deployment Target:** Vercel (Production)

---

## 📋 Setup Steps (5 minutes)

### Step 1: Create GitHub Repository
```bash
# If you haven't already
git init
git add .
git commit -m "Initial commit: dppet.shop project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dppet-shop.git
git push -u origin main
```

### Step 2: Get Vercel Tokens

1. **Go to:** https://vercel.com/account/tokens
2. **Create New Token:**
   - Name: `GITHUB_ACTIONS_DEPLOY`
   - Scope: Full Account
   - Copy the token

3. **Also get Project IDs:**
   - Go to: https://vercel.com/dashboard
   - Select your project
   - Settings → General
   - Copy `Project ID` (VERCEL_PROJECT_ID)
   - Copy `Team ID` (VERCEL_ORG_ID) - if using team account

### Step 3: Add GitHub Secrets

1. Go to: **GitHub Repo → Settings → Secrets and variables → Actions**

2. **Create 3 secrets:**

   | Secret Name | Value |
   |------------|-------|
   | `VERCEL_TOKEN` | Your token from Step 2 |
   | `VERCEL_PROJECT_ID` | Project ID from Vercel |
   | `VERCEL_ORG_ID` | Team/Org ID from Vercel |

3. **To add a secret:**
   - Click "New repository secret"
   - Name: `VERCEL_TOKEN`
   - Value: Paste your token
   - Click "Add secret"

### Step 4: First Deployment

```bash
# Push to main branch
git push origin main
```

GitHub Actions will:
✅ Run tests  
✅ Build project  
✅ Deploy to Vercel  
✅ Get live URL

---

## 📊 GitHub Actions Workflow

### What Happens on Each Push

```
1. CHECKOUT CODE
   ↓
2. INSTALL DEPENDENCIES
   ├─ Node 18.x
   └─ Node 20.x (parallel)
   ↓
3. BUILD PROJECT
   ├─ Lint code
   ├─ Type check
   └─ Build Next.js
   ↓
4. DEPLOY TO VERCEL
   └─ Production environment
   ↓
5. TESTS
   └─ Run test suite
```

### Build Status Badge

Add to your README:
```markdown
![Build Status](https://github.com/YOUR_USERNAME/dppet-shop/actions/workflows/build-and-deploy.yml/badge.svg)
```

---

## 🔍 Monitor Builds

### Check Build Status
1. Go to: **GitHub Repo → Actions**
2. See all workflow runs
3. Click run to view details

### Build Logs
- Click a workflow run
- See step-by-step build output
- Troubleshoot any errors

### Vercel Deployments
1. Go to: https://vercel.com/dashboard
2. Select dppet-shop project
3. View deployment history
4. Each GitHub push = new Vercel deployment

---

## 🎯 Your Live URLs

After first successful deployment:

| Environment | URL |
|-------------|-----|
| **Production** | `https://dppet-shop.vercel.app` |
| **Preview** | `https://dppet-shop-[hash].vercel.app` |
| **Custom Domain** | `https://dppet.shop` (optional) |

### Set Custom Domain
1. In Vercel: Project → Settings → Domains
2. Add your domain: `dppet.shop`
3. Update DNS records (instructions provided)
4. Visit your domain in ~24 hours

---

## 🔧 Workflow Features

### Auto-Deploy on Push to Main
```yaml
on:
  push:
    branches:
      - main
```

### Pull Request Preview
Every PR gets a preview URL automatically!

### Node Version Testing
Tests on both Node 18.x and 20.x to ensure compatibility

### Artifact Upload
Build artifacts saved for 30 days

---

## 📝 Environment Variables

If you need environment variables in production:

1. **In Vercel:**
   - Project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_SITE_URL=dppet.shop`
   - Add: `NEXT_PUBLIC_AFFILIATE_TAG=your_tag`

2. **They auto-load during deployment**

---

## 🚨 Troubleshooting

### Build Fails?

1. **Check logs:** GitHub → Actions → Failed workflow
2. **Common issues:**
   - Missing dependencies → `npm install`
   - TypeScript errors → `npm run build` locally
   - Vercel token invalid → Check secrets

### Deployment Fails?

1. **Verify secrets are set:** Settings → Secrets → Check all 3 secrets
2. **Check token validity:** https://vercel.com/account/tokens
3. **Check project ID:** https://vercel.com/dashboard

### Site Won't Load?

1. Check deployment status: https://vercel.com/dashboard
2. Check Vercel error logs
3. Verify environment variables

---

## 📊 Current Setup Status

```
✅ GitHub Actions workflow configured
✅ Vercel deployment ready
✅ Node.js 18.x & 20.x tests enabled
✅ Auto-deployment on main branch push
✅ Build artifacts saved
✅ YouTube channel integrated
```

---

## 🎬 Next Steps

1. **Create/Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/dppet-shop
   git push -u origin main
   ```

2. **Add Vercel Secrets**
   - VERCEL_TOKEN
   - VERCEL_PROJECT_ID
   - VERCEL_ORG_ID

3. **Trigger First Build**
   - Make a commit & push
   - Watch GitHub Actions run
   - See deployment on Vercel

4. **Verify Live Site**
   - Visit: https://dppet-shop.vercel.app
   - Check YouTube links work
   - Test affiliate links

---

## 💡 Pro Tips

### Force Rebuild
```bash
# Make an empty commit
git commit --allow-empty -m "trigger rebuild"
git push
```

### Skip Deployment
Add to commit message:
```
[skip deploy]
```

### Monitor Real-Time
```bash
# Watch GitHub Actions from terminal
gh run watch
```

### Local Testing Before Push
```bash
npm run build
npm start
# Visit http://localhost:3000
```

---

## 📞 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **GitHub Actions:** https://docs.github.com/en/actions
- **Next.js Deployment:** https://nextjs.org/docs/deployment

---

## 🎉 You're All Set!

Push to main branch and watch GitHub Actions + Vercel work their magic! 🚀

Your dppet.shop is now:
✅ Auto-building on every commit  
✅ Auto-deploying to Vercel  
✅ Live on the internet  
✅ Serving your YouTube audience  

**Happy deploying!** 🐾

---

**Updated:** February 14, 2026  
**Status:** Production Ready  
**YouTube:** https://youtube.com/@farmingzilla
