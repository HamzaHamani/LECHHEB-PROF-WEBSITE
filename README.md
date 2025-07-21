# 🎓 Dr. Houda LECHHEB - Academic Website

> **Professional academic website for Dr. Houda LECHHEB, Professor of Economics at Université Ibn Tofail**

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![SEO Score](https://img.shields.io/badge/SEO_Score-98/100-brightgreen?style=for-the-badge)](https://developers.google.com/speed/pagespeed/insights/)
[![Netlify](https://img.shields.io/badge/Custom_Domain-houdalechheb.com-00C7B7?style=for-the-badge&logo=netlify)](https://houdalechheb.com)

## 🌟 **Live Website**

**🔗 [houdalechheb.com](https://houdalechheb.com)**

---

## 📋 **Table of Contents**

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [📊 SEO & Analytics](#-seo--analytics)
- [🎨 Design System](#-design-system)
- [📱 Social Media Integration](#-social-media-integration)
- [🎓 Academic Features](#-academic-features)
- [🌐 Deployment](#-deployment)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)

---

## ✨ **Features**

### 🎯 **Core Functionality**

- ✅ **Responsive Design** - Mobile-first approach with perfect display on all devices
- ✅ **Professional Portfolio** - Showcasing academic achievements and research
- ✅ **Publications Management** - Organized display of research papers and articles
- ✅ **Course Information** - Academic courses and teaching materials
- ✅ **Contact Integration** - Professional contact form with email functionality
- ✅ **Multi-language Support** - French and English content
- ✅ **Dark/Light Mode** - Theme switching with system preference detection

### 🔍 **SEO & Performance**

- ✅ **98/100 SEO Score** - Comprehensive search engine optimization
- ✅ **Google Analytics 4** - Advanced visitor tracking and insights
- ✅ **Search Console Integration** - Google, Bing, and Yandex verification
- ✅ **Rich Snippets** - Structured data for enhanced search results
- ✅ **Open Graph Optimization** - Perfect social media sharing
- ✅ **Core Web Vitals** - Optimized for speed and user experience
- ✅ **Academic SEO** - Specialized optimization for research visibility

### 🎓 **Academic Integration**

- ✅ **ORCID Integration** - Professional researcher identification
- ✅ **Google Scholar Profile** - Citation tracking and research metrics
- ✅ **ResearchGate Connection** - Academic networking and collaboration
- ✅ **Citation Management** - Proper academic citation formats
- ✅ **Research Categorization** - Organized by topics and chronology

### 📱 **Social Media Optimization**

- ✅ **Professor's Photo Integration** - Professional image across all platforms
- ✅ **15+ Platform Support** - Facebook, LinkedIn, Twitter, WhatsApp, Discord, etc.
- ✅ **Rich Link Previews** - Engaging previews when sharing links
- ✅ **Academic Platform Integration** - ResearchGate, Google Scholar, Academia.edu

---

## 🛠️ **Tech Stack**

### **Frontend Framework**

- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[React 19](https://react.dev/)** - Latest React features and hooks

### **Styling & UI**

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Reusable component library
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon set
- **[Custom Theme System](./lib/theme-provider.tsx)** - Dark/light mode support

### **SEO & Analytics**

- **[Google Analytics 4](./lib/analytics.ts)** - Advanced tracking
- **[Structured Data](./lib/seo.ts)** - JSON-LD schema markup
- **[Meta Tag Management](./lib/social-meta.ts)** - Social media optimization
- **[Sitemap Generation](./app/sitemap.ts)** - Automatic XML sitemap

### **Development Tools**

- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Prettier](https://prettier.io/)** - Code formatting
- **[PNPM](https://pnpm.io/)** - Fast, disk space efficient package manager

---

## 🚀 **Quick Start**

### **Prerequisites**

- **Node.js 18+** installed
- **PNPM** package manager
- **Git** for version control

### **Installation**

```bash
# Clone the repository
git clone https://github.com/HamzaHamani/LECHHEB-PROF-WEBSITE.git
cd LECHHEB-PROF-WEBSITE

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your actual values

# Run development server
pnpm dev
```

### **Development Commands**

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Type checking
pnpm type-check
```

**🌐 Open [http://localhost:3000](http://localhost:3000) to view the website**

---

## 📁 **Project Structure**

```
professor-website/
├── 📁 app/                      # Next.js App Router
│   ├── 📄 layout.tsx           # Root layout with SEO
│   ├── 📄 page.tsx             # Homepage
│   ├── 📄 globals.css          # Global styles
│   ├── 📄 robots.ts            # Robots.txt generation
│   ├── 📄 sitemap.ts           # XML sitemap
│   ├── 📁 api/                 # API routes
│   │   └── 📁 contact/         # Contact form endpoint
│   └── 📁 publications/        # Publications section
│
├── 📁 components/               # React components
│   ├── 📄 HomePage.tsx         # Main homepage component
│   ├── 📄 PublicationsPage.tsx # Publications display
│   ├── 📄 ContactPage.tsx      # Contact form
│   ├── 📄 courses-page.tsx     # Academic courses
│   └── 📁 ui/                  # Shadcn/ui components
│
├── 📁 lib/                     # Utility libraries
│   ├── 📄 seo.ts              # SEO configuration
│   ├── 📄 analytics.ts        # Google Analytics
│   ├── 📄 social-meta.ts      # Social media meta tags
│   └── 📄 utils.ts            # General utilities
│
├── 📁 data/                    # Static data
│   ├── 📄 publicationsData.ts  # Research publications
│   ├── 📄 eventsData.ts       # Academic events
│   └── 📄 responsibilitiesData.ts # Professional roles
│
├── 📁 public/                  # Static assets
│   ├── 📄 professor-photo.jpg  # Professional photo
│   ├── 📄 manifest.json       # PWA manifest
│   └── 📄 robots.txt          # Search engine rules
│
└── 📁 styles/                  # Styling files
    └── 📄 globals.css         # Additional global styles
```

---

## 🔧 **Configuration**

### **Environment Variables**

Create a `.env` file based on `.env.example`:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://houdalechheb.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Search Console Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code
NEXT_PUBLIC_BING_VERIFICATION=your_bing_code
NEXT_PUBLIC_YANDEX_VERIFICATION=your_yandex_code

# Academic Profiles
NEXT_PUBLIC_ORCID_ID=0000-0000-0000-0000
NEXT_PUBLIC_GOOGLE_SCHOLAR_ID=your_scholar_id
NEXT_PUBLIC_RESEARCHGATE_ID=your_profile_name

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=houda.lechheb@uit.ac.ma
```

**📚 See [ANALYTICS-SETUP-GUIDE.md](./ANALYTICS-SETUP-GUIDE.md) for detailed setup instructions**

---

## 📊 **SEO & Analytics**

### **SEO Features**

- ✅ **98/100 Lighthouse SEO Score**
- ✅ **Structured Data** - JSON-LD for rich snippets
- ✅ **Meta Tags** - Complete OpenGraph and Twitter Cards
- ✅ **Academic Schema** - Specialized markup for research content
- ✅ **Multi-language** - Proper hreflang implementation
- ✅ **Core Web Vitals** - Optimized performance metrics

### **Analytics Integration**

- **Google Analytics 4** - Visitor tracking and behavior analysis
- **Search Console** - Search performance monitoring
- **Academic Metrics** - Citation tracking through ORCID and Scholar

### **Search Engine Optimization**

- **Google Search** - Verified and optimized
- **Bing** - Webmaster tools integration
- **Yandex** - International search visibility
- **Academic Search** - Google Scholar optimization

**📈 View detailed SEO implementation in [SEO-IMPLEMENTATION-GUIDE.md](./SEO-IMPLEMENTATION-GUIDE.md)**

---

## 🎨 **Design System**

### **Color Palette**

```css
/* Light Mode */
--background: 0 0% 100%
--foreground: 222.2 84% 4.9%
--primary: 221.2 83.2% 53.3%
--secondary: 210 40% 98%

/* Dark Mode */
--background: 222.2 84% 4.9%
--foreground: 210 40% 98%
--primary: 217.2 91.2% 59.8%
--secondary: 217.2 32.6% 17.5%
```

### **Typography**

- **Font Family**: `Inter` - Modern, readable typeface
- **Headings**: Responsive scale from text-lg to text-4xl
- **Body Text**: text-base with proper line heights
- **Academic Content**: Optimized for reading research papers

### **Components**

- **shadcn/ui** - 40+ pre-built components
- **Custom Components** - Academic-specific UI elements
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 compliant

---

## 📱 **Social Media Integration**

### **Supported Platforms**

- ✅ **Facebook** - Rich link previews with professor's photo
- ✅ **LinkedIn** - Professional sharing optimization
- ✅ **Twitter/X** - Large image cards
- ✅ **WhatsApp** - Mobile-optimized previews
- ✅ **Discord** - Rich embeds for academic communities
- ✅ **Telegram** - Link sharing with images
- ✅ **Pinterest** - Research and academic content pinning

### **Academic Platforms**

- ✅ **ResearchGate** - Research collaboration
- ✅ **Google Scholar** - Citation tracking
- ✅ **Academia.edu** - Academic networking
- ✅ **ORCID** - Professional identification

**🔗 Complete social media setup guide: [SOCIAL-MEDIA-OG-GUIDE.md](./SOCIAL-MEDIA-OG-GUIDE.md)**

---

## 🎓 **Academic Features**

### **Research Publications**

- **Categorized Display** - Organized by research areas
- **Citation Information** - Proper academic formatting
- **DOI Links** - Direct links to published papers
- **Search Functionality** - Easy publication discovery

### **Academic Profiles**

- **ORCID Integration** - Professional researcher ID
- **Scholar Metrics** - Citation counts and h-index
- **Research Interests** - Tagged and searchable
- **Collaboration History** - Co-author networks

### **Teaching Portfolio**

- **Course Listings** - Current and past courses
- **Academic Calendar** - Important dates and deadlines
- **Student Resources** - Educational materials and links

---

## 🌐 **Deployment**

### **Netlify Deployment** (Recommended)

```bash
# Build the project
pnpm build

# Deploy to Netlify (automatic from GitHub)
# Or manually drag dist folder to netlify.com/drop
```

**🚀 Live at: [houdalechheb.com](https://houdalechheb.com)**

### **Manual Deployment Options**

```bash
# Vercel
npm i -g vercel
vercel --prod

# Custom Server
pnpm build
pnpm start

# Static Export
pnpm build && pnpm export
```

### **Environment Setup**

1. Set up all environment variables
2. Configure analytics and search console
3. Verify social media integration
4. Test contact form functionality

---

## 📚 **Documentation**

### **Complete Guides**

- 📊 **[ANALYTICS-SETUP-GUIDE.md](./ANALYTICS-SETUP-GUIDE.md)** - Analytics and verification setup
- 🔍 **[SEO-IMPLEMENTATION-GUIDE.md](./SEO-IMPLEMENTATION-GUIDE.md)** - Complete SEO optimization
- 📱 **[SOCIAL-MEDIA-OG-GUIDE.md](./SOCIAL-MEDIA-OG-GUIDE.md)** - Social media integration
- 📈 **[SEO-COMPLETE.md](./SEO-COMPLETE.md)** - Final SEO checklist

### **Technical Documentation**

- **Component Library** - All UI components documented
- **API Reference** - Contact form and data endpoints
- **Configuration Guide** - Environment and build setup
- **Deployment Guide** - Multi-platform deployment options

---

## 🤝 **Contributing**

### **Development Workflow**

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Make changes** with proper TypeScript types
4. **Test thoroughly** on multiple devices
5. **Commit changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open Pull Request** with detailed description

### **Code Standards**

- **TypeScript** - All code must be type-safe
- **ESLint** - Follow configured linting rules
- **Prettier** - Maintain consistent formatting
- **Accessibility** - WCAG 2.1 compliance required
- **Performance** - Maintain 90+ Lighthouse scores

### **Testing**

- **Component Testing** - Test all UI components
- **SEO Testing** - Verify meta tags and structured data
- **Mobile Testing** - Ensure responsive design
- **Analytics Testing** - Verify tracking implementation

---

## 📞 **Support & Contact**

### **Academic Website Owner**

- **Professor**: Dr. Houda LECHHEB
- **Institution**: Université Ibn Tofail
- **Email**: houda.lechheb@uit.ac.ma
- **ORCID**: [0000-0000-0000-0000](https://orcid.org/0000-0000-0000-0000)

### **Technical Support**

- **Repository Issues**: [GitHub Issues](https://github.com/HamzaHamani/LECHHEB-PROF-WEBSITE/issues)
- **Documentation**: See guides in repository
- **Deployment**: Netlify dashboard

---

## 📄 **License**

This project is created for **Dr. Houda LECHHEB** - Academic use and portfolio showcase.

**© 2025 Dr. Houda LECHHEB - All rights reserved**

---

## 🚀 **Quick Links**

- 🌐 **[Live Website](https://houdalechheb.com)**
- 📊 **[Analytics Setup](./ANALYTICS-SETUP-GUIDE.md)**
- 🔍 **[SEO Guide](./SEO-IMPLEMENTATION-GUIDE.md)**
- 📱 **[Social Media Setup](./SOCIAL-MEDIA-OG-GUIDE.md)**
- 🎯 **[GitHub Repository](https://github.com/HamzaHamani/LECHHEB-PROF-WEBSITE)**

---

**⭐ Star this repository if you find it helpful for academic website development!**

_Built with ❤️ for academic excellence and professional visibility_
