# Minimalist Markdown Word Processor PWA

An elegant, browser-native, local-first word processor designed to handle Markdown text formatting with a built-in automated tiered archiving engine.

## 🌟 Architectural Features
- **Markdown Rendering Engine:** Leverages `marked.js` inside a real-time responsive split pane layout.
- **PWA Capabilities:** Production setup containing an autonomous `manifest.json` and basic service worker definition allowing instant setup across platforms.
- **Dynamic Microanalytics:** On-the-fly execution tracking word count updates and basic telemetry.
- **Advanced Tiered Auto-Saves:**
  - Saves increments every minute for the first 15 minutes.
  - Automatically graduates older versions into hourly and subsequent daily blocks.
  - Capped to retain exactly 30 instances maximum, preserving memory through strict rolling FIFO replacement.

## 🚀 Deployment instructions
1. Clone or copy these code assets into a repository.
2. Supply a generic `icon.png` canvas image matching `512x512`.
3. Enable **GitHub Pages** targeting root access.
