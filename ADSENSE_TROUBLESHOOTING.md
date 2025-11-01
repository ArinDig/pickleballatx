# Google AdSense ads.txt Troubleshooting

## Current Status
✅ `ads.txt` file exists and contains correct content:
```
google.com, pub-1749871118217579, DIRECT, f08c47fec0942fa0
```

✅ File is accessible at:
- https://pickleballatx.org/ads.txt
- https://www.pickleballatx.org/ads.txt

✅ Google AdSense meta tag added:
```html
<meta name="google-adsense-account" content="ca-pub-1749871118217579">
```

## Potential Issue: WWW Redirect

**Problem:** If there's an automatic redirect between www and non-www versions, AdSense might have trouble detecting the ads.txt file.

**Solution:** Ensure both domains are properly configured in Vercel.

## Steps to Fix in Vercel:

1. **Go to Vercel Project Settings**
   - Navigate to your project: https://vercel.com/dashboard
   - Go to Settings → Domains

2. **Configure Both Domains**
   - Ensure both `pickleballatx.org` and `www.pickleballatx.org` are listed
   - Set `pickleballatx.org` as the primary (canonical) domain

3. **Check Redirect Rules**
   - If there's a redirect from non-www to www (or vice versa), it should be a 301 redirect
   - The redirect should NOT affect the ads.txt file
   - Ideally, both versions should work without redirects

4. **Verify in AdSense:**
   - Add BOTH domains to your AdSense account:
     - `pickleballatx.org`
     - `www.pickleballatx.org`
   - Or ensure the canonical domain (non-www) is the one being verified

## Verification Checklist:

- [ ] Both URLs accessible: https://pickleballatx.org/ads.txt and https://www.pickleballatx.org/ads.txt
- [ ] File content matches exactly: `google.com, pub-1749871118217579, DIRECT, f08c47fec0942fa0`
- [ ] No redirect loop when accessing ads.txt
- [ ] Meta tag present in page source: `<meta name="google-adsense-account" content="ca-pub-1749871118217579">`
- [ ] Domain configured correctly in Vercel (both www and non-www)

## Next Steps:

1. Wait 24-48 hours after deployment for AdSense to re-check
2. In AdSense, click "Refresh" or "Re-check" on the ads.txt status
3. If still not working, contact AdSense support with the verification that both URLs work

