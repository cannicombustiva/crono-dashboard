# Crono Dashboard – Test Task

A pixel-faithful implementation of the Crono dashboard design, built as a frontend assignment.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v3** (styling)
- **Lucide React** (icons)

## Features

- Static dashboard layout matching the Figma design
- **Signals list** with interactive "Action" button:
  - Clicking "Action" opens a dropdown tooltip with **Complete** and **Delete** options
  - Selecting either option decrements the unread signals counter
- Mock data via a local `data/mockData.ts` file (no real API calls)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx          # Left navigation
│   ├── WelcomeCard.tsx      # Welcome banner
│   ├── RepliesCard.tsx      # Replies count card
│   ├── TodaysTasks.tsx      # Task stats row
│   ├── SignalsList.tsx      # Signals list + Action tooltip (main interaction)
│   ├── PerformancePanel.tsx # Monthly KPI cards
│   └── OnboardingPanel.tsx  # Onboarding checklist
├── data/
│   └── mockData.ts          # All mock data
├── App.tsx                  # Root layout
└── main.tsx
```

## Design Reference

[Figma file](https://www.figma.com/design/9stjTEFTCNpLiHePX2GYOk/Crono-dashboard---test-task)
