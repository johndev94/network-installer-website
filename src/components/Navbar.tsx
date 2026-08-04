import { Menu, Network, Phone, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Prices', href: '#prices' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 shadow-[0_8px_30px_rgba(16,32,51,0.05)] backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Network size={22} aria-hidden="true" />
          </span>
          <span className="leading-tight text-ink">
            <span className="block text-xl font-black">RDNS</span>
            <span className="hidden text-xs font-semibold text-muted sm:block">
              Ryan &amp; Devaney Network Solutions
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-muted transition hover:bg-blue-50 hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+353894566776"
            className="inline-flex items-center gap-2 text-sm font-bold text-ink transition hover:text-brand-700"
          >
            <Phone size={18} aria-hidden="true" />
            089 456 6776
          </a>
          <a
            href="#contact"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-muted transition hover:bg-blue-50 hover:text-blue-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+353894566776"
              className="mt-2 inline-flex items-center gap-2 rounded-md border-t border-line px-3 pt-4 text-sm font-bold text-ink transition hover:text-brand-700"
              onClick={() => setOpen(false)}
            >
              <Phone size={18} aria-hidden="true" />
              089 456 6776
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
