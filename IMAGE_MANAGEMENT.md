# Court Images Management System

## Current Status: Using Stock Images

All courts are currently using high-quality stock images from Unsplash as placeholders. These images will display immediately and provide a professional look while you gather real court photos.

## Stock Images Used

- **Main Image**: Professional pickleball court photo
- **Additional Images**: Various pickleball and sports-related images
- **Source**: Unsplash (free, high-quality stock photos)
- **Format**: Optimized URLs with proper sizing (800x600)

## Adding Real Court Photos

### Step 1: Take/Collect Photos

For each court, you'll need:
- **1 Main Image**: Best shot of the court (hero image)
- **2-3 Additional Images**: Different angles, amenities, facilities

### Step 2: Image Requirements

- **Format**: JPG or WebP
- **Size**: 1200x800px minimum (3:2 aspect ratio preferred)
- **File Size**: Under 500KB per image
- **Quality**: High resolution, well-lit, professional

### Step 3: File Naming Convention

Save images in `/public/images/courts/` with these names:

**Austin Pickle Ranch - Braker:**
- `austin-pickle-ranch-braker.jpg` (main)
- `austin-pickle-ranch-braker-2.jpg`
- `austin-pickle-ranch-braker-3.jpg`
- `austin-pickle-ranch-braker-4.jpg`

**Austin Pickle Ranch - West 6th:**
- `austin-pickle-ranch-6th.jpg` (main)
- `austin-pickle-ranch-6th-2.jpg`
- `austin-pickle-ranch-6th-3.jpg`

**Austin Tennis and Pickleball Center:**
- `austin-tennis-pickleball.jpg` (main)
- `austin-tennis-pickleball-2.jpg`
- `austin-tennis-pickleball-3.jpg`

**Bouldin Acres:**
- `bouldin-acres.jpg` (main)
- `bouldin-acres-2.jpg`
- `bouldin-acres-3.jpg`

**The Pitch:**
- `the-pitch.jpg` (main)
- `the-pitch-2.jpg`
- `the-pitch-3.jpg`

**Lake Travis Biergarten:**
- `lake-travis-biergarten.jpg` (main)
- `lake-travis-biergarten-2.jpg`

**Little Zilker Park:**
- `little-zilker.jpg` (main)
- `little-zilker-2.jpg`

**South Austin Recreation Center:**
- `south-austin-rec.jpg` (main)
- `south-austin-rec-2.jpg`
- `south-austin-rec-3.jpg`

**Dittmar Recreation Center:**
- `dittmar-rec.jpg` (main)
- `dittmar-rec-2.jpg`

**Pan Am Recreation Center:**
- `pan-am-rec.jpg` (main)
- `pan-am-rec-2.jpg`
- `pan-am-rec-3.jpg`

**Castle Court Austin:**
- `castle-court.jpg` (main)
- `castle-court-2.jpg`
- `castle-court-3.jpg`

**Other Racquet Social Club:**
- `other-racquet.jpg` (main)
- `other-racquet-2.jpg`
- `other-racquet-3.jpg`

### Step 4: Update Court Data

Once you have real images, update `data/courts.ts`:

**Change from:**
```typescript
mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
images: [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
],
```

**Change to:**
```typescript
mainImage: '/images/courts/austin-pickle-ranch-braker.jpg',
images: [
  '/images/courts/austin-pickle-ranch-braker-2.jpg',
  '/images/courts/austin-pickle-ranch-braker-3.jpg',
  '/images/courts/austin-pickle-ranch-braker-4.jpg'
],
```

### Step 5: Deploy Changes

1. Add images to `/public/images/courts/`
2. Update `data/courts.ts` with local image paths
3. Commit and push to GitHub
4. Vercel auto-deploys with new images!

## Image Optimization Tips

### Before Uploading:
- **Resize**: Use tools like Photoshop, Canva, or online resizers
- **Compress**: Use TinyPNG or similar to reduce file size
- **Format**: JPG for photos, WebP for better compression

### Online Tools:
- **Resize**: [resizeimage.net](https://resizeimage.net)
- **Compress**: [tinypng.com](https://tinypng.com)
- **Convert**: [convertio.co](https://convertio.co)

## Priority Order

**High Priority** (Most Popular Courts):
1. Austin Pickle Ranch - Braker Lane
2. Austin Pickle Ranch - West 6th
3. Pan Am Recreation Center
4. South Austin Recreation Center

**Medium Priority**:
5. Austin Tennis and Pickleball Center
6. Bouldin Acres
7. The Pitch

**Lower Priority**:
8. Castle Court Austin
9. Other Racquet Social Club
10. Lake Travis Biergarten
11. Little Zilker Park
12. Dittmar Recreation Center

## Contact Information for Photos

**Austin Pickle Ranch**: Contact them directly - they likely have professional photos
**City Recreation Centers**: Austin Parks & Recreation may have photos
**Private Facilities**: Contact management for permission to photograph

## Legal Considerations

- **Permission**: Get permission before photographing private facilities
- **People**: Avoid including identifiable people without permission
- **Copyright**: Ensure you have rights to use any photos you take

---

## Quick Start

**To add real photos for one court:**

1. Take/collect 3-4 photos of the court
2. Resize to 1200x800px and compress
3. Save with correct naming convention
4. Add to `/public/images/courts/`
5. Update the court object in `data/courts.ts`
6. Commit and push

**Your site will automatically update with the new images!** 🎉

