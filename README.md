# MyRealProduct — Landing Page

Landing page for the MyRealProduct (MRP) AI product-building cohort. Built with React, TypeScript, Vite, and Tailwind CSS v4.

## Prerequisites

- **Node.js** v18 or higher — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/hariPrasadCoder/myrealproduct.git
   cd myrealproduct
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

4. **Build for production**

   ```bash
   npm run build
   ```

   The optimized output will be in the `dist/` folder.

5. **Preview the production build**

   ```bash
   npm run preview
   ```

## Project Structure

```
├── public/              # Static assets served as-is
│   ├── images/          # Headshots, photos
│   ├── logos/           # "As Featured In" brand logos
│   └── videos/          # Testimonial video files
├── src/
│   ├── components/      # React components (Hero, FAQ, Showcase, etc.)
│   │   └── ui/          # Reusable UI primitives (Button)
│   ├── App.tsx          # Root component — assembles all sections
│   ├── main.tsx         # Entry point — renders App into DOM
│   └── index.css        # Tailwind imports, theme config, custom utilities
├── index.html           # HTML shell
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server + bundler)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Motion** (scroll-triggered animations)
- **Lucide React** (icons)
