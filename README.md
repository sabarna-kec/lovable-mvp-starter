# StockIT - Financial Analysis Dashboard

StockIT is a React + TypeScript single-page app for exploring stock-market data in a clean, dashboard-first experience. It includes market overview charts, strategy insights, fundamentals, sentiment/news analysis, and downloadable historical data in one workflow-oriented UI.

## Features

- **Landing page + dashboard navigation** with route-based pages (`/` and `/dashboard`).
- **Market overview section** with price, volume, and trend-focused visual analysis.
- **Strategy & Signals module** with simulated AI recommendation states and reasoning tabs.
- **Fundamentals and financial analysis** cards for quick metric scanning.
- **News & sentiment analysis** with expandable "why this matters" context.
- **Historical data table** with CSV export support.
- **Responsive UI** built with Tailwind CSS and shadcn/ui primitives.

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS
- **UI primitives:** Radix UI + shadcn/ui
- **Routing:** React Router
- **Data/async utilities:** TanStack Query
- **Charts:** Recharts
- **Testing:** Vitest + Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ (or newer LTS)
- npm

### Installation

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Then open the local URL printed by Vite (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start Vite dev server.
- `npm run build` - Create a production build.
- `npm run build:dev` - Build in development mode.
- `npm run preview` - Preview the production build locally.
- `npm run lint` - Run ESLint checks.
- `npm run test` - Run Vitest in non-watch mode.
- `npm run test:watch` - Run Vitest in watch mode.

## Project Structure

```text
src/
  components/     # Dashboard and shared UI components
  data/           # Mock/news/strategy datasets
  hooks/          # Reusable React hooks
  lib/            # Utility helpers
  pages/          # Route-level pages
  test/           # Test setup and specs
```

## Notes

- Current dashboard values and news are mock/simulated data designed for UI prototyping.
- The app includes an in-product disclaimer and is **not** investment advice.

## License

No license file is currently defined in this repository. Add one (for example, MIT) before public distribution.
