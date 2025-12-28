# Token Trading Table

A real-time token discovery interface built with Next.js 14, featuring live price updates, advanced filtering, and responsive design.

## 🌐 Live Demo

**[View Live](https://token-trading-table-snowy.vercel.app/)** | **[Watch Demo](https://youtu.be/xppjf3_Sabg)**

## Features

- Real-time price updates with WebSocket simulation
- Interactive tooltips, popovers, and modals
- Sortable columns and advanced filtering
- Fully responsive (320px - 2560px+)
- Three token categories: New Pairs, Final Stretch, Migrated

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Query
- Radix UI

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
│   ├── tokens/      # Token-specific components
│   ├── ui/          # Reusable UI components
│   └── providers/   # Context providers
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── store/           # Redux store
└── types/           # TypeScript definitions
```

## License

MIT
