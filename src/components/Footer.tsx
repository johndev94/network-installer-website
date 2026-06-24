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
            <p className="text-lg font-black">Business Name Placeholder</p>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Independent network installation and support service. Brand names
            mentioned are trademarks of their respective owners.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-white">
            Services
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            WiFi installation, router and firewall setup, VPNs, access points,
            guest WiFi, home office setup, troubleshooting, and monthly support.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-white">
            Contact
          </h2>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>Phone: Add your phone number</p>
            <p>Email: Add your email address</p>
            <p>Location: Mayo, Ireland and surrounding areas</p>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            © {new Date().getFullYear()} Business Name Placeholder. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
