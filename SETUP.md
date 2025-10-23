# Pickleball ATX - Setup Guide

## Initial Setup Steps

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

Edit `.env.local` and add your API keys:

\`\`\`env
# Google AdSense (Required for monetization)
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX

# Google Maps API (Required for map functionality)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Site URL (Update for production)
NEXT_PUBLIC_SITE_URL=https://pickleballatx.org
\`\`\`

### 3. Google Maps API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Geocoding API (optional, for future features)
4. Create credentials (API key)
5. Restrict the API key (recommended):
   - Set HTTP referrers to your domain(s)
   - Restrict to Maps JavaScript API
6. Add the key to `.env.local`

### 4. Google AdSense Setup

1. Sign up at [Google AdSense](https://www.google.com/adsense)
2. Add your site and get verified
3. Get your Publisher ID (format: ca-pub-XXXXXXXXXXXXXXXX)
4. Add it to `.env.local`
5. AdSense will automatically load on all pages

### 5. Add Court Images

1. Navigate to `/public/images/courts/`
2. Add images for each court following the naming convention in `.gitkeep`
3. Recommended specs:
   - Size: 1200x800px minimum
   - Format: JPG or WebP
   - Optimize for web (under 500KB)

Example images you'll need for existing courts:
\`\`\`
austin-pickle-ranch-braker.jpg
austin-pickle-ranch-braker-2.jpg
austin-pickle-ranch-braker-3.jpg
austin-pickle-ranch-6th.jpg
austin-pickle-ranch-6th-2.jpg
... (see courts.ts for complete list)
\`\`\`

### 6. Create Favicon and Icons

Create the following icons and place them in `/public/`:

- `favicon.ico` (32x32)
- `favicon-16x16.png` (16x16)
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png` (192x192)
- `android-chrome-512x512.png` (512x512)
- `og-image.jpg` (1200x630 for social sharing)

You can use tools like [Favicon Generator](https://realfavicongenerator.net/) or [Canva](https://www.canva.com).

### 7. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_ADSENSE_ID`
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy!

Vercel will automatically:
- Build the project
- Generate static pages
- Create the sitemap
- Optimize images
- Set up CDN

### Custom Domain Setup

1. In Vercel, go to Project Settings > Domains
2. Add `pickleballatx.org` and `www.pickleballatx.org`
3. Update DNS records with your registrar:
   - A record: Point to Vercel's IP
   - CNAME: Point www to Vercel
4. Wait for DNS propagation (up to 48 hours)

### SSL Certificate

Vercel automatically provisions SSL certificates. No additional setup needed!

## Post-Deployment Checklist

### SEO Setup

- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit site to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Set up Google Analytics (optional)
- [ ] Test structured data with [Rich Results Test](https://search.google.com/test/rich-results)

### Google Search Console

1. Add property for `pickleballatx.org`
2. Verify ownership (DNS or HTML file)
3. Submit sitemap: `https://pickleballatx.org/sitemap.xml`
4. Request indexing for key pages

### Performance Testing

- [ ] Run [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit
- [ ] Check [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test mobile responsiveness
- [ ] Test all court detail pages
- [ ] Verify maps are working
- [ ] Check all links

### Analytics (Optional)

To add Google Analytics:

1. Create GA4 property
2. Get measurement ID (format: G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:

\`\`\`tsx
<Script
  src={\`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX\`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {\`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  \`}
</Script>
\`\`\`

## Maintenance

### Adding New Courts

1. Edit `data/courts.ts`
2. Add new court object with all required fields
3. Add images to `/public/images/courts/`
4. Deploy - pages will auto-generate!

### Updating Court Information

1. Edit the court object in `data/courts.ts`
2. Update any changed images
3. Deploy

### Regular Tasks

- Weekly: Check for outdated information
- Monthly: Review analytics and update popular courts
- Quarterly: Add new courts, update features
- Annually: Major design refresh (optional)

## Troubleshooting

### Maps Not Loading

- Check if `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set correctly
- Verify the API key is enabled for Maps JavaScript API
- Check browser console for error messages
- Ensure billing is enabled on Google Cloud (required even for free tier)

### Images Not Showing

- Verify image files exist in `/public/images/courts/`
- Check filename matches exactly (case-sensitive)
- Ensure images are optimized and not corrupted
- Clear Next.js cache: `rm -rf .next`

### Build Errors

- Delete `.next` folder and `node_modules`
- Reinstall: `npm install`
- Rebuild: `npm run build`

### AdSense Not Showing

- AdSense can take 24-48 hours to start showing ads
- Ensure your site is approved by AdSense
- Check that `NEXT_PUBLIC_ADSENSE_ID` is set correctly
- Ads may not show in development mode

## Support

For issues or questions:
- Email: info@pickleballatx.org
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)

## License

© 2025 Pickleball ATX. All rights reserved.

