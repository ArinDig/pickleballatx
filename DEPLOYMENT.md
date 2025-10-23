# Deployment Guide - Pickleball ATX

## Quick Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub

\`\`\`bash
git init
git add .
git commit -m "Initial commit - Pickleball ATX"
git remote add origin https://github.com/yourusername/pickleballatx.git
git push -u origin main
\`\`\`

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js

### Step 3: Add Environment Variables

In Vercel dashboard, add these environment variables:

\`\`\`
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_SITE_URL=https://pickleballatx.org
\`\`\`

### Step 4: Deploy

Click "Deploy" - Vercel will build and deploy automatically!

### Step 5: Custom Domain

1. Go to Project Settings > Domains
2. Add `pickleballatx.org`
3. Add `www.pickleballatx.org`
4. Update your domain's DNS records:

**For Namecheap/GoDaddy/Most Registrars:**
\`\`\`
Type: CNAME
Host: @
Value: cname.vercel-dns.com

Type: CNAME
Host: www
Value: cname.vercel-dns.com
\`\`\`

## Alternative: Deploy to Netlify

### Step 1: Build Settings

\`\`\`
Build command: npm run build
Publish directory: .next
\`\`\`

### Step 2: Environment Variables

Add the same environment variables as Vercel.

### Step 3: Deploy

Connect your GitHub repo and deploy!

## Performance Optimization Checklist

After deployment, verify:

- [ ] All images are loading
- [ ] Maps are working
- [ ] All links are functional
- [ ] Mobile responsive
- [ ] Lighthouse score 90+
- [ ] Core Web Vitals passing

## SEO Setup After Deployment

### 1. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://pickleballatx.org`
3. Verify ownership:
   - Recommended: Add DNS TXT record
   - Alternative: Upload HTML file
4. Submit sitemap: `https://pickleballatx.org/sitemap.xml`

### 2. Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Import from Google Search Console (easier)
4. Or verify manually

### 3. Google Analytics (Optional)

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get measurement ID (G-XXXXXXXXXX)
3. Add to your site (see SETUP.md)

## Monitoring

### Check These Regularly

1. **Uptime**: Use [UptimeRobot](https://uptimerobot.com) (free)
2. **Performance**: [PageSpeed Insights](https://pagespeed.web.dev/)
3. **SEO**: [Google Search Console](https://search.google.com/search-console)
4. **Analytics**: Google Analytics
5. **Errors**: Vercel/Netlify dashboard

## Updating Content

### Update Court Information

1. Edit `data/courts.ts`
2. Commit and push to GitHub
3. Vercel/Netlify auto-deploys

### Add New Courts

1. Add to `data/courts.ts`
2. Add images to `/public/images/courts/`
3. Push to GitHub
4. Auto-deploys with new pages!

## Cost Breakdown

### Free Forever
- Vercel/Netlify hosting (Hobby plan)
- GitHub repository
- Google Search Console
- Bing Webmaster Tools

### Paid Services
- Domain: $10-15/year (pickleballatx.org)
- Google Maps API: Free tier ($200/month credit)
  - ~28,000 map loads per month free
- Google AdSense: Revenue generator (makes you money!)

### Expected Costs
- **Year 1**: $10-15 (domain only)
- **Ongoing**: $10-15/year (domain renewal)
- Maps API stays free unless you get massive traffic

## Revenue Potential (AdSense)

With good SEO and traffic:
- Month 1-3: $10-50/month
- Month 4-6: $50-200/month
- Month 7-12: $200-500/month
- Year 2+: $500-2000/month

*Actual revenue varies based on traffic and ad placement*

## Troubleshooting Deployment

### Build Fails

\`\`\`bash
# Locally test build
npm run build

# If it works locally, check Vercel/Netlify logs
\`\`\`

### Environment Variables Not Working

- Ensure they're added in deployment platform dashboard
- Verify they start with `NEXT_PUBLIC_` for client-side use
- Redeploy after adding new variables

### Images Not Loading

- Check paths are correct in `courts.ts`
- Ensure images are in `/public/images/courts/`
- Try clearing build cache and redeploying

### Domain Not Working

- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Use [DNS Checker](https://dnschecker.org) to verify

## Rollback

If something goes wrong:

### On Vercel
1. Go to Deployments
2. Find last working deployment
3. Click "Promote to Production"

### On Netlify
1. Go to Deploys
2. Find last working deploy
3. Click "Publish deploy"

## Support Resources

- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Production Checklist

Before going live:

- [ ] All environment variables set
- [ ] Google Maps API key configured and working
- [ ] AdSense approved and integrated
- [ ] All court images added
- [ ] Favicon and icons created
- [ ] Custom domain configured
- [ ] SSL certificate active (auto by Vercel/Netlify)
- [ ] Sitemap submitted to search engines
- [ ] Analytics installed (optional)
- [ ] Test all pages and links
- [ ] Mobile testing complete
- [ ] Performance score 90+
- [ ] Accessibility score 90+

## Launch Day

1. Make final build and deploy
2. Test everything on production URL
3. Submit sitemap to Google
4. Share on social media
5. Notify Austin pickleball community
6. Monitor for any issues

## Post-Launch

### Week 1
- Monitor errors and fix any issues
- Check analytics daily
- Respond to any user feedback

### Month 1
- Review search console data
- Optimize poorly performing pages
- Add any missing courts

### Ongoing
- Weekly: Check for new courts to add
- Monthly: Review analytics and SEO
- Quarterly: Major updates and improvements

---

Need help? Email: info@pickleballatx.org

