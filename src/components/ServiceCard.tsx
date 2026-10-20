import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Service } from '../data/services';

type ServiceCardProps = {
  icon: LucideIcon;
  name: string;
  description: string;
  priceLabel: string;
  priceUnit: string;
  service: Service;
  onViewDetails: (service: Service) => void;
};

export function ServiceCard({
  icon: Icon,
  name,
  description,
  priceLabel,
  priceUnit,
  service,
  onViewDetails,
}: ServiceCardProps) {
  return (
    <article
      data-reveal
      data-service-id={service.id}
      className="service-card group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-soft"
    >
      <div className="service-icon mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-700 transition group-hover:bg-brand-50 group-hover:text-brand-700">
        <Icon size={23} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-black text-ink">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{description}</p>
      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted">
            {priceLabel === 'Custom quote' ? 'Pricing' : 'Starts at'}
          </p>
          <p className="text-lg font-black text-ink">
            {priceLabel}{' '}
            <span className="text-sm font-semibold text-muted">
              {priceUnit}
            </span>
          </p>
        </div>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-line px-3 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-600 hover:bg-blue-50"
          onClick={() => onViewDetails(service)}
        >
          View details
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
