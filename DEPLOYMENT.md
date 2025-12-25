# Deployment Guide

This portfolio website is automatically deployed to GitHub Pages using GitHub Actions.

## Automatic Deployment

The website is configured to automatically deploy whenever changes are pushed to the `master` branch.

### How It Works

1. **GitHub Actions Workflow**: Located in `.github/workflows/deploy.yml`
2. **Trigger**: Automatically runs on every push to the `master` branch
3. **Build Process**:
   - Installs dependencies
   - Builds the Astro site with optimizations
   - Uploads build artifacts
4. **Deployment**: Deploys to GitHub Pages at `https://rugvedkatole.github.io`

### Initial Setup (One-Time)

To enable GitHub Pages deployment, you need to configure your repository settings:

1. Go to your repository on GitHub: `https://github.com/RugvedKatole/rugvedkatole.github.io`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save the changes

That's it! The workflow will automatically deploy your site on the next push to `master`.

### Manual Deployment

You can also trigger a deployment manually:

1. Go to **Actions** tab in your GitHub repository
2. Select the "Deploy Astro site to GitHub Pages" workflow
3. Click **Run workflow**
4. Select the `master` branch and click **Run workflow**

## Site Configuration

The site URL is configured in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://rugvedkatole.github.io',
  // ... other config
});
```

## Build Commands

- **Development**: `npm run dev` - Starts local dev server at `http://localhost:4321`
- **Build**: `npm run build` - Creates production build in `dist/` folder
- **Preview**: `npm run preview` - Preview production build locally

## Analytics

The site includes:
- **Google Analytics**: Tracking ID `G-GKS8H37TLM`
- **Cronitor RUM**: Client ID `ed236345ca252157fb6c152074095b8b`

Both are configured in `src/layouts/BaseLayout.astro`.

## Deployment Status

Check deployment status:
1. Go to **Actions** tab in your repository
2. View the latest workflow run
3. Green checkmark = successful deployment
4. Red X = deployment failed (click to see error details)

## Troubleshooting

### Deployment Failed

1. Check the **Actions** tab for error details
2. Common issues:
   - Node version mismatch (workflow uses Node 20)
   - Missing dependencies (check `package.json`)
   - Build errors (run `npm run build` locally to test)

### Site Not Updating

1. Verify the workflow completed successfully in **Actions** tab
2. Check that you pushed to the `master` branch
3. Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. GitHub Pages can take a few minutes to update

### Custom Domain (Optional)

To use a custom domain:

1. Add `CNAME` file to `public/` folder with your domain
2. Update `astro.config.mjs` site URL to your custom domain
3. Configure DNS settings with your domain provider
4. Update GitHub Pages settings to use the custom domain

## Performance

The site is optimized for performance:
- Minified CSS and JavaScript
- Compressed HTML
- Inline critical CSS
- Fast page loads (<2s target)
- Mobile-first responsive design

## Security

- All external links use `rel="noopener noreferrer"`
- HTTPS enforced via GitHub Pages
- No sensitive data in client-side code
- Analytics configured with privacy in mind
