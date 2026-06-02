# Torta Boyz

Authentic Mexican street-food restaurant website — built with Next.js, Tailwind CSS v4, and Framer Motion.

**Live:** [torta-boyz.vercel.app](https://torta-boyz.vercel.app)  
**Address:** 354A Preston Street, Ottawa, ON K1S 3J2  
**Rating:** 4.8 stars (961 Google reviews)  
**Reservations:** OpenTable

---

## Tech Stack

| Layer        | Technology                        |
| ------------ | --------------------------------- |
| Framework    | Next.js 16 (App Router)           |
| Styling      | Tailwind CSS v4                   |
| Animations   | Framer Motion + GSAP + Lenis      |
| Language     | TypeScript                        |
| Fonts        | Geist (via next/font)             |
| Linting      | ESLint (next/core-web-vitals)     |
| Deployment   | Vercel (recommended)              |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18 (recommended: 20 LTS or later)
- **npm** >= 9

### Install & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/torta-boyz.git
cd torta-boyz

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Preview

```bash
npm run build
npm start
```

The production server runs at [http://localhost:3000](http://localhost:3000).

### Lint

```bash
npm run lint
```

---

## Project Structure

```
torta-boyz/
├── public/                   # Static assets (images, favicon)
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind imports & custom theme
│   │   ├── layout.tsx        # Root layout, metadata, JSON-LD
│   │   └── page.tsx          # Home page (assembles sections)
│   ├── lib/
│   │   └── utils.ts          # Animation helpers (cn, clamp, lerp, mapRange)
│   └── components/
│       ├── SmoothScroll.tsx   # Lenis smooth scroll provider
│       ├── Header.tsx         # Fixed navigation (scroll-aware)
│       ├── Hero.tsx           # Cinematic hero with parallax + 3D card
│       ├── About.tsx          # Story + value highlights with depth
│       ├── MenuPreview.tsx    # Menu category cards with prices
│       ├── SignatureDish.tsx  # Alternating dish showcase (scroll-triggered)
│       ├── HorizontalGallery.tsx # Premium horizontal scroll gallery
│       ├── Reviews.tsx        # 3D tilt rating cards + testimonials
│       ├── Reservation.tsx    # OpenTable CTA
│       ├── Location.tsx       # Address, hours, map placeholder
│       ├── Instagram.tsx      # Instagram section with masonry feed
│       ├── InstagramFeed.tsx  # Masonry grid with 3D hover
│       ├── ImageCard.tsx      # Premium image card (parallax + glassmorphism)
│       ├── ParallaxTilt.tsx   # 3D tilt on hover wrapper
│       ├── Footer.tsx         # Links, hours, social, legal
│       ├── decorative/
│       │   └── FoodIcons.tsx  # SVG food illustrations (tortas, tacos, cocktails, etc.)
│       └── ui/
│           ├── Button.tsx
│           ├── Container.tsx
│           └── SectionHeader.tsx
├── next.config.ts            # Next.js configuration
├── vercel.json               # Vercel deployment config
├── tsconfig.json             # TypeScript configuration
├── postcss.config.mjs        # PostCSS (Tailwind v4)
└── package.json
```

---

## Configuration Files

### `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

---

## Deploying

### Deploy to Vercel (Recommended)

#### Option A — Via Vercel CLI

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login (opens browser)
vercel login

# 3. Deploy from project root
vercel --prod
```

#### Option B — Via Vercel Dashboard (Git)

1. Push the repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `torta-boyz` repository.
4. Leave all defaults — Vercel auto-detects Next.js.
5. Click **Deploy**.

#### Option C — One-click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_USERNAME%2Ftorta-boyz)

---

### Push to GitHub

```bash
# 1. Initialize (already done if cloned)
git init

# 2. Stage all files
git add .

# 3. Commit
git commit -m "Initial commit: Torta Boyz restaurant website"

# 4. Add remote (create repo on GitHub first!)
git remote add origin https://github.com/YOUR_USERNAME/torta-boyz.git

# 5. Push
git branch -M main
git push -u origin main
```

---

## Deployment Checklist

- [x] `npm install` completes without errors
- [x] `npm run build` exits with code 0
- [x] `npm run lint` reports zero errors
- [x] `npm run dev` serves the site at `localhost:3000`
- [x] `npm start` serves the production build
- [x] All external links open in new tabs (`target="_blank"`)
- [x] OpenGraph metadata present in `<head>`
- [x] JSON-LD structured data injected
- [x] Responsive on mobile, tablet, desktop
- [x] `vercel.json` present
- [x] `.gitignore` covers `node_modules`, `.next`, `.env`, `.vercel`
- [ ] Replace placeholder images with real food photography
- [ ] Update `https://tortaboyz.ca` domain in metadata if owned
- [ ] Add real Google Maps embed iframe in Location section
- [ ] Add Instagram API feed or widget
- [ ] Set up custom domain in Vercel dashboard

---

## Testing

### Desktop

```bash
npm run dev
```
Visit `http://localhost:3000` — test at 1920×1080, 1440×900, and 1366×768.

### Mobile / Tablet

Open Chrome DevTools (`F12`) → Toggle Device Toolbar (`Ctrl+Shift+M`).  
Test at 375×667 (iPhone SE), 390×844 (iPhone 14), 768×1024 (iPad).

### Other Devices on the Same Network

```bash
# Find your local IP
ipconfig | findstr /i "IPv4"
# Example: 192.168.1.42

# Start dev server with host flag
npm run dev -- -H 0.0.0.0
```

Then visit `http://192.168.1.42:3000` from any device on the same Wi-Fi.

---

## Troubleshooting

| Error                                       | Solution                                                                  |
| ------------------------------------------- | ------------------------------------------------------------------------- |
| `'next' is not recognized`                  | Run `npm install` first.                                                  |
| `Module not found: Can't resolve '...'`     | Ensure all dependencies are installed. Delete `node_modules` and retry.   |
| Port 3000 already in use                    | Use `npm run dev -- -p 3001` or kill the process with `npx kill-port 3000`. |
| Build fails with TypeScript errors          | Run `npm run lint` to find issues. Fix type errors and rebuild.           |
| Tailwind classes not applied                | Clear `.next/` cache: `rm -rf .next` then rebuild.                        |
| `vercel: command not found`                 | Install CLI: `npm install -g vercel`.                                     |
| Images not loading in production            | Ensure images are in `public/` and paths start with `/`.                  |
| `npm run dev` starts but page is blank      | Check browser console for errors. Verify Framer Motion is installed.      |

---

## Brand Colors

| Token              | Hex       | Usage                   |
| ------------------ | --------- | ----------------------- |
| `--torta-red`      | `#D5432B` | Primary CTAs, accents   |
| `--torta-orange`   | `#E8762C` | Hero gradients          |
| `--torta-gold`     | `#F5A623` | Stars, highlights       |
| `--torta-lime`     | `#A5C93D` | Veggie section, badges  |
| `--torta-charcoal` | `#1A1A1A` | Dark backgrounds, text  |
| `--torta-cream`    | `#FFF8F0` | Page background         |

All colors are defined in `src/app/globals.css` via the `@theme` directive.

---

## License

MIT — see [LICENSE](LICENSE) for details.
