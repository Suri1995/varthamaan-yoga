# Varthamaan Yoga website

Next.js 14 (App Router) + Tailwind CSS + TypeScript.

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Edit points
- Palette: `src/app/globals.css` (`:root` tokens). Retune to the logo here only.
- Logo: `SITE.logo` in `src/data/site.ts` (currently the remote URL; download it to `public/logo.png` and set `"/logo.png"`).
- Courses, fees, batches, reviews: `src/data/courses.ts`
- Branches, team, FAQs: `src/data/site.ts`
- Enquiry form opens WhatsApp (+91 63033 06297) with the details. Swap for an API route if you want email/DB capture.

## Routes
/, /about, /courses, /courses/[slug], /online-classes, /offline-classes, /contact, /branches, /branches/[slug]
