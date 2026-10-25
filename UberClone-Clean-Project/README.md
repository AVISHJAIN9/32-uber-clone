# Modern Full-Stack MERN Uber Clone

A complete real-time ride-hailing platform featuring Captain (Driver) and Rider portals, real-time location tracking via Socket.io, Google Maps API distance matrix and routing, GSAP animated panels, JWT authentication, and MongoDB.

---

## 📁 Clean Repository Structure

```
38-uber-clone/
├── backend/                  # Full-featured Socket.io & Express API Server
│   ├── controllers/          # Captain, User, Ride, and Maps Controllers
│   ├── db/                   # MongoDB Connection with Fallback
│   ├── middlewares/          # JWT Authentication Middleware
│   ├── models/               # Captain, User, Ride, BlacklistToken Schemas
│   ├── routes/               # API Endpoints (Users, Captains, Rides, Maps)
│   ├── services/             # Google Maps, Ride Dispatch, User & Captain Services
│   ├── .env.example          # Backend Environment Template
│   ├── app.js                # Express App Setup
│   ├── package.json
│   ├── server.js             # HTTP & Socket.io Server Entry Point (Port 3000)
│   └── socket.js             # Real-Time WebSocket Logic
├── frontend/                 # Modern React 18 + Vite + Tailwind Client
│   ├── src/
│   │   ├── components/       # VehiclePanel, ConfirmRide, LiveTracking, RidePopUp, etc.
│   │   ├── context/          # SocketContext, UserContext, CaptainContext
│   │   ├── pages/            # Rider Home, Captain Home, Riding, Login/Signup, Start
│   │   └── App.jsx
│   ├── .env.example          # Frontend Environment Template
│   ├── index.html
│   ├── package.json
│   └── vite.config.js        # Vite Config (Port 5173)
├── legacy-react-frontend/    # Preserved Legacy Create-React-App Prototype
├── prototype-v1/             # Preserved Initial V1 Prototype Files
├── install-all.bat           # One-Click Dependency Installer
├── start-all.bat             # One-Click Dual Server Launcher
├── .gitignore                # Root Gitignore
├── package.json              # Root Workspace Config
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: v18+ or v20+
- **MongoDB**: Running locally on `mongodb://127.0.0.1:27017` or MongoDB Atlas URI
- **Google Maps API Key**: (Optional, for live geocoding & route suggestions)

### 2. Install Dependencies
Double-click `install-all.bat` or run:
```bash
# Backend
cd backend && npm install --legacy-peer-deps

# Frontend
cd ../frontend && npm install --legacy-peer-deps
```

### 3. Environment Setup

#### Backend (`backend/.env`)
Copy `backend/.env.example` to `backend/.env`:
```env
PORT=3000
DB_CONNECT=mongodb://127.0.0.1:27017/uber-clone
JWT_SECRET=supersecret_uber_jwt_key_replace_in_production
GOOGLE_MAPS_API=your_google_maps_api_key_here
```

#### Frontend (`frontend/.env`)
Copy `frontend/.env.example` to `frontend/.env`:
```env
VITE_BASE_URL=http://localhost:3000
```

### 4. Running the Application
Double-click `start-all.bat` or run separately:

```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

- **Frontend App**: `http://localhost:5173`
- **Backend API & WebSockets**: `http://localhost:3000`

---

## 🛠️ Cleanups & Fixes Applied
1. **Fixed Fatal Windows Path Error**: Extracted and sanitized folder names with trailing spaces (`uber `) that caused Windows Zip tools to crash.
2. **Removed Copy Tags**: Eliminated `uber2`, `Uber-Frontend-ReactJS--master`, and `uber ` folder wrappers into standard top-level `backend/`, `frontend/`, `legacy-react-frontend/`, and `prototype-v1/`.
3. **Database Fallback**: Added safe connection string fallback in `backend/db/db.js` to prevent server crashes when `.env` is unpopulated.
4. **Added Dynamic WebSocket / API Base URL**: Added `import.meta.env.VITE_BASE_URL` fallback in `SocketContext.jsx` and created `.env.example` templates.
5. **Removed OS Junk**: Deleted macOS `.DS_Store` files and updated root `.gitignore`.
6. **Provided One-Click Automation**: Added `install-all.bat` and `start-all.bat` scripts.

---

## License & Attribution
- Original Repository Origin: `https://github.com/AVISHJAIN9/uber-clone-`
- Licensed under the **ISC License**.
