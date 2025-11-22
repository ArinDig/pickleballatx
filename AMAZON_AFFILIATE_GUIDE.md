# Amazon Affiliate Setup Guide

## Overview
Your pickleball gear page is now live at `/gear` with 10 curated products using your Amazon Associates ID: `adiaustin-20`

## Current Products

### Paddles (4 products)
1. **Selkirk Vanguard Hybrid Invikta** - ASIN: B08XQJZQ7K
2. **JOOLA Ben Johns Hyperion CFS 16mm** - ASIN: B0BQJ8XQ7K
3. **ONIX Graphite Z5** - ASIN: B00J8XQ7K
4. **Paddletek Tempest Wave Pro** - ASIN: B08XQJZQ7L

### Balls (2 products)
1. **Onix Pure 2 Outdoor (12-Pack)** - ASIN: B00J8XQ7M
2. **Franklin X-40 Performance (12-Pack)** - ASIN: B00J8XQ7N

### Shoes (2 products)
1. **ASICS Gel-Rocket 10 Volleyball Shoes** - ASIN: B08XQJZQ7P
2. **K-Swiss Express Light Pickleball Shoes** - ASIN: B08XQJZQ7Q

### Bags (2 products)
1. **Selkirk Pickleball Paddle Backpack** - ASIN: B08XQJZQ7R
2. **Onix Pickleball Paddle Bag** - ASIN: B00J8XQ7S

### Accessories (1 product)
1. **Pickleball Paddle Grip Tape (3-Pack)** - ASIN: B08XQJZQ7T

## How to Add/Update Products

### Finding Product ASINs
1. Go to Amazon.com and search for the product
2. Click on the product page
3. The ASIN is in the product details section (usually under "Product Information")
4. Or look at the URL: `amazon.com/dp/ASIN_HERE`

### Adding a New Product

Edit `app/gear/page.tsx` and add to the `products` array:

```typescript
{
  name: 'Product Name Here',
  asin: 'BXXXXXXXXX',  // Replace with actual ASIN
  category: 'Paddles',  // or 'Balls', 'Shoes', 'Bags', 'Accessories'
  price: '$XX.XX',  // Optional - current price
  rating: 4.5,  // Optional - star rating (1-5)
  reviewCount: '1,200+',  // Optional - number of reviews
  description: 'Product description here',
}
```

### Updating Prices/Ratings

Prices and ratings are optional fields. You can:
- Update them manually when you notice changes
- Remove them if you prefer not to display them
- Leave them as-is (they're just for display, not dynamically fetched)

### Product Categories

Available categories:
- `Paddles`
- `Balls`
- `Shoes`
- `Bags`
- `Accessories`

Products are automatically grouped by category on the page.

## Affiliate Link Format

All links automatically use your affiliate tag: `adiaustin-20`

The format is: `https://www.amazon.com/dp/{ASIN}/?tag=adiaustin-20`

## Important Notes

1. **Disclosure**: The page includes the required Amazon Associates disclosure statement
2. **Sponsored Links**: All links use `rel="noopener noreferrer sponsored"` for proper attribution
3. **SEO**: The page is optimized with metadata, canonical tags, and structured content
4. **Mobile Responsive**: Product cards are responsive and work on all devices

## Testing Your Links

1. Visit `https://pickleballatx.org/gear` (or localhost in development)
2. Click any "View on Amazon" button
3. Check the URL includes `?tag=adiaustin-20`
4. Make a test purchase to verify commissions are tracking

## Best Practices

1. **Keep Products Current**: Update prices/ratings periodically
2. **Add Seasonal Products**: Consider adding holiday gift guides or seasonal items
3. **Monitor Performance**: Check your Amazon Associates dashboard for click-through rates
4. **Add More Products**: Consider expanding to 15-20 products for better variety
5. **Product Reviews**: Consider writing short reviews for top products to add value

## Next Steps

1. ✅ Gear page created and added to navigation
2. ✅ Added to sitemap for SEO
3. ✅ Footer link added
4. 🔄 Test all affiliate links
5. 🔄 Monitor Amazon Associates dashboard for clicks
6. 🔄 Consider adding product images (optional - requires hosting or using Amazon's image API)

## Troubleshooting

**Links not working?**
- Verify the ASIN is correct
- Check that the product is still available on Amazon
- Ensure your affiliate account is active

**Not seeing commissions?**
- Wait 24-48 hours for tracking to appear
- Verify cookies are enabled (Amazon uses cookies for tracking)
- Check your Amazon Associates dashboard

**Want to add product images?**
- You can use Amazon's Product Advertising API (requires API access)
- Or host images yourself and add `imageUrl` field to products
- Or use Next.js Image component with external URLs (requires domain allowlist)

