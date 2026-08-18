# Aerotemp Pro Website

A production-ready single-page website for Aerotemp Pro, an HVAC business serving the El Paso and Las Cruces region. The site is built with React, Vite, JavaScript, and plain CSS and is configured for GitHub Pages deployment through GitHub Actions.


## Structural Reference

Each major section has its own folder, JSX file, and matching CSS file. Repeated business data is centralized in `src/utils/constants.js`.

## Technologies

- React
- Vite
- JavaScript / JSX
- Plain CSS
- GitHub Actions / GitHub Pages

## Install and Run

```bash
npm install
npm run dev
```

## Lint

```bash
npm run lint
```

## Production Build

```bash
npm run build
```

Vite outputs the production build to `dist/`.

## GitHub Pages Deployment

The project uses `base: "./"` in `vite.config.js`, which keeps static assets portable when the site is served from a GitHub Pages project subdirectory.

1. Create a repository named `aerotemp-pro` under the `thegrindnet` GitHub account.
2. Add the project files and push them to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. The included `.github/workflows/deploy.yml` workflow will run on pushes to `main`, install dependencies with `npm ci`, build the Vite project, and deploy `dist/`.

Expected project URL:

`https://thegrindnet.github.io/aerotemp-pro/`

If you use a different repository name, the site assets will still work because Vite uses a relative base path. Update the Open Graph URL values in `index.html` and this README to match the final repository URL.

## Business Information

Business information, services, navigation labels, review text, and links are stored in:

`src/utils/constants.js`

## Images

Supplied images are optimized to WebP and stored in:

`src/assets/images/`

- `aerotemp-pro-logo.webp`
- `aerotemp-pro-contact-card.webp`
- `instagram-profile.webp`
- `outdoor-condenser.webp`
- `attic-hvac-installation.webp`
- `attic-ventilation-unit.webp`
- `hvac-compressor-service.webp`
- `duct-ventilation-detail.webp`
- `indoor-furnace-installation.webp`
- `attic-unit-service.webp`

The favicon and Open Graph preview image are in `public/`.

## FAQ Note

No FAQ content was supplied, so an FAQ section is intentionally omitted rather than inventing business-specific policies or answers.

## Project Structure

```text
aerotemp-pro/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.png
│   └── og-image.jpg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── .gitkeep
│   │   └── images/
│   │       ├── aerotemp-pro-contact-card.webp
│   │       ├── aerotemp-pro-logo.webp
│   │       ├── attic-hvac-installation.webp
│   │       ├── attic-unit-service.webp
│   │       ├── attic-ventilation-unit.webp
│   │       ├── duct-ventilation-detail.webp
│   │       ├── hvac-compressor-service.webp
│   │       ├── indoor-furnace-installation.webp
│   │       ├── instagram-profile.webp
│   │       └── outdoor-condenser.webp
│   ├── components/
│   │   ├── About/
│   │   ├── App/
│   │   ├── Contact/
│   │   ├── Financing/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── MobileActions/
│   │   ├── Navigation/
│   │   ├── ServiceArea/
│   │   ├── Services/
│   │   └── Testimonials/
│   ├── utils/
│   │   └── constants.js
│   ├── vendor/
│   │   └── normalize.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
