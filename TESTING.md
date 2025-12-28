# Testing Guide

## Manual Testing Checklist

### 1. Functionality Testing

#### Token Display
- [ ] All three categories display correctly (New Pairs, Final Stretch, Migrated)
- [ ] Token information is accurate (name, symbol, price, etc.)
- [ ] Token logos load properly
- [ ] Chain badges display correctly (SOL, ETH, BSC)

#### Sorting
- [ ] Click on "Token" header to sort by name
- [ ] Click on "Price" header to sort by price
- [ ] Click on "Market Cap" header to sort by market cap
- [ ] Click on "Volume" header to sort by volume
- [ ] Click on "Liquidity" header to sort by liquidity
- [ ] Sort direction toggles correctly (asc → desc → none)
- [ ] Visual indicators show current sort state

#### Filtering
- [ ] Filter by chain (SOL, ETH, BSC)
- [ ] Filter by verified status
- [ ] Filter by trending status
- [ ] Multiple filters work together
- [ ] Clear individual filters
- [ ] Clear all filters at once
- [ ] Active filter pills display correctly

#### Interactive Components
- [ ] Tooltips appear on hover (chain, verified, trending)
- [ ] Popovers open on click (liquidity details)
- [ ] Modal opens when clicking token actions
- [ ] Modal displays all token information
- [ ] Copy contract address works
- [ ] Modal closes properly

#### Real-time Updates
- [ ] Prices update automatically
- [ ] Price changes show color transitions (green/red)
- [ ] Updates don't cause layout shifts
- [ ] Multiple tokens update simultaneously

### 2. Responsive Testing

Test on the following viewport sizes:

#### Mobile (320px - 640px)
- [ ] 320px width (minimum)
- [ ] 375px width (iPhone SE)
- [ ] 414px width (iPhone Pro Max)
- [ ] Layout adapts to mobile view
- [ ] All content is readable
- [ ] No horizontal scroll
- [ ] Touch targets are adequate (44px minimum)

#### Tablet (641px - 1024px)
- [ ] 768px width (iPad)
- [ ] 1024px width (iPad Pro)
- [ ] Layout transitions smoothly
- [ ] Content is well-spaced

#### Desktop (1025px+)
- [ ] 1280px width (laptop)
- [ ] 1920px width (desktop)
- [ ] 2560px width (large display)
- [ ] Content doesn't stretch too wide
- [ ] Proper use of container max-width

### 3. Performance Testing

#### Lighthouse Audit
Run Lighthouse in Chrome DevTools (Incognito mode):

```bash
# Open DevTools → Lighthouse → Run audit
```

Target scores:
- [ ] Performance: ≥90
- [ ] Accessibility: ≥90
- [ ] Best Practices: ≥90
- [ ] SEO: ≥90

#### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): <2.5s
- [ ] FID (First Input Delay): <100ms
- [ ] CLS (Cumulative Layout Shift): <0.1

#### Interaction Performance
- [ ] Sorting responds in <100ms
- [ ] Filtering responds in <100ms
- [ ] Modal opens in <100ms
- [ ] Tooltips appear instantly
- [ ] No janky animations

### 4. Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter/Space activates buttons
- [ ] Escape closes modals/popovers
- [ ] Focus indicators are visible
- [ ] Tab order is logical

#### Screen Reader
Test with NVDA (Windows) or VoiceOver (Mac):
- [ ] All images have alt text
- [ ] Buttons have descriptive labels
- [ ] Form inputs have labels
- [ ] Headings are properly structured
- [ ] ARIA labels are present where needed

#### Color Contrast
- [ ] Text meets WCAG AA standards (4.5:1)
- [ ] Interactive elements are distinguishable
- [ ] Error states are clear without color alone

### 5. Browser Compatibility

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 6. Error Handling

#### Network Errors
- [ ] Loading states display correctly
- [ ] Error boundaries catch errors
- [ ] Graceful degradation when data fails

#### Edge Cases
- [ ] Empty state when no tokens match filters
- [ ] Very long token names truncate properly
- [ ] Very large/small numbers format correctly
- [ ] Rapid clicking doesn't break UI

### 7. Visual Regression

#### Pixel-Perfect Comparison
Compare with Axiom Trade reference:
- [ ] Color scheme matches
- [ ] Typography is similar
- [ ] Spacing is consistent
- [ ] Border radius matches
- [ ] Shadows are similar
- [ ] Animations are smooth

#### Screenshots
Take screenshots for documentation:
```bash
# Desktop view
# Tablet view
# Mobile view (375px)
# Mobile view (320px)
```

### 8. Code Quality

#### TypeScript
```bash
npx tsc --noEmit
```
- [ ] No TypeScript errors
- [ ] Strict mode enabled
- [ ] All types are properly defined

#### Linting
```bash
npm run lint
```
- [ ] No ESLint errors
- [ ] No ESLint warnings

#### Build
```bash
npm run build
```
- [ ] Build completes successfully
- [ ] No build warnings
- [ ] Bundle size is reasonable

## Automated Testing (Future Enhancement)

### Unit Tests (Jest + React Testing Library)
```typescript
// Example test structure
describe('TokenRow', () => {
  it('renders token information correctly', () => {})
  it('shows price change color correctly', () => {})
  it('opens modal on action click', () => {})
})
```

### E2E Tests (Playwright/Cypress)
```typescript
// Example E2E test
test('user can filter and sort tokens', async () => {
  // Navigate to page
  // Apply filters
  // Sort by price
  // Verify results
})
```

## Performance Benchmarks

### Bundle Size Targets
- First Load JS: <200KB
- Total Size: <500KB

### Metrics to Monitor
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- Speed Index

## Bug Reporting Template

When reporting bugs, include:
1. **Description**: What happened?
2. **Expected**: What should happen?
3. **Steps to Reproduce**: How to recreate?
4. **Environment**: Browser, OS, viewport size
5. **Screenshots**: Visual evidence
6. **Console Logs**: Any errors?

## Testing Tools

- **Chrome DevTools**: Performance, Lighthouse, Network
- **React DevTools**: Component inspection
- **Redux DevTools**: State inspection
- **Responsive Design Mode**: Viewport testing
- **axe DevTools**: Accessibility testing

## Continuous Testing

Before each commit:
1. Run linter
2. Check TypeScript
3. Test locally
4. Verify responsive design
5. Check console for errors

Before deployment:
1. Run full Lighthouse audit
2. Test on multiple browsers
3. Verify all features work
4. Check responsive layouts
5. Review bundle size
