# Prateek Srivastav — Portfolio

A fast, static portfolio site built with [Astro](https://astro.build), ready for Netlify.

---

## 1. See the site on your computer

Open the Terminal in Antigravity (View → Terminal) and run:

```
npm install        # only the first time
npm run dev
```

Then open **http://localhost:4321** in your browser. The page updates as soon as you save a file.

While previewing, an orange badge in the corner counts the **placeholders** left on the page. It never appears on the live site.

---

## 2. Where to edit things

You only need two files for almost everything:

| What you want to change | File |
|---|---|
| Name, email, LinkedIn, resume, hero headline, experience, process, about, skills | `src/data/site.ts` |
| Projects, case studies, "More work" grid, Figma prototype links | `src/data/projects.ts` |
| Colours and fonts | top of `src/styles/global.css` (the `:root` section) |

**Placeholders** look like `[[Your role]]`. Replace the whole thing, brackets included:

```
role: '[[Your role]]',      →      role: 'Lead Product Designer',
```

Keep the quote marks `'…'` around text. If your text contains an apostrophe, use a curly one (’) or write `\'`.

---

## 3. Add images

### Project screenshots
1. Create a folder for the project, e.g. `public/images/work/prov-ai/`.
2. Export from Figma as **JPG or WebP, 2× scale, about 1600–2400px wide**. Keep files under ~500 KB each.
3. In `src/data/projects.ts`, find the image and add `src`:

```
cover: {
  src: '/images/work/prov-ai/cover.jpg',     ← add this line
  alt: 'Prov.ai — main product screen',
  ...
},
```

While `src` is missing, the site shows a labelled placeholder box that tells you what belongs there.

**Folder names to use:** `prov-ai`, `pvm`, `reverselogix`, `greenstitch`, `bbw-home`, `conscious-app`.

Write a useful `alt` for each image (what the screen shows). Screen readers rely on it.

### Profile photo
Replace `public/images/profile/prateek.jpg` with a new photo using the same file name (portrait, about 1000px tall).

### Resume
1. Save your PDF as `public/resume/Prateek-Srivastav-Resume.pdf`.
2. In `src/data/site.ts`, set `resume: '/resume/Prateek-Srivastav-Resume.pdf',`

### Social-sharing image
`public/og-image.png` (1200×630) is what LinkedIn and Slack show when you share the link. Replace it any time.

---

## 4. Add, remove or reorder projects

- **Reorder:** move a whole `{ … },` project block up or down in `projects.ts`. The first two show as large cards.
- **Remove a section** from one case study (e.g. no design system): delete the `designSystem: { … },` block.
- **Real, measured results:** set `outcomes: { measured: true, … }`. The section title then changes from "Intended impact" to "Outcomes".
- **New project:** copy an existing block, give it a new unique `slug` (this becomes `/work/your-slug`).

---

## 5. Publish on Netlify (free)

**Before publishing:** clear the placeholders, at least the ones on the homepage.

### Option A: drag and drop (simplest)
1. In the Terminal, run `npm run build`. This creates a `dist` folder.
2. Go to https://app.netlify.com/drop and drag the **`dist`** folder onto the page.
3. Netlify gives you a link. In **Site settings → Domain management** you can rename it (e.g. `prateek-design.netlify.app`) or connect your own domain.

To update later, run `npm run build` again and drag the new `dist` folder into **Deploys** on your site.

### Option B: auto-publish from GitHub (best long-term)
1. Put this folder on GitHub.
2. In Netlify: **Add new site → Import from Git** → pick the repository.
3. Settings are detected automatically from `netlify.toml`. Click **Deploy**.

Every change you push then goes live automatically.

### After your first publish
Open `astro.config.mjs` and replace `https://prateek-srivastav.netlify.app` with your real address, then publish again. This makes the LinkedIn/Slack preview image work correctly.

---

## Project structure (for reference)

```
public/            images, icons, resume, social image (copied as-is)
src/data/          ← your content (site.ts, projects.ts)
src/pages/         homepage, case-study template, 404
src/components/    reusable pieces (cards, image/placeholder, contact…)
src/styles/        global.css: design tokens and all styles
src/scripts/       small animations and helpers
netlify.toml       Netlify build settings
```
