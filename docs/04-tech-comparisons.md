# Tech Choice Comparisons

## 1. Real-Time Transport: Socket.io vs Raw WebSockets vs Server-Sent Events (SSE) vs Long Polling
| Criteria | Socket.io (Chosen) | Raw WebSockets (ws) | Server-Sent Events | Long Polling |
|---|---|---|---|---|
| Bidirectional Traffic | Yes (Full Duplex) | Yes (Full Duplex) | No (Server -> Client only) | Simulated |
| Automatic Reconnection | Built-in with backoff | Manual implementation | Built-in | Manual |
| Room & Namespace Multiplexing| Built-in API | Manual mapping | None | None |
| HTTP Fallback | Yes (Long polling fallback)| None | None | Native HTTP |

**Why Chosen**: Socket.io provides automatic reconnection, built-in room abstractions for dispatching events to specific users, and fallback transports for unreliable mobile networks.

## 2. Geospatial Mapping API: Google Maps Platform vs Mapbox vs OpenStreetMap / Leaflet
| Criteria | Google Maps (Chosen) | Mapbox | OpenStreetMap / Leaflet |
|---|---|---|---|
| Address Search Accuracy | Unrivaled global place index | Good | Variable by region |
| Distance Matrix Live Traffic | Highly accurate live traffic | Good | Requires OSRM server |
| Integration Overhead | Official React components | Custom GL wrappers | Open source wrappers |
| Cost Profile | $5.00 / 1000 requests | $5.00 / 1000 requests | Free self-hosted |

**Why Chosen**: Ride-hailing requires hyper-accurate street-level geocoding and live traffic-adjusted travel time matrices, where Google Maps remains the industry standard.
