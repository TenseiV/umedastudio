# Umeda Studio Portfolio Website

This repository contains the source code for the Umeda Studio portfolio website, built with [Astro](https://astro.build/).

## ✨ Features

- Minimalist design focused on showcasing work.
- Built with Astro for optimal performance.
- Deployed via GitHub Pages.

## 🚀 Project Structure

```text
/
├── public/
│   └── .nojekyll         # Ensures GitHub Pages serves files starting with _
├── dist/                 # Build output directory (generated)
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   └── pages/            # Site pages (routes)
├── astro.config.mjs      # Astro configuration file
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

- **`public/`**: Static assets. The crucial `.nojekyll` file resides here.
- **`src/`**: Main application code (pages, components, layouts).
- **`dist/`**: Production build output. This directory is pushed to the `gh-pages` branch during deployment.
- **`astro.config.mjs`**: Contains Astro configuration, including `site` and `base` options necessary for GitHub Pages deployment.
- **`package.json`**: Lists dependencies and defines NPM scripts, including `dev`, `build`, and `deploy`.

## 🛠️ Setup and Development

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd umedastudio
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:4321`.

## 🏗️ Building for Production

To create a production-ready build:

```bash
npm run build
```

This command generates the static site files in the `dist/` directory.

## 🚀 Deployment to GitHub Pages

This project uses the `gh-pages` package to deploy the built site (`dist/` directory) to the `gh-pages` branch of this repository.

**Prerequisites:**

1.  **`gh-pages` dependency:** Ensure `gh-pages` is listed in `devDependencies` in `package.json`.
2.  **`.nojekyll` file:** A `.nojekyll` file must exist in the `public/` directory. This prevents GitHub Pages from ignoring directories starting with underscores (like `_astro`), which is essential for the site to function correctly.
3.  **`astro.config.mjs`:** The `site` and `base` options must be correctly configured for your GitHub Pages URL.
4.  **GitHub Pages Settings:** Configure your repository's GitHub Pages settings to deploy from the `gh-pages` branch.

**Deployment Command:**

```bash
npm run deploy
```

**What this command does:**

1.  Runs `npm run build` to generate the production site in `dist/`.
2.  Uses `gh-pages` to push the *entire* contents of the `dist/` directory to the `gh-pages` branch.
3.  The `--dotfiles` flag is included in the `deploy` script in `package.json` to ensure hidden files like `.nojekyll` are copied during deployment.

After running `npm run deploy`, GitHub Pages will automatically serve the updated site from the `gh-pages` branch.
