# Gamebench

A personal archive of 19 games that gave me memories. Built with React + Vite, 100% static, deployable for free on GitHub Pages.

## Run locally
```bash
npm install
npm run dev        # development
npm run build      # production build into /dist
npm run preview    # test the production build
```

## Where to put things
| What | Where |
|---|---|
| Game info, requirements, screenshot list, **My Experience** | `src/data/game-data.js` |
| My System, About Us, Gamebench page text | `src/data/site-content.js` |
| Images | `public/assets/<game-id>/{game-cover,main-image,screenshots}/` |
| Galaxy Book 4 photo | `public/assets/my-system/galaxy-book-4.jpg` |

Text that starts with `[PLACEHOLDER]` is shown with a dashed placeholder style. Replace it with your own text (blank line = new paragraph).

### Image names
- Cover (homepage card): `game-cover/game.jpg` (4:3 landscape looks best, other ratios are cropped to fit)
- Main image (game page): `main-image/game.jpg` (shown at its natural aspect ratio)
- Screenshots: `screenshots/screenshot-01.jpg`, `screenshot-02.jpg`, ...

Each game entry starts with 3 screenshot paths via `shots("<id>", 3)`. After adding files, change `3` to your real count. Different extension? Pass it as the third argument, `shots("gta-5", 8, "png")`, or override `cover` / `mainImage` with the exact path. The extension must match the real file.

## Deploy free on GitHub Pages
1. Create a free GitHub account and a **public** repository (e.g. `gamebench`).
2. Upload this whole project (or `git push`) to the `main` branch.
3. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes automatically on every push.
5. Your site appears at `https://<username>.github.io/<repository>/` after a minute or two (see the **Actions** tab).

Why it works under a repository path: `vite.config.js` sets `base: "./"`, all image paths start with `./assets/`, and pages use `#/hash` URLs, so there are no server rewrites or absolute paths to break.

## Requirements to double-check
Minimum requirements were collected from official or widely mirrored listings. Where I could not confirm a value it is marked as a placeholder: Just Cause 2 (video card), Tomb Raider 2013 (RAM), Alien Isolation (video card), PES 2013 (all four), Contraband Police (CPU, video card). Please also re-check against each game's Steam/publisher page, especially Kena, Tomb Raider 2013, Just Cause 2, Alien Isolation, FIFA 17 and Far Cry New Dawn, since listings change between editions.
