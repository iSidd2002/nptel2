# NPTEL Quiz App

A fullstack quiz application using Node.js (Express) for the backend and React (with Vite and Tailwind CSS) for the frontend.

## Features

- Backend serves quiz assignments from JSON files
- API endpoints for listing assignments, getting details, and submitting answers
- Frontend displays assignments, allows quiz-taking, and shows results
- Progress and scores tracked in localStorage
- Dark mode support with toggle
- Timer for quizzes with automatic submission when time is up
- Progress tracking with visual indicators
- Detailed results showing correct and incorrect answers
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm run install-all
   ```

### Development

Run the development server:

```
npm run dev
```

This will start both the backend server and the frontend development server.

### Production Build

Build the frontend:

```
npm run build
```

Start the production server:

```
npm start
```

## Project Structure

- `backend/`: Express server
  - `data/assignments/`: JSON files for quiz assignments
  - `server.js`: Main server file with API endpoints
- `frontend/`: React app (Vite)
  - `src/`: React source code
    - `components/`: Reusable UI components
    - `pages/`: Page components
    - `context/`: React context (for dark mode)
    - `utils/`: Utility functions and API service
  - `public/`: Static assets

## API Endpoints

- `GET /api/assignments`: List all available assignments
- `GET /api/assignments/:id`: Get details for a specific assignment
- `POST /api/assignments/:id/submit`: Submit answers and receive score and results

## Deployment

The application is ready for deployment on platforms like Render, Railway, Netlify, or Vercel.

## Screenshots

(Add screenshots of your application here)

## License

MIT
