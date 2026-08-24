# Zrio Labs Website

A maintainable React, TypeScript, Vite, and Tailwind CSS company website.

## 1. Install the required software

Install Node.js 20 LTS or newer, VS Code, and Git. Open this folder in VS Code.

## 2. Install and run

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (normally `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
npm run preview
```

The deployable output is created in `dist/`.

## 4. Update content

- Company/contact details: `src/data/site.ts`
- Services: `src/data/services.ts`
- Portfolio items: `src/data/projects.ts`
- Brand images: `public/brand/`
- Global colors/styles: `tailwind.config.js` and `src/index.css`
- Page copy: `src/pages/`

## 5. Connect the contact form

The form intentionally validates without pretending to send. In `src/pages/Contact.tsx`, replace the `submit` function with a call to Formspree, EmailJS, Supabase Edge Functions, or your own secure backend. Never put private API keys in frontend code.

## 6. Deploy

Push the project to GitHub. Import it into Vercel, Netlify, or Cloudflare Pages. Use `npm run build` as the build command and `dist` as the output directory. Configure a single-page-app fallback to `index.html` so routes work on refresh.

## Before launch

- Replace `YOUR-DOMAIN.com` in `src/data/site.ts`, `public/robots.txt`, and `public/sitemap.xml`.
- Confirm `hello@zriolabs.com` or replace it with your real email.
- Connect and test the contact form backend.
- Replace the privacy and terms placeholders with approved legal content.
- Add only verified projects, clients, results, and testimonials.
- Update the sitemap with all service URLs.
- Test mobile navigation, forms, all links, accessibility, and page speed.
- Add privacy-friendly analytics only after deciding your consent approach.

## Recommended build order for learning

1. Configuration files (`package.json`, TypeScript, Vite, Tailwind).
2. `main.tsx` and `App.tsx`.
3. Central data files.
4. Shared layout (`Header`, `Footer`).
5. Shared components (`SEO`, `PageHero`, cards, CTA).
6. Homepage.
7. About, Services, Work, and Contact pages.
8. Legal and 404 pages.
9. SEO files and deployment configuration.
