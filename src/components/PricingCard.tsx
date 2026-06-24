import { CheckCircle2, Star } from 'lucide-react';
import type { Service } from '../data/services';

type PricingCardProps = {
  service: Service;
};

export function PricingCard({ service }: PricingCardProps) {
  return (
    <article
      id={service.id}
      className="scroll-mt-28 rounded-lg border border-line bg-white p-6 shadow-sm"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
            {service.category}
          </p>
          <h3 className="mt-2 text-xl font-black text-ink">{service.name}</h3>
        </div>
        {(service.popular || service.recommended) && (
          <span className="inline-flex items-center gap-1 rounded-md bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
            <Star size={14} aria-hidden="true" />
            {service.popular ? 'Popular' : 'Recommended'}
          </span>
        )}
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">
        {service.fullDescription}
      </p>
      <div className="mt-6 border-y border-line py-5">
        <p className="text-3xl font-black text-ink">{service.priceLabel}</p>
        <p className="mt-1 text-sm font-semibold text-muted">
          {service.priceUnit}
        </p>
      </div>
      <ul className="mt-5 space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm text-ink">
            <CheckCircle2
              className="mt-0.5 shrink-0 text-brand-600"
              size={17}
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
