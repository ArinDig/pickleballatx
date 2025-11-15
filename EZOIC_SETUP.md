# Ezoic Integration Setup Guide

## ✅ Completed Steps

### Step 1: Header Scripts Integration ✅
All required Ezoic scripts have been added to `app/layout.tsx`:

1. **Privacy Scripts** (loaded first):
   - `https://cmp.gatekeeperconsent.com/min.js`
   - `https://the.gatekeeperconsent.com/cmp.min.js`
   - Both include `data-cfasync="false"` attribute

2. **Ezoic Header Script**:
   - `//www.ezojs.com/ezoic/sa.min.js`
   - Initialization code for `window.ezstandalone`

All scripts are placed in the `<head>` section with `strategy="beforeInteractive"` to ensure they load early.

### Step 2: Ads.txt Setup ✅ **USING EZOIC'S AUTOMATED SERVICE**

**✅ Redirect Configured**: We're using Ezoic's recommended automated ads.txt manager service via redirect.

The `next.config.js` file has been configured to redirect `/ads.txt` to Ezoic's managed service:
```
https://srv.adstxtmanager.com/19390/pickleballatx.org
```

**⚠️ Action Required**: Verify the account ID `19390` with Ezoic
1. Log into your Ezoic account
2. Go to Settings → Integration → Ads.txt
3. Ezoic will provide the exact redirect URL format
4. Update the redirect URL in `next.config.js` if the account ID is different

**Benefits of this approach:**
- ✅ Ezoic automatically manages your ads.txt file
- ✅ Always up-to-date with all authorized ad sellers
- ✅ No manual updates needed
- ✅ Includes both Google AdSense and Ezoic entries automatically

**To test:**
1. Visit `https://pickleballatx.org/ads.txt` in your browser
2. You should see a list of authorized ad sellers (redirected from Ezoic's service)
3. If you see an error, verify the account ID in the redirect URL

### Step 3: Ad Placements ⚠️ **ACTION REQUIRED**

After your site is approved by Ezoic, you'll need to:

1. **Create Ad Placements in Ezoic Dashboard:**
   - Log into Ezoic
   - Go to Ad Settings → Ad Placements
   - Create placements for different positions (header, sidebar, in-content, footer, etc.)

2. **Add Placement Code to Your Site:**
   - Ezoic will provide JavaScript code for each placement
   - Add these codes to your pages where you want ads to appear
   - Example format:
     ```html
     <div id="ezoic-pub-ad-placeholder-[id]"></div>
     <script>
       ezstandalone.cmd.push(function() {
         ezstandalone.define([id]);
       });
     </script>
     ```

**Recommended Ad Placement Locations:**
- Header (after navigation)
- Sidebar (if you add one)
- In-content (between paragraphs in court descriptions)
- Footer (before footer content)

## Verification Checklist

- [x] Privacy scripts added to `<head>`
- [x] Ezoic header script added to `<head>`
- [x] Scripts load in correct order (privacy first, then header)
- [x] Ads.txt redirect configured to Ezoic's automated service
- [ ] Verify Ezoic account ID in redirect URL (if different from 19390)
- [ ] Ad placements created in Ezoic dashboard
- [ ] Placement codes added to site pages
- [ ] Site loads normally without errors
- [ ] Ads display correctly on live site

## Next Steps

1. **Submit your site to Ezoic** for approval (if not already done)
2. **Wait for approval** and receive your publisher ID
3. **Add Ezoic entry to ads.txt** with your publisher ID
4. **Create ad placements** in Ezoic dashboard
5. **Add placement codes** to your site pages
6. **Test and verify** ads are displaying correctly

## Troubleshooting

If ads aren't showing:
1. Check browser console for errors
2. Verify scripts are loading (check Network tab)
3. Ensure ads.txt is accessible at `https://pickleballatx.org/ads.txt`
4. Check Ezoic dashboard for any warnings or errors
5. Use Ezoic's JavaScript Integration Debugger

## Resources

- [Ezoic Integration Docs](https://docs.ezoic.com/docs/ezoicads/integration/)
- [Ezoic Ad Placements Guide](https://docs.ezoic.com/docs/ezoicads/implementation/)
- [Ezoic Troubleshooting](https://docs.ezoic.com/docs/ezoicads/troubleshooting/)

