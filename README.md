# Eureka Doors — Website

A modern, responsive website for Eureka Doors, India's leading bulk door manufacturer since 2000.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

## 📁 Project Structure

```
eureka-doors/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page with all sections
│   │   └── globals.css         # Global styles and animations
│   ├── components/             # 17 React components
│   │   ├── Navbar.tsx          # Navigation
│   │   ├── Hero.tsx            # Hero section with 3D doors
│   │   ├── Stats.tsx           # Statistics counters
│   │   ├── Gallery.tsx         # Image gallery
│   │   ├── Products.tsx        # Product listing & filtering
│   │   ├── CoreValues.tsx      # Company values
│   │   ├── Architects.tsx      # Architects section
│   │   ├── WhyEureka.tsx       # Why choose Eureka
│   │   ├── Awards.tsx          # Awards & recognitions
│   │   ├── Testimonials.tsx    # Client testimonials
│   │   ├── ClientMarquee.tsx   # Scrolling client logos
│   │   ├── GroupCompanies.tsx  # Related companies
│   │   ├── CTA.tsx             # Call-to-action
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer
│   │   ├── WhatsAppFloat.tsx   # Floating WhatsApp button
│   │   └── QuoteModal.tsx      # Quote request modal
│   ├── hooks/                  # Custom React hooks
│   │   ├── useNavbar.ts        # Navbar state management
│   │   ├── useCounter.ts       # Animated counter hook
│   │   └── useScrollReveal.ts  # Scroll reveal animations
│   └── lib/
│       └── constants.ts        # All data (products, awards, etc.)
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
└── package.json                # Dependencies
```

## 🎨 Features

- **Responsive Design**: Mobile-first, optimized for all devices
- **3D Animations**: 3D door opening animations using CSS 3D transforms
- **Scroll Reveal**: Elements animate on scroll using Intersection Observer
- **Product Filtering**: Filter products by category
- **Animated Counters**: Statistics count up on scroll
- **Marquee Effect**: Scrolling client logo marquee
- **Modal Forms**: Quote request modal with validation
- **Dark Theme**: Modern dark UI with sky blue accents
- **WhatsApp Integration**: Floating WhatsApp button for instant contact
- **SEO Optimized**: Metadata, semantic HTML, and performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS animations
- **Icons**: @iconify/react
- **Animations**: CSS 3D, keyframes, Intersection Observer
- **Deployment**: Optimized for Vercel

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel deploy
```

## 📝 Scripts

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🖼️ Images

All images are loaded from `eurekaindia.com` via remote image patterns configured in `next.config.mjs`. To use local images:

1. Place images in `/public` directory
2. Update image paths in components or constants

## 📞 Contact

- **Phone**: +91 – 8888 78 4444
- **Email**: sales@eurekaindia.com
- **Website**: eurekaindia.com
- **Location**: Warje, Pune 411058

## 📄 License

© 2025 Eureka Doors. All rights reserved.
# Eureka-Doors-Updated
