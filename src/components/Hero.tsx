import { ArrowDown, ArrowUpRight, Camera, CheckCircle2, Network, ShieldCheck, Wifi } from 'lucide-react';
import heroImage from '../assets/site/hero-network-installation.jpg';

const trustBullets = ['Local service in Mayo', 'Homes and businesses', 'Clear, practical advice'];

export function Hero() {
  return (
    <section id="home" className="hero-scene relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A tidy small business network cabinet with router, switch, WiFi access point, and diagnostic laptop"
          className="hero-photo h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="hero-shade absolute inset-0" />
      </div>
      <div className="hero-inner relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-copy">
          <p className="hero-intro flex items-center gap-2 text-sm font-bold text-brand-100">
            <ShieldCheck size={18} aria-hidden="true" />
            Ryan &amp; Devaney Network Solutions
          </p>
          <h1 className="hero-brand font-black text-white">RDNS</h1>
          <p className="hero-statement font-black text-white">
            <span className="sr-only">Connected. Secure. Protected.</span>
            <span className="rotating-words" aria-hidden="true">
              <span>Connected.</span>
              <span>Secure.</span>
              <span>Protected.</span>
            </span>
          </p>
          <p className="hero-description mt-5 max-w-lg text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Reliable WiFi, secure networks and CCTV.
            Professionally installed for homes and businesses across Mayo.
          </p>
          <div className="hero-actions mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="hero-primary inline-flex items-center justify-center gap-3 rounded-md bg-brand-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700">
              Request a Quote <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-3 rounded-md border border-white/40 bg-black/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15">
              Explore Our Services <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <ul className="hero-trust mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-white sm:text-sm">
            {trustBullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2">
                <CheckCircle2 className="shrink-0 text-brand-100" size={16} aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="connection-map" aria-hidden="true">
          <div className="connection-hub"><Network size={28} strokeWidth={1.5} /></div>
          <div className="connection-routes">
            {[{ icon: Wifi, label: 'WiFi' }, { icon: ShieldCheck, label: 'Security' }, { icon: Camera, label: 'CCTV' }].map(({ icon: Icon, label }) => (
              <div className="connection-route" key={label}>
                <span className="connection-line"><i /></span>
                <Icon size={22} strokeWidth={1.5} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
