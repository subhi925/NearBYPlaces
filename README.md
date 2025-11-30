9﻿# Places Near Me 🌍

A single-page application (SPA) to discover attractions, activities, and services around you.

## Project Status

⚠️ UNDER CONSTRUCTION — Active development (Last update: 2025-11-29)

## What's new in the last update

- Frontend
  - Implemented a simple SPA routing structure with routes for "/", "/find", and "/surprise".
  - Added dynamic content for the home page (home cards) and a basic `find` component skeleton.
  - Fixed event listener usage (pass function reference to addEventListener, do not call handlers immediately).
  - Improved responsive layout and style changes for small screens.
  - Implemented a translucent glass effect for the #log UI using `backdrop-filter` and a semi-transparent background (with vendor prefix for Safari/Chrome).
  - Added Lottie animation support (dotlottie-wc) and included a sample animation on the find page.
  - Fixed tooltip behavior: use `title` for hover tooltips (alt text is for accessibility and fallback).

- Backend
  - Added `places.php` to fetch current weather using WeatherAPI (via RapidAPI) and to return JSON.
  - Added basic request validation for `lat` and `lon` POST parameters and error handling.
  - Added CORS header for easier local development.

- Misc / Fixes
  - Corrected `box-shadow` syntax across CSS.
  - Minor code cleanup and comments.

## Tech Stack

- Frontend: HTML5, CSS3, Vanilla JavaScript (SPA)
- Backend: PHP (for simple API proxy)
- APIs: WeatherAPI (via RapidAPI)
- Server: XAMPP (local development)

## How to run locally

1. Place the project under `d:\xampp\htdocs\Places\`.
2. Start XAMPP (Apache + PHP).
3. Open http://localhost/Places/ in your browser.
4. Click "Find Activity Near Me" or other items to test SPA behavior.
5. To test weather endpoint, POST to `http://localhost/Places/places.php` with `lat` and `lon`.

Example curl:
```bash
curl -X POST -F "lat=37.7749" -F "lon=-122.4194" http://localhost/Places/places.php
```

## Security note

Do not commit real API keys. `places.php` currently calls RapidAPI — replace the API key with a secure method (server environment variable or configuration file outside version control). Remove or rotate the key if accidentally committed.

## Next steps (TODO)

- Integrate full Google Places API for place search & details.
- Add user geolocation to find points near the user.
- Build interactive map view (e.g., Leaflet / Google Maps).
- Improve site accessibility and ARIA attributes.
- Add unit tests / validation and error UI.
- Implement server-side secure config for API keys.

---


```
