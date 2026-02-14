# Role: Senior Next.js Developer & SEO Specialist
# Project: dppet.shop (Dharampal's Official Pet Recommendations)

## 1. Executive Summary
Build a premium, high-performance affiliate marketing platform for dog products. 
- **Domain:** dppet.shop
- **Lead Character:** Dharampal (Indie puppy with 25k YouTube Subscribers).
- **Core Value:** "DP Approved" - Trust-based recommendations for different dog breeds.

## 2. Tech Stack & DevOps Requirements
- **Framework:** Next.js 14 (App Router) with Static Site Generation (SSG).
- **Styling:** Tailwind CSS (Mobile-first, responsive).
- **UI:** Shadcn/UI + Framer Motion (for smooth entrance animations).
- **Icons:** Lucide-react (using dog, bone, shopping-bag, and youtube icons).
- **Performance:** Must pass Core Web Vitals (LCP < 2.5s). Use `next/image` for all assets.

## 3. Brand Identity & Design System
- **Logo Concept:** Text-based "DP" with a paw-print icon, followed by "pet.shop".
- **Colors:** - Primary: #F97316 (Vivid Orange - Represents energy/joy)
  - Secondary: #1E293B (Deep Navy - Represents trust/authority)
  - Background: #FAFAF9 (Warm Off-white)
- **Rounded Corners:** Use `rounded-2xl` for a friendly, modern pet-brand feel.

## 4. Page-Specific Requirements

### A. Global Navigation
- Sticky header with "dppet.shop" logo.
- Links: Breeds, Dharampal's Picks, Best Sellers, YouTube.
- Search Bar: Quick search for "Golden Retriever food" or "Puppy Toys".

### B. Home Page (page.tsx)
- **Hero:** "Dharampal Approved Gear!" with a high-res image placeholder for Dharampal and a CTA "Shop by Breed".
- **Trust Bar:** "As seen on YouTube - 25k+ Pack Members".
- **Breed Grid:** Circular icons for top breeds (Indie, Lab, GSD, Beagle, etc.).
- **Dynamic Product Feed:** Fetching from a local `products.json`.

### C. Breed-Specific Template (/breeds/[slug])
- **Dynamic Content:** H1: "Best Products for [Breed Name]".
- **Expert Advice:** A small section: "Why Dharampal recommends these for [Breed]".
- **Product Grid:** Filtered view for that specific breed.

### D. Affiliate Product Card (Component)
- Image with `hover:scale-105` transition.
- **Badge:** "Verified by DP" (Orange gradient badge).
- **Pricing:** Clear "₹X,XXX" font.
- **CTA:** Primary "Check Price on Amazon" + Secondary "Watch Review" (opens YT link).

## 5. SEO & Schema Integration
- **JSON-LD:** Automatically generate "Product" and "Review" schema for Google snippets.
- **Metadata:** Dynamic titles: "[Product Name] Review - dppet.shop".
- **Affiliate Compliance:** Auto-inject "Earns commission" disclaimer in the footer.

## 6. Data Structure (Sample products.json)
[
  {
    "id": "1",
    "name": "Organic Puppy Kibble",
    "brand": "Royal Canin",
    "price": "1499",
    "breeds": ["Indie", "Golden Retriever"],
    "category": "Food",
    "dp_review": "Dharampal ki shining coat ka raaz!",
    "amazon_url": "#",
    "yt_video_id": "video_id_here"
  }
]