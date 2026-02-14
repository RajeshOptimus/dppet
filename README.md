# dppet.shop - Dharampal's Official Pet Recommendations

A premium, high-performance affiliate marketing platform for dog products built with Next.js 14, Tailwind CSS, and modern web technologies.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **Static Site Generation (SSG)** for fast, scalable pages
- **Responsive Design** with Tailwind CSS (Mobile-first approach)
- **Smooth Animations** with Framer Motion
- **SEO Optimized** with JSON-LD schema markup
- **Product Cards** with affiliate links and reviews
- **Breed-Specific Pages** with dynamic content
- **GitHub Actions CI/CD** for automated builds and deployments

## 📋 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel / GitHub Pages
- **CI/CD:** GitHub Actions

## 🎨 Brand Identity

- **Logo:** DP with paw-print icon
- **Primary Color:** `#F97316` (Vivid Orange)
- **Secondary Color:** `#1E293B` (Deep Navy)
- **Background:** `#FAFAF9` (Warm Off-white)
- **Border Radius:** `rounded-2xl` for friendly, modern feel

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global styles and Tailwind
│   ├── page.tsx                # Home page with hero & products
│   └── breeds/[slug]/          # Breed-specific pages (dynamic)
├── components/
│   ├── Header.tsx              # Navigation with breed dropdown
│   ├── ProductCard.tsx         # Reusable product card
│   └── Footer.tsx              # Footer with compliance info
├── products.json               # Product data source
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
├── .eslintrc.json              # Linter config
├── .github/workflows/
│   └── build-and-deploy.yml    # GitHub Actions CI/CD
└── README.md                   # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dppet-shop.git
cd dppet-shop

# Install dependencies
npm install

# Set up environment variables (if needed)
cp .env.example .env.local
```

## 🚀 Getting Started

### Setup Dharampal's Image

1. **Add Dharampal's Photo:**
   - Place Dharampal's image in: `public/images/dharampal.jpg`
   - Recommended size: 500x500px (can be any size, Next.js will optimize)
   - Supported formats: JPG, PNG, WebP

2. **File Structure:**
   ```
   public/
   └── images/
       └── dharampal.jpg   ← Add your image here
   ```

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📊 Pages

### Home Page (`/`)

- Hero section with CTA
- Trust bar showing YouTube subscribers
- Breed selection grid
- Dynamic product feed
- Call-to-action section

### Breed Pages (`/breeds/[slug]`)

- Dynamic breed-specific content
- Filtered products for that breed
- Expert advice from Dharampal
- JSON-LD schema for SEO

## 📦 Product Data Structure

Products are stored in `products.json`:

```json
{
  "id": "1",
  "name": "Organic Puppy Kibble",
  "brand": "Royal Canin",
  "price": "1499",
  "image": "https://...",
  "breeds": ["Indie", "Golden Retriever"],
  "category": "Food",
  "dp_review": "Dharampal ki shining coat ka raaz!",
  "amazon_url": "https://amazon.in/...",
  "yt_video_id": "video_id_here",
  "verified": true
}
```

## 🔒 SEO & Schema

- Dynamic meta titles and descriptions
- JSON-LD schema for Product and Review content
- Open Graph tags for social sharing
- Sitemap and robots.txt support

## 📦 Affiliate Compliance

- Auto-injected "Earns commission" disclaimer
- Clear affiliate product badges
- Compliance footer with disclosure

## 🔄 GitHub Actions CI/CD

Automated workflows are configured in `.github/workflows/build-and-deploy.yml`:

### Build Job
- Tests on Node.js 18.x and 20.x
- Linting and TypeScript checks
- Artifact uploads

### Deploy Job
- Deploys to Vercel (if token is set)
- Uploads to GitHub Pages
- Triggered on push to main branch

### Setup for Deployment

1. **Vercel Deployment:**
   - Add `VERCEL_TOKEN` secret in GitHub repository settings
   - Workflow will auto-deploy to Vercel

2. **GitHub Pages Deployment:**
   - Enable GitHub Pages in repository settings
   - Point to GitHub Actions as deployment source

## 📈 Performance

- LCP (Largest Contentful Paint): < 2.5s ✅
- Core Web Vitals optimized
- Image optimization with `next/image`
- CSS-in-JS with Tailwind for smaller bundles

## 🐛 Common Issues

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
npm run build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React Icons](https://lucide.dev)

## 📝 Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Built with ❤️ for Dharampal's pet community

## 📞 Support

For issues or questions:
- Create an issue in GitHub
- Contact via YouTube channel

---

**Happy coding! 🐾**
