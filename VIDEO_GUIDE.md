# Video Demo Guide

## Overview
Create a 1-2 minute demonstration video showcasing the Token Trading Table functionality.

## Recording Setup

### Tools
- **Screen Recording**: OBS Studio, Loom, or built-in screen recorder
- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30 or 60 fps
- **Audio**: Optional narration (recommended)

### Before Recording
1. Clear browser cache
2. Close unnecessary tabs
3. Disable browser extensions
4. Set browser zoom to 100%
5. Hide bookmarks bar
6. Use incognito/private mode (clean state)

## Video Structure (90-120 seconds)

### Introduction (10 seconds)
- Show landing page
- Highlight the header with "Token Discovery" title
- Show "Live" indicator

### Core Features (60 seconds)

#### 1. Token Categories (15 seconds)
- Scroll through "New Pairs" section
- Show "Final Stretch" section
- Show "Migrated" section
- Highlight token count for each category

#### 2. Interactive Elements (20 seconds)
- **Tooltips**: Hover over chain badges, verified icons, trending icons
- **Popovers**: Click on liquidity to show details
- **Modal**: Click on token action button to open details modal
  - Show full token information
  - Demonstrate copy contract address
  - Close modal

#### 3. Sorting (10 seconds)
- Click "Price" header to sort ascending
- Click again to sort descending
- Click once more to remove sort
- Show visual indicators

#### 4. Filtering (15 seconds)
- Open filter popover
- Select "SOL" chain filter
- Add "Verified" filter
- Show filtered results
- Clear filters

### Real-time Updates (15 seconds)
- Wait for price updates to occur
- Highlight color transitions (green/red)
- Show multiple tokens updating
- Emphasize smooth animations

### Responsive Design (15 seconds)
- Open DevTools responsive mode
- Show desktop view (1920px)
- Resize to tablet (768px)
- Resize to mobile (375px)
- Resize to minimum (320px)
- Show layout adapts smoothly

## Recording Script

### With Narration
```
[0:00-0:10] Introduction
"Welcome to the Token Trading Table - a pixel-perfect replica of Axiom Trade's token discovery interface."

[0:10-0:25] Token Categories
"The application displays three categories of tokens: New Pairs for recently launched tokens, Final Stretch for tokens nearing migration, and Migrated for successfully migrated tokens."

[0:25-0:45] Interactive Elements
"Each token row includes interactive tooltips showing chain information, verified status, and trending indicators. Clicking on liquidity reveals detailed information in a popover. The action button opens a comprehensive modal with full token details."

[0:45-0:55] Sorting
"Users can sort tokens by any column - simply click the header to toggle between ascending, descending, and default order."

[0:55-1:10] Filtering
"Advanced filtering allows users to filter by blockchain, verified status, and trending tokens. Multiple filters can be combined for precise results."

[1:10-1:25] Real-time Updates
"The application simulates real-time WebSocket updates, with prices updating automatically and smooth color transitions indicating price movements."

[1:25-1:40] Responsive Design
"The interface is fully responsive, adapting seamlessly from large desktop displays down to mobile devices as small as 320 pixels wide."

[1:40-1:50] Conclusion
"Built with Next.js 14, TypeScript, and Tailwind CSS, this application demonstrates modern web development best practices with a focus on performance, accessibility, and user experience."
```

### Without Narration
Use on-screen text overlays:
- "Token Trading Table"
- "Three Token Categories"
- "Interactive Tooltips & Popovers"
- "Sortable Columns"
- "Advanced Filtering"
- "Real-time Price Updates"
- "Fully Responsive Design"

## Key Features to Highlight

### Must Show
✅ All three token categories
✅ Tooltip interaction
✅ Popover interaction
✅ Modal interaction
✅ Sorting functionality
✅ Filtering functionality
✅ Real-time price updates
✅ Responsive layout (at least 3 breakpoints)

### Nice to Have
- Smooth animations
- Color transitions
- Loading states
- Empty states
- Error handling

## Post-Recording

### Editing
1. Trim any dead time
2. Add intro/outro (optional)
3. Add background music (optional, low volume)
4. Add text overlays for clarity
5. Ensure video is 1-2 minutes

### Export Settings
- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080
- **Bitrate**: 5-10 Mbps
- **Audio**: AAC, 128-192 kbps

### Upload to YouTube

1. **Title**: "Token Trading Table - Axiom Trade Replica Demo"

2. **Description**:
```
A demonstration of the Token Trading Table application - a pixel-perfect replica of Axiom Trade's token discovery interface.

Features:
✅ Real-time price updates with WebSocket simulation
✅ Interactive tooltips, popovers, and modals
✅ Advanced sorting and filtering
✅ Fully responsive design (320px - 2560px+)
✅ Built with Next.js 14, TypeScript, and Tailwind CSS

Tech Stack:
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Redux Toolkit
- React Query
- Radix UI

GitHub: [Your Repository URL]
Live Demo: [Your Vercel URL]

#NextJS #TypeScript #WebDevelopment #React #TailwindCSS
```

3. **Tags**: 
   - Next.js
   - TypeScript
   - React
   - Web Development
   - Tailwind CSS
   - Token Trading
   - Crypto
   - DeFi

4. **Thumbnail**: 
   - Create a custom thumbnail showing the app
   - Include text: "Token Trading Table"
   - Use high contrast colors

5. **Visibility**: Public or Unlisted (as required)

## Quality Checklist

Before uploading:
- [ ] Video is 1-2 minutes long
- [ ] Resolution is 1920x1080
- [ ] All features are demonstrated
- [ ] Audio is clear (if narrated)
- [ ] No personal information visible
- [ ] Smooth playback (no lag)
- [ ] Professional presentation

## Alternative: GIF Demo

For a quick demo, create an animated GIF:

```bash
# Using ffmpeg
ffmpeg -i demo.mp4 -vf "fps=10,scale=1280:-1:flags=lanczos" -c:v gif demo.gif
```

Use GIF for:
- README preview
- Social media sharing
- Quick feature highlights

## Recording Checklist

Setup:
- [ ] Application running on localhost:3000
- [ ] Browser in full screen
- [ ] Recording software ready
- [ ] Script prepared (if narrating)
- [ ] Test recording (5 seconds)

During Recording:
- [ ] Smooth mouse movements
- [ ] Pause between actions
- [ ] Show each feature clearly
- [ ] Maintain steady pace

After Recording:
- [ ] Review full video
- [ ] Check audio sync
- [ ] Verify all features shown
- [ ] Edit if necessary
- [ ] Export with correct settings
- [ ] Upload to YouTube
- [ ] Add to README

## Tips for Great Demo Videos

1. **Pace**: Not too fast, not too slow
2. **Focus**: Show one feature at a time
3. **Clarity**: Use clear, deliberate actions
4. **Quality**: High resolution, smooth playback
5. **Length**: Respect the 1-2 minute limit
6. **Audio**: Clear narration or good music
7. **Editing**: Cut dead time, add transitions
8. **Thumbnail**: Eye-catching and professional

## Example Timeline

```
0:00 - 0:05   Intro (show landing page)
0:05 - 0:15   Token categories
0:15 - 0:30   Interactive elements
0:30 - 0:40   Sorting
0:40 - 0:50   Filtering
0:50 - 1:05   Real-time updates
1:05 - 1:20   Responsive design
1:20 - 1:30   Outro (show GitHub/Vercel links)
```

Total: 90 seconds (1:30)
