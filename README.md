# Banking Products Dashboard

A responsive, single-screen banking product dashboard built for Exercise 1 (Unified Banking Product Screen).

## Technology
- **React** — reusable UI components and state management
- **Vite** — local development server and production build
- **Lucide React** — lightweight icons
- **CSS** — responsive layout and visual styling

## Features
- Savings, credit card, loan, and wealth product cards
- Product category tabs
- Search by product name, type, or status
- Product details modal using the “View details” CTA
- Summary metrics and responsive desktop/mobile layout
- Mock data is separated from card presentation in `src/App.jsx`

## Run locally
1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this project folder.
3. Open a terminal in the project folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build
```bash
npm run build
```
The production output is generated in `dist/`.

## Note
All banking values are fictional sample data. No backend or persistence is included, as permitted by the exercise scope.
