# API Reference: Real-Time Mobility Platform

## Base URL: `http://localhost:4000`

### Rider & Captain Auth Endpoints
| Method | Endpoint | Auth | Purpose | Status Codes |
|---|---|---|---|---|
| `POST` | `/users/register` | No | Register new rider account | `201`, `400` |
| `POST` | `/users/login` | No | Authenticate rider & issue JWT | `200`, `401` |
| `GET` | `/users/profile` | Bearer | Get authenticated rider profile | `200`, `401` |
| `GET` | `/users/logout` | Bearer | Revoke token and logout rider | `200` |
| `POST` | `/captains/register` | No | Register new commercial driver | `201`, `400` |
| `POST` | `/captains/login` | No | Authenticate captain & issue JWT | `200`, `401` |
| `GET` | `/captains/profile` | Bearer | Get authenticated captain profile | `200`, `401` |
| `GET` | `/captains/logout` | Bearer | Revoke token and logout captain | `200` |

### Maps & Geospatial Endpoints
| Method | Endpoint | Auth | Purpose | Status Codes |
|---|---|---|---|---|
| `GET` | `/maps/get-coordinates` | Bearer | Geocode text address into lat/lng | `200`, `404` |
| `GET` | `/maps/get-distance-time`| Bearer | Query distance and duration between points | `200`, `400` |
| `GET` | `/maps/get-suggestions` | Bearer | Address search autocomplete | `200`, `500` |

### Ride Management Endpoints
| Method | Endpoint | Auth | Purpose | Status Codes |
|---|---|---|---|---|
| `POST` | `/rides/create` | Rider | Create ride request and generate OTP | `201`, `400` |
| `GET` | `/rides/get-fare` | Rider | Quote fare across Car, Moto, and Auto | `200`, `400` |
| `POST` | `/rides/confirm` | Captain | Captain accepts pending ride | `200`, `400` |
| `GET` | `/rides/start-ride` | Captain | Validate OTP and initiate transit | `200`, `400` |
| `POST` | `/rides/end-ride` | Captain | Mark ride completed at destination | `200`, `400` |
