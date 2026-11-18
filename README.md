# Asmaa Atef Eliwaa — Network & Infrastructure Engineer Portfolio

Personal portfolio of **Asmaa Atef Eliwaa**, a Network & Infrastructure Engineer (3+ years: NOC operations, LAN/WAN, BGP, FortiGate, Linux, VMware vSphere) expanding into **Microsoft Azure and Cloud Networking**.

Live site: https://asmaabasher.github.io/Network_Engineer/

## Tech

Plain static website, no build step and no dependencies:

- `HTML` + `CSS` + a small vanilla `JavaScript` file
- Inline SVG icons and network diagrams (no image downloads needed)
- Works on GitHub Pages as-is

## Project structure

```
.
├── index.html                 # The whole site (all sections)
├── 404.html                   # Custom "page not found"
├── assets/
│   ├── css/styles.css         # All styles (colors defined at the top in :root)
│   ├── js/main.js             # Mobile menu, active link, back-to-top, scroll reveal
│   ├── cv/Asmaa_Atef_Eliwaa_CV.pdf
│   └── img/                   # favicon.svg, favicon-32.png, apple-touch-icon.png, og-image.png
├── robots.txt
├── sitemap.xml
├── .nojekyll                  # Tells GitHub Pages to serve files as-is
└── README.md
```

## Run locally

No installation is needed. Either:

1. **Quickest:** double-click `index.html` to open it in a browser, or
2. **Recommended (behaves exactly like GitHub Pages):** from the project folder run

   ```bash
   python3 -m http.server 8000
   ```

   then open http://localhost:8000

   (Or with Node: `npx serve .`)

## Build

There is no build step. Edit the files and refresh the browser.

## Deploy to GitHub Pages

This site replaces the current `index.html` in the `AsmaaBasher/Network_Engineer` repository.

1. **Back up the current version** (optional but recommended):
   ```bash
   git clone https://github.com/AsmaaBasher/Network_Engineer.git
   cd Network_Engineer
   git checkout -b backup-old-site && git push origin backup-old-site
   git checkout main
   ```
2. **Replace the files:** delete the old `index.html` and copy in everything from this project (including the hidden `.nojekyll` file and the `assets/` folder).
3. **Commit and push:**
   ```bash
   git add -A
   git commit -m "New portfolio: network infrastructure to cloud networking"
   git push origin main
   ```
4. **Check Pages settings:** GitHub → repository → **Settings → Pages**.
   - If **Source** is **Deploy from a branch**: choose `main` and `/ (root)`.
   - If **Source** is **GitHub Actions**: the existing workflow in `.github/workflows/` must upload the repository root as the site. Open the workflow and make sure its `upload-pages-artifact` step uses `path: .` (or the root). If it runs an `npm` build, switch Source to **Deploy from a branch** instead, since this site has no build.
5. Wait 1–2 minutes, then open https://asmaabasher.github.io/Network_Engineer/ and hard-refresh (Ctrl/Cmd + Shift + R).

> The site uses relative paths, so it works under `/Network_Engineer/`. If you move it to a different repository name, update the absolute URLs in `index.html` (canonical, Open Graph, `og:image`), `404.html`, `robots.txt` and `sitemap.xml`.

## Updating content

| What | Where |
|---|---|
| CV file | Replace `assets/cv/Asmaa_Atef_Eliwaa_CV.pdf` (keep the same file name) |
| LinkedIn link | Hidden until the URL is known. In `index.html` search for `PLACEHOLDER — LinkedIn`, put in the real URL and remove the comment markers |
| Azure labs | In `index.html`, section `id="labs"`: each lab has a comment showing where to add steps, a screenshot and the GitHub link (replacing the "in progress" line) |
| AZ-900 status | Certifications section + "At a glance" card + learning path, once the exam is passed |
| Colors | Top of `assets/css/styles.css` (`:root`) |
| Social preview image | `assets/img/og-image.png` (1200 × 630) |

## Content rules

All content comes from the CV. Azure is shown as **learning / guided lab practice**, not production experience, and AZ-900 is shown as **not yet certified** until it is passed.
