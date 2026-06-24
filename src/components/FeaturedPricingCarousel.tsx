import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { services } from '../data/services';

const featuredIds = [
  'business-wifi-upgrade',
  'router-installation',
  'small-business-network-setup',
  'monthly-support-business',
];

const featuredServices = featuredIds
  .map((id) => services.find((service) => service.id === id))
  .filter((service) => service !== undefined);

export function FeaturedPricingCarousel() {
  const [active, setActive] = useState(0);
  const service = featuredServices[active];

  const previous = () => {
    setActive((current) =>
      current === 0 ? featuredServices.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActive((current) => (current + 1) % featuredServices.length);
  };

  if (!service) {
    return null;
  }

  return (
    <div className="mt-10 overflow-hidden rounded-lg border border-line bg-white shadow-soft">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <div className="bg-gradient-to-br from-blue-700 to-brand-700 p-6 text-white sm:p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-100">
            Featured option
          </p>
          <h3 className="mt-4 text-3xl font-black">{service.name}</h3>
          <p className="mt-4 text-sm leading-6 text-blue-50">
            {service.shortDescription}
          </p>
          <div className="mt-8 rounded-md bg-white/12 p-5">
            <p className="text-sm font-bold text-blue-50">Starting price</p>
            <p className="mt-2 text-4xl font-black">{service.priceLabel}</p>
            <p className="mt-1 text-sm text-blue-50">{service.priceUnit}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-muted">
            What is included
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-ink">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-brand-600"
                  size={18}
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`#${service.id}`}
              className="inline-flex justify-center rounded-md bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              View details
            </a>
            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <div className="flex gap-2">
                {featuredServices.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`h-2.5 rounded-full transition-all ${
                      active === index
                        ? 'w-8 bg-brand-600'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Show featured service ${index + 1}: ${item.name}`}
                    onClick={() => setActive(index)}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink transition hover:border-blue-600 hover:text-blue-700"
                  aria-label="Previous featured service"
                  onClick={previous}
                >
                  <ArrowLeft size={19} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink transition hover:border-blue-600 hover:text-blue-700"
                  aria-label="Next featured service"
                  onClick={next}
                >
                  <ArrowRight size={19} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
