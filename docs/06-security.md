# Security Audit & Risk Analysis

## Threat Modeling & Mitigations
- **Ride Impersonation & Hijacking**: Solved via cryptographically random 4-digit OTP required before a captain can start a ride.
- **Token Replay Attacks**: Mitigated by checking all incoming JWT tokens against an automated MongoDB `blacklistTokens` collection with 24-hour TTL expiration.
- **Location Spoofing**: Drivers manipulating GPS coordinates. *Mitigation*: Cross-reference reported velocity ($v = \Delta d / \Delta t$) against realistic road speeds; reject impossible speed spikes.
- **Input Validation**: Handled via `express-validator` to ensure all coordinate arrays and vehicle specifications match strict validation schemas.
