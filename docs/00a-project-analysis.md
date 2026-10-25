# Full Project Analysis: Real-Time Mobility & Ride-Hailing Platform

## 0.1 What the Project Is
The **Real-Time Mobility & Ride-Hailing Platform** is an end-to-end urban transportation dispatch system modeling the core architecture of services like Uber and Lyft.

It connects two distinct stakeholder personas—**Riders** who request point-to-point transportation and **Captains (Drivers)** who fulfill rides using registered motor vehicles (cars, motorcycles, and auto-rickshaws). The platform orchestrates real-time geospatial location broadcasts, calculates dynamic multi-tier fares via Google Maps Distance Matrix APIs, dispatches requests to nearby available drivers over low-latency WebSockets, and validates ride ignition via a secure 4-digit One-Time Password (OTP) verification handshake.

## 0.2 System Architecture Diagram

```mermaid
flowchart TD
    subgraph ClientTiers [Client Applications]
        RiderApp[Rider Web Portal - React 18]
        CaptainApp[Captain Driver Portal - React 18]
    end

    subgraph GatewayTier [HTTP & WebSocket Ingress]
        ExpressServer[Express 4.21.1 HTTP Server :4000]
        SocketServer[Socket.io 4.8.3 WebSocket Engine]
    end

    subgraph ServiceLayer [Business & Geospatial Logic]
        RideService[ride.service.js Fare & Dispatch]
        MapsService[maps.service.js Geocoding & Distance]
        UserService[user.service.js Auth & Profiles]
        CaptainService[captain.service.js Fleet Management]
    end

    subgraph ExternalAPIs [External Infrastructure]
        GoogleMaps[Google Maps Platform Distance Matrix / Places API]
    end

    subgraph Persistence [Data Tier]
        MongoDB[(MongoDB Atlas Database)]
        Collections[(Users, Captains, Rides, BlacklistTokens)]
    end

    RiderApp -->|HTTP REST| ExpressServer
    CaptainApp -->|HTTP REST| ExpressServer
    RiderApp <-->|WebSocket Events| SocketServer
    CaptainApp <-->|WebSocket Events: update-location| SocketServer

    ExpressServer --> RideService
    ExpressServer --> MapsService
    ExpressServer --> UserService
    ExpressServer --> CaptainService

    MapsService <-->|HTTP REST| GoogleMaps
    RideService --> MongoDB
    UserService --> MongoDB
    CaptainService --> MongoDB
    MongoDB --> Collections
```

## 0.3 Inventory Counts
- **Total Frontend Pages**: 10 (`Home.jsx`, `Start.jsx`, `UserLogin.jsx`, `UserSignup.jsx`, `Captainlogin.jsx`, `Captainsignup.jsx`, `Riding.jsx`, `CaptainRiding.jsx`, `CaptainHome.jsx`, `UserProtectWrapper.jsx`)
- **Total Components**: 10 (`LiveTracking.jsx`, `LocationSearchPanel.jsx`, `VehiclePanel.jsx`, `ConfirmRide.jsx`, `LookingForDriver.jsx`, `WaitingForDriver.jsx`, `RidePopUp.jsx`, `ConfirmRidePopUp.jsx`, `FinishRide.jsx`, `CaptainDetails.jsx`)
- **Backend Endpoints**: 14 REST endpoints
- **WebSocket Events**: 8 (`join`, `update-location-captain`, `new-ride`, `ride-confirmed`, `ride-started`, `ride-ended`, `disconnect`)
- **Database Models**: 4 (`User`, `Captain`, `Ride`, `BlacklistToken`)
- **Third-Party APIs**: 1 (Google Maps Geocoding & Distance Matrix API)
- **Environment Variables**: 4 (`PORT`, `DB_CONNECT`, `JWT_SECRET`, `GOOGLE_MAPS_API`)
