# DJ_Cheesus — links

Single-page link-in-bio for DJ_Cheesus, with a live Twitch player for
`dj_cheesuslive` at the bottom.

Live at <https://socials.djcheesus.com>.

## Structure

```
index.html                  page markup
styles.css                  all styling
script.js                   random GIF favicon + Twitch embed
CNAME                       custom domain for GitHub Pages
icons/                      GIF pool for the random site icon
  manifest.json             generated list of the GIFs
assets/
  logo.svg                  logo / fallback favicon
  fonts/                    PxPlus IBM BIOS + SF Pro Display
  icons/                    social brand marks
tools/
  build-favicon-manifest.py regenerates icons/manifest.json
_archive/                   local originals (not uploaded)
```

## Adding a new site icon

Drop any `.gif` into `icons/`, then rebuild the manifest:

```
python tools/build-favicon-manifest.py
```

Commit both the GIF and `icons/manifest.json`. Each visit picks a random GIF
from the pool, and the same icon is never shown twice in a row.

When the page is opened from a local dev server that lists folders, new GIFs
are picked up even without a rebuilt manifest.
