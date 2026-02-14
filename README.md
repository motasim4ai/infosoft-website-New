# Infosoft Website - Complete Implementation

## Overview
This is the complete corporate website for **Infosoft - Information & Software Co. Ltd.**, a leading IT solutions provider in Saudi Arabia since 1987.

## Built With
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (with custom glassmorphism utilities)
- **shadcn/ui** + Radix UI components
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **next-intl** (bilingual EN/AR with RTL support)
- **React Hook Form** + Zod (form validation)

## Features

### Design
- Modern glassmorphism theme with cyan (#06b6d4) as primary color
- Frosted glass effects with backdrop blur
- Gradient mesh backgrounds
- Smooth animations and transitions
- Fully responsive across all breakpoints

### Bilingual Support
- English and Arabic languages
- Default language: Arabic
- Full RTL (Right-to-Left) support for Arabic
- Language switcher in navbar
- URL structure: `/en/...` for English, `/ar/...` for Arabic

### Pages Implemented

#### Main Pages
- **Home** (`/`) - Hero, stats, products grid, services, why choose us
- **About Us** (`/about-us`) - Company timeline, vision & mission
- **Products Overview** (`/products`) - Filterable product grid
- **Services Overview** (`/services`) - All services listed
- **Clients** (`/clients`) - Logo wall, testimonials
- **Blog** (`/blog`) - Article listing and individual posts
- **Support** (`/support`) - FAQ, knowledge base
- **Contact Us** (`/contact-us`) - Contact form and locations
- **Request Demo** (`/request-demo`) - Demo request form

#### Product Pages
- Infosoft 13 - Flagship ERP/Accounting
- Motamayez Lite - Lightweight accounting
- Gold Management - Gold & jewelry system
- Restaurant & Cafe - POS system
- Supermarket - Retail POS
- E-Invoicing - ZATCA compliance
- Mobile Apps - Mobile solutions

#### Service Pages
- Software Development
- Cloud Solutions
- Networking
- Technical Support
- Hardware Supply
- Web Development
- Training

#### Legal Pages
- Privacy Policy
- Terms of Service
- 404 Error Page

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The website will be available at:
- Arabic (default): http://localhost:3000/ar
- English: http://localhost:3000/en

## Project Structure

```
.
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── layout.tsx      # Main layout with navbar & footer
│   │   ├── page.tsx        # Home page
│   │   ├── about-us/
│   │   ├── products/
│   │   ├── services/
│   │   ├── clients/
│   │   ├── blog/
│   │   ├── support/
│   │   ├── contact-us/
│   │   ├── request-demo/
│   │   └── legal pages...
│   └── globals.css         # Global styles & glassmorphism
├── components/
│   ├── layout/            # Navbar, Footer, MobileMenu
│   ├── ui/                # Reusable UI components
│   └── sections/home/     # Home page sections
├── messages/
│   ├── en.json           # English translations
│   └── ar.json           # Arabic translations
└── Configuration files...
```

## Key Features
- ✅ Complete bilingual website (EN/AR with RTL)
- ✅ Modern glassmorphism design
- ✅ Fully responsive
- ✅ All pages implemented
- ✅ Forms with validation
- ✅ SEO-friendly structure
- ✅ Production-ready build

## Company Information
- **Name**: Infosoft - Information & Software Co. Ltd.
- **Founded**: 1987, Jeddah, Saudi Arabia
- **Unified Number**: 920012306
- **Email**: info@infosoft.com.sa
- **Clients Served**: 5,500+ organizations

## License
© 2025 Infosoft - Information & Software Co. Ltd. All Rights Reserved.