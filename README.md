# Network Installation Website

Professional React, TypeScript, Vite, and Tailwind CSS website for a small networking, WiFi, and IT installation business in Mayo, Ireland.

## Run the project

```bash
npm install
npm run dev
npm run build
```

## Host the production site

Build the site, then serve the generated `dist` folder with the included Node server:

```powershell
npm.cmd run build
npm.cmd run serve
```

By default this listens on port `8080`. To host on port `80` for router port forwarding, run PowerShell as Administrator and start it with:

```powershell
$env:PORT='80'; npm.cmd run serve
```

The server binds to `0.0.0.0`, so other devices on your network can reach it using this computer's LAN IP address. Forward external port `80` on your router to this computer's LAN IP and port `80`. Make sure Windows Firewall allows inbound TCP traffic on port `80`.

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
