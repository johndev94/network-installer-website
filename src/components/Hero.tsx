import {
  CheckCircle2,
  ShieldCheck,
  Wifi,
} from 'lucide-react';
import heroImage from '../assets/site/hero-network-installation.jpg';

const trustBullets = [
  'Local installation',
  'Clear fixed pricing',
  'Business and home support',
  'Remote and on-site help',
  'No confusing jargon',
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A tidy small business network cabinet with router, switch, WiFi access point, and diagnostic laptop"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/30" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:min-h-[760px] lg:grid-cols-[0.98fr_1.02fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold text-brand-100 shadow-sm backdrop-blur">
            <ShieldCheck size={18} aria-hidden="true" />
            Practical network installation in Mayo
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            Reliable WiFi, router, VPN and network installation for homes and
            small businesses
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Professional setup and troubleshooting for business WiFi, routers,
            firewalls, VPNs, switches, and home office networks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-700"
            >
              Request a Quote
            </a>
            <a
              href="#prices"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Services & Prices
            </a>
          </div>
          <ul className="mt-8 grid gap-3 text-sm font-semibold text-white sm:grid-cols-2">
            {trustBullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2">
                <CheckCircle2
                  className="shrink-0 text-brand-100"
                  size={18}
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-end justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-lg border border-white/15 bg-white/10 p-5 text-white shadow-soft backdrop-blur-md">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-200">Typical site visit</p>
                <h2 className="mt-1 text-2xl font-black">
                  Install, test, explain, hand over
                </h2>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-500 text-white">
                <Wifi size={27} aria-hidden="true" />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['WiFi', 'Router', 'VPN'].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-white/15 bg-white/10 p-3"
                >
                  <p className="text-xs text-slate-300">{item}</p>
                  <p className="mt-2 text-sm font-bold text-brand-100">Ready</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
