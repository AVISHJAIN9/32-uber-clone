# Project Pitch: Real-Time Mobility & Ride-Hailing Platform

## 30-Second Elevator Pitch
"I engineered an enterprise-grade ride-hailing simulation platform modeled after Uber, built using React 18, Node.js, Express, Socket.io, and MongoDB. It features live bidirectional GPS tracking between riders and drivers, dynamic multi-vehicle fare calculation using Google Maps Distance Matrix APIs, real-time dispatch matching within geographic radiuses, and an OTP verification handshake before ride ignition. The frontend delivers native-app fluidity with GSAP bottom-sheet physics and live polyline map updates."

## 2-Minute Comprehensive Pitch
"Building a ride-hailing platform requires solving complex challenges across distributed real-time state, geospatial indexing, and transactional state machines. 

To achieve this, I built a dual-persona platform supporting both Riders and Captains. On the backend, I engineered an Express application augmented with a Socket.io WebSocket server. When a captain goes online, their device continuously streams GPS coordinates over a persistent WebSocket connection. The backend updates the driver's location and maintains active socket mapping in memory. 

When a rider selects pickup and destination points, the system calls Google Maps Distance Matrix and Directions APIs to compute precise route mileage and travel duration. It runs a dynamic fare algorithm across three vehicle tiers—cars, motorcycles, and auto-rickshaws—accounting for base rates, per-kilometer travel, and minute charges. Once requested, the ride enters a 'pending' state and is broadcast over WebSockets exclusively to available captains within the pickup radius.

When a captain accepts, the rider receives an immediate notification along with a cryptographically generated 4-digit OTP. The captain cannot initiate the ride until entering the matching OTP on their device, which transitions the ride state to 'ongoing'. Upon reaching the destination, the captain triggers completion, finalizing the billing record. The frontend is powered by React 18 with GSAP kinetic spring animations, providing responsive bottom-sheet drawers and live Google Maps tracking that rivals native mobile applications."
