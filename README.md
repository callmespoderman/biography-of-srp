# The Biography of a Place I Belong — Serampore

An interactive presentation website built with **React**, **Vite**, **Tailwind CSS**, and **Motion** (Framer Motion) featuring authentic morph transitions, real photographs of historic Serampore landmarks, an ultra-stealth presentation timer, and an emergency story reading mode.

---

## Deploying to Vercel

This project is pre-configured with `vercel.json` for one-command deployment to Vercel.

### Option 1: Direct Vercel CLI (Recommended)

From the project root directory in your terminal, run:

```bash
# 1. Preview Deployment (test link)
npx vercel

# 2. Production Deployment (live presentation URL)
npx vercel --prod
```

When prompted by the CLI:
- **Set up and deploy?** -> `Y`
- **Which scope?** -> Select your account
- **Link to existing project?** -> `N` (or `Y` if updating an existing deployment)
- **What's your project's name?** -> `serampore-presentation` (or your choice)
- **In which directory is your code located?** -> `./`

Vercel will automatically read `vercel.json`, run `npm run build`, and output your live HTTPS presentation URL in seconds.

---

### Option 2: Deploy via GitHub

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Framework Preset will auto-detect **Vite** with `dist` output.
5. Click **Deploy**.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server (port 3000)
npm run dev

# Run production build test
npm run build

# Run unit tests
npm test # or npx tsx --test src/utils/presentationLogic.test.ts
```

---

## Presentation Day Controls & Shortcuts

| Key | Action |
| :--- | :--- |
| **`Space`** or **`→`** | Next slide |
| **`←`** | Previous slide |
| **`S`** | **Toggle Story Narrative**: Displays full verbatim speech paragraphs to read if you ever hesitate or forget your lines |
| **`T`** | **Start / Pause Stealth Timer**: Micro-timer located at the bottom-right footer |
| **`P`** | **Presenter Notes**: Opens teleprompter drawer with audio rehearsal practice |
| **`O`** | **Slide Overview**: Visual grid sorter of all 6 slides |
| **`F`** | **Fullscreen**: Enters clean projector / projection mode |
| **`1` – `6`** | Jump directly to specific chapter slides |
