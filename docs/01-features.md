# Feature Inventory: Real-Time Mobility Platform

## Overview of Core Features
- **F1: Real-Time Geospatial Driver-Rider Dispatch & Matching**: Live WebSocket telemetry streaming driver GPS coordinates and broadcasting ride dispatch requests within geographic radiuses.
- **F2: Dynamic Fare Matrix, Routing & Google Maps Polyline Rendering**: Computes mileage, durations, and multi-tier pricing (Car, Moto, Auto) via Google Maps Distance Matrix.
- **F3: End-to-End Cryptographic Ride Lifecycle & OTP Handshake**: Secure 4-digit numeric OTP generation, start-ride verification handshake, and transactional state progression.
- **F4: Dual Persona Identity & Token Blacklisting**: Isolated rider and captain portals, salted bcrypt hashing, JWT issuance, and TTL-expiring token revocation on logout.
- **F5: Kinetic Mobile-First UI & Bottom Sheet Drawer Choreography**: GSAP-driven sliding panels, interactive vehicle selection drawers, and autocomplete suggestions.

## Say It Out Loud (Feature Summary)
"When explaining this system to an interviewer, I emphasize how the platform bridges asynchronous HTTP REST APIs with low-latency WebSockets. The entire ride journey—from initial fare estimation and radar driver search to the cryptographic OTP start verification and live route tracking—operates as a deterministic distributed state machine designed to eliminate race conditions and keep both parties perfectly synchronized."
