# Quick Start Guide - Get Running in 5 Minutes!

## Step 1: Install Dependencies (1 minute)

\`\`\`bash
cd /Users/arinbrown/Documents/Arin\ Digital\ Innovations/Directories/PickleballATX/Cursor_PBATX
npm install
\`\`\`

## Step 2: Create Environment File (1 minute)

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

Then edit `.env.local` and add temporary values:

\`\`\`env
NEXT_PUBLIC_ADSENSE_ID=ca-pub-0000000000000000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=temporary
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

**Note**: The site will work without real API keys, but maps won't load and AdSense won't show.

## Step 3: Run Development Server (1 minute)

\`\`\`bash
npm run dev
\`\`\`

## Step 4: Open Your Browser

Go to: [http://localhost:3000](http://localhost:3000)

**You should see your site running!** 🎉

## What You'll See

- Homepage with hero section
- Search bar
- Featured courts section
- Free courts section
- Footer with navigation

## Try These Pages

- Homepage: http://localhost:3000
- All Courts: http://localhost:3000/courts
- Free Courts: http://localhost:3000/courts/free
- Indoor Courts: http://localhost:3000/courts/indoor
- About: http://localhost:3000/about
- Contact: http://localhost:3000/contact

## Click on Any Court

Each court has its own detail page with:
- Image gallery
- Full information
- Hours of operation
- Amenities
- Map (will show placeholder without API key)

## Next Steps

### To Add Real Maps

1. Get Google Maps API key: [console.cloud.google.com](https://console.cloud.google.com)
2. Enable "Maps JavaScript API"
3. Add to `.env.local`
4. Restart dev server

### To Add Real Images

1. Add court photos to `/public/images/courts/`
2. Follow naming convention in `.gitkeep` file
3. Refresh browser - images appear!

### To Deploy

See `DEPLOYMENT.md` for full guide, but quick version:

\`\`\`bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Deploy to Vercel
# - Go to vercel.com
# - Import from GitHub
# - Add environment variables
# - Deploy!
\`\`\`

## Troubleshooting

### Port 3000 Already in Use?

\`\`\`bash
# Use a different port
npm run dev -- -p 3001
\`\`\`

### Module Not Found Errors?

\`\`\`bash
# Reinstall dependencies
rm -rf node_modules
npm install
\`\`\`

### Changes Not Showing?

- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Or clear `.next` folder and restart:

\`\`\`bash
rm -rf .next
npm run dev
\`\`\`

## Making Changes

### Update Court Information

1. Open `data/courts.ts`
2. Find the court object
3. Edit any field
4. Save - page auto-refreshes!

### Change Colors

1. Open `tailwind.config.ts`
2. Edit the `primary` color values
3. Save - styles update automatically!

### Add New Court

1. Open `data/courts.ts`
2. Copy an existing court object
3. Update all the fields
4. Add images
5. Save - new page is auto-created!

## File Structure Quick Reference

\`\`\`
Important Files You Might Edit:
├── data/courts.ts              ← Court information
├── app/page.tsx                ← Homepage content
├── components/Hero.tsx         ← Hero section
├── tailwind.config.ts          ← Colors and styling
└── public/images/courts/       ← Add images here
\`\`\`

## Need Help?

1. Check `README.md` - Overview
2. Check `SETUP.md` - Detailed setup
3. Check `DEPLOYMENT.md` - Deployment guide
4. Check `PROJECT_SUMMARY.md` - What was built

## Common Tasks

### Change Site Title
Edit `app/layout.tsx` - line with `title:`

### Change Hero Text
Edit `components/Hero.tsx`

### Update About Page
Edit `app/about/page.tsx`

### Add/Remove Navigation Links
Edit `components/Header.tsx`

### Change Footer Content
Edit `components/Footer.tsx`

## You're All Set! 🎉

Your site is running and you can:
- Browse all pages
- See court listings
- View court details
- Test mobile responsiveness (Cmd+Opt+I in Chrome)

**Next**: Add real images and API keys, then deploy!

---

**Questions?** Check the other documentation files or contact info@pickleballatx.org

