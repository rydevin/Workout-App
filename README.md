# Gym Plan V3b

This rebuild keeps the V3 workout features and adds two fixes:

- **Stronger data recovery:** on launch, the app merges data from V2, V3, and V3b. This includes unsaved draft workouts, not just workouts that were explicitly saved.
- **Shifted schedule:** Wednesday Aug. 19, 2026 is treated as the D2 Chest + Shoulders + Triceps workout, so Thursday Aug. 20 defaults to D3 Legs + Back + Biceps. The weekday rotation is shifted forward from there.

The tabs are now labeled D1–D5 instead of weekday names so the shifted rotation does not show a misleading weekday label.

Replace `index.html`, `manifest.webmanifest`, and `sw.js` in the same GitHub Pages repository. Keeping the same site/browser is important because the older workout draft is stored in that browser's local storage.

After deploying, fully close and reopen the home-screen app once so the new service worker replaces the old cache.
