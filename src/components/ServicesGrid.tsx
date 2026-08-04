import {
  Cable,
  Camera,
  Network,
  Router,
  ShieldCheck,
  Wifi,
} from 'lucide-react';
import { services } from '../data/services';
import { ServiceCard } from './ServiceCard';
import type { Service } from '../data/services';

const overviewServices = [
  {
    name: 'Business WiFi Installation',
    description:
      'Coverage planning, secure WiFi setup, access points, and testing for busy premises.',
    serviceId: 'business-wifi-upgrade',
    icon: Wifi,
  },
  {
    name: 'Router & Firewall Setup',
    description:
      'Router installation, WAN setup, admin handover, and sensible firewall configuration.',
    serviceId: 'router-installation',
    icon: Router,
  },
  {
    name: 'CCTV Installation',
    description:
      'Professionally planned camera systems with clear coverage and remote viewing.',
    serviceId: 'cctv-installation',
    icon: Camera,
  },
  {
    name: 'Access Point Installation',
    description:
      'Mounted and configured access points to reduce dead zones and improve roaming.',
    serviceId: 'access-point-installation',
    icon: Network,
  },
  {
    name: 'Network Security',
    description:
      'Firewalls, secure remote access and practical protection for connected systems.',
    serviceId: 'network-security-review',
    icon: ShieldCheck,
  },
  {
    name: 'Network Troubleshooting',
    description:
      'On-site fault finding for unstable internet, slow WiFi, and unknown network setups.',
    serviceId: 'network-troubleshooting-visit',
    icon: Cable,
  },
];

type ServicesGridProps = {
  onViewDetails: (service: Service) => void;
};

export function ServicesGrid({ onViewDetails }: ServicesGridProps) {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-50 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            Everything you need to connect and protect
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Practical solutions for homes and small businesses, installed and
            explained by a local team.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {overviewServices.map((item) => {
            const service = services.find(({ id }) => id === item.serviceId);

            if (!service) {
              return null;
            }

            return (
              <ServiceCard
                key={item.name}
                icon={item.icon}
                name={item.name}
                description={item.description}
                priceLabel={service.priceLabel}
                priceUnit={service.priceUnit}
                service={service}
                onViewDetails={onViewDetails}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
