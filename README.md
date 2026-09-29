# 🌤️ Weather Now

**A gorgeous, zero-dependency weather app in a single HTML file** — live conditions, 7-day forecasts, an animated rain radar, and a glassmorphism UI with dark mode. No build step, no npm install, no API keys.

<p align="center">
  <img alt="Vanilla JS" src="https://img.shields.io/badge/vanilla-JS-f7df1e?logo=javascript&logoColor=black">
  <img alt="Dependencies" src="https://img.shields.io/badge/dependencies-0-brightgreen">
  <img alt="API keys" src="https://img.shields.io/badge/API%20keys-none-blue">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-lightgrey">
</p>

<!-- 📸 Add screenshots here! e.g. <img src="screenshots/light.png" width="45%"> <img src="screenshots/dark.png" width="45%"> -->

## ✨ Features

- 🔍 **Smart city search** — fuzzy matching with alias support (*Bangalore → Bengaluru*), lat/lon input (`12.97, 77.59`), and a global "search all places" fallback via OpenStreetMap
- 🌡️ **Live conditions** — temperature, feels-like, humidity, wind + direction, pressure, UV index, dew point, cloud cover, and air quality (US AQI)
- ⏰ **24-hour strip** and 📅 **7-day forecast** with temperature range bars
- 🗺️ **Live rain radar** — past 2 hours animated frame-by-frame, with play/pause, time scrubbing, infrared cloud satellite layer, and a data-coverage layer (RainViewer)
- 🌙 **Dark mode** — follows your system preference, remembers your choice, with its own tuned palette per weather theme
- 🎬 **Animated sky scenes** — rain streaks, drifting clouds, twinkling stars, snowfall, and lightning flashes that match the current weather
- ✨ **Glassmorphism UI** — frosted cards, aurora ambience, animated weather icons, and smooth page transitions
- 💡 **Smart tips** — "Rain is likely in the next few hours. Carry an umbrella."
- ⭐ **Favorites & recents** saved locally, plus 📎 **one-click copy summary**
- 🛰️ **Auto-refresh** every 10 minutes
- 🔗 **Shareable links** — `weather.html?q=Bengaluru` opens that place directly
- 🛡️ **Helpful offline diagnostics** — tells you *why* a request failed (ad blocker, VPN, preview sandbox…) instead of just failing
- 📱 **Fully responsive** with reduced-motion support

## 🚀 Quick start

```bash
git clone https://github.com/YOUR_USERNAME/weather-now.git
cd weather-now
node serve-weather.js
```

That's it — the app opens at **http://localhost:5173**.

> **No Node?** Just double-click `weather.html` — it runs straight from the file system too.

## 🗂️ Project structure

```
weather-now/
├── weather.html      # The entire app: markup, styles, and logic
└── serve-weather.js  # Zero-dependency dev server (Node built-ins only)
```

## 🧰 How it's built

Everything lives in **one file** (`weather.html`) — no frameworks, no bundler, no package.json.

| Piece | Powered by |
|---|---|
| Weather, air quality | [Open-Meteo](https://open-meteo.com/) |
| Rain radar + cloud tiles | [RainViewer](https://www.rainviewer.com/) |
| Map | [Leaflet](https://leafletjs.com/) + [OpenStreetMap](https://www.openstreetmap.org/copyright) |
| Global place search | [Nominatim](https://nominatim.openstreetmap.org/) |
| Reverse geocoding | [BigDataCloud](https://www.bigdatacloud.com/) |
| Typefaces | [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts |

All free, all keyless. ❤️

To change the port, edit `PORT` at the top of `serve-weather.js`.

## ☁️ Deploying

Any static host works — the app is a single file:

- **GitHub Pages** — push the repo, then *Settings → Pages → Deploy from branch → main*. Done.
- Netlify / Vercel / Cloudflare Pages — drag and drop the folder.

## 🧯 Troubleshooting

| Problem | Fix |
|---|---|
| `EADDRINUSE :::5173` | The server is already running (or another app owns the port). Kill the old process or change `PORT`. |
| Radar or map tiles missing | An ad blocker, VPN, or school/work firewall may block tile servers — whitelist `rainviewer.com`, `openstreetmap.org`, and `unpkg.com`. |
| "Use my location" does nothing | Allow location permissions in your browser settings. |

## 📄 License

[MIT](LICENSE) — free to use, modify, and share.

