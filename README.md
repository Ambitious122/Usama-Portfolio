# Usama Arshad — Civil Engineer Portfolio

React 18 + Vite + Tailwind CSS 3, with GSAP (ScrollTrigger) and Three.js animation.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

Requires Node.js 18 or newer.

## Edit your content

- `src/data/content.js` — name, email, phone, LinkedIn URL, skills, capabilities, projects and the experience timeline.
- `src/assets/usama.jpg` — your photo (replace the file, keep the name).
- `tailwind.config.js` — colours (`ink`, `hv` = hi-vis yellow) and fonts.
- `index.html` — page title, description and social-share tags.

## Structure

```
src/
  main.jsx, App.jsx, index.css
  data/content.js           all editable content
  hooks/useMotion.js        scroll reveals, hero intro, pinned projects gallery
  lib/motion.js             GSAP setup, reduced-motion / pointer helpers, card tilt
  lib/terrain.js            Three.js survey-terrain hero background
  components/               Nav, Hero, About, Skills, Capabilities,
                            Projects, Experience, Contact, Footer,
                            Cursor, Mag, Split, Section, Icon
```

## Notes

- The contact form opens the visitor's email app with a prepared draft (no backend). To send mail from the site itself, point `submit` in `Contact.jsx` at a form service such as Formspree or EmailJS.
- Animations respect `prefers-reduced-motion`. The custom cursor, magnetic buttons, card tilt and parallax are mouse-only.
- Deploy `dist/` to Netlify, Vercel, Cloudflare Pages or GitHub Pages (build command `npm run build`, output directory `dist`).
