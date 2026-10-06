# B Manoj — Game Designer Portfolio

**Live site:** https://bmanoj07112004-eng.github.io/B-Manoj-Portfolio/
**Resume (PDF):** [assets/B-Manoj-Game-Designer-Resume.pdf](assets/B-Manoj-Game-Designer-Resume.pdf)

Game Designer with 3.5 years of hands-on game design and development. Lead Game Designer and
co-developer of [BLACKOUT ARENA](https://store.steampowered.com/app/4158710/BLACKOUT_ARENA/),
an Unreal Engine 5 action-adventure released on Steam (15 April 2026).

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | Portfolio page (hero, Blackout Arena case study, more work, skills, about, contact) |
| `css/style.css` | All styling |
| `js/projects.js` | **"More work" cards — add new games here** |
| `js/main.js` | Nav, video player, screenshot lightbox, scroll animations |
| `resume/index.html` | Resume source (A4, print-ready). Also viewable online at `/resume/` |
| `assets/` | Resume PDF, photos, favicon |

Plain HTML/CSS/JS with no build step. GitHub Pages serves it straight from `main`.

## Updating the resume PDF

Edit `resume/index.html`, serve the folder locally, then print it with Chrome:

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --no-pdf-header-footer --virtual-time-budget=15000 --print-to-pdf="C:\path\to\B-Manoj-Portfolio\assets\B-Manoj-Game-Designer-Resume.pdf" "http://localhost:5173/resume/"
```

Keep it to one A4 page.
