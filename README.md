# QSE PhD School

Official landing page for the second QSE PhD School, **6-8 September 2027**, in Bertinoro, Italy.

## Website

https://qse-phd-school.github.io/

This is a static website with no build dependencies. The site files live at the root of the `main` branch:

- `index.html`: page content
- `styles.css` and `announcement.css`: site styling
- `announcement.js` and `config.js`: updates-form link handling
- `images/`: local image assets

To update the registration-interest link, change `googleFormUrl` in `config.js` and the no-JavaScript fallback links in `index.html`.

## Deployment

On each push to `main`, `.github/workflows/deploy-pages.yml` publishes the website through GitHub Actions.

**Required one-time repository setting:** In **Settings > Pages**, set **Build and deployment > Source** to **GitHub Actions**. The repository must also be eligible for GitHub Pages (it is public as of 14 October 2026).

Check deployments under **Actions > Deploy QSE PhD School website**. The published site should be available at the link above after a successful run.

The source files are already at the repository root; no `dist/` directory or build command is needed.
