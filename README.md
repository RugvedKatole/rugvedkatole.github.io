# Portfolio Website - Rugved Katole

A blazing-fast, modern portfolio website built with Astro. Optimized for performance with sub-2 second load times, mobile-first responsive design, and automatic deployment to GitHub Pages.

**Live Site**: [https://rugvedkatole.github.io](https://rugvedkatole.github.io)

## 🚀 Quick Start

```
.
├── src/                          # Source files
│   ├── js/                       # JavaScript files
│   │   ├── components/           # Reusable JS components (sliders, animations, etc.)
│   │   ├── utils/                # Utility functions (helpers, validators, etc.)
│   │   ├── services/             # API services and data fetching
│   │   └── pages/                # Page-specific JavaScript
│   ├── css/                      # Stylesheets
│   │   ├── components/           # Component-specific styles
│   │   ├── layouts/              # Layout styles (grid, flexbox layouts)
│   │   ├── themes/               # Color themes and design tokens
│   │   └── utilities/            # Utility classes and helpers
│   └── assets/                   # Static assets
│       ├── images/               # Image files
│       │   ├── projects/         # Project screenshots/images
│       │   ├── icons/            # Icons and SVGs
│       │   └── backgrounds/      # Background images
│       ├── fonts/                # Custom fonts
│       ├── videos/               # Video files
│       └── downloads/            # Downloadable files (resume, etc.)
│
├── public/                       # Public/production files (served)
│   ├── css/                      # Compiled CSS
│   ├── js/                       # Compiled/bundled JavaScript
│   └── assets/                   # Optimized assets
│
├── content/                      # Content data
│   ├── projects/                 # Project descriptions (JSON/MD)
│   ├── blog/                     # Blog posts (JSON/MD)
│   ├── experience/               # Work experience data
│   └── education/                # Education data
│
├── components/                   # HTML component templates
│   ├── header/                   # Header component
│   ├── footer/                   # Footer component
│   ├── navigation/               # Navigation menus
│   ├── cards/                    # Card components
│   ├── modals/                   # Modal dialogs
│   └── forms/                    # Form components
│
├── config/                       # Configuration files
│   └── (webpack, babel, etc.)
│
├── data/                         # Static data files (JSON)
│   └── (site config, metadata, etc.)
│
├── tests/                        # Test files
│
├── docs/                         # Documentation
│
├── scripts/                      # Build and utility scripts
│
├── package.json                  # Node.js dependencies and scripts
└── .gitignore                    # Git ignore rules
```

## Purpose of Each Directory

### `src/` - Source Code
Contains all source code that will be processed/compiled for production.

- **js/**: All JavaScript modules
  - `components/`: Reusable UI components (carousel, tooltip, modal handlers, etc.)
  - `utils/`: Helper functions (date formatting, string manipulation, etc.)
  - `services/`: API calls, data fetching, external integrations
  - `pages/`: Page-specific logic (home, projects, blog, contact)

- **css/**: Stylesheets organized by purpose
  - `components/`: Styles for specific components
  - `layouts/`: Page layouts and structural styles
  - `themes/`: Color schemes, variables, design tokens
  - `utilities/`: Utility classes for margins, padding, colors, etc.

- **assets/**: Static files used in development
  - Images, fonts, videos, and downloadable files

### `public/` - Production Files
Files that are served to users. This directory contains compiled/optimized versions of your source code.

### `content/` - Portfolio Content
Structured data about your work, separated from code:
- Projects with descriptions, technologies, links, images
- Blog posts or articles
- Work experience timeline
- Education history

### `components/` - HTML Templates
Reusable HTML component templates that can be loaded dynamically or used as references.

### `config/` - Build Configuration
Configuration files for build tools (webpack, babel, postcss, etc.)

### `data/` - Static Data
JSON files for site configuration, metadata, navigation structure, etc.

### `tests/` - Testing
Unit tests, integration tests, and test utilities.

### `docs/` - Documentation
Additional documentation for the project.

### `scripts/` - Utility Scripts
Build scripts, deployment scripts, data processing, etc.

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher
- **npm** (comes with Node.js)

### Installation & Preview

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Navigate to `http://localhost:4321`
   - Your portfolio will automatically reload when you make changes!

4. **Build for production:**
   ```bash
   npm run build
   ```

For detailed development instructions, see [DEVELOPMENT.md](./DEVELOPMENT.md)

## 🌐 Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions.

- **Automatic Deployment**: Every push to `master` branch triggers deployment
- **Live URL**: [https://rugvedkatole.github.io](https://rugvedkatole.github.io)
- **Status**: Check the Actions tab for deployment status

For detailed deployment setup and troubleshooting, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Quick Deployment Setup

1. Go to **Settings** → **Pages** in your GitHub repository
2. Under **Source**, select **GitHub Actions**
3. Push to `master` branch - deployment happens automatically!

## ✨ Features

- ⚡ **Lightning Fast**: Built with Astro for <2s load times
- 📱 **Mobile-First**: Fully responsive design optimized for all devices
- 🎨 **Modern Design**: Clean, professional aesthetic with smooth animations
- 🔍 **SEO Optimized**: Meta tags and semantic HTML for better discoverability
- ♿ **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- 🚀 **Zero JavaScript by Default**: Only loads JS when needed for optimal performance
- 📊 **Project Showcase**: Dedicated section for your best work
- 💬 **Contact CTA**: Clear call-to-action for potential clients/employers
- 🔄 **Auto Deploy**: GitHub Actions deployment on every push to master
- 📊 **Analytics**: Google Analytics and Cronitor RUM integration

## 📖 Homepage Narrative Flow

1. **"Who am I?"** - Hero section introducing yourself
2. **"What I've built"** - Projects showcase teasing your best work
3. **"Let's talk"** - Contact section with clear call-to-action

## 🎨 Customization

### Update Your Information
1. **Hero Section**: Edit `src/components/Hero.astro` - Update name, title, description
2. **Projects**: Edit `src/components/Projects.astro` - Add your real projects
3. **Contact**: Edit `src/components/Contact.astro` - Update email and social links
4. **Colors**: Edit `src/styles/global.css` - Customize brand colors

### Add New Pages
- Create `.astro` files in `src/pages/`
- Example: `src/pages/about.astro` creates `/about` route
- File-based routing - it's that simple!

### Performance Tips
- Images go in `public/` folder
- Use WebP format for better compression
- Test with Lighthouse (target 90+ scores)
- Check load time with "Fast 3G" throttling

## 📁 Project Structure

```
src/
├── pages/          # Routes (index.astro = homepage)
├── components/     # Reusable Astro components
├── layouts/        # Page layouts
└── styles/         # Global styles

public/             # Static assets
content/            # Content data (projects, blog, etc.)
.github/workflows/  # GitHub Actions deployment
```

For complete folder structure documentation, see [Folder Structure](#folder-structure) section below.

## Folder Structure

MIT
