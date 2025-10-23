# Complete Deployment Guide - GitHub + Vercel + GoDaddy

## Overview
1. Push code to GitHub (5 minutes)
2. Deploy to Vercel (5 minutes)
3. Connect GoDaddy domain (10 minutes)
4. Configure DNS (wait 24-48 hours for propagation)

---

## Part 1: Push to GitHub (5 minutes)

### Step 1: Initialize Git Repository

```bash
cd "/Users/arinbrown/Documents/Arin Digital Innovations/Directories/PickleballATX/Cursor_PBATX"

# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit - Pickleball ATX website"
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the "+" icon (top right) → "New repository"
3. Repository name: `pickleballatx`
4. Description: "Austin Pickleball Courts Directory"
5. Set to **Public** (required for free Vercel)
6. **DON'T** initialize with README (we already have one)
7. Click "Create repository"

### Step 3: Push to GitHub

GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/pickleballatx.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username!

**✅ Your code is now on GitHub!**

---

## Part 2: Deploy to Vercel (5 minutes)

### Step 1: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. **Choose "Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your GitHub

### Step 2: Import Your Project

1. Click "Add New..." → "Project"
2. Find `pickleballatx` in the list
3. Click "Import"

### Step 3: Configure Project

**Framework Preset**: Next.js (auto-detected)
**Root Directory**: ./
**Build Command**: `npm run build` (auto-filled)
**Output Directory**: (leave default)

### Step 4: Add Environment Variables

Before deploying, add your environment variables:

Click "Environment Variables" and add these three:

```
Name: NEXT_PUBLIC_ADSENSE_ID
Value: ca-pub-XXXXXXXXXXXXXXXX
(Get this from Google AdSense after signup)

Name: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
Value: your_google_maps_api_key
(Get this from Google Cloud Console)

Name: NEXT_PUBLIC_SITE_URL
Value: https://pickleballatx.org
```

**For now**, you can use temporary values:
```
NEXT_PUBLIC_ADSENSE_ID = ca-pub-0000000000000000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = temporary_key
NEXT_PUBLIC_SITE_URL = https://pickleballatx.org
```

### Step 5: Deploy!

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `pickleballatx.vercel.app`

**✅ Your site is now live on Vercel!**

Test it by visiting your `.vercel.app` URL.

---

## Part 3: Connect GoDaddy Domain (10 minutes)

### Step 1: Add Custom Domain in Vercel

1. In Vercel project dashboard, go to "Settings"
2. Click "Domains" in left sidebar
3. Add your domains:
   - Enter: `pickleballatx.org`
   - Click "Add"
   - Enter: `www.pickleballatx.org`
   - Click "Add"

Vercel will show you DNS records to add.

### Step 2: Configure DNS in GoDaddy

1. Log in to [godaddy.com](https://www.godaddy.com)
2. Go to "My Products"
3. Find `pickleballatx.org`
4. Click "DNS" button

### Step 3: Add DNS Records

You need to add/update these records:

#### For Root Domain (pickleballatx.org):

**Option A: CNAME (Recommended)**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 1 Hour
```

**Option B: A Record (if CNAME doesn't work)**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 1 Hour
```

#### For WWW Subdomain:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1 Hour
```

### Step 4: Delete Conflicting Records

**Important:** Remove any existing A or CNAME records for `@` and `www` that might conflict.

Common records to remove:
- Old A records pointing to GoDaddy parking page
- CNAME records pointing elsewhere
- Keep only MX records (for email)
- Keep only TXT records (for verification)

### Step 5: Wait for DNS Propagation

- DNS changes take 1-48 hours to propagate worldwide
- Usually works within 1-2 hours
- Check status in Vercel dashboard

---

## Part 4: Verification & Testing

### Check DNS Propagation

Use these tools to check if DNS has updated:

1. [dnschecker.org](https://dnschecker.org)
   - Enter: `pickleballatx.org`
   - Should show Vercel's IP or CNAME

2. Terminal command:
```bash
# Check if domain points to Vercel
dig pickleballatx.org

# Should see Vercel's IP in ANSWER section
```

### Test Your Site

Once DNS propagates, test:

1. `https://pickleballatx.org` (root domain)
2. `https://www.pickleballatx.org` (www subdomain)
3. Both should work and redirect to HTTPS automatically!

### SSL Certificate

- Vercel automatically provisions SSL certificates
- HTTPS is enabled automatically
- No additional configuration needed!
- Certificate renews automatically

---

## Part 5: Post-Deployment Setup

### Get Real API Keys

#### Google Maps API Key

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create new project: "Pickleball ATX"
3. Enable "Maps JavaScript API"
4. Create credentials → API Key
5. Restrict key (recommended):
   - HTTP referrers: `pickleballatx.org/*` and `*.vercel.app/*`
   - API restrictions: Maps JavaScript API only
6. Copy your API key

#### Google AdSense

1. Go to [google.com/adsense](https://www.google.com/adsense)
2. Sign up for account
3. Add your site: `pickleballatx.org`
4. Add verification code (if needed)
5. Wait for approval (1-7 days)
6. Get your Publisher ID: `ca-pub-XXXXXXXXXXXXXXXX`

### Update Environment Variables in Vercel

1. Go to Vercel project → Settings → Environment Variables
2. Edit `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
3. Add your real Google Maps key
4. Edit `NEXT_PUBLIC_ADSENSE_ID`
5. Add your real AdSense publisher ID
6. Click "Save"
7. **Important:** Redeploy for changes to take effect
   - Go to "Deployments" tab
   - Click "..." on latest deployment
   - Click "Redeploy"

---

## Part 6: Submit to Search Engines

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter: `https://pickleballatx.org`
4. Verify ownership (choose one method):
   
   **Option A: DNS Verification (Recommended)**
   - Google gives you a TXT record
   - Add it to GoDaddy DNS
   - Wait a few minutes
   - Click "Verify"
   
   **Option B: HTML File**
   - Download verification file
   - Place in `/public/` folder
   - Push to GitHub (auto-deploys to Vercel)
   - Click "Verify"

5. Once verified:
   - Submit sitemap: `https://pickleballatx.org/sitemap.xml`
   - Request indexing for homepage

### Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Import from Google Search Console (easiest!)
4. Or verify manually

---

## Troubleshooting

### Domain Not Working After 48 Hours

1. Check DNS in GoDaddy:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

2. If CNAME at @ doesn't work, use A record:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

3. Flush your DNS cache:
   ```bash
   # Mac
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # Windows
   ipconfig /flushdns
   ```

### Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Common fixes:
   ```bash
   # Locally test build
   npm run build
   
   # If it fails, fix errors and push again
   git add .
   git commit -m "Fix build errors"
   git push
   ```

### Images Not Showing

1. Add images to `/public/images/courts/`
2. Commit and push:
   ```bash
   git add public/images/courts/
   git commit -m "Add court images"
   git push
   ```
3. Vercel auto-deploys

### Maps Not Loading

- Ensure you have a real Google Maps API key
- Check that billing is enabled in Google Cloud (required even for free tier)
- Verify API key is added in Vercel environment variables
- Redeploy after adding key

---

## Quick Reference Commands

### Push Updates

```bash
# After making changes:
git add .
git commit -m "Description of changes"
git push

# Vercel automatically deploys!
```

### Check Deployment Status

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Check deployments
vercel ls

# View logs
vercel logs
```

---

## Cost Summary

### Free Forever:
- ✅ Vercel hosting (Hobby plan)
- ✅ GitHub repository
- ✅ SSL certificate
- ✅ Automatic deployments
- ✅ Unlimited bandwidth
- ✅ Google Search Console
- ✅ Bing Webmaster Tools

### Paid Services:
- 💰 Domain: ~$12/year (already paid to GoDaddy)
- 💰 Google Maps API: FREE (includes $200/month credit)
  - 28,000 map loads per month free
  - Only pay if you exceed this
- 💵 Google AdSense: **MAKES YOU MONEY!**

### Total Annual Cost: ~$12/year (just domain)

---

## Success Checklist

- [ ] Code pushed to GitHub
- [ ] Site deployed to Vercel
- [ ] Custom domain added in Vercel
- [ ] DNS configured in GoDaddy
- [ ] Domain resolves (may take 24-48 hours)
- [ ] HTTPS working automatically
- [ ] Google Maps API key added
- [ ] Google AdSense configured
- [ ] Sitemap submitted to Google
- [ ] Site submitted to Bing
- [ ] All pages tested
- [ ] Mobile responsive verified

---

## You're Live! 🎉

Your site will be:
- ✅ Fast (Vercel's global CDN)
- ✅ Secure (automatic HTTPS)
- ✅ Scalable (handles any traffic)
- ✅ Auto-deploying (push to GitHub → live in 2 minutes)

**Questions?** Check the logs in Vercel dashboard or contact support!

---

**Next:** Add real images and start promoting your site to the Austin pickleball community! 🏓

