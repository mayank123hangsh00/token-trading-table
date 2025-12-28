# Git Workflow Guide

## Initial Setup

### 1. Initialize Repository

```bash
# Navigate to project directory
cd token-trading-table

# Initialize git (if not already done)
git init

# Check status
git status
```

### 2. Create .gitignore

Already created with Next.js defaults. Verify it includes:
- node_modules/
- .next/
- .env*
- *.log

### 3. Stage All Files

```bash
# Add all files
git add .

# Verify staged files
git status
```

### 4. Initial Commit

```bash
# Create initial commit
git commit -m "Initial commit: Token Trading Table

- Next.js 14 setup with TypeScript
- Redux Toolkit for state management
- React Query for data fetching
- Radix UI components
- Tailwind CSS styling
- Mock data generation
- WebSocket simulation
- Responsive design
- Comprehensive documentation"
```

## Commit Message Convention

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Build process or auxiliary tool changes

### Examples

```bash
# Feature
git commit -m "feat(tokens): add real-time price updates

Implemented WebSocket simulation for live price updates with smooth color transitions"

# Fix
git commit -m "fix(filters): resolve chain filter state issue

Fixed bug where chain filters weren't clearing properly"

# Documentation
git commit -m "docs(readme): add deployment instructions

Added comprehensive Vercel deployment guide"

# Performance
git commit -m "perf(table): memoize TokenRow component

Reduced unnecessary re-renders by 60%"
```

## Recommended Commit History

### Clean Commits Structure

```bash
# 1. Initial setup
git commit -m "chore: initialize Next.js 14 project with TypeScript"

# 2. Core setup
git commit -m "chore: install dependencies (Redux, React Query, Radix UI)"

# 3. Configuration
git commit -m "chore: configure Tailwind CSS and global styles"

# 4. Types and utilities
git commit -m "feat: add TypeScript interfaces and utility functions"

# 5. State management
git commit -m "feat(store): implement Redux store with token slice"

# 6. Mock data
git commit -m "feat(lib): add mock data generator for tokens"

# 7. UI components
git commit -m "feat(ui): create base UI components (Skeleton, Tooltip, Popover, Dialog)"

# 8. Token components
git commit -m "feat(tokens): implement TokenRow with interactive elements"

# 9. Table component
git commit -m "feat(tokens): create TokenTable with sorting functionality"

# 10. Filters
git commit -m "feat(tokens): add filtering system with popover UI"

# 11. Modal
git commit -m "feat(tokens): implement TokenDetailsModal"

# 12. WebSocket
git commit -m "feat(hooks): add WebSocket simulation for real-time updates"

# 13. Main page
git commit -m "feat(app): create main page with all token categories"

# 14. Responsive design
git commit -m "style: add responsive layouts for mobile and tablet"

# 15. Performance
git commit -m "perf: optimize components with React.memo"

# 16. Documentation
git commit -m "docs: add comprehensive README and guides"

# 17. Final polish
git commit -m "style: refine animations and transitions"
```

## GitHub Setup

### 1. Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `token-trading-table`
4. Description: "Pixel-perfect replica of Axiom Trade's token discovery table"
5. Public repository
6. Don't initialize with README (we have one)
7. Create repository

### 2. Connect Local to GitHub

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/token-trading-table.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Verify Push

Check GitHub repository to ensure all files are uploaded.

## Branch Strategy

### Main Branch
- Production-ready code only
- Protected branch
- All features merged via PR (optional)

### Development Workflow

```bash
# Create feature branch
git checkout -b feature/add-search

# Make changes
# ... code ...

# Commit changes
git add .
git commit -m "feat: add token search functionality"

# Push to GitHub
git push origin feature/add-search

# Create Pull Request on GitHub
# Merge after review
# Delete branch after merge
```

## Best Practices

### Before Committing

1. **Test**: Ensure code works
2. **Lint**: Run `npm run lint`
3. **Type Check**: Run `npx tsc --noEmit`
4. **Review**: Check `git diff`

### Commit Guidelines

- ✅ Small, focused commits
- ✅ Clear, descriptive messages
- ✅ Present tense ("add" not "added")
- ✅ Imperative mood ("fix" not "fixes")
- ✅ Reference issues if applicable

### What NOT to Commit

- ❌ node_modules/
- ❌ .next/
- ❌ .env files
- ❌ IDE-specific files
- ❌ OS-specific files (.DS_Store)
- ❌ Log files
- ❌ Build artifacts

## Useful Git Commands

### Status and Diff

```bash
# Check status
git status

# View changes
git diff

# View staged changes
git diff --staged

# View commit history
git log --oneline
```

### Staging

```bash
# Stage specific file
git add path/to/file

# Stage all changes
git add .

# Unstage file
git reset path/to/file
```

### Committing

```bash
# Commit with message
git commit -m "message"

# Amend last commit
git commit --amend

# Commit with detailed message
git commit
# Opens editor for multi-line message
```

### Pushing

```bash
# Push to remote
git push origin main

# Force push (use carefully)
git push -f origin main
```

### Pulling

```bash
# Pull latest changes
git pull origin main

# Pull with rebase
git pull --rebase origin main
```

### Branching

```bash
# List branches
git branch

# Create branch
git branch feature-name

# Switch branch
git checkout feature-name

# Create and switch
git checkout -b feature-name

# Delete branch
git branch -d feature-name
```

### Undoing Changes

```bash
# Discard changes in file
git checkout -- path/to/file

# Discard all changes
git reset --hard

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

## GitHub Repository Setup

### README Badges (Optional)

Add to top of README.md:

```markdown
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/license-MIT-green)
```

### Topics

Add topics to repository:
- nextjs
- typescript
- react
- tailwindcss
- redux
- token-trading
- defi

### Description

"Pixel-perfect replica of Axiom Trade's token discovery table with real-time updates, built with Next.js 14, TypeScript, and Tailwind CSS"

### Website

Add Vercel deployment URL

## Pre-Deployment Checklist

Before final push:

- [ ] All features working
- [ ] No console errors
- [ ] TypeScript compiles without errors
- [ ] ESLint passes
- [ ] Build succeeds
- [ ] Documentation complete
- [ ] README updated
- [ ] .gitignore configured
- [ ] Sensitive data removed

## Deployment Commits

```bash
# Before deployment
git add .
git commit -m "chore: prepare for deployment

- Update README with deployment URLs
- Add screenshots
- Finalize documentation"

git push origin main

# After deployment
git commit -m "docs: add Vercel deployment URL to README"
git push origin main
```

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Commit updates
git add package.json package-lock.json
git commit -m "chore: update dependencies"
git push origin main
```

### Hotfixes

```bash
# Create hotfix branch
git checkout -b hotfix/critical-bug

# Fix bug
# ... code ...

# Commit and push
git add .
git commit -m "fix: resolve critical bug in price updates"
git push origin hotfix/critical-bug

# Merge to main
git checkout main
git merge hotfix/critical-bug
git push origin main

# Delete hotfix branch
git branch -d hotfix/critical-bug
```

## Collaboration

### Pull Requests

1. Create feature branch
2. Make changes
3. Push to GitHub
4. Create Pull Request
5. Request review
6. Address feedback
7. Merge when approved

### Code Review

When reviewing:
- Check functionality
- Verify tests pass
- Review code quality
- Ensure documentation updated
- Test locally if needed

## Troubleshooting

### Merge Conflicts

```bash
# Pull latest changes
git pull origin main

# Resolve conflicts in files
# Edit files to resolve conflicts

# Stage resolved files
git add .

# Complete merge
git commit -m "merge: resolve conflicts with main"
```

### Accidental Commits

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Make corrections
# Commit again
```

### Wrong Branch

```bash
# Stash changes
git stash

# Switch to correct branch
git checkout correct-branch

# Apply stashed changes
git stash pop
```

---

**Remember**: Commit early, commit often, write clear messages!
