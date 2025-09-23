# **App Name**: RECAP Portal

## Core Features:

- Interactive Orbit Visualization: Display an animated 3D model of the satellite capsule in orbit, showing its trajectory and debris collection process.  Animation should respond to user mouse events.
- Real-time Telemetry Dashboard: Provide a live data feed with key mission metrics like altitude, speed, and capsule status in a UI resembling a spacecraft control panel.
- Debris Type Classification: Use a generative AI tool to automatically classify captured orbital debris based on visual data from the capsule's sensors; generate reports suitable for customer download.
- Secure Role-Based Access: Implement role-based access control (public, customer, admin) with secure login and authentication. All user data should be stored with a third-party authentication service, like Auth0.
- Admin Mission Control: Provide a secure admin interface to update mission status, manage user accounts, and control data visibility for customers.
- Mission Event Timeline: Display past and upcoming mission operations on an interactive timeline to present milestones to the user.
- Contact and Support System: Provide a simple contact form and ticketing system for customer inquiries and technical support. Support for file uploads.

## Style Guidelines:

- Primary color: Deep blue (#192A56) to evoke a sense of space and technology.
- Background color: Dark gray (#222222) for a space-tech-inspired dark mode experience.
- Accent color: Bright orange (#FF7F50) to highlight interactive elements and plasma effects.
- Body and headline font: 'Space Grotesk', a sans-serif font, for a modern, futuristic look, paired with 'Inter' sans-serif for longer passages of text.
- Use glowing, minimalist icons to represent mission data, telemetry, and user actions. Style should resemble ISRO/SpaceX control panels.
- Employ a grid-based layout with generous whitespace, creating a clean and professional UI. Implement HUD-style overlays for telemetry data displays.
- Add subtle micro-animations for hover effects, transitions, and data updates. Use parallax scrolling on the landing page to create depth and immersion.