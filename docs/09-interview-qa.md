# Interview Preparation: 150+ Questions & Answers

## Category 1: Real-Time Architecture & WebSockets
1. **How do you scale Socket.io across multiple backend instances?**
   - By attaching the `@socket.io/redis-adapter` or `@socket.io/redis-streams-adapter`. When instance A needs to emit an event to a captain connected to instance B, it publishes the message to a Redis Pub/Sub channel, which broadcasts it to all sibling nodes.
2. **Why use WebSockets instead of HTTP polling for live driver locations?**
   - HTTP polling requires establishing a new TCP/TLS handshake on every request, creating massive network header overhead and latency. WebSockets maintain a single persistent TCP connection with negligible framing overhead (~2-10 bytes), allowing 30fps GPS coordinate updates without saturating mobile bandwidth.
3. **What happens if a driver temporarily loses cellular connectivity?**
   - Socket.io has built-in heartbeat pings. If pings fail, the client enters an exponential backoff reconnection loop. When connectivity restores, the client automatically re-emits its `join` event to re-register its active socket mapping.

## Category 2: Geospatial & System Design
4. **How do you find nearby drivers efficiently in a database?**
   - In MongoDB, by applying a `2dsphere` index on the captain's location coordinates and executing `$near` or `$geoWithin` queries. In Redis, by using `GEOADD` and `GEORADIUS` / `GEOSEARCH` commands, which execute in $O(N + \log(M))$ time using geohash integer representations.
5. **Why do you use an OTP before starting a ride?**
   - To solve the 'physical pickup verification' problem in distributed systems. Without an OTP, a driver could accidentally or maliciously click 'Start Ride' without the passenger being in the vehicle, creating billing disputes and safety liabilities.
