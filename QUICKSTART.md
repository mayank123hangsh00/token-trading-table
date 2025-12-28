# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- Git (for deployment)

---

## 1️⃣ Installation

```bash
# Navigate to project
cd token-trading-table

# Install dependencies (already done if you're reading this)
npm install
```

---

## 2️⃣ Development

```bash
# Start development server
npm run dev
```

**Open**: http://localhost:3000

**What to expect**:
- Three token categories displayed
- Real-time price updates
- Interactive tooltips and popovers
- Sortable columns
- Filtering options

---

## 3️⃣ Test Features

### Sorting
1. Click any column header (Price, Market Cap, Volume, Liquidity)
2. Click again to reverse sort
3. Click third time to remove sort

### Filtering
1. Click "Filters" button
2. Select chain (SOL, ETH, BSC)
3. Toggle "Verified Only" or "Trending Only"
4. See results update instantly

### Interactive Elements
1. **Tooltips**: Hover over chain badges, verified icons, trending icons
2. **Popovers**: Click on liquidity amount
3. **Modals**: Click the three-dot menu on any token row

### Real-time Updates
- Watch prices change automatically
- Notice green/red color transitions
- Updates happen every 2-5 seconds

---

## 4️⃣ Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

**Open**: http://localhost:3000

---

## 5️⃣ Deploy to Vercel

### Option A: Vercel Dashboard (Easiest)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! 🎉

### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 📸 Take Screenshots

### Using Browser DevTools
1. Open http://localhost:3000
2. Press F12 to open DevTools
3. Click device toolbar icon (Ctrl+Shift+M)
4. Set viewport sizes:
   - Desktop: 1920x1080
   - Tablet: 768x1024
   - Mobile: 375x667
   - Minimum: 320x568
5. Take screenshots (Print Screen or Snipping Tool)
6. Save to `screenshots/` directory

---

## 🎥 Record Demo Video

### Recommended Tools
- **Windows**: Xbox Game Bar (Win+G)
- **Mac**: QuickTime Player
- **Cross-platform**: OBS Studio, Loom

### What to Show (1-2 minutes)
1. Landing page (5 sec)
2. Scroll through token categories (10 sec)
3. Demonstrate tooltips (10 sec)
4. Open popover (10 sec)
5. Open modal (15 sec)
6. Show sorting (10 sec)
7. Show filtering (15 sec)
8. Show real-time updates (15 sec)
9. Show responsive design (20 sec)

### Upload to YouTube
1. Go to https://youtube.com
2. Click "Create" → "Upload video"
3. Select your video file
4. Title: "Token Trading Table - Demo"
5. Description: Add GitHub and Vercel links
6. Visibility: Public or Unlisted
7. Publish

---

## ✅ Pre-Submission Checklist

Quick checks before submitting:

```bash
# 1. Build succeeds
npm run build

# 2. No TypeScript errors
npx tsc --noEmit

# 3. Linter passes
npm run lint

# 4. Test locally
npm run dev
# Visit http://localhost:3000 and test all features
```

### Manual Checks
- [ ] All three token categories display
- [ ] Sorting works on all columns
- [ ] Filtering works (chain, verified, trending)
- [ ] Tooltips appear on hover
- [ ] Popovers open on click
- [ ] Modal opens and closes
- [ ] Real-time updates working
- [ ] Responsive on mobile (test in DevTools)
- [ ] No console errors

---

## 📦 Submission

### Required Deliverables

1. **GitHub Repository**
   - Create public repository
   - Push all code
   - Ensure README is complete

2. **Vercel Deployment**
   - Deploy to Vercel
   - Get live URL
   - Test production site

3. **YouTube Video**
   - Record 1-2 minute demo
   - Upload to YouTube
   - Get shareable link

4. **Screenshots**
   - Take 4 responsive screenshots
   - Add to repository
   - Reference in README

### Submit These URLs
- GitHub: `https://github.com/YOUR_USERNAME/token-trading-table`
- Vercel: `https://your-project.vercel.app`
- YouTube: `https://youtu.be/YOUR_VIDEO_ID`

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### TypeScript Errors
```bash
# Check for errors
npx tsc --noEmit

# Common fix: restart dev server
# Ctrl+C to stop
npm run dev
```

### Styling Issues
```bash
# Rebuild Tailwind
npm run dev
# Refresh browser (Ctrl+Shift+R)
```

---

## 📚 Documentation

For detailed information, see:
- **README.md** - Full project documentation
- **DEPLOYMENT.md** - Deployment guide
- **TESTING.md** - Testing checklist
- **VIDEO_GUIDE.md** - Video recording guide
- **SUBMISSION_CHECKLIST.md** - Track progress

---

## 💡 Pro Tips

### Development
- Use `npm run dev` for hot reload
- Check browser console for errors
- Use React DevTools for debugging
- Use Redux DevTools for state inspection

### Performance
- Run Lighthouse audit in Chrome DevTools
- Target scores ≥90 for all metrics
- Test on real mobile devices if possible

### Video
- Record in 1080p resolution
- Keep it concise (1-2 minutes)
- Show features clearly
- Add narration if comfortable

### Screenshots
- Use consistent viewport sizes
- Capture clean, professional images
- Show different features in each
- Compress images if needed

---

## 🎯 Success Criteria

Your project is ready when:
- ✅ Build succeeds without errors
- ✅ All features work correctly
- ✅ Responsive design works (320px+)
- ✅ No console errors
- ✅ Lighthouse score ≥90
- ✅ Documentation complete
- ✅ GitHub repository public
- ✅ Vercel deployment live
- ✅ Demo video uploaded
- ✅ Screenshots added

---

## 🎉 You're Ready!

If all checks pass, you're ready to submit. Good luck! 🚀

---

**Need Help?**
- Check documentation files
- Review error messages
- Test in incognito mode
- Clear cache and rebuild

**Questions?**
- Review the comprehensive guides
- Check Next.js documentation
- Verify all dependencies installed

---

*This project is production-ready and fully documented. Follow the steps above to complete your submission!*
