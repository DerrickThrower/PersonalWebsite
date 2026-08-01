# The Record Crate — Derrick Thrower

A 3D personal portfolio: a moody, spotlit record shop in miniature. Each record is a role.
Pull one out, flip it over, read the liner notes.

**This is the site's homepage.** It's a single self-contained file — no build step, no
external images. Sleeve art is generated procedurally onto `<canvas>` at runtime.

## Where it lives, and how it gets to `/`

| | |
|---|---|
| The file | `public/crate.html` — the whole site, one file |
| Served at | `/`, via a `beforeFiles` rewrite in `next.config.ts` |
| Previous homepage | moved to `app/classic/page.tsx`, still reachable at `/classic` |

The rewrite (not a redirect) runs ahead of app-router matching, so `/` serves the crate
while the URL stays `/`. Because it's a plain static file in `public/`, Next's
`app/layout.tsx` does **not** wrap it — its `<head>`, fonts and styles are all its own.

To put the old site back at `/`, delete the `rewrites()` block from `next.config.ts` and
move `app/classic/page.tsx` back to `app/page.tsx`.

## Run it locally

With the Next app (this is what production does):

```bash
npm run dev
```

Then visit <http://localhost:3000>.

Or open the file straight from disk — it has no dependency on Next:

```bash
open public/crate.html
```

Three.js r128 loads from a CDN, so you need a network connection the first time.

---

## Editing the content

Everything you'd want to change lives at the top of the `<script>` block in
`public/crate.html`, under `/* ---------------------------- DATA ---------------------------- */`.

### The records

Edit the `RECORDS` array. Order = most current first. Each entry:

```js
{
  cat:      "DT-001",                    // catalogue number, shown on the sleeve and in the caption
  title:    "Software Engineer Intern",  // role
  org:      "HireBuddy",                 // set large on the sleeve front
  kind:     "Internship",                // small label under the rule
  dates:    "Jun 2026 – Present",
  location: "San Francisco Bay Area",
  notes:    "One paragraph. Reads as the liner notes on the back.",
  stack:    ["Full-stack", "AI product"],
  limited:  false                        // true → LIMITED PRESSING foil sticker on the sleeve
}
```

Add, remove, or reorder freely — the 3D crate, the caption, the accessible list, the
non-WebGL fallback and the liner-notes panel are all built from this one array. Nothing
else needs to change.

### The hackathon record

There's a commented-out `DT-007` entry at the bottom of `RECORDS`. Uncomment it, fill in
which hackathons, what you built, and what you won. It's already set to `limited: true`,
so it gets the foil sticker.

This was left out of v1 only because the LinkedIn export didn't itemise the wins — the
"3× hackathon winner / DiamondHacks 2025 solo win" story is core to your brand and should
go in as soon as you've written the specifics.

### Contact links

Edit the `CONTACT` array, just below `RECORDS`:

```js
const CONTACT = [
  { k: "Email",    v: "throwerd@uci.edu",            href: "mailto:throwerd@uci.edu" },
  { k: "LinkedIn", v: "linkedin.com/in/your-handle", href: "https://www.linkedin.com/in/your-handle" },
  { k: "GitHub",   v: "github.com/your-handle",      href: "https://github.com/your-handle" }
];
```

**The LinkedIn and GitHub rows are placeholders — swap `your-handle` for your real
handles before shipping.** Delete a row to hide it. These render in the "Contact" sheet
in the top-right.

### Tagline and about copy

- The tagline is the `<span id="tagline">` in the markup, near the top of `<body>`.
  An alternate is noted in a comment next to `CONTACT`:
  *"3× hackathon winner. Builder of agent swarms and course-planning tools used by 16k students."*
- The About copy is the `<section class="sheet" id="sheet-about">` block in the markup.

### Palette

CSS variables in `:root`, mirrored as `PALETTE` / `CSS` objects in the script (Three.js
needs numeric colours, the canvas art needs strings). Change both if you retune it.

---

## How the interaction works

| | Mouse | Touch | Keyboard |
|---|---|---|---|
| Browse | drag left/right, or scroll | swipe | `←` `→` `↑` `↓`, `Home`, `End` |
| Pull | click the focused record | tap the focused record | `Enter` / `Space` |
| Flip | click again, or the Flip button | tap again, or the Flip button | `Enter` / `Space` |
| Return | click away, or Back | tap away, or Back | `Escape`, or browser back |

Tapping a record that isn't focused focuses it first, so the crate works one-handed.

---

## Accessibility notes

Worth knowing before you refactor anything:

- **The 3D layer is decoration.** `#stage` is `aria-hidden`. The real content is the
  `<ul id="crate-list">` — one `<li><button>` per role, containing the full text
  (title, org, kind, dates, location, notes, stack). Screen readers and crawlers read
  that list, not the canvas.
- **Those buttons are also the hit targets.** Each frame they're projected onto their
  record's screen position, so mouse, touch and keyboard all drive the same element —
  and `:focus-visible` gives a real brass focus ring on a real focusable element.
- **The liner-notes panel is a visual mirror.** It duplicates what the button already
  announces, so it's kept out of the accessibility tree to avoid double-reading.
- **`prefers-reduced-motion`** collapses every spring to an instant snap, stops the
  turntable, freezes the dust and removes the load fade.
- **No WebGL** → `body.fallback`, the canvas is removed, and the same `<ul>` restyles
  into a plain readable list of roles. The site is never blank.

## Browser support

Three.js r128 from `cdnjs`. Uses `WebGLRenderer`, `CanvasTexture`, `PointsMaterial`.
Avoids r128 gaps deliberately: no `OrbitControls` (custom drag/swipe/arrow browsing
instead) and no `CapsuleGeometry` (`Box`/`Cylinder` only).
