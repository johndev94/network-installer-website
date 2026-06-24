import {
  Building2,
  Cable,
  Headphones,
  Home,
  KeyRound,
  Network,
  Router,
  ServerCog,
  Shield,
  Wifi,
} from 'lucide-react';
import { services } from '../data/services';
import { ServiceCard } from './ServiceCard';

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
    name: 'VPN Setup',
    description:
      'Remote access and site-to-site VPN setup for staff, offices, and approved users.',
    serviceId: 'vpn-setup',
    icon: KeyRound,
  },
  {
    name: 'Access Point Installation',
    description:
      'Mounted and configured access points to reduce dead zones and improve roaming.',
    serviceId: 'access-point-installation',
    icon: Network,
  },
  {
    name: 'Switching & VLANs',
    description:
      'Switch setup and practical network separation for offices and guest access.',
    serviceId: 'small-business-network-setup',
    icon: ServerCog,
  },
  {
    name: 'Guest WiFi Setup',
    description:
      'Separate guest WiFi for cafes, pubs, restaurants, shops, offices, and clinics.',
    serviceId: 'small-business-network-setup',
    icon: Shield,
  },
  {
    name: 'Home Office Setup',
    description:
      'Reliable WiFi, laptop connectivity, printers, VPN help, and basic security checks.',
    serviceId: 'home-office-setup',
    icon: Home,
  },
  {
    name: 'Remote Support',
    description:
      'Focused remote assistance for router, WiFi, VPN, and configuration questions.',
    serviceId: 'remote-support-session',
    icon: Headphones,
  },
  {
    name: 'Monthly Support Plans',
    description:
      'Ongoing help for small businesses that need regular support and check-ins.',
    serviceId: 'monthly-support-starter',
    icon: Building2,
  },
  {
    name: 'Network Troubleshooting',
    description:
      'On-site fault finding for unstable internet, slow WiFi, and unknown network setups.',
    serviceId: 'network-troubleshooting-visit',
    icon: Cable,
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            Network installation and support without the mystery
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Choose the service that fits your issue, or get in touch and we will
            recommend the simplest practical option.
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
                href={`#${service.id}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
