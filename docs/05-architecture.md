# System Architecture & Scaling to 100x

## End-to-End Request & Event Lifecycle
```mermaid
sequenceDiagram
    participant Rider
    participant Gateway as Express / Socket.io
    participant Maps as Google Maps Service
    participant Captain

    Note over Rider,Captain: Phase 1: Fare Quote & Booking
    Rider->>Gateway: GET /maps/get-distance-time
    Gateway->>Maps: Query Matrix API
    Maps-->>Gateway: Matrix Response
    Gateway-->>Rider: Fare Breakdown (Car, Moto, Auto)
    Rider->>Gateway: POST /rides/create
    Gateway->>Gateway: Generate 4-digit OTP
    Gateway-->>Captain: WS emit('new-ride')

    Note over Rider,Captain: Phase 2: Acceptance & OTP Handshake
    Captain->>Gateway: POST /rides/confirm
    Gateway-->>Rider: WS emit('ride-confirmed', { captain, otp })
    Captain->>Gateway: GET /rides/start-ride?rideId=...&otp=1234
    Gateway->>Gateway: Verify OTP Match
    Gateway-->>Rider: WS emit('ride-started')
    Gateway-->>Captain: 200 OK (Ride Ongoing)

    Note over Rider,Captain: Phase 3: Transit & Completion
    Captain->>Gateway: POST /rides/end-ride
    Gateway-->>Rider: WS emit('ride-ended')
    Gateway-->>Captain: 200 OK (Ride Completed)
```

## Scaling to 100x Load: The First Three Bottlenecks
1. **WebSocket Connection Saturation on Single Node**: A single Node.js instance cannot hold 100,000 concurrent driver WebSocket connections. *Mitigation*: Introduce Redis Pub/Sub Adapter (`@socket.io/redis-adapter`) to distribute connections across an auto-scaling cluster of Node instances.
2. **Google Maps API Rate Limits and Cost Explosion**: Direct external calls for every drag-and-drop autocomplete or distance recalculation will incur astronomical API bills. *Mitigation*: Cache geocoding results and common route distances in Redis with a 24-hour TTL; introduce client-side debouncing on autocomplete inputs.
3. **Database Write Pressure on Driver GPS Updates**: Storing raw GPS coordinate updates to MongoDB on every ping will saturate disk IOPS. *Mitigation*: Store transient driver coordinates in Redis Geospatial indexes (`GEOADD`, `GEORADIUS`) and persist only the final trip polyline to MongoDB upon ride completion.
