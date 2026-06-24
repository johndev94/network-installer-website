import type { LucideIcon } from 'lucide-react';

type ServiceCardProps = {
  icon: LucideIcon;
  name: string;
  description: string;
  priceLabel: string;
  priceUnit: string;
  href: string;
};

export function ServiceCard({
  icon: Icon,
  name,
  description,
  priceLabel,
  priceUnit,
  href,
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-700">
        <Icon size={23} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-black text-ink">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{description}</p>
      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted">
            Starts at
          </p>
          <p className="text-lg font-black text-ink">
            {priceLabel}{' '}
            <span className="text-sm font-semibold text-muted">
              {priceUnit}
            </span>
          </p>
        </div>
        <a
          href={href}
          className="shrink-0 rounded-md border border-line px-3 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-600 hover:bg-blue-50"
        >
          View details
        </a>
      </div>
    </article>
  );
}
