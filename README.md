# Network Installation Website

Professional React, TypeScript, Vite, and Tailwind CSS website for a small networking, WiFi, and IT installation business in Mayo, Ireland.

## Run the project

```bash
npm install
npm run dev
npm run build
```

## Edit service prices

All service names, descriptions, features, prices, and badges live in:

```text
src/data/services.ts
```

To change a price, edit `priceLabel` and `priceFrom` for the relevant service. The pricing cards and service overview cards render from this file.

## Add a new service

Open `src/data/services.ts` and add a new object to the `services` array using the existing shape:

```ts
{
  id: 'new-service-id',
  name: 'New Service Name',
  category: 'business',
  shortDescription: 'Short card description.',
  fullDescription: 'Longer pricing card description.',
  priceLabel: 'From €123',
  priceFrom: 123,
  priceUnit: 'one-off',
  features: ['Feature one', 'Feature two'],
}
```

Use a unique `id`. The new service will automatically appear in the pricing section and contact form dropdown.

## Change contact details

Update the placeholder phone, email, and location text in:

```text
src/components/ContactForm.tsx
src/components/Footer.tsx
```

## Change business name

Update the placeholder business name in:

```text
src/components/Navbar.tsx
src/components/Footer.tsx
```

Also update any deployment or SEO settings if your host provides them.

## Change images and carousels

Website images live in:

```text
src/assets/site
```

The hero image is used in `src/components/Hero.tsx`. The installation carousel images and slide text are managed in `src/components/WorkCarousel.tsx`. The featured pricing carousel is managed in `src/components/FeaturedPricingCarousel.tsx` and still reads prices from `src/data/services.ts`.

## Connect the contact form later

The contact form is front-end only for now. In `src/components/ContactForm.tsx`, connect the form to one of these before launch:

- Formspree
- Netlify Forms
- EmailJS
- A backend API

The TODO comment in the form marks where this integration should be added.

## Brand wording note

The site is written as an independent network installation and support service. It does not claim to be an official DrayTek company, partner, or authorised installer.
