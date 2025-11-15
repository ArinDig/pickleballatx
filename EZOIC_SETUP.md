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

### Step 2: Ads.txt Setup ⚠️ **ACTION REQUIRED**

The `public/ads.txt` file currently contains:
```
google.com, pub-1749871118217579, DIRECT, f08c47fec0942fa0
```

**You need to add your Ezoic entry** once you receive your publisher ID from Ezoic. The format will be:
```
ezoic.com, [your-publisher-id], DIRECT
```

**How to get your Ezoic publisher ID:**
1. Log into your Ezoic account
2. Go to Settings → Integration → Ads.txt
3. Ezoic will provide the exact line to add to your ads.txt file
4. Add it to `public/ads.txt` (keep the Google AdSense line)

**Example of complete ads.txt:**
```
google.com, pub-1749871118217579, DIRECT, f08c47fec0942fa0
ezoic.com, [your-publisher-id], DIRECT
```

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
- [ ] Ezoic entry added to ads.txt (waiting for publisher ID)
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

