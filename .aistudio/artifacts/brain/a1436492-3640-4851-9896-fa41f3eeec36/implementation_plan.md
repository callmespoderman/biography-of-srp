# Vercel Deployment Configuration for Serampore Presentation

Configure the project for zero-friction deployment to Vercel using the Vercel CLI, with standard SPA fallback rewrite routing, optimized Vite production builds, and a clean project structure.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following deployment settings were confirmed based on your preferences:

- **Deployment Method**: Direct Vercel CLI upload from the command line (`vercel` or `npx vercel`).
- **Configuration Choice**: Dedicated `vercel.json` with client-side SPA rewrites (`"source": "/(.*)", "destination": "/index.html"`) and clean build commands.
- **Static Assets Preservation**: Ensuring all 6 high-resolution Serampore photographs in `public/photos/` are served with proper caching headers on Vercel's global CDN.

---

## 1. Overview & Core Concept

- **What It Does**: Adds production deployment configuration files (`vercel.json`), optimizes the Vite build pipeline in `package.json`, and verifies that all static assets and SPA client-side routes deploy without 404 errors or missing asset references.
- **Target Audience**: Presenter deploying the project live to Vercel for immediate web access during tomorrow's presentation.
- **Key Value**: A single `npx vercel` or `vercel --prod` command will deploy the entire interactive slide deck with photos, morph transitions, stealth timer, and presentation modes in seconds.

---

## 2. User Experience & Visual Design

- **Zero Visual Disruption**: All existing visual design, typography (Playfair Display & Plus Jakarta Sans), handcrafted vector artwork, and authentic Serampore landmark photos remain untouched.
- **Fast Global Delivery**: Vercel edge CDN delivers real photographs (St. Olav's Church, Serampore College, Mahesh Rath Yatra, Hooghly River ghat) with optimal cache-control headers.
- **Clean URLs**: Ensures reloading or navigating directly to any route maintains proper fallback to `index.html`.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Explicit `vercel.json` Configuration**:
  - *Chosen Approach*: Create an explicit `vercel.json` specifying the framework as `vite`, the output directory as `dist`, and route rewrites to `/index.html`.
  - *Why*: Eliminates any ambiguity when running `npx vercel` in unfamiliar CLI environments and guarantees SPA routes don't return 404s.
  - *Alternatives Considered*: Relying on Vercel's automatic Vite detection without configuration files. Explicit configuration is much safer against deployment mismatches.

- **Decision 2: Build Scripts Optimization in `package.json`**:
  - *Chosen Approach*: Ensure `"build": "vite build"` works cleanly and verify TypeScript passes with `"build": "tsc -b && vite build"` or standard `"vite build"` without dev-dependency collisions.
  - *Why*: Ensures Vercel's automated build workers exit with status 0 every time.

---

## 4. Technical Architecture & Deployment Flow *(Technical Reference)*

```
┌──────────────────────────────────────────────────────────────┐
│                    Local Project Workspace                   │
│                                                              │
│  package.json              vercel.json           public/     │
│  (scripts & dependencies)  (rewrites & framework) (photos)   │
└───────────────────────────────┬──────────────────────────────┘
                                │
                                │  npx vercel --prod
                                ▼
┌──────────────────────────────────────────────────────────────┐
│                      Vercel Build Engine                     │
│                                                              │
│  1. npm install                                              │
│  2. npm run build (Vite production bundle -> dist/)          │
│  3. Asset hashing & static asset deployment                  │
└───────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────┐
│                 Vercel Global Edge Network                   │
│                                                              │
│  • Edge CDN caching for /photos/*                            │
│  • Rewrites (/* -> /index.html)                              │
│  • Live HTTPS production URL for classroom presentation      │
└──────────────────────────────────────────────────────────────┘
```

- **Interactive Verification**: Run a full production build (`npm run build`) locally to ensure zero build warnings or missing asset links prior to deployment.
