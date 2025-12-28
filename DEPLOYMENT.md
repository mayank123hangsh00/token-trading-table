# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free tier works)

## Step 1: Prepare Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Token Trading Table"

# Create GitHub repository and push
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
5. Click "Deploy"

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Step 3: Environment Configuration

No environment variables are required for this demo as all data is mocked.

## Step 4: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Step 5: Performance Optimization

The build is already optimized with:
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Font optimization
- ✅ Minification
- ✅ Compression

## Lighthouse Score Checklist

Run Lighthouse in Chrome DevTools to verify:

- [ ] Performance: ≥90
- [ ] Accessibility: ≥90
- [ ] Best Practices: ≥90
- [ ] SEO: ≥90

### Tips for 90+ Score:

1. **Performance**:
   - Images are optimized with Next.js Image
   - Components are memoized
   - Code is split automatically

2. **Accessibility**:
   - Radix UI components are WCAG compliant
   - Proper ARIA labels
   - Keyboard navigation support

3. **Best Practices**:
   - HTTPS enabled by default on Vercel
   - No console errors
   - Proper meta tags

4. **SEO**:
   - Meta descriptions in layout.tsx
   - Semantic HTML
   - Proper heading hierarchy

## Monitoring

After deployment, monitor:
- Build times
- Bundle size
- Core Web Vitals
- Error rates

Access analytics in Vercel dashboard.

## Rollback

If needed, rollback to previous deployment:

```bash
vercel rollback
```

Or use Vercel dashboard to select a previous deployment.

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Type Errors

```bash
# Check TypeScript
npx tsc --noEmit
```

### Styling Issues

```bash
# Rebuild Tailwind
npx tailwindcss -i ./app/globals.css -o ./dist/output.css
```

## Production Checklist

- [ ] All features working
- [ ] No console errors
- [ ] Lighthouse score ≥90
- [ ] Responsive on all devices (320px+)
- [ ] GitHub repository is public
- [ ] README is complete
- [ ] Demo video uploaded to YouTube
- [ ] Vercel deployment is live

## Support

For issues, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Issues](your-repo-issues-url)
