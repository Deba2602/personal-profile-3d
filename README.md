# Debapratim Deka 3D Web Profile

This is a static portfolio site designed to present Debapratim Deka as a recruiter-facing machine learning and data science professional with a 3D visual identity.

## Structure

- `index.html`: Main page layout and semantic content regions
- `assets/css/styles.css`: Visual system, responsive layout, animation, and 3D styling
- `assets/js/data.js`: Resume content and site data
- `assets/js/main.js`: Rendering logic, motion effects, and animated background

## Local Preview

You can open `index.html` directly in a browser for a quick preview.

If you want to run a local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize

The easiest place to update content is `assets/js/data.js`.

Recommended edits:

- Add exact LinkedIn URL
- Add exact GitHub URL
- Refine resume bullets if you want more domain detail
- Add a downloadable PDF resume link if desired

## Free Deployment Options

- Vercel
- Netlify
- GitHub Pages

All three work because this project is a plain static site with no build requirement.
