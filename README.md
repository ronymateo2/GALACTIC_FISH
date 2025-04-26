# GalacticFish - Leaderboard & Market App

A modern, offline-first React application that displays a live leaderboard and a market system for a galactic fishing game.  
Built with **Vite**, **TypeScript**, **React Query**, and **Progressive Web App (PWA)** strategies.
---

## Demo

Access the live demo here: https://ronymateo2.github.io/GALACTIC_FISH/

---

## Installation

```bash
# Clone the repository
git clone https://github.com/ronymateo2/GALACTIC_FISH

# Navigate to project directory
cd galactic-fish

# Install dependencies
npm install
```

---

## 🚀 Running the App (Development Mode)

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`.

---

## 🧪 Running Tests

```bash
npm run test
# or if using Vitest
npx vitest run
```

---

## 📂 Project Structure

```
├── public/                  # Static assets (backgrounds, SVGs)
├── src/
│   ├── app/                 # Main app entry (GalacticFishApp.tsx)
│   ├── assets/              # Images and icons (SVGs)
│   ├── components/          # UI components
│   │   ├── LeaderBoard.tsx  # Leaderboard card and table
│   │   ├── Market.tsx       # Market card
│   │   ├── context/         # React context (e.g., LoadingContext)
│   │   └── ui/              # Shared UI (LoadingBar, OfflineIndicator)
│   ├── config/              # App configuration
│   ├── hooks/               # Custom hooks (data fetching, loading)
│   ├── services/            # API and cache services
│   ├── App.tsx              # Main App component
│   ├── index.css            # Tailwind and global styles
│   └── main.tsx             # React entry point
├── package.json
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.js         # ESLint configuration
└── README.md
```

This structure helps keep your code modular and maintainable, separating UI, logic, assets, and configuration.

---

## 🌐 Key Technologies

- **React 18**
- **Vite**
- **TypeScript**
- **React Query** (`@tanstack/react-query`)
- **PWA Ready** (offline caching)
- **Vitest** (testing, if set up)

---

## 📈 Features

- Live leaderboard fetching
- Marketplace for buying items
- Offline support with visual indicators
- Fast loading with Vite bundler
- Clean and modular code architecture
- Future-proofed with TypeScript

---

## Known Issues / Future Improvements

- Add comprehensive unit and integration tests
- Improve error boundary handling across the app
- Centralized error management for API services
- UI enhancements for mobile experience

---

## Author

- Rony Mateo – Frontend Developer

---
