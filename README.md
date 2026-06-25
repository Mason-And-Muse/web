# Mason & Muse, LLC - website

Website for **Mason & Muse, LLC**, an independent app studio in Vermont, served
via GitHub Pages at [masonandmuse.com](https://masonandmuse.com).

## Contents
- `index.html` - home page (hero, what we do, featured app).
- `about.html` - studio story, values, and approach.
- `apps.html` - our apps, including *Oh My Groceries!*.
- `contact.html` - contact details and company info.
- `privacy.html` - privacy policy (also linked from the App Store listing).
- `styles.css` - shared design system used by every page (no build step).
- `favicon.svg` - site icon.
- `CNAME` - custom-domain config for GitHub Pages (`masonandmuse.com`).
- `.nojekyll` - serve files as-is, skipping the Jekyll build.

## Local preview
No build step or dependencies - just serve the folder:

```sh
python3 -m http.server 8000
```

Then open <http://127.0.0.1:8000/>.

## Deploying
Static site - GitHub Pages serves the repository root directly. Publishing
happens when the configured Pages branch is pushed to GitHub.
