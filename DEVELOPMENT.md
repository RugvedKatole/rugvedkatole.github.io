# Development Guide

## How to Preview Your Website

### Prerequisites
- **Node.js** version 18 or higher
- **npm** (comes with Node.js)

### Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

   This will start the Astro development server at `http://localhost:4321`
   - The site will automatically reload when you make changes
   - Open your browser and navigate to the URL shown in the terminal

3. **Access Your Site**
   - Open your browser
   - Go to: `http://localhost:4321` (or the port shown in your terminal)
   - You should see your portfolio homepage!

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run start` | Alias for `npm run dev` |
| `npm run build` | Build production-ready site to `dist/` folder |
| `npm run preview` | Preview production build locally |

### Development Workflow

1. **Making Changes**
   - Edit files in the `src/` directory
   - Changes will automatically reflect in your browser
   - No need to restart the server

2. **Testing on Mobile**
   - Find your local IP address:
     - **Mac/Linux**: Run `ifconfig | grep inet`
     - **Windows**: Run `ipconfig`
   - Access from mobile: `http://YOUR-IP:4321`
   - Example: `http://192.168.1.100:4321`

3. **Building for Production**
   ```bash
   npm run build
   ```
   - Creates optimized build in `dist/` folder
   - Minifies HTML, CSS, and JavaScript
   - Optimizes images
   - Generates static HTML files

4. **Preview Production Build**
   ```bash
   npm run preview
   ```
   - Preview what users will see in production
   - Test performance and load times

## Performance Optimization

### Built-in Optimizations

This site uses Astro which provides:
- ✅ Zero JavaScript by default (only loads what's needed)
- ✅ Automatic CSS optimization and minification
- ✅ Image optimization
- ✅ HTML compression
- ✅ Component-based architecture
- ✅ Fast page loads (<2s target)

### Performance Testing

1. **Lighthouse**
   - Open Chrome DevTools (F12)
   - Go to "Lighthouse" tab
   - Run audit for Performance, Accessibility, SEO
   - Target: 90+ scores

2. **Network Tab**
   - Open Chrome DevTools (F12)
   - Go to "Network" tab
   - Throttle to "Fast 3G" to simulate mobile
   - Reload page and check load time

3. **WebPageTest**
   - Visit: https://www.webpagetest.org/
   - Test your deployed site
   - Analyze load time and optimization opportunities

## Customization Guide

### Updating Content

1. **Personal Information**
   - Edit `src/components/Hero.astro`
   - Update name, title, and description
   - Change button links if needed

2. **Projects**
   - Edit `src/components/Projects.astro`
   - Modify the `projects` array
   - Add your real project data

3. **Contact Information**
   - Edit `src/components/Contact.astro`
   - Update email, LinkedIn, GitHub links
   - Add or remove social links as needed

4. **Colors and Branding**
   - Edit `src/styles/global.css`
   - Modify CSS variables in `:root`
   - Change `--color-primary` and `--color-secondary`

### Adding New Pages

1. Create a new file in `src/pages/`
   - Example: `src/pages/about.astro`
   - File-based routing: automatically creates `/about` route

2. Use the base layout:
   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   ---
   <BaseLayout title="About Me">
     <h1>About Me</h1>
   </BaseLayout>
   ```

### Adding New Components

1. Create a new file in `src/components/`
2. Write your component:
   ```astro
   ---
   // Component logic here
   ---
   <div class="my-component">
     <!-- HTML here -->
   </div>
   <style>
     /* Scoped styles here */
   </style>
   ```

3. Import and use in pages:
   ```astro
   ---
   import MyComponent from '../components/MyComponent.astro';
   ---
   <MyComponent />
   ```

## File Structure Overview

```
src/
├── pages/           # Routes (index.astro = homepage)
├── layouts/         # Page layouts
├── components/      # Reusable components
└── styles/          # Global styles

public/              # Static assets (images, fonts, etc.)
content/             # Content data (projects, blog, etc.)
```

## Troubleshooting

### Port Already in Use
If port 4321 is already in use:
```bash
npm run dev -- --port 3000
```

### Changes Not Reflecting
1. Stop the dev server (Ctrl+C)
2. Delete `.astro` folder
3. Run `npm run dev` again

### Build Errors
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try building again

## Deployment

### GitHub Pages
Your site is ready for GitHub Pages deployment:
1. Build: `npm run build`
2. The `dist/` folder contains your static site
3. Push to your repository
4. Enable GitHub Pages in repository settings

### Other Platforms
- **Netlify**: Connect your repo, build command: `npm run build`, publish directory: `dist`
- **Vercel**: Connect your repo, framework: Astro (auto-detected)
- **Cloudflare Pages**: Connect your repo, build command: `npm run build`, output: `dist`

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Performance Best Practices](https://web.dev/fast/)
