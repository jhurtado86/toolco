# brand_assets/ — required client assets

Drop the real client files here using the **exact filenames** below. Until a file exists,
the template ships that slot on `https://placehold.co/WxH` at the final dimensions, so the
site is never broken — it just shows a placeholder. Replacing a placeholder is a
find-and-replace of the `placehold.co/WxH` URL with the root-relative `/brand_assets/…`
path; **alt text is already written in final form and must not change on swap.**

All paths are root-relative (`/brand_assets/…`).

## Named background slots — dedicated files ONLY (never a content/gallery photo)

| File | Ratio | Dimensions | Used by |
|---|---|---|---|
| `hero-background.jpg` | 16:9 | 1920×1080 | Hero background on every page (incl. `about.html`, `thank-you.html`) |
| `cta-background.jpg` | 16:9 | 1920×1080 | Final-CTA background on every page with a final-CTA |

> These two slots are marked `<!-- OFF-LIMITS: … -->` in the HTML. A client content photo
> or gallery image is **never** promoted into either one.

## Social / Open Graph

| File | Ratio | Dimensions | Used by |
|---|---|---|---|
| `og-image.jpg` | 1.91:1 | 1200×630 | `og:image` + `twitter:image` on every indexable page |

## Content photos — uniform container (`.photo-frame`)

Every content photo uses the shared `.photo-frame` class (one ratio site-wide). Export at
these sizes:

| Type | Ratio | Dimensions | Notes |
|---|---|---|---|
| Content photo (standard) | 4:3 | 1200×900 | Service/city/about body photos |
| Owner / people portrait | 3:4 | 900×1200 | `.photo-frame--portrait`, top-anchored (`about.html` owner slot) |

### Photo-tier counts (how many content photos per page)

| Page | Content photos |
|---|---|
| Flagship service (`service-one.html`) | 5 |
| Standard service (`service-two`…`six`) | 2 each |
| City page (`areas/city-*.html`) | 1 each |
| `about.html` | 2 body + 1 owner portrait (3:4) |

## Optional (per client, not shipped by default)
- Logo(s), favicon, and any gallery-module photos (gallery stays blocked until real photos exist).

---

## Tool Co asset inventory (build state, 2026-09-07)

All web exports below are Kim-shot, metadata-stripped (no EXIF/GPS/FBMD), sRGB, lowercase
descriptive names. Raw originals (`*_n.jpg`, `home*.jpg`, `home1.JPEG`) are gitignored —
only these exports get committed. **One photo, one slot.**

**Placed (homepage):** `hero-background.jpg` (hero poster) · `hero-video.mp4/.webm` ·
`intro-truck-exterior.jpg` (intro split) · `truck-interior.mp4/.webm` + `truck-interior-poster.jpg`
(inside the truck) · `toolboxes-stacked.jpg` (financing split, portrait cover-cropped to 4:3) · `catalog-new-ratchets.jpg`
(catalog) · `areas-truck-loaded.jpg` (areas, portrait 3:4).

**Ready to backfill (unplaced; suggested slot):**
`floor-jacks.jpg` (1:1) → Mobile Tool Service body · `jump-starters.jpg`, `drawer-pliers.jpg`,
`hammer-set.jpg` (4:3) →
Professional Tool Solutions body · `roll-cab-white.jpg`, `tool-cart-red-open.jpg`,
`service-cart-purple.jpg` → Tool Financing body · `socket-rails.jpg`, `socket-set-closeup.jpg`,
`toolboxes-show-floor.jpg`, `toolbox-special-edition.jpg` (portrait), `financing-tool-carts.jpg` (4:3) →
About / Team 3:4 slots or city pages (cover-cropped).

**Do not place (excluded types, regardless of who shot them):** `home3.jpg` (Massachusetts State
Police fleet patch → not Tool Co's truck), the Snap-on box photos and the lift-gate Snap-on cab
(competitor branding + readable plate), the lime ARCA cab on white (Cornwell studio render), the
cart photo showing another dealer's name and phone on a wrap, `home2.webp` (Cornwell product
shot), `poster.png` (Cornwell flyer). All are gitignored.

**Placed (Mobile Tool Service page):** `service-cart-purple.jpg` · `tool-trays-display.jpg` · `floor-jacks.jpg` · `hammer-closeup.jpg` · `drawer-pliers.jpg`.

**Placed (catalog.html, 2026-09-13):** `socket-rails.jpg` (portrait 1152×1720, cover-cropped to the 4:3 frame). About/Team slots are placeholders pending Kim's shots (`about-dealer-at-truck.jpg`, `about-truck-exterior.jpg`, driver headshots 900×1200).

**RETIRED (client decision, never place again; gitignored):** `torque-wrench-set.jpg`.

**AI-GENERATED STAND-INS (2026-09-13, client override of the real-photo-only default for launch):**
`hero-background-interior.jpg` (1376×768, 71KB, q82 progressive) — hero on every page EXCEPT the homepage (3 services, 5 cities, about, team, catalog; thank-you stays on `hero-background.jpg`). `cta-background.jpg` (1376×768, 68KB) — final-CTA slot on all 12 indexable pages. Both are generated navy/chrome/blue-flame art with no text or logos; both are under 1920×1080 so they upscale ~1.4× at 1920 wide and ~2× on 2× displays (soft, acceptable for stand-ins). Originals kept as gitignored `*-raw.jpg`. Contrast verified with text hidden: hero H1 ≥ 8.9:1, hero sky accent ≥ 5.2:1, CTA muted row ≥ 6.0:1 (existing overlays unchanged). SWAP each for Kim's real horizontal truck shot at 1920×1080 under the same filename; the HTML comments in each slot mark them.

**Still pending:** real `cta-background.jpg` + interior-hero shot (horizontal shots of Kim's own truck, replacing the stand-ins above), `og-image.jpg`
(1200×630), driver headshots (3:4), a horizontal driving clip for the areas slot.
