import { Network } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
              <Network size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-black">RDNS</p>
              <p className="text-xs text-slate-300">
                Ryan &amp; Devaney Network Solutions
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Local networking, security and CCTV solutions for homes and
            businesses across Mayo.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-white">
            Services
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            WiFi, network installation, firewalls, secure remote access, CCTV
            systems and troubleshooting.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-white">
            Contact
          </h2>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>Phone: Add your phone number</p>
            <p>
              Email:{' '}
              <a href="mailto:johndevaney1@hotmail.com" className="hover:text-white">
                johndevaney1@hotmail.com
              </a>
            </p>
            <p>Location: Mayo, Ireland and surrounding areas</p>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            &copy; {new Date().getFullYear()} RDNS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
