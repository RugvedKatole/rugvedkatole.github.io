# Portfolio Website

A modern, project-centric portfolio website built with vanilla JavaScript and CSS.

## Folder Structure

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

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Key Features This Structure Supports

- **Project Showcase**: Dedicated folders for project content and images
- **Blog/Articles**: Content management for blog posts
- **Dynamic Loading**: Modular JS structure for loading content
- **Component-Based**: Reusable components for consistency
- **Theme Support**: Easy theme switching with organized CSS
- **Responsive Design**: Layouts and utilities for responsive design
- **SEO-Friendly**: Clean structure for meta tags and optimization
- **Performance**: Separation of source and production files for optimization
- **Scalability**: Organized structure that grows with your portfolio

## Customization

1. **Add Projects**: Create JSON files in `content/projects/`
2. **Write Blog Posts**: Add markdown or JSON in `content/blog/`
3. **Update Styles**: Modify CSS in `src/css/`
4. **Add Features**: Create new components in `src/js/components/`
5. **Configure**: Update settings in `config/` and `data/`

## License

MIT
