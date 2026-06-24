import { Mail, MapPin, Phone } from 'lucide-react';
import contactQuoteImage from '../assets/site/section-contact-quote.jpg';
import { services } from '../data/services';

export function ContactForm() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            Request a quote or ask for advice
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Tell us what is happening, where you are based, and which service
            looks closest. We will come back with the next sensible step.
          </p>
          <div className="mt-8 space-y-4">
            <p className="flex items-center gap-3 text-sm font-semibold text-ink">
              <Phone className="text-brand-600" size={20} aria-hidden="true" />
              Phone: Add your phone number
            </p>
            <p className="flex items-center gap-3 text-sm font-semibold text-ink">
              <Mail className="text-brand-600" size={20} aria-hidden="true" />
              Email: Add your email address
            </p>
            <p className="flex items-center gap-3 text-sm font-semibold text-ink">
              <MapPin className="text-brand-600" size={20} aria-hidden="true" />
              Location: Mayo, Ireland and surrounding areas
            </p>
          </div>
          <figure className="mt-8 overflow-hidden rounded-lg border border-line bg-slate-50 shadow-sm">
            <img
              src={contactQuoteImage}
              alt="A desk prepared for a network consultation with laptop, router, cable tester, ethernet cable, phone, and network plan"
              className="h-72 w-full object-cover"
            />
          </figure>
        </div>

        <form className="rounded-lg border border-line bg-slate-50 p-5 shadow-sm sm:p-6">
          {/* TODO: Connect this form to Formspree, Netlify Forms, EmailJS, or a backend API before launch. */}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-ink">
              Name
              <input
                className="rounded-md border border-line bg-white px-3 py-3 text-sm font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                name="name"
                type="text"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Email
              <input
                className="rounded-md border border-line bg-white px-3 py-3 text-sm font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                name="email"
                type="email"
                autoComplete="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Phone
              <input
                className="rounded-md border border-line bg-white px-3 py-3 text-sm font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Business name
              <input
                className="rounded-md border border-line bg-white px-3 py-3 text-sm font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                name="businessName"
                type="text"
                autoComplete="organization"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Location
              <input
                className="rounded-md border border-line bg-white px-3 py-3 text-sm font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                name="location"
                type="text"
                autoComplete="address-level2"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Service required
              <select
                className="rounded-md border border-line bg-white px-3 py-3 text-sm font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                name="service"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-bold text-ink">
            Message
            <textarea
              className="min-h-36 rounded-md border border-line bg-white px-3 py-3 text-sm font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              name="message"
            />
          </label>
          <button
            type="button"
            className="mt-5 w-full rounded-md bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700 sm:w-auto"
          >
            Send enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
