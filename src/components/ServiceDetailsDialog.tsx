import { CheckCircle2, MessageSquareText, X } from 'lucide-react';
import { useEffect } from 'react';
import type { Service } from '../data/services';

type ServiceDetailsDialogProps = {
  service: Service | null;
  onClose: () => void;
  onRequestQuote: (service: Service) => void;
};

export function ServiceDetailsDialog({
  service,
  onClose,
  onRequestQuote,
}: ServiceDetailsDialogProps) {
  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, service]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-dialog-title"
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-ink to-slate-800 px-6 py-7 text-white sm:px-8">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
          <button
            type="button"
            autoFocus
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close service details"
            onClick={onClose}
          >
            <X size={20} aria-hidden="true" />
          </button>
          <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-brand-100">
            {service.category} service
          </p>
          <h2
            id="service-dialog-title"
            className="relative mt-3 max-w-2xl pr-12 text-3xl font-black tracking-tight sm:text-4xl"
          >
            {service.name}
          </h2>
          <p className="relative mt-4 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
            {service.fullDescription}
          </p>
        </div>

        <div className="grid gap-7 p-6 sm:p-8 md:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
              What is included
            </p>
            <ul className="mt-5 grid gap-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm font-semibold text-ink">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-brand-600"
                    size={18}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-line bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
              Guide price
            </p>
            <p className="mt-3 text-3xl font-black text-ink">{service.priceLabel}</p>
            <p className="mt-1 text-sm font-semibold text-muted">{service.priceUnit}</p>
            <p className="mt-5 border-t border-line pt-5 text-xs leading-5 text-muted">
              Final pricing depends on the site, equipment, cabling and installation requirements.
            </p>
            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
              onClick={() => onRequestQuote(service)}
            >
              <MessageSquareText size={18} aria-hidden="true" />
              Request a quote
            </button>
          </aside>
        </div>
      </section>
    </div>
  );
}
