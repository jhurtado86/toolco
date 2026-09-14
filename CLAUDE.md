# CLAUDE.md — Tool Co (Cornwell dealer) website

Forked from `CLAUDE-SKELETON.md`. This is a **franchise/dealer brochure + catalog build**,
NOT the standard Nexor home-services lead-gen build. Where this file diverges from the
home-services skeleton, the divergence is intentional and marked **[DEALER-BUILD]**.

Two layers, same as always:
- **FROZEN** — proven Nexor conventions, identical across builds. Improve them *here* and
  roll forward; never fork silently.
- **`[NEEDS INPUT — …]`** — a client fact to confirm. Do NOT invent. `[DECIDE — …]` = a
  judgment call to resolve at strategy lock. `[DERIVE — …]` = computed from an asset.

---

## BUILD STATE (resume here) — updated 2026-09-13

Fresh session? Start here. Everything below is on disk and **UNCOMMITTED** (57 entries in `git status`:
15 modified, 8 deleted template stubs, 34 untracked new pages/assets). No commit has been made since
`9a85c01` — the client-layer CLAUDE.md, all pages, and all brand_assets exports are working-tree only.
Local server: `PORT=3100 node serve.mjs` (3000 belongs to another project); it does not survive sessions.

- **DONE + reviewed (2 rounds):** homepage `index.html`; flagship `services/mobile-tool-service.html`
  (= service-page template).
- **DONE, wired site-wide (all 12+ pages):** GHL integration — number (956) 450-7963 / `+19564507963`
  (every display, every `tel:`, homepage schema `telephone`), contact form `iIe3HWhzFwKdqSbAMIZu`
  (homepage, 697px container + form_embed.js), chat widget `6a983977d3b1e172e082a76c` (before `</body>`),
  tracking `tk_4cfa8e42c7bd4049b28228542b84a8f7` (in `<head>`). **Personal 541 number: CONFIRMED zero
  hits in every deployable file (html/css/js/xml/txt); the only occurrences are this file's own rule text.**
  Manual GHL-builder items still open: form heading reads "GET A FREE QUOTE" (rename to "Get on the Route"),
  form field width, SEND button contrast (white on sky), chat prompt auto-opens over the mobile hero CTA.
- **DONE, verified:** Prompt 3 — `services/professional-tool-solutions.html` (tier 2) and
  `services/tool-financing.html` (tier 1), condensed per the no-empty-frames rule; template
  `service-one..six.html` stubs deleted. **CONFIRMED: homepage `hasOfferCatalog` = 3 == 3 live service pages.**
- **DONE, gate (2 rounds):** Prompt 4 — `areas/edinburg.html` (city template; four CITY-SWAP zones,
  SHARED ZONE markers, LocalBusiness ref + FAQPage + BreadcrumbList, one tier photo).
- **IN PROGRESS:** Prompt 5 — city clones `areas/weslaco.html`, `pharr.html`, `alamo.html`,
  `san-juan.html` built from the template (zones only; per-page metadata/schema/hero text/photo).
  Already verified before the last session ended: shared blocks (both dropdowns, stylesheet, final CTA,
  footer, nav, script) hash **byte-identical** across all 5 city pages and match the homepage + service
  pages; footer `aria-current` applied on all 5 (yes); Weslaco description trimmed
  to 155; 5-word-shingle uniqueness of main content 73–78% vs Edinburg and 68–75% vs all other city pages
  (well past the 30–40% floor); schema/FAQ/breadcrumb/aria-current/asset checks pass on all 4.
  **OPEN ITEMS TO RESUME:**
    1. Meta descriptions over 160 on Pharr (180), Alamo (168), San Juan (164) — trim under 160.
    2. Visual review of the 4 clones (desktop/mobile) still pending — frozen screenshots exist:
       `temporary screenshots/screenshot-1-{weslaco,pharr,alamo,san-juan}.png` (+ `-mobile.png`);
       read them back, fix anything real, one round + click-through each.
    3. Composite crops for that review were built in the session scratchpad (may be gone) — regenerate
       from the frozen PNGs with `sips` if needed.
- **NOT STARTED:** Prompt 6 (`about.html`, `team.html`, `catalog.html`, `thank-you.html` rebuilt on the
  new system — the current about/thank-you/areas/city-*.html files are template skeletons still linking
  to the deleted service stubs and template city slugs); Prompt 7 (audit); Prompt 8 (asset swap).
  Also delete the six template `areas/city-one..six.html` stubs when Prompt 6 lands.
- **STILL BLOCKED / pending assets:** real photos from Kim beyond the confirmed batch (all remaining slots
  are placeholder or pool photos); `cta-background.jpg` (needs a landscape shot of Kim's truck; slot stays
  on placehold.co); `og-image.jpg` 1200×630 (launch-blocking); favicon; email address; route hours;
  `sitemap.xml` + `robots.txt` still on the template host and old slugs — rewrite to
  `https://www.toolcorgv.com` with the real page list before launch; add a `.vercelignore` for
  CLAUDE.md / CONTENT-VOICE.md / raw brand_assets so a static deploy never serves this file.

---

## What This Is — [DEALER-BUILD]

This is the **Tool Co** website — an **independent Cornwell Quality
Tools franchise (mobile dealer)** serving the Rio Grande Valley. The goal is a
**professional presence + credibility site with a monthly-catalog hook**, not a
map-pack emergency-lead machine. There are no emergency searches to catch and no
quote-intake funnel; the win is looking established, trustworthy, and clearly local, and
giving commercial shop owners an easy way to reach the route and see this month's catalog.

Keep the Nexor design system, section rhythm, nav pattern, dark sections, footer layout,
and craft standards intact — only the **architecture, voice, and page set** change for
this build (see "[DEALER-BUILD] Architecture").

Trade: **Mobile tool dealer / Cornwell franchise.** Audience: **commercial business & shop
owners** (the buyers, who also make the financing decision) and the **technicians** who
use the tools day to day. Copy speaks to both — equip your shop / your crew, and we come
to you.

Treat any remaining `[NEEDS INPUT]` as fill-in-the-blank. Confirm with the client / Juan
before filling. Nothing inferred.

---

## Cornwell franchise / IP guardrails — FROZEN [DEALER-BUILD]

The client is a **legitimate Cornwell franchisee** and the site may identify them as an
authorized Cornwell dealer. But this is an **independent dealer site, not a Cornwell
corporate property.** Hard lines:

- **Never reproduce Cornwell's website copy, photos, truck imagery, or catalog pages.**
  Those are Cornwell's copyrighted assets. Reference the brand; write original copy.
- **Cornwell®, blueION™, GearZ®, "Choice of Professionals," NHRA marks** are Cornwell's.
  Use the brand name factually ("authorized Cornwell dealer"); do not present the site as
  official Cornwell corporate, and do not fabricate Cornwell logos or partner logos.
- **`[NEEDS INPUT — Cornwell franchisee brand/web guidelines]`** — confirm whether Cornwell
  has an approved brand kit, required logo lockup, mandated disclaimer, or rules about
  franchisee independent sites. If a kit exists, it **overrides** derived colors/logo here.
- **Catalog = link, never rehost.** The monthly flyer is Cornwell IP and changes monthly.
  See "Catalog handling" below.
- **Founder heritage is Cornwell's, not the client's.** "Cornwell, building tools since
  1919" is brand heritage that may be referenced as brand context. It is NOT this dealer's
  business age. The dealer's own start year is separate — `[NEEDS INPUT]`, never conflated.

---

## Catalog handling — FROZEN [DEALER-BUILD]

The "This Month's Catalog" page is a **feature that links out** to Cornwell's hosted flyer
and online catalog — it does not host, embed, or reproduce the flyer PDF/images.

- **Catalog / "inventory" link target (LOCKED):** the generic Cornwell online catalog —
  `https://webcat.cornwelltools.com/` (a full Lightspeed catalog Cornwell hosts + maintains).
  A link stays current automatically. No dealer-specific webcat storefront now; swap to one
  later only if Kimberley obtains it (a one-link swap).
- **Button / nav label:** "View Inventory" (client preference). Note: for a no-stock mobile
  dealer "Shop the Catalog" is more literally accurate — trivial to swap; destination is the
  same either way.
- The separate monthly promo flyer is the GHL-distributed piece, not hosted on-site.
- On-page copy is **original framing** (what the catalog is, who it's for, how to get it on
  the route) so the page isn't thin — never a copy-paste of Cornwell's catalog text.
- The **monthly marketing push (email/SMS of the new flyer) is GHL's job**, not the
  website's. Website displays + points; GHL markets. `[NEEDS INPUT — GHL catalog automation]`.
- Schema: BreadcrumbList only. NOT `Service`. NOT `ImageGallery`. Index/follow.

---

## Resolved token reference — FILL PER CLIENT

| Token | Resolved value |
|---|---|
| Business name | Tool Co (short brand: Tool Co) |
| Service pages (3) | Mobile Tool Service · Professional Tool Solutions · Tool Financing & Payment Options |
| service slugs | `mobile-tool-service` · `professional-tool-solutions` · `tool-financing` |
| Folded-in (sections/FAQ, not pages) | Regular Shop Visits · Warranty & Service Assistance |
| Primary city (home / NAP anchor) | **Edinburg** |
| City 2 … City 5 | Weslaco · Pharr · Alamo · San Juan `[DECIDE — order after Edinburg; volume data thin]` |
| city slugs | `edinburg` · `weslaco` · `pharr` · `alamo` · `san-juan` |
| Region | Rio Grande Valley, South Texas (Hidalgo County) |
| Phone (site) | **(956) 450-7963** — GHL tracking number (confirmed). `tel:` / E.164 / schema `telephone`: **`+19564507963`** |
| Email | [NEEDS INPUT] |
| Domain | `toolcorgv.com` — canonical host **`https://www.toolcorgv.com`** (www; set as Vercel Primary day one) |

> ⚠️ **Email domain may differ from website domain.** Both can be correct — don't "fix" one
> to match the other, never build a URL off the email domain. Confirm.

---

## Brand color system — FROZEN methodology, VALUES LOCKED from logo [DEALER-BUILD]

Palette is **derived from the final client logo** (the "Tool Co" flame/mascot mark →
`brand_assets/logo.png`). The blue values below were **extracted directly from that file**
(source-traceable, not guessed). Define once via CSS custom properties + Tailwind
`theme.extend.colors`; never hardcode hexes per page. Neutrals (steel/ink/muted) aren't in
the logo → `[DERIVE]`.

| Token | Hex | Role |
|---|---|---|
| `--color-primary` | **#013074** (logo navy) | Dark hero/sections, footer, nav, primary buttons |
| `--color-primary-mid` | **#2768B1** (logo mid-blue) | Hover, secondary buttons, borders on dark |
| `--color-accent` | **#4EA5F4** (logo sky blue) | Icons, link accents, eyebrow, highlights on dark |
| `--color-accent-bright` (CSS token name; "accent-light" in earlier notes) | **#70B9FB** (logo light sky) | The on-DARK accent: eyebrows, heading spans, checks, step numbers on `--color-dark` (6.0:1) |
| `--color-accent-deep` | **#2768B1** | On-light fallback for the sky accent (see rule) |
| `--color-tint` | **#C7E4FA** (logo pale blue) | Subtle fills / dividers / glow on dark |
| `--color-silver` / neutral | [DERIVE — tool-steel gray, ~#8A94A3] | Muted borders, secondary text on dark, chrome |
| `--color-dark` (canonical) | **#013074** (= primary) | THE single dark-section background token |
| `--color-ink` | [DERIVE — near-black, ~#0E1726] | Headings/body |
| `--color-bg` | `#FFFFFF` | Body/content backgrounds |
| `--color-muted` | [DERIVE — ~#5A6472] | Muted/secondary text |

**FROZEN rules:**
- All blues above are **extracted from the actual logo file**, NOT default Tailwind
  blue/indigo/sky/cyan — those remain banned. Drive every shade from these tokens.
- **No red, no gold.** The final logo is navy + sky blue + white only. (The embroidered
  shirt used gold text; the final recreated logo dropped it — the logo wins.)
- **Accent-on-light fallback:** #4EA5F4 / #70B9FB on white = low contrast → use
  `--color-accent-deep` (#2768B1) or navy for small text/dividers on white.
- **One canonical dark token:** `--color-dark` = #013074, the only dark-section background.
- A **steel/chrome silver** neutral suits a tools brand and is encouraged as the neutral token.
- Re-confirm against any Cornwell-approved brand kit if one is later provided (may override).

---

## Integration placeholders — FROZEN insertion points, DECIDE per client

- `<!-- GHL CONTACT FORM EMBED -->` — **CONFIRMED: "Website Form", form id `iIe3HWhzFwKdqSbAMIZu`**, inline
  iframe (`https://api.leadconnectorhq.com/widget/form/iIe3HWhzFwKdqSbAMIZu`, `data-height` 697) inside a
  container with a defined height (697px min, responsive) + `https://link.msgsndr.com/js/form_embed.js`
  before `</body>` on the page that carries the form. GHL embed only, never a custom form.
- `<!-- GHL CHAT WIDGET SCRIPT -->` — **CONFIRMED:** `https://widgets.leadconnectorhq.com/loader.js` with
  `data-widget-id="6a983977d3b1e172e082a76c"` (before `</body>`, EVERY page — lives in the shared footer block).
- `<!-- GHL EXTERNAL TRACKING SCRIPT -->` — **CONFIRMED:** `https://link.msgsndr.com/js/external-tracking.js`
  with `data-tracking-id="tk_4cfa8e42c7bd4049b28228542b84a8f7"` (in `<head>`, EVERY page — shared head block).
- **Embed colors are a MANUAL GHL step:** form submit button (sky `#4EA5F4` with navy text, or navy on a
  light background) and chat widget (navy `#013074`) are set inside GHL's builder — never override
  embed styles with site CSS.
- `<!-- GHL REVIEW WIDGET EMBED -->` — **DELETE.** No Google Business Profile or reviews yet
  → no widget, stars, counts, or `aggregateRating` anywhere.
- `<!-- GOOGLE MAPS EMBED -->` — **DELETE. [DEALER-BUILD]** Service-area only, no public
  address → no map embed.
- `<!-- INSURANCE CARRIER LOGO ROW -->` — **DELETE.** N/A to this trade.
- `<!-- FINANCING SECTION -->` — **KEEP. [DEALER-BUILD]** Financing is a real offered
  service here (Tool Financing & Payment Options) and anchors its own page + a homepage section.
- Social share image: `brand_assets/og-image.jpg` (1200×630) — [NEEDS INPUT — create before launch].

---

## Template Sections to DELETE for this client — [DEALER-BUILD]

- Google Maps embed — **DELETE** (service-area, no address).
- Insurance carrier-logo row — **DELETE** (N/A).
- Review widget / star rating / review-count blocks — **DELETE until reputation confirmed.**
- Inventory / gallery page — **DELETE** (no physical inventory to display; the catalog is a
  link-out feature, not a gallery).
- Trust-badge pill row in the hero — **DELETE** by default (redundant with the eyebrow).
- Emergency / "call us now 24-7" urgency framing — **DELETE** (wrong intent for this trade).
- Quote-intake funnel framing — **REPLACE** with "reach the route / contact us / see the
  catalog" CTAs.
- Financing block — **KEEP** (real service — the one reversal from template default).

---

## Business Identity — FILL PER CLIENT (guardrails frozen)

- Business name / short brand: **Tool Co**. Recommended branded string for titles/schema:
  "Tool Co — Authorized Cornwell Dealer" (see naming note below).
- Industry / trade: **Mobile tool dealer — authorized Cornwell Quality Tools franchise.**
- Owner: **Kimberley + husband.** **FROZEN + client request:** owner names are **NOT
  published anywhere on the site** — no body copy, headings, meta/OG, About, or CTAs.
- Staff / team: **Drivers — [NEEDS INPUT — names + short bios + portrait headshots].**
  Confirmed there is a driver team; a "Meet the Team / Our Drivers" page is planned.
  **Never infer driver names/roles from social. Backfill from client-provided assets only.**
- Relationship claims: known to be a married couple, but **[DECIDE — default: NOT published].**
  Do not publish "family-owned," "husband and wife," or "couple" framing unless the client
  explicitly asks for it in writing. "Family-run" tone signal is safe; a relationship *claim*
  needs opt-in. (Note: Cornwell corporate calls *itself* "family and employee-owned" — that
  is Cornwell, not this dealer; do not borrow it.)
- Differentiator / ownership signal: [NEEDS INPUT — confirmed only. Cornwell has a veterans
  franchise program — do NOT claim veteran-owned unless confirmed.]
- **Experience framing — FROZEN + locked:** write **"30+ years of combined experience among
  our tool dealers."** Keep "combined" intact everywhere. It is a PERSONAL/team claim, never
  a business-age claim ("30 years serving Edinburg" is forbidden) and never per-person.
- Supplier / franchise relationship: **Authorized Cornwell Quality Tools franchisee** (see IP block).
- Physical address: **Service-area only — NO public address.** → schema OMITS PostalAddress;
  no maps embed; no walk-in language anywhere.
- Phone (site): **(956) 450-7963** — GHL tracking number, confirmed. Every `tel:` href and the schema
  `telephone` use E.164 `+19564507963`; human-readable displays as (956) 450-7963.
- Phone (owner personal — **NOT FOR PUBLICATION**): **541-720-6757** (Oregon area code,
  personal cell). Recorded ONLY so it's never mistaken for the site number. **Must return
  zero grep hits before deploy.**
- Email: [NEEDS INPUT]
- Domain + canonical host: **`toolcorgv.com`; canonical = `https://www.toolcorgv.com`** (www).
  Every absolute URL (canonical, og:url, sitemap `<loc>`) uses this one host. Set www as the
  Vercel Primary domain day one so the non-www → www redirect is live before indexing.
  [NEEDS INPUT — email address; its domain may differ, don't build URLs off it.]
- Founded / dealer start year: **OMIT — not published.** Client declined to provide; never
  state or compute a year, and never borrow Cornwell's 1919.
- Licenses / certifications: [NEEDS INPUT — publish none until confirmed].
- Official tagline: [NEEDS INPUT].
- Review / reputation status: **No Google Business Profile or reviews yet** → no widget,
  stars, counts, `aggregateRating`, or testimonials anywhere. Revisit only if a GBP + real
  reviews exist later. (A GBP is the single biggest local-SEO lever — recommended
  post-launch, but not a build blocker.)
- Price range: **Omit.** No `priceRange` published; route pricing intent to contact/financing.

### Key operational facts — [NEEDS INPUT unless noted]
- Service model: **Mobile — "we come to you / your shop."** Route-based.
- Service area: Edinburg, Weslaco, Pharr, Alamo, San Juan (+ [NEEDS INPUT — free-travel radius].)
- Intake method / primary CTA framing: **Contact us / get on the route / see this month's
  catalog** — never "Get a Free Quote." [NEEDS INPUT — exact CTA wording via GHL form.]
- Confirmed differentiators: personal, relationship-driven service; we come to you; 30+ years
  combined dealer experience; authorized Cornwell quality. [NEEDS INPUT — any others.]

### Hours — [NEEDS INPUT] (route/contact hours for `openingHoursSpecification`)

---

## Services — 3 pages [DEALER-BUILD]

**FROZEN methodology (unchanged):** service pages chosen for search intent + lead value;
minor services fold in as sections/FAQ. Here that yields **three** pages, not six.

- **Flagship (template page):** **Mobile Tool Service** — the core delivery model, highest
  intent, becomes the SERVICE-PAGE TEMPLATE (Prompt 2 gate).
- **Professional Tool Solutions** — helping shops/technicians spec the right tools.
- **Tool Financing & Payment Options** — speaks straight to the commercial buyer.
- **Folded in (sections/FAQ, not pages):** Regular Shop Visits, Warranty & Service Assistance.

> ⚠️ **FROZEN anti-cannibalization:** keep distinct intents on distinct pages. Don't blur
> "mobile service" (how we deliver) with "tool solutions" (what we help you choose).

---

## [DEALER-BUILD] Site Architecture — FROZEN structure, FILL the slugs

> ⚠️ **FROZEN — VERIFY BEFORE WRITING PATHS.** After cloning and before finalizing any path,
> run `find . -name "*.html"` and confirm the real tree matches. **Disk is source of truth.**

- Homepage `index.html`
- About `about.html`
- Meet the Team / Our Drivers `team.html` (drivers' headshots + bios — backfill; names off owners)
- This Month's Catalog `catalog.html` (links to Cornwell flyer/webcat — see Catalog handling)
- Contact / Thank-You `thank-you.html` (noindex, nofollow)
- 3 service pages under `/services/`: `mobile-tool-service` · `professional-tool-solutions` · `tool-financing`
- 5 city pages under `/areas/`: `edinburg` · `weslaco` · `pharr` · `alamo` · `san-juan`
- **NO inventory/gallery page. NO maps embed.**

### City priority — FROZEN methodology, FILL the order
Home city anchors the homepage + NAP. Deepest city page = template + first-indexed.
- **Edinburg** — home / NAP anchor AND deepest/template city (Prompt 4 gate).
- Then Weslaco → Pharr → Alamo → San Juan `[DECIDE — order soft; adjust on real volume/route data]`.

---

## Always Do First — FROZEN
Invoke the frontend-design skill before writing frontend code **if available** (may not be
installed in Claude Code — proceed without it if not).

## Content Writing Methodology — FROZEN [DEALER-BUILD]
For all page copy, read and follow **`CONTENT-VOICE.md`** (this build's tools-dealer voice
doc — it replaces the home-services `SEO-CONTENT-PROMPT.md`) in full before writing any
content. If wording ever conflicts with the technical rules below, `CONTENT-VOICE.md` wins
on wording; the rules below govern technical implementation.

---

## Local SEO Requirements — FROZEN (fill title/description tokens) [DEALER-BUILD schema]

**Per-page metadata (every page):** unique `<title>` <60 chars; unique `<meta description>`
<160 with service/offer + city + CTA; local `keywords`; `robots` index/follow with
max-image/snippet/video-preview; self-referential `canonical`; `<html lang="en">` + viewport.

**Open Graph + Twitter (every page):** og:title/description/url/type/image/locale/site_name;
twitter summary_large_image; images → 1200×630 (flag if not created).

**Structured Data (JSON-LD) — FROZEN patterns, [DEALER-BUILD] variant:**
- Homepage: `@type` **`LocalBusiness`** (service-area, no address) `[DECIDE — plain
  LocalBusiness vs a closer subtype; avoid `Store`, which implies a walk-in location they
  don't have]`. Include name, telephone (GHL), email, `openingHoursSpecification`,
  `areaServed` (full 5-city list), `hasOfferCatalog` (the 3 services). **NO `priceRange`.**
- **PostalAddress:** **OMIT entirely** — service-area business.
- **`aggregateRating`:** **OMIT** until real reviews are confirmed AND displayed.
- License numbers → `additionalProperty` (only once confirmed).
- **Service pages:** 3 blocks — `Service` + `FAQPage` (min 6 Q&As) + `BreadcrumbList`. No
  price/Offer amounts anywhere.
- **City pages:** 3 blocks — `LocalBusiness` ref (same `@id` as homepage, not re-declared) +
  `FAQPage` (min 4 city-scoped Q&As) + `BreadcrumbList`. `areaServed` = that city only.
- **Catalog page:** `BreadcrumbList` only (not Service, not ImageGallery).
- **About / Team pages:** `BreadcrumbList` (+ optional `AboutPage`/`WebPage`). No fabricated
  `Person` schema for unnamed owners; drivers only once real bios exist.
- **Thank-you trio (one atomic unit):** noindex/nofollow meta + excluded from `sitemap.xml`
  + Disallow in `robots.txt`.
- **Per-page title collision:** Mobile Tool Service title must lead with a different phrase
  than the homepage title even if they share a keyword.
- **Offer-catalog count == live service-page count (3).**
- Validate at `search.google.com/test/rich-results` before launch.

**Visible on-page SEO — FROZEN:** exactly one `<h1>`/page; H2/H3 hierarchy, no skipped
levels; city names in human-readable body; service+city combos appear naturally;
descriptive alt text with service/location context.

**City pages — anti-duplicate — FROZEN [DEALER-BUILD angle]:** each city page ≥30–40%
unique content; never just swap the city name (doorway penalty). Real, VERIFIED local
anchors — but for this trade the anchors are **commercial: auto/industrial corridors,
dealership rows, repair clusters, and the route highways (US-83/Expressway 83, I-2)** —
NOT residential neighborhoods. Flag `[VERIFY]` rather than invent. Unique intro + unique
"why [City]'s shops choose us" per page.

**Technical SEO files — FROZEN:** `sitemap.xml` (all indexable pages; exclude thank-you);
`robots.txt` (allow crawl, disallow thank-you, point to sitemap).

**Title/description patterns — FILL:**
- Homepage: [NEEDS INPUT]
- Service page: [NEEDS INPUT]
- City page: [NEEDS INPUT]
- Catalog page: [NEEDS INPUT]

---

## Hero & Asset Patterns — FROZEN

### Hero + Final-CTA backgrounds — dedicated named slots ONLY
- Hero and final-CTA backgrounds are their own slots — filled only by purpose-made
  `hero-background.*` and `cta-background.*` in `brand_assets/`. **NEVER a client content
  photo.** Until the dedicated file exists, both stay on `https://placehold.co/1920x1080`
  at final dimensions; flag pending, never substitute. Off-limits on every content-photo/
  layout pass.
- Static full-bleed image is the default hero on every page (`min-h-screen`, left-anchored
  text, image + dark overlay ~0.7 + edge vignette + text-shadows).

### Hero video — [DEALER-BUILD] a PRIMARY asset here, homepage only
For a mobile tool truck the inside of the rig IS the product, so video is promoted from
"enhancement" to a core asset. **Available footage:** ~1 truck photo, 3 horizontal interior
clips (30–60s), several vertical clips (interior + exterior). **Usable for hero/section:**
the 3 HORIZONTAL interior clips (horizontal is what the hero-video slot and section
backgrounds need). Vertical clips are limited to portrait-framed sections or skipped — they
cannot carry a horizontal hero. Candidate uses: one horizontal interior clip as the homepage
hero video, OR a "look inside the truck" section-background clip.
FROZEN sequence, never skipped: trim only → save preview → client approves in/out → compress
separately (H.264, strip audio, ~2–3MB) → wire in last. `.gitignore` the raw + trim preview;
commit only the final clip. Until a clip is trimmed+approved, the hero stays on the static
`hero-background` placeholder.

### Uniform photo sizing — every section, every page
Every content photo uses the **same-size aspect-ratio container** (`aspect-ratio` +
`object-fit: cover`), never a fixed `h-[Npx]`. One ratio site-wide.

### Photo Tier Allocation — [DEALER-BUILD default]
| Page type | Body photos | Hero |
|---|---|---|
| Mobile Tool Service (flagship — ALREADY BUILT at 5 splits) | 5 (built) | ✓ |
| Professional Tool Solutions | 2 | ✓ |
| Tool Financing | 1 | ✓ |
| City page | 1 | ✓ |
| About | 1–2 | ✓ |
| Meet the Team / Drivers | 1 per driver (portrait) | ✓ |
| Catalog | 1 (own photo, never Cornwell's) | ✓ |

> **[DEALER-BUILD] Photo-light build — lowered tiers.** Counts lowered by decision (fewer photos
> per page reads cleaner and matches the thin real-asset supply). Counts are **CEILINGS, not
> requirements** — a page may ship with fewer, and cross-page reuse is permitted for this build.
> Build against placeholders at final dimensions and backfill as Kim's real photos land; Code
> must NOT flag a page as deficient for having fewer than the tier count.
>
> **Clone structure note:** the flagship service page is built as FIVE alternating text/photo
> splits. When cloning to the lower-tier service pages, DO NOT leave empty photo frames —
> condense the layout so the reduced photo count works: extra sections become full-width text
> blocks or fold into fewer splits. No orphaned/blank image slots.
>
> **Asset provenance (FROZEN for this build):** every photo/video must be Tool Co's OWN (Kim's
> camera originals). NEVER place: Cornwell corporate/catalog/flyer imagery, another dealer's
> photos, or anything sourced from social media (Facebook/Instagram downloads carry an FBMD
> marker + no EXIF — reject on sight). Reject readable license plates, customer names on
> screens/paperwork, competitor branding (Snap-on/Matco/Mac), and bystander faces. Strip
> EXIF/GPS on export. Prefer camera originals via AirDrop/Drive over messenger-compressed
> re-saves. Pending shot-list: driver headshots (one per driver), horizontal truck exterior
> (for hero + CTA slots), horizontal truck interior, service-in-action, tool close-ups.

**FROZEN rules:** one-photo-one-slot on all pages; excluded types everywhere — readable
license plates, strong tilt/rotation, stained/damaged subjects, anything privacy-sensitive,
**and any Cornwell corporate/catalog imagery**; driver/people slots use `aspect-[3/4]` +
`object-position: center top` (portrait for headshots); document EXACT filenames confirmed by
`ls brand_assets/` — never assume naming.

### City-page clone zones — FROZEN
Four unique zones per city, everything else shared:
`<!-- CITY-SWAP: intro -->` · `<!-- CITY-SWAP: local-anchors -->` ·
`<!-- CITY-SWAP: why-city -->` · `<!-- CITY-SWAP: faq -->`
Areas We Serve dropdown (desktop + mobile) is a protected shared zone:
`<!-- SHARED ZONE: Areas We Serve dropdown — do NOT modify during city clone pass -->`

---

## Screenshot discipline — FROZEN (tiered)
Code MUST save real PNGs to `./temporary screenshots/` and report the exact path.
- **Gated template pages — homepage, Mobile Tool Service, Edinburg: 2 comparison rounds.**
- **Clones/structural — other services/cities, about, team, catalog, thank-you: 1 round +
  click-through.** More rounds only if a real problem surfaces.
- Serve on localhost first — never screenshot a `file:///` path.

## Reference Images — FROZEN [DEALER-BUILD]
Default: build ORIGINAL pages with high craft. Cornwell's site is **brand inspiration only**
(palette, positioning, heritage tone) — do NOT clone its layout or lift its content. The
match-exactly rules apply only if a specific reference image is explicitly provided.

## Local Server / Screenshot Workflow — FROZEN
`node serve.mjs` (root at `http://localhost:3000`, background, don't double-start).
`node screenshot.mjs http://localhost:3000 [label]` → `./temporary screenshots/screenshot-N[-label].png`.
Read the PNG back; analyze px sizes, exact hexes, spacing, alignment, radii, shadows.

## Output Defaults — FROZEN
Self-contained HTML; Tailwind via CDN; `https://placehold.co/WIDTHxHEIGHT` placeholders;
mobile-first responsive.

## Anti-Generic Guardrails — FROZEN
Brand tokens only (never default Tailwind palette). Layered color-tinted shadows (never flat
`shadow-md`). Distinct display + body fonts; tight tracking on large headings, generous body
line-height. Layered radial gradients + SVG-noise grain for depth. Animate only
`transform`/`opacity` (never `transition-all`), spring easing. Every clickable element has
hover + focus-visible + active states. Image overlays + a color-treatment layer. Intentional
spacing tokens. A base→elevated→floating depth system.

---

## Locked Language — FROZEN framework, FILL per client [DEALER-BUILD]
- **Cornwell framing:** "authorized Cornwell Quality Tools dealer/franchise." Never imply
  the site is Cornwell corporate; never reproduce Cornwell copy/marks/logos beyond factual
  brand reference. [NEEDS INPUT — exact approved brand lockup if Cornwell provides one.]
- **Experience:** "30+ years of combined experience among our tool dealers" — verbatim,
  "combined" intact, personal/team not business-age. Never "since [year]" / "serving [City]
  for 30 years."
- **Founding year:** none published (client declined to provide); never Cornwell's 1919.
- **Financing:** describe options factually; **no rates, terms, "starting at," or dollar
  figures** unless confirmed in writing — route to contact. (Applies to copy, FAQ, JSON-LD.)
- **Warranty / Service Assistance:** frame as "we help you handle Cornwell's warranty &
  service process." Publish no specific warranty scope/terms until confirmed in writing.
- **Ownership signal:** none (e.g. veteran-owned) until confirmed.
- **Relationship:** no couple/family-owned claim unless client opts in `[DECIDE — default no]`.
- **Testimonials/reviews:** none publishable until reputation confirmed.
- **Pricing:** none; route to contact.

## Hard Rules — FROZEN
- No invented facts; confirm before filling any `[NEEDS INPUT]`.
- No price / range / "starting at" unless confirmed here — route pricing to contact (copy,
  FAQ, AND JSON-LD).
- No relationship claim without written confirmation.
- No review widgets/stars/counts/`aggregateRating` until reputation confirmed.
- Never infer driver/owner names, roles, or relationships from social.
- **Never publish the owner's personal number 541-720-6757 — GHL tracking number only;
  grep returns zero hits for the personal number before deploy.**
- **Never reproduce Cornwell copy, photos, logos, or catalog pages; never present as Cornwell
  corporate.** [DEALER-BUILD]
- Never promote a client photo into the `hero-background` / `cta-background` slots.
- No readable license plates or privacy-sensitive photos.
- No PostalAddress in schema, no maps embed (service-area only). [DEALER-BUILD]
- No red, no gold; no default Tailwind blue/indigo as primary (logo navy #013074 is primary,
  sky blue #4EA5F4 is accent — all extracted from the logo).
- No `transition-all`.
- Follow the tiered screenshot rule.

## Git Discipline — FROZEN
- Commit/push only when asked; branch first if on the default branch.
- Rename a service/city → update filename, all hrefs, nav/footer labels, schema,
  title/meta, and breadcrumb together.
- Three-command pre-commit check, no exceptions: `git status`, `git branch`,
  `git remote -v` (the client repo, NOT nexor-template).
- Logical commit separation: CLAUDE.md → own commit; brand_assets → own commit; page builds
  grouped by phase. Never mix client-layer decisions with build work.
- Commit assets immediately on placement (own commit).
- Set canonical host as Vercel **Primary on day one**.
- Submit sitemap to GSC as the full canonical URL. Indexing order: services → Edinburg →
  remaining cities → about/team/catalog. ~10–12 URL inspections/day, spread across days.
  Re-check homepage canonical in GSC 3–5 days post-launch.

---

## Active Blockers — summary

**Launch-blocking:** og-image (1200×630). (GHL tracking number, contact form, chat widget, and
external tracking all arrived 2026-09-07 and are wired site-wide — see Integration placeholders.)

**Backfillable (build against placeholders, swap in one pass):** driver headshots + bios,
hero/CTA background images, content photos.

**Resolved / no action needed:** GHL integration — tracking number (956) 450-7963, "Website Form"
`iIe3HWhzFwKdqSbAMIZu`, chat widget `6a983977d3b1e172e082a76c`, tracking id
`tk_4cfa8e42c7bd4049b28228542b84a8f7` (all wired); logo received (Tool Co mark — palette derived from it);
business name = Tool Co; founding year — omitted by client choice; reviews — none (no GBP
yet), all review UI + schema off; catalog link — generic webcat locked; pricing — omitted.

**Open decisions for Juan (resolve at strategy lock):**
1. City order after Edinburg (Weslaco/Pharr/Alamo/San Juan) — soft, volume data thin.
2. Relationship framing — publish "family-owned"/couple, or keep off? (default: off)
3. Schema type — plain `LocalBusiness` vs a closer service-area subtype (avoid `Store`).
4. Cornwell franchisee brand/web guidelines — does an approved kit/disclaimer exist that
   overrides derived colors/logo/lockup?
5. ~~Will the GHL number be a dedicated tracking line or forward to the owner cell?~~ Resolved: the
   GHL line is (956) 450-7963; forwarding is GHL-side config. The raw 541 number is never published regardless.
