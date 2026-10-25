# F5: Kinetic Mobile-First UI & Bottom Sheet Drawers

## 1. Description & Animation Choreography
The frontend is engineered as a mobile-first responsive web application. Panels for searching locations, choosing vehicle types, waiting for drivers, and accepting rides are rendered as layered bottom sheets animated using GreenSock (GSAP).

## 2. GSAP Drawer Animation Flow
```mermaid
flowchart TD
    Trigger[User Action: Focus Input / Select Ride] --> GSAPHook[useGSAP Hook Trigger]
    GSAPHook --> Tween[gsap.to panelRef { y: '0%', duration: 0.5, ease: 'power2.out' }]
    Tween --> Viewport[Smooth Drawer Slide from Bottom]
    Dismiss[User Dismisses Panel] --> Reverse[gsap.to panelRef { y: '100%' }]
```

## 3. Say It Out Loud
"For the client interface, I designed a mobile-first architecture utilizing GSAP to replicate the tactile feel of native mobile applications. Complex UI states—such as destination search suggestions, vehicle selection carousels, and driver acceptance popups—are managed as sliding bottom sheets. I used the `useGSAP` hook to animate CSS translation matrices with cubic power-easing curves, preventing layout thrashing and maintaining a rock-solid 60 frames per second. This gives web users the exact fluid feel of a native iOS or Android ride-hailing app."
