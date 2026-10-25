# Step-by-Step Build Order

## Rebuilding the Ride-Hailing Platform from Scratch

### Phase 1: Server Setup, HTTP & Socket.io Ingress
1. Initialize Node.js project and install Express 4.21, Socket.io 4.8, Mongoose 8.8, and dependencies.
2. Build `backend/server.js` and `backend/socket.js` wrapping the Express app in an HTTP server with WebSocket connection handlers.
3. Configure `backend/db/db.js` for MongoDB Atlas persistence.

### Phase 2: Dual User & Captain Domain Modeling
1. Create `backend/models/user.model.js` with rider profile schemas.
2. Create `backend/models/captain.model.js` with vehicle specs (color, plate, capacity, vehicleType) and GPS location coordinates.
3. Create `backend/models/blacklistToken.model.js` with TTL expiration index.
4. Implement auth controllers, services, and middleware (`backend/middlewares/auth.middleware.js`).

### Phase 3: Geospatial & Google Maps Integration
1. Configure Google Maps client in `backend/services/maps.service.js`.
2. Implement geocoding, reverse geocoding, distance matrix queries, and autocomplete proxies in `map.controller.js`.

### Phase 4: Ride Domain, Fare Engine & OTP State Machine
1. Create `backend/models/ride.model.js` with `pending`, `accepted`, `ongoing`, `completed`, and `cancelled` status states.
2. Implement fare calculation matrix and 4-digit OTP generation in `backend/services/ride.service.js`.
3. Implement ride creation, acceptance, OTP verification, and completion endpoints in `ride.controller.js`.

### Phase 5: Real-Time WebSocket Event Orchestration
1. Implement driver room joining (`join`) and continuous coordinate streaming (`update-location-captain`).
2. Implement ride broadcast dispatches (`new-ride`, `ride-confirmed`, `ride-started`, `ride-ended`).

### Phase 6: React 18 Frontend & GSAP Motion
1. Scaffold React 18 Vite app with Tailwind CSS and Remixicon.
2. Build `SocketContext.jsx` for persistent WebSocket connection lifecycle.
3. Implement `LiveTracking.jsx` with `@react-google-maps/api`.
4. Choreograph interactive sliding drawers using GSAP in `Home.jsx` and `CaptainHome.jsx`.
