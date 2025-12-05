# AdShark Landing Page

A production-ready single-page landing website built with React and Vite.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

- `src/components/HeroLanding.jsx` - Hero landing page component
- `src/components/HeroLanding.css` - Hero component styles
- `src/components/AttributionProblem.jsx` - Attribution problem section component
- `src/components/AttributionProblem.css` - Problem section styles
- `src/App.jsx` - App wrapper component
- `src/index.css` - Global styles and font imports
- `public/assets/` - Brand logo SVGs and placeholder images

## Customization

**To replace platform logo SVGs:** Edit the logo arrays in `HeroLanding.jsx` and `AttributionProblem.jsx` and replace the SVG files in `public/assets/` with official brand logos (amazon.svg, google.svg, shopify.svg, meta.svg, tiktok.svg).

**To replace the portrait image:** Add a `person.jpg` file to `public/assets/` directory. The component will automatically use it, or fall back to the placeholder SVG if the image is not found.
