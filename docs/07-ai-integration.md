# Geospatial Optimization & Predictive Dispatch Engine

While this platform does not train a local large language model, it features an advanced geospatial mathematics and predictive algorithmic dispatch engine:

1. **Geospatial Proximity Matching Algorithm**:
   - Employs the Haversine formula and spherical trigonometry to compute great-circle distances between drivers and riders before issuing Distance Matrix calls:
   $$d = 2r \arcsin\left(\sqrt{\sin^2\left(\frac{\Delta \phi}{2}\right) + \cos(\phi_1)\cos(\phi_2)\sin^2\left(\frac{\Delta \lambda}{2}\right)}\right)$$
   - Filters candidate captains down to those within a 5-kilometer bounding circle, minimizing external API costs.
2. **Dynamic Surge Multiplier Engine (Extensible Hook)**:
   - Evaluates the ratio of active ride requests ($D$) to available online captains ($S$) within a localized geohash cell. When $D/S > 1.5$, a dynamic surge pricing multiplier is applied to base fares.
