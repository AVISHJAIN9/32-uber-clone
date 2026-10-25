# Step 0 Pre-Check: Project Type Detection

## Detected Project Type
**Primary Type**: Full-Stack Real-Time Geospatial Mobility & Ride-Hailing Platform (Node.js/Express + Socket.io + MongoDB/Mongoose + React 18 + Google Maps API + GSAP)
**Sub-Category**: Real-Time Driver-Rider Matching Engine, Live GPS Telemetry, OTP Verification Handshake, Dual-Persona Portal (Rider & Captain).

## Evidence
- **Backend API & Real-Time Engine**: Express 4.21.1, Socket.io 4.8.3, Mongoose 8.8.2, `bcrypt` 5.1.1, `jsonwebtoken` 9.0.2, `express-validator` 7.2.0, `axios` 1.7.7 (`backend/package.json`).
- **Geospatial & WebSocket Core**: `backend/socket.js` (live GPS tracking, room joins, broadcast triggers), `backend/services/maps.service.js` (Google Distance Matrix & Geocoding).
- **Frontend SPA**: React 18.3.1, Vite 5.4.10, `@react-google-maps/api` 2.20.3, `socket.io-client` 4.8.1, `gsap` 3.12.5, `@gsap/react` 2.1.1, Tailwind CSS 3.4.15 (`frontend/package.json`).
- **Domain Models**: `user.model.js`, `captain.model.js` (vehicle specifications, status: active/inactive, location coordinates), `ride.model.js` (fare, OTP, status: pending/accepted/ongoing/completed), `blacklistToken.model.js`.

## Documentation Track
- **Full Stack / Real-Time Geospatial Track**: Complete coverage of WebSocket pub/sub topologies, geospatial indexing (2dsphere), OTP cryptographic handshakes, dynamic surge pricing algorithms, Google Distance Matrix integration, and scaling to 100k concurrent active vehicles.
