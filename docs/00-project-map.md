# Project Map: Real-Time Mobility & Ride-Hailing Platform

## Folder Tree
```
38-uber-clone/
├── UberClone-Clean-Project/
│   ├── backend/
│   │   ├── controllers/
│   │   │   ├── captain.controller.js     # Driver onboarding, profile, status toggles
│   │   │   ├── map.controller.js         # Geocoding, distance, autocomplete proxies
│   │   │   ├── ride.controller.js        # Ride creation, fare quotes, OTP confirmation
│   │   │   └── user.controller.js        # Rider signup, login, session management
│   │   ├── db/
│   │   │   └── db.js                     # Mongoose connection with error listeners
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js        # Rider/Captain JWT verification & blacklist check
│   │   ├── models/
│   │   │   ├── blacklistToken.model.js   # Revoked JWT tokens with TTL expiration
│   │   │   ├── captain.model.js          # Driver profile, vehicle spec, location coordinates
│   │   │   ├── ride.model.js             # Ride lifecycle, fare, OTP, status states
│   │   │   └── user.model.js             # Rider profile and credentials
│   │   ├── routes/
│   │   │   ├── captain.routes.js         # /captains endpoints
│   │   │   ├── maps.routes.js            # /maps endpoints
│   │   │   ├── ride.routes.js            # /rides endpoints
│   │   │   └── user.routes.js            # /users endpoints
│   │   ├── services/
│   │   │   ├── captain.service.js        # Captain creation & query services
│   │   │   ├── maps.service.js           # Google Maps API geocoding & distance matrix
│   │   │   ├── ride.service.js           # Fare calculations, OTP generation, ride transitions
│   │   │   └── user.service.js           # Rider creation service
│   │   ├── app.js                        # Express middleware config, CORS, routes
│   │   ├── server.js                     # HTTP server wrapper & port listener
│   │   ├── socket.js                     # Socket.io connection pool & event dispatchers
│   │   └── package.json                  # Express 4.21, Socket.io 4.8, Mongoose 8.8
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── CaptainDetails.jsx    # Driver stats, earnings, hours online
│   │   │   │   ├── ConfirmRide.jsx       # Vehicle selection confirmation panel
│   │   │   │   ├── ConfirmRidePopUp.jsx  # Captain OTP verification input modal
│   │   │   │   ├── FinishRide.jsx        # Ride completion & fare settlement panel
│   │   │   │   ├── LiveTracking.jsx      # Google Maps polyline & vehicle marker view
│   │   │   │   ├── LocationSearchPanel.jsx# Address autocomplete suggestions dropdown
│   │   │   │   ├── LookingForDriver.jsx  # Pulsing search radar animation
│   │   │   │   ├── RidePopUp.jsx         # Incoming ride notification modal for captain
│   │   │   │   ├── VehiclePanel.jsx      # Tier selection: Car, Moto, Auto with fares
│   │   │   │   └── WaitingForDriver.jsx  # Driver en route details & OTP display
│   │   │   ├── context/
│   │   │   │   ├── CaptainContext.jsx    # Global captain profile & vehicle state
│   │   │   │   ├── SocketContext.jsx     # Persistent WebSocket connection provider
│   │   │   │   └── UserContext.jsx       # Global rider profile & active ride state
│   │   │   ├── pages/
│   │   │   │   ├── CaptainHome.jsx       # Captain live radar & ride acceptance portal
│   │   │   │   ├── CaptainRiding.jsx     # Captain navigation & turn-by-turn view
│   │   │   │   ├── Home.jsx              # Rider home search & vehicle booking dashboard
│   │   │   │   ├── Riding.jsx            # Rider in-transit map tracking view
│   │   │   │   ├── Start.jsx             # Welcome splash landing
│   │   │   │   └── UserProtectWrapper.jsx# Route guard redirecting unauthenticated users
│   │   │   ├── App.jsx                   # React Router route declarations
│   │   │   └── main.jsx                  # React 18 root mount
│   │   └── package.json                  # React 18, Google Maps API, GSAP, Socket.io
│   └── package.json                      # Workspace scripts
└── docs/                                 # VitePress documentation portal
```

## Dependencies & Rationale
| Package | Version | Purpose |
|---|---|---|
| `socket.io` | 4.8.3 | High-frequency, bidirectional WebSocket transport for live coordinates |
| `express` | 4.21.1 | Robust REST API router for user/captain onboarding and booking |
| `mongoose` | 8.8.2 | ODM for MongoDB schema validation, compound indexes, and location schema |
| `@react-google-maps/api` | 2.20.3 | Interactive Google Maps rendering, vehicle markers, and direction polylines |
| `gsap` | 3.12.5 | High-performance animation engine for native-feeling bottom sheets |
| `bcrypt` | 5.1.1 | Salting and hashing credentials with 10 work rounds |
| `jsonwebtoken` | 9.0.2 | Stateless identity tokens with embedded user/captain role metadata |
| `express-validator` | 7.2.0 | Middleware for input validation and sanitization on ride requests |
| `remixicon` | 4.5.0 | Complete modern icon library for mobility and vehicle iconography |
