# 5-Day Gym Plan

A mobile-first workout tracker designed for GitHub Pages.

## What it includes
- 5-day workout plan
- Legs + Back + Biceps / Chest + Shoulders + Triceps rotation
- Weight, reps, and optional RIR logging
- Previous-workout recall
- Simple progression suggestions
- Rest timer
- 20-minute cardio timer
- Workout history
- Local storage only — no account or database required
- Basic offline support via service worker

## Publish on GitHub Pages
1. Create a new GitHub repository.
2. Upload `index.html`, `manifest.webmanifest`, and `sw.js` to the repository root.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root`.
6. Save.
7. Open the GitHub Pages URL on your phone.
8. On iPhone, use **Share → Add to Home Screen** for an app-like experience.

Your workout data is stored in your browser's local storage on that device.
