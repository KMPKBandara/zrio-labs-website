# Zrio Labs Website

Official company website for **Zrio Labs**, a software development company based in Colombo, Sri Lanka.

Zrio Labs builds modern websites, custom software systems, mobile applications, SaaS products, UI/UX designs, and interactive digital experiences.

> **Build • Innovate • Elevate**

---

## About Zrio Labs

Zrio Labs is a software development startup focused on delivering modern, scalable, and maintainable digital solutions.

We help startups, small businesses, organizations, and individuals transform ideas into dependable digital products.

### Company information

- **Company:** Zrio Labs
- **Industry:** IT Services and IT Consulting
- **Location:** Colombo, Western Province, Sri Lanka
- **Founded:** 2026
- **Team size:** 2–10 employees
- **LinkedIn:** [Zrio Labs on LinkedIn](https://www.linkedin.com/company/zriolabs/)

---

## Live Website

The production website URL will be added here after deployment.

```text
https://your-domain.com
```

---

## Services

The website presents the following Zrio Labs services:

- Web Development
- Custom Software Development
- Mobile Application Development
- SaaS Development
- UI/UX Design
- Game Development

---

## Featured Project

### Meditech Laboratory Website

A completed healthcare website project developed for Meditech Laboratory Services.

- **Client:** Meditech Laboratory Services
- **Category:** Healthcare Website
- **Status:** Live
- **Website:** [https://www.meditechlab.lk/](https://www.meditechlab.lk/)

---

## Main Features

- Responsive, mobile-first design
- Modern dark technology theme
- Reusable React components
- TypeScript support
- Tailwind CSS styling
- Animated hero illustration
- Data-driven services and projects
- Individual service pages
- Our Work portfolio section
- Validated project inquiry form
- Responsive navigation
- SEO metadata
- Open Graph metadata
- Sitemap and robots configuration
- Privacy Policy and Terms pages
- Custom 404 page
- Accessible HTML structure
- Maintainable project organization

---

## Technology Stack

### Frontend

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

### Libraries

- [Lucide React](https://lucide.dev/)
- [Lottie React](https://www.npmjs.com/package/lottie-react)
- [React Helmet Async](https://www.npmjs.com/package/react-helmet-async)

### Development tools

- ESLint
- PostCSS
- Autoprefixer
- Git
- GitHub

---

## Repository Structure

The React application is inside the `zrio-labs-website` directory.

```text
repository-root/
├── .gitignore
├── README.md
└── zrio-labs-website/
    ├── public/
    │   ├── animations/
    │   │   └── coding-person.json
    │   ├── brand/
    │   │   ├── zrio-cover.png
    │   │   └── zrio-logo.png
    │   ├── projects/
    │   │   └── meditech-laboratory.webp
    │   ├── robots.txt
    │   └── sitemap.xml
    │
    ├── src/
    │   ├── assets/
    │   │   └── animations/
    │   ├── components/
    │   │   ├── CodingAnimation.tsx
    │   │   ├── CTA.tsx
    │   │   ├── Footer.tsx
    │   │   ├── Header.tsx
    │   │   ├── PageHero.tsx
    │   │   ├── ProjectCard.tsx
    │   │   ├── SEO.tsx
    │   │   └── ServiceCard.tsx
    │   │
    │   ├── data/
    │   │   ├── projects.ts
    │   │   ├── services.ts
    │   │   └── site.ts
    │   │
    │   ├── pages/
    │   │   ├── About.tsx
    │   │   ├── Contact.tsx
    │   │   ├── Home.tsx
    │   │   ├── Legal.tsx
    │   │   ├── NotFound.tsx
    │   │   ├── ServiceDetail.tsx
    │   │   ├── Services.tsx
    │   │   └── Work.tsx
    │   │
    │   ├── types/
    │   │   └── index.ts
    │   │
    │   ├── App.tsx
    │   ├── index.css
    │   └── main.tsx
    │
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    └── vite.config.ts
```

The exact structure may change as the project grows.

---

## Requirements

Before running the project, install:

- [Node.js](https://nodejs.org/) version 20 or newer
- npm
- Git
- Visual Studio Code or another code editor

Check the installed versions:

```bash
node --version
npm --version
git --version
```

---

## Local Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/zrio-labs-website.git
```

Replace `YOUR-USERNAME` with the correct GitHub username or organization.

### 2. Enter the repository

```bash
cd zrio-labs-website
```

### 3. Enter the React application folder

Because the application is inside a nested directory, run:

```bash
cd zrio-labs-website
```

### 4. Install dependencies

```bash
npm install
```

### 5. Start the development server

```bash
npm run dev
```

Vite will display a local URL, normally:

```text
http://localhost:5173
```

Open that URL in your browser.

---

## Available Commands

Run these commands inside the inner `zrio-labs-website` application directory.

### Start development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

### Preview the production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

---

## Updating Company Information

Update the central site configuration:

```text
zrio-labs-website/src/data/site.ts
```

This file contains information such as:

- Company name
- Email address
- Phone number
- Location
- LinkedIn URL
- Production website URL

Example:

```ts
export const site = {
  name: "Zrio Labs",
  tagline: "Build • Innovate • Elevate",
  email: "hello@zriolabs.com",
  phone: "",
  location: "Colombo, Western Province, Sri Lanka",
  linkedin: "https://www.linkedin.com/company/zriolabs/",
  url: "https://your-domain.com",
};
```

Replace all placeholder information before deployment.

---

## Updating Services

Service information is stored in:

```text
zrio-labs-website/src/data/services.ts
```

Each service contains:

- Slug
- Title
- Short description
- Full description
- Icon
- Features

The service-detail pages are generated from this centralized data.

---

## Adding Portfolio Projects

Portfolio project information is stored in:

```text
zrio-labs-website/src/data/projects.ts
```

Example:

```ts
{
  title: "Meditech Laboratory Website",
  client: "Meditech Laboratory Services",
  category: "Healthcare Website",
  description: "Project description goes here.",
  image: "/projects/meditech-laboratory.webp",
  websiteUrl: "https://www.meditechlab.lk/",
  services: [
    "Website Design",
    "Frontend Development",
    "Responsive Development",
    "SEO Foundations",
  ],
  status: "Live",
  featured: true,
}
```

Store project screenshots inside:

```text
zrio-labs-website/public/projects/
```

Recommended image format:

```text
.webp
```

Use optimized images to improve page-loading performance.

---

## Brand Assets

Zrio Labs brand assets are located in:

```text
zrio-labs-website/public/brand/
```

The primary files are:

```text
zrio-logo.png
zrio-cover.png
```

Do not distort or recolor the official company logo.

---

## Hero Animation

The homepage uses a Lottie coding animation.

The animation component is located at:

```text
zrio-labs-website/src/components/CodingAnimation.tsx
```

The animation JSON should be stored in:

```text
zrio-labs-website/src/assets/animations/coding-person.json
```

If the animation does not appear:

1. Confirm that the file is valid Lottie JSON.
2. Do not rename a `.lottie` file to `.json`.
3. Confirm that `lottie-react` is installed.
4. Check the browser console for import errors.

Install Lottie React if necessary:

```bash
npm install lottie-react
```

---

## Contact Form

The inquiry form is located at:

```text
zrio-labs-website/src/pages/Contact.tsx
```

The form currently provides frontend validation.

Before production deployment, connect it to one of the following:

- Supabase Edge Functions
- Formspree
- EmailJS
- Resend through a secure backend
- A custom API

Never store secret API keys directly in frontend source code.

Use environment variables for public configuration and a secure backend for private credentials.

---

## Environment Variables

If environment variables are required, create:

```text
zrio-labs-website/.env.local
```

Example:

```env
VITE_CONTACT_API_URL=https://your-api-url.com/contact
```

Access a public Vite variable with:

```ts
const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
```

Files containing environment variables are ignored by Git.

Do not commit:

```text
.env
.env.local
.env.production.local
```

If the project needs example variables, create:

```text
.env.example
```

Do not place real credentials inside `.env.example`.

---

## SEO Configuration

Before deployment, replace the placeholder domain in:

```text
zrio-labs-website/src/data/site.ts
zrio-labs-website/public/robots.txt
zrio-labs-website/public/sitemap.xml
```

Replace:

```text
https://YOUR-DOMAIN.com
```

with the final production domain.

Also verify:

- Page titles
- Meta descriptions
- Canonical URLs
- Open Graph image
- Sitemap routes
- robots.txt URL
- Image alternative text
- Internal links

---

## Deployment

The project can be deployed using:

- Vercel
- Netlify
- Cloudflare Pages
- Another static hosting service that supports Vite

### Build settings

Use:

```text
Root directory: zrio-labs-website
Build command: npm run build
Output directory: dist
```

Because the website uses React Router, configure the hosting service to redirect unknown routes to:

```text
/index.html
```

This ensures URLs such as `/about`, `/services`, and `/work` still load when refreshed directly.

---

## Deployment with Vercel

1. Push the repository to GitHub.
2. Sign in to Vercel.
3. Select **Add New → Project**.
4. Import the GitHub repository.
5. Set the root directory to:

```text
zrio-labs-website
```

6. Confirm the framework preset is Vite.
7. Use:

```text
Build command: npm run build
Output directory: dist
```

8. Deploy the project.
9. Add the production domain.
10. Update the domain in the SEO configuration files.

---

## Deployment with Netlify

Use:

```text
Base directory: zrio-labs-website
Build command: npm run build
Publish directory: zrio-labs-website/dist
```

If Netlify treats the base directory separately, the publish directory may only need to be:

```text
dist
```

For React Router support, create:

```text
zrio-labs-website/public/_redirects
```

Add:

```text
/* /index.html 200
```

---

## Git Workflow

Before starting work:

```bash
git pull
```

After making changes:

```bash
git status
git add .
git commit -m "Describe the changes"
git push
```

Example commit messages:

```bash
git commit -m "Add Meditech Laboratory project"
```

```bash
git commit -m "Improve homepage portfolio section"
```

```bash
git commit -m "Update company contact details"
```

```bash
git commit -m "Improve responsive navigation"
```

---

## Git Branch Recommendations

For small changes, working directly on `main` may be sufficient.

For larger features, create a separate branch:

```bash
git checkout -b feature/project-details
```

After completing the work:

```bash
git add .
git commit -m "Add project detail pages"
git push -u origin feature/project-details
```

Then create a pull request on GitHub.

---

## Files Not Included in Git

The `.gitignore` file prevents generated or sensitive files from being committed.

Examples:

```text
node_modules/
dist/
.env
.env.local
*.tsbuildinfo
vite.config.js
vite.config.d.ts
```

Do not manually upload `node_modules` or `dist` to the source repository.

---

## Pre-Launch Checklist

Before publishing the website:

- [ ] Replace the placeholder domain.
- [ ] Confirm the official company email.
- [ ] Add the official telephone number if required.
- [ ] Connect the contact form to a secure backend.
- [ ] Test successful and unsuccessful form submissions.
- [ ] Review the Privacy Policy.
- [ ] Review the Terms of Service.
- [ ] Confirm all portfolio information.
- [ ] Remove placeholder projects.
- [ ] Optimize all images.
- [ ] Test the website on mobile devices.
- [ ] Test the website on desktop devices.
- [ ] Check all navigation links.
- [ ] Check all external links.
- [ ] Test direct page refreshes.
- [ ] Update `robots.txt`.
- [ ] Update `sitemap.xml`.
- [ ] Check page titles and descriptions.
- [ ] Run the production build.
- [ ] Run ESLint.
- [ ] Test accessibility and keyboard navigation.
- [ ] Test page-loading performance.
- [ ] Connect the final domain.
- [ ] Submit the sitemap to Google Search Console.

---

## Current Project Status

The Zrio Labs website is under active development.

Completed functionality includes:

- Company homepage
- About page
- Service overview
- Individual service pages
- Portfolio section
- Meditech Laboratory project
- Contact page
- Legal starter pages
- Responsive navigation
- Lottie hero animation
- SEO foundations

Future content and improvements will be added as the company grows.

---

## Contributing

This is the official Zrio Labs company website.

For internal contributions:

1. Create a feature branch.
2. Make focused changes.
3. Test the production build.
4. Use a meaningful commit message.
5. Open a pull request.
6. Request review before merging major changes.

---

## License

Copyright © 2026 Zrio Labs. All rights reserved.

The source code, branding, visual assets, and website content in this repository are proprietary unless stated otherwise.

Unauthorized copying, redistribution, publication, or commercial use is prohibited.

---

## Contact

**Zrio Labs**  
Colombo, Western Province, Sri Lanka

- **LinkedIn:** [https://www.linkedin.com/company/zriolabs/](https://www.linkedin.com/company/zriolabs/)
- **Website:** Add production URL after deployment
- **Email:** Confirm the official company email before publishing

---

Developed and maintained by **Zrio Labs**.
