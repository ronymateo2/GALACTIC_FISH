# GalacticFish - Leaderboard & Market App

A modern, offline-first React application that displays a live leaderboard and a market system for a galactic fishing game.  
Built with **Vite**, **TypeScript**, **React Query**, and **Progressive Web App (PWA)** strategies.

---

## Installation

```bash
# Clone the repository
git clone <your-repository-url>

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
├── public/               # Static assets (webp backgrounds, SVGs)
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # UI components (LeaderBoard, Market, Loading indicators)
│   ├── config/            # App configuration constants
│   ├── hooks/             # Custom hooks (useLeaderBoardData, useMarketData)
│   ├── layout/            # Layouts used across pages
│   ├── services/          # API Services (market and leaderboard)
│   └── App.tsx            # Main App component
├── package.json
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
└── README.md
```

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
