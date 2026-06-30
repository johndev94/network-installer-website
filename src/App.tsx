import {
  Building2,
  Cable,
  CreditCard,
  Home,
  Laptop,
  Router,
  Store,
  Stethoscope,
} from 'lucide-react';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { FeaturedPricingCarousel } from './components/FeaturedPricingCarousel';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { PricingCard } from './components/PricingCard';
import { ProcessSteps } from './components/ProcessSteps';
import { ServicesGrid } from './components/ServicesGrid';
import { WorkCarousel } from './components/WorkCarousel';
import { services } from './data/services';
import cleanInstallationImage from './assets/site/section-clean-installation.jpg';
import localBusinessesImage from './assets/site/section-local-businesses.jpg';
import networkProblemsImage from './assets/site/section-network-problems.jpg';

const problems = [
  'Slow WiFi',
  'Dead zones',
  'Unstable internet',
  'VPN not connecting',
  'Poor guest WiFi',
  'Messy cabling',
  'Old routers',
  'No one knowing how the network is set up',
  'Card machines, tills, phones, or booking systems dropping when the network fails',
];

const customers = [
  {
    title: 'Small businesses',
    description:
      'Reliable internet, WiFi, routers, switches, and simple documentation.',
    icon: Building2,
  },
  {
    title: 'Pubs and restaurants',
    description:
      'Guest WiFi, tills, card machines, booking systems, and staff devices.',
    icon: CreditCard,
  },
  {
    title: 'Cafes and shops',
    description:
      'Better coverage for customers, payment systems, staff laptops, and back offices.',
    icon: Store,
  },
  {
    title: 'Accountants and offices',
    description:
      'Secure VPN access, reliable WiFi, printers, and tidy small office networks.',
    icon: Laptop,
  },
  {
    title: 'Pharmacies and clinics',
    description:
      'Dependable connectivity for front desk systems, staff devices, and guest separation.',
    icon: Stethoscope,
  },
  {
    title: 'Holiday homes and rentals',
    description:
      'Practical WiFi improvements for guests, owners, cleaners, and remote checks.',
    icon: Home,
  },
  {
    title: 'Remote workers',
    description:
      'Home office WiFi, VPN help, video call reliability, and device connectivity.',
    icon: Router,
  },
  {
    title: 'Home offices',
    description:
      'Router placement, printers, work laptops, basic security, and coverage checks.',
    icon: Cable,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                  The problem
                </p>
                <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
                  Network problems cost you time and money and TESTING
                </h2>
                <p className="mt-5 text-base leading-7 text-muted">
                  When the network is unreliable, everything else gets harder.
                  Staff lose time, customers wait, card machines fail, phones drop,
                  and nobody is quite sure where the issue starts. We make the
                  setup clearer, more reliable, and easier to support.
                </p>
              </div>
              <figure className="overflow-hidden rounded-lg border border-line bg-slate-50 shadow-sm">
                <img
                  src={networkProblemsImage}
                  alt="A small business back office network setup with tangled cables, router equipment, phone, and diagnostic laptop"
                  className="h-72 w-full object-cover"
                />
                <figcaption className="border-t border-line px-5 py-4 text-sm font-semibold text-muted">
                  From unclear cabling and old routers to systems nobody can
                  explain, the first job is making the problem visible.
                </figcaption>
              </figure>
            </div>
            <div className="grid content-center gap-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="rounded-md border border-line bg-slate-50 px-4 py-3 text-sm font-semibold text-ink"
                >
                  {problem}
                </div>
              ))}
            </div>
          </div>
        </section>

        <WorkCarousel />
        <ServicesGrid />

        <section id="prices" className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
                Clear starting prices for common network jobs
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Prices are starting prices for labour and configuration. Final
                cost depends on site layout, hardware, cabling, travel, and
                complexity.
              </p>
            </div>
            <FeaturedPricingCarousel />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <PricingCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                Why us?
              </p>
              <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
                Practical IT help for places that do not have in-house support
              </h2>
              <figure className="mt-8 overflow-hidden rounded-lg border border-line bg-slate-50 shadow-sm">
                <img
                  src={cleanInstallationImage}
                  alt="A clean small office network cabinet with organized blue patch cables, router, switch, access point, laptop, and toolkit"
                  className="h-80 w-full object-cover"
                />
              </figure>
            </div>
            <div className="space-y-5 text-base leading-7 text-muted">
              <p>
                We help small businesses and home users get reliable, secure
                networks without unnecessary complexity. The focus is practical:
                clear pricing, clean installations, sensible recommendations,
                and work explained in plain English.
              </p>
              <p>
                We can work with routers, WiFi access points, switches, VPNs,
                guest WiFi, and small office networks. That makes us a good fit
                for businesses that need dependable connectivity but do not have
                a dedicated IT department.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                Who we help
              </p>
              <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
                Local support for everyday network problems
              </h2>
            </div>
            <figure className="mt-10 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
              <img
                src={localBusinessesImage}
                alt="A local small business counter with point-of-sale tablet, card terminal, laptop, WiFi access point, and network equipment"
                className="h-80 w-full object-cover sm:h-96"
              />
            </figure>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {customers.map((customer) => (
                <article
                  key={customer.title}
                  className="rounded-lg border border-line bg-white p-5 shadow-sm"
                >
                  <customer.icon
                    className="mb-4 text-blue-700"
                    size={26}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-black text-ink">
                    {customer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {customer.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProcessSteps />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
