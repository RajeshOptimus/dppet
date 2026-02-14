# Dharampal Image Setup

## Instructions

The Dharampal image is referenced in the homepage but needs to be added manually:

### Step 1: Prepare the Image
- You have Dharampal's photo (the cute indie pup in the red sweater!)
- Recommended: Crop/optimize the image to around 500x500px
- Save as JPG or PNG for best compatibility

### Step 2: Add to Project
1. Create folder: `public/images/` (if not exists)
2. Place your image: `public/images/dharampal.jpg`
3. Restart the development server

### Step 3: Verify
- Visit `http://localhost:3000`
- You should see Dharampal's photo on the homepage hero section
- Image will auto-optimize for web performance

## Technical Details

- Image path: `/public/images/dharampal.jpg`
- Referenced in: `app/page.tsx` (line 38)
- Next.js will automatically optimize the image
- Fallback: If image missing, the page still works but shows placeholder

## Tips

- Use WebP format for smaller file sizes (optional)
- Add multiple images: `dharampal-1.jpg`, `dharampal-2.jpg` for carousel (future feature)
- Images are cached for performance

---

Questions? Check the README.md for more details!
