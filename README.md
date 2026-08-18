# 5-Day Gym Plan — Version 2

Mobile-first workout tracker for GitHub Pages.

## New in Version 2
- **Start Workout mode** with one exercise at a time
- Large next/previous exercise controls
- Automatic rest timer after each completed set
- Exercise-specific rest periods
- Rest timer overlay with +30 sec / -30 sec / skip
- Strength Progress screen based on logged working weights
- Continues to support full-day editing, workout history, cardio timer, and local storage

## Publish on GitHub Pages
Upload these files to the root of your GitHub repository:

- `index.html`
- `manifest.webmanifest`
- `sw.js`

If replacing Version 1, simply replace the existing files and commit the change.

Then open your GitHub Pages URL on your phone. On iPhone, use **Share → Add to Home Screen**.

## Storage note
Workout history is stored in the browser on the device using local storage. Version 2 uses a new storage key, so it starts with a clean log during testing.
