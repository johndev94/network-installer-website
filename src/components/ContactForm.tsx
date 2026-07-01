import { CheckCircle2, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import contactQuoteImage from '../assets/site/section-contact-quote.jpg';
import { services } from '../data/services';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/johndevaney1@hotmail.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

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
              <a href="mailto:johndevaney1@hotmail.com" className="hover:text-brand-700">
                johndevaney1@hotmail.com
              </a>
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

        <form
          className="rounded-lg border border-line bg-slate-50 p-5 shadow-sm sm:p-6"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New RDNS website enquiry" />
          <input type="hidden" name="_template" value="table" />
          <label className="hidden" aria-hidden="true">
            Leave this field empty
            <input name="_honey" type="text" tabIndex={-1} autoComplete="off" />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-ink">
              Name
              <input
                className="rounded-md border border-line bg-white px-3 py-3 text-sm font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Email
              <input
                className="rounded-md border border-line bg-white px-3 py-3 text-sm font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                name="email"
                type="email"
                autoComplete="email"
                required
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
              required
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {status === 'sending' && <LoaderCircle className="animate-spin" size={18} />}
            {status === 'sending' ? 'Sending...' : 'Send enquiry'}
          </button>
          {status === 'sent' && (
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-700" role="status">
              <CheckCircle2 size={18} aria-hidden="true" />
              Thanks, your enquiry has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm font-semibold text-red-700" role="alert">
              We could not send your enquiry. Please email johndevaney1@hotmail.com directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
